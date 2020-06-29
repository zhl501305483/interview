// function f(n) {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return f(n - 1) + f(n - 2);
// }

// f(3)


function f(n) {
    var prev1 = 1,
        prev2 = 1;
    var third;
    if (n > 2) {
        for (let i = 0; i < n - 2; i++) {
            third = prev1 + prev2;
            prev2 = prev1;
            prev1 = third;
        }
        return third;
    } else {
        return 1;
    }
}
f(3)