/** Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy */

// 1.handler对象方法.一个对象，其属性是当执行一个操作时定义代理的行为的函数.let p = new Proxy(target, handler);
const handler = {
  get: function(target, name) {
    return (name in target) ? target[name] : 37
  },
}

const p1 = new Proxy({}, handler)
p1.a = 1

console.log(p1.c)

// 2.无操作转发代理
const target = {}

const p2 = new Proxy(target, {})

p2.a = 1

console.log(target.a)

// set 验证
let validator = {
  set: function (obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;
  }
};


let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age);
// 100

// person.age = 'young'; 

// arr
let targetArr = [2]
const proxy = new Proxy(targetArr, {})

proxy[0] = 1

console.log('array', targetArr[0])
console.log('proxy', proxy[0])

