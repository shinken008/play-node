/** npx tsc debounce.ts --experimentalDecorators --emitDecoratorMetadata --target ES5 */
function Debounce(delay: number): any {
  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value
    descriptor.value = function (...args) {
      if (this.timer) {
        return
      }
      this.timer = setTimeout(() => {
        method.apply(this, args)
      }, delay)
    }
    return descriptor
  }
}

class Foo {
  @Debounce(1000)
  onKeyUp() {
    console.log('execute')
  }
}

const fo = new Foo()

setInterval(fo.onKeyUp, 30)