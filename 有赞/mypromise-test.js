const MyPromise = require('./MyPromise')


const p = new MyPromise((resolve, reject) => {
  console.log(111);
  resolve(1)
})

p.then(res => {
  console.log('res' + res);
  return 555555
})

console.log(p);