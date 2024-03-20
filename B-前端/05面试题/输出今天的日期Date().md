# 输出今天的日期Date()

以 YYYY-MM-DD 的⽅式，⽐如今天是2024年9⽉26⽇，则输出2024-09-26

```javascript
var d = new Date();
 // 获取年，getFullYear()返回4位的数字
 var year = d.getFullYear();
 // 获取⽉，⽉份⽐较特殊，0是1⽉，11是12⽉
 var month = d.getMonth() + 1;
 // 变成两位
 month = month < 10 ? '0' + month : month;
 // 获取⽇
 var day = d.getDate();
 day = day < 10 ? '0' + day : day;
alert(year + '-' + month + '-' + day);
```

