const fs = require('fs')
const parser = require('@babel/parser')

const file = fs.readFileSync('./chalk.js', 'utf8')

const ast = parser.parse(file)

console.log(JSON.stringify(ast, null, "  "));