var url = `https://www.baidu.com?id=123&stack=2&name=zhangsan&age=20&sex=male`

function deal (str) {
  const arg = str.substr(str.indexOf('?') + 1)
  const arr = arg.split('&')
  var temp
  var obj = {}
  arr.forEach(item => {
    temp = item.split('=')
    obj[temp[0]] = temp[1]
  })
  return obj
}

console.log(deal(url))