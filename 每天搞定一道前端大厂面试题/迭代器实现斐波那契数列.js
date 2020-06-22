//方法一

function createFeiboIterator() {
    var num = 0;
    return {
        f(n) {
            if (n == 0 || n == 1) {
                return 1;
            }
            return f(n - 1) + f(n - 2)
        },
        next() {
            return {
                value: this.f(num++),
                done: false
            }
        }
    }
}

var i = createFeiboIterator();
console.log(i.next().value);



//方法二

// function createFeiboIterator() {
//     let prev1 = 1,
//         prev2 = 1;
//     var n = 1;
//     return {
//         next() {
//             let value;
//             if (n == 1 || n == 2) {
//                 value = 1;
//             } else {
//                 value = prev1 + prev2
//             }
//             const res = {
//                 value,
//                 done: false
//             }
//             // 1 1 2 3 5
//             prev2 = prev1;
//             prev1 = res.value;
//             n++;
//             return res;
//         }
//     }
// }


// var i = createFeiboIterator();
// console.log(i.next().value);