# JavaScript重难点实例精讲-笔记

# 第一章JavaScript基本数据类型

## 1.Number

## 2.String类型

## 3.运算符

## 4.toString() 与 valueOf()

# 第二章引用数据类型

## 1.Object类型

### 深入了解JavaScript中的new操作符

new操作符在执行过程中会改变this的指向,所以在了解new操作符之前，我们先解释一下this的用法。

```jsx
function Cat(name, age) {
   this.name = name;
   this.age = age;
}
console.log(new Cat('miaomiao',18));  // Cat {name: "miaomiao", age: 18}
```

事实上我们并未通过return返回任何值，为什么输出的信息中会包含name和age属性呢？其中起作用的就是this这个关键字了

我们通过以下代码输出this，看看this具体的内容。

```jsx
function Cat(name,age) {
   console.log(this);  // Cat {}
   this.name = name;
   this.age = age;
}
new Cat('miaomiao',18);
```

我们可以发现this的实际值为Cat空对象，后两句就相当于给Cat对象添加name和age属性，结果真的是这样吗？不如我们改写一下Cat函数。

```jsx
function Cat(name,age){
   var Cat = {};
   Cat.name = name;
   Cat.age = age;
}
console.log(new Cat('miaomiao',18));  // Cat {}
```

输出结果中并未包含name和age属性，这是为什么呢？因为在JavaScript中，如果函数没有return值，则默认return this。而上面代码中的this实际是一个Cat空对象，name和age属性只是被添加到了临时变量Cat中。为了能让输出结果包含name和age属性，我们将临时变量Cat进行return就可以了。

```jsx
function Cat(name, age) {
   var Cat = {};
   Cat.name = name;
   Cat.age = age;
   return Cat;
}
console.log(new Cat('miaomiao', 18));  // {name: "miaomiao", age: 18}
```

通过以上的分析，我们了解了构造函数中this的用法，那么它与**new操作符**之间有什么关系呢？

我们先来看看下面这行简单的代码，该代码的作用是通过new操作符生成一个Cat对象的实例。

```jsx
var cat = new Cat();
```

从表面上看这行代码的主要作用是创建一个Cat对象的实例，并将这个实例值赋予cat变量，cat变量就会包含Cat对象的属性和函数。

其实，new操作符做了3件事情，如下代码所示。

```jsx
1.var cat = {};
2.cat._ _proto_ _  =  Cat.prototype;
3.Cat.call(cat);
```

第一行：创建一个空对象。

第二行：将空对象的__proto__属性指向Cat对象的prototype属性。

第三行：将Cat()函数中的this指向cat变量。

于是cat变量就是Cat对象的一个实例

我们**自定义一个类似new功能的函数**，来具体讲解上面的3行代码。

```jsx
function Cat(name, age) {
   this.name = name;
   this.age = age;
}
function New() {
   var obj = {};
   var res = Cat.apply(obj, arguments);
   return typeof res === 'object' ? res : obj;
}
console.log(New('mimi', 18));  //Object {name: "mimi", age: 18}
```

返回的结果中也包含name和age属性，这就证明了new运算符对this指向的改变。Cat.apply(obj, arguments)调用后Cat对象中的this就指向了obj对象，这样obj对象就具有了name和age属性。因此，不仅要关注new操作符的函数本身，也要关注它的原型属性。我们对上面的代码进行改动，在Cat对象的原型上增加一个sayHi()函数，然后通过New()函数返回的对象，去调用sayHi()函数，看看执行情况如何。

```jsx
function Cat(name, age) {
   this.name = name;
   this.age = age;
}

Cat.prototype.sayHi = function () {
   console.log('hi')
};

function New() {
   var obj = {};
   var res = Cat.apply(obj, arguments);
   return typeof res === 'object' ? res : obj;
}
console.log(New('mimi', 18).sayHi());
Uncaught TypeError: New(...).sayHi is not a function
```

我们发现执行报错了，New()函数返回的对象并没有调用sayHi()函数，这是因为sayHi()函数是属于Cat原型的函数，只有Cat原型链上的对象才能继承sayHi()函数，那么我们该怎么做呢？这里需要用到的就是__proto__属性，实例的__proto__属性指向的是创建实例对象时，对应的函数的原型。设置obj对象的__proto__值为Cat对象的prototype属性，那么obj对象就继承了Cat原型上的sayHi()函数，这样就可以调用sayHi()函数了。

```jsx
function Cat(name, age) {
   this.name = name;
   this.age = age;
}

Cat.prototype.sayHi = function () {
   console.log('hi')
};

function New() {
   var obj = {};
   obj._ _proto_ _ = Cat.prototype;  // 核心代码，用于继承
   var res = Cat.apply(obj, arguments);
   return typeof res === 'object' ? res : obj;
}
console.log(New('mimi', 18).sayHi());
```

结果输出“hi”，方法调用成功。至此，关于new操作符的讲解就全部完成了。本小节讲解了new操作符的实际执行过程，以及new操作符与this和prototype属性之间的关系。

### Object类型的实例函数

实例函数是指函数的调用是基于Object类型的实例的。代码如下所示

```jsx
var obj = new Object();
```

所有实例函数的调用都是基于obj这个实例。

Object类型中有几个很重要的实例函数，这里分别进行详细的讲解。

#### hasOwnProperty(propertyName)函数

该函数的作用是判断对象自身是否拥有指定名称的实例属性，此函数不会检查实例对象原型链上的属性。

```jsx
// 1.Object
var o = new Object();
o.name = '自定义属性'; // 定义一个实例属性
console.log(o.hasOwnProperty('name')); // true：name属性为实例o自己定义的，而非继承
console.log(o.hasOwnProperty('toString')); // false：toString为继承属性

// 2.自定义对象
var Student = function (name) {
   this.name = name;
};

// 给Student的原型添加一个sayHello()函数
Student.prototype.sayHello = function () {
   alert('Hello,' + this.name);
};
// 给Student的原型添加一个age属性
Student.prototype.age = '';

var st = new Student('张三');  // 初始化对象st
console.log(st.hasOwnProperty('name')); // true ：调用构造函数时，通过this.name附加
                                       // 到实例对象上
console.log(st.hasOwnProperty('sayHello')); // false ：sayHello()函数为原型上的成员
console.log(st.hasOwnProperty('age')); // false ：age属性为原型上的成员
```

#### propertyIsEnumerable(propertyName)函数

该函数的作用是判断指定名称的属性是否为实例属性并且是否是可枚举的，如果是原型链上的属性或者不可枚举都将返回“false”。

