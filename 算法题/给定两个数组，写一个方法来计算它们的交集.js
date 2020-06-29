//给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
var nums1 = [1, 3, 3, 1, 1, 1];
var nums2 = [3, 3, 1];

// function demo(arr1, arr2) {
//     var obj = {};
//     var arr = [];
//     for (let item of arr1) {
//         obj[item] = obj[item] === undefined ? 1 : obj[item] + 1;
//     }
//     for (let value of arr2) {
//         if (obj[value] > 0) {
//             arr.push(value);
//             obj[value]--;
//         }
//     }
//     console.log(arr);
// }
// demo(nums1, nums2)






// 给定[A1, A2, B1, B2, , C1, C2, D1, D2];











// function demo(arr1, arr2) {
//     var obj = {};
//     var arr = [];
//     for (let item of arr1) {
//         if (obj[item] === undefined) {
//             obj[item] = 1;
//             arr.push(item)
//         }
//     }
//     console.log(arr);
// }


var nums1 = [1, 3, 3, 1, 1, 1];
var nums2 = [3, 3, 1];

function demo(data1, data2) {
    let obj = {};
    let res = [];
    for (const item of data1) {
        if (obj[item] === undefined) {
            obj[item] = 1;
        } else {
            ++obj[item];
        }
    }
    for (const value of data2) {
        if (obj[value] > 0) {
            res.push(value);
            obj[value]--;
        }
    }
    console.log(res);

}
demo(nums1, nums2)