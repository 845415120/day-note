---
时间: 11分
作者: "\r技术蛋老师"
标题: JavaScriptvarletconst的区别
图片: https://i0.hdslb.com/bfs/archive/8b5038b220739633ae33cad5a9e041056a7facd8.jpg@480w_300h_1c_!web-space-channel-video.webp
链接: https://www.bilibili.com/video/BV1qk4y1k75W
评价: ★★★★★
---
## let和const命名

### let基本用法-块级作用域

在es6中可以使用let声明变量，用法类似于var

> ⚠️ let声明的变量，只在`let`命令所在的代码块内有效

```js
{
    let a = 10;
    var b = 20;
}
console.log(a); //a is not defined
console.log(b); //20
复制代码
```

### 不存在变量提升

`var`命令会发生`变量提升`现象，即变量可以在声明之前使用，值为`undefined`。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定在声明后使用，否则报错

```js
//var的情况
console.log(c);//输出undefined
var c = 30;


//let的情况
console.log(c);// 报错ReferenceError
let c = 30;
复制代码
```

#### 不允许重复声明

`let`不允许在相同作用域内，重复声明同一个变量

```js
let c = 10;
let c = 30;
console.log(c); //报错

function func(arg) {
  let arg; // 报错
}
复制代码
```

### 暂时性死区

了解的一个名词，说的就是`let`和`const`命令声明变量的特征。

在代码块内，使用`let`命令声明变量之前，该变量都是不可用的。这在语法上，称为`暂时性死区`(temporal dead zone，简称 TDZ)

### 为什么需要块级作用域？

#### 原因一：内层变量可能会覆盖外层变量

```js
function foo(a){
    console.log(a);
    if(1===2){
        var a = 'hello 小马哥';
    }
}
var a = 10;
foo(a);
复制代码
```

#### 原因二：用来计数的循环遍历泄露为全局变量

```js
var arr = []
for(var i = 0; i < 10; i++){
    arr[i] = function(){
        return i;
    }
}
console.log(arr[5]());
复制代码
```

变量`i`只用来控制循环，但是循环结束后，它并没有消失，用于变量提升，泄露成了全局变量。

**解决循环计数问题**

```js
//解决方式一：使用闭包
var arr = []
for(var i = 0; i < 10; i++){
    arr[i] = (function(n){
        
        return function(){
            return n;
        }
    })(i)
}
//解决方式二：使用let声明i

var arr = []
for(let i = 0; i < 10; i++){
    arr[i] = function () {
        return i;
    }
}
复制代码
```

### const基本用法-声明只读的常量

这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值。对于`const`来说，只声明不赋值，就会报错。

```js
const a = 10;
a = 20;//报错

const b; //报错
复制代码
```

### 与`let`命令相同点

- 块级作用域
- 暂时性死区
- 不可重复声明

### `let`和`const`使用建议

> 在默认情况下用const,而只有你在知道变量值需要被修改的情况下使用let
