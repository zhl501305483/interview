/**
 * typeof:返回所判断值的类型
 * 
 * instanceof: 用于判断一个变量是否某个对象的实例
 * 
 */


/**
 * 封装instanceof方法
 */


function MyInstance(left, right) {
    let leftP = left.__proto__;
    let rightP = right.prototype;
    while (true) {
        if (leftP == rightP) {
            return true;
        } else if (leftP == null) {
            return false;
        }
        leftP = leftP.__proto__;
    }
}

function Person() {}
function Father(){}
var person = new Person();

MyInstance(person, Object)


