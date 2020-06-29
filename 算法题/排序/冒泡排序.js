var arr = [3, 5, 1, 3, 6, 0, 9, 40, 10, 18]

function sort(data) {
    var temp;
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = 0; j < data.length - 1 - i; j++) {
            if (data[j] > data[j + 1]) {
                temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    console.log(data);
}

sort(arr)