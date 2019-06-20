const fs = require('fs')
const readable = fs.createReadStream('./screenshot.png')
const writable = fs.createWriteStream('./screenshot_new.png')

readable.pipe(writable)