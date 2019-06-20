const fs = require('fs')
const path = require('path')
const app = require('http').createServer(handler)
const io = require('socket.io').listen(app)

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8')

function handler(req, res) {
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'))
  res.end(html)
}

function tick() {
  const now = new Date().toUTCString()
  console.log(now)
  io.sockets.send(now)
}

setInterval(tick, 1000);

app.listen(3000, () => console.log('server start in http://localhost:3000'))