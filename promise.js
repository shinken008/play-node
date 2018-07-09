// /* first step
function Promise(fn) {
  // 一个成功的回调 fn
  var callback
  // 一个实例方法，注册异步事件
  this.then = function then(done) {
    callback = done
  }
  function resolve(res) {
    callback(res)
  }
  fn(resolve)
}
// */

/* second step
function Promise(fn) {
  // 链式调用，多个callback
  var promise = this
      promise._resolves = []
      value = null
  // 一个实例方法，注册异步事件.每个then注册事件放在_resolves里 
  this.then = function then(onFulfilled) {
    promise._resolves.push(onFulfilled)
    return this
  }
  // 处理_resolves中的事件
  function resolve(value) {
    setTimeout(function() {
      promise._resolves.forEach(callback => {
        callback(value)
      })
    }, 0)
  }

  fn(resolve)
}
*/

/* third step 加入状态
function Promise(fn) {
  // 加入状态
  var promise = this
      promise._resolves = []
      promise._status = 'PENDING'
      value = null
  // 一个实例方法，注册异步事件.每个then注册事件放在_resolves里 
  this.then = function then(onFulfilled) {
    if (promise._status === 'PENDING') {
      promise._resolves.push(onFulfilled)
      return this
    }
    onFulfilled(value)
    return this
  }
  // 处理_resolves中的事件
  function resolve(value) {
    setTimeout(function () {
      promise._status = 'FULFILLED'
      promise._resolves.forEach(function(callback) {
        callback(value)
      })
    }, 0)
  }

  fn(resolve)
}
*/

/*
// 串行promise和异步结果的传递
function Promise(fn) {
  // 加入状态
  var promise = this
  promise._resolves = []
  promise.status = 'PENDING'
  value = null
  // 一个实例方法，注册异步事件.每个then注册事件放在_resolves里 
  this.then = function then(onFulfilled) {
    return new Promise(function(resolve) {
      // 加入handle方法验证then里面的参数
      // 如果不是函数则发生值穿透
      function handle(value) {
        var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
        resolve(ret)
      }
      if (promise.status === 'PENDING') {
        promise._resolves.push(onFulfilled)
      } else if (promise.status === 'FULFILLED') {
        handle(value)
      }
    })
  }
  // 处理_resolves中的事件
  function resolve(value) {
    setTimeout(function () {
      promise.status = 'FULFILLED'
      promise._resolves.forEach(callback => {
        callback(value)
      })
    }, 0)
  }

  fn(resolve)
}
*/

/*
// 添加对promise对象的判断
function Promise(fn) {
  // 加入状态
  var promise = this
  promise._resolves = []
  promise.status = 'PENDING'
  value = null
  // 一个实例方法，注册异步事件.每个then注册事件放在_resolves里 
  this.then = function then(onFulfilled) {
    return new Promise(function (resolve) {
      // 加入handle方法验证then里面的参数
      // 如果不是函数则发生值穿透
      function handle(value) {
        var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
        if (ret && typeof ret.then === 'function') {
          ret.then(function (val) {
            resolve(val)
          })
        }
        resolve(ret)
      }
      if (promise.status === 'PENDING') {
        promise._resolves.push(onFulfilled)
      } else if (promise.status === 'FULFILLED') {
        handle(value)
      }
    })
  }
  // 处理_resolves中的事件
  function resolve(value) {
    setTimeout(function () {
      promise.status = 'FULFILLED'
      promise._resolves.forEach(callback => {
        callback(value)
      })
    }, 0)
  }

  fn(resolve)
}
*/

// 添加拒绝方法，添加一个数组存放
/*
function Promise(fn) {
  // 加入状态
  var promise = this
  promise._resolves = []
  promise._rejects = []
  promise._status = 'PENDING'
  promise._value = null
  promise._reason = null
  // 一个实例方法，注册异步事件.每个then注册事件放在_resolves里 
  this.then = function then(onFulfilled, onRejected) {
    return new Promise(function (resolve) {
      // 加入handle方法验证then里面的参数
      // 如果不是函数则发生值穿透
      function handle(value) {
        var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
        if (ret && typeof ret.then === 'function') {
          ret.then(function (val) {
            resolve(val)
          }, function (reason) {
            reject(reason)
          })
        }
        resolve(ret)
      }
      function errback(reason) {
        var ret = typeof onRejected === 'function' && onRejected(reason) || reason
        reject(ret)
      }
      if (promise._status === 'PENDING') {
        promise._resolves.push(onFulfilled)
        promise._rejects.push(errback)
      } else if (promise._status === 'FULFILLED') {
        handle(promise._value)
      } else if (promise._status === 'REJECTED') {
        errback(promise._reason)
      }
    })
  }
  // 处理_resolves中的事件
  function resolve(value) {
    setTimeout(function () {
      promise._status = 'FULFILLED'
      promise._resolves.forEach(callback => {
        promise._value = callback(value)
      })
    }, 0)
  }

  function reject(reason) {
    setTimeout(function () {
      promise._status = 'REJECTED'
      promise._rejects.forEach(callback => {
        promise._reason = callback(reason)
      })
    }, 0)
  }

  fn(resolve, reject)
}
*/

/**
 * 用法
 */
// new Promise(function resolve(params) {
//   // 成功的回调
// }, function reject(params) {
//   // 失败的回调
// })



let myFirstPromise = new Promise(function (resolve, reject) {
  //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
  //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
  setTimeout(function () {
    // resolve("成功!"); //代码正常执行！
  }, 3000);
})

myFirstPromise.then(function (successMessage) {
  //successMessage的值是上面调用resolve(...)方法传入的值.
  //successMessage参数不一定非要是字符串类型，这里只是举个例子
  console.log("Yay! " + successMessage);
})