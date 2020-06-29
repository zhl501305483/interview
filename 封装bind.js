var obj = {
    name: 'zhl',
    age: 14,
    sex: 'male'
}

function demo() {
    console.log(arguments);
    console.log(this.name);
    console.log(this.age);
    console.log(this.sex);
}
Function.prototype.bind = function (obj) {
    var arg = Array.prototype.slice.call(arguments, 1);
    var self = this;
    return function () {
        self.apply(obj, arg.concat(Array.prototype.slice.call(arguments, 0)))
    }
}

var temp = demo.bind(obj, 1, 2, 3, 4)
temp(5, 6)