block formatting context 块级格式化上下文 为一个元素开启一个 BFC 后会形成一个独立的布局环境

BFC 主要有两个作用

## 1. 解决外边距折叠问题[​](https://richard-docs.netlify.app/notes/css/n-002#_1-%E8%A7%A3%E5%86%B3%E5%A4%96%E8%BE%B9%E8%B7%9D%E6%8A%98%E5%8F%A0%E9%97%AE%E9%A2%98)

在同一个 BFC 中的元素的外边距会被折叠，此处的两个盒子，上边距+下边距共为 70px 但是实际外边距只有 50px 这是因为外边距最终是由 BFC 去解析的 同一个 BFC 中相邻两个元素的外边距会进行折叠（collapse）

html

```
<style>
  .box1 {
    height: 100px;
    width: 100px;
    background-color: #bfa;
    margin-bottom: 20px;
  }
  .box2 {
    height: 100px;
    width: 100px;
    background-color: orange;
    margin-top: 50px;
  }
</style>
<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
```



![](https://img-blog.csdnimg.cn/220491952c87443b8781b5d7841cc6d4.png)我们可以为其中一个盒子外边包裹一个容器，然后为容器开启 BFC，使两个 div 处于不同的 BFC 中，这样外边距就不会被折叠

html

```
<style>
  .container {
    overflow: auto;
  }
  .box1 {
    height: 100px;
    width: 100px;
    background-color: #bfa;
    margin-bottom: 20px;
  }
  .box2 {
    height: 100px;
    width: 100px;
    background-color: orange;
    margin-top: 50px;
  }
</style>
<body>
  <div class="container">
    <div class="box1"></div>
  </div>
  <div class="box2"></div>
</body>
```



此时可以看到两个 div 之间的距离明显变大，因为此时的两个 div 处于不同的 BFC 中，外边距不再被折叠

![](https://img-blog.csdnimg.cn/802f778f50264d6f853c60d82e5382d1.png)

## 2. 解决浮动引起的高度塌陷问题[​](https://richard-docs.netlify.app/notes/css/n-002#_2-%E8%A7%A3%E5%86%B3%E6%B5%AE%E5%8A%A8%E5%BC%95%E8%B5%B7%E7%9A%84%E9%AB%98%E5%BA%A6%E5%A1%8C%E9%99%B7%E9%97%AE%E9%A2%98)

清除浮动引起的高度塌陷需要满足两个条件：

- 浮动元素的父元素触发 BFC 形成独立的块级格式化上下文
- 浮动元素的父元素的高度是 auto

html

```
<style>
  .container {
    background-color: orange;
  }
  .item1 {
    height: 100px;
    width: 100px;
    background-color: #bfa;
    float: left;
  }
  .item2 {
    height: 50px;
    width: 50px;
    background-color: #bfa;
    float: left;
  }
</style>
<body>
  <div class="container">
    <div class="item1"></div>
    <div class="item2"></div>
  </div>
</body>
```



![](https://img-blog.csdnimg.cn/c271d2da33cd41b0999ef07ab36e1bf6.png)现在有两个 div 左浮动，父容器有背景颜色 orange，但是因为子元素都浮动了引起高度塌陷看不到背景色

html

```
<style>
  .container {
    background-color: orange;
    overflow: auto;
  }
</style>
>】
```



我们为父容器开启 BFC 解决浮动引起的高度塌陷，此时可以看到父元素的背景色 说明已经清除浮动