const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'image/png' })
  fs.createReadStream('./screenshot.png').pipe(res)
}).listen(3000)