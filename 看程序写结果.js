var name = '小红';
var obj = {
  name: '小明',
  sayName() {
    console.log(`${this.name}`);
  },
};

var sayName = () => {
  console.log(`${this.name}`);
};
var fn = obj.sayName;

sayName();
obj.sayName();
sayName.call(obj);
obj.sayName.call(this);
fn();

