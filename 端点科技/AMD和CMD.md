|  AMD异步模块定义      |    CMD通用模块定义  |
|  ----  | ----  |
| 在浏览器端模块化开发的规范RequireJS主要解决了：1.有依赖关系需要顺序加载的js文件；2.js加载阻塞  |  在浏览器端模块开发的规范浏览器的实现SeaJS |
| AMD依赖前置，js可以方便知道依赖模块是谁，立即加载  | 而CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块，以性能换便利 |
|  AMD在加载模块完成后就会执行模块，所有模块都加载执行完后会进入require的回调函数，执行主逻辑，依赖模块的执行顺序和书写顺序不一定一致   | CMD加载完某个依赖模块后并不执行，只是下载而已，在所有依赖模块加载完成后进入主逻辑，遇到require语句的时候才执行对应的模块，这样模块的执行顺序和书写顺序是完全一致的  |
|  需要用到对应的库函数RequireJS定义函数 语法：define(id?, dependencies?, factory); id：可选参数，用来定义模块的标识，默认脚本文件名；dependencies：当前模块依赖的模块名称数组；factory：工厂方法，模块初始化要执行的函数或对象。   | 语法：define(id?, deps?, factory)其中常用文件名作id；推崇依赖就近，依赖一般不写deps中，写在factory中；factory：是个函数，function(require, exports, module)require：是个方法，require(id)，用来获取其他模块提供的接口；exports：是个对象，用来向外提供模块接口；module：是个对象，存储了与当前模块相关联的一些属性和方法。  |
|  在页面上使用require函数异步加载模块，语法：require([dependencies], function(){});[dependencies]：数组，表示所依赖的模块；
function(){}：回调函数，前面依赖的模块加载完成后，加载的模块以参数形式传入函数，被调用。   | CMD通用模块定义  |