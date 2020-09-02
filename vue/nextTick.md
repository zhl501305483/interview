# 异步更新机制
Vue 对DOM的更新是异步的！ 这个异步是在一个异步队列中进行的，不过这个异步队列会在当前的 Event Loop 中执行完，所以如果修改了 Data 立刻去DOM中做查询操作是不对的，这个时候DOM还没有更新，正确的做法是这样做：
在修改数据之后立即使用nextTick()这个方法，获取更新后的 DOM。
**方法一**
```
methods: {
    updateToHandleDom(){
        this.message = 'new message';
    this.$el.textContent === 'new message' //false 未更新
    //应该做如下操作
    this.$nextTick(function(){
        this.$el.textContent === 'new message'; //true 已更新
    })
    }
}
```


**方法二**
```
methods: {
    updateToHandleDom(){
        this.message = 'new message';
    this.$el.textContent === 'new message' //false 未更新
    //应该做如下操作
    let res = await this.$nextTick();
    this.$el.textContent === 'new message //true 已更新
}
```