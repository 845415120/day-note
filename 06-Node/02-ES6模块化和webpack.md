---
标题: 
图片: 
链接: 
时时: 
评价: 
tags:
---

![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1665648088936-dcdf7837-16d9-4e6e-a6dd-ce6b5ae48cba.jpeg)

# 模块化介绍

## 什么是模块化

模块化，就是把一个大的文件拆分成若干小文件，而且还能把小文件通过特定的语法组合到一起的实现过程。  
比如手机、电脑....等等几乎所有，都是模块化的设计，拿电脑来说，可以把电脑拆分成显示器、键盘、硬盘、内存等一个一个的小模块，当然也能够组装到一起。

## 优点

模块化的优势：

- 更利于维护（比如电脑屏幕坏了，只换屏幕就可以了；比如想升级显卡，只换显卡就行了）；
- 更好的复用性（比如有一块移动硬盘或U盘，大家都能用）

Node中，规定每个JS文件都是一个小模块。一个项目由许许多多的小模块（JS文件）组合而成。  
Node中模块化的优势：

- 更利于维护（比如，项目需要对登录模块升级，则不会影响其他模块）
- 更好的复用性（比如有一个公共的函数，封装起来。其他所有JS文件都能使用这个函数）

## 前端模块化的分类 (了解)

实现模块化的语法不止一种。  
在 ES6 模块化规范诞生之前，JavaScript 社区已经尝试并提出了 **AMD (国外 requirejs)、CMD (国内 seajs 淘宝)、CommonJS (nodejs)**  等模块化规范但是，这些由社区提出的模块化标准，还是存在一定的差异性与局限性、并不是浏览器与服务器通用的模块化标准  
例如:

- AMD 和 CMD 适用于浏览器端的 Javascript 模块化
- CommonJS 适用于服务器端的 Javascript 模块化

太多的模块化规范给开发者增加了学习的难度与开发的成本。因此，大一统的  **ES6 模块化（ES Module）**   规范诞生了！

# ES6模块化

## Node环境使用ES6模块化的要求

node.js 中默认仅支持 CommonJS 模块化规范，若想基于 node.js 体验与学习 ES6 的模块化语法，可以按照  
如下两个步骤进行配置：

1. 确保安装了 `v13.0.0` 或更高版本的 node.js
2. 在 package.json 的根节点中添加 `"type": "module"` 节点

- type，默认是commonjs，表示项目代码 **只能**  使用 CommonJS 语法（只能使用 module.exports 导出，使用require导入）
- type 配置为 "module" 之后，表示项目代码 **只能**  使用 ES6模块化语法

## ES6模块语法

ES6 的模块化，英文 ES Module ，主要包含如下几种用法：

- 默认导出与默认导入
- 按需导出与按需导入
- 导入全部
- 直接导入并执行模块中的代码
- 导入内置或第三方模块

### 默认导出与默认导入

默认导出的语法： `export default 默认导出的成员`  
默认导入的语法： `import 接收名称 from '模块路径'`

- 导出

```
const a = 10
const b = 20
const fn  = () => {
  console.log('这是一个函数')
}
// 默认导出
// export default a  // 导出一个值
export default {
  a,
  b,
  fn
}
```

- 导入

```
// 默认导入时的接收名称可以任意名称，只要是合法的成员名称即可
import result from './xxx.js'
console.log(result)
```

**注意点:**

- 每个模块中，只允许使用唯一的一次 `export default`
- 默认导入时的接收名称可以任意名称，只要是合法的成员名称即可

### 按需导入与按需导出

按需导出的语法： `export const s1 = 10`  
按需导入的语法： `import { 按需导入的名称 } from '模块标识符'`

```
export const a = 10
export const b = 20
export const fn = () => {
  console.log('内容')
}
```

按需导入的语法

```
import { a, b as c, fn } from './xxx.js'
```

注意事项：

- 每个模块中可以有多次按需导出
- 按需导入的成员名称必须和按需导出的名称保持一致
- 按需导入时，可以使用 as 关键字进行重命名
- 按需导入可以和默认导入一起使用

### 将所有内容全部导入

```
import * as obj from './03-按需导出.js'
console.log(obj)
/**
 * {
 *   uname: 'zhangsan',
 *   age: 20,
 *   fn: function ......,
 *   default: 'hello world'  // 叫做default这个，是默认导出的内容
 * }
 */
```

