# this指向

![](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230811/this.1kiod6nlkpq8.webp)

this ，函数执⾏的上下⽂，可以通过 apply ， call ， bind 改变 this 的指向。对于匿名函数或者直接调⽤的函数来说，this指向全局上下⽂（浏览 器为window，NodeJS为 global ），剩下的函数调⽤，那就是谁调⽤它， this 就指向谁。当然还有es6的箭头函数，箭头函数的指向取决于该箭头函 数声明的位置，在哪⾥声明， this 就指向哪⾥


