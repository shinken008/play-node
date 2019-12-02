const net = require('net')

const socket = net.connect({ host: 'localhost', port: 8124 })

socket.on('connect', function () {
  socket.write('hello world')
})

socket.on('data', function (data) {
  console.log('receive data:', data.toString())
})