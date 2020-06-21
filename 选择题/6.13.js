// function getInfo(member,year){
//     member.name = 'Lydia';
//     year = '1998'
// }

// const person = {name : 'Sarah'};
// const birthYear = '1997';

// getInfo(person,birthYear);

// console.log(person,birthYear);


/**
 * 
 *  二、
 *随机生成长度为10的数组,例如[2,10,3,4,5,11,10,11,20,15],
 *将其排列成一个新数组，如：[[2,3,4,5],[10,11],[20]],
 */
// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function demo(n) {
//     let arr = [];
//     //生成10个数放在数组



//     for (let i = 0; i < n; i++) {
//         arr.push(randomNum(0, 100))
//     }
//     //去重加排序
//     let newArr = Array.from(new Set(arr)).sort((a, b) => a - b);
//     let a = [];
//     newArr.forEach(item => {
//         var page = Math.floor(item / 10);
//         if (!a[page]) {
//             a[page] = [];
//         }
//         a[page].push(item)
//     })

//     return a.filter(item=> item.length > 0)
// }
// demo(10)


/**
 * 
 * 三、给定两个数组，写一个方法来计算它们的交集
 */

var a = [1, 2, 3, 3, 5];
var b = [ 3, 5, 6, 7];
//方法一    
// function demo(x, y) {
//     let res = [];
//     for (let i = 0; i < x.length; i++) {
//         for (let j = 0; j < y.length; j++){
//             if(x[i] == y[j]){
//                 res.push(x[i])
//             }
//         }
//     }
//     console.log(res);
// }


//方法二
function demo(x, y) {
    let res = x.concat(y);
    let temp = []

    // for (let i = 0; i < res.length ; i++) {
    //     if(res.indexOf(res[i]) !== i){
    //         temp.push(res[i])
    //     }
    // }


    // res.forEach((item,index)=>{
    //     if(res.indexOf(item) !== index){
    //         temp.push(item)
    //     }
    // })

    res = res.filter((item,index)=> res.indexOf(item) !== index);
    
    console.log(Array.from(new Set(res)));
}


//方法三
// function demo(x,y){

// }
demo(a, b)