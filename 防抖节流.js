/**
 * 
 * 防抖
 */

function throttle(func, time) {
    var timer = null;
    var self = this;
    var argu = arguments;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            func.apply(self, argu)
        }, time)
    }
}