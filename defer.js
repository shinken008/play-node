const fs = require('fs')

class DeferWrapper { }
function createDefer() {
  const defer = new DeferWrapper();
  const promise = new Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  defer.promise = promise;
  return defer;
}

// how to use
function readFile(filePath) {
  const defer = createDefer()
  fs.readFile(filePath, (err, buf) => {
    if (err) {
      defer.reject(err)
    } else {
      defer.resolve(buf)
    }
    defer = null
  })

  return defer.promise
}
(async () => {
  const data = await readFile('./data.json')
  console.log(data)
})()

console.log(1111)