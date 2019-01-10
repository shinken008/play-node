const Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

var a = [1, 2, 3, 4, 5, 6, 7]

// suite.add('Array.from', function () {
//   Array.from(a)
// })
//   .add('destructuring', () => {
//     [...a]
//   })
//   .add('Array.map', () => {
//     a.map(_ => _)
//   })
//   .on('cycle', function (event) {
//     console.log(String(event.target));
//   })
//   .on('complete', function () {
//     console.log('Fastest is ' + this.filter('fastest').map('name'));
//   })
//   .run({ 'async': true });



suite.add('for of', forOf)
  .add('promise all', promiseAll)
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true });

let count = 1000
const promises = []
while (count) {
  promises.push(new Promise(function (resolve, reject) {}))
  count = count - 1
}

async function forOf() {
  const defer = makeDefer()
  for (const iterator of countArr) {
    await defer.p
  }
}

async function promiseAll() {
  const defer = makeDefer()
  await Promise.all(countArr.map(l => defer.p))
}

function makeDefer() {
  const a = {}
  a.p = new Promise(function (resolve, reject) {
    a.resolve = resolve
    a.reject = reject
  })
  return a
}

