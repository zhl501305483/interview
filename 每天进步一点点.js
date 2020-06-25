var len = 1000;
var obj = {
    len: 10,
    fn: function (fn) {
        fn();
        arguments[0]();
    }
}

function fn() {
    console.log(this.len);
}
obj.fn(fn,1,2,3)