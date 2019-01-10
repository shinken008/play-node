const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 8001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.listen(port)