const koa = require('koa')

const app = new koa()

app.use((ctx) => {
  console.log(ctx)
}).listen(3000)