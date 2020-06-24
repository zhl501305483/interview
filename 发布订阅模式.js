class Person {
    constructor() {
        this.pool = new Map();
    }

    sayMessage() {
        const [key, ...arg] = [...arguments];
        if (this.pool.has(key)) {
            const func = this.pool.get(key);
            func.apply(this, arg)
        }
    }
    addListener(key, func) {
        this.pool.set(key, func)
    }
    removeListener(key) {
        this.pool.delete(key)
        console.log('已删除：', key);
    }
}


var p = new Person();
p.addListener('one', function (data) {
    console.log('发布新值啦！', data);
})



p.sayMessage('one', 1000)
p.sayMessage('one', 2000)
p.sayMessage('one', 3000)
p.removeListener('one')
p.sayMessage('one', 4000)