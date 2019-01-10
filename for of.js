function delay(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, sec);
  })
}

async function countAsync() {
  var count = 20
  var arr = []
  while (count--) {
    arr.push(count)
  }

  for (const val of arr) {
    console.log('pre', val)
    await delay(1000)
    console.log('after', val)
  }

  // while (count--) {
  //   console.log('pre', count)
  //   await delay(1000)
  //   console.log('after', count)
  // }

}

// countAsync()

function countPromiseAll() {
  var count = 20
  var arr = []
  while (count--) {
    arr.push(count)
  }

  Promise.all(arr.map(async val => {
    console.log('pre', val)
    await delay(1000)
    console.log('after', val)
  }))
}

countPromiseAll()

