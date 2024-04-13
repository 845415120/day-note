---
时间: 11分
作者: "\r技术蛋老师"
标题: ES6_Class
图片: https://i2.hdslb.com/bfs/archive/5251d05f7924bcad9b7f95ece436a87414d5721f.jpg@480w_300h_1c_!web-space-channel-video.webp
链接: https://www.bilibili.com/video/BV1tf4y1w7tv
评价: ★★★★★
---


## Class的基本用法

```js
class MyClass {
  prop = value; // 属性
  constructor(...) { // 构造器
    // ...
  }
  method(...) {} // method
  get something(...) {} // getter 方法
  set something(...) {} // setter 方法
  [Symbol.iterator]() {} // 有计算名称（computed name）的方法（此处为 symbol）
  // ...
}
```
然后使用 `new MyClass()` 来创建具有上述列出的所有方法的新对象。
`new` 会自动调用 `constructor()` 方法，因此我们可以在 `constructor()` 中初始化对象。

```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// 用法：
let user = new User("John");
user.sayHi();
```

## [Getters/setters](https://zh.javascript.info/class#getterssetters)

就像对象字面量，类可能包括 getters/setters，计算属性（computed properties）等。
```js
class User {
constructor(name) {
  // 调用 setter
  this.name = name;
}
get name() {
  return this._name;
}
set name(value) {
  if (value.length < 4) {
    alert("Name is too short.");
    return;
  }
  this._name = value;
}
}
let user = new User("John");
alert(user.name); // John
user = new User(""); // Name is too short.
```
# 类继承
## “extends” 关键字 


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

# 静态属性和静态方法
我们可以把一个方法作为一个整体赋值给类。这样的方法被称为 **静态的（static）**。
在一个类的声明中，它们以 `static` 关键字开头，如下所示：
```js
 class User {
  static staticMethod() {
    alert(this === User);
  }
}
User.staticMethod(); // true
```
这实际上跟直接将其作为属性赋值的作用相同：
```js
class User { }
User.staticMethod = function() {
  alert(this === User);
};
User.staticMethod(); // true
```
## 静态属性
  静态的属性也是可能的，它们看起来就像常规的类属性，但前面加有 static：
```js
class Article {
  static publisher = "Levi Ding";
}
alert( Article.publisher ); // Levi Ding
```
  这等同于直接给 `Article` 赋值：

``` Article.publisher ="Levi Ding";```
  
  
  
  class (语法糖 =>  构造函数,babel-loader) 

```js
	class Person{
		constructor(name,age) {
		  this.name = name;
		  this.age =age;
		}
		say=()=>{
	
		}
	}
	
	class Test extends person{
		constructor(name,age,location) {
		  super(name,age);
		  this.location = location;
		}
       
	}
```
 