---
时间: 11分
作者: "\r技术蛋老师"
标题: ES6_Class
图片: https://i2.hdslb.com/bfs/archive/5251d05f7924bcad9b7f95ece436a87414d5721f.jpg@480w_300h_1c_!web-space-channel-video.webp
链接: https://www.bilibili.com/video/BV1tf4y1w7tv
评价: ★★★★★
---
## Class的基本用法

### 简介

JavaScript语言中，生成实例对象的传统方法是通过构造函数

```js
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName  = function() {
    return this.sayName;
}
let p = new Person('小马哥',18);
console.log(p);
```

上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过`class`关键字，可以定义类。

基本上，ES6 的`class`可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用 ES6 的`class`改写，就是下面这样

```kotlin
class Person {
    // constructor方法 是类的默认方法,通过new命令生成对象实例时,自动调用该方法,一个类必须有constructor方法,如果没有定义,会被默认添加
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //等同于Person.prototype = function sayName(){}
    sayName(){
        return this.name;
    }
}
console.log(Person===Person.prototype.constructor)
```

> 类的方法内部如果含有`this`，它默认指向类的实例

### 继承

```js
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName(){
        return this.name;
    }
    sayAge(){
        return this.age;
    }
}

class Dog extends Animal{
    constructor(name, age,color) {
    super(name,age);
        this.color = color;
    }
    //子类自己的方法
    sayColor(){
        return `${this.name}是${this.age}岁了，它的颜色是${this.color}`;
    }
    //重写父类的方法
    sayName(){
        return super.sayName() + this.color;
    }
}
let d1 = new Dog('小红',8,'red');
console.log(d1); //=>Dog {name: '小红', age: 8, color: 'red'}
console.log(d1.sayName()); //=>'小红'
console.log(d1.sayColor());//=>'小红是8岁了，它的颜色是red'
console.log(d1.sayName()); //=>'小红red'
```

### 混入
