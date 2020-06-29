var arr = [3, 5, 1, 3, 6, 0, 9, 40, 10, 18]

function chooseSort(data) {
    var minIndex;
    var temp;
    for (let i = 0; i < data.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minIndex]) {
                minIndex = j;
            }
        }
        temp = data[minIndex];
        data[minIndex] = data[i];
        data[i] = temp;
    }
    console.log(data);
}

chooseSort(arr)