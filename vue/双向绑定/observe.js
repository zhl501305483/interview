function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    for (const key in obj) {
        const element = obj[key];
        defineReactive(obj, key, element);
    }
}

function defineReactive(obj, key, value) {
    var dep = new Dep();
    Object.defineProperty(obj, key, {
        get() {
            dep.depend();
            return value
        },
        set(newValue) {
            value = newValue;
            dep.notify();
        }
    })
}

/**
 * 完成了数据的'可观测'，即我们知道了数据在什么时候被读或写了，那么，我们就可以在数据被读或写的时候通知那些依赖该数据的视图更新了，
 * 为了方便，我们需要先将所有依赖收集起来，一旦数据发生变化，就统一通知更新。
 * 其实，这就是典型的“发布订阅者”模式，数据变化为“发布者”，依赖对象为“订阅者”。
 */


//消息订阅器Dep,用来容纳所有的订阅者。Dep主要负责收集订阅者，当数据变化时执行订阅者的更新函数
class Dep {
    constructor() {
        this.subs = [];
    }
    //判断是否增加订阅者
    depend() {
        if (Dep.tag) {
            this.subs.push(Dep.tag)
        }
    }

    //通知订阅者更新

    notify() {
        this.subs.forEach(item => {
            item.update();
        })
    }
}

Dep.tag = null;