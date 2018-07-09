const fs = require('fs');
const path = require('path')

fs.rename('full.png', 'full-rename.png', function(err, data) {
  console.log('修改成功')
})

fs.readFile('full-rename.png', function(err, data) {
  console.log(data)
})

// 读文件
function dll(dir) {
  let res = []
  // nodejs io操作都是buffer。
  for (let item of fs.readdirSync(dir)) {
    let filepath = path.join(dir, item)
    if (fs.statSync(filepath).isDirectory()) {
      res.push(...dll(filepath))
    } else {
      res.push(filepath)
    }
  }
  return res
}

console.log(dll('.'))