### 直接导入模块(无导出)

如果只想单纯地执行某个模块中的代码，并不需要得到模块中向外共享的成员。  
此时，可以直接导入并执行模块代码，示例代码如下：  
`import '模块的路径'`

```
//xxx.js
for (let i = 0; i < 10; i++) {
  console.log(i)
}


// 导入该模块
import './xxx.js'
```

**实际的项目中，我们使用这种语法，导入css、less、图片等等资源**

### 导入内置模块和第三方模块

```
// 内置模块，支持默认导入
import fs from 'fs'

// 内置模块，支持按需导入
import { readFile, writeFile } from 'fs'

// 第三方模块，肯定支持默认导入（按需导入不一定支持，因为我们并不知道别人的模块是怎么写的）
import dayjs from 'dayjs'
```

# 导入导出总结

![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1669338808778-f2c5797c-4c96-4947-837e-a5f8ada0801e.jpeg)  
总结：

- 在node环境中，仍然使用CommonJS语法；
- **后面的项目开发中，就使用 ES Module**

# 前端工程化

学习目标  
① 转变对前端开发的认知  
② 在脑海中形成画面，知道企业中真正的前端开发是什么样子的

## 前端工程化

前端小白眼中的前端开发 vs 实际的前端开发

- 前端小白眼中的前端开发：

- ① 会写 HTML + CSS + JavaScript 就是合格的前端程序员
- ② 东拼西凑，不成体系

- 实际的前端开发（四个现代化）：

- ① 模块化（js 的模块化、css 的模块化、资源的模块化）
- ② 组件化（复用现有的 UI 结构、样式、行为）
- ③ 规范化（目录结构的划分、编码规范化、接口规范化、文档规范化、 Git 分支管理）
- ④ 自动化（自动化构建、自动部署、自动化测试）

## 什么是前端工程化

- 概念

- 以模块化、组件化、规范化、自动化为基础，进行前端项目开发的方式，叫做前端工程化

- 为什么进行工程化

- 工程化提供了一套标准的开发方案和流程，让前端开发自成体系

注意： 企业中的 Vue 和 React 项目，都是基于工程化的方式进行开发的 前端工程化

## 前端工程化的实现

- 早期的前端工程化解决方案：

