const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const fs = require('fs')

// Using Hash objects as streams
// hash.on('readable', () => {
//   const data = hash.read();
//   if (data) {
//     console.log(data)
//     console.log(data.toString('hex'));
//     // Prints:
//     //   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
//   }
// });

// hash.write('some data to hash');
// hash.end();

// Using Hash and piped streams

// const input = fs.createReadStream('index.html');
// input.pipe(hash).pipe(process.stdout);

hash.update('some data to hash');
console.log(hash.digest('hex'));