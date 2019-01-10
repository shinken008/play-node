var ALY = require('aliyun-sdk');

var cdn = new ALY.CDN({
  accessKeyId: "accessKeyId",
  secretAccessKey: "secretAccessKey",
  endpoint: 'https://cdn.aliyuncs.com',
  apiVersion: '2014-11-11'
});

cdn.refreshObjectCaches({
  ObjectType: 'File',
  ObjectPath: 'http://assets.dianwoda.cn/*/1.4.39/main.js'
}, function (err, res) {
  console.log(err, res);
});
