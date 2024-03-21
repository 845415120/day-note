---
时间: 11分
作者: "\r技术蛋老师"
标题: JavaScript闭包
图片: https://i2.hdslb.com/bfs/archive/d2169ebbeaadffe33147c94e02bc3c0245d636bd.jpg@480w_300h_1c_!web-space-channel-video.webp
链接: https://www.bilibili.com/video/BV1iE411q7Qd
评价: ★★★★★
---

# 闭包

### 执行上下文环境

![e4e51d9fd511396a095568576ea23f42.png](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230707/image.6id3nvi4imw0.webp)
先进后出

理想情况下执行完毕栈被清空

还有另一种情况,虽然代码执行完毕但,执行上下文环境没有被干净的销毁.
作用域链![1d705c7d77c657ce51ceed96b75f4358.png](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230707/image.37cu1gyzt5m0.webp)
![032f44b429368425362c0e94b033069b.png](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230707/image.34vmjefi2vo0.webp)

### 闭包概念

 闭包:

- 本质就是上级作用域内变量的生命周期，因为被下级作用域内引用，而没有被释放。
- 就导致上级作用域内的变量，等到下级作用域执行完以后才正常得到释放。

官方解释:

 **一个拥有许多变量和绑定了这些变量执行上下文环境的函数**

闭包有两个很明显的特点:

- **函数拥有的外部变量的引用,在函数返回时,该变量仍然处于活跃状态**
- **闭包作为一个函数返回时,其执行上下文环境不会被销毁,仍然处于活跃状态**

JavaScript闭包的形成:

**JavaScript中函数内部的函数在包含它的外部函数之外被调用时,就会形成闭包**

单从js执行流机制来说是没办法解释闭包的；闭包概念真的很经典，这是一个关于作用域链的概念；js执行环境，你的全局作用域（window）是最大的作用域，你可以定义很多块级作用域。因为销毁全局作用域是你整个页面停止和关闭；所以每个函数内部都可以看作一个作用域，**当函数内部返回一个函数且子函数没在父级作用域内完成整个生命周期的话，父级函数是没办法完成一整个生命周期的**，闭包正是利用这一点卡住了父级函数的作用域， 如果你在父级函数中子函数执行完成返回一个基本类型的话是没办法卡住父级作用域的生命周期的。面试的时候，提到闭包，没必要去纠结，直接回答函数嵌套函数，且内部函数调用父级作用域的变量就可以称之为闭包了。因为js作用域生命名周期在于内部脚本是否全部执行完毕才会销毁，并且不会带到父级作用域；滥用闭包为什么存在内存泄漏的问题正是由于反复的，且频繁的使用闭包。

```JavaScript
function fn(){
    var max = 10;
    return function bar (x){
        if(x > max){
            console.log(x)
        }
    };
}
var f1 = fn();
f1(11);
```

当调用f1()函数时,因为f1()包含了对max变量的引用,此时fn()函数的执行上下文环境并不会直接被销毁

### 闭包的用途

#### 1. 结果缓存

在开发过程中，我们可能会遇到这样的场景，假如有一个处理很耗时的函数对象，每次调用都会消耗很长时间。

我们可以将其处理结果在内存中缓存起来。这样在执行代码时，如果内存中有，则直接返回；如果内存中没有，则调用函数进行计算，更新缓存并返回结果。

因为闭包不会释放外部变量的引用，所以能将外部变量值缓存在内存中

```jsx
var cachedBox = (function () {
   // 缓存的容器
   var cache = {};
   return {
       searchBox: function (id) {
           // 如果在内存中，则直接返回
           if(id in cache) {
              return '查找的结果为:' + cache[id];
           }
           // 经过一段很耗时的dealFn()函数处理
           var result = dealFn(id);
           // 更新缓存的结果
           cache[id] = result;
           // 返回计算的结果
           return '查找的结果为:' + result;
       }
   };
})();
// 处理很耗时的函数
function dealFn(id) {
   console.log('这是一段很耗时的操作');
   return id;
}
// 两次调用searchBox()函数
console.log(cachedBox.searchBox(1));
console.log(cachedBox.searchBox(1));  
```

#### 2. 封装

在JavaScript中提倡的模块化思想是希望将具有一定特征的属性封装到一起，只需要对外暴露对应的函数，并不关心内部逻辑的实现。

例如，我们可以借助数组实现一个栈，只对外暴露出表示入栈和出栈的push()函数和pop()函数，以及表示栈长度的size()函数。

```jsx
var stack = (function () {
   // 使用数组模仿栈的实现
   var arr = [];
   // 栈
   return {
       push: function (value) {
           arr.push(value);
       },
       pop: function () {
           return arr.pop();
       },
       size: function () {
           return arr.length;
       }
   };
})();
stack.push('abc');
stack.push('def');
console.log(stack.size());  // 2
stack.pop();
console.log(stack.size());  // 1
```

