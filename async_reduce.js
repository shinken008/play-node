function fetchList(cityId) {
  return new Promise(function (resolve) {
    const random = Math.random() * 10000
    // const url = `http://shield.dianwoda.cn/order/his/list?cityId=${cityId}&orderId=&code=&state=&platformIds=&riderId=&shopId=&toTel=&finishTmMin=2018-11-13&finishTmMax=2018-11-13&currentPage=1&pageSize=40`
    // setTimeout(() => {
    //   fetch(url).then(res => res.json()).then(res => resolve(res.data.totalCount))
    // }, random);
    setTimeout(() => {
      resolve(cityId)
    }, random);
  })
}

var getTotal = async _ => {
  // const total = await window.__data.citySortList.reduce(async (preValP, { cityId, cityName }) => {
  const total = await [{ cityId: 1 }, { cityId: 2 }].reduce(async (preValP, { cityId }) => {
    const preVal = await preValP
    const current = await fetchList(cityId)
    const total = current + preVal
    console.log('prevalTotal >>>>>> total=%d', total)
    console.log('current >>>>>>> city=%s cityId=%d, count=%d', 'name', cityId, current)
    return total
  }, Promise.resolve(0))
  return total
}

const execute = async _ => {
  const totalCount = await getTotal()
  console.log('totalCount', totalCount)
}

execute()

