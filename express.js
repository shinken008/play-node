const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fs = require('fs')

console.log(process.env)

const app = express()

app.use(bodyParser())

app.use(cookieParser())

app.use((req, res, next) => {
  console.log('test')
  next()
})

app.get('/jsonp', (req, res) => {
  const callback = req.query.callback
  const data = "hello world"
  res.send(`${callback}("${data}")`)
})
app.get('/greetings', (req, res) => {
  const data = "hello world"
  res.send(data)
})

app.get('/', async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const data = await fs.readFileSync('./index.html')
  res.write(data.toString())
  res.end()
})

app.listen(8001, () => {
  console.log('app run on port 8001')
})