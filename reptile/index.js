const cheerio = require('cheerio')
const request = require('request')

const baseUrl = 'http://www.24en.com/read/story/'

const run = async () => {
  const page = 1
  let result = await promises(page)
  while (result.list.length) {
    result = await promises(result.page)
  }
}

const promises = (page) => new Promise((resolve, reject) => {
  const pageUrl = `${baseUrl}index_${page}.html`
  const opt = {
    url: pageUrl
  }
  request(opt, (err, res, body) => {
    if (err) {
      reject()
    }
    const list = []
    const $ = cheerio.load(body)
    const items = $('.pub_news_list .item').not('.item.ad880x130')
    const len = items.length
    console.log('>>>>>>>>>>>>>page', page)
    if (!len) {
      console.log('>>>>>>>>>>>>>last page', page)
      resolve({
        page,
        list,
      })
    } else {
      for (let i = 0; i < len; i ++) {
        const item = $(items[i])
        const title = item.find('h3').text()
        const href = item.find('a').attr('href')
        const desc = item.find('p').text()
        const filename = href.split('/').pop()
        const id = +filename.split('.')[0]
        list.push({
          title,
          href,
          desc,
          id,
        })
      }
      console.log('list', list)
      resolve({
        list,
        page: page + 1,
      })
    }
  }) 
})

run()

