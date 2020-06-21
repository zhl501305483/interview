// 继承1 ： 构造函数绑定    call/apply改变this指向

function Animal(color, size) {
    this.color = color;
    this.size = size;
    this.eat = '吃'
}

function Dog(color, size) {

    Animal.call(this, color, size)
}

var dog = new Dog('yellow', 'small')
console.log(dog);



// 继承2 ： 原型链继承1  如果替换了prototype对象，下一步必然是为新的prototype对象加上constructor属性，并将这个属性指回原来的构造函数。
function Father(){
    this.name = '张鹤雨'
}
Son.prototype = new Father;
function Son(){

}
var son = new Son();
console.log(son.name);
console.log(Son.prototype.constructor === Father);   //true 使用此方法后Son的原型的constructor指向Father
Son.prototype.constructor = Son;                     //需要手动修改为Son

// 继承2 ： 原型链继承2  如果替换了prototype对象，下一步必然是为新的prototype对象加上constructor属性，并将这个属性指回原来的构造函数。
// function inherit(target,origin){ 
//     var target = target || {};
//     target.prototype = origin.prototype;
//     target.prototype.constructor = target;

// }
// Father.prototype.name = 'Father Prototype' //因为不变的属性会放在prototype上，所以可以用原型链继承
//            //将构造函数指向Son
// function Father(){                          
//                                         // 缺点是：现在Son.prototype和 Father.prototype指向一个对象，如果修改其中一个，另一个必定会被影响

// }
// function Son(){

// }
// inherit(Son,Father)
// var son = new Son();
// var father = new Father();
// console.log(son.name);
// console.log(father.name);


// 继承3 ： 圣杯模式(比较完美的方式)

function inherit(target,origin){
    var F = function(){};
    F.prototype = origin.prototype;
    target.prototype = new F();
    target.prototype.constructor = target;
    target.uber = origin.prototype; //这一行放在这里，只是为了实现继承的完备性，纯属备用性质。
}
Father.prototype.name = '张鹤雨';
    
function Father(){
    this.name = 'aaa'
}
function Son(){
    
}
inherit(Son,Father)
var son = new Son()
var father = new Father();
console.log(son.name);