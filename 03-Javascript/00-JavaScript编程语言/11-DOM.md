---
标题: 
图片: https://www.w3schools.com/js/pic_htmltree.gif
链接: 
时时: 
评价:
---

<!-- ---
prev:     '/Javascript/08-函数.md',
next:   '/Javascript/12-BOM.md',
--- -->
# DOM

文档对象模型（Document Object Model，简称DOM )

## DOM可以做什么

- 找对象（元素节点）
- 设置元素的属性值
- 设置元素的样式
- 动态创建和删除元素
- 事件的触发响应：事件源、事件、事件的驱动程序

# 获取页面元素

1.使用 `getElementByld()` 方法可以获取带有 ID 的元素对象，并返回一个 `Element` 对象。

- `console.dir()` 可打印元素的属性和方法
- <br />

2.`getElementsByTagName()` 方法可以返回带有指定标签名的对象的集合。<br />返回的是 **元素对象的集合，伪数组形式表示**。

3.根据类名返回元素对象集合。

```javascript
document.getElementsByClassName('类名');
```

4.根据指定选择器返回第一个元素对象。

```javascript
document.querySelector('选择器');
```

5.返回指定选择器的所有元素集合。

```javascript
document.querySelectorAll('选择器')
```

### 获取特殊元素

1. 获取 `body` 元素

```javascript
document.body;
```

2. 获取 `html` 元素

```javascript
document.documentElement;
```

# 事件

1. 获取事件源

```html
<button id="btn">唐伯虎</button>
```

2. 注册事件

```javascript
 let btn = document.getElementById('btn');
```

3. 添加事件处理程序

```javascript
btn.onclick = () => alert('点秋香');
```

## 改变元素内容

1. `innerText` 不识别 html 标签，`innerHTML` 识别 html 标签。

```javascript
div.innerHTML = ' <strong>今天是：</strong>2021-3-23';
```

2. `innerText` 会取出空格和换行，`innerHTML` 保留换行和空格。

### 样式属性操作

我们可以通过JS修改元素的大小、颜色、位置等样式。

1. `element.style`：行内样式操作
2. `element.className`：类名样式操作

## 排他思想

如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法：

1. 所有元素全部清除样式（干掉其他人）
2. 给当前元素设置样式（留下我自己）

## 获取元素的属性值

(1) element.属性<br />(2) element.getAttribute('属性')  get得到获取 attribute 属性的意思 我们程序员自己添加的属性我们称为自定义属性 index

## 设置元素属性值

(1) element.属性= '值'<br />(2) element.setAttribute('属性', '值');  主要针对于自定义属性

#### 移除属性

`element.removeAttribute(属性);`

# 节点

**节点**（Node）：构成 HTML 网页的最基本单元。网页中的每一个部分都可以称为是一个节点，比如：html标签、属性、文本、注释、整个文档等都是一个节点。

虽然都是节点，但是实际上他们的具体类型是不同的。常见节点分为四类：

- 文档节点（文档）：整个 HTML 文档。整个 HTML 文档就是一个文档节点。
- 元素节点（标签）：HTML标签。
- 属性节点（属性）：元素的属性。
- 文本节点（文本）：HTML标签中的文本内容（包括标签之间的空格、换行）。

节点的类型不同，属性和方法也都不尽相同。所有的节点都是Object。

DOM就是由节点组成的。<br />**解析过程**： HTML加载完毕，渲染引擎会在内存中把HTML文档，生成一个DOM树，getElementById是获取内中DOM上的元素节点。然后操作的时候修改的是该元素的**属性**。<br />**DOM树**：（一切都是节点）<br />DOM的数据结构如下：<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1673533781933-69b126a6-548f-4f22-9c96-a4f0edbe3cbb.png#averageHue=%23f5f4f4&clientId=u5df62497-5f35-4&from=paste&id=u0eda1cdd&originHeight=265&originWidth=483&originalType=url&ratio=1&rotation=0&showTitle=false&size=22651&status=done&style=none&taskId=u989a3391-8fb9-447f-b857-cb8a6c673f9&title=)

## 节点层级

#### 父级节点

获取离元素最近的父节点，若找不到则返回 `null`。

```javascript
node.parentNode
```

#### 子节点

**更加好的方法：获取子元素节点**

```javascript
parentNode.children;
```

方法：

```javascript
parentNode.childNodes
```

返回包含了所有的子节点，包括元素节点，文本节点等。

子节点方法：

① 获取 **所有结点** 中的第一个和最后一个：

- `parentNode.firstChild`
- `parentNode.lastChild`

② 获取 **元素节点**中第一个和最后一个

- `parentNode.firstElementChild`
- `parentNode.lastElementChild`

③ **实际开发**：

- `parentNode.children[0]`
- `parentNode.children[parentNode.children.length -1]`

#### 兄弟节点

1. 返回下一个兄弟节点：

