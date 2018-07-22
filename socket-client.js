const net = require('net')

// const socket = net.connect({ host: process.argv[2], port: 22 })
// socket.setEncoding('utf8')

// socket.on('data', function (chunk) {
//   console.log('SSH server version: %j', chunk.trim())
//   socket.end()
// })

const socket = net.connect({ host: 'localhost', port: 8124 })

socket.on('connect', function () {
  socket.write('hello world')
})

socket.on('data', function (data) {
  console.log(data.toString())
})