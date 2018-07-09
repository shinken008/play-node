const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fs = require('fs')

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

app.get('/', async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const data = await fs.readFileSync('./index.html')
  res.write(data.toString())
  res.end()
})

app.listen(3000, () => {
  console.log('app run on port 3000')
})