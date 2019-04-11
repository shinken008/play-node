/**
 * reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。
 * 这些方法与处理器对象的方法相同。Reflect不是一个函数对象，因此它是不可构造的
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */

class Greeting {

  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${name}`;
  }

}

// ES5 style factory:
// function greetingFactory(name) {
//   var instance = Object.create(Greeting.prototype);
//   Greeting.call(instance, name);
//   return instance;
// }

// ES6
function greetingFactory(name) {
  return Reflect.construct(Greeting, [name], Greeting);
}

console.log(greetingFactory('test'))

// Reflect.set 等于

// Reflect.has 等于 in 操作


// Reflect.ownKeys 等于 Object.getOwnPropertySymbols + Object.getOwnPropertyNames