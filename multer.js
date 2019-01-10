var express = require('express')
var multer = require('multer')
var upload = multer()

var app = express()

app.get('/', function (req, res) {
  res.send(`<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
  <input type="text" name="name" />
  <input type="submit" />
</form>`)
  res.end()
})

app.post('/profile', upload.any(), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req)
  res.end('success')
})

app.listen(8000)
