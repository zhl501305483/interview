function mostChar(data) {
    var arr = data.match(/(\w)\1+/g);
    var max = Math.max(...arr.map(item => item.length));
    var obj = {};
    var item;
    for (let i = 0; i < arr.length; i++) {
        item = arr[i]
        if (max === item.length) {
            obj[item[0]] = max
        }
    }
    return obj;
}
var str = 'aaabbasdaczsdawdszzzzzzzzzzzzzzzzzzzzzzzzzzczxczccccccsadz';
mostChar(str)