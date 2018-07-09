// const util = require('util')
// const EventEmitter = require('events')

// function MyStream() {
//   EventEmitter.call(this)
// }

// util.inherits(MyStream, EventEmitter)
// const stream = new MyStream()

// console.log(stream instanceof EventEmitter);
// console.log(MyStream.super_ === EventEmitter);


// MyStream.prototype.write = function (data) {
//   this.emit('data', data)
// }

// stream.on('data', function (data) {
//   console.log('event emit: ' + data)
// })

// stream.write('hello world')


//// es6
const EventEmitter = require('events')

class MyStream extends EventEmitter {
  write(data) {
    this.emit('data', data)
  }
}

const stream = new MyStream()

stream.on('data', function (data) {
  console.log('event emit: ' + data)
})

stream.write('hello world')
