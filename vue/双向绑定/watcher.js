class Watcher {
    constructor(vm, exp, cb) {
        this.vm = vm;
        this.exp = exp;
        this.cb = cb;
        this.value = this.get();
    }
    get() {
        Dep.tag = this;
        let value = this.vm.data[this.exp];
        Dep.tag = null;
        return value;
    }
    update() {
        let value = this.vm.data[this.exp];
        let oldValue = this.value;
        if (value !== oldValue) {
            this.value = value;
            this.cb.call(this.vm, value, oldValue)
        }
    }
}