```jsx
// 1.数组 
var array = [1, 2, 3];
array.name = 'Array';
console.log(array.propertyIsEnumerable('name')); // true ：name属性为实例属性
console.log(array.propertyIsEnumerable('join')); // false ：join()函数继承自Array类型
console.log(array.propertyIsEnumerable('length')); // false ：length属性继承自Array类型
console.log(array.propertyIsEnumerable('toString')); // false ：toString()函数
                                                    // 继承自Object

// 2.自定义对象
var Student = function (name) {
   this.name = name;
};
// 定义一个原型函数
Student.prototype.sayHello = function () {
   alert('Hello' + this.name);
};

var a = new Student('tom');
console.log(a.propertyIsEnumerable('name')); // true ：name为自身定义的实例属性
console.log(a.propertyIsEnumerable('age'));  // false ：age属性不存在，返回false
console.log(a.propertyIsEnumerable('sayHello')); // false ：sayHello属于原型函数

// 设置name属性为不可枚举的
Object.deﬁneProperty(a, 'name', {
   enumerable: false
});
console.log(a.propertyIsEnumerable('name')); // false ：name设置为不可枚举
```

### Object类型的静态函数

静态函数指的是方法的调用基于Object类型自身，不需要通过Object类型的实例。接下来对Object函数中几个重要的静态函数进行讲解。

#### Object.create()函数

该函数的主要作用是创建并返回一个指定原型和指定属性的对象。语法格式如下所示。

```jsx
Object.create(prototype, propertyDescriptor)
//其中prototype属性为对象的原型，可以为null。
//若为null，则对象的原型为undefined。属性描述符的格式如下所示。

propertyName: {
   value: '', // 设置此属性的值
   writable: true, // 设置此属性是否可写入；默认为false：只读
   enumerable: true, // 设置此属性是否可枚举；默认为false：不可枚举
   conﬁgurable: true // 设置此属性是否可配置，如是否可以修改属性的特性及是否可以删除属性；
                     // 默认为false
}
//我们可以通过以下的示例进行深入的了解
// 建立一个自定义对象，设置name和age属性
var obj = Object.create(null, {
   name: {
       value: 'tom',
       writable: true,
       enumerable: true,
       conﬁgurable: true
   },
   age: {
       value: 22
   }
});
console.log(obj.name); // tom
console.log(obj.age); // 22
obj.age = 28;
console.log(obj.age); // 22 ：age属性的writable默认为false，此属性为只读
for (var p in obj) {
   console.log(p); // name ：只输出name属性；age属性的enumerable默认为false，不能
                  // 通过for...in 枚举
}
//我们尝试用polyfill版本实现Object.create()函数，
//通过polyfill我们可以更清楚明白Object.create()函数的实现原理。
Object.create = function (proto, propertiesObject) {
   // 省去中间的很多判断
   function F() {}
   F.prototype = proto;

   return new F();
};
//在create()函数中，首先声明一个函数为F()函数，
//然后将F()函数的prototype属性指向传入的proto参数，
//通过new操作符生成F()函数的实例。假如var f = new F()，f.__proto__ === F.prototype。
//实际上生成的对象实例会把属性继承到其__proto__属性上。我们再通过下面的实例来验证。
var test = Object.create({x:123, y:345});
console.log(test); // {}，实际生成的对象为一个空对象
console.log(test.x); // 123
console.log(test._ _proto_ _.x);  //  123
console.log(test._ _proto_ _.x === test.x); // true
//实际生成的test为一个空对象{}。但是我们可以访问其x属性，
//这是因为我们可以通过其__proto__属性访问到x属性，
//  所以我们通过test访问到x属性和y属性，
//    实际是通过其__proto__属性访问到的。
```

#### Object.defineProperties()函数

该函数的主要作用是添加或修改对象的属性值，语法格式如下所示。

```jsx
Object.deﬁneProperties(obj, propertyDescriptor)
//其中的属性描述符propertyDescriptor同Object.create()函数一样。
//例如，给一个空对象{}添加name和age属性，其代码如下所示。
var obj = {};
// 为对象添加name和age属性
Object.deﬁneProperties(obj, {
   name: {
       value: 'tom',
       enumerable: true
   },
   age: {
       value: 22,
       enumerable: true
   }
});
for (var p in obj) {
   console.log(p); // name age ：输出name和age属性
}
obj.age = 23;
console.log(obj.age); // 22 ：age属性的writable默认为false，此属性为只读
```

#### Object.getOwnPropertyNames()函数

该函数的主要作用是获取对象的所有实例属性和函数，不包含原型链继承的属性和函数，数据格式为数组。

```jsx
function Person(name, age, gender) {
   this.name = name;
   this.age = age;
   this.gender = gender;
   this.getName = function () {
       return this.name;
   }
}

Person.prototype.eat = function () {
   return '吃饭';
};

var p = new Person();
console.log(Object.getOwnPropertyNames(p)); //  ["name", "age", "gender", "getName"]
```

在上述例子中，Person对象通过this给对象的实例添加了name、age、gender、getName这4个变量，其中getName变量值为一个函数。同时，在Person对象的原型链上添加一个eat()函数，通过new操作符获取Person对象的一个实例，在调用后就会返回“["name", "age","gender", "getName"]”。而eat()函数处在原型上，所以不会出现在结果数组中。

#### Object.keys()函数

该函数的主要作用是获取对象可枚举的实例属性，不包含原型链继承的属性，数据格式为数组。keys()函数区别于getOwnPropertyNames()函数的地方在于，keys()函数只获取可枚举类型的属性。通过以下的测试代码可以看出两者的区别

```jsx
var obj = {
   name: 'tom',
   age: 22,
   sayHello: function () {
       alert('Hello' + this.name);
   }
};
// (1) getOwnPropertyNames()函数与keys()函数返回的内容都相同
// ["name", "age", "sayHello"] ：返回对象的所有实例成员
console.log(Object.getOwnPropertyNames(obj));
// ["name", "age", "sayHello"] ：返回对象的所有可枚举成员
console.log(Object.keys(obj));
// 设置对象的name属性不可枚举
Object.deﬁneProperty(obj, 'name', {
   enumerable: false
});
// (2)keys()函数，只包含可枚举成员
// ["name", "age", "sayHello"] ：返回对象的所有实例成员
console.log(Object.getOwnPropertyNames(obj));
// ["age", "sayHello"] ：返回对象的所有可枚举成员
console.log(Object.keys(obj));
```

## 2.Array类型

### **判断一个变量是数组还是对象**

#### 1. instanceof运算符

instanceof运算符用于通过查找原型链来检测某个变量是否为某个类型数据的实例，使用instanceof运算符可以判断一个变量是数组还是对象。

```jsx
var a =  [1, 2, 3];
console.log(a instanceof Array);  // true
console.log(a instanceof Object); // true

var b = {name: 'kingx'};
console.log(b instanceof Array);  // false
console.log(b instanceof Object); // true
```

