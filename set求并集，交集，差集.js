
const arr1 = [33, 22, 55, 33, 11, 33, 5];
const arr2 = [22, 55, 77, 88, 88, 99, 99];
/**
 * 
 * 并集
 */


// var result = Array.from(new Set(arr1.concat(arr2)))
// console.log(result);


// var result = [...new Set(arr1.concat(arr2))]
// console.log(result);


/**
 * 
 * 交集
 */

 var cross = [...new Set(arr1)].filter(item=> arr2.indexOf(item) > -1);
 console.log(cross);


/**
 * 
 * 差集
 */

var poor = [...new Set(arr1.concat(arr2))].filter(item=> cross.indexOf(item) <= -1)
console.log(poor);

