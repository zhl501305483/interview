// 写个FUNCTION能够统计一个OBJECT里面字母的个数

var obj = {
  name: 'zhl',
  age: 14,
  sex: 'mAle'
}
function countObj (data) {
  let num = 0
  var data = JSON.stringify(data)
  var arr = data.match(/[a-z]+/gi)
  arr.forEach(item => {
    num += item.length
  })
  return num
}

var c = countObj(obj)
console.log(c)