```javascript
node.nextSibling
```

2. 返回上一个的兄弟节点：

```
node.previousSibling
```

3. 返回下一个 **兄弟元素节点**（≥IE9）

```javascript
node.nextElementSibling
```

4. 返回上一个 **兄弟元素节点**（≥IE9）

```javascript
node.previousElementSibling
```

##

## 创建并添加节点

元素节点

```
document.createElement("tagName");
```

给元素节点添加子元素节点

```
 parentNode.appendChild(chileNode)
```

在指定元素的前面插入节点

```
`insertBefore()`
```

#### 删除节点

`removeChild(childNode)` 方法

```
// 方式一
parentNode.removeChild(childNode);
// 方式二
let oldChild = parentNode.removeChild(childNode);
```

#### 复制节点

`node.cloneNode()` 方法返回调用该方法的节点的一个副本。也称为克隆节点/拷贝节点。其中 `node` 为被克隆的元素节点。

```javascript
node.cloneNode([deep]);
```

或者

```javascript
let newClone = node.cloneNode([deep]);
```

对于 `deep` 参数，可以为 `true` 或 `false`，或为空的：

## 总结

 创建元素

- `document.write()`
- `element.innerHTML`
- `element.createElement()`

区别：

1. `document.write()` 创建元素，是直接将内容写入页面的内容流，但是 **当文档流执行完毕，会导致页面全部重绘**。即覆盖原本的页面。
2. `innerHTML` 是将内容写入某个 DOM 节点，不会导致页面全部重绘。
3. `innerHTML` 创建多个元素效率更高（**不要拼接字符串，采取数组形式拼接**），结构稍微复杂。
4. `createElement()` 创建多个元素效率稍低一点点，但是结构更清晰。

 增

- `appendChild`
- `insertBefore`

 删

- `removeChild`

 改

主要修改 dom 的元素属性，dom 元素的内容、属性，表单的值等。

- 修改元素属性：`src`、`href`、`title` 等
- 修改普通元素内容：`innerHTML`、`innerText`
- 修改表单元素：`value`、`type`、`disabled` 等
- 修改元素样式：`style`、`className`

 查

主要获取查询dom的元素

- DOM提供的API 方法：`getElementById`、`getElementsByTagName`（**古老用法不太推荐**）
- H5提供的新方法：`querySelector`、`querySelectorAll` 提倡
- 利用节点操作获取元素：父（`parentNode`)、子（`children`）、兄（`previousElementSibling`、<br />`nextElementSibling`）提倡

 属性操作

主要针对于自定义属性

- `setAttribute`：设置dom的属性值
- `getAttribute`：得到dom的属性值
- `removeAttribute`：移除属性

 事件操作

给元素注册事件，格式：`事件源.事件类型 = 事件处理程序`

| 鼠标事件 | 触发条件 |
| --- | --- |
| `onclick` | 鼠标点击左键触发 |
| `onmouseover` | 鼠标经过触发 |
| `onmouseout` | 鼠标离开触发 |
| `onfocus` | 获得鼠标焦点触发 |
| `onblur` | 失去鼠标焦点触发 |
| `onmousemove` | 鼠标移动触发 |
| `onmouseup` | 鼠标弹起触发 |
| `onmousedown` | 鼠标按下触发 |

## 事件

注册事件有两种方式：**传统方式** 和 **事件监听注册方式**。

#### 传统注册方式

- 利用on 开头的事件onclick
- `<button onclick="alert('hi~')"></button>`
- `btn.onclick = function() {};`
- 特点：注册事件的 **唯一性**
- 同一个元素同一个事件只能设置一个处理函数，最<br />后注册的处理函数将会 **覆盖** 前面注册的处理函数。

```
btns[0].onclick = function() {
            alert('hi');
        }
```

### 事件监听注册方式

- `addEventListener()`
- 特点：**同一个元素同一个事件可以注册多个监听器**
- 里面的事件类型是字符串 必定加引号 而且不带on
- 按注册顺序依次执行

```
 btns[1].addEventListener('click', function() {
            alert(22);
        })
```

## 删除事件（解绑事件）

### 传统注册方式

```javascript
eventTarget.onclick = null;
```

### 方法监听注册方式

#### removeEventListener

# DOM 事件流

### 定义

