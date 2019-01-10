// const fs = require('fs')
// const profiler = require('v8-profiler')

// // console.log('1')

// setTimeout(function () {
//   console.log('2')
//   process.nextTick(function () {
//     console.log('3')
//   })
//   new Promise(function (resolve) {
//     console.log('4')
//     resolve()
//   }).then(function () {
//     console.log('5')
//   })
// })
// // process.nextTick(function () {
// //   console.log('6')
// // })
// // new Promise(function (resolve) {
// //   console.log('7')
// //   resolve()
// // }).then(function () {
// //   console.log('8')
// // })

// setTimeout(function () {
//   console.log('9')
//   process.nextTick(function () {
//     console.log('10')
//   })
//   new Promise(function (resolve) {
//     console.log('11')
//     resolve()
//   }).then(function () {
//     console.log('12')
//   })
// }, 2)

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function () {
  console.log('promise1');
}).then(function () {
  console.log('promise2');
});

console.log('script end');