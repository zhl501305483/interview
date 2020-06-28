function shuffle(arr, size) {
    let result = [];
    var len = arr.length;
    for (let i = 0; i < size; i++) {
        var randomNum = minMax(i, len);
        const item = arr[randomNum];
        result.push(item);
        arr[randomNum] = arr[len - 1 - i];
        arr[len - 1 - i] = item;
    }
    return result;
}

function minMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var arr = []
for (let i = 0; i < 100000; i++) {
    arr.push(minMax(1, 10000))
}

shuffle(arr,10)