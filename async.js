// const fs = require('fs')
// const profiler = require('v8-profiler')

// async function A() {
//   return await Promise.resolve('A')
// }

// async function B() {
//   return await A()
// }

// (async function asyncWrap() {
//   const start = Date.now()
//   profiler.startProfiling()
//   while (Date.now() - start < 10000) {
//     await B()
//   }
//   const profile = profiler.stopProfiling()
//   profile.export()
//     .pipe(fs.createWriteStream('async.cpuprofile'))
//     .on('finish', () => {
//       profile.delete()
//       console.error('async.cpuprofile export success')
//     })
// })()

const promise = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
    console.log(time)
  }, 1000 * time);
})

// const arr = [1, 2, 3].map(async (time) => await promise(time))

// console.log('hello world')
// console.log(arr)

new Promise(async () => {
  const arr2 = await Promise.all([1, 2, 3].map((time) => promise(time)))
  console.log('hello world arr2', arr2)
})