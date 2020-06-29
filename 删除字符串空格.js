var str = 'awdaw awdaf  afgisdgij jhgjkdfk ';
var reg = /\s+/g;
// console.log(str.match(reg));
var temp = str.match(reg)

console.log(str.replace(reg, ''));


















// var arr = [1, 5, 2, 8, 4, 2, 0]
// var interator = {
//     n: 0,
//     next() {
//         return {
//             value: arr[this.n++],
//             done: this.n > arr.length
//         }
//     }
// }

// console.log(interator.next());
// console.log(interator.next());
// console.log(interator.next());
// console.log(interator.next());
// console.log(interator.next());
// console.log(interator.next());
// console.log(interator.next());


const f = () => {
    let prev1 = 1,
        prev2 = 1,
        n = 0;
    let value;
    return {
        next() {
            if (n === 0 || n === 1) {
                value = 1;
            } else {
                value = prev1 + prev2;
                prev2 = prev1;
                prev1 = value;
            }
            n++;
            return {
                value,
                done: true
            }
        }
    }
}

f(5)