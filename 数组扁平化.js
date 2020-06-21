/**
 * 
 * 
 * 方法一、: 使用for循环判断
 */
var arr = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
// var result = [];
// function flatten(data) {

//     const temp = Object.prototype.toString;
//     for(let i = 0 ; i < data.length ; i++){
//         if(temp.call(data[i]) == '[object Array]'){
//             flatten(data[i])
//         }else{
//             result.push(data[i]);
//         }
//     }
//     return result
// }
// flatten(arr)



/**
 * 
 * 方法二、使用reduce方法
 */
var arr = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
const fun = function (data) {
  return data.reduce((prev, item) => {
    return prev.concat(Array.isArray(item) ? fun(item) : item)
  }, [])

}
fun(arr)

/**
 * 方法三、
 */
var arr = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
let flag = arr.some((item) => Array.isArray(item));

while (arr.some((item) => Array.isArray(item))) {
  arr = [].concat(...arr)
}
console.log(arr);


/**
 * 方法四、使用toString()
 */

var arr = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

console.log(arr.toString().split(',').map(Number));




