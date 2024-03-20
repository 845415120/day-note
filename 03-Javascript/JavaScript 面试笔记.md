# JavaScript

## ES6常用的API有哪些？

1. **let和const**：引入了块级作用域变量的声明方式。
2. **箭头函数**：提供了更简洁的函数声明语法。
3. **模板字符串**：允许使用反引号（`）创建多行字符串和插入变量。
4. **解构赋值**：可以从数组或对象中快速提取值并赋给变量。
5. 默认参数：在函数声明时可以设置参数的默认值。
6. 扩展运算符：用于将数组或对象展开为独立的元素。
7. **类（Class）**：引入了类和面向对象编程的概念。
8. **模块化**（Modules）：通过import和export语句实现模块的导入和导出。
9. **Promise**：用于处理异步操作，提供了更优雅的方式来处理回调函数。
10.**Set和Map**：提供了集合和字典数据结构，分别对应Set和Map对象。
11.**Symbol**：引入了一种新的原始数据类型，用于创建唯一的标识符。
12. Proxy：允许创建一个代理对象，用于拦截和自定义对象的操作。
13. 数组方法：ES6添加了许多数组的新方法，如forEach、map、filter、reduce等。
14. 对象方法：ES6引入了一些新的对象方法，如Object.assign、Object.keys、
Object.values等

## 箭头函数

没有自己的this
语法简洁
没有prototype,不能作为构造函数 不能new调用

作用:
保留上下文：没有自己的this绑定，它会捕获所在上下文的this值
this的值是在函数定义时确定的，而不是在函数被调用时动态绑定


### 3.new操作符的实现步骤如下

1. 创建一个对象
2. 将构造函数的作用域赋给新对象（也就是设置原型将对象的__proto__属性指向构造函数的prototype属性）
3. 让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 返回新的对象

## 数组方法

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230719/cbd88a83616795e43091300213c15b4.4zj6z9d2ucc0.webp)
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230719/8a976e52c6b42546d482548293258ef.18mcwhmamzeo.webp)



# 事件循环机制

因为JavaScript是单线程的语言
当一段代码中有同步和异步代码时,会先将同步代码压入执行栈中,将异步代码放到任务队列中,微任务放到微任务队列，宏任务放到宏任务队列,将同步代码执行完之后,事件循环会先把微任务队列执行清空,微任务队列清空后，进入宏任务队列，取宏任务队列的第一个项任务进行执行，执行完之后，查看微任务队列是否有任务，有的话，清空微任务队列。然后再执行宏任务队列，反复操作,直到所有队列任务执行完毕。

微任务队列的代表就是，Promise.then，MutationObserver，宏任务的话就是
setImmediate setTimeout setInterva

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230725/1672381958585-bbb9aa05-0cec-478b-b819-b0c722b90fac.8jf5yhyzzo4.webp)

# 原型对象

每个函数在创建时都被赋予一个prototype属性,它指向函数的原型对象

构造函数的prototype属性会指向它的原型对象,通过构造函数可以创建实例

## 原型对象,构造函数,实例

每一个函数在创建时都被赋予一个prototype属性,在默认情况下所有原型对象都会增加一个constructor属性,指向prototype属性所在的函数,即**构造函数**

当我们通过new操作符调用构造函数创建一个实例时,实例具有一个`_ _proto_ _`属性指向构造函数的原型对象.

## 原型链

在JavaScript中几乎所有对象都有``__proto__``属性指向函数原型对象,

而函数的原型对象同样存在``__proto__``属性指向上一级原型对象,层层往上指,直到最上层某个原型对象为null

![](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230707/image.1l03s01gwu2o.webp)

## 原型链继承

原型链继承的主要思想是：重写子类的prototype属性，将其指向父类的实例。

我们定义一个子类Cat，用于继承父类Animal，子类Cat的实现代码如下

```jsx
// 子类Cat
function Cat(name) {
   this.name = name;
}
// 原型继承
Cat.prototype = new Animal();
// 很关键的一句，将Cat的构造函数指向自身
Cat.prototype.constructor = Cat;
//因为如果不将Cat原型对象的constructor属性指向自身的构造函数的话，那将会指向父类Animal的构造函数。
//Cat.prototype.constructor === Animal; // true
//所以在设置了子类的prototype属性后，需要将其constructor属性指向Cat。
var cat = new Cat('加菲猫');
console.log(cat.type);    // Animal
console.log(cat.name);    // 加菲猫
console.log(cat.sleep()); // 加菲猫正在睡觉！
console.log(cat.eat('猫粮'));  // 加菲猫正在吃：猫粮
```

## 跨域问题

- JSONP：在DOM文档中,使用`<script>`标签，但却缺点只能发 GET 请求并且容易受到XSS跨站脚本攻击

- CORS：通过在服务器配置响应头
Access-Control-Allow-xxx字段来设置访问的白名单、可允许访问的方式等

- html原生的websocket

## 继承

继承的几种方式，方便能在必要的时候拿出解决方案。既然要实现继承，肯定要有父类，这里我们定义了一个父类Animal并增加属性、实例函数和原型函数，具体代码如下

```jsx
// 定义一个父类Animal
function Animal(name) {
   // 属性
   this.type = 'Animal';
   this.name = name || '动物';
   // 实例函数
   this.sleep = function () {
       console.log(this.name + '正在睡觉！');
   }
}
// 原型函数
Animal.prototype.eat = function (food) {
   console.log(this.name + '正在吃：' + food);
};
```

## 1.原型链继承

原型链继承的主要思想是：重写子类的prototype属性，将其指向父类的实例。

我们定义一个子类Cat，用于继承父类Animal，子类Cat的实现代码如下

```jsx
// 子类Cat
function Cat(name) {
   this.name = name;
}
// 原型继承
Cat.prototype = new Animal();
// 很关键的一句，将Cat的构造函数指向自身
Cat.prototype.constructor = Cat;
//因为如果不将Cat原型对象的constructor属性指向自身的构造函数的话，那将会指向父类Animal的构造函数。
//Cat.prototype.constructor === Animal; // true
//所以在设置了子类的prototype属性后，需要将其constructor属性指向Cat。
var cat = new Cat('加菲猫');
console.log(cat.type);    // Animal
console.log(cat.name);    // 加菲猫
console.log(cat.sleep()); // 加菲猫正在睡觉！
console.log(cat.eat('猫粮'));  // 加菲猫正在吃：猫粮
```
