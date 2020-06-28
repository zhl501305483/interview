// var arr1 = [33, 4, 1, 5, 66, 1];
// var arr2 = [4, 1, 33, 96, 5, 63];
var arr1 = [1,2,2,1];
var arr2 = [2]
/***
 * # 求并集 (无重复)
 */
// var result = [...new Set(arr1.concat(arr2))];
// console.log(result);


/**
 * 求交集
 */

var res = arr1.filter(item => arr2.includes(item));
console.log(res);



/**
 * 求差集
 * 
 */

// var result = [...new Set(arr1.concat(arr2))].filter(item => !res.includes(item))
// console.log(result);