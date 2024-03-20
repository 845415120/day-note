
# Node

node 中使用的JavaScript 只包含 ECMAscript 不包含Web Api

## Node.js 全局对象  global

## Buffer(缓冲器)

JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

### 创建 Buffer 类

Buffer 提供了以下 API 来创建 Buffer 类：

- **Buffer.alloc(size[, fill[, encoding]])：** 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0

```javascript
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);
// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);
```

- **Buffer.allocUnsafe(size)：** 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据

```javascript
// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);
```

- **Buffer.from(array)：** 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）

```javascript
// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
```

### Buffer 转 字符串

```javascript
const buf = Buffer.from([105,108,111,118,101,121,111,117])
console.log(buf.toString())
```

## 进程与线程

进程是资源分配的最小单位，**线程**是程序执行的最小单位蜜雪冰城店铺    员工

```javascript
let fs = require("fs")
```

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

# Path模块

提供操作路径的功能

## _dirname 绝对路径全局变量

## path.resolve 拼接规范的绝对路径

```javascript
const path = require ('path')
path.resolve(_dirname, './index.html')
```

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687768596397-a6403dc2-c4de-4540-ba55-c0bdcc23991f.png#averageHue=%23fafafa&clientId=u4e2ba482-f4d6-4&from=paste&height=191&id=u500eb9f3&originHeight=233&originWidth=661&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=57145&status=done&style=none&taskId=u430c717f-6d89-4661-b758-c2105434d52&title=&width=541.803265982692)

# HTTP

## 请求报文

(1)请求行

- 请求方法
- 请求URL地址
- HTTP协议及版本号

