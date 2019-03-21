// 1.原型继承
function Parent() {
  this.level = 'parent'
}

Parent.prototype.showLevel = function () {
  console.log(this.level)
}

function Child() {
  Parent.call(this) // call super constructor.
  this.level = 'child'
}

// 子类续承父类
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Parent

const child = new Child()
child.showLevel()

// 2.类继承
class Car {
  // 构造函数
  constructor() {
    this.carlevel = '1v'
    console.log('Car constructor')
  }
  // 原型方法
  showLevel() {
    console.log(this.level)
  }
  // 静态方法。只能通过构造函数调用，不会继承
  static sayHello() {
    console.log('hello world')
  }

  // Getter
  get level() {
    console.log('Car get level')
    return this.carlevel // 不能跟level同名(return this.level)，不然死循环
  }

  // Setter
  set level(value) {
    this.carlevel = value
    console.log('Car set level: ', value)
  }

}

const car = new Car()
car.showLevel()
// Car constructor
// Car get level
// 1v

class Baoma extends Car {
  
  constructor () {
    super()
    this.level = '2v'
  }
}

const baoma = new Baoma()
baoma.showLevel()
// Car constructor
// Car set level: 2v
// Car get level
// 2v
