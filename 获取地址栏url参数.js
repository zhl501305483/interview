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


// var url = 'abc.html?id=123&url=http://www.maidq.com&stack=2&name=zhangsan&age=20&sex=male';

// function getParams(url, key) {
//     let param = url.substr(url.indexOf('?') + 1);
//     var paramArr = param.split('&');
//     for (let item of paramArr) {
//         var num = item.indexOf('=');
//         if (item.substring(0, num) === key) {
//             return item.substr(num + 1);
//         }
//     }
//     return null;
// }
// var str = getParams(url, 'age');
// console.log(str);
// console.log(url);
var url = 'https://www.baidu.com?id=123&stack=2&name=zhangsan&age=20&sex=male';
function getParams(url) {
  const str = url.substr(url.indexOf('?') + 1)
  const tempArr = str.split('&')
  let arr;
  let obj = {};
  tempArr.forEach(item => {
    arr = item.split('=')
    obj[arr[0]] = arr[1]
  })
  console.log(obj);

}

getParams(url)