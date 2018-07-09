const fs = require('fs')
const profiler = require('v8-profiler')

profiler.startProfiling()
setTimeout(() => {
  console.log(1)
}, 0);
setImmediate(() => {
  console.log(0)
}, 0);
const profile = profiler.stopProfiling()
profile.export()
  .pipe(fs.createWriteStream('eventloop.cpuprofile'))
  .on('finish', () => {
    profile.delete()
    console.error('eventloop.cpuprofile export success')
  })
