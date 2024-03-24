---
标题: 
图片: 
链接: 
时时: 
评价: 
tags:
---

## 视频
![](11.案例_网易新闻接口_web服务准备.mp4)

![](12.案例_网易新闻接口_头条数据请求和响应.mp4)

![](13.案例_网易新闻接口_其他接口的使用.mp4)

![](14.同源策略讲解_跨域出现.mp4)

![](15.跨域的解决方案.mp4)
![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1665374745452-84e8bf9e-a15b-47b1-bcdd-2af4bccb9595.jpeg)

# 课程介绍

- HTML + CSS （做网页）
- JS基础 （JS基础语法、变量、数据类型、函数、流程控制、运算符......）
- WebAPIs（使得JavaScript有能力操作页面元素）
- JS高级（了解原型、各种内置方法、箭头函数、解构赋值....）
- Ajax（能够发送请求，和服务器有交互、Promise异步处理、事件循环）
- Git（难学，首次使用终端窗口，代码版本记录、多人协作工具）
- 数据可视化（对Ajax知识的综合应用，echarts图表，增强编程能力）
- 项目前置课（查漏补缺的课，散乱的知识点比较多，对项目做准备）

- 第1天：初识Node（了解Node是什么？能够干什么？简单的用一下；顺便写一个接口）
- 第2天：包管理器（npm 、yarn）（重要）
- 第3天：ES6模块化（重要）、webpack

- vue框架

# 终端软件

## 介绍

可以执行命令的窗口，叫做终端软件  
作为程序员，开发时，都会大量使用命令（计算机系统相关命令，Git相关命令、Node命令等等）  
所以，就必须了解终端软件的使用。而且，系统不同，终端软件也不同

## 已经用过的终端软件

安装Git之后，鼠标右键，打开 “Git Bash Here”，打开的这个黑窗口就是一个终端软件。  
在里面可以执行Git命令，（建议大家在这个窗口中，**只写** Git命令）

## 系统内置终端软件

- Windows

- cmd

- 在文件夹地址栏的位置，输入cmd，回车即可打开

- powershell

- 在文件夹空白处，按住Shift，鼠标右键，选择“在此处打开powershell窗口”

- Windows Terminal （win11自带的、win10去商店安装，重启电脑）

- Mac

