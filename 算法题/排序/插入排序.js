var arr = [5, 3, 1, 3, 6, 0, 9, 40, 10, 18]

function insertSort(data) {
    var len = data.length;
    var value; //需要插入的元素
    var prevIndex; //前一个数组下标
    for (let i = 1; i < len; i++) {
        value = data[i];
        prevIndex = i - 1;
        while (prevIndex >= 0 && data[prevIndex] > value) {
            data[prevIndex + 1] = data[prevIndex];
            prevIndex --;
        }
        data[prevIndex + 1] = value;
    }
    console.log(data);
}
insertSort(arr)