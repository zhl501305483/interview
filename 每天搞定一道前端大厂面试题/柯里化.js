/**
 * 
 * 实现： sum(a)(b)  
 */

/**
 * 
 * 1此方法只能添加两个，如果为多个比较繁琐
 */
function sum(a) {

    return (next) => next + a;
}

sum(2)(3)

/**
 * 2此方法比较简洁
 */
const sum = x => y => z => {
    return x + y + z;
}
sum(1)(2)(3)