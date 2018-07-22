const iconv = require('iconv-lite')
const urlencode = require('urlencode')

function encode(str, charset) {
  let encodeStr = ''
  const buffer = iconv.encode(str, charset)
  for (let index = 0; index < buffer.length; index++) {
    const element = buffer[index];
    const hex = element.toString(16)
    if (hex.length === 1) {
      encodeStr += '0' + hex
    }
    encodeStr += '%' + hex
  }

  return encodeStr.toUpperCase()
}

console.log(encode('阿', 'gbk')) // %B0%A2
console.log(encode('21', 'gbk')) // %32%31
console.log(encode('we', 'gbk')) // %77%65
console.log(urlencode.encode('阿', 'gbk')) // %B0%A2
console.log(urlencode.encode('21', 'gbk')) // %32%31
console.log(urlencode.encode('we', 'gbk')) // %77%65

// gbk编码格式所有字符用gbk编码。数字，英文字母也会转化