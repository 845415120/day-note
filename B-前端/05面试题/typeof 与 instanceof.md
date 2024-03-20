# typeof 与 instanceof  

判断数据类型

typeof 对于基本类型，除了 null 都可以显示正确的类型

typeof 对于对象，除了函数都会显示 object


instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的 原型链中是不是能找到类型的 prototype


- typeof会返回一个变量的基本类型，instanceof返回的是一个布尔值

- instanceof 
  - 通过原型链来判断
    - 是否是之前构造函数生成的对象