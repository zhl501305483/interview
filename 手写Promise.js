
class MyPromise {
  constructor(cb) {
    this.status = 'pending'
    this.data = null
    this.onResolvedCbs = []

    this.onRejectedCbs = []
    const resolve = res => {
      this.status = 'resolve'
      this.data = res
      this.onResolvedCbs.forEach(fn => fn())
    }
    const reject = err => {
      this.status = 'reject'
      this.data = err
      this.onRejectedCbs.forEach(fn => fn())
    }
    try {
      cb(resolve, reject)

    } catch (error) {
      reject(error)
    }

  }


  static race(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError(`TypeError, ${typeof arr} ${arr} is not iterative`)
    }
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

  static all(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError(`TypeError, ${typeof arr} ${arr} is not iterative`)
    }
    const tempArr = []
    let orderIndex = 0
    return new MyPromise((resolve, reject) => {
      const dealWith = (value, index) => {
        orderIndex++
        tempArr[index] = value
        if (orderIndex === arr.length) {
          resolve(tempArr)
        }
      }
      arr.forEach((item, index) => {
        if (item instanceof MyPromise) {
          item.then(res => {
            dealWith(res, index)
          }, reject)
        } else {
          dealWith(item, index)
        }
      })
    })
  }

  catch (fn) {
    this.then(null, fn)
  }
  then(onResolve, onReject) {
    var self = this
    let MyPromise2 = new MyPromise((resolve, reject) => {
      if (this.status === 'resolve') {
        setTimeout(() => {
        try {
            var result = onResolve(this.data)
            if (result instanceof MyPromise) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        }, 0);
      } else if (this.status === 'reject') {
        setTimeout(() => {
          try {
            var result = onReject(this.data)
            if (result instanceof MyPromise) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        }, 0);
      } else {
        this.onResolvedCbs.push(() => {
        setTimeout(() => {
            try {
              var result = onResolve(this.data)
              if (result instanceof MyPromise) {
                result.then(resolve, reject)
              } else {
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          }, 0);
        })
        this.onRejectedCbs.push(() => {
          setTimeout(() => {
            try {
              var result = onReject(this.data)
              if (result instanceof MyPromise) {
                result.then(resolve, reject)
              } else {
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          }, 0);

        })

      }
    })
    return MyPromise2
  }
}

const p = new MyPromise((resolve, reject) => {
  // console.log(111);
  resolve(2)
  // setTimeout(() => {
  //   resolve(222)
  // },1000);
})
p.then(res => {
  console.log(res);
      return new MyPromise((resolve,reject) => {
    resolve('222222222222222222222')
  })
}).then(data => {
  console.log(data);
})
console.log(p);

// const p1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1)
//   }, 100);
// })

// const p2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject(2)
//   }, 50);
// })

// MyPromise.race([1, 2]).then(res => {
//   console.log('res'+res);
// }, err => {
//   console.log(err);
// })

