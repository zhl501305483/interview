# 普通函数与ES6中箭头函数里，this指向的问题

## 一、普通函数中this

（1）总是代表着它的直接调用者，如obj.fn，fn里的最外层this就是指向obj

（2）默认情况下，没有直接调用者，this指向window

（3）严格模式下（设置了'use strict'），this为undefined

（4）当使用call，apply，bind（ES5新增）绑定的，this指向绑定对象

注释：

1. call 方法第一个参数是this的指向，后面传入的是一个参数列表。当第一个参数为null、undefined的时候，默认指向window。如：getColor.call(obj, 'yellow', 'blue', 'red')

2. apply 方法接受两个参数，第一个参数是this的指向，第二个参数是一个参数数组。当第一个参数为null、undefined的时候，默认指向window。如：getColor.apply(obj, ['yellow', 'blue', 'red'])

3. bind 方法和 call 方法很相似，第一个参数是this的指向，从第二个参数开始是接收的参数列表。区别在于bind方法返回值是函数以及bind接收的参数列表的使用。低版本浏览器没有该方法，需要自己手动实现

4. 以上 call，apply，bind 方法是ES5新增，如果想要了解更多可以自行百度谷歌研究一下(*^▽^*)    

## 二、ES6箭头函数中this

（1）默认指向定义它时，所处上下文的对象的this指向。即ES6箭头函数里this的指向就是上下文里对象this指向，偶尔没有上下文对象，this就指向window

（2）即使是call，apply，bind等方法也不能改变箭头函数this的指向

一些实例加深印象

（1）hello是全局函数，没有直接调用它的对象，也没有使用严格模式，this指向window
```
function hello() { 
   console.log(this);  // window 
}  
hello();
（2）hello是全局函数，没有直接调用它的对象，但指定了严格模式（'use strict'），this指向undefined

function hello() { 
   'use strict';
   console.log(this);  // undefined
}  
hello();
```
（3）hello直接调用者是obj，第一个this指向obj，setTimeout里匿名函数没有直接调用者，this指向window
```
const obj = {
    num: 10,
   hello: function () {
    console.log(this);    // obj
    setTimeout(function () {
      console.log(this);    // window
    });
   }    
}
obj.hello();
```
（4）hello直接调用者是obj，第一个this指向obj，setTimeout箭头函数，this指向最近的函数的this指向，即也是obj
```
const obj = {
    num: 10,
   hello: function () {
    console.log(this);    // obj
    setTimeout(() => {
      console.log(this);    // obj
    });
   }    
}
obj.hello();
```
（5）diameter是普通函数，里面的this指向直接调用它的对象obj。perimeter是箭头函数，this应该指向上下文函数this的指向，这里上下文没有函数对象，就默认为window，而window里面没有radius这个属性，就返回为NaN。
```
const obj = {
  radius: 10,  
  diameter() {    
      return this.radius * 2
  },  
  perimeter: () => 2 * Math.PI * this.radius
}
console.log(obj.diameter())    // 20
console.log(obj.perimeter())    // NaN
```