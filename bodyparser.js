const http = require('http')
const querystring = require('querystring')
/**
 *  1.text/plain
 *  2.application/json 跟上者类似只是结果需求json字符串JSON.parse
 *  3.application/x-www-form-urlencoded 跟上者类似只是结果需求json字符串querystring.parse
*/
// 服务端代码如下。text/plain类型处理比较简单，就是buffer的拼接。
function parsePostBody (req, done) {
  const chunk = []
  req.on('data', buff => {
    chunk.push(buff)
  })
  req.on('end', () => {
    done(chunk)
  })
}

http.createServer((req, res) => {
  parsePostBody(req, (chunk) => {
    // 1.
    // const body = chunk.toString()
    // res.end(`Your nick is ${body}`)
    // 2.
    // const body = JSON.parse(chunk)
    // res.end(`Your nick is ${body.nick}`)
    // 3.
    const body = querystring.parse(chunk.toString())
    res.end(`Your nick is ${body.nick}`)
  })
}).listen(3000)