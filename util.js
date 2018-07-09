const querystring = require('querystring')

let obj = { a: { b: { c: 1 } } }

// console.log(querystring.stringify(obj))

const obj2 = JSON.parse(JSON.stringify(obj))

console.log(querystring.stringify([1, 2, 3, 4]))