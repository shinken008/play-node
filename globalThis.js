// 'use strict';
// (function() {
//   if (typeof globalThis === 'object') { return }
//   Object.defineProperty(Object.prototype, '__magic__', {
//     get: function() { return this },
//     configurable: true,
//   })
//   __magic__.globalThis = __magic__
//   delete Object.prototype.__magic__
// }())

// 不使用'use strict';
// (function () {
//   this.globalThis = this
// }())
// console.log(globalThis)

// proposal-globalThis 。nodejs this会有问题，浏览器正常
'use strict';
(function (global) {
  if (!global.globalThis) {
    if (Object.defineProperty) {
      Object.defineProperty(global, 'globalThis', {
        configurable: true,
        enumerable: false,
        value: global,
        writable: true
      });
    } else {
      global.globalThis = global;
    }
  }
})(typeof this === 'object' ? this : Function('return this')())

console.log(globalThis)