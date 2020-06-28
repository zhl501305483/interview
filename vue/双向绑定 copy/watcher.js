class Watcher {
    constructor(vm, exp, cb) {
        this.vm = vm;
        this.exp = exp;
        this.cb = cb;
        this.value = this.add(); //订阅者Watcher初始化
    }

    // 将订阅者Watcher添加到订阅器Dep中
    add() {
        Dep.tag = this;
        let value = this.vm.data[this.exp];
        Dep.tag = null;
        return value;
    }
    //进行数据更新
    update() {
        let value = this.vm.data[this.exp];
        let oldValue = this.value;
        if (value !== oldValue) {
            this.value = value;
            //将this指向为发布者
            this.cb.call(this.vm, value, oldValue)
        }
    }
}