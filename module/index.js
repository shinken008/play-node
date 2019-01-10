/*
每一个node.js执行文件，都自动创建一个module对象，同时，module对象会创建一个叫exports的属性，初始化的值是 {}
``` example.js
// 1.
module.exports = function example() {}
module.exports.a = function a(){}
// 2.用了exports.a不能用module.exports。否则a不能导出来，因为对module.exports重新赋值了
// 需要这么写exports = module.exports = function example() { console.log('example') }
module.exports.a = function a(){}
exports.a = function a(){}
```
``` index.js
const { a } = require('example.js')
const example = require('example.js')
```
note: 不能对exports重新赋值，exports指向module.exports创造的对象，exports = {}，将exports失败，因为nodejs模块系统读的是module.exports
实现：
```
function require() {
  ((module, exports) => {
    exports = somefunc // 都指向初始的地址
    module.exports = somefunc
  })(module, module.exports)
  return module;
}
```
note：module.exports = some 或者exports = some都使其值改变，最终require取的是module.exports的地址，exports = module.exports让module.exports对象重新赋值给exports，统一了地址指向
*/

// const { a, b } = require('./example.js')
const example = require('./example.js')

// a()
// console.log(b)
console.log(example)