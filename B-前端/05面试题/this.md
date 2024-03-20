
# this

## 1. this指向全局对象

当函数没有所属对象而直接调用时，this指向的是全局对象

```jsx
var value = 10;
var obj = {
   value: 100,
   method: function () {
       var foo = function () {
           console.log(this.value);  // 10
           console.log(this);  // Window对象
       };
       foo();
       return this.value;
   }
};
obj.method();
```

## 2. this指向所属对象

## 3. this指向对象实例

当通过new操作符调用构造函数生成对象的实例时，this指向该实例。

## 4. this指向call()函数、apply()函数、bind()函数调用后重新绑定的对象

## 5. 闭包中的this

函数的this变量只能被自身访问，其内部函数无法访问。因此在遇到闭包时，闭包内部的this关键字无法访问到外部函数的this变量。

```jsx
1  var user = {
2      sport: 'basketball',
3      data: [
4          {name: "kingx1", age: 11},
5          {name: "kingx2", age: 12}
6      ],
7      clickHandler: function () {
8        // 此时的this指向的是user对象
9          this.data.forEach(function (person) {
10             console.log(this);  // [object Window]
11             console.log(person.name + ' is playing ' + this.sport); 
12         })
13     }
14 };
15 user.clickHandler();
```

## call()函数的基本使用

call()函数调用一个函数时，会将该函数的执行对象上下文改变为另一个对象。其语法如下所示。

```jsx
function.call(thisArg, arg1, arg2, ...)
*function为需要调用的函数。
* thisArg表示的是新的对象上下文，函数中的this将指向thisArg，
  如果thisArg为null或者undefined，则this会指向全局对象。
* arg1，arg2，...表示的是函数所接收的参数列表。

//我们可以通过下面的实例看看call()函数的用法。
// 定义一个add()函数
function add(x, y) {
   return x + y;
}
// 通过call()函数进行add()函数的调用
function myAddCall(x, y) {
   // 调用add()函数的call()函数
   return add.call(this, x, y);
}
console.log(myAddCall(10, 20));    //输出“30”
```

## apply()函数的基本使用

apply()函数的作用域与call()函数是一致的，只是在传递参数的形式上存在差别。其语法格式如下。

```jsx
function.apply(thisArg, [argsArray])
 * function与thisArg参数与call()函数中的解释一样。
* [argsArray]表示的是参数会通过数组的形式进行传递，
如果argsArray不是一个有效的数组或者arguments对象  ，则会抛出一个TypeError异常。
//要想实现与call()函数中一样的实例效果，可以使用apply()函数编写以下代码。
//定义一个add()函数
function add(x, y) {
   return x + y;
}
// 通过apply()函数进行add()函数的调用
function myAddApply(x, y) {
   // 调用add()函数的apply()函数
   return add.apply(this, [x, y]);
}
console.log(myAddApply(10, 20));    //输出“30”

与call()函数相比，apply()函数只需要将add()函数接收的参数使用数组的形式传递即可，
即使用[x, y]的形式，运行后的结果为10 + 20 = 30。
```

## bind()函数的基本使用

bind()函数创建一个新的函数，在调用时设置this关键字为提供的值，在执行新函数时，将给定的参数列表作为原函数的参数序列，从前往后匹配。其语法格式如下。

```jsx
function.bind(thisArg, arg1, arg2, ...)
  事实上，bind()函数与call()函数接收的参数是一样的。
其返回值是原函数的副本，并拥有指定的this值和初始参数。
//定义一个add()函数
function add(x, y) {
   return x + y;
}
// 通过bind()函数进行add()函数的调用
function myAddBind(x, y) {
   // 通过bind()函数得到一个新的函数
   var bindAddFn = add.bind(this, x, y);
   // 执行新的函数
   return bindAddFn();
}
console.log(myAddBind(10, 20));    //输出“30”
```

## call()函数、apply()函数、bind()函数的巧妙用法

## 1. 求数组中的最大项和最小项

```jsx
var arr = [3, 5, 7, 2, 9, 11];
// 求数组中的最大值
console.log(Math.max.apply(null, arr));  // 11
// 求数组中的最小值
console.log(Math.min.apply(null, arr));  // 2
```

apply()函数的第一个参数为null，这是因为没有对象去调用这个函数，我们只需要这个函数帮助我们运算，得到返回结果。

第二个参数是数组本身，就是需要参与max()函数和min()函数运算的数据，运算结束后得到返回值，表示数组的最大值和最小值。

## 2. 类数组对象转换为数组对象

函数的参数对象arguments是一个类数组对象，自身不能直接调用数组的方法，但是我们可以借助call()函数，让arguments对象调用数组的slice()函数，从而得到一个真实的数组，后面就能调用数组的函数。

```jsx
// 任意个数字的求和
function sum() {
   // 将传递的参数转换为数组
   var arr = Array.prototype.slice.call(arguments);
   // 调用数组的reduce()函数
   return arr.reduce(function (pre, cur) {
       return pre + cur;
   }, 0)
}

sum(1, 2);       // 3
sum(1, 2, 3);    // 6
sum(1, 2, 3, 4); // 10
```

## 3. 用于继承

```jsx
// 父类
function Animal(age) {
   // 属性
   this.age = age;
   // 实例函数
   this.sleep = function () {
       return this.name + '正在睡觉！';
   }
}
// 子类
function Cat(name, age) {
   // 使用call()函数实现继承
   Animal.call(this, age);
   this.name = name || 'tom';
}

var cat = new Cat('tony', 11);
console.log(cat.sleep());  // tony正在睡觉！
console.log(cat.age);  // 11
```

## 4. 执行匿名函数

```jsx
var animals = [
   {species: 'Lion', name: 'King'},
   {species: 'Whale', name: 'Fail'}
];
for (var i = 0; i < animals.length; i++) {
   (function (i) {
       this.print = function () {
           console.log('#' + i + ' ' + this.species + ': ' + this.name);
       };
       this.print();
   }).call(animals[i], i);
}
```

## 5. bind()函数配合setTimeout

在默认情况下，使用setTimeout()函数时，this关键字会指向全局对象window。当使用类的函数时，需要this引用类的实例，我们可能需要显式地把this绑定到回调函数以便继续使用实例。

```jsx
// 定义一个函数
function LateBloomer() {
   this.petalCount = Math.ceil(Math.random() * 12) + 1;
}
// 定义一个原型函数
LateBloomer.prototype.bloom = function () {
   // 在一秒后调用实例的declare()函数，很关键的一句
   window.setTimeout(this.declare.bind(this), 1000);
};
// 定义原型上的declare()函数
LateBloomer.prototype.declare = function () {
   console.log('I am a beautiful ﬂower with ' + this.petalCount + ' petals!');
};
// 生成LateBloomer的实例
var ﬂower = new LateBloomer();
ﬂower.bloom();  // 1秒后，调用declare()函数
```