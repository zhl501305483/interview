function MyPromise(fn) {
  this.status = 'pending'
  this.data = ''
  this.onResolvedCbs = []
  this.onRejectedCbs = []
  const resolve = (data) => {
    if (this.status === 'pending') {
      this.status = 'resolve'
      this.data = data
      this.onResolvedCbs.forEach(fn => fn())

    }


  }
  const reject = (err) => {
    this.status = 'reject'
    this.data = err
    this.onRejectedCbs.forEach(fn => fn())

  }

  if (!(this instanceof MyPromise)) {
    return new MyPromise(fn)
  }

  fn(resolve, reject)
}
MyPromise.resolve = (data) => {
  return new MyPromise((onResolve, onReject) => {
    onResolve(data)
  })
}
MyPromise.reject = (data) => {
  return new MyPromise((onResolve, onReject) => {
    onReject(data)
  })
}
MyPromise.prototype.catch = function (fn) {
  if (this.status === 'reject') {
    return new MyPromise((resolve, reject) => {
      fn(this.data)
    })
  }
}

function resolveMyPromise(MyPromise2, x, resolve, reject) {
  if (x === MyPromise2) {
    return reject(new TypeError('Chaining cycle detected for MyPromise'));
  }
  let called;
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolveMyPromise(MyPromise2, y, resolve, reject);
        }, err => {
          if (called) return;
          called = true;
          reject(err);
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}
MyPromise.prototype.then = function (resolved, rejected) {
  var that = this
  // if (rejected === undefined) {
  //   return new MyPromise((resolve, reject) => {
  //     resolved(this.data)
  //   })
  // }
  let MyPromise2 = new MyPromise((resolve, reject) => {
    if (this.status === 'resolve') {
      setTimeout(() => {
        var x = resolved(this.data)
        if (x instanceof MyPromise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      }, 0);
    }
    if (this.status === 'reject') {
      if (rejected === undefined) {
        throw new Error(`Uncaught (in promise) ${this.data}`)
      }
      setTimeout(() => {
        var x = rejected(this.data)
        if (x instanceof MyPromise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }

      }, 0);

    }
    if (this.status === 'pending') {
      this.onResolvedCbs.push(() => {
        setTimeout(() => {
          var x = resolved(that.data);
          if (x instanceof MyPromise) {
            x.then(resolve, reject)
          } else {
            resolve(x)
          }

        }, 0);

      })
      this.onRejectedCbs.push(() => {
        setTimeout(() => {
          var x = rejected(that.data);
          if (x instanceof MyPromise) {
            x.then(resolve, reject)
          } else {
            resolve(x)
          }

        }, 0);

      })

    }
  })

  return MyPromise2
}

MyPromise.all = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError(`TypeError:${typeof arr} is ${arr} is not iterable`)
  }
  let orderIndex = 0;
  const tempArr = []
  return new MyPromise((resolve, reject) => {
    const promiseResolveArgs = (value, index) => {
      tempArr[index] = value
      orderIndex++;
      if (orderIndex === arr.length) {
        resolve(tempArr)
      }
    }
    arr.forEach((item, index) => {
      if (item instanceof MyPromise) {
        item.then(res => {
          promiseResolveArgs(res, index)
        }, reject)
      } else {
        promiseResolveArgs(item, index)
      }
    })
  })

}

MyPromise.race = (arr) => {
  return new MyPromise((resolve, reject) => {
    arr.forEach((item, index) => {
      if (item instanceof MyPromise) {
        item.then(resolve, reject)
      } else {
        resolve(item)
      }
    })
  })
}
// module.exports = MyPromise

const p = new MyPromise((resolve, reject) => {

  console.log(11);
  setTimeout(() => {
    resolve(1)

  }, 0);
})

// p.then(res => {
//   console.log('res' + res);
//   return 555555
// }).then(data => {

//   console.log(data);
// })

let p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('p1')
  }, 1000);
})

let p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2')
  }, 1000);
})


MyPromise.race([1, 2, 3, p1, p2]).then(res => {
  console.log(res);
}, err => {
  console.log(err);
})


console.log(p);