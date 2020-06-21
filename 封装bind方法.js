/**
 * 
 * 
 * 封装bind方法
 * 
 * 
 */

let obj = {

    color: 'blue',
    love: 'zhy'
}

function tempFun() {
    console.log(this.color);
    console.log(this.love);
    console.log(arguments);
}

Function.prototype.bind = function (obj1) {
    var argArr = [].slice.call(arguments, 1);
    var self = this;
    return function () {
        self.apply(obj1,argArr.concat([].slice.call(arguments,0)))
    }
}


var zhl = tempFun.bind(obj, 1, 2, 3)
zhl(4,5,6)