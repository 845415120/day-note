---
时间: 11分
作者: "\r技术蛋老师"
标题: JavaScript原型链
图片: https://i1.hdslb.com/bfs/archive/55bd40c5ebb77d5a82912672b625ee821061cf74.jpg@480w_300h_1c_!web-space-channel-video.webp
链接: https://www.bilibili.com/video/BV1N7411k7D2
评价: ★★★★★
---
# 原型链

每个函数都有 prototype 属性 该属性指向原 型。

每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型。

对象可以通过 `__proto__ `来寻找不属于该对象的属性，` __proto__ `将对象连接起来组 成了原型链。

![](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230811/image.5n0i9jte7qg0.webp)