- grunt（ [https://www.gruntjs.net/](https://www.gruntjs.net/) ）
- gulp（ [https://www.gulpjs.com.cn/](https://www.gulpjs.com.cn/) ）

- 目前主流的前端工程化解决方案：

- **webpack** （[https://webpack.docschina.org/](https://webpack.docschina.org/)）
- parcel（ [https://zh.parceljs.org/](https://zh.parceljs.org/) ）
- vite

# webpack 的基本概念

## 什么是 webpack

webpack 是前端项目工程化的具体解决方案。  
webpack也是第三方模块，使用之前，需要下载安装。  
参考文档：[https://webpack.docschina.org/](https://webpack.docschina.org/)

## 为什么要学习 webpack

webpack 让前端开发变得更高效  
① 代码压缩混淆  
② 处理浏览器端 JavaScript 的兼容性  
③ 以模块化的方式处理项目中的资源

注意：目前绝大部分的 Vue/React 等前端项目，都是基于 webpack 进行工程化开发的。

# 安装全部所需的包

目的：一次性把今天所需的包全部安装好。

```
# 切换镜像源
nrm use taobao
```

```
# 初始化
npm init
```

```
# 安装项目依赖包
npm install echarts
```

```
# 安装项目开发依赖包
npm install webpack@5.73.0 webpack-cli@4.10.0 webpack-dev-server@4.9.2 style-loader@3.3.1 less-loader@11.0.0 less@4.1.2 html-webpack-plugin@5.5.0 html-loader@3.1.0 css-loader@6.7.1 cross-env@7.0.3 clean-webpack-plugin@4.0.0 babel-loader@8.2.5 @babel/core@7.18.2 @babel/plugin-proposal-decorators@7.18.2 @babel/preset-env@7.18.2 -D
```

# 演示webpack 的作用

## 创建折线图项目

目的：以模块化的方式实现echarts图表的项目，为 webpack 的学习做准备。  
具体步骤：  
    创建项目文件夹 webpack-demo，初始化，安装上面的这些包。① 在 webpack-demo 中，新建 src 源代码目录  
② 在 webpack-demo 中，新建 public 静态资源目录  
③ src 目录中创建 index.js  
④ public 目录中创建 index.html，引入index.js  
⑤ index.html中创建一个具有宽高的div，id="main"（准备放图表）  
⑥ index.js 中，通过 ES6 模块化的方式导入echarts，实现一个简单的图表（参考echarts官方网站）

```

import * as echarts from 'echarts'

;(function () {
  var chartDom = document.getElementById('main')
  var myChart = echarts.init(chartDom)
  var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
  option && myChart.setOption(option)
})()
```

## 分析项目中遇到的问题

打开页面，发现报错了：  
![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1654396348052-9540f45c-6918-487b-9373-87ab2708fe96.png#averageHue=%23ffefba&clientId=ue9594aea-b40b-4&from=paste&height=144&id=u2d246a65&originHeight=180&originWidth=888&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21503&status=done&style=none&taskId=u7dd15f63-3307-448a-a86e-203fa791374&title=&width=710.4)

- 报错的原因：

- 浏览器对 ES6+ 高级语法支持的不好，有兼容性问题

- 如何解决：

- 在开发的时候，让程序员尽可能 “写得爽”
- 在运行的时候，让浏览器不出现“兼容性问题”

- 具体方案：

- **在项目中安装和配置 webpack，处理JS兼容问题**

## 安装和配置webpack

目标：

- 通过 webpack 处理 JS 代码的兼容性问题
- 了解 webpack 的基本配置步骤。

安装 webpack 相关的两个包： `webpack` 和 `webpack-cli` （前面已经统一安装过了）① 在 package.json 的 scripts 节点下，新增 build脚本如下：

```
"scripts": {
  "build": "webpack"
},
```

③ 在终端中运行 `npm run build` 或 `yarn build` 或 `pnpm run build` 命令，启动 webpack 进行项目的打包构建。

## 打包结果

执行  `npm run build` 命令后，会在项目根目录生成 `dist`文件夹，并在 `dist` 文件夹中生成 `main.js`  
main.js 就是 echarts.js 和 index.js 的结合体。  
index.html 中引入 main.js ，就可以看到最终的效果了。  
![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1654395143742-4b0cf60b-5934-472c-826a-fa002eb02fe8.png#averageHue=%23f7f7f6&clientId=ue9594aea-b40b-4&from=paste&height=387&id=u2b3b162e&originHeight=484&originWidth=1242&originalType=binary&ratio=1&rotation=0&showTitle=false&size=36716&status=done&style=none&taskId=ud1133d13-439e-4836-9df1-a05d7276ff6&title=&width=993.6)

# Webpack配置

## webpack.config.js配置文件

webpack.config.js是什么

- webpack.config.js 是 webpack 的配置文件。

作用

- 告诉 webpack 怎么对项目进行打包。

被读取的时机

- npm run build 的时候（打包的时候），会先读取配置文件，再对项目进行打包处理。

## 配置打包模式 mode

目标：清楚每个 mode 值的作用，知道每个值的具体应用场景。  
mode 节点的可选值有两个，分别是：  
① development

- 开发环境
- 不会对打包生成的文件进行代码压缩和性能优化
- 打包速度快，适合在开发阶段使用

② production

- 生产环境
- 会对打包生成的文件进行代码压缩和性能优化
- 打包速度很慢，仅适合在项目发布阶段使用

webpack-demo文件夹中，创建 `webpack.config.js`，代码如下：

```
// 需要导出一个配置对象
module.exports = {
  // 这里写所有的配置项
  // 配置打包模式
  mode: 'development' // development 开发模式 | production 生产模式（默认）
}
```

## webpack 中的默认入口和出口

在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：  
① 默认的打包入口文件为 src -> index.js  
② 默认的输出文件路径为 dist -> main.js  
注意：可以在 webpack.config.js 中修改打包的默认约定

## 自定义打包的入口与出口

在 webpack.config.js 配置文件中，通过 entry 节点指定打包的入口。通过 output 节点指定打包的出口。  
示例代码如下：

```
const { join } = require('path');

module.exports = {
  // 打包模式
  mode: 'development', //  production：生成  development：开发
  // 入口文件
  entry: join(__dirname, 'src', 'index.js'),
  // 出口文件
  output: {
    path: join(__dirname, 'dist'), // 要使用绝对路径，否则报错
    filename: 'bundle.js',
  }
}
```

重新运行 `npm run build` ，即可得到新的打包结果 `bundle.js` .index.html 中引入新的打包结果 bundle.js。

# webpack 中的插件

## 概述

webpack 插件的作用  
**通过安装和配置第三方的插件，可以拓展 webpack 的能力，从而让 webpack 用起来更方便** 。最常用的 webpack 插件有如下3个：  
① clean-webpack-plugin

- 每次打包时，自动清理 dist 目录

② webpack-dev-server

- 类似于 node.js 阶段用到的 nodemon 工具
- 每当修改了源代码，webpack 会自动进行项目的打包和构建

③ html-webpack-plugin

- webpack 中的 HTML 插件
- 可以通过此插件自定制 index.html 页面的内容

## clean-webpack-plugin

作用：每次打包构建的时候，自动清理 dist 目录下的旧文件，保证 dist 目录的代码是最新的。  
安装依赖包：clean-webpack-plugin[_@_4.0.0](/4.0.0) （前面已经统一安装过）  
在 webpack.config.js 中增加配置：

```
// 1. 配置自动清理插件（在打包的时候，插件就会自动清理 dist 中没用的文件）
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // 其他项省略......
  // 插件配置
  plugins: [ 
    new CleanWebpackPlugin()
  ]
}
```

重新运行 `npm run build` ，即可将 `dist` 文件夹中没用的文件清理掉.

## html-webpack-plugin

html-webpack-plugin 是 webpack 中的 HTML 插件。  
作用：自动把生成好的 bundle.js 注入到 HTML 页面中，并且会把html文件打包进dist文件夹。  
安装包 [html-webpack-plugin_@_5.3.2](mailto:html-webpack-plugin_@_5.3.2)  （前面已经统一安装过）在webpack.config.js中配置 html-webpack-plugin

```
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // 其他项省略......
  // 插件配置
  plugins: [ 
    new CleanWebpackPlugin(), // 前面的自动清理插件
    new HtmlPlugin({
      template: join(__dirname, 'public', 'index.html'), // public中，你的html叫什么
      filename: 'index.html' // 打包后的html叫什么（这个文件会生成到dist文件夹）
    })
  ]
}
```

其他说明：  
① 会将初始的模板(public/index.html) 打包进 dist文件夹  
② 生成的 dist/index.html 页面，自动注入了打包的 bundle.js 文件（所以去掉 public/index.html 中所有的js引入代码，重新打包）  
③ 浏览器应该打开 dist/index.html 看效果。

## webpack-dev-server

### 基本使用

作用：可以让 webpack 监听项目源代码的变化，从而进行自动打包构建。  
安装包 [webpack-dev-server@4.3.1](mailto:webpack-dev-server@4.3.1)（前面已经统一安装过）  
配置 webpack-dev-server  
① 在 package.json -> scripts 中新增一个命令，命令如下：

```
"scripts": {
  "serve": "webpack serve" // 注意这里是 serve ，不是 server
},
```

② 在 webpack.config.js 配置文件中，增加 devServer 节点对 webpack-dev-server 插件进行更多的配置

```
module.exports = {
  mode: 'development',
  //.......
  // .....
  devServer: {
    // port: 9000, // 实时打包所用的端口号
    open: true // 初次打包完成后，自动打开浏览器
  }
}
```

③ 运行 npm run serve 命令，会创建一个本地服务。  
④ 在浏览器中访问 [http://localhost:8080](http://localhost:8080) 地址，查看效果

注意：凡是修改了 webpack.config.js 配置文件，或修改了 package.json 配置文件，必须重启实时打包的服务器，否则最新的配置文件无法生效！

### 打包生成的文件哪儿去了？

① 不配置 webpack-dev-server 的情况下，webpack 打包生成的文件，会存放到实际的物理磁盘上

- 严格遵守开发者在 webpack.config.js 中指定配置
- 根据 output 节点指定路径进行存放

② 配置了 webpack-dev-server（自动打包插件） 之后，**打包生成的文件存放到了内存中**

- 不再根据 output 节点指定的路径，存放到实际的物理磁盘上
- 提高了实时打包输出的性能，因为内存比物理磁盘速度快很多

# webpack 中的 loader

## loader 概述

loader加载器有什么用？

- 在实际开发过程中，webpack 默认只能打包处理以 .js 后缀名结尾的模块。
- 其他非 .js 后缀名结尾的模块， webpack 默认处理不了
- 需要调用 loader 加载器才可以正常打包**非 js**  文件，否则会报错！

所以，loader 加载器的作用是协助 webpack 打包处理特定的文件模块。比如：

- css-loader 可以打包处理 .css 相关的文件
- less-loader 可以打包处理 .less 相关的文件
- babel-loader 可以打包处理 webpack 无法处理的高级 JS 语法

## loader 的调用过程

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1646918651556-f349a455-1e0e-43cd-9378-ee56a4a8c0b8.png#averageHue=%23fcfaf5&id=taPhS&originHeight=421&originWidth=1034&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 打包处理 css 文件

在src中，创建了 abc.css ，里面随便写点。

```
#main {
  border: solid 5px #c67b24;
}
```

在 index.js 中，通过 import 导入css文件。

```
import './abc.css'
```

直接这样使用，会报错。  
![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1655255525037-90505ad0-9237-429c-b047-9c4648303eb3.png#averageHue=%23302f2f&clientId=u76521b2c-a3b8-4&from=paste&height=237&id=u976932c8&originHeight=296&originWidth=869&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52907&status=done&style=none&taskId=u4cb8702c-36ab-48f0-ba2b-ca4a3fe3272&title=&width=695.2)  
下面配置loader，解决上面的问题：  
① 安装包 [style-loader_@_3.3.0](mailto:style-loader_@_3.3.0)  和 [css-loader_@_6.4.0](mailto:css-loader_@_6.4.0)  （前面已经统一安装过）② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```
module.exports = {
  mode: 'development',
  // 其他项省略......
  module: {
    rules: [
      // 处理css文件
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  }
}
```

其中，test 表示匹配的文件类型， use 表示对应要调用的 loader  
注意：

- use 数组中指定的 loader 顺序是固定的
- 多个 loader 的调用顺序是：从后往前调用

## 打包处理 less 文件

① 安装 [less-loader_@_10.1.0](mailto:less-loader_@_10.1.0)  和 [less@4.1.2](mailto:less@4.1.2)（前面已经安装过）  
② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```
module.exports = {
  mode: 'development',
  // 其他项省略......
  module: {
    rules: [
      // 处理css文件
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // 处理less文件
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
    ]
  }
}
```

## 打包处理img标签引入的图片

public/index.html ，通过 `<img src="1.png" /> 如果有srcset属性，去掉`  
配置

```
module.exports = {
  mode: 'development',
  // 其他项省略......
  module: {
    rules: [
      // 处理css文件
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // 处理less文件
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // 处理html中img标签引入的图片
      { test: /\.html$/, use: 'html-loader' }
    ]
  }
}
```

## 打包处理asset资源

目前为止，我们还不能在 js 中导入图片。如果项目中有这种需要，还需要下面的配置

使用 asset 来代替 webpack4中的 url-loader 、file-loader、raw-loader。

```
module.export = {
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash:8][ext]', // 配置文件的输出路径
  },
  module: {
    rules: [
      // 处理css文件
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // 处理less文件
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // 处理html中的img标签引入的图片
      { test: /\.html$/, use: 'html-loader' },
      // 处理图片资源
      {
        test: /\.(jpg|png|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 12000, // 图片超过这个大小，使用原图片，否则使用base64字符串
          }
        }
      }
    ]
  }
}
```

至此，所有图片的使用方式，都可以使用了：

- html中，通过 `<img src="" />` 引入的图片可以使用
- css中，背景图片可以使用
- js中，import 导入的图片也能使用了

## 打包处理 js 文件中的高级语法

webpack 只能打包处理一部分高级的 JavaScript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借 助于 babel-loader 进行打包处理。  
例如 webpack 无法处理下面的 JavaScript 代码：

```
// js装饰器
function info(target) {
  target.abc = '哈哈哈哈哈哈哈，这是新语法';
}
// 下面的语法，表示给Person加了一个abc属性
@info
class Person { }
console.log(Person.abc);
```

安装 babel-loader 相关的包

- babel-loader[_@_8.2.2](/8.2.2) （前面已经统一安装过）
- @babel/core[_@_7.15.8](/7.15.8) （前面已经统一安装过）
- @babel/plugin-proposal-decorators[_@_7.15.8](/7.15.8) （前面已经统一安装过）

在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```
module.exports = {
  mode: 'development',
  // 其他项省略......
  module: {
    rules: [
      // 处理css文件
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // 处理less文件
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // ...... 其他配置略
      // .js 文件使用 babel-loader去处理。但是不要处理 node_moduels文件夹中的第三方模块
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
```

配置 babel-loader  
在项目根目录下，创建名为 `babel.config.js` 的配置文件，定义 Babel 的配置项如下：

```
module.exports = {
  // 声明 babel 可用的插件
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}
```

# 打包发布

## 为什么要打包发布

项目开发完成之后，需要使用 webpack 对项目进行打包发布，主要原因有以下两点：  
① 开发环境下，打包生成的文件存放于内存中，无法获取到最终打包生成的文件  
② 开发环境下，打包生成的文件不会进行代码压缩和性能优化  
为了让项目能够在生产环境中高性能的运行，因此需要对项目进行打包发布。

## 配置 webpack 的打包发布

在 package.json 文件的 scripts 节点下，新增 build 命令如下：

```
"scripts": {
  "serve": "webpack serve",
  "build": "webpack --mode production"
},
```

- --model 是一个参数项，用来指定 webpack 的运行模式。
- production 代表生产环境，会对打包生成的文件 进行代码压缩和性能优化。

注意：通过 --model 指定的参数项，会覆盖 webpack.config.js 中的 model 选项。

把 JavaScript 文件统一生成到 js 目录中

- 在 webpack.config.js 配置文件的 output 节点中，进行如下的配置：

```
output: {
  path: join(__dirname, 'dist'),
  filename: 'js/bundle.js', // 这里加入 js 文件夹。
  assetModuleFilename: 'images/[hash:8][ext]' // 配置文件（图片）的输出路径
},
```

**最终，npm run build 打包结果。最终的产出就是 dist 文件夹** 。

## base64格式说明

- base64格式，就是一个字符串。
- 和原图对比：

- base64格式的字符串 比 原图片 大 30%左右。
- 使用base64格式的字符串，可以减少网络请求，减轻服务器的压力。

结论：实际开发中，小图可以使用base64格式；大图还是使用原图片。

# Source Map

## 目前的问题

- 开发环境中，错误行号对应不上。比如本来是在第23行报错了，但是浏览器提示在第20行报错。
- 打包后，又不希望我们的代码被其他人看到源码。

上述问题，可以通过sourceMap解决。

## 什么是 Source Map

Source Map 就是一个信息文件，里面储存着位置信息。  
也就是说，Source Map 文件中存储着压缩混淆后的代码，所对应的转换前的位置。  
有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码，能够极大的方便后期的调试。

## 配置

### 开发环境

推荐在 webpack.config.js 中添加如下的配置，即可保证运行时报错的行数与源代码的行数 保持一致：

- 设置成如下值的好处是，如果有错误，程序员可以准确的知道错误行号，并且可以在浏览器中看到源码，方便程序员排错
- npm run serve，如果有错误，可以准则的找到错误，去排错

```
module.exports = {
  // source-map 仅限在开发模式中使用
  //（开发中，程序员需要排错，需要准确的定位错误行号）
  devtool: 'source-map',
}
```

### 生产环境

- 设置成如下值的好处是，如果有错误，可以避免源码的暴露
- npm run build ，打包后，有错误，也不会暴露源码

```
module.exports = {
  // nosources-source-map 适合生产环境。
  //（生产环境，我们不希望别人看到我们的源码，这个配置项只显示行号，但不会显示源码）
  devtool: 'nosources-source-map',
}
```

# 总结

实际开发中需要自己配置 webpack 吗？  
答案：不需要！  
实际开发中会使命令行工具（俗称 CLI）一键生成带有 webpack 的项目  
开箱即用，所有 webpack 配置项都是现成的！  
我们只需要知道 webpack 中的基本概念即可！

- webpack是干什么的

- webpack作用就是打包。
- 把我们开发的源代码（src），融合到一起，产出1个或数量极少的几个文件，这就是打包

- loader有什么用

- loader 是帮助webpack处理那些非JS文件的，比如css、less。。。

- 开发阶段，使用什么命令？

- serve 命令 【npm run serve】 【yarn serve】【pnpm run serve】
- 用这个命令，会在自己的电脑上开一个本地服务，会自动打包，会将打包的结果临时放到内存中
- 浏览器访问项目，**必须** 使用 localhost:8080 来访问

- 最终打包，用什么命令？

- build 命令【npm run build】 【yarn build】【pnpm run build】