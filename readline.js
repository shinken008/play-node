const fs = require('fs');
const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: '请输入> '
// });

// rl.prompt();

// rl.on('line', (line) => {
//   switch (line.trim()) {
//     case 'hello':
//       console.log('world!');
//       break;
//     default:
//       console.log(`你输入的是：'${line.trim()}'`);
//       break;
//   }
//   rl.prompt();
// }).on('close', () => {
//   console.log('再见!');
//   process.exit(0);
// });

// const rl = readline.createInterface({
//   input: fs.createReadStream('mvc.html'),
//   crlfDelay: Infinity
// });

// rl.on('line', (line) => {
//   console.log(`文件的单行内容：${line}`);
// });

// 流
// const rr = fs.createReadStream('mvc.html')
// rr.on('readable', () => {
//   console.log(`readable: ${rr.read()}`);
// });

const rr = readline.createInterface({
  input: fs.createReadStream('mvvm.html')
})

rr.on('line', (line) => {
  console.log(line)
})