上面的代码中存在一个立即执行函数，在函数内部会产生一个执行上下文环境，最后返回一个表示栈的对象并赋给stack变量。在匿名函数执行完毕后，其执行上下文环境并不会被销毁，因为在对象的push()、pop()、size()等函数中包含了对arr变量的引用，arr变量会继续存在于内存中，所以后面几次对stack变量的操作会使stack变量的长度产生变化。

### 闭包练习题

#### 1. ul中有若干个li，每次单击li，输出li的索引值

如题目所述，大多数人会很快写出如下代码。

```jsx
<ul>
   <li>1</li>
   <li>2</li>
   <li>3</li>
   <li>4</li>
   <li>5</li>
</ul>
<script>
   var lis = document.getElementsByTagName('ul')[0].children;
   for (var i = 0; i < lis.length; i++) {
       lis[i].onclick = function () {
           console.log(i);
       };
   }
</script>
```

但是真正运行后却发现，结果并不如自己所想，每次单击后输出的并不是索引值，而一直都是“5”。

这是为什么呢？因为在我们单击li，触发li的click事件之前，for循环已经执行结束了，而for循环结束的条件就是最后一次i++执行完毕，此时i的值为5，所以每次单击li后返回的都是“5”。

采取使用闭包的方法可以很好地解决这个问题。

```jsx
<script>
   var lis = document.getElementsByTagName('ul')[0].children;
   for (var i = 0; i < lis.length; i++) {
       (function (index) {
           lis[index].onclick = function () {
               console.log(index);
           };
       })(i);
   }
</script>
```

在每一轮的for循环中，我们将索引值i传入一个匿名立即执行函数中，在该匿名函数中存在对外部变量lis的引用，因此会形成一个闭包。而闭包中的变量index，即外部传入的i值会继续存在于内存中，所以当单击li时，就会输出对应的索引index值。

#### 2. 定时器问题

定时器setTimeout()函数和for循环在一起使用，总会出现一些意想不到的结果，我们看看下面的代码。

```jsx
var arr = ['one', 'two', 'three'];
for(var i = 0; i < arr.length; i++) {
   setTimeout(function () {
       console.log(arr[i]);
   }, i * 1000);
}
```

但是运行过后，我们却会发现结果是每隔一秒输出一个“undefined”，这是为什么呢？

通过闭包可以解决这个问题，代码如下所示

```jsx
var arr = ['one', 'two', 'three'];
for(var i = 0; i < arr.length; i++) {
   (function (time) {
       setTimeout(function () {
           console.log(arr[time]);
       }, time * 1000);
   })(i);
}
```

通过立即执行函数将索引i作为参数传入，在立即函数执行完成后，由于setTimeout()函数中有对arr变量的引用，其执行上下文环境不会被销毁，因此对应的i值都会存在内存中。所以每次执行setTimeout()函数时，i都会是数组对应的索引值0、1、2，从而间隔一秒输出“one”“two”“three”。

#### 3. 作用域链问题

闭包往往会涉及作用域链问题，尤其是包含this属性时。

```jsx
var name = 'outer';
var obj = {
   name: 'inner',
   method: function () {
       return function () {
           return this.name;
       }
   }
};
console.log(obj.method()());  // outer
```

在调用obj.method()函数时，会返回一个匿名函数，而该匿名函数中返回的是this.name，因为引用到了this属性，在匿名函数中，this相当于一个外部变量，所以会形成一个闭包。

在JavaScript中，this指向的永远是函数的调用实体，而匿名函数的实体是全局对象window，因此会输出全局变量name的值“outer”。

如果想要输出obj对象自身的name属性，应该如何修改呢？简单来说就是改变this的指向，将其指向obj对象本身。

```jsx
var name = 'outer';
var obj = {
   name: 'inner',
   method: function () {
       // 用_this保存obj中的this
       var _this = this;
       return function () {
           return _this.name;
       }
   }
};
console.log(obj.method()());  // inner
```

在method()函数中利用_this变量保存obj对象中的this，在匿名函数的返回值中再去调用_this.name，此时_this就指向obj对象了，因此会输出“inner”。



## 小结

1、闭包的优点

- 保护函数内变量的安全，实现封装，防止变量流入其他环境发生命名冲突，造成环境污染。
- 在适当的时候，可以在内存中维护变量并缓存，提高执行效率。

2.闭包的缺点

- 耗内存:通常来说，函数的活动对象会随着执行上下文环境一起被销毁，但是，由于闭包引用的是外部函数的活动对象，因此这个活动对象无法被销毁，这意味着，闭包比一般的函数需要消耗更多的内存。

- 泄漏内存:在IE9之前，如果闭包的作用域链中存在DOM对象，则意味着该DOM对象无法被销毁，造成内存泄漏。




 
