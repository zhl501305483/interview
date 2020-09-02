/**
 * 方法一：原生JS
 */

// function deepClone(origin, target) {
//   var target = target || {};
//   for (const key in origin) {
//       const element = origin[key];
//       if (typeof element === 'object') {
//          target[key] = Array.isArray(element) ? [] : {};
//          deepClone(origin[key], target[key])
//       } else {
//         target[key] = origin[key]
//       }
//   }
//   return target
// }

// var obj = {
//   a: '1',
//   b: '2',
//   card: ['vista', 'menu']
// }
// var target = deepClone(obj)
// obj.card.pop()
// console.log(obj);
// console.log(target);


/**
 * 方法二： JSON(简单粗暴)
 */
// var obj = {
//   a: '1',
//   b: '2',
//   card: ['vista', 'menu']
// }

// function deepClone(origin, target) {
//   var target = target || {};
//   const strTarget = JSON.stringify(origin);
//   return JSON.parse(strTarget)
// }

// var obj1 = deepClone(obj)
// obj.card.pop()
// console.log(obj);
// console.log(obj1);



/**
 * Oject.assign  不靠谱，针对深拷贝，需要使用其他办法，
 * 因为 Object.assign()拷贝的是属性值。假如源对象的属性值是一个对象的引用，那么它也只指向那个引用。
 * 当对象中只有一级属性，没有二级属性的时候，此方法为深拷贝，但是对象中有对象的时候，此方法，在二级属性以后就是浅拷贝。
 */