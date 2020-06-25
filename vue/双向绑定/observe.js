function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    for (const key in obj) {
        const element = obj[key];
        defineReactive(obj, key, element);
    }
}

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

function defineReactive(obj, key, value) {
    var dep = new Dep();
    Object.defineProperty(obj, key, {
        get() {
            //判断是否增加订阅者
            dep.depend();
            return value
        },
        set(newValue) {
            value = newValue;
            //通知订阅者更新
            dep.notify();
        }
    })
}