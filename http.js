const http = require('http');

// const server = http.createServer((req, res) => {
//   // req 是一个 http.IncomingMessage 实例，它是可读流。
//   // res 是一个 http.ServerResponse 实例，它是可写流。

//   let body = '';
//   // 接收数据为 utf8 字符串，
//   // 如果没有设置字符编码，则会接收到 Buffer 对象。
//   req.setEncoding('utf8');

//   // 如果添加了监听器，则可读流会触发 'data' 事件。
//   // req.addListener
//   req.on('data', (chunk) => {
//     body += chunk;
//   });

//   // 'end' 事件表明整个请求体已被接收。 
//   req.on('end', () => {
//     try {
//       const data = body && JSON.parse(body);
//       // 响应一些信息给用户。
//       res.write(typeof data);
//       res.end();
//     } catch (er) {
//       // json 解析失败。
//       res.statusCode = 400;
//       return res.end(`错误: ${er.message}`, 'utf-8');
//     }
//   });
// });

const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
});

server.listen(80)