const net = require('net');

// net.createServer((socket) => {
//   socket.write('hello world\r\n')
//   socket.end()
// }).listen(8124);

net.createServer((socket) => {
  socket.pipe(socket)
}).listen(8124)