// var url = 'abc.html?id=123&url=http://www.maidq.com&stack=2&name=zhangsan';

// function getParams(url, key) {
//     var str = url;
//     let param = url.substr(url.indexOf('?') + 1);
//     var paramArr = param.split('&');
//     for (let item of paramArr) {
//         var temp = item.split('=')
//         if(temp[0] === key){
//             return temp[1]
//         }
//     }
//     return null;
// }
// var str = getParams(url, 'i');
// console.log(str);


var url = 'abc.html?id=123&url=http://www.maidq.com&stack=2&name=zhangsan&age=20&sex=male';

function getParams(url, key) {
    let param = url.substr(url.indexOf('?') + 1);
    var paramArr = param.split('&');
    for (let item of paramArr) {
        var num = item.indexOf('=');
        if (item.substr(0, num) === key) {
            return item.substr(num + 1);
        }
    }
    return null;
}
var str = getParams(url, 'age');
console.log(str);
console.log(url);