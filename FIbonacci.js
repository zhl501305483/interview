/**
 * 
 * 
 * 利用JavaScript打印出FIbonacci数（不使用全局变量）
 */


//  1 1 2 3 5 8 13 21 34 55

// function demo(n){
//     if(n == 1 || n == 2){
//         return 1;
//     }
//     return demo(n - 1) + demo(n - 2)
// }

// demo(3)

function printFibonacci(n) {
    let arr = []
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            if (i < 2) {
                arr.push(1)
            } else {

                arr.push(arr[i - 1] + arr[i - 2])
            }
        }
        return arr;
    } else {
        return '请输入正确的数字！！'
    }

}

printFibonacci(20)