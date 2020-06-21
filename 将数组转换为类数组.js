/**
 * 
 * 1.使用Array.from()方法
 */

// const obj = {
//     '0': 1,
//     '1': 2,
//     '2': 3,
//     length: 3
// }

// console.log(Array.from(obj));


/**
 * 
 * 2.使用Array.prototype.slice.call()
 */

// const obj = {
//     '0': 1,
//     '1': 2,
//     '2': 3,
//     length: 3
// }

// console.log(Array.prototype.slice.call(obj));



/**
 * 使用拓展运算符(注意： 该方法不能转换将普通对象格式转换为数组)
 */
function conversion(x,y){
    let arg = arguments;
    return [...arg]
}
conversion('name','age')  //返回["name","age"]

const obj = {
    '0': 1,
    '1': 2,
    '2': 3,
    length: 3
}

console.log([...obj]); //报错！！！！ TypeError: obj is not iterable(obj不是可迭代的)

