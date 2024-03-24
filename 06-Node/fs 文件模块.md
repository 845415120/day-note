---
标题: 
图片: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQXfD_JaeoTGHKhrhKzUHLiOGGn7InDXdHo-Tzvx4dVao9IgTRr-DuGWJxYluDtXnc4g&usqp=CAU
链接: 
时时: 
评价: 
tags:
---
# fs模块

## 文件写入

### 1.writeFile异步写入

以下为异步模式下写入文件的语法格式：fs.writeFile(file, data[, options], callback)

```javascript
let fs = require("fs")

fs.writeFile('./座右铭.txt', '三人行必有我师焉', err => {
  return
})
```

writeFileSync 同步

### 2.appendFile追加写入

fs.appendFile(file, data[, options], callback)

```javascript
const fs = require('fs')
fs.appendFile('./座右铭.txt', '自强善者而从之', err => {
  console.log('追加写入')
})
```

### 3.createWriteStream流式写入

Node.js Stream(流)Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

fs.createWriteStream()

```javascript
// 导入 fs
const fs = require('fs')
// 创建一个可以写入的流，写入到文件 output.txt 中
var ws = fs.createWriteStream('./观书有感.txt')
// 写入
ws.write('半亩方糖一件开\r\n')
ws.write('天光无色共徘徊\r\n')
ws.write('问渠哪得清如许\r\n')
ws.write('为有源头活水来\r\n')
ws.write('半亩方糖一件开\r\n')
// 关闭通道
ws.close()
```

## 文件读取

### 1.readFile 异步读取

fs.readFile(path[, options], callback)

- path:文件地址
- options:选项配置
- callback :回调函数

```javascript
const fs = require('fs')

fs.readFile('./观书有感.txt', (err, data) => {
  if (err) {
    console.log('读取失败')
    return
  }
  console.log(data.toString())
})
```

### readFileSync 同步读取

```javascript
const fs = require('fs')
let data = fs.readFileSync('./观书有感.txt')
console.log(data.toString())
```

### 3.createReadStream 流式读取

```javascript
const fs = require ('fs')
// 创建读取流对象
const ws = fs.createReadStream('../')
// 绑定事件
ws.on('data',chunk=>{
  console.log(chunk.length);
})
// 关闭
ws.on('end',()=>{

})
```

## 案例:复制文件

同步

```javascript
const fs = require('fs')
let data = fs.readFileSync('../座右铭.txt')
fs.writeFileSync('../座右铭-2.txt', data)
```

流式

```javascript
// 流式 
const rs = fs.createReadStream('../座右铭.txt')
const ws = fs.createWriteStream('../座右铭-3.txt')

rs.on('data', chunk => {
  ws.write(chunk)
})
//  rs.pipe(ws) 
```

## rename 文件重命名/移动

fs.rename (oldpath,newpath,callback)fs.renameSync((oldpath,newpath)

```javascript
const fs = require('fs')
// 重命名
fs.rename('../座右铭-3.txt', '../论语.txt', err => {
  return
})
// 移动
fs.rename('../座右铭-2.txt', '../fs模块/座右铭-2.txt', err => {
  return
})
```

## unlink / rm文件删除

```javascript
const fs = require('fs')

fs.unlink('./座右铭-2.txt', err => {
  return
})

fs.rm('./座右铭-2.txt', err => {
  return
})
```

## 文件夹操作

### mkdir  创建文件夹

fs.mkdir (path[,option],callback)

### readir 读取文件夹

fs.mkdir (path[,option],callback(err,data))

### rmdir 删除文件夹

rm![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687765149164-aa922eae-10dc-4ad4-ade3-6598ca97b2d6.png#averageHue=%232f2e25&clientId=u4e2ba482-f4d6-4&from=paste&height=152&id=u54b562d8&originHeight=186&originWidth=433&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=40117&status=done&style=none&taskId=ucf980e96-f2e7-4c02-a76c-ab0ebf40ad8&title=&width=354.9180244636999)

### status查看文件信息

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687766160417-e2a4d51b-c5aa-4149-8d4e-27eabffcea29.png#averageHue=%232c2c23&clientId=u4e2ba482-f4d6-4&from=paste&height=211&id=u21ddde28&originHeight=257&originWidth=480&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=64872&status=done&style=none&taskId=u21e076f4-6a03-4866-a8a0-9741af57709&title=&width=393.4426137241939)

## 案例批量重命名

```javascript
const fs = require('fs')

const files = fs.readdirSync('../fs模块')
// 遍历数组

files.forEach(item => {
  let data = item.split(0) 
  let [num,name] =data
 num = '0'+num
 let newName = num + '-' + name
 fs.renameSync(`../fs模块/${item}`,`../fs模块/${newName}`)
 console.log(newName);
})

```

