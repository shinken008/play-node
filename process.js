
setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0)
process.nextTick(function A() {
  console.log(1);
  process.nextTick(function B() {
    console.log(2);
    process.nextTick(function B() {
      console.log(3)
    });
  });
});
console.log(4)

// setImmediate(function A() {
//   console.log(1);
//   setImmediate(function B() { console.log(2); });
// });

// setTimeout(function timeout() {
//   console.log('TIMEOUT FIRED');
// }, 0);

// console.log(3)