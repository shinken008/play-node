const net = require('net');

net.createServer((socket) => {
  socket.pipe(socket)
}).listen(8124, () => {
  console.log('server started');
})

