class MyPromise{
  constructor(executor){
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    };
    let reject = reason => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    };
    try{
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled,onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
    let MyPromise2 = new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolveMyPromise(MyPromise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      };
      if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolveMyPromise(MyPromise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      };
      if (this.state === 'pending') {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolveMyPromise(MyPromise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolveMyPromise(MyPromise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0)
        });
      };
    });
    return MyPromise2;
  }
  catch(fn){
    return this.then(null,fn);
  }
}
function resolveMyPromise(MyPromise2, x, resolve, reject){
  if(x === MyPromise2){
    return reject(new TypeError('Chaining cycle detected for MyPromise'));
  }
  let called;
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then;
      if (typeof then === 'function') { 
        then.call(x, y => {
          if(called)return;
          called = true;
          resolveMyPromise(MyPromise2, y, resolve, reject);
        }, err => {
          if(called)return;
          called = true;
          reject(err);
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if(called)return;
      called = true;
      reject(e); 
    }
  } else {
    resolve(x);
  }
}
//resolve方法
MyPromise.resolve = function(val){
  return new MyPromise((resolve,reject)=>{
    resolve(val)
  });
}
//reject方法
MyPromise.reject = function(val){
  return new MyPromise((resolve,reject)=>{
    reject(val)
  });
}
//race方法 
MyPromise.race = function(MyPromises){
  return new MyPromise((resolve,reject)=>{
    for(let i=0;i<MyPromises.length;i++){
      MyPromises[i].then(resolve,reject)
    };
  })
}
//all方法(获取所有的MyPromise，都执行then，把结果放到数组，一起返回)
MyPromise.all = function(MyPromises){
  let arr = [];
  let i = 0;
  function processData(index,data){
    arr[index] = data;
    i++;
    if(i == MyPromises.length){
      resolve(arr);
    };
  };
  return new MyPromise((resolve,reject)=>{
    for(let i=0;i<MyPromises.length;i++){
      MyPromises[i].then(data=>{
        processData(i,data);
      },reject);
    };
  });
}

// module.exports = MyPromise


const p = new MyPromise((resolve, reject) => {
  console.log(11)
  resolve(1)
})

p.then(res => {
  console.log('res' + res);
  return 555555
}).then(res => {
  console.log(res);
})

console.log(p);