通过上面代码可以发现，数组不仅是Array类型的实例，也是Object类型的实例。因此我们在判断一个变量是数组还是对象时，应该先判断数组类型，然后再去判断对象类型。如果先判断对象，那么数组值也会被判断为对象类型，这无法满足要求

#### 2. 判断构造函数

**判断一个变量是否是数组或者对象，从另一个层面讲，就是判断变量的构造函数是Array类型还是Object类型**

因为一个对象的实例都是通过构造函数生成的，所以，我们可以直接判断一个变量的constructor属性

```jsx
var a = [1, 2, 3];
console.log(a.constructor === Array);  // true
console.log(a.constructor === Object); // false

var b = {name: 'kingx'};
console.log(b.constructor === Array);  // false
console.log(b.constructor === Object); // true
```

那么一个变量为什么会有constructor属性呢？这就要涉及原型链的知识了。

每个变量都会有一个__proto__属性，表示的是隐式原型。一个对象的隐式原型指向的是构造该对象的构造函数的原型，这里用数组来举例，代码如下所示

```jsx
[]._ _proto_ _ === [].constructor.prototype;  // true
[]._ _proto_ _ === Array.prototype;  // true
上面直接通过constructor属性判断的语句也可以改写成下面的形式。
var a = [1, 2, 3];
console.log(a._ _proto_ _.constructor === Array);  // true
console.log(a._ _proto_ _.constructor === Object); // false
```

同样，我们可以将上面代码进行封装，得到一个判断变量是数组还是对象的通用函数。

```jsx
// 判断变量是数组还是对象
function getDataType(o) {
   // 获取构造函数
   var constructor = o._ _proto_ _.constructor || o.constructor;
   if (constructor === Array) {
       return 'Array';
   } else if (constructor === Object) {
       return 'Object';
   } else {
       return 'param is not object type';
   }
}
```

#### 3. toString()函数

每种引用数据类型都会直接或间接继承自Object类型，因此它们都包含toString()函数

不同数据类型的toString()函数返回值也不一样，所以通过toString()函数就可以判断一个变量是数组还是对象。

```jsx
//这里我们会借助call()函数，
//直接调用Object原型上的toString()函数，
//把主体设置为需要传入的变量，然后通过返回值进行判断。
var a = [1, 2, 3];
var b = {name: 'kingx'};

console.log(Object.prototype.toString.call(a)); // [object Array]
console.log(Object.prototype.toString.call(b)); // [object Object]
//其实任何类型的变量在调用toString()函数时，都会返回不同的结果。
Object.prototype.toString.call(1);  // [object Number]
Object.prototype.toString.call('kingx'); // [object String]
var c;
Object.prototype.toString.call(c);  // [object Undeﬁned]
```

通过返回的结果字符串来判断，即可解决这个问题。我们将代码进行如下封装。

```jsx
// 判断变量是数组还是对象
function getDataType(o) {
   var result = Object.prototype.toString.call(o);
   if (result === '[object Array]') {
       return 'Array';
   } else if (result === '[object Object]') {
       return 'Object';
   } else {
       return 'param is no object type';
   }
}
```

#### 4. Array.isArray()函数

在JavaScript 1.8.5版本中，数组增加了一个isArray()静态函数，用于判断变量是否为数组。传入需要判断的变量，即可确定该变量是否为数组，使用起来很简单。

```jsx
// 下面的函数调用都返回“true”
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);
 
// 下面的函数调用都返回“false”
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undeﬁned);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
```

使用Array.isArray()函数只能判断出变量是否为数组，并不能确定是否为对象。

### filter()函数过滤出满足条件的数据

filter()函数用于过滤出满足条件的数据，返回一个新的数组，不会改变原来的数组。它不仅可以过滤简单类型的数组，而且可以通过自定义方法过滤复杂类型的数组。它不仅可以过滤简单类型的数组，而且可以通过自定义方法过滤复杂类型的数组。

filter()函数接收一个函数作为其参数，返回值为“true”的元素会被添加至新的数组中，返回值为“false”的元素则不会被添加至新的数组中，最后返回这个新的数组。如果没有符合条件的值则返回空数组。接下来我们可以具体看看filter()函数的使用场景。

#### 1.针对简单类型的数组，找出数组中所有为奇数的数字

首先我们需要自定义过滤的函数，然后将数值对2取模，结果不是0则该数值为奇数. 在JavaScript中数字不为0，就可以返回“true”，恰好可以作为返回值。因此我们得到以下函数。

```jsx
var ﬁlterFn = function (x) {
   return x % 2;
};
/定义一个数组，调用filter()函数测试结果。

var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var result = arr.ﬁlter(ﬁlterFn);
console.log(result);
/得到的结果为“[1, 5, 9, 15]”，符合前面对filter()函数的描述。
```

#### 2. 针对复杂类型的数组，找出所有年龄大于18岁的男

通过描述我们可以知道这个数组元素是一个对象，并且有性别和年龄两个属性。我们需要过滤出其中年龄大于18岁和性别为男的对象。首先定义一个数组对象，代码如下所示。

```jsx
var arrObj = [{
   gender: '男',
   age: 20
}, {
   gender: '女',
   age: 19
}, {
   gender: '男',
   age: 14
}, {
   gender: '男',
   age: 16
}, {
   gender: '女',
   age: 17
}];
然后编写过滤函数，主要用于判断其中的age大于18和gender为'男'的元素值。
var ﬁlterFn = function (obj) {
    return obj.age > 18 && obj.gender === '男';
};
最后调用filter()函数得到测试的结果
var result = arrObj.ﬁlter(ﬁlterFn);
console.log(result);
结果为“[{gender: "男", age: 20}]”，符合前面对filter()函数的描述。
```

### reduce()函数累加器处理数组元素

reduce()函数最主要的作用是做累加处理，即接收一个函数作为累加器，将数组中的每一个元素从左到右依次执行累加器，返回最终的处理结果。

reduce()函数的语法如下所示。

```jsx
arr.reduce(callback[, initialValue]);
```

initialValue用作callback的第一个参数值，如果没有设置，则会使用数组的第一个元素值。callback会接收4个参数（accumulator、currentValue、currentIndex、array）。

- accumulator表示上一次调用累加器的返回值，或设置的initialValue值。如果设置了initialValue，则accumulator=initialValue；否则accumulator=数组的第一个元素值。
- currentValue表示数组正在处理的值。
- ·currentIndex表示当前正在处理值的索引。如果设置了initialValue，则currentIndex从0开始，否则从1开始。
- ·array表示数组本身。

#### 1. 求数组每个元素相加的和

