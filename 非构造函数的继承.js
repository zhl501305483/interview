// 1.浅拷贝1(不常见)
// var person={
//     blood:'red'
// }



// function object(obj){
//     var F = function(){}
//     F.prototype = obj;
//     return new F();
// }

// var chinese = object(person);
// console.log(chinese.blood);


// 2.浅拷贝

// function clone(target,origin){
//     var target = target || {};
//     for (var key in origin) {
//         if (origin.hasOwnProperty(key)) {
//             target[key] = origin[key]

//         }
//     }
//     return target;
// }

// var person={
//     blood:'red',
//     card:['vista','rujia']
// }


// var chinese = clone(chinese,person);
// console.log(chinese); //{ blood: 'red', card: [ 'vista', 'rujia' ] }
// chinese.card.shift(); //此方法如果拷贝项为数组或对象，那么更改其中一个引用类型的值，另一个也会改变
// console.log(chinese); //{ blood: 'red', card: [ 'rujia' ] }
// console.log(person);  //{ blood: 'red', card: [ 'rujia' ] }


// 3.深拷贝


function deepClone(origin, target) {
    var target = target || {};
    for (var key in origin) {

        if (typeof origin[key] === 'object') {
            target[key] = Object.prototype.toString.call(origin[key]) === '[object Object]' ? {} : [];
            deepClone(origin[key], target[key]);
        } else {
            target[key] = origin[key];
        }

    }
    return target;
}
var obj = {
    name: 'zhl',
    age: 21,
    card: ['vista', 'rujia', 'hanting']
}
var obj1 = deepClone(obj);

console.log(obj1);
obj1.card.push('add')

console.log(obj1);
console.log(obj);