var jwt = require('jsonwebtoken');
var token = jwt.sign({}, 'e83aea16481e953f966b3e98b7ffd152cd05b9cf');

console.log(token)
const jwtInfo = jwt.decode(token, 'e83aea16481e953f966b3e98b7ffd152cd05b9cf')
console.log(jwtInfo)

// var jwt = require('jwt-simple');
// var payload = { };
// var secret = 'e83aea16481e953f966b3e98b7ffd152cd05b9cf';

// const token = jwt.encode(payload, secret, 'HS256')

// const jwtInfo = jwt.decode(token, secret)

// console.log('token === ', token)
// console.log('jwtInfo === ', jwtInfo)
// console.log('jwtInfo.exp === ', jwtInfo.exp)

const { DisconfClient } = require('@dwd/config-client')

const disconf = new DisconfClient({
  conf_server_host: 'http://disconf-test.dianwoda.com',
  app: 'westlake',
  version: '1_0_0_0',
  env: 'dev',
})
async function test() {
  const disconfInfo = await disconf.getConfig('application.properties', DisconfClient.TYPES.FILE)
  console.log('disconfInfo', disconfInfo)
}

test()