有一个数组为[1, 7, 8, 3, 6]，通过一定的算法将数组的每个元素相加，返回结果为25。

解决问题的思路如下。

reduce()函数适合作为累加器，实现数组元素的相加。在不设置初始值的情况下，会自动将数组的第一个值作为初始值，然后从第二个元素开始往后累加计算；如果设置了初始值的话，则需要将初始值设置为0，然后从第一个元素开始往后累加计算。

根据以上的分析，我们得到以下的代码。

```jsx
var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(function (accumulator, currentValue) {
   return accumulator + currentValue;
}, 0);
console.log(sum);
```

设置initialValue为0，在进行第一轮运算时，accumulator为0，currentValue从1开始，第一轮计算完成累加的值为0+1=1；在进入第二轮计算时，accumulator为1，currentValue为2，第二轮计算完成累加的值为1+2=3；以此类推，在进行5轮计算后最终的输出结果为“15”

#### 2. 统计数组中每个元素出现的次数

真实场景如下所述。假如存在一个数组为[1, 2, 3, 2, 2, 5, 1]，通过一定的算法，统计出其中数字1出现的次数为2，2出现的次数为3，3出现的次数为1，5出现的次数为1。

解决问题的思路如下。

虽然通过for循环可以轻松实现这个功能，但我们也可以使用reduce()函数来实现。

接下来是问题分析的过程。我们利用key-value对象的形式，统计出每个元素出现的次数。其中key表示数组元素，value表示元素出现的次数。

将initialValue设置为一个空对象{}，initialValue作为累加器accumulator的初始值，依次往后执行每个元素。如果执行的元素在accumulator中存在，则将其计数加1，否则将当前执行元素作为accumulator的key，其value为1。依次执行完所有元素后，最终返回的accumulator的值就包含了每个元素出现的次数。

根据以上的分析，我们可以得到以下的代码。

```jsx
var countOccurrences = function(arr) {
   return arr.reduce(function(accumulator, currentValue) {
       accumulator[currentValue] ? accumulator[currentValue]++ :
                              accumulator[currentValue] = 1;
       return accumulator;
   }, {});
};
// 测试代码
countOccurrences([1, 2, 3, 2, 2, 5, 1]);
```

上面代码的运行结果为“{1: 2, 2: 3, 3: 1, 5: 1}”，符合预期。

### 求数组的最大值和最小值

### 数组遍历的7种方法

#### 1. 最原始的for循环

```jsx
var arr1 = [11, 22, 33];
for (var i = 0; i < arr1.length; i++) {
     console.log(arr1[i]);
}
```

#### 2. 基于forEach()函数的方法

forEach()函数算是在数组实例方法中用于遍历调用次数最多的函数。

forEach()函数接收一个回调函数，参数分别表示当前执行的元素值、当前值的索引和数组本身。

在方法体中输出每个数组元素即可完成遍历。

```jsx
var arr2 = [11, 22, 33];
arr2.forEach(function (element, index, array) {
   console.log(element);
});
```

#### 3. 基于map()函数的方法

map()函数在用于在数组遍历的过程中，将数组中的每个元素做处理，得到新的元素，并返回一个新的数组。map()函数并不会改变原数组，其接收的参数和forEach()函数一样。

我们需要将一个数组中的每个元素都做平方运算，而通过map()函数就很容易做到。

```jsx
var arr3 = [1, 2, 3];
var arrayOfSquares = arr3.map(function (element) {
   return element * element;
});
console.log(arrayOfSquares);
// 得到的输出结果是“[1, 4, 9]”。
```

需要注意的一点是，在map()函数的回调函数中需要通过return返回处理后的值，否则会返回“undefined”。

#### 4. 基于filter()函数的方法

#### 5. 基于some()函数与every()函数的方法

#### 6. 基于reduce()函数的方法

#### 7. 基于find()函数的方法

### 数组去重的7种算法

例如存在一个数组[1, 4, 5, 7, 4, 8, 1, 10, 4]，通过一定的算法，需要得到的数组为[1,4, 5, 7, 8, 10]。

针对这个场景，以下总结出了7种不同的处理算法。

#### 1. 遍历数组

算法1的主要思想是在函数内部新建一个数组，对传入的数组进行遍历。如果遍历的值不在新数组中就添加进去，如果已经存在就不做处理。

```jsx
function arrayUnique(array) {
   var result = [];
   for (var i = 0; i < array.length; i++) {
       if(result.indexOf(array[i]) === -1) {
           result.push(array[i]);
       }
   }
   return result;
}
var array = [1, 4, 5, 7, 4, 8, 1, 10, 4];
console.log(arrayUnique(array));
```

这段代码定义了一个名为 "arrayUnique" 的函数，该函数接受一个数组作为参数。在函数内部，定义了一个空数组 "result"。

然后，函数通过使用 for 循环遍历输入数组中的每个元素，并使用 Array.prototype.indexOf() 方法来检查 "result" 数组中是否已包含当前元素。如果在数组中找不到元素，则 indexOf 将返回 "-1"。 如果 "result" 数组中不包含当前元素，则使用 Array.prototype.push() 方法将其添加到 "result" 数组中。

最后，函数返回 "result" 数组，该数组包含输入数组中的所有唯一元素。

在函数之后，定义了一个名为 "array" 的数组，并调用了 "arrayUnique" 函数，将 "array" 作为参数传递。最后，使用 console.log() 方法将函数的返回值输出到控制台。

#### 2. 利用对象键值对

算法2的主要思想是新建一个JS对象以及一个新的数组，对传入的数组进行遍历，判断当前遍历的值是否为JS对象的键。如果是，表示该元素已出现过，则不做处理；如果不是，表示该元素第一次出现，则给该JS对象插入该键，同时插入新的数组，最终返回新的数组。

```jsx
function arrayUnique2(array) {
   var obj = {}, result = [], val, type;
   for (var i = 0; i < array.length; i++) {
       val = array[i];
       if (!obj[val]) {
           obj[val] = 'yes';
           result.push(val);
       }
   }
   return result;
}
var array = [1, 4, 5, 7, 4, 8, 1, 10, 4];
console.log(arrayUnique2(array));
```

这段代码定义了一个名为 "arrayUnique2" 的函数，该函数接受一个数组作为参数。在函数内部，定义了一个空对象 "obj" 和一个空数组 "result"。

然后，函数通过使用 for 循环遍历输入数组中的每个元素，将当前元素赋值给变量 "val"。

接下来，使用 if 语句检查 "obj" 对象是否具有 "val" 属性。如果 "obj" 对象中不存在 "val" 属性，则在 "obj" 对象中添加 "val" 属性，并使用 Array.prototype.push() 方法将 "val" 添加到 "result" 数组中。

