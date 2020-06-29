// 数组去重：
// 方法一
var arr = [1, 1, 2, 4, 5, 6, 5, 7.2];
var newArr = arr.reduce(function (pre, value) {
    if (pre.includes(value)) {
        return pre;
    } else {
        return pre.concat(value)
    }
}, [])
console.log(newArr);

// 方法二
// var obj = {

// };
// var tempArr = [];
// var arr = [1, 1, 2, 4, 5, 6, 5, 7.2];

// function quchong() {
//     for (var i = 0; i < arr.length; i++) {

//         if (obj[arr[i]] == undefined) {
//             obj[arr[i]] = 1;
//             tempArr.push(arr[i]);
//         }
//     }
//     console.log(tempArr);
// }

// quchong()

// // 方法三
// function unique(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) { //第一个等同于第二个，splice方法删除第二个
//                 arr.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return arr;
// }
// var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
// console.log(unique(arr))
// //[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了




// // 方法四
// var arr = [2, 2, 5, 1, 8, 1, 9, 2, 8];
// var newArr = []

// function demo(data) {
//     for (var i = 0; i < data.length; i++) {
//         if (data.indexOf(data[i]) == i) {
//             newArr.push(data[i])
//         }
//     }
// }
// demo(arr)
// console.log(newArr);


// //方法五
var arr = [2, 2, 5, 1, 8, 1, 9, 2, 8, 2];

function unquire(a) {
    let temp = a;
    for (let i = 0; i < temp.length - 1; i++) {
        for (let j = i + 1; j < temp.length; j++) {
            if (temp[j] === temp[i]) {
                temp.splice(j, 1)
            }
        }
    }
    console.log(temp);
    console.log(a);
}
unquire(arr)


//方法六： 通过new Set方法创建一个数据结构
// var arr = [2, 2, 5, 1, 8, 1, 9, 2, 8];
// let temp =[...new Set(arr)]
// console.log(temp);


//方法七：利用new Set配合Array.from(Array.from可以将类数组转化为数组)

// var arr = [2, 2, 5, 1, 8, 1, 9, 2, 8];
// let temp = Array.from(new Set(arr));
// console.log(temp);