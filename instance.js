const People = function() {
  this.height = '180cm'
  // this.say = function say() {
  //   console.log('hello world')
  // }
}
People.prototype.say = function say() {
  console.log('i am prototype')
}
const tom = new People()

console.log(tom instanceof People)
console.log(tom.say)
tom.say()