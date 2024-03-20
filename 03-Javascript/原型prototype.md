# 原型prototype

- 每个函数都有prototype属性
- 对象都有__proto__属性指向函数原型对象prototype,
- 原型对象都会增加一个constructor属性,指向prototype属性所在的函数,即**构造函数**

![](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230811/dc3cbdc186706de5b69f6aa30f3949ece4939a9c8d9d4ce3b9b397a58c3b4297.3ye5fxggehk0.webp)

- 所有对象都是继承至母体Oject 
- 函数都继承自Function
- 他们是在引擎中创建好的