最后，函数返回 "result" 数组，该数组包含输入数组中的所有唯一元素。

在函数之后，定义了一个名为 "array" 的数组，并调用了 "arrayUnique2" 函数，将 "array" 作为参数传递。最后，使用 console.log() 方法将函数的返回值输出到控制台。

这段代码的作用与上一段代码类似，都是用来找出输入数组中的所有唯一元素的。不同的是，这段代码使用了对象来记录每个元素是否出现过，而不是使用数组的 **indexOf** 方法。

#### 3. 先排序，再去重

算法3的主要思想是借助原生的sort()函数对数组进行排序，然后对排序后的数组进行相邻元素的去重，将去重后的元素添加至新的数组中，返回这个新数组。根据以上分析，得到以下代码。

```jsx
function arrayUnique3(array) {
   var result = [array[0]];
   array.sort(function(a,b){return a-b});
   for (var i = 0; i < array.length; i++) {
       if (array[i] !== result[result.length - 1]) {
           result.push(array[i]);
       }
   }
   return result;
}
var array3 = [1, 4, 5, 7, 4, 8, 1, 10, 4];
console.log(arrayUnique3(array3));
```

这段代码定义了一个名为 "arrayUnique3" 的函数，该函数接受一个数组作为参数。在函数内部，定义了一个名为 "result" 的数组，并将输入数组的第一个元素添加到 "result" 数组中。

然后，使用 Array.prototype.sort() 方法将输入数组按升序排序。这个方法接受一个比较函数作为参数，该函数用于指定如何比较数组中的元素。在这里，比较函数使用了简单的 "a - b" 表达式来将数字按升序排序。

然后，使用 for 循环遍历排序后的输入数组，并检查当前元素是否与 "result" 数组的最后一个元素相同。如果当前元素与 "result" 数组的最后一个元素不相同，则将当前元素添加到 "result" 数组中。

最后，函数返回 "result" 数组，该数组包含输入数组中的所有唯一元素。

在函数之后，定义了一个名为 "array3" 的数组，并调用了 "arrayUnique3" 函数，将 "array3" 作为参数传递。最后，使用 console.log() 方法将函数的返回值输出到控制台。

这段代码的作用与上面两段代码类似，都是用来找出输入数组中的所有唯一元素

#### 4. 优先遍历数组

算法4的主要思想是利用双层循环，分别指定循环的索引i与j，j的初始值为i+1。在每层循环中，比较索引i和j的值是否相等，如果相等则表示数组中出现了相同的值，则需要更新索引i与j，操作为++i；同时将其赋值给j，再对新的索引i与j的值进行比较。循环结束后会得到一个索引值i，表示的是右侧没有出现相同的值，将其push到结果数组中，最后返回结果数组。根据以上的分析，得到以下的代码。

```jsx
function arrayUnique4(array) {
   var result = [];
   for (var i = 0, l = array.length; i < array.length; i++) {
       for (var j = i + 1; j < l; j++) {
            // 依次与后面的值进行比较，如果出现相同的值，则更改索引值
            if (array[i] === array[j]) {
                j = ++i;
            }
       }
       // 每轮比较完毕后，索引为i的值为数组中只出现一次的值
       result.push(array[i]);
   }
   return result;
 }
var array4 = [1, 4, 5, 7, 4, 8, 1, 10, 4];
console.log(arrayUnique4(array4));
```

这段代码定义了一个名为 "arrayUnique4" 的函数，该函数接受一个数组作为参数。在函数内部，定义了一个空数组 "result"。

然后，函数使用两个嵌套的 for 循环遍历输入数组的每个元素。内层循环从当前元素的下一个位置开始遍历，并检查当前元素是否与后面的元素相同。如果发现相同的元素，则使用自增运算符（++）将内层循环的索引值设为与当前元素相同的元素的位置。

当内层循环结束时，外层循环的索引值（"i"）指向的元素为输入数组中只出现一次的值。因此，函数使用 Array.prototype.push() 方法将该元素添加到 "result" 数组中。

最后，函数返回 "result" 数组，该数组包含输入数组中的所有唯一元素。

在函数之后，定义了一个名为 "array4" 的数组，并调用了 "arrayUnique4" 函数，将 "array4" 作为参数传递。最后，使用 console.log() 方法将函数的返回值输出到控制台。

这段代码的作用与上面三段代码类似，都是用来找出输入数组中的所有唯一元素。

#### 5. 基于reduce()函数

算法5的主要思想是利用reduce()函数，类似于算法2，需要借助一个key-value对象。在reduce()函数的循环中判断key是否重复，如果为是，则将当前元素push至结果数组中。实际做法是设置initialValue为一个空数组[]，同时将initialValue作为最终的结果进行返回。在reduce()函数的每一轮循环中都会判断数据类型，如果数据类型不同，将表示为不同的值，如1和"1"，将作为不重复的值。根据以上的分析，得到以下的代码。

```jsx
function arrayUnique5(array) {
   var obj = {}, type;
   return array.reduce(function (preValue, curValue) {
       type = typeof curValue;
       if (!obj[curValue]) {
           obj[curValue] = [type];
           preValue.push(curValue);
       } else if (obj[curValue].indexOf(type) < 0) {   // 判断数据类型是否存在
            obj[curValue].push(type);
           preValue.push(curValue);
       }
       return preValue;
   }, []);
}
var array5 = [1, 4, 5, 7, 4, 8, 1, 10, 4, '1'];
console.log(arrayUnique5(array4));
```

#### 6. 借助ES6的Set数据结构

算法6的主要思想是借助于ES6中新增的Set数据结构，它类似于数组，但是有一个特点，即成员都是唯一的，所以Set具有自动去重的功能。在ES6中，Array类型增加了一个from()函数，用于将类数组对象转化为数组，然后再结合Set可以完美实现数组的去重。根据以上的分析，得到以下的代码。

```jsx
function arrayUnique6(array) {
   return Array.from(new Set(array));
}
var arr6 = [1, 4, 5, 7, 4, 8, 1, 10, 4, '1'];
console.log(arrayUnique6(arr6));
```

#### 7. 借助ES6的Map数据结构

算法7的主要思想是借助于ES6中新增的Map数据结构，它是一种基于key-value存储数据的结构，每个key都只对应唯一的value。如果将数组元素作为Map的key，那么判断Map中是否有相同的key，就可以判断出元素的重复性。Map还有一个特点是key会识别不同数据类型的数据，即1与"1"在Map中会作为不同的key处理，不需要通过额外的函数来判断数据类型。基于Map数据结构，通过filter()函数过滤，即可获得去重后的结果。根据以上的分析，得到以下的代码。

