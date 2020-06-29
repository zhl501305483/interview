var arr = [5, 3, 1, 3, 6, 0, 9, 40, 10, 18, 21]


function mergeSort(data) {
    if(data.length <= 1){
        return data;
    }
    var mid = Math.floor(data.length / 2);
    var left = data.slice(0, mid);
    var right = data.slice(mid);
    return compare(mergeSort(left), mergeSort(right))

    
}
function compare(left, right) {
    var leftIndex = 0;
    var rightIndex = 0;
    let res = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            res.push(right[rightIndex++])
        } else {
            res.push(left[leftIndex++])
        }
    }
    return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
mergeSort(arr)