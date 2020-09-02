class Promise{
  constructor(executor){
    this.state = 'pending';			//默认的状态，进行中
    this.value = null;				//成功后携带的值
    this.reason = null;				//失败后携带的原因
	  this.onFulfilledCallbacks = []
  	this.onRejectedCallbacks = []
  	
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(item => item(this.value))
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(item => item(this.reason))
      }
    };

    try{
      executor(resolve, reject);		//构造
    } catch (err) {
      reject(err);
    }
  }
  //then函数根据state来进行后续的回调函数操作
  then(onFulfilled,onRejected) {		
    var self = this
    if (this.state === 'fulfilled') {
	    return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            let f = onFulfilled(self.value)
            if (f instanceof Promise) {
              f.then(resolve, reject)
            } else {
              resolve(f)
            }
          } catch (err) {
            reject(err)
          }
        }, 0);
	      
	    })
    };
    if (this.state === 'rejected') {
      	return new Promise((resolve, reject) => {
          setTimeout(() => {
            try {
              let j = onRejected(self.reason)
              if (j instanceof Promise) {
                j.then(resolve, reject)
              } else {
                resolve(j)
              }
            } catch (err) {
              reject(err)
            }
          }, 0);
	      
	    })
    };
    if (this.state === 'pending') {
	  	return new Promise((resolve, reject) => {
	      setTimeout(() => {
          self.onFulfilledCallbacks.push(() => {
            let f = onFulfilled(self.value)
            if (f instanceof Promise) {
              f.then(resolve, reject)
            } else {
              resolve(f)
            }
          })
          self.onRejectedCallbacks.push(() => {
            let j = onRejected(self.reason)
            if (j instanceof Promise) {
              j.then(resolve, reject)
            } else {
              resolve(j)
            }
          })
        }, 0);
	    })
    }
  }
}



const p = new Promise((resolve, reject) => {
  console.log(11);
  resolve(1)
})

p.then(res => {
  console.log('res' + res);
  return 5555555555
}).then(res => {
  console.log(res);
})

console.log(p);