---
时间: 11分
作者: "\r技术蛋老师"
标题: JavaScript运算符typeof和instanceof的区别
图片: https://i0.imgs.ovh/2024/03/18/ekUL0.png
链接: https://www.bilibili.com/video/BV12441127aF
评价: ★★★★★
---
# type of  检测数据类型

typeof只适用于检测除null的基础数据类型和函数类型


返回值
# instanceof 检测对象之间的关联性

instanceof用于检测除object之外的所有实例

```JavaScript
a = new Number(555);
Number {555}
a instanceof Number
true

b = new String ("aa");
String {'aa'}
b instanceof String
true

c = new Array(1,2,3,4)
(4) [1, 2, 3, 4]
c instanceof Array
true

d = new Object()
{}
d instanceof Object
true
```

![](Pasted%20image%2020240319132758.png)