// function sum(a,b){
//     return a+b
// }
// var a = sum(1000,999)
// console.log(a);


function sum(x) {
    return function (y) {
        return x + y
    }
}



// function sum(x, y) {
//     if (arguments.length == 1) {
//         return function () {
//            return x + arguments[0]
//         }
//     } else {
//         return x + y
//     }
// }
var a = sum(4)(6)
console.log(a);