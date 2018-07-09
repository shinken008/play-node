class Square {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    // super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
    this.height = 100;
    this.width = 100;
    this.value
  }

  get area() {
    console.log('get')
    return this.value = this.height * this.width;
  }

  set area(value) {
    console.log('set', value)
    return this.value = value;
  }
}

const squrare = new Square()
squrare.area = 10
// console.log(squrare.area(100))