**事件流** 描述的是从页面中接收事件的顺序。  ![](https://img-blog.csdnimg.cn/9ebccf7688b44895a2d8a3fc9f136fc1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBATW9vbnlfd3k=,size_20,color_FFFFFF,t_70,g_se,x_16#id=Szjrb&originHeight=395&originWidth=584&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

### 注意

1. JS 代码中只能执行捕获或者冒泡其中的一个阶段。
2. `onclick` 和 `attachEvent` 只能得到冒泡阶段。
3. `addEventListener(type, listener[, useCapture])` 第三个参数如果是 `true`，表示在事件捕<br />获阶段调用事件处理程序；如果是 `false`（不写默认就是 `false`），表示在事件冒泡阶段调用事件处理<br />程序。
4. 实际开发中我们很少使用事件捕获，我们 **更关注事件冒泡**。
5. **有些事件是没有冒泡的**，比如 `onblur`、`onfocus`、`onmouseenter`、`onmouseleave`

## 事件对象

```javascript
eventTarget.onclick = function(event) {}
eventTarget.addEventListener('click', function(event) {}）
// 这个event 就是事件对象，我们还喜欢的写成 e 或者evt
```

- 官方解释：`event` 对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。
- 简单理解：事件发生后，跟 **事件相关的一系列信息数据的集合** 都放到这个对象里面，这个对象就是事件对象 `event`，它有很多属性和方法

### 事件对象的常见属性和方法

| 事件对象属性方法 | 说明 |
| --- | --- |
| `e.target` | 返回触发事件的对象（标准） |
| `e.srcElement` | 返回触发事件的对象（非标准） |
| `e.type` | 返回事件类型 |
| `e.preventDefault()` | 阻止默认事件（标准） |
| `e.returnValue = true` | 阻止默认事件（非标准，IE678） |
| `e.stopPropagation()` | 阻止冒泡（标准） |
| `e.cancelBubble` | 阻止冒泡（非标准，IE678） |

## 事件委托

事件委托的核心原理：给父节点添加侦听器， 利用事件冒泡影响每一个子节点

# 常用的鼠标事件

1. 禁止鼠标右键菜单<br />`contextmenu` 主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单。

```javascript
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
})
```

2. 禁止鼠标选中（`selectstart` 开始选中）

```javascript
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
})
```

### 鼠标事件对象

`event` 对象代表事件的状态，跟事件相关的一系列信息的集合。现阶段我们主要是用鼠标事件对象 `MouseEvent` 和键盘事件对象 `KeyboardEvent`。

| 鼠标事件对象 | 说明 |
| --- | --- |
| `e.clientX` | 返回鼠标相对于浏览器窗口可视区的 `X`<br /> 坐标 |
| `e.clientY` | 返回鼠标相对于浏览器窗口可视区的 `Y`<br /> 坐标 |
| `e.pageX` | 返回鼠标相对于文档页面的 `X`<br /> 坐标IE9+支持 |
| `e.pageY` | 返回鼠标相对于文档页面的 `Y`<br /> 坐标IE9+支持 |
| `e.screenX` | 返回鼠标相对于电脑屏幕的 `X`<br /> 坐标 |
| `e.screenY` | 返回鼠标相对于电脑屏幕的 `Y`<br /> 坐标 |

#

# 定时器

### setTimeout() 定时器

```javascript
window.setTimeout(调用函数 [, 延迟的毫秒数]);
```

### setInterval() 定时器

```javascript
window.setInterval(回调函数 [, 间隔的毫秒数]);
```

`setInterval()` 方法重复调用一个函数，每隔这个时间，

### this 指向问题

`this` 的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定 `this` 到底指向谁，一般情况下的最终指向的是那个调用它的对象<br />现阶段，我们先了解一下几个 `this` 指向：

1. 全局作用域或者普通函数中 `this` 指向全局对象 `window`（注意定时器里面的 `this` 指向 `window`）
2. 方法调用中谁调用 `this` 指向谁
3. 构造函数中 `this` 指向构造函数的实例

#### 同步任务

同步任务都在主线程上执行，形成一个 **执行栈**。

#### 异步任务

JS 的异步是通过回调函数实现的。<br />一般而言，异步任务有以下三种类型：

1. 普通事件，如 `click`、`resize` 等
2. 资源加载，如 `load`、`error` 等
3. 定时器，包括 `setInterval`、`setTimeout` 等异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）。

## location 对象

`window` 对象给我们提供了一个 `location` 属性用于 **获取或设置窗体的URL**

### URL

统一资源定位符（Uniform Resource Locator, URL）是互联网上标准资源的地址。互联网上的每个文件都有<br />一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。<br />URL 的一般语法格式为：

```
格式
protocol://host[:port]/path/[?query]#fragment
举例
http://www.itcast.cn/index.html?name=andy&age=18#link
```

| 组成 | 说明 |
| --- | --- |
| `protocol` | 通信协议（http、ftp） |
| `host` | 主机（域名） |
| `port` | 端口号（可选），省略时使用方案的默认端口，如http默认端口80 |
| `path` | 路径，由零或多个 `/`<br /> 隔开的字符串，一般表示主机上的一个目录或文件地址 |
| `query` | 参数，以键值对的形式，通过 `&`<br /> 符号分隔开 |
| `fragment` | 片段，`#`<br /> 后面内容，常见于链接、锚点 |

## navigator 对象

`navigator` 对象包含有关浏览器的信息

## history 对象

`window` 对象给我们提供了一个 `history` 对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的URL。
