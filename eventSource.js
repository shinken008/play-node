/**
 * server-sent events使用的单向通信的原理，不同于socket这种
 * 全双工通信，sse有一个信息源，通过服务器传输，客户端负责监听发起
 * 服务器http连接以及监听数据流（类似于视频），建立长链接后能接受
 * 服务端的推送消息（流）。而socket是全双工通信，客户端既可以是浏
 * 览器也可以是服务端，通信建立在ws协议基础上，持有一个ws长连接
 */
const express = require('express')

const app = express()

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <script>
    /* 发起http连接 */
    var source = new EventSource('sse');
    source.onmessage = function (event) {
      var data = event.data;
      console.log(data)
    };
  </script>
</body>
</html>
`

app.get('/sse', function (req, res) {
  console.log(`connect start ${req.url}`)
  res.writeHead(200, {
    'Content-type': 'text/event-stream',
    'Connection': 'keep-alive',
  })
  res.write('id: ' + 1 + '\n');
  /* 单条以'\n'结尾 */
  res.write('data: ' + 1 + '\n')
  const interval = setInterval(function () {
    /** 最后一条用'\n\n结尾' */
    res.write("data: " + 2 + '\n\n');
  }, 1000)
  /** json data
   *data: {\n
   *data: "msg": "hello world",\n
   *data: "id": 12345\n
   *data: }\n\n
   */
  /* 监听连接断开清楚计时器 */
  req.connection.addListener("close", function () {
    console.log('connect closed')
    clearInterval(interval);
    res.end()
  }, false)
})

app.get('/', function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' })
  res.write(html)
  res.end()
})

app.listen(8000, function () {
  console.log('====== app start in 8000 =======')
})