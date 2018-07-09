const fs = require('fs')
const co = require('co')
const profiler = require('v8-profiler')

function* A() {
  return yield Promise.resolve('A')
}

function* B() {
  return yield A()
}

co(function* coWrap() {
  const start = Date.now()
  profiler.startProfiling()
  while (Date.now() - start < 10000) {
    yield B()
  }
  const profile = profiler.stopProfiling()
  profile.export()
    .pipe(fs.createWriteStream('co.cpuprofile'))
    .on('finish', () => {
      profile.delete()
      console.error('co.cpuprofile export success')
    })
})