- 终端（建议安装 [**超级右键Lite**](https://apps.apple.com/cn/app/%E8%B6%85%E7%BA%A7%E5%8F%B3%E9%94%AElite/id1552554632) ）+ [oh my zsh](https://gitee.com/laotang1234/ohmyzsh/wikis/%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)（终端美化工具）
- **也可以选择** 安装 hyper 或者 iterm2 这样的终端软件。

这些终端软件中，也可以执行我们学习过的Git命令。

## vscode中的终端（可选）

vscode中的终端，使用的也是系统内置的终端。没什么新鲜的，只不过把界面集成到了vscode中而已。

- 点击vscode菜单栏（最上面一栏）中的“终端”，即可新建一个终端窗口。（不建议）
- 或者在侧边栏的文件上，鼠标右键，新建终端（建议）
- 或者按快捷键 `Ctrl + ~` 打开关闭终端（建议）

喜欢就用，不喜欢就算了。

## cd命令

作为前端开发者，最常用的系统命令就是 `cd` 命令

- c 是 change 的意思，切换的意思
- d 是 directory 的意思，目录的意思

所以 `cd` 命令的作用是切换终端中的路径

- `cd /` 切换到根目录
- `cd ..` 切换到上层目录 （**重点** ）
- `cd xxx` 切换到 xxx 目录 （**重点** ）

## 终端使用技巧

- 按 ↑ 找到曾经执行过的命令。按 ↓ 相反。
- 按 ESC 清除当前一行
- 按 tab 键，可以自动补全命令。
- clear命令用于清屏。（**cmd中使用cls命令清屏** ）

# JS运行环境

## 运行环境

环境，可以想象的具体一点  
比如人生存的环境，需要水、氧气、食物、女朋友等等；  
比如鱼的生存环境，需要水、氧气、食物等等；  
所以，**环境，指的就是 生物能够正常生存下来所必须的条件** 。下图，展示了鱼的不同生存环境：  
![]()![]()![](

同理，**JS运行环境，指的就是JavaScript代码能够正常运行所必须的条件** 。代码能够正常运行，必要的条件有：

- API -- 给程序员提供语法
- JS引擎 -- 将代码转为最终效果

![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1665240369201-821d500f-4408-4076-a645-73a16ee4a8bd.jpeg)  
猜想，上图中的 **？** 是什么，答案是：浏览器目前来说，只有浏览器才能提供JS代码运行的必要条件，所以浏览器就是JS运行环境。

## 其他补充

我们所学习的JavaScript代码，实际上由两个部分构成

- ECMAScript  （语言设计者设计）
- WebAPIs（浏览器软件内置）

# Node.js简介

## 什么是 Node.js

Node.js 的官网地址: [https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)  
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.`Node.js` `是`一个基于 Chrome V8 引擎的 `JavaScript` `运行环境`。  
Node.js 为 JavaScript 代码的正常运行，提供的必要的条件。  
**所以，Node是另一个JavaScript运行环境** 。注意：

- 浏览器是 JavaScript 的`前端`运行环境（提供WebAPIs和JS引擎）
- Node.js 是 JavaScript 的`后端`运行环境（提供内置模块API和JS引擎）

**无论是那种环境，肯定都支持 核心 ECMAScript** 。![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652015091883-d248ae8c-32de-4408-9fb0-12eb4dba0d34.png#averageHue=%23b1aeb1&clientId=u3e172c9a-17e4-4&from=paste&height=185&id=uIU5Y&originHeight=231&originWidth=894&originalType=binary&ratio=1&rotation=0&showTitle=false&size=18922&status=done&style=none&taskId=uea8e674a-85f6-451b-911a-5b1a0a93a07&title=&width=715.2)  
**总结起来：**

1. **Node是JS的另一个运行环境。**
2. **在Node环境中，可以运行ECMAScript语法，但不能运行 WebAPI的语法** 。

## Node.js可以做什么

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652014560745-dd8182bd-2c0a-46c3-8545-5942b2082aff.png#averageHue=%23f8f8f8&clientId=u6dd699be-f440-4&from=paste&height=179&id=u41234047&originHeight=224&originWidth=596&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38556&status=done&style=none&taskId=u5c49ab2e-d359-4f41-8585-24e21c1853d&title=&width=476.8)  
Node.js 是一门后端语言，它的出现，使得JavaScript有了做后端开发的能力。  
Node.js 作为一个 JavaScript 的运行环境，仅仅提供了基础的功能和 API。  
然而，基于 Node.js 提供的这些基础功能，很多强大 的工具和框架如雨后春笋，层出不穷  
所以学会了 Node.js ，可以让前端程序员胜任更多的工作和岗位！  
具体来说：

- 基于 Express/Koa 框架([http://www.expressjs.com.cn/)，可以快速构建](http://www.expressjs.com.cn/)%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%BF%AB%E9%80%9F%E6%9E%84%E5%BB%BA) Web 应用
- 基于 Electron 框架([https://electronjs.org/)，可以构建跨平台的桌面应用（vscode就是用node开发的）](https://electronjs.org/)%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%9E%84%E5%BB%BA%E8%B7%A8%E5%B9%B3%E5%8F%B0%E7%9A%84%E6%A1%8C%E9%9D%A2%E5%BA%94%E7%94%A8%EF%BC%88vscode%E5%B0%B1%E6%98%AF%E7%94%A8node%E5%BC%80%E5%8F%91%E7%9A%84%EF%BC%89)
- 基于 restify 框架([http://restify.com/)，可以快速构建](http://restify.com/)%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%BF%AB%E9%80%9F%E6%9E%84%E5%BB%BA) API 接口项目
- 读写和操作数据库、创建实用的命令行工具辅助前端开发
- etc...

总之，Node.js 是大前端时代的“大宝剑”，有了 Node.js 这个超级 buff 的加持，前端程序员的行业竞争力会越来越强！  
**由于一些原因，目前绝大多数前端程序员只是把Node当做一种工具，能够辅助前端开发即可** 。

# Node.js环境安装

## 下载安装

如果希望通过 Node.js 来运行 Javascript 代码，则必须在计算机上安装 Node.js 环境才行。  
安装包可以从 Node.js 的官网首页直接下载，进入到 Node.js 的[官网](https://nodejs.org/zh-cn/)首页，点 击绿色的按钮，下载所需的版本后，双击直接安装即可。  
进入[官网](https://nodejs.org/zh-cn/)（中文），可以看到如下两个版本：  
![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652014631997-94f5cc65-e541-4397-aedb-4f7b4c97d129.png#averageHue=%230c7206&clientId=u6dd699be-f440-4&from=paste&height=119&id=uccee47c8&originHeight=149&originWidth=827&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21755&status=done&style=none&taskId=udc8426a4-b4e1-48aa-9719-bd130202c6c&title=&width=661.6)

- LTS 为长期稳定版，对于追求稳定性的企业级项目来说，推荐安装 LTS 版本。
- Current 为新特性尝鲜版，对于热衷于尝试新特性的用户来说，推荐安装 Current 版本的 Node.js。但是，Current 版本 中可能存在隐藏的 Bug 或安全性漏洞，因此不推荐在企业级项目中使用 Current 版本的 Node.js。

建议使用 长期支持版

## 检测node是否安装成功

打开终端（黑窗口，或者蓝窗口），在终端输入命令 `node –v` 后，按下回车键，即可查看已安装的 Node.js 的版本号。

如果你能够看到版本号，说明你已经安装成功了。

# Node环境中运行JS代码

## 终端窗口运行（了解）

此种方式，类似于浏览器调试工具的“Console”面板，只适合运行少量的测试代码，所以了解即可。  
操作步骤：

- 打开任意终端，直接输入 node 命令并回车
- 执行你的JS代码，按回车表示执行
- 按两次“Ctrl+C”退出。

## 使用node命令执行JS文件（掌握）

此种方式，比较常用。可以运行 写到 “`xx.js`” 里面的JS代码，可以运行JS文件中的代码。  
操作步骤：

- 打开终端
- 输入 “`node 要执行的js文件`”回车表示运行

**为了方便找到js文件，最好在js代码文件夹，打开终端窗口**

**可能的问题** ：

- 如果终端中出现 `>`符合，说明操作失误，按两次“Ctrl+C”退出
- 不能使用node运行html、css等等代码，因为node只是JS的运行环境。
- 不能在node环境中运行WebAPI的代码，比如 document、ajax，因为 document、ajax是浏览器环境的API。
- JS文件名，不能叫做 `node.js`，特殊记忆。
- 终端路径中如果找不到js文件，则需要在node命令之后补全路径

`D:\153\框架前置课01> node 代码/01-test.js`

# 内置模块

内置模块是Node.js 平台自带的一套基本的 API(功能模块)。也叫做核心模块。  
下面介绍几个内置模块。

## path模块

- `path` 是 Node 本身提供的 API，专门用来处理路径。
- [http://nodejs.cn/api/path.html](http://nodejs.cn/api/path.html)
- 使用

- 加载模块

```
// 使用核心模块之前，首先加载核心模块
const path = require('path');
```

- 调用path模块中的方法，来处理相应的问题，下面列举path模块中的几个方法  

|   |   |
|---|---|
|方法|作用|
|path.basename(path[, ext])|返回 path 的最后一部分(文件名)|
|path.dirname(path)|返回目录名|
|path.extname(path)|返回路径中文件的扩展名(包含.)|
|path.format(pathObject)|将一个对象格式化为一个路径字符串|
|path.join([...paths])|拼接路径|
|path.parse(path)|把路径字符串解析成对象的格式|
|path.resolve([...paths])|基于当前工作目录拼接路径|

```
const { join } = require('path')

// 作用：拼接给出的路径
// join(路径1, 路径2, 路径3, .........)

// console.log(join('a', 'b', 'c')) // a/b/c

// console.log(join('a', '/b/', 'index.html')) // a/b/index.html

// console.log(join('a', 'b', '../c', 'index.css')) // a/c/index.css

// -------------- 在node中，和路径相关的全局变量 -------------------
// __dirname  当前文件的绝对路径   D:/xxx/dddd/xxxxx
// __filename 当前文件的绝对路径   D:/xxx/dddd/xxxxx/05-path.join.js
// console.log(__dirname)
// console.log(__filename)

// 需求：拼接 03-index.js 的绝对路径
// join('d:/ddd/dssss/dssss', '03-index.js')
console.log(join(__dirname, '03-index.js'))
```

这里有用的代码，就一行：  
`join(__dirname, 'xxx')`

## fs模块

- fs，即 file system，文件系统，该模块可以实现对 文件、文件夹的操作
- [http://nodejs.cn/api/fs.html](http://nodejs.cn/api/fs.html)
- 使用

- 加载模块

```
// 引入模块，引入模块的时候，可以使用var、let，但是建议使用const，因为我们不希望它改变
const fs = require('fs');
```

- 调用fs模块的方法，下面列举fs模块中的常用方法    

|   |   |   |
|---|---|---|
|API|作用|备注|
|fs.access(path, callback)|判断路径是否存在||
|fs.appendFile(file, data, callback)|向文件中追加内容||
|fs.copyFile(src, callback)|复制文件||
|fs.mkdir(path, callback)|创建目录||
|fs.readDir(path, callback)|读取目录列表||
|fs.rename(oldPath, newPath, callback)|重命名文件/目录||
|fs.rmdir(path, callback)|删除目录|只能删除空目录|
|fs.stat(path, callback)|获取文件/目录信息||
|fs.unlink(path, callback)|删除文件||
|fs.watch(filename[, options][, listener])|监视文件/目录||
|fs.watchFile(filename[, options], listener)|监视文件||
|..... 一大堆|||

```
// fs -- file system 文件系统
// fs 模块处理的问题，都和文件、文件夹相关
// 比如：获取某个文件里面的内容
// 比如：把一些内容放到某个文件中
// 比如：创建文件
// 比如：创建文件夹
// 比如：读取文件夹里面的全部文件
// 比如：删除文件、文件夹
// 比如：监视文件的变化
// .......
// 我们只需要学习 fs 模块中的 readFile 和 writeFile 方法
// 加载模块、 导入模块
// const fs = require('fs') // { readFile: xxxx, writeFile: xxx, appendFile: xxx, access: xx,... }
// fs.readFile()
// fs.writeFile()

const { readFile, writeFile } = require('fs')
// readFile()
// writeFile()

// -------------------------- 1. 读取文件 -------------------------------
// 方法：readFile()
// 作用：读取文件（获取文件里面的内容）
// 特点：这是一个异步方法
// 语法：
/**
 * readFile('文件名', '可选的编码格式', (err, data) => {
 *    如果有错误,err=包含错误信息的对象；   如果没有错误,err=null
 *    data 表示读取的结果
 * })
 */
// readFile('成绩.txt', 'utf-8', (err, data) => {
//   if (err) throw err // 抛出错误；1、会抛出错误信息；2、会终止后续代码的执行
//   console.log(data)
//   // console.log(data.toString())
// })

// Buffer 类型；它是node环境中，特有的一个类型（结果是二进制的格式）
// 这种格式的东西，可以调用 toString() 方法，转成字符串

// -------------------------- 2. 写入文件 -------------------------------
// 方法：wirteFile()
// 作用：写入文件（向文件中加入内容）
// 特点：
// 1. 这是一个异步方法
// 2. 如果写入的文件不存在，则会自动创建文件（但是不会递归创建）
// 3. 会覆盖文件中原有的内容
// 语法：
/**
 * writeFile('文件名', '内容', err => {
 *   如果有错误,err=包含错误信息的对象；   如果没有错误,err=null
 * })
*/

writeFile('a.txt', '123456', err => {
  if (err) throw err
  console.log('写入成功')
})
```

## 整理成绩案例

假设有 ”成绩.txt”，内容如下：

```
小明=99 小红=100 小花=80 小王=88 老王=70
```

要求整理成如下格式：

```
小明: 99
小红: 100
小花: 80
小王: 88
老王: 70
```

步骤：

- 读取 ”成绩.txt”，得到里面的内容
- 使用字符串的 replace 方法替换

- 将 空格 替换成 `\n` （`\n`在文件中是换行的意思）
- 将 = 替换成 `:`

- 将最终结果存储到 ”ok.txt” 中

代码如下：

```
const { join } = require('path')
const { readFile, writeFile } = require('fs')
// 1. 读取 成绩.txt 里面的内容
readFile(join(__dirname, '成绩.txt'), 'utf-8', (err, data) => {
  if (err) throw err
  // 2. 把结果转成需要的格式
  // console.log(data) // 小明=99 小红=100 小花=80 小王=88 老王=70
  data = data.replace(/ /g, '\n') // \n 是文件中的换行
  data = data.replace(/=/g, ': ')
  // console.log(data)
  // 3. 把转换后的结果，存入 OK.txt 中
  writeFile('OK.txt', data, err => {
    if (err) throw err
    console.log('整理完毕')
  })
})
```

## 读写JSON文件

准备books.json，代码如下：

```
[
  {
    "id": 1,
    "bookname": "西游记",
    "author": "唐僧",
    "publisher": "北京出版社"
  },
  {
    "id": 3,
    "bookname": "红楼梦",
    "author": "唐僧",
    "publisher": "北京出版社"
  }
]
```

创建 08-读写JSON.js ，代码如下：

```
const { join } = require('path')
const { readFile, writeFile } = require('fs')

// 拼接 books.json 的绝对路径
const file = join(__dirname, 'books.json')

// 1. ------------------- 获取到所有的图书数据 -------------------
// readFile(file, 'utf-8', (err, data) => {
//   if (err) throw err
//   console.log(JSON.parse(data))
// })


// 2. -------------------     添加一本书     -------------------
readFile(file, 'utf-8', (err, data) => {
  if (err) throw err
  let arr = JSON.parse(data)
  // 向数组中，添加一本新书
  arr.push({ id: Date.now(), bookname: '水浒传', author: '施耐庵', publisher: '北京出版社' })
  // console.log(arr)
  writeFile(file, JSON.stringify(arr), err => {
    if (err) throw err
    console.log('添加成功')
  })
})
```

# 网络基础

[http://www.itcbc.com:3006/api/getbooks](http://www.itcbc.com:3006/api/getbooks)  
[http://123.57.104.105:3006/api/getbooks](http://123.57.104.105:3006/api/getbooks)

http -- 协议  
[www.itcbc.com](http://www.itcbc.com) -- 域名（主机地址）3006 -- 端口号

## 协议

### 什么是HTTP

**超文本传输协议** ，是一个基于请求与响应，无状态的，应用层的协议，常基于TCP/IP协议传输数据，互联网上应用最为广泛的一种网络协议，所有的WWW文件都必须遵守这个标准。**HTTP协议默认端口号是 80**

### 什么是HTTPS

HTTPS 是身披 SSL外壳的 HTTP。HTTPS是一种通过计算机网络进行安全通信的传输协议，经由HTTP进行通信，利用SSL/TLS建立全信道，加密数据包。HTTPS使用的主要目的是提供对网站服务器的身份认证，同时保护交换数据的隐私与完整性。  
**HTTPS协议默认端口号是 443**  
**协议，它规定了双方（浏览器和服务器）应该如何传输数据。**

## 主机地址

**主机地址是作用是为了找到服务器** 。

### IP地址

IP地址（Internet Protocol Address）是指互联网协议地址，又译为网际协议地址。IP地址是IP协议提供的一种统一的地址格式，它为互联网上的每一个网络和每一台主机分配一个逻辑地址，以此来屏蔽物理地址的差异。  
比如生活中的地址，表示地理上的一个位置，通过这个地址可以找到这个地理位置。  
同样的，互联网中的每一台主机电脑，都有一个地址。通过这个地址可以找到这台主机电脑。  
**本机IP：127.0.0.1**

### 域名

形如 [www.xxx.com](http://www.xxx.com) 这样的就叫做域名，域名需要单独购买。购买后，需要绑定IP地址进行使用。绑定IP地址后，就可以通过域名找到主机电脑了。**本机域名：localhost**

## DNS服务器

DNS服务器用于记录 IP地址和域名的对应关系。  
前面说，域名和IP地址是绑定关系，那么某个域名绑定的IP地址是什么呢？这个对应关系就记录在DNS服务器当中。  
通过DNS服务器可以解析出 一个域名对应的IP地址。  
[www.itcbc.com](http://www.itcbc.com)   -----------------   123.57.103.104[www.baidu.com](http://www.baidu.com) -----------------    23.89.134.189

## 端口号

**端口号的作用，就是区分服务器上的程序的。每个程序有一个端口号** 。所谓的端口，就好像是门牌号一样，客户端可以通过ip地址找到对应的服务器端  
但是服务器端是有很多应用程序的，每个应用程序对应一个端口号，通过端口号，客户端才能真正的访问到该服务器上的应用程序。  
为了对端口进行区分，将每个端口进行了编号，这就是端口号。  
端口号的范围是 0 ~ 65535  
如果一个应用程序使用了3006端口号，其他的应用程序就不能再使用3006端口号。  
http 协议，默认端口：80  
https 协议，默认端口：443

## 客户端请求服务器的步骤(重要)

当我们在浏览器地址栏输入 “[http://www.xxx.com/api/getbooks](http://www.xxx.com/api/getbooks)”时或者使用Ajax发送请求，客户端是如何找到服务器并发送请求的？  
简单的描述：

- 按回车后，先通过DNS服务器找到域名对应的IP地址
- 通过IP地址去请求服务器

--------------------------------------------------------------------------------------------------------  
**面试，只说大标题** ，下面的1/2/3/4/5/6 即可。

1. 先找到服务器【必须得到IP地址】

1. 检测浏览器缓存有没有缓存该域名对应的IP地址。有则通过IP地址去找服务器
2. 检测本地的hosts文件，是否有记录该域名对应的IP地址，有则通过IP地址去找服务器
3. 通过DNS服务器解析，找到该域名对应的IP地址，然后通过IP地址去找服务器

2. 进行三次握手（建立连接，确认一下双方是否有发送数据和接收数据的能力）

1. 第一次握手是在建立连接，客户端发送连接请求报文段，把标有SYN的数据包发给服务器端即为接收端。
2. 第二次握手是服务器端即接收端收到客户端的SYN的报文段，同时发送标有SYN/ACK的数据包。
3. 第三次握手是客户端收到服务器端的SYN/ACK的数据包后，向服务器端发送标有ACK的数据包。

3. 发送请求，传输数据。。。
4. 服务器处理，并做出响应
5. 浏览器接收响应结果。

1. 处理数据，渲染到页面中（首次渲染会有重绘和回流）

6. 四次挥手（作用是断开连接）

# 开发接口(了解)

## 准备工作

### 安装接口测试工具

接口开发，不能使用浏览器作为测试工具，因为不方便。

- 直接在浏览器地址栏输入接口地址，只能发送GET请求，无法测试其他接口
- 写ajax代码测试，又太麻烦了

所以，开发接口，需要一款专业的接口测试工具，比如：

- Postman （默认英文版本，github上有中文汉化包和汉化说明）
- ApiPost（默认中文）

### 了解npm

npm相关知识下一天讲，今天只是需要用一下它，所以临时补充一下。  
npm的作用是下载插件的，今天这样理解就可以的。  
使用步骤：

1. 新建项目文件夹，名字不能用中文，不能用特殊符号
2. 项目目录下，打开终端，运行 `npm init -y`  
3. 接着运行`npm i express`下载叫做express的插件

下载不下来，用课上老师发的代码也可以。这部分知识下一天就讲了

## express 介绍

- Express 是一个第三方模块，用于快速搭建服务器（替代node内置的http模块）
- Express 是一个基于 Node.js 平台，快速、开放、极简的 **web 开发框架** 。同类型产品 Koa
- [Express 官网](http://expressjs.com/)
- [Express 中文文档（非官方）](http://www.expressjs.com.cn/)
- [腾讯云开发者手册](https://cloud.tencent.com/developer/doc/1079)

## 搭建Web服务器的步骤

1. 项目目录中，新建 index.js
2. 打开 [Express 中文文档（非官方）](http://www.expressjs.com.cn/)，找到 “快速入门 --> Hello World”，复制里面的代码
3. 粘贴到 index.js 中
4. 终端中运行 `node index.js`

到此为止，服务器搭建并启动。浏览器或Postman访问 `localhost:3000` 即可看到响应结果。如果修改了代码，则必须重启服务：

- 终端中，按Ctrl + C 停止服务
- 重新运行 `node index.js` 启动服务

## 写接口语法

**写接口语法：**  
`**app.请求方式('接口地址', 处理函数)**`  
这里的处理函数，用于处理客户端发来的请求。

## 编写获取图书接口

### 服务端

准备好books.json文件：

```
[
  {
    "id": 1,
    "bookname": "西游记",
    "author": "唐僧",
    "publisher": "北京出版社"
  },
  {
    "id": 3,
    "bookname": "红楼梦",
    "author": "唐僧",
    "publisher": "北京出版社"
  }
]
```

写接口：

```
const { readFile, writeFile } = require('fs')
const { join } = require('path')
// 拼接一下books.json的绝对路径
const books = join(__dirname, 'books.json')

app.get('/api/getbooks', (req, res) => {
  // 把books.json里面的图书，读取出来，响应给客户端
  readFile(books, 'utf-8', (err, data) => {
    if (err) {
      res.send({ status: 1, message: '获取失败' })
    } else {
      res.send({ status: 0, message: '获取成功', data: JSON.parse(data) }) // 做出响应，参数就是响应结果
    }
  })
})
```

### 客户端

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1665369341700-3d91bd29-d6ce-4de3-8af0-d18f19cf9d75.png#averageHue=%23fcfbfb&clientId=ud2b71541-0104-4&from=paste&height=370&id=u08240771&originHeight=463&originWidth=1130&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50196&status=done&style=none&taskId=ud81b73c8-45e8-4d6e-8c15-5f7b4958115&title=&width=904)

## 编写添加图书接口

### 客户端

这次是添加图书，客户端必须提交数据。  
![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1665370073587-09178ba5-b7b9-4213-a09a-5176d0940c00.png#averageHue=%23fbfafa&clientId=ud2b71541-0104-4&from=paste&height=369&id=ubd41eefa&originHeight=461&originWidth=1128&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58504&status=done&style=none&taskId=u137c7386-b5fe-45cc-bd11-69515c1cca4&title=&width=902.4)

### 服务端

写接口之前，先准备两行代码，目的是接收客户端提交的数据。  
参考：[https://www.expressjs.com.cn/4x/api.html#req.body](https://www.expressjs.com.cn/4x/api.html#req.body)

```
app.use(express.json()) // 接收JSON格式的数据
app.use(express.urlencoded({ extended: true })) // 接收查询字符串格式的数据
```

写接口：

- 有了前面两行的准备，可以使用 **req.body**  得到客户端提交的数据
- 然后将数据存入到 books.json
- 响应添加成功

```
// 添加接口
app.post('/api/addbook', (req, res) => {
  // console.log(req.body) // 这就是客户端提交的数据 { bookname: '唐诗三百首', author: '未知', publisher: '北京出版社' }
  // 下面将 req.body 添加到 books.json中
  req.body.id = Date.now() // 给新书加id
  readFile(books, 'utf-8', (err, data) => {
    if (err) throw err
    let arr = JSON.parse(data)
    arr.push(req.body)
    writeFile(books, JSON.stringify(arr), err => {
      if (err) {
        res.send({ status: 1, message: '添加失败' })
      } else {
        res.send({ status: 0, message: '添加成功' })
      }
    })
  })
})
```

# 同源策略和跨域请求

## 同源

同源，说的是两个url之间的对比。如果两个url以下三个方面都相同，则这两个url同源，否则非同源。

- 协议（http、https、file、......）
- 主机地址（[www.itcbc.com）](http://www.itcbc.com%EF%BC%89)
- 端口号（:3006）

http协议默认的端口是 80；  https协议默认的端口是 443

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1651215750454-b75a2cf9-3dfd-43f3-920c-2efaa82973e1.png#averageHue=%23decaca&clientId=ufc0259ae-f66e-4&from=paste&height=399&id=u6a22e54c&originHeight=499&originWidth=1459&originalType=binary&ratio=1&rotation=0&showTitle=false&size=77616&status=done&style=none&taskId=u043cbeab-6752-4ba7-9700-6a9e0721fc8&title=&width=1167.2)

## 同源策略

同源策略（同源政策）是**浏览器** 的一种保护机制。如果发送了一个请求，服务器返回结果后，浏览器会判断（检查）**打开页面的url**  和 **请求的接口地址** 是否同源。

- 如果同源则接收响应结果
- 如果不同源，则拒绝接收结果（造成请求失败）

# 跨域

凡是违反了同源策略的请求，都是跨域请求。  
我们这几天，请求的接口，都是跨域请求。正常来讲，都会请求失败。

目前，能够请求成功，是因为做了处理（见下文）

# 突破跨域的限制

**正常情况下（不做任何处理的情况下）** ，跨域请求，都不能实现。工作中，几乎都是跨域请求。  
那怎么办？  
所以，我们肯定要突破跨域请求的限制才行，否则就无法正常工作了。  
**突破跨域的限制，可以使用JSONP方案 或 CORS方案** 。

## CORS方案（用的多）

- 用的多
- 是标准的解决跨域的方案
- 兼容性不好（IE10+）
- 支持所有的请求方式
- 用起来方便的不要不要的

我们课程中使用的全部接口都是使用CORS方案实现的

使用CORS方案解决跨域

- 只需要后端程序员在做出响应的时候，加一个响应头（`Access-Control-Allow-Origin: *`）即可。
- 前端程序员不需要做任何处理，正常发送Ajax请求即可。

## JSONP方案（用的少）

- 用的少
- 不是标准的解决跨域的方案
- 是一个很古老的方案
- **JSONP请求，和Ajax无关，只支持GET请求，能够向服务器传递的参数比较小（只能拼到url上）** 。
- 了解一下实现原理即可

实现原理：

- 准备好一个函数，名字随意（比如叫做abcd），用于接收响应结果
- 使用script标签的src属性请求接口地址，并通过callback把函数名传给服务器即可

```
<script>
  // 提前准备好 abc 函数
  function abcd(res) {
    console.log(res)
  }
  
  // abcd({ "id": 100, "name": "hahaha", "age": 20 });
  // 你的函数名是abcd，参数是响应给你的数据哦~~~
</script>
<script src="http://www.itcbc.com:3006/api/jsonp?callback=abcd"></script>
```

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1660633686405-df37a1e5-7c2f-4ede-b25f-4626d5235a0f.png#averageHue=%23739d5a&clientId=ue42ed5dc-cbeb-4&from=paste&height=382&id=u928d484b&originHeight=478&originWidth=1462&originalType=binary&ratio=1&rotation=0&showTitle=false&size=120876&status=done&style=none&taskId=u9a65a5d7-33a0-4acf-856b-dcecef3077a&title=&width=1169.6)

---

End