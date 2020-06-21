/***
 * 
 * 
 * 
 * 冒泡排序
 * 算法时间复杂度：O(n²)
 * 算法空间复杂度：O(1)
 */


function bubbleSort(data) {
    let temp;
    for (var i = 0; i < data.length - 1; i++) {
        for (var j = 0; j < data.length - 1 - i; j++) {
            if (data[j + 1] < data[j]) {
                temp = data[j + 1];
                data[j + 1] = data[j];
                data[j] = temp;
            }
        }
    }
    console.log(data);
}

var arr = [1, 73, 98, 1, 5, 9, -14, 69, 2];
bubbleSort(arr)




/**
 * 
 * 选择排序(不稳定)
 *  平均复杂度：o(n^2)    空间复杂度：o(1)    稳定性：不稳定
        步骤： 1、每一次循环，找到最小的那个数，并用变量记住它的索引
               2、然后将最小值放在它该在的位置上
               3、持续对越来越少的元素重复上面的步骤
 */
var arr = [4, 73, 98, 5, 1, 9, -14, 69, 2];

function selectSort(data) {
    let temp;
    let index
    for (var i = 0; i < data.length - 1; i++) {
        index = i;

        for (var j = i + 1; j < data.length; j++) {
            if (data[j] < data[index]) {
                index = j;
            }
        }
        temp = data[i];
        data[i] = data[index];
        data[index] = temp;
    }
    console.log(data);
}
selectSort(arr)


/**
 * 
 * 插入排序
 * 平均复杂度：o(n^2)    空间复杂度：o(1)    稳定性：稳定

//        直接插入排序：将第一个数和第二个数排序，然后构成一个有序序列；
//        将第三个数插入进去，构成一个新的有序序列；对第四个数、第五个数......直到最后一个数，重复第二步
 */


function insertSort(data) {
    for (let i = 1; i < data.length; i++) {
        let preIndex = i - 1;
        let value = data[i];

        while (preIndex >= 0 && data[preIndex] > value) {
            data[preIndex + 1] = data[preIndex];
            preIndex--;
        }
        data[preIndex + 1] = value;
    }
    console.log(data);
}

insertSort(arr);



/**
 * 
 * 归并排序
 */
var arr = [1, 73, 98, 1, 5, 9, -14, 69, 2];

function mergeSort(data) {
    if (data.length < 2) {
        return data;
    }
    var mid = Math.floor(data.length / 2);
    var left = data.slice(0, mid);
    var right = data.slice(mid);
    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (left.length > leftIndex && right.length > rightIndex) {
        if (left[leftIndex] > right[rightIndex]) {
            result.push(right[rightIndex++])
        } else {
            result.push(left[leftIndex++])
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex))
}
mergeSort(arr)



/**
 * 快速排序
 */

var arr = [1, 73, 98, 1, 5, 9, -14, 69, 2];

function quickSort(data) {
    if (data.length < 2) {
        return data
    }
    var index = Math.floor(data.length / 2);
    var mid = data.splice(index, 1);
    var left = [];
    var right = [];
    for (const item of data) {
        if (item < mid) {
            left.push(item)
        } else {
            right.push(item)
        }
    }
    return quickSort(left).concat(mid).concat(quickSort(right))
}

quickSort(arr)


var arr = [1,2,3,3,3]