# HTML5语义化

⽤正确的标签做正确的事情！

HTML 语义化就是让⻚⾯的内容结构化，便于对浏览器、搜索引擎解析；

在没有样式 CSS 情况下也以⼀种⽂档格式显示，并且是容易阅读的。

搜索引擎的爬⾍依赖于标记来确定上下⽂和各个关键字的权重，利于 SEO 。

使阅读源代码的⼈对⽹站更容易将⽹站分块，便于阅读维护理解\```html

```html
<header></header> 头部

<nav></nav> 导航栏

<section></section> 区块（有语义化的div）

<main></main> 主要区域

<article></article> 主要内容

<aside></aside> 侧边栏

<footer></footer> 底部

```

##### 1. 如何理解HTML5结构语义化？

简单来说，我们可以理解为：**用正确的标签做正确的事情。**

段落用 p 标签，标题用 h 系列标签，边栏用 aside 标签，主要内容用 main 标签。

对开发者：

- 便于团队的开发和维护。

- 在没有加载 CSS 的情况下也能呈现较好的内容结构与代码结构，易于阅读。

对浏览器：

- 有利于 SEO ，搜索引擎的爬⾍依赖于标签来确定上下⽂和各个关键字的权重。

- 方便其他设备的解析（如屏幕阅读器、盲人阅读器等），利于无障碍阅读，提⾼可访问性。



##### 2. html5的新特性？

- HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加
  - 用于媒介回放的 video 和 audio 元素
  - 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失
  - sessionStorage 的数据在浏览器关闭后自动删除
  - 语意化更好的内容元素，比如 article、footer、header、nav、section
  - 表单控件，calendar、date、time、email、url、search
  - 新的技术webworker, websocket, Geolocation

- 移除的元素：
  - 纯表现的元素：basefont，big，center，font, s，strike，tt，u
  - 对可用性产生负面影响的元素：frame，frameset，noframes

- 支持HTML5新标签：
  - IE8/IE7/IE6支持通过document.createElement方法产生的标签
  - 可以利用这一特性让这些浏览器支持HTML5新标签
  - 浏览器支持新标签后，还需要添加标签默认的样式

- 当然也可以直接使用成熟的框架、比如html5shim

```
<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com
/svn/trunk/html5.js"</script><![endif]-->
```

- 如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素

