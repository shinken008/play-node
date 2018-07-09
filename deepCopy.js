/**
 * 深拷贝
 */

/**
 * 浅拷贝，只拷贝对象第一层
 */

function shallowCopy (object) {
  const keys = Object.keys(object)
  const result = {}
  for(const key of keys) {
    result[key] = object
  }
  return result
}

var a = {
  name: 'hello',
  child: [],
}

console.log('shallowCopy', shallowCopy(a))

/**
 * 深拷贝
 * 这张的深拷贝有个问题，堆栈循环引用会爆栈
 */

function deepCopy(object) {
  const keys = Object.keys(object)
  const result = {}
  for (const key of keys) {
    if (Object.prototype.toString.call(object[key]) === '[object Object]') {
      deepCopy(object[key])
    } else {
      result[key] = object
    }
  }
  return result
}

var b = {
  name: 'hello',
  child: {
    name: 'world',
    child: [],
  },
}

console.log('deepCopy', deepCopy(b))

/**
 * 为了解决循环引用的问题
 */


 function deepCopyPro (object) {
  const map = new WeakMap()
  function doCopy(object) {
    const exist = map.get(object)
    if (exist) {
      return exist
    }
    const keys = Object.keys(object)
    const result = {}
    map.set(object, result)
    for (const key of keys) {
      if (Object.prototype.toString.call(object[key]) === '[object Object]') {
        doCopy(object[key])
      } else {
        result[key] = object
      }
    }
    return result
  }

  return doCopy(object)

 }

var c = {
  name: 'hello',
}
c.child = c

console.log('deepCopyPro', deepCopyPro(c))