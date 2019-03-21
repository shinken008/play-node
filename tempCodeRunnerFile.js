Parent.prototype.showLevel = function () {
  console.log(this.level)
}

function Child() {
  Parent.call(this)
  this.level = 'child'
}

const child = new Child()

child.showLevel()
