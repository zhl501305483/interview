/**
 * 1.Symbol
 */
const info = {
    [Symbol('a')]: 'b'
}
// Symbol作为键值是非字符串，代表唯一值
console.log(info);
console.log(Object.keys(info)); //Symbol类型不可枚举，Object.keys：遍历对象的key键


/**
 * 2.padStart方法:在字符串开头添加填充，(如果方法里面的数字小于调用者的长度，那么不会进行填充)
 */


const name = 'Lydia Hallie'
console.log(name.padStart(13)); //输出: Lydia Hallie (注意：L前面有空格,因为name长度为12<13，所以在开头添加空格)
console.log(name.padStart(3)); //输出:Lydia Hallie

/**
 * 3.Object.seal(obj)方法防止对象添加、删除、  但可以对属性进行修改！！！
 */
const person = {name: 'zhl'}
Object.seal(person)



// var a = [1,2,3,[4,10,3,100,500,[6,13,89,1,1,3]]];
// function demo(data){
//     let temp = data.toString().split(',');
//     return Array.from(new Set(temp)).sort((a,b)=> a-b).map(Number)
// }

// demo(a)