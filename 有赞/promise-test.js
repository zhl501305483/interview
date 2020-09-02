const MyPromise = require('./手写Promise')
// const MyPromise= require('../../../../Users/Shinelon/Desktop/promise')

let p = new MyPromise((resolve, reject) => {
  console.log(111);
  setTimeout(() => {
  resolve(11)
    
  }, 0);
})

p.then(res => {
  console.log('res' + res);
  return 5555
})

console.log(p);