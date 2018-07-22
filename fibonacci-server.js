const http = require('http')
const debug = require('debug')('http')
const cp = require('child_process')

const input = parseInt(process.argv[2], 10)

http.createServer(function (req, res) {
  debug(req.method + ' ' + req.url + ' ' + new Date() + ' start')
  const child = cp.fork(__filename, [ req.url.slice(1) ])
  child.on('message', function (data) {
    res.end(data, function () {
      debug(req.method + ' ' + req.url + ' ' + new Date() + ' end')
    })
  })
  console.log(11)
}).listen(3000)

function fib(n) {
  if (n < 2) {
    return 1
  } else {
    return fib(n - 2) + fib(n - 1)
  }
}