```jsx
function arrayUnique7(array) {
   var map = new Map();
   return array.ﬁlter((item) => !map.has(item) && map.set(item, 1));
}
var arr7 = [1, 4, 5, 7, 4, 8, 1, 10, 4, '1'];
console.log(arrayUnique7(arr7));
```

### 找出数组中出现次数最多的元素

真实场景如下所述。

存在一个数组为[3, 5, 6, 5, 9, 8, 10, 5, 7, 7, 10, 7, 7, 10, 10, 10, 10, 10]，通过一定的算法，找出次数最多的元素为10，其出现次数为7次。针对这个场景，以下总结出了4种不同的处理算法。

#### 1. 利用键值对

```jsx
function ﬁndMost2(arr) {
   var h = {};
   var maxNum = 0;
   var maxEle = null;
   for (var i = 0; i < arr.length; i++) {
       var a = arr[i];
       h[a] === undeﬁned ? h[a] = 1 : (h[a]++);
       // 在当前循环中直接比较出现次数最大值
       if (h[a] > maxNum) {
           maxEle = a;
           maxNum = h[a];
       }
   }
   return '出现次数最多的元素为:' + maxEle + '，出现次数为:' + maxNum;
}
```

这个函数似乎旨在找到数组中出现次数最多的元素，并返回包含该元素和其出现次数的字符串。

函数以数组 **arr** 作为输入。它将空对象 **h** 初始化为0，将变量 **maxNum** 初始化为0，并将变量 **maxEle** 初始化为 **null**。

然后，它遍历数组中的元素，对于每个元素 **a**，它执行以下操作：

1. 如果元素尚未在对象 **h** 中（即，如果 **h[a]** 为 **undefined**），则将 **h[a]** 设置为1以初始化该元素的计数。这是使用三目运算符 **?:** 完成的，其格式为 **x ? y : z**。如果 **x** 为真，表达式的值为 **y**，如果 **x** 为假，表达式的值为 **z**。在这种情况下，正在测试的条件是 **h[a] === undefined**，如果为真，则执行表达式 **h[a] = 1**，否则执行表达式 **h[a]++**。
2. 如果元素已经是对象 **h** 中的键，则将该元素的计数增加1（即，将 **h[a]** 设置为 **h[a] + 1**）。这是通过表达式 **h[a]++** 完成的，这是上述三目运算符的第二部分。
3. 它将元素的当前计数与到目前为止看到的最

## 3.Date(时间)类型

### 基于成型的类库Moment.js

连接:<http://momentjs.cn/docs/>

Moment.js有多种不同的安装方法。

npm install moment

Moment.js主要通过传递不同的字符串格式来输出对应的时间。

```jsx
moment().format('MMMM Do YYYY, h:mm:ss a'); // 七月 31日 2018, 10:33:34 晚上
moment().format('dddd');                    // 星期二
moment().format("MMM Do YY");               // 7月 31日 18
moment().format('YYYY [escaped] YYYY');     // 2018 escaped 2018
```

#### 日期合法性校验

例如，给定一个日期值2018-09-40，将年、月、日的值构造成一个新的Date对象，即new Date(2018, 9, 40)，返回的实际Date值是“2019-10-09”。在判断的时候，月份值09!==10，是一个非法的日期值。

```jsx
function validateDate(str) {
   var reg = /^(\d+)-(\d{1,2})-(\d{1,2})$/;
   var r = str.match(reg);
   if (r == null) return false;
   r[2] = r[2] - 1;
   var d = new Date(r[1], r[2], r[3]);
   if (d.getFullYear() != r[1]) return false;
   if (d.getMonth() != r[2]) return false;
   if (d.getDate() != r[3]) return false;
   return true;
}
```

#### 日期计算

## 第三章函数

见闭包,this

## 第四章对象

### 1.深拷贝与浅拷贝

### 浅拷贝

拷贝基本数据类型时 直接拷贝基本数据类型的值

拷贝引用类型时,拷贝的是内存地址,就是拷贝后的内容与原始内容指向同一个内存地址

**常见的浅拷贝方法有以下几种：**

1. 使用Object.assign()方法，将原始对象的属性浅拷贝到目标对象中。例如：

```javascript
const obj = {a: 1, b: {c: 2}};
const newObj = Object.assign({}, obj);
```

1. 使用扩展运算符（…）将对象浅拷贝到新对象中。例如：

```javascript
const obj = {a: 1, b: {c: 2}};
const newObj = {...obj};
```

1. 使用Array.prototype.slice()方法将数组浅拷贝到新数组中。例如：

```javascript
const arr = [1, 2, [3, 4]];
const newArr = arr.slice();
```

### 深拷贝

从内存中完整的拷贝一份,并且会在堆内存中开辟一个新的区域存放,

拷贝出来的新对象和原始对象互相独立,互不影响

#### **常见的深拷贝方法有以下几种：**

#### 使用JSON序列化与反序列化

**JSON.stringify()** 将对象转化为字符串  

 **JSON.parse()**   将字符串转为对象

- 无法实现对函数,RegExp对象的拷贝
- 对象的constructor会被抛弃,所有的构造函数会指向Object,原型链关系会破裂
- 对象中如果存在循环引用,会抛出异常

#### 递归遍历对象，创建新的对象

### 2.原型对象

每个函数在创建时都被赋予一个prototype属性,它指向函数的原型对象

构造函数的prototype属性会指向它的原型对象,通过构造函数可以创建实例

#### 原型对象,构造函数,实例

每一个函数在创建时都被赋予一个prototype属性,在默认情况下所有原型对象都会增加一个constructor属性,指向prototype属性所在的函数,即**构造函数**

当我们通过new操作符调用构造函数创建一个实例时,实例具有一个`_ _proto_ _`属性指向构造函数的原型对象.

### 原型链

在JavaScript中几乎所有对象都有``__proto__``属性指向函数原型对象,

而函数的原型对象同样存在``__proto__``属性指向上一级原型对象,层层往上指,直到最上层某个原型对象为null

![1](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230707/image.28b7qvl0de68.webp)

### 原型链继承

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

## 第五章 DOM与事件

DOM 文档对象模型 Documnet Object Model
DOM 用一个逻辑树来表示文档,树的每个分支终点都是一个节点

### 5.1.DOM选择器

```JavaScript
document.getElementById() //id 
document.getElementByClassName() //class 
document.getElementByName() //name属性
document.getElementsByTagName() //标签名
document.querySelector() //在基准元素下,匹配元素集合中第一个元素
document.querySelectorALl()

```

### 5.2.常用DOM操作

DOM树
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230710/image.rr898bh6ze8.png)

#### 新增节点

我们需要完成这样一个操作：
第一步，在ul的末尾添加一个li元素，其类名为“last”，内容为“新增文本1”；
第二步，在新增的li之前再新增第二个li，内容为“新增文本2”。

