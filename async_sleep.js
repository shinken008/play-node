const sleep = delay => {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay)
  })
}

const execute = async _ => {
  const delay = 1000
  console.log('sleep execute %d ms', delay)
  await sleep(delay)
  console.log('execute success')
}

execute()