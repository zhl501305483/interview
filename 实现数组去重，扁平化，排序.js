
/**
 * 
 * 实现数组去重，扁平化，排序
 */

var a = [1, 4, 2, 6, [5, 9, 2, 1],
    [10, -1, 7, 33, 6]
];







// function demo(data) {

//     let b = data.reduce((prev, item) => prev.concat(Array.isArray(item) ? demo(item) : item), [])
//     var temp;
//     // var tempArr = []
//     for (let i = 0; i < b.length - 1; i++) {
//         for (let j = 0; j < b.length - 1 - i; j++) {
//             if (b[j + 1] < b[j]) {
//                 temp = b[j + 1];
//                 b[j + 1] = b[j];
//                 b[j] = temp;
//             }
//         }
//     }
//     // 去重1
//     // b.forEach((item, index) => {
//     //     if (b.indexOf(item) === index) {
//     //         tempArr.push(item)
//     //     }
//     // })
//     // 去重2
//     // let c =  b.reduce((prev,item)=>{
//     //    return  prev.includes(item) ?  prev : prev.concat(item)
//     // },[])

//     // 去重3
//     // var obj = {},
//     //     arr = [];
//     // for(let i = 0 ; i < b.length ; i ++){
//     //     if(obj[b[i]] == undefined){
//     //         obj[b[i]] = 1;
//     //         arr.push(b[i])
//     //     }
//     // }

//     return arr;
// }

// demo(a)




