# 块级格式化上下文(BFC)

## 产生BFC条件

1. 浮动元素
2. overflow不等于visible
3. display为inline-block 、table-cell 、
4. position为absolute和fixed
5. 根元素(body)

## BFC特性
1）内部的盒子（Box）会在垂直方向上一个接一个的放置；
2）垂直方向上的距离由margin决定，属于同一个BFC的两个相邻的块级元素会发生margin合并，不属于同一个BFC的两个相邻的块级元素不会发生margin合并；
3）每个盒子的左边，与包含块的左边相接触（从右往左的格式，右边缘接触）。即使存在浮动也是如此，除非产生了新的BFC；
4）BFC的区域不会与float box重叠；
5）BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素；外面的元素也不会影响到容器里面的子元素；
6）计算BFC的高度时，浮动元素也参与计算。