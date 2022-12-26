import Koa from 'koa'
import Router from 'koa-router'
import koaBody from 'koa-body'
import cookie from 'cookie'
import * as _ from 'midash'
import cors from '@koa/cors'
import { createWriteStream } from 'fs'

import OSS from 'ali-oss'
import { createReadStream } from 'fs'
import { resolve } from 'path'
import { Stream } from 'stream'
import { nextTick } from 'process'

const sleep = (seconds: number) => new Promise(resolve => setTimeout(resolve, seconds))

const client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: process.env.ACCESS_KEY_ID as string,
  accessKeySecret: process.env.ACCESS_KEY_SECRET as string,
  bucket: 'shanyue-static'
})

const router = new Router()
const app = new Koa({
  proxy: true
})

router.get('/api', ctx => {
  ctx.body = 'hello, world'
})

router.get('/api/cache', ctx => {
  const { cacheControl, age } = ctx.query
  if (cacheControl) {
    ctx.set('Cache-Control', cacheControl)
  }
  if (age) {
    ctx.set('Age', age)
  }
  const headers = ctx.res.getHeaders()
  ctx.body = headers
})

router.get('/api/cache/:duration', ctx => {
  ctx.set('Cache-Control', `max-age=${ctx.params.duration}`) 
  const headers = ctx.res.getHeaders()
  ctx.body = headers
})

router.get('/api/cookies', ctx => {
  const cookies = cookie.parse(ctx.req.headers.cookie || '')
  ctx.body = cookies || {}
})

router.get('/api/cookies/set/:key/:value', ctx => {
  const { key, value } = ctx.params;
  ctx.cookies.set(key, value, {
    ..._.pick(ctx.query, [
      'maxAge',
      'path',
      'domain',
      'sameSite'
    ]) as any,
    maxAge: Number(ctx.query.maxAge || 0) * 1000,
    httpOnly: ctx.query.httpOnly === 'true',
    secure: ctx.query.secure === 'true'
  });
  ctx.redirect('/api/cookies')
})

router.get('/api/stream', async ctx => {
  const res = ctx.res;
  res.statusCode = 200;
  ctx.set('Transfer-Encoding', 'chunked');
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>测试页面</title>
    </head>
    <body>`
  )
  await sleep(2000)
  res.write('<h1>hello, shanyue</h1>')
  await sleep(2000)
  res.write('<div>这里是大段文字，将会延迟两秒才会正常渲染</div>')
  await sleep(2000)
  res.write('<div>这里又是大段文字，将会延迟两秒才会正常渲染</div>')
  await sleep(1000)
  res.write('代码: https://github.com/shfshanyue/httpstatus/blob/master/api/index.ts')
  res.end(`
    </body>
    </html>
  `)
})

router.post('/api/upload-jpeg', async (ctx, next) => {
  const random = Math.random().toString(16)
  const r = await client.putStream(`demo/${random}.jpg`, ctx.req)
  ctx.body = {
    src: `https://static.shanyue.tech/${r.name}`
  }
})

app.use(async (ctx, next) => {
  if (ctx.query.cors === 'true') {
    await cors({
      origin: ctx.query.origin as string || undefined,
      credentials: ctx.query.credentials === 'true'
    }).call(this, ctx, next)
  } else {
    await next()
  }
})

app.use(koaBody())
app
  .use(router.routes())
  .use(router.allowedMethods())

export default app.callback()

if (require.main) {
  app.listen(8000, () => {
    console.log('Listing 8000')
  })
}