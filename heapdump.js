/** kill -USR2 <pid> */
const heapdump = require('heapdump')
let leakObject = null
let count = 0

setInterval(function testMemoryLeak() {
  const originLeakObject = leakObject
  function unused() {
    if (originLeakObject) {
      console.log('originLeakObject')
    }
  }
  unused()
  leakObject = {
    count: String(count++),
    leakStr: new Array(1e7).join('*'),
    leakMethod: function () {
      console.log('leakMessage')
    }
  }
}, 1000)