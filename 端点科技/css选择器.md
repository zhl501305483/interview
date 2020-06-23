# css选择器



## 第四类：当在a标签中嵌套img标签时，在某些浏览器中img会有蓝色边框；

解决方案：给img添加border：0；或者是border：none；

## 第五类：图片默认有间隙

解决方案： 1）给img标签添加左浮动float：left；
2）给img标签添加display：block； 
3）给img标签添加vertical-align:middle/bottom; 
若外层是div包裹： 
4）给外层的div加font-size:0; 
5）给外层的div加line-height:0;
## 第六类：上下margin的重叠问题

描述：给上边元素设置了margin-bottom，给下边元素设置了margin-top，浏览器只会识别较大值；

解决方案：margin-top和margin-bottom中选择一个，只设置其中一个值；


## 1、获取兄弟节点/元素的兼容性问题
 1）兄弟节点，所有浏览器都支持
        ①nextSibling 下一个兄弟节点，可能是非元素节点；会获取到文本节点
        ②previousSibling  上一个兄弟节点，可能是非元素节点；会获取到文本节点
 2）兄弟元素，IE8以前不支持
        ①previousElementSibling 获取上一个紧邻的兄弟元素，会忽略空白 
        ②nextElementSibling  获取下一个紧邻的兄弟元素，会忽略空白

## 2、添加dom监听事件
```
.addEventListener = function (type,listener,useCapture ) { };

//第一个参数 事件名称
//第二个参数 事件处理函数（监听者）
//第三个参数 true捕获 false冒泡
//IE9以后才支持
// 兼容旧环境
```