
## Q: CSS 属性是否区分大小写？ 
A: 不区分。 HTML，CSS都对大小写不敏感，但为了更好的可读性和团队协作一般都小写，而在XHTML 中元素名称和属性是必须小写的。

## Q: 行内(inline)元素 设置`margin-top`和`margin-bottom` 是否起作用？
A: 起作用
html 里的元素分为替换元素（replaced element）和非替换元素（non-replaced element）。
- 替换元素是指用作为其他内容占位符的一个元素。最典型的就是`img`，它只是指向一个图像文件。以及大多数表单元素也是替换，例如`input`等。
- 非替换元素是指内容包含在文档中的元素。例如，如果一个段落的文本内容都放在该元素本身之内，则这个段落就是一个非替换元素。
讨论`margin-top`和`margin-bottom`对行内元素是否起作用，则要对行内替换元素和行内非替换元素分别讨论。

首先我们应该明确外边距可以应用到行内元素，规范中是允许的，不过由于在向一个行内非替换元素应用外边距，对行高(line-height)没有任何影响。由于外边距实际上是透明的。所以对声明`margin-top`和`margin-bottom`没有任何视觉效果。其原因就在于行内非替换元素的外边距不会改变一个元素的行高。而对于行内非替换元素的左右边距则不是这样，是有影响的。

而为替换元素设置的外边距会影响行高，可能会使行高增加或减少，这取决于上下外边距的值。行内替换元素的左右边距与非替换元素的左右边距的作用一样。
来看看demo:
[http://codepen.io/paddingme/pen/JwCDF](http://codepen.io/paddingme/pen/JwCDF)

## Q: 对内联元素设置`padding-top`和`padding-bottom`是否会增加它的高度？
A: 答案是不会。
对于行内元素，设置左右内边距，左右内边距将是可见的。而设置上下内边距，设置背景颜色后可以看见内边距区域有增加，对于行内非替换元素，不会影响其行高，不会撑开父元素。而对于替换元素，则撑开了父元素。看下demo，更好的理解下：

[http://codepen.io/paddingme/pen/CnFpa](http://codepen.io/paddingme/pen/CnFpa)

## Q: 设置`p`的`font-size:10rem`，当用户重置或拖曳浏览器窗口时，文本大小是否会也随着变化？
A: 不会。

`rem`是以`html`根元素中`font-size`的大小为基准的相对度量单位，文本的大小不会随着窗口的大小改变而改变。

## Q: 伪类选择器`:checked`将作用与`input`类型为`radio`或者`checkbox`,不会作用于`option`。
A: 不对。

伪类选择器`checked`的定义很明显:

## Q: 在HTML文本中，伪类`:root`总是指向`html`元素？
A: 不是

##  Q:`translate()`方法能移动一个元素在z轴上的位置？
 A: 不能。`translate()`方法只能改变x轴，y轴上的位移。
 

##  Q:`#example`位置如何变化：
```
<p id="example">Hello</p>

 #example {margin-bottom: -5px;}
A: 向上移动5px。

  <p id="example">Hello</p>
  
   #example {margin-left: -5px;}
A: 向左移动5px。
```
## Q: `only` 选择器的作用是？

```
@media only screen and (max-width: 1024px) {argin: 0;}
```

A：停止旧版本浏览器解析选择器的其余部分。

## 会触发BFC的条件有：

- float的值不为none。
- overflow的值不为visible。
- display的值为table-cell, table-caption, inline-block 中的任何一个。
- position的值不为relative 和static。

## Q: `screen`关键词是指设备物理屏幕的大小还是指浏览器的视窗？
```
@media only screen and (max-width: 1024px) {margin: 0;}
 ```
  A: 浏览器视窗