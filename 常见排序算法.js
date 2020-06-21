// 测试用例：
var arr = [1, 2, 34, 56, 6, 7, 45, 3, 12, 4, 9, 8];
// 一、选择排序
//        平均复杂度：o(n^2)    空间复杂度：o(1)    稳定性：不稳定
//         步骤： 1、每一次循环，找到最小的那个数，并用变量记住它的索引
//               2、然后将最小值放在它该在的位置上
//               3、持续对越来越少的元素重复上面的步骤

// function sort1(data) {
//     let minNumIndex,temp;
//     for (let i = 0; i < data.length - 1; i++) {
//         minNumIndex = i;
//         for (let j = i + 1; j < data.length; j++) {
//             if(data[j] < data[minNumIndex]){
//                 minNumIndex = j
//             }
//         }
//         temp = data[i];
//         data[i] = data[minNumIndex]
//         data[minNumIndex] = temp
//     }
//     console.log(data);
// }
// sort1(arr)

// 二、 冒泡排序 时间复杂度:  O(n2)

//        平均复杂度：o(n^2)    空间复杂度：o(1)    稳定性：稳定

//        步骤： 1、比较相邻的元素。如果第一个比第二个大，就交换他们两个；

//              2、对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样，最后的元素应该会是
//              3、针对所有的元素重复以上的步骤，除了
//              4、持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

// function bubbleSort(data) {
//     var temp;
//     for (let i = 0; i < data.length - 1; i++) { //控制循环趟数
//         for (let j = 0; j < data.length - 1 - i;j++) { //将相邻的两个元素,两两比较,每次将最大值放到数组最后
//             if (data[j + 1] < data[j]) {
//                 temp = data[j + 1]
//                 data[j + 1] = data[j]
//                 data[j] = temp
//             }
//         }
//     }
//     console.log(data);
// }

// bubbleSort(arr)

// 三、插入排序  

//        平均复杂度：o(n^2)    空间复杂度：o(1)    稳定性：稳定

//        直接插入排序：将第一个数和第二个数排序，然后构成一个有序序列；
//        将第三个数插入进去，构成一个新的有序序列；对第四个数、第五个数......直到最后一个数，重复第二步


// var arr = [1, 2, 34, 56, 6, 7, 45, 3, 12, 4, 9, 8];

// function insertSort(data) {
//     var preIndex, current;
//     for(let i = 1 ; i < data.length ; i ++) {
//         preIndex = i - 1; //已排序数组中最后一个下标
//         value = data[i];    //当前需要排序的数
//         //让待排序的值与排序好的数组值进行比较
//         while(preIndex >= 0 && data[preIndex] > value){
//             data[preIndex + 1] = data[preIndex];
//             preIndex -- ;
//         }
//         data[preIndex + 1 ] = value;
//     }
//     console.log(data);
// }
// insertSort(arr)


// 4.合并排序(分而治之)
// 时间复杂度:  O(nlog2n)        空间复杂度: O(n)
// 1.不断将数组对半分，直到每个数组只有一个
// 2.将分出来的部分重新合并
// 3.合并的时候按顺序排列

// function mergeSort(data) {
//     // 只有一个数的时候退出递归
//     if (data.length < 2) {
//         return data;
//     }
//     var mid = Math.floor(data.length / 2);
//     var left = data.slice(0, mid);
//     var right = data.slice(mid);


//     // 递归
//     // 不断拆分只到一个数组只有一个数
//     return merge(mergeSort(left), mergeSort(right));


// }

// function merge(left, right) {
//     var result = []
//     var left_index = 0;
//     var right_index = 0;
//     // 将两个数组合并
//     // 合并的时候按从小到大的顺序
//     while (left.length > left_index && right.length > right_index) {
//         if (left[left_index] > right[right_index]) {
//             result.push(right[right_index++])
//         } else {
//             result.push(left[left_index++])
//         }
//     }
//     return result.concat(left.slice(left_index)).concat(right.slice(right_index))
// }
// mergeSort(arr)



/**
 * 
 * 5.快速排序
 * 平均时间复杂度：O(nlog2n)    空间复杂度O(log2n)
 */

var arr = [1, 2, 34, 56, 6, 7, 45, 3, 12, 4, 9, 8];

function quickSort(data) {
    if (data.length < 2) {
        return data
    }
    var index = Math.floor(data.length / 2);
    var mid = data.splice(index, 1)
    var left = [];
    var right = [];
    for (let item of data) {
        if (item < mid) {
            left.push(item);
        } else {
            right.push(item);
        }
    }
    return quickSort(left).concat(mid, quickSort(right));
}

quickSort(arr)