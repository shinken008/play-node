const http = require('http');
const { createHash } = require('crypto');

const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'

const httpServer = http.createServer().listen(3000, () => console.log('server started in 3000'));

/** Opening Handshake */
httpServer.on('upgrade', (req, socket, head) => {
  console.log('client connecting');
  /** switch ws protocol */
  if (req.headers.upgrade.toLowerCase() === 'websocket') {
    /** Receiving data */
    // socket.on('data', socketOnData.bind(socket));
    socket.on('data', socketOnData);
    const key = req.headers['sec-websocket-key'].trim();
    const digest = createHash('sha1')
        .update(key + GUID)
        .digest('base64');
  
    const headers = [
      'HTTP/1.1 101 Switching Protocols',
      'Upgrade: websocket',
      'Connection: Upgrade',
      `Sec-WebSocket-Accept: ${digest}`
    ];
    socket.write(headers.concat('\r\n').join('\r\n'));
    /** send Ping */
    setInterval(() => sendPing(socket), 60 * 1000)
  }

  socket.on('timeout', () => {
    console.log('socket timeout', Date.now());
  });

  socket.on('close', () => {
    console.log('socket close', Date.now());
  });
})

function socketOnData(buffer) {
  console.log('start: ', Date.now());
  const fin = buffer[0] & 0x80; // 第一个字节 与2^7做与运算
  const opcode = buffer[0] & 0x0f; // 第一个字节 与2^4 - 1做与运算
  const mask = buffer[1] & 0x80; // 第二个字节 与2^7做与运算。用于标识PayloadData是否经过掩码处理，客户端发出的数据帧需要进行掩码处理，所以此位是1。数据需要解码。
  const payloadLength = buffer[1] & 0x7f; // 第二个字节 与2^7 - 1
  console.log('buffer[0]: ', buffer[0]);
  console.log('fin: ', fin);
  console.log('opcode: ', opcode);
  console.log('mask: ', mask);
  console.log('payloadLength: ', payloadLength);
  if (opcode === 0x9) { // 收到Ping，返回Pong
    sendPong(this);
    console.log('Ping...');
  }
  if (opcode === 0xA) { // 收到Pong，socket接口保活
    console.log('Pong...');
  }
}

function sendPing(socket) {
  socket.write(Buffer.from(['0x89', '0x0']))
}

function sendPong(socket) {
  socket.write(Buffer.from(['0x8A', '0x0']))
}
