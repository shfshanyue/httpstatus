import Koa from 'koa'
import Router from 'koa-router'
import koaBody from 'koa-body'
import cookie from 'cookie'
import * as _ from 'midash'

const router = new Router()
const app = new Koa()

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
  const { key, value } = ctx.params
  ctx.cookies.set(key, value, {
    ..._.pick(ctx.query, [
      'maxAge',
      'path',
      'domain'
    ]) as any,
    maxAge: Number(ctx.query.maxAge || 0) * 1000,
    httpOnly: ctx.query.httpOnly === 'true',
    secure: Boolean(ctx.query.secure)
  })
  ctx.redirect('/api/cookies')
})

app.use(koaBody())
app
  .use(router.routes())
  .use(router.allowedMethods())

export default app.callback()

if (require.main) {
  app.listen(3000, () => {
    console.log('Listing 3000')
  })
}