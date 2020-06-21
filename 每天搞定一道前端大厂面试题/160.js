/**
 * 
 * 160： 输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法
 */

// const list = [1, 2, 3]
// const square = num => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * num)
//     }, 1000)
//   })
// }

// function test() {
//   list.forEach(async x=> {
//     const res = await square(x)
//     console.log(res)
//   })
// }
// test()


/**
 * 总结：await会阻塞异步代码的执行，理应隔一秒输出1  4  9
 * 
 * 但是forEach方法不会被阻塞，默认请求是并行发起的
 * 
 * 解决方法：使用for循环或者forof就可以解决
 */

// 解决方法一、
// const list = [1, 2, 3]
// const square = num => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * num)
//     }, 1000)
//   })
// }

// async function test(){
//     for(let i = 0 ; i < list.length ; i++){
//         const res = await square(list[i])
//         console.log(res);
//     }
// }
// test()


const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

async function test(){
    for (const i of list) {
        const res = await square(i);
        console.log(res);
    }
}
test()