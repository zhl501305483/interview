const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let result = []
arr.forEach((item, index) => {
    var page = Math.floor(index / 5);
    if (!result[page]) {
        result[page] = [];
    }
    result[page].push(item);
})
console.log(result);