```html
<body>
  <ul id="container">
    <li class="first">文本1</li>
    <li class="second">文本2</li>
    <li>文本3</li>
    <li id="target">文本4</li>
    <li>文本5</li>
    <li>文本6</li>
  </ul>
  <!-- 在ul中添加一个li其类名为“last”，内容为“新增文本1”
  在新增的li之前再新增第二个li，内容为“新增文本2”。 -->
  <script>
    //获取指定元素
    var container = document.querySelector('#container')
    // 新创建一个元素节点
    var newLiOne = document.createElement('li')
    // 新创建一个属性节点，并设置值。
    var newLiAttr = document.createAttribute('class')
    newLiAttr.value = 'last'
    //将属性节点绑定在元素节点上。
    newLiOne.setAttributeNode(newLiAttr)
    //新创建一个文本节点。
    var newTextOne = document.createTextNode('新增文本1')
    //将文本节点作为元素节点的子元素。
    newLiOne.appendChild(newTextOne)
    //使用appendChild()函数将新增元素节点添加至末尾。
    container.appendChild(newLiOne)


    //新创建第二个元素节点
    var newLiTwo = document.createElement('li')
    //新创建第二个文本节点
    var newTextTwo = document.createTextNode('新增文本2')
    //将文本节点作为元素节点的子元素。
    newLiTwo.appendChild(newTextTwo)
    //使用insertBefore()函数将节点添加至第一个新增节点的前面。
    container.insertBefore(newLiTwo, newLiOne);

  </script>
</body>
```

### 删除节点

删除节点的操作实际包含

- 删除元素节点、
- 删除属性节点
- 删除文本节点

#### 1. 删除ul的第一个li元素节点

删除一个元素节点需要进行3步操作。
① 获取该元素的父元素。

```javascript
var main = document.querySelector('#main');

```

② 获取待删除节点。
待删除节点是父元素的第一个元素节点，很多读者可能直接想到的是使用firstChild属性，这是不可取的。firstChild属性实际是取childNodes属性返回的NodeList对象中的第一个值，在此例中实际为一个换行符。

如果需要获取第一个元素节点，应该使firstElementChild属性

``` javascript
var firstChild = main.firstElementChild;
```

③ 通过父节点，调用removeChild()函数删除该节点。

```javascript
main.removeChild(firstChild);
```

#### 2. 删除a标签的href属性

删除一个元素的属性需要进行两步操作。
① 获取该元素。

```
var link = document.querySelector('#link');
```

② 通过元素节点，调用removeAttribute()函数删除指定属性节点。
```link.removeAttribute('href');```

#### 3. 删除ul最后一个li元素的文本节点

删除一个元素的文本节点需要进行3步操作。
① 获取元素节点。
② 获取文本节点。
③ 通过元素节点，调用removeChild()函数删除指定的文本节点。
关于删除文本节点还有一种比较简单的处理方法，那就是将元素节点的innerHTML
属性设置为空。

### 5.3 修改节点

修改节点包含着很多不同类型的操作，
包括修改元素节点、修改属性节点和修改文本节点。

#### 1. 修改元素节点

修改元素节点的操作一般是直接将节点元素替换为另一个元素，可以使用replaceChild()函数来实现

replaceChild()函数的调用方是父元素，接收两个参数，第一个参数表示新元素，第二个参数表示将要被替换的旧元素。

```javascript
<script>
// 1.获取父元素与待替换的元素
var main = document.querySelector('#main');
var div1 = document.querySelector('#div1');
// 2.创建新元素
var newDiv = document.createElement('div');
var newText = document.createTextNode('这是新创建的文本');
newDiv.appendChild(newText);
// 3.使用新元素替换旧的元素
main.replaceChild(newDiv, div1)
</script>
```

#### 2. 修改属性节点

修改属性节点有两种处理方式：一种是通过getAttribute()函数和setAttribute()函数获取和设置属性节点值
另一种是直接修改属性名。
下面通过两种方法来修改元素节点的class属性和style属性的color值。

```javascript
var div2 = document.querySelector('#div2');
// 方法1: 通过setAttribute()函数设置
div2.setAttribute('class', 'classB');
// 方法2: 直接修改属性名，注意不能直接用class，需要使用className
div2.className = 'classC';
// 方法1: 通过setAttribute()函数设置
div2.setAttribute('style', 'color: red;');
// 方法2: 直接修改属性名
div2.style.color = 'blue';
```

## 事件流

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230710/image.4v55q8t09e20.webp)

## 事件处理程序

通过addEventListener()函数给元素绑定了事件处理程序
简单理解事件处理程序，就是响应某个事件的函数，例如onclick()函数、onload()
函数就是响应单击、加载事件的函数，对应的是一段JavaScript的函数代码
**事件处理程序分为DOM0、DOM2、DOM3这3种级别的事件处理程序**

## Event对象

事件在浏览器中是以Event对象的形式存在的，每触发一个事件，就会产生一个Event对象。该对象包含所有与事件相关的信息，包括事件的元素、事件的类型其他与特定事件相关的信息。

## 第六章AJAX

标准XMLHttpRequest 创建方法

1. 创建XMLHttPRequest对象

```JavaScript
// 创建AJAX对象
var xhr = new XMLHttpRequest();
// 设置请求方法和URL
xhr.open('GET', 'https://api.example.com/data', true);
// 设置回调函数，处理服务器响应
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // 请求成功，更新页面
      var response = JSON.parse(xhr.responseText);
      document.getElementById('result').innerHTML = response.data;
    } else {
      // 请求失败，显示错误信息
      console.error('AJAX request failed');
    }
  }
};
// 发送请求
xhr.send();
```

## 使用node搭建简易服务器

#### 1. 创建项目

在硬盘上创建一个项目ajaxTest，并放入文件夹中。
`$ mkdir ajaxTest`
`$ cd ajaxTest`

#### 2. 项目初始化

如果要将项目变成一个Node项目，需要进行初始化，进入ajaxTest项目根目录下运
行以下命令。
`$ npm init`
初始化完成后，会在项目根目录下生成一个package.json文件。

#### 3. 安装Express框架与body-`parser插件

`$ npm install express --save-dev`
在处理post请求时，需要使用body-parser插件，因此也需要提前安装该插件。
`npm install body-parser --save-dev`

#### 4. 创建server.js文件

```JavaScript
var express = require('express');
// 接收post请求体数据的插件
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
// 接收“/”请求，指定首页
app.get('/', function (req, res) {
res.sendFile(_ _dirname + '/index.html');
});
// 处理get请求
app.get('/getUser', function (req, res) {
console.log(req.query);
});
// 处理post请求
app.post('/saveUser', function (req, res) {
var responseObj = {
code: 200,
message: '执行成功'
};
res.write(JSON.stringify(responseObj));
res.end('end');
});
// 执行监听的端口号
var server = app.listen(3000, function () {});
```

