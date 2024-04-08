---
时间: 
作者: "\rLGD_Sunday"
标题: 一小时读完《JavaScript权威指南第7版》上
图片: https://img9.doubanio.com/view/subject/s/public/s9056065.jpg
链接: https://www.bilibili.com/video/BV1Ts4y1N7S2
评价: 8★★★★★
---
# 第1章：JavaScript 简介

从 `JS` 简介开始，本章主要包含三部分内容：

1. `JavaScript` 与 `ECMAScript` 的关系
    
2. `JS` 的宿主环境都有什么
    
3. 在哪里书写 `js`
    

## 01：JavaScript`与`ECMAScript 的关系

`JavaScript` 是一门语言，它和 `java` 完全没有关系。

最初的 `js` 以脚本语言的形式存在。到目前为止，已经发展成为 **唯一** 可以在浏览器中运行，并且也可以借助 `node` 在服务器端运行的编程语言。

而 `ECMAScript` 是 `JavaScript` 的语言标准。比如我们常说的 `ES5` 就是 `2009年` 的 `ECMAScript` 标准。

从 `2015年` 开始，`ECMAScript` 保持着每年一次的更新频率，对应的语言标准也可以以年份的形式来称呼。比如：`ES 2015` 对应 `ES6`、`ES 2016` 对应 `ES7`。

## 02：`JS` 的宿主环境都有什么

`js` 想要运行，那么就必须依赖于宿主环境。

现在 `js` 的宿主环境主要有两个：

1. 浏览器
    
2. `node`
    

基于浏览器这个宿主环境，`js` 成了现在前端不得不学习的一门语言。

而基于 `node`，`js` 也成功入侵服务端，可以开发服务端代码。

## 03：在哪里书写 `JavaScript`

目前书写 `js` 的地方主要有两个：

1. 浏览器控制台
    
2. 编辑器
    

我们通常可以在浏览器控制台中编写一些 **调试代码**，这是非常方便的。

