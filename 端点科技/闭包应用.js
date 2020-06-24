/**
 * 1.累加器
 */

function add(){
    var a = 0 ; 
    function res (){
        a++;
        console.log(a);
    }
    return res;

}
var a = add()
a()
a()
a()
a()
a()
a()

/**
 * 
 * 2.可以做缓存
 */
function demo() {
    var temp = 0;

    function a() {
        temp++;
        console.log(temp);
    }

    function b() {
        temp--;
        console.log(temp);
    }
    return [a,b]
}

var arr = demo();
arr[0]()
arr[0]()
arr[0]()
arr[1]()