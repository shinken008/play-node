const generateArr = () => {
  const arr = []
  let randomLen = Math.ceil(Math.random() * 10)
  while(randomLen) {
    const randomValue = Math.random()
    arr.push(randomValue)
    randomLen --
  }
  return arr
}

const arr = generateArr()

const getCount = async count => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(count)
    }, 1000)
  })
}

const getTotalCount = _ => {
  return Promise.all(arr.map(async count => {
    return await getCount(count)
  }))
}

const execute = async _ => {
  const totalCount = await getTotalCount()
  console.log('totalCount', totalCount)
}

execute()