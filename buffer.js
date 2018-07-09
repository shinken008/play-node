const fs = require('fs')

// const buf = Buffer.from([1, 2, 3]);

// console.log(buf[Symbol.iterator])

// for (const b of buf) {
//   console.log(b)
// }

// fs.readFile('./full.png', function(err, data) {
//   console.log(data)
// })
// const data = fs.readFileSync('./full.png')
// console.log(data)
fs.readlink('https://codelabs.developers.google.com/codelabs/webrtc-web/img/a803d28bc7109d5c.png', function(err, data) {
  console.log(data)
})
