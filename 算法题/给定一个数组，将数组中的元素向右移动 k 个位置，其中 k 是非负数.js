/**
 * 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
输出: [5, 6, 7, 1, 2, 3, 4]
解释:
向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
 */


/**
 * 方法一
 */
var arr = [1, 2, 3, 4, 5, 6, 7];

// function rotate(data, k) {
//     if (k === 0) {
//         return data;
//     }
//     var len = data.length;
//     var left = [];
//     var right = [];
//     for (let i = 0; i < len; i++) {
//         var item = data[i];
//         if ((len - 1) - i <= k - 1) {   
//             left.push(item)
//         }else{
//             right.push(item)
//         }
//     }

//     return left.concat(right);
// }
// rotate(arr,2)


/***
 * 方法二
 */
function rotate(data, k) {
    if(k < 0){
        return null
    }
    for (let i = 0; i < k; i++) {
        var temp = data.pop();
        data.unshift(temp);
    }
    return data
}
rotate(arr, 3)