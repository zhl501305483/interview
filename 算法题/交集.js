/**
 * 给定两个数组，编写一个函数来计算他们的交集
 */

var arr1 = [1, 2, 1, 1, 2];
var arr2 = [2, 2,3];

function demo(data1, data2) {
  var obj = {};
  var tempArr = [];
  data1.forEach(item => {
    obj[item] = obj[item] === undefined ? 1 : obj[item] + 1;
  })

  for (let i = 0; i < data2.length; i++) {
    if(obj[data2[i]]){
      tempArr.push(data2[i]);
      obj[data2[i]]--;
    }
  }
  console.log(tempArr);
}
demo(arr1,arr2)
// function demo(data){
//   let obj = {};
//   var arr = [];
//   var temp;
//   for(let i = 0 ; i < data.length ; i++){
//     temp = data[i];
//     if(obj[temp] === undefined) {
//       obj[temp] = 1;
//       arr.push(temp);
//     }
//   }
//   console.log(arr);
// }
// demo(arr1)