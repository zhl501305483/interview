// var a = ???
// if (a == 1 && a == 2 && a == 3) {
// 	console.log(1)
// }
// // 如何完善a, 使其正确打印1

var a = {
    n: 0,
    valueOf() {
        return ++a.n;
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log(1)
}

/**
 * 原理分析：
复杂数据类型隐式转化:
1.先使用 valueOf() 方法获取其原始值，如果原始值不是 number 类型，则使用toString() 方法转化成string类型.
2.再将 string 转换成 number 运算
 */




console.log([] == []); //false
console.log([] == ![]); //true
console.log([] == 0); //true
console.log(![] == 0); //true


console.log({} == {}); //false
console.log({} == !{}); //false    {}.toString = '[object Object]'    !{} = false   =>   Number('[object,Object]') 不等于 Number(false)

