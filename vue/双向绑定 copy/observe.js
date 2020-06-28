function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    for (const key in obj) {
        const element = obj[key];
        defineReactive(obj, key, element)
    }

    function defineReactive(obj, key, value) {
        var dep = new Dep();
        Object.defineProperty(obj, key, {
            get() {
                dep.depend();
                return value;
            },
            set(newValue) {
                value = newValue;
                dep.notify();

            }
        })
    }
}






//订阅器Dep
class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(item) {
        this.subs.push(item);
    }
    //添加监听者
    depend() {
        if (Dep.tag) {
            this.addSub(Dep.tag);
        }
    }

    //通知订阅者更新数据
    notify() {
        this.subs.forEach(item => {
            item.update();
        })
    }

}
Dep.tag = null;