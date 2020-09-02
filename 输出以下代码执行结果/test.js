function wait() {
  return new Promise(resolve =>
    setTimeout(resolve, 3 * 1000)
  )
}

async function main() {
  console.time();
  const x = wait()
  const y = wait()
  const z = wait()
  await x;
  await y;
  await z;
  console.timeEnd();
}
main();

var a = "wad"

// const one = ()=> Promise.resolve('One!');

// async function fun(){
//     console.log('In funciton');
//     const res = await one();
//     console.log(res);
// }
// console.log('Before function');
// fun();
// console.log('After function');






// 今日头条面试题
// async function async1() {
//     console.log('async1 start')
//     const res = await async2()
//     console.log(res);
//     console.log('async1 end')
// }
// async function async2() {
//     return 1;
// }
// console.log('script start')
// setTimeout(function () {
//     console.log('settimeout')
// })
// async1()
// new Promise(function (resolve) {
//     console.log('promise1')
//     resolve()
// }).then(function () {
//     console.log('promise2')
// })
// console.log('script end')