#### 5. 编写首页index.html的内容

#### 6. 运行server

`node server.js`

## JSON

JSON数据在网络传输时存在两种类型，一种是JSON对象类型，一
种是JSON字符串类型，两种类型的转换涉及JSON序列化和反序列化的
知识。

### JSON序列化

将JavaScript对象转换为JSON
JSON.stringify()函数
`JSON.stringify(value[, replacer [, space]])`

### JSON反序列化

JSON.parse()函数

## Ajax跨域解决方案

浏览器同源策略
协议、域名、端口号

### CORS

服务端通过对响应头的设置，接收跨域请求处理

```JavaScript
app.all('*', function (req, res, next) {
// 设置可以接收请求的域名
res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
// 是否可以携带cookie
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Headers', 'Content-Type');
res.header('Access-Control-Allow-Methods', '*');
res.header('Content-Type', 'application/json;charset=utf-8');
next();
});
```

### JSONP

- 在网页中动态添加一个script标签，通过script标签向服务器发送请求，在请求中会携带一个请求的callback回调函数名。
- 服务器在接收到请求后，会处理响应获取返回的参数，然后将参数放在callback回调函数中对应的位置，并将callback回调函数通过json
格式进行返回。

```javascript
app.get('/getUserByStudentNo', function (req, res) {
// 获取请求参数studentNo
var studentNo = req.query.studentNo;
// 获取请求的回调函数callback
var callbackFn = req.query.callback;
var result;
if (+studentNo === 1001) {
result = {
studentNo: 1001,
name: 'kingx1',
age: 18
};
} else {
result = {
studentNo: 1002,
name: 'kingx2',
age: 20
};
}
var data = JSON.stringify(result);
res.writeHead(200, {'Content-type': 'application/json'});
// 返回值是对回调函数的调用，将data作为参数传入
res.write(callbackFn + '(' + data + ')');
res.write(data);
res.end();
});
```

## 第7章 ES6

- let和const关键字。
- 解构赋值。
- 模板字符串。
- 箭头函数。
- Symbol类型 唯一性。

- Set和Map数据结构。

## Set

表示的是一组数据的集合，类似于数组，但是Set的成员值都是唯一的，**没有重复**

## Map

与传统的**对象**字面量类似，它的本质是一种键值对的组合

- Proxy。

## Proxy

主要用于改变对象的默认访问行为，实际表现是在访问对象之前增加一层拦截，任何对对象的访问行为都会通过这层拦截
`const proxy = new Proxy(target, handler);`

```JavaScript
// 定义目标对象
const person = {
name: 'kingx',
age: 23
};
// 定义配置对象
let handler = {
get: function (target, prop, receiver) {
console.log("你访问了person的属性");
return target[prop];
}
};
// 生成Proxy的实例
const p = new Proxy(person, handler);
// 执行结果
console.log(p.name);
// 你访问了person的属性
// kingx

```

- Reflect

## Reflect

Reflect对象与Proxy对象一样，也是ES6为了操作对象而提供的新API。
什么是Reflect
`有一个名为Reflect的全局对象，上面挂载了对
象的某些特殊函数，这些函数可以通过类似于Reflect.apply()这种形式来
调用，所有在Reflect对象上的函数要么可以在Object原型链中找到，要
么可以通过命令式操作符实现，例如delete和in操作符。`

- Promise。

## Promise

### Promise的生命周期

每一个Promise对象都有3种状态，即pending（进行中）、
fulfilled（已成功）和rejected（已失败）

### Promise的基本用法

```JavaScript
const promise = new Promise((resolve, reject) => {
// 异步请求处理
if(/ 异步请求标识 /) {
resolve();
} else {
reject();
}
});
```

Promise执行的过程是：在接收的函数中处理异步请求，然后判断
异步请求的结果，如果结果为“true”，则表示异步请求执行成功，调用
resolve()函数，resolve()函数一旦执行，Promise的状态就从pending变为
fulfilled；如果结果为“false”，则表示异步请求执行失败，调用reject()函
数，reject()函数一旦执行，Promise的状态就从pending变为rejected。
resolve()函数和reject()函数可以传递参数，作为后续.then()函数或者.catch()函数执行时的数据源。
. Promise.all()函数
.Promise.race()函数
Promise.resolve()函数
Promise.reject()函数

- Iterator

## Iterator遍历器

是ES6为不同数据结构遍历所新增的统一访问
接口，为新的遍历方式**for...of**提供基础

### for...of循环

```JavaScript
const arr = ['one', 'two', 'three'];
for (let key of arr) {
console.log(key); // one, two, three
}

```

- Generator函数。

## Generator()函数

Generator()函数是ES6提供的一种异步编程解决方案。
Generator()函数从语法上可以理解为是一个状态机，函数内部维护
多个状态，函数执行的结果返回一个部署了Iterator接口的对象，通过这
个对象可以依次获取Generator()函数内部的每一个状态。

#### Generator()函数特征

· function关键字与函数名之间有一个星号（*）。
· 函数体内部使用yield关键字来定义不同的内部状态。

```JavaScript
function* helloworldGenerator() {
console.log('Generator执行');
yield 'hello';
yield 'world';
}
const hw = helloworldGenerator();
console.log('这是测试执行先后顺序的语句');
hw.next();
```

#### Generator()函数注意事项

1.默认情况下不能使用new关键字
2. yield表达式会延迟执行
3. yield表达式只能在Generator()函数中调用
4. yield表达式需要小括号括起来
5. Generator()函数中的this特殊处理
6. Generator()函数嵌套使用

- Class及其用法。

## Class

（1）constructor()函数
constructor()函数是一个类必须具有的函数
（2）静态属性和函数

Class使用注意点
（1）只能与new关键字配合使用
（2）不存在变量提升

（3）在类中声明函数时，不要加function关键字
（4）this指向会发生变化

### Class继承

使用extends关键字

```javascript
// 父类
class Animal {
constructor(type) {
this.type = type;
}
}
// 子类
class Cat extends Animal {
constructor(name, type) {
// 优先调用super()函数执行父类构造函数
super(type);
this.name = name;
}
getName() {
return this.name;
}
}
const cat = new Cat('tom', 'cat');
console.log(cat.type); // cat
console.log(cat.getName()); // tom

```

- Module及其用法。

## Module JavaScript模块化

export命令
用于定义模块对外输出的
import命令

1. 一个文件只有一个export default语句
2. import的内容不需要使用大括号括起来
