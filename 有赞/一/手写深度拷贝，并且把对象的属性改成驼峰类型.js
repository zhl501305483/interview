
// 实现对象深拷贝 & key下划线转驼峰 ( a_bbb => aBbb、a_d_s => aDS )
const testData = {
    a_bbb: 123,
    a_g: [1, 2, 3, 4],
    a_d: {
        s: 2,
        s_d: 3
    },
    a_f: [1, 2, 3, {
        a_g: 5
    }],
    a_d_s: 1
}


function deepClone(origin, target) {
  var target = target || {}
  for (const key in origin) {
    const temp = key.replace(/_(\w)/g, (a, b) => b.toUpperCase())
    const element = origin[key]
    if (typeof element === 'object') {
      target[temp] = Object.prototype.toString.call(element) === '[object Object]' ? {} : []
      deepClone(element, target[temp])
    } else {
      target[temp] = element
    }
  }
  return target
}

console.log(deepClone(testData));

var obj = deepClone(testData)
testData.a_bbb = ''
console.log(testData);
console.log(obj);