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



function jieliu(fun,time){
    var firstTime = new Date().getTime();
    var lastTime;
    return function(){
        lastTime = new Date().getTime();
        if(lastTime - firstTime > time){
            fun.apply(this,arguments);
            firstTime = lastTime;
        }
    }
}