const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router()

const options = {
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:3000',
  preflightContinue: false,
}

router.get('/test', (ctx) => {
  console.log('hello')
  ctx.body = 'hello'
  ctx.throw(400, 'name required');
})

app
.use(cors(options))
.use(router.routes())
.use((ctx) => {
  console.log(ctx)
}).listen(8000)