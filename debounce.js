var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** npx tsc debounce.ts --experimentalDecorators --emitDecoratorMetadata --target ES5 */
function Debounce(delay) {
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.timer) {
                return;
            }
            this.timer = setTimeout(function () {
                method.apply(_this, args);
            }, delay);
        };
        return descriptor;
    };
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.onKeyUp = function () {
        console.log('execute');
    };
    __decorate([
        Debounce(1000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Foo.prototype, "onKeyUp", null);
    return Foo;
}());
var fo = new Foo();
fo.onKeyUp();