(2)请求头(3)请求体![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1684808765027-1e4c2333-edd6-486a-b686-87dcba1c4f5f.png#averageHue=%23f2f2f2&clientId=u7161d3e7-75d7-4&from=paste&height=434&id=uf54a00e5&originHeight=530&originWidth=998&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=309835&status=done&style=none&taskId=uc1167fa3-1877-4e7c-9f31-16b4da9eabe&title=&width=818.0327677015531)

## 响应报文

(1)响应行

- 协议及版本号
- 状态码
- 原因短语

(2)响应头(3)响应体![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1684808534931-1896553e-3eae-4286-8818-2e4d023cfd8d.png#averageHue=%23f6fafa&clientId=u7161d3e7-75d7-4&from=paste&height=268&id=u30068c84&originHeight=327&originWidth=626&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=89438&status=done&style=none&taskId=u712ec56c-a7d7-49d5-9c68-48abe0d0652&title=&width=513.1147420653028)

## 状态码

2XX 成功3XX 重定向4XX 客户端错误5XX 服务端错误

# 端口

实现不同主机之间通信

## http 模块

```javascript
const http = require('http')

const server = http.createServer((requset, response) => {
  response.end('Hello http')// end 完成写入
})
server.listen(3000, () => {
  console.log('服务已经启动!')
})
```

## Http服务器

### 创建一个简单的http服务器

Nodejs官网中有给出以下示例代码:

```javascript
const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain') //writeHead，200表示页面正常，text/plain表示是文字。
  res.end('Hello World\n') // end 完成写入
})

server.listen(3000, 127.0.0.1, () => {
  console.log('服务器运行')
})
```

分析下代码:

- 首先, 通过require('http')引入http模块.
- 然后, 通过http.createServer([requestListener])来创建一个web服务器，并传入一个可选的回调函数，
  - 回调函数有两个参数分别代表
  - **客户端请求对象request**
  - **服务器端的响应对象response.**
- 最后, 使用```server.listen([port][, hostname][, backlog][, callback])```, 开始在指定的port和hostname上接受http请求并做出响应

通过以上3步, 即创建了一个简单的http服务器

# 模块化

## module.export 暴露数据

```javascript
module.export = {
  
}
```

## require('') 导入

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687837021444-a7dba0a5-5d43-4dff-8023-2cc30598bd89.png#averageHue=%23fcfcfc&clientId=u18393603-22f4-4&from=paste&height=327&id=ub8aa6626&originHeight=399&originWidth=954&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=163716&status=done&style=none&taskId=ud47b52b0-178a-4797-b748-6edfc6e0bad&title=&width=781.9671947768353)

# CommonJS规范

# npm

## 常用命令

### 初始化 npm init  

注意事项 :包名不能使用中文，大写

### 安装包 npm i<包名@版本号>

- npm i -s  生产依赖
  - dependencie属性
- npm i-D - 开发依赖  
  - devDependencies属性
- npm i-g 全局安装

### require导入npm包的基本流程

1. 在当前文件夹下node_modules中寻找同名的文件来2 .若未找到，在上级目录下node modules中寻找同名的文件夹，直到找到磁盘根目录

# express框架

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687920277570-47cd34d4-a5f4-4119-8e5a-394948fcb777.png#averageHue=%23fbfbfb&clientId=ude6276b7-61b8-4&from=paste&id=u8e9bbed0&originHeight=500&originWidth=1101&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=71262&status=done&style=none&taskId=ud55e9f87-6a67-4fbd-bd7e-95376e81d45&title=)是一个封装好的工具包，能更方便的使用http服务，便于我们开发web应用

## express使用

### 初始化项目

`npm init`

### 安装express包

`npm install express`

### 引入express

`const express = require ('express')`

### 创建应用对象

`const app = express()`

### 创建路由

```javascript
app.get('url',(req,res)=>{
res.end()
})
```

### 监听端口,启动服务

```javascript
app.listen(3000,()=>{
log
})
```

## express获取请求参数

兼容原生http模块的方式

#### 获取查询字符串

req.query

#### 获取指定的请求头的值

req.get(请求头)

## express获取路由参数

路由参数指URL路径中的参数例如: [https://itemid.com/100024459185.htm](https://itemid.com/100024459185.htm)中100024459185是路由参数

```javascript
app.get('/:id.html',(req. res) => {
res.params.id
})
```

## express设置响应

```javascript
● 设置响应状态码
  ○ res.status(404)
● 设置响应头
  ○ res.set('xxx', 'yyy')
● 设置响应体
  ○ res.send(中文响应不乱码'
● 可以进行连贯操作:
  ○ res.status(xxx).set(.....).send(.....)
● 重定向
  ○ res.redirect(网站url)
● 下载响应
  ○ res.download(下载路径)
● 响应文件内容
  ○ res.sendFile(文件路径)
```

# express 中间件

本质是回调函数中间件函数可以像路由回调一样访问请求对象(request),响应对象(response)

## 全局中间件

每一个请求到达服务端都会执行全局中间件函数

- 1声明中间件函数，记得加next0
- 2 应用中间件 app.use()

```javascript
const express = require('express')

const app = express()
//中间件函数
functon 函数名 (){ 
  //调用
  next()
}
app.use(函数名)

app.get('/home', (req, res) => {
  res.end('前台首页')
})
app.get('/admin', (req, res) => {
  res.end('后台首页')
})
app.listen(3000, () => {
  console.log('启动!')
})
```

```javascript
//中间件函数
functon 函数名(req,res,next){ 
  //调用
  next()
}
app.use(函数名)
```

## 路由中间件

中间件函数在路由里面，可以添加多个,放在受约束的路由当中

```javascript
const express = require('express')

const app = express()

//中间件函数
let 函数名 =  (req,res,next)=>{ 
  //调用
  next()
}

app.get('/home',函数名, (req, res) => {
  res.end('前台首页')
})
app.get('/admin', 函数名,(req, res) => {
  res.end('后台首页')
})
app.listen(3000, () => {
  console.log('启动!')
})
```

```javascript
//中间件函数
let 函数名 =  (req,res,next)=>{ 
  //调用
  next()
}
app.get('/home',函数名, (req, res) => {
  res.end('前台首页')
})
```

### req.param.id

在Node.js中，`req.param.id`是用于获取路由中的命名参数（也称为动态路由参数）的一种方式。当在路由中定义了带有参数的路径时，例如：`/users/:id`，其中`:id`表示一个可变的参数。当客户端发送请求时，这个参数的值会被捕获并存储在`req.params`对象中。`req.param.id`就表示其中一个参数的值。例如，对于路径`/users/123`，`req.param.id`就是`123`。你可以通过访问`req.params.id`或者`req.params['id']`来获取参数的值，这两种写法是等价的。需要注意的是，这种方式只适用于命名参数。对于查询参数（Query Parameters），应该使用`req.query`来获取。

## 静态资源中间件

```javascript
app.use(express.static('public'))
```

将当前文件夹下的public目录作为网站的根目录  相当于“/"访问网站，会默认打开public文件夹下的index.html文件

## 获取请求体的数据

## ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687859354738-22ee25bc-8b15-4e9b-b88e-d19f45c49fe0.png#averageHue=%23f3f2ef&clientId=u7518f8a6-02d5-4&from=paste&height=278&id=u6a5bb12d&originHeight=339&originWidth=793&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=150960&status=done&style=none&taskId=u7df970a9-9cea-42f4-b87d-775ba9d441a&title=&width=649.9999847568453)防盗链

作用: 网站请求服务器的资源文件，一旦检测到来源不是本站，即进行阻止或者返回指定的页面原理: 获取请求头的Referer属性值，进行匹配

# 路由

以下代码是非常基本的路由示例。

```javascript
var express = require('express');
var app = express();

// 当对主页发出 GET 请求时，响应“hello world”
app.get('/', function(req, res) {
  res.send('hello world');
});
```

## express.Router使用

定义: express中的router是一个完整的中间件和路由系统，可以看作是小型的app对象作用: 以前express路由都写到了一个文件下面，复用性差，维护性差，难以修改对路由进行模块化，更好的管理路由创建独立的is文件作为一个模块

- 1导入express
- 2 创建路由器对象
  - const router = express.Router()
- 3在router对象上添加路由
  - ```router.<method>(请求url，callback)```
- 4 暴露
  - module.exports = router
- 主模块文件 5 引入子路由文件
  - const homeRouter = require('./router/homeRouter)
- 6 设置和使用中间件
  - app.use(homeRouter)

以下示例将路由器创建为模块，在其中装入中间件，定义一些路由，然后安装在主应用程序的路径中。在应用程序目录中创建名为 birds.js 的路由器文件，其中包含以下内容：

```javascript
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
```

接着，在应用程序中装入路由器模块：

```javascript
var birds = require('./birds');
...
app.use('/birds', birds);
```

 此应用程序现在可处理针对 /birds 和 /birds/about 的请求，调用特定于此路由的 timeLog 中间件函数。

# EJS模板引擎

定义: 分离用户界面和业务数据的一种技术(分离html与js的技术，降低耦合)**EJS:一个高效的JavaScript的模板引擎**

### 安装

```javascript
npm i ejs
```

### 常用语法

#### <%= 数据 %>

#### <% code %>code里面是is代码

#### ejs.render( html模板文件 ， 给模板引擎的数据)

### express中使用ejs

![1687921825467.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687921938840-4398d29f-4c6c-411e-8761-0379a566a073.png#averageHue=%232e2e25&clientId=ude6276b7-61b8-4&from=paste&height=573&id=u9f69682f&originHeight=699&originWidth=1543&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=670281&status=done&style=none&taskId=ub9cbcf0c-d56a-4f4e-9ae4-4017e4577e0&title=&width=1264.7540687008982)![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687921955812-c3cf9854-9c96-4f99-b788-ff3c67e50ad2.png#averageHue=%23f3f3f2&clientId=ude6276b7-61b8-4&from=paste&height=137&id=u8c687845&originHeight=167&originWidth=395&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=36754&status=done&style=none&taskId=u5a6062b7-a753-4bdd-af18-e37ba109655&title=&width=323.77048421053456)

# Express 应用程序生成器

[Express 应用程序生成器](http://expressjs.com/zh-cn/starter/generator.html#express-%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E7%94%9F%E6%88%90%E5%99%A8)

```javascript
npx express-generator
```