![image-20230524145813970](file://C:/desktop/book_read_quickly-master/12%EF%BC%9AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89%EF%BC%88%E9%87%8D%E5%88%B6%EF%BC%89/%E9%87%8D%E5%88%B6%E7%89%88/%E7%AC%AC1%E7%AB%A0%EF%BC%9AJavaScript%20%E7%AE%80%E4%BB%8B/%E7%AC%AC1%E7%AB%A0%EF%BC%9AJavaScript%20%E7%AE%80%E4%BB%8B.assets/image-20230524145813970.png?lastModify=1699756067)

而日常的开发，还是在编辑器中进行，目前最常用的就是 `VS Code`。

![image-20230524145840810](file://C:/desktop/book_read_quickly-master/12%EF%BC%9AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89%EF%BC%88%E9%87%8D%E5%88%B6%EF%BC%89/%E9%87%8D%E5%88%B6%E7%89%88/%E7%AC%AC1%E7%AB%A0%EF%BC%9AJavaScript%20%E7%AE%80%E4%BB%8B/%E7%AC%AC1%E7%AB%A0%EF%BC%9AJavaScript%20%E7%AE%80%E4%BB%8B.assets/image-20230524145840810.png?lastModify=1699756067)

# 第2章：词法结构

所谓词法结构指的是：**使用 `JS` 的基本语法**。

这部分内容，只要你有 `JS` 经验，那么对你而言都应该非常简单才对。

但是，我在看完本章的内容之后，依然发现有两个地方可能需要和大家明确一下：

1. 注释的三种方式
    
2. 省略分号的潜在问题
    

## 01：注释方式

`JS` 中定义注释主要有三种方式：

1. 单行注释：这是最常用的一种注释形式 ![image-20230526163404168](file://C:/desktop/book_read_quickly-master/12%EF%BC%9AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89%EF%BC%88%E9%87%8D%E5%88%B6%EF%BC%89/%E9%87%8D%E5%88%B6%E7%89%88/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84.assets/image-20230526163404168.png?lastModify=1699756084)
    
2. 多行注释一 ：它可以支持多行，但是实际开发中使用并不多 ![image-20230526163435299](file://C:/desktop/book_read_quickly-master/12%EF%BC%9AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89%EF%BC%88%E9%87%8D%E5%88%B6%EF%BC%89/%E9%87%8D%E5%88%B6%E7%89%88/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84.assets/image-20230526163435299.png?lastModify=1699756084)
    
3. 多行注释二：
    
    /**  
    * 注释内容  
    */
    
    这也是一种多行注释，不过它更好看。
    
    同时，当它被标记在方法上时，在调用这个方法的时候，会有提示。
    
    ![image-20230524153118168](file://C:/desktop/book_read_quickly-master/12%EF%BC%9AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89%EF%BC%88%E9%87%8D%E5%88%B6%EF%BC%89/%E9%87%8D%E5%88%B6%E7%89%88/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84.assets/image-20230524153118168.png?lastModify=1699756084)
    
    所以，在日常开发中，如果我们想要进行多行注释的话，那么最好使用这种方式。
    

## 02：分号问题

`JavaScript` 这门编程语言中，`;` 分号并不是必须的。

甚至很多企业的项目开发中，都会主动 **去除分号**。

![image-20230526163911329](file://C:/desktop/book_read_quickly-master/12%EF%BC%9AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89%EF%BC%88%E9%87%8D%E5%88%B6%EF%BC%89/%E9%87%8D%E5%88%B6%E7%89%88/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84.assets/image-20230526163911329.png?lastModify=1699756084)

但是需要注意一点： **分号的剔除可能会导致错误**。比如说这样的一段代码：

let x = 0   
[x, x + 1, x+2].forEach()

在编译时，就会被解释为：

let x = (0)[(x, x + 1, x + 2)].forEach()

从而会得到一个错误：

![image-20230524155726892](file://C:/desktop/book_read_quickly-master/12%EF%BC%9AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89%EF%BC%88%E9%87%8D%E5%88%B6%EF%BC%89/%E9%87%8D%E5%88%B6%E7%89%88/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84.assets/image-20230524155726892.png?lastModify=1699756084)

所以，有时候咱们需要定义一些防御性的分号（一行代码开头加;）：

let x = 0   
;[x, x + 1, x+2].forEach()

# 第3章：类型、值和变量

书中从第三章开始一直到第十章为止，开始逐步介绍 `js` 的各种概念与 `API`。

涉及到的内容大体路径为：**类型 -> 表达式 -> 语句 -> 对象 / 数组 -> 函数 -> 类 -> 模块**。

这基本涵盖了所有的 `JS` 基础语法。

那么让我们回到本章的内容中，本章主要介绍了以下 3 部分内容：

1. 基本数据类型
    
2. 原始值与引用类型
    
3. 类型转换
    

## 01：基本数据类型：数值、null 、 undefined 和 Symbol

书中把所有的基本数据类型都一一进行了介绍，但是很多都是常用的方法。

我从中找了三块易错的概念：

### 数值

`JS` 中的数值分为两种：

1. 整数
    
2. 浮点数（小数）
    

这两种都被叫做数值。

但是需要注意，`JS` 处理数值运算会存在问题，比如：

// 大数字问题  
const bigNum = 87627267382917816  
console.log(bigNum) // 87627267382917820  
​  
// 精度问题  
console.log(0.1 + 0.2); // 0.30000000000000004

针对 **大数字** 问题，我们可以通过 `BigInt` 进行处理：

// 大数字表示  
const bigNum = 87627267382917816n  
console.log(bigNum) // 87627267382917816n

而针对 **精度丢失** 的问题，也可以通过一些方式进行处理，咱们这里列举了三种：

const f1 = 0.1  
const f2 = 0.2  
​  
// ① 精度丢失处理方案：转化为整数，再转化为小数  
console.log((f1 * 10 + f2 * 10) / 10); // 0.3  
// ② 精度丢失处理方案：直接截断  
console.log((f1 + f2).toFixed(2)); // 0.30  
// ③ 精度丢失处理方案：高精度数学计算。比如 decimal.js

### null 和 undefined

`null` 和 `undefined` 一般会被一起说，这两个值在 `js` 中都被表示为 `false`，日常开发区别不大。

但是在实际沟通中（面试），咱们通常会说它们有区别，那就是：`null` 它代表的意义是一个 **空值**。而 `undefined` 则是 **没有值**。

### Symbol

`Symbol` 是 `ES6` 之后，新增的一个数据类型。表示 **唯一的，永不会重复的值**。

咱们可以通过以下代码来简单的了解它的用法：

console.log(Symbol('hello') == Symbol('hello')); // false

## 02：原始值与引用类型

在 `js` 中，数据类型大致可以被分为两类：

1. 基本数据类型
    
2. 复杂数据类型
    

**图解：**

![image-20230524182553607](file://C:/desktop/book_read_quickly-master/12%EF%BC%9AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89%EF%BC%88%E9%87%8D%E5%88%B6%EF%BC%89/%E9%87%8D%E5%88%B6%E7%89%88/%E7%AC%AC3%E7%AB%A0%EF%BC%9A%E7%B1%BB%E5%9E%8B%E3%80%81%E5%80%BC%E5%92%8C%E5%8F%98%E9%87%8F/%E7%AC%AC3%E7%AB%A0%EF%BC%9A%E7%B1%BB%E5%9E%8B%E3%80%81%E5%80%BC%E5%92%8C%E5%8F%98%E9%87%8F.assets/image-20230524182553607.png?lastModify=1699756103)

其中基本数据类型对应 **原始值** ，它的值被保存在 **栈** 中 ，是 **不可修改** 的。当我们为一个基本数据类型重新赋值时，它在内存中会分成两步处理：**销毁旧的内存空间**，**创建新的内存空间**，以完成值的变化。

而复杂数据类型（对象）对应 **引用类型**，它的值被保存在 **堆** 中， 是 **可以修改** 的。但是变量永远只能指向栈，所以它会在 **栈** 中保存 **堆内存地址**。当一个复杂数据类型被重新赋值时，会在 **堆内存中增加数据** 。

## 03：类型转换

任何一种编程语言中都提供了类型转换的能力。

在 `JS` 中的类型转换被分为：

1. 隐式转换
    
2. 显示转换
    

### 隐式转换

在 `JS` 中包含了非常多的隐式转换，比如：

// 利用加号（+），进行字符串隐式转换  
console.log('a 的值为：' + 1); // 数字 1 转化为字符串  
// boolean 隐式转换  
console.log(0 == false); // true（不判断类型）  
console.log(0 === false); // false（判断类型）  
// 数字的隐式转换  
console.log('1' - 0); // 1（数值）  
console.log('1' - 0 + 1); // 2（数值）

但是大量的使用隐式转换可能会让很多的业务逻辑难以理解，所以实际的企业开发中，我们应该 **慎用** 隐式转换。

以上的隐式转换仅推荐两种：**字符串拼接** 和 **全等号**

### 显示转换

不推荐的隐式转换可以使用显式转换代替，比如：

console.log(parseInt('18.1')); // 18  显示转化为整数  
console.log(parseFloat('3.1415')); // 3.1415  显示转化为小数

除此之外还有很多的显示转换方法，咱们这里就没有办法一一列举了。

 # 第4章：表达式与操作符

根据这一章的标题其实我们也可以知道，本章的主要内容就是围绕着两个方向进行的：

1. 表达式
    
2. 操作符
    

其中针对于表达式的内容其实是比较简单的，比如书中提到：**`JS` 中任何一行代码都是一个表达式**。

以下代码为例：

// 主表达式  
3.1415926  
// 函数表达式  
fn()  
// 属性访问表达式  
user.name

这个概念咱们有一个了解就可以了。

重点是 **操作符** 。

`JS` 中的操作符非常多，简单的有 `+、-、*、/`，复杂的有：

1. `in` 操作符：
    
2. `instanceof` 操作符：
    
3. `typeof` 操作符：
    
4. `?` 条件式访问：
    
5. `??` 先定义操作符：
    
6. `eval()` 函数操作符：
    
7. `delete` 操作符：
    

这七个操作符，在日常的开发中都有价值，所以说，来吧~~~~

## 01：in 操作符

`in` 操作符的作用是：**判断某个属性是否为指定对象的属性名** ，具体语法如下：

const user = {  
  name: '张三'  
}  
// 属性 in 对象  
console.log('name' in user); // true  
console.log('age' in user); // false

## 02：instanceof 操作符

`instanceof` 操作符的作用是：**判断某个对象是否为另一个类的实例**，具体语法如下：

const d = new Date()  
// 实例对象 instanceof 类  
console.log(d instanceof Date); // true  
console.log(d instanceof Object); // true  
console.log(d instanceof Array); // false

## 03：typeof 操作符

`typeof` 操作符的作用是：**返回一个任意值的结果**，这个结果是固定的九类：

![image-20230525115701808](file://C:/desktop/book_read_quickly-master/12%EF%BC%9AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89%EF%BC%88%E9%87%8D%E5%88%B6%EF%BC%89/%E9%87%8D%E5%88%B6%E7%89%88/%E7%AC%AC4%E7%AB%A0%EF%BC%9A%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%B8%8E%E6%93%8D%E4%BD%9C%E7%AC%A6/%E7%AC%AC4%E7%AB%A0%EF%BC%9A%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%B8%8E%E6%93%8D%E4%BD%9C%E7%AC%A6.assets/image-20230525115701808.png?lastModify=1699756119)

具体语法如下：
```

// typeof 任意值  
console.log(typeof ''); // string  
console.log(typeof 3.14); // number  
console.log(typeof {}); // object  
console.log(typeof []); // object

```
## 04：in、instanceof、typeof 总结

根据咱们刚才所看的这三个操作符可知：

1. `in 和 instanceof`：都会 **返回 `boolean` 的结果**，区别在于 `in` 是判断 **属性是否属于对象**，`instanceof` 是判断 **对象是否属于类**
    
2. `typeof`：返回 **string 类型的结果**。这个结果是固定的九选一。同时 **针对 `{}` 和 `[]` 返回的结果都是 `object`**。
    

## 05：? 条件式访问

当我们从 **空值（`null` 或 `undefined`）** 中获取某个属性时，一般会得到一个 `TypeError`：

const user = null  
​  
console.log(user.name); // TypeError

如果 `user` 是服务端返回的值，咱们可能很难判断它的结果到底是什么，所以我们可能会写这样的一段代码，它并不好看~~~：

```
const user = null  
​  
if (user) {  
  console.log(user.name);  
} else {  
  console.log(undefined);  
}
```

但是利用 `单问号 ? 条件式访问` 咱们可以让整个代码的结果变得更加优雅。

`? 条件式访问` 的作用是：**如果 ? 前的表达式为空值（`null || undefined`）则会返回 `undefined`**

```
const user = null  
console.log(user?.name); // undefined
```

## 06：?? 先定义操作符

`??` 先定义操作符和 `|| 逻辑或` 非常类似。

想要搞明白 `??` ，那么咱们最好先搞清楚 **假值** 和 **逻辑或** 的概念。

### 假值

在 `JS` 中存在 **6个** 假值：**undefined、null、0、''、false、NaN** 。

他们在逻辑判断中，都会被作为假来看。

### 逻辑或

在逻辑或中，所有的假值都会被判定为 **假**：

```
// || 逻辑或：假值 都会被认为假  
console.log(0 || 1); // 1

```
但是，有些时候， `0` 可能是一个有意义的数值，所以我们需要它被判断为真，那么这时就可以使用 `??` 先定义操作符

### 先定义操作符

在 `??` 中，只有 `undefined` 和 `null` 会被认定为 **假**：

```
// ?? 先定义操作符：只有 undefined 和 null 会被认为假
console.log(0 ?? 1); // 0
console.log(undefined ?? 1); // 0
console.log(null ?? 1); // 0

```
所以，`??` 和 `||` 在日常开发中配合使用，可以处理更多的业务场景。

## 07：eval() 函数操作符

`eval()` 本质上是一个 **函数**，可以 **接收一个参数**。

它接收的参数应该是一个 **表达式（可以是字符串）**，`eval()` 会计算这个表达式的结果，并返回：

```
// 得到结果
console.log(eval(2 + 3)); // 5

// 声明了函数 fn
console.log(eval(" function fn () { console.log('我是 fn') } "));
fn() // 我是 fn
```

`eval` 在实际开发中，可以执行 **动态拼接的代码**。

## 08：delete 操作符

最后一个操作符就是 `delete` 操作符，它的作用是：**删除指定的对象属性或数组元素**：

```
const user = {
  name: '张三'
}
// 从对象中删除 name 属性
delete user.name
console.log('name' in user); // false

const arr = ['张三', '李四', '王五']
// 从数组中删除 0 下标元素
delete arr[0]
console.log(arr[0]); // undefined
```

# 第5章：语句

书中的第五章把 `JS` 中的语句进行了概括，大致的内容分为了 `4` 类：

1. 条件语句
    
2. 循环语句
    
3. 跳转语句
    
4. 其他语句
    

其中，条件语句比较简单，主要包含：

1. `if` 语句
    
2. `switch` 语句
    

这两个比较常用，所以我们不再进行赘述。

循环语句包含：

1. `while` 循环
    
2. `do/while` 循环
    
3. `for` 循环
    
4. **`for/of` 循环**
    
5. **`for/in` 循环**
    

其中前三个也比较常用，咱们同样不再赘述。后两个可能有些同学会不太熟悉，在面试的时候它们经常会被一起去说，所以咱们也会把它们两个放到一起，主要说下它们的异同点。

跳转语句包括：

1. `break`
    
2. `continue`
    
3. `return`
    
4. `yield`
    
5. **`throw`**
    
6. **`try/catch/finally`**
    

其中前三个同样不会单独讲解。 `yield` 因为需要配合 **12 章（生成器）** 理解，所以这里也不会深入。而 `throw` 和 `try/catch/finally` 则是需要讲解的内容。

最后，其他语句包括：

1. **`with`**
    
2. `debugger`
    
3. `use strict`
    

这三个，咱们主要说一下 `with` 即可。

那么明确好了，这一章的重点之后，下面，咱们就来依次看一下~

## 01：循环语句

### for/of 循环 与 for/in 循环

首先咱们先来看一下它们的语法：

const arr = ['张三', '李四', '王五']  
const user = {  
  name: '张三'  
}  
​  
// ------ 循环数组 ------  
// 正常循环，拿到 下标  
for (const index in arr) {  
  console.log(index);  
}  
// 正常循环，拿到 value  
for (const value of arr) {  
  console.log(value);  
}  
​  
// ------ 循环对象 ------  
// 正常循环，拿到 key  
for (const key in user) {  
  console.log(key);  
}  
// TypeError: user is not iterable（不可迭代）  
for (const key of user) {  
  console.log(key);  
}

根据代码我们可以知道：

1. 针对数组：
    
    1. `for/in` 可以正常循环，拿到 `index`
        
    2. `for/of` 可以正常循环，拿到 `value`
        
2. 针对对象：
    
    1. `for/in` 可以正常循环，拿到 `key`
        
    2. `for/of` 会出现类型错误，原因是因为 **for/of 循环只能循环可迭代对象**（什么是可迭代对象在 `12章` 中解释）
        

那么由此可知，`for/in 与 for/of` 的最大区别就是：**`for/in` 可以循环任意可枚举对象，而 `for/of` 只能循环可迭代对象**

> 注意：这里出现了两个概念：
> 
> 1. 可枚举
>     
> 2. 可迭代
>     
> 
> 这两个概念，在后面会依次讲解。

## 02：跳转语句

`throw` 的作用是 **抛出异常**，可以通过 `throw new Error(错误消息)` 的方式进行使用。
```

function fn(n) {  
  if (n < 0) {  
    throw new Error('n 的值不能小于 0')  
  }  
}  
​  
fn(-1)

而 `try/catch/finally` 的作用是 **捕获异常**：

function fn() {  
  try {  
    // try 中的代码出现异常会被捕获  
    JSON.parse('张三')  
  } catch (err) {  
    // 捕获异常之后，执行 catch  
    console.log(err); // SyntaxError: Unexpected token '张', "张三" is not valid JSON  
  } finally {  
    // 无论是否捕获了异常，finally 总会执行  
    console.log('finally');  
  }  
}  
​  
fn()
```

## 03：其他语句

[with](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/with) 是一个不被推荐使用的语法，它可以 **混淆指定代码块的作用域指向**。

比如，咱们来看这段代码：

```
const user = {  
  name: '张三'  
}  
​  
with (user) {  
  // 使用 user 混淆作用域，这里的 name 会被理解为 user.name  
  console.log(name);  
}
```

这样的混淆特性，可能会导致程序变得难以理解，所以 **官方** 建议慎用。

但是在实际开发中，`with` 却能够给我们提供一些妙用，比如在 `vue 3` 的 `compiler 编译器` 中，就是用到了 `with`。
 # 第6章：对象

书中对于第六章描述的篇幅非常多，一共分为 `10` 个小节，从最基础的 **对象简介** 开始，一直讲到了 **对象扩展语法**。

其中包含了非常多的基础，比如：如何创建对象、如何访问对象属性。这些内容不在咱们讲解范围之内。

本章，我们主要讲解以下四个部分：

1. 测试属性
    
2. 枚举属性
    
3. 扩展对象
    
4. 序列化对象
    

## 01：测试属性

测试属性指的是 **测试某一个名字是否是指定对象的一个属性名**。

测试的方式一共有三种，测试的粒度从大到小排列：

1. `in` 操作符： 在 **第四章** 中，咱们学习了 `in` 操作符。它返回一个 `boolean` 型的值，可以判断 **自有属性和继承属性**
    
```
    const user = {  
      name: '张三'  
    }  
    // 属性 in 对象  
    console.log('name' in user); // true  
    console.log('age' in user); // false  
    console.log('toString' in user); // true
```
    
2. `hasOwnProperty` 方法：它是对象的原型方法，只能判断 **自有属性**，不包含继承属性：
    
```
    const user = {  
      name: '张三'  
    }  
    // Object.prototype.hasOwnProperty()  
    console.log(user.hasOwnProperty('name')); // true  
    console.log(user.hasOwnProperty('toString')); // false
```
    
3. `propertyIsEnumerable` 方法：这个方法粒度更细，只有当属性是 **自有属性** 并且 **enumerable（可枚举） 特性为 `true`** 时，才会返回 `true`：
    
```
    const user = {  
      name: '张三',  
      age: 18  
    }  
    // 利用 Object.defineProperty 修改 age 的可枚举特性  
    Object.defineProperty(user, 'age', {  
      enumerable: false  
    })  
    // Object.prototype.propertyIsEnumerable()  
    console.log(user.propertyIsEnumerable('name')); // true  
    console.log(user.propertyIsEnumerable('age')); // false  
    console.log(user.propertyIsEnumerable('toString')); // false
    

```
## 02：枚举属性

在之前，咱们多次提到了可枚举的概念。

那么在上面的例子中，咱们对 **对象属性的可枚举性，进行了操作**。

由上面的代码可知：

1. 默认创建的属性都是可枚举的
    
2. 通过 `Object.defineProperty` 可以修改指定属性的可枚举性
    
3. 通过 `propertyIsEnumerable` 方法，可以判断属性是否可枚举
    

当一个属性不可枚举时，`for/in` 循环会忽略掉该属性：

const user = {  
  name: '张三',  
  age: 18  
}  
// 利用 Object.defineProperty 修改 age 的可枚举特性  
Object.defineProperty(user, 'age', {  
  enumerable: false  
})  
​  
for (const key in user) {  
  console.log(key); // 只打印 name  
}

同时，咱们也可以通过 `Object.keys()` 方法，获取到 **指定对象的可枚举属性**，通过 `Object.getOwnPropertyNames()` 方法，获取到 **指定对象的所有自有属性（无论是否可枚举）**：

const user = {  
  name: '张三',  
  age: 18  
}  
// 利用 Object.defineProperty 修改 age 的可枚举特性  
Object.defineProperty(user, 'age', {  
  enumerable: false  
})  
​  
console.log(Object.keys(user)); // ['name']  
console.log(Object.getOwnPropertyNames(user)); // ['name', 'age']

## 03：扩展对象

所谓扩展对象指的是：**把一个对象的属性复制到另一个对象上**。这在日常的开发中非常常见（比如：合并要用户信息），一共有两种方式：

```
const user = {  
  name: '张三'  
}  
​  
const info = {  
  token: 'xxx'  
}  
​  
// 方式一：Object.assign 方法（注意：Object.assign 返回的是第一个参数）  
console.log(Object.assign(user, info)); // {name: '张三', token: 'xxx'}  
console.log(user); // {name: '张三', token: 'xxx'}  
console.log(Object.assign(user, info) === user); // true  
// 如果不想修改 user，可以使用这种方式合并  
console.log(Object.assign({}, user, info)); // {name: '张三', token: 'xxx'}  
​  
// 方式二：扩展操作符（推荐）  
console.log({ ...user, ...info }); // {name: '张三', token: 'xxx'}

```
## 04：序列化对象

所谓序列化指的就是 **把对象变为 `json 格式` 字符串** 和 **把 `json 格式` 字符串 变为对象** 的过程。这也是日常开发中非常常见的需求。

涉及到的方法主要有两个 `JSON.stringify()` 和 `JSON.parse()` ：
```

// 对象 转化为 json  
const user = {  
  name: '张三'  
}  
console.log(JSON.stringify(user)); // {"name":"张三"}  
​  
// json 转化为 对象  
const str = '{"name":"张三"}'  
console.log(JSON.parse(str)); // {name: '张三'}
```

# 第7章：数组

`js` 中 **数组是对象的另一种呈现**。

通常情况下，我们把 **对象称为无序集合**，而把 **数组称为有序集合**。

数组在日常开发中，使用频率非常高，所以很多同学会对数组的基本用法非常熟悉。

而对于《JavaScript 权威指南》而言，作者在书中非常详尽的介绍了数组各种各样的方法，比如：**数组如何创建、如何访问元素、forEach 方法、filter 方法的用法 等等**。

因为这些操作非常基础，所以咱们不会在视频中讲解。

而是会中挑选出更有价值的知识点，具体包括：

1. 稀疏数组的概念
    
2. 类数组与转化
    
3. 打平数组
    

## 01：稀疏数组

稀疏数组可能很多小伙伴没有听说过这个概念，所谓稀疏数组指的是： **0 索引下没有元素的数组**。

这个概念非常简单，咱们可以通过以下简单的方式得到一个稀疏数组：

const arr = new Array(5)  
console.log(arr[0]); // undefined

这个概念只需要了解即可。

## 02： 类数组与转化

**类数组对象** 是 `JS` 中的一个独特概念，它指的是：**拥有数组的下标，但缺少数组方法（比如 `push`）的对象**。

这种对象非常常见，比如 `arguments`：

```
function fn() {  
  console.log(arguments); // [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]  
  console.log(arguments.push); // undefined 没有该属性  
}  
fn(1, 2)

所以，这导致我们没有办法使用常用的方式进行遍历，比如使用 `forEach` 函数

function fn() {  
  console.log(arguments.forEach); // undefined 没有该属性  
}  
fn(1, 2)

所以，很多时候咱们可能期望把 **类数组转化为真数组**，那么此时可以使用 `Array.from` 方法：

function fn() {  
  console.log(arguments.forEach); // undefined 没有该属性  
  const arr = Array.from(arguments)  
  console.log(arr.forEach); // ƒ forEach() { [native code] }  
}  
fn(1, 2)
```

## 03：打平数组

所谓打平数组指的是：**把多维数组打平为一维数组**。

这里涉及到了一个方法 [flat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)：

// 一维 套 二维 套 三维  
const arr = [0, [1, 2], [[3, 4]]];  
// 一次 flat 打平一级  
console.log(arr.flat()); // [0, 1, 2, [3, 4]]  
​  
// 可以传递数字参数，表示打平的级数(默认为 1)  
console.log(arr.flat(2)); // [0, 1, 2, 3, 4]

除了 `flat` 之外，作者还为我们介绍了另外一个方法 [flatMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) 。这是一个 **复合方法** 等价于 **在调用 [`map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法后再调用深度为 1 的 [`flat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 方法（`arr.map(...args).flat()`），但比分别调用这两个方法稍微更高效一些**：

// 把该数组，变为 ['hello', 'world', 'hello', 'sunday']  
const arr = ["hello world", 'hello sunday']  
// 使用 map + flat  
const mapArr = arr.map(item => item.split(' '))  
console.log(mapArr); // [['hello', 'world'], ['hello', 'sunday']]  
const flatMapArr = mapArr.flat()  
console.log(flatMapArr); // ['hello', 'world', 'hello', 'sunday']  
​  
// 使用 flatMap()：先 map 再自动打平  
const flatMapArr2 = arr.flatMap(item => item.split(' '))  
console.log(flatMapArr2); // ['hello', 'world', 'hello', 'sunday']

## 总结

在本章中，咱们主要筛选了三块重点：

1. 其中稀疏数组只是一个概念，了解即可
    
2. 类数组转化，在日常开发中比较常见，所以才会被单独拿出来说
    
3. 而 打平数组 属于不常见，但是很有价值的方法
    

除此之外，数组的使用更关注于基本 `API`，书中为此罗列了大量的数组基本 `API` 用法。但是我个人感觉，如果你要看 `API`，那么去 `MDN` 可能会是更好地选择。
# 第8章：函数

函数是 `js` 中的一等公民。它代表了 **一组需要执行的任务或语句**。

咱们在日常开发中几乎一直都在使用函数，所以函数本身对于我们而言，应该是一个非常熟悉的东西。

那么在 《JavaScript 权威指南》中，它对于函数的讲解其实非常的全面（基础）。

从 **如何定义函数开始**，讲到 **如何调用函数 -> 函数的形参和实参的概念 -> 命名空间 -> 闭包 -> 函数的属性、方法以及静态构造函数 -> 函数式编程。**

在这些功能之中有一些易错的点，比如：

1. 闭包的概念
    
2. 函数对象的属性、方法和构造函数的概念
    

这两块，就是咱们这一小节要说明的内容。

## 01：闭包

闭包的概念是在面试的时候，经常被问到的，书中对于闭包定义的概念是：

> `JavaScript` 函数对象的内部状态不仅要包括函数代码，还要包括对函数定义所在作用域的引用。这种函数对象与作用域(即一组变量绑定)组合起来解析函数变量的机制，在计算机科学文献中被称作闭包(closure)。

通过书中也提到：

> 严格来讲，所有JavaScript函数都是闭包。

这个解释其实和咱们国内日常对于闭包的解释有一些语义上的差别。

国内通常情况下对于闭包的解释是：

> 可以访问其它函数作用域中变量的函数，就被叫做闭包函数。

那么除了这两种解释之外，在 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures) 中也对闭包进行了解释：

> **闭包**（closure）是一个函数以及其捆绑的周边环境状态（**lexical environment**，**词法环境**）的引用的组合。换而言之，闭包让开发者可以 **从内部函数访问外部函数的作用域**。在 JavaScript 中，闭包会随着函数的创建而被同时创建。

咱们综合以上三点，其实就可以完整的得出一个闭包的权威结论：

1. 所有 `JavaScript` 函数都是闭包
    
2. 闭包可以访问外部函数作用域中才有的变量
    

## 02：函数对象的属性、方法和构造函数的概念

再看这一块之前，咱们首先需要明确一个基础的概念，那就是：**函数本质上是一个对象**。

那么对于对象而言，它本身就有属性和方法，比如说，面试常问到的 `apply、call、bind` 方法。以及 `prototype 属性`。

而针对于构造函数来说，它更像是一个约定。咱们通常约定 **首字母大写的普通函数就是构造函数** 。

> 当然，我们也可以不遵守这个约定，把所有的函数都当成构造函数使用，并不会出现错误。

 
