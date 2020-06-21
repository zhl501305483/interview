/**
 * 
 * 情人节福利题：如何实现一个new
 * 
 */
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    return 1;
};

// function _new(fn, ...arg) {
//     var obj = Object.create(fn.prototype);
//     var res = fn.apply(obj, arg);
//     return res instanceof Object ? res : obj;
// }



var p = new Person('zhl', 14, 'male');
console.log(p);

