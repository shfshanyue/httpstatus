import Koa from 'koa'
import Router from 'koa-router'
import koaBody from 'koa-body'

const router = new Router()
const app = new Koa()

router.get('/api', ctx => {
  ctx.body = 'hello, world'
})

router.get('/api/cache-control', ctx => {
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

router.get('/api/cache-control/:duration', ctx => {
  ctx.set('Cache-Control', `max-age=${ctx.params.duration}`) 
  const headers = ctx.res.getHeaders()
  ctx.body = headers
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