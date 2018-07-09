// const Client = require('ftp');
// const fs = require('fs');

// const c = new Client();
// c.on('ready', function () {
//   c.get('http://www.dytt8.net/index.htm', function (err, stream) {
//     if (err) throw err;
//     stream.once('close', function () { c.end(); });
//     stream.pipe(fs.createWriteStream('阳光电影www.ygdy8.com.现在去见你.BD.720p.韩语中字.mkv'));
//   });
// });
// // connect to localhost:21 as anonymous
// c.connect();