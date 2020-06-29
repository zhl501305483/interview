var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/**
 * 
 一、不使用递归
 */
// function binarySearch(data, value) {
//     var left = 0;
//     var right = data.length - 1;
//     while (left <= right) {
//         var mid = Math.floor((left + right) / 2);
//         if (data[mid] == value) {
//             return mid;
//         } else if (data[mid] > value) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return -1;
// }

// binarySearch(arr, 6)


/*******
 * 使用递归
//  */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function binarySearch(data, value, start, end) {
//     if (start > end) {
//         return -1
//     }
//     var start = start || 0;
//     var end = end || data.length - 1;

//     var mid = parseInt(start + (end - start) / 2);
//     if (value == data[mid]) {
//         return mid;
//     } else if (value > data[mid]) {
//         return binarySearch(data, value, mid + 1, end);
//     } else {
//         return binarySearch(data, value, start, mid - 1);
//     }
//     return -1;
// }
function binary_search2(data, key, low, high) {
    if (low > high) {
        return -1;
    }
    var low = low || 0;
    var high = high || data.length - 1;
    var mid = Math.floor((high + low) / 2);
    if (data[mid] == key) {
        return mid;
    } else if (data[mid] > key) {
        high = mid - 1;
        return binary_search2(data, key, low, high);
    } else if (data[mid] < key) {
        low = mid + 1;
        return binary_search2(data, key, low, high);
    }
}
console.log(binary_search2(arr, 8));
console.log(binary_search2(arr, 7));
console.log(binary_search2(arr, 4));
console.log(binary_search2(arr, 1));