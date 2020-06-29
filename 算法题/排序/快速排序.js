var arr = [5, 3, 1, 3, 6, 0, 9, 40, 10, 18, 21]
let value;

function quickSort(data) {
    if (data.length <= 1) {
        return data;
    }
    let mid = Math.floor(data.length / 2);
    value = data.splice(mid, 1);
    let left = [];
    let right = [];
    for (const item of data) {
        if (item < value) {
            left.push(item)
        } else {
            right.push(item)
        }
    }
    return quickSort(left).concat(value).concat(quickSort(right))
}
quickSort(arr)
console.log(value);