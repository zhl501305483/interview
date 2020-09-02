/**
 * 
 * 方法一、
 */

// function merge(data1, data2) {
//     let res = [];
//     let j = 0;
//     let temp = data2[j];
//     data1.forEach((item, index) => {


//         if (item.includes(temp)) {
//             res.push(item)
//         } else {
//             res.push(temp);
//             res.push(item);
//             temp = data2[++j];
//         }
//         if(index === data1.length - 1){
//             res.push(temp)
//         }
//     })
//     console.log(res);
// }

// var arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
// var arr2 = ['A', 'B', 'C', 'D']

// merge(arr1, arr2)


/**
 * 
 * 方法二
 */
var arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
var arr2 = ['A', 'B', 'C', 'D']

function merge(data1, data2) {
    let d2 = data2.map(item => item += 3);
    // console.log(d2);
    let mergeArr = data1.concat(d2).sort()
    // console.log(mergeArr);

    // let res = []

    // let res = mergeArr.map(item => {
    //     if (item.includes('3')) {
    //         return item.slice(0, 1)
    //     }
    //     return item
    // })

    for(let i = 0 ; i < mergeArr.length;i++){
        if(mergeArr[i].includes('3')){
            mergeArr[i] = mergeArr[i].slice(0,1)
        }
    }
    console.log(mergeArr);
    // console.log(res);
}


merge(arr1, arr2)