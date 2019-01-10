var ids = [id];
fetch(`http://batman-gateway.dianwoda.com/api/app/shop/list?ids=${ids.join(',')}`, { credentials: 'include' })
  .then(res => res.json())
  .then(res => {
    console.log(res.data)
    (res.data || []).map(shop => {
      const { id: userId, regionId, platformShopid: platformId, cityId } = shop
      const body = `userId=${userId}&cityId=${cityId}&regionId=${regionId}&platformId=${platformId}`
      fetch('http://batman-gateway.dianwoda.com/api/shop/recruit/riderPriceReset', { credentials: 'include', method: 'POST', body: `${body}` })
      .then(resp => resp.json())
      .then(resp => {
        console.log(`商家(${userId})重置成功 ===>`, resp.data)
      })
    })
  })