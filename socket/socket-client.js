const net = require('net')

// https://nodejs.org/dist/latest-v12.x/docs/api/net.html#net_socket_connect
const socket = net.connect({ host: 'localhost', port: 8124 }, () => {
  console.log('connected to server')
})

socket.on('connect', function () {
  socket.write('hello world')
})

socket.on('data', function (data) {
  console.log('receive data:', data.toString())
})