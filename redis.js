var redis = require("redis");
var client = redis.createClient({
  host: '192.168.11.29',
  port: '26004',
  // name: 'master-alliance',
  password: 'ZE9Y0@_redis',
});

// client.get('BFF:BATMAN:CONTANTS:CITYLIST', res => {
//   console.log(res)
// })