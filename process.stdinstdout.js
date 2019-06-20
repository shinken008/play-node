// 标准输入
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (typeof chunk === 'string') {
    chunk = chunk.slice(0, -2); // 删除'\n'
    process.stdout.write(`stringLength:${chunk.length}\n`);
  }
  if (chunk === '') {
    process.stdin.emit('end');
    return
  }
  if (chunk !== null) {
    // 标准输出，相当于console.log
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});