![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1665396144890-2345e20a-5ec8-4252-b279-5d8058d1548e.jpeg)

# 包和npm（重中之重）

## 介绍

### 什么是包

包，可以理解为是插件，或模块。不过这种模块都是个人或公司开发的，并非node官方内置的。

我们称这种模块为第三方模块。

个人或公司开发完模块，然后发布到[npm网站](https://www.npmjs.com/)，我们可以下载并使用这些第三方模块。

目前，npm网站收录了超过 200 万个第三方模块。

不用担心学不完的问题，常用的包不超过100个。

### 包的分类

由于各种各样的插件五花八门，什么都有。

也就是说，可以把包按照用途分为几类：

1. 项目包

1. 项目核心依赖包
2. 项目开发依赖包

2. 全局包

其中，项目包，也叫做本地模块，是开发项目所需的包。只适用于当前项目。要下载安装到当前项目文件夹。

全局包，一般都是命令，通过这些全局命令，帮助开发者简化开发。

### 什么是npm

npm（node package manage）node 包 管理器。

**通俗的讲，npm是一个下载、卸载、发布、... 包的工具**。

npm这个工具，在安装 node 的时候，就已经安装到你的计算机中了。

命令行中执行： `npm -v` ，如果看到版本号，说明安装成功了。

## 项目包

### npm初始化

安装项目包，**必须**要进行初始化操作。

```
npm init -y
# 或
npm init
# 然后一路回车
```

初始化之后，会在项目目录中生成 package.json 的文件。

注意事项：

- package name 默认使用当前文件夹 当做 包的名字
- package name 不能有中文
- package name 不能有特殊符号
- package name 不能和需要安装的第三方模块同名

**总结：**

- **代码文件夹没有中文、没有特殊符号，比如code，那么** `**npm init -y**`
- **代码文件夹有中文或特殊符号，那么** `**npm init**` **，回车后，修改 package name，然后再一路回车**

### 安装卸载命令

初始化之后，就可以在当前文件夹中安装第三方模块了

```
建议在安装第三方模块之前，先执行如下命令。
下面的命令只需要执行一次即可（不管以后重启vscode还是重启电脑，都不需要执行第二次）
此命令会将下载地址修改为国内下载，加快下载速度

npm config set registry https://registry.npmmirror.com
```

下载安装命令

```
# 正常的下载安装 【默认安装最新版本】
npm install 模块名

# 简写install为i 【默认安装最新版本】
npm i 模块名

# 一次性安装多个模块 【默认安装最新版本】
npm i 模块名 模块名 模块名

# 指定版本安装
npm i 模块名@版本号

# 安装项目真正所需的包
npm i 包名 --save   【老版本的node才需要加 --save，加它的目的是把记录添加到 package.json】
npm i 包名 -S       【--save 简写为 -S】

# 安装开发阶段用的包【包只在开发阶段有用；项目做完，这个包就没用了】
npm i 包名 --save-dev  【--save-dev 表示这个包只在开发阶段使用】
npm i 包名 -D          【--save-dev 简写为 -D】

# 一次性安装全部的依赖包
npm i
```

卸载模块

```
npm uninstall 模块名
npm un 模块名
npm un 模块名 模块名 模块名
```

上课可以用这些包来练习： jquery、dayjs、echarts、axios、form-value、lodash

### 额外说明

- 下载安装的模块，存放在当前文件夹的 `node_modules` 文件夹中
- 同时还会生成一个锁定版本的文件 `package-lock.json`（不重要、知道有它即可）
- 并且，我们**下载的包名、版本会记录到** `**package.json**`**中**
- **下载的模块，在哪里可以使用**

- 在当前文件夹
- 在当前文件夹的子文件夹
- 在当前文件夹的子文件夹的子文件夹
- ......
- 翻过来讲，当查找一个模块的时候，会在当前文件夹的 node_modules 文件夹查找，如果找不到，则去上层文件夹的node_modules文件夹中查找，.....依次类推。

- 怎么用这些包

- 查阅包的使用文档（官网、npm网站、百度搜索）
- 听课，常用的包，课上基本都会用

总结：

- **下载的包有哪些，可以查看 package.json**
- **下载的包，****只能****在当前代码文件夹，及其后代文件夹中使用**

### 演示 dayjs 的使用

- [dayjs](https://dayjs.fenxianglu.cn/) 和 [moment](http://momentjs.cn/docs/) 都是时间日期处理模块，功能相似
- dayjs 体积更小，官方网站：[https://dayjs.fenxianglu.cn/](https://dayjs.fenxianglu.cn/)

```
// dayjs 是一个专门处理时间日期的模块
// 使用模块之前，必须加载
const dayjs = require('dayjs');
// 将当前时间，转成 “年-月-日 时:分:秒” 的格式
dayjs().format("YYYY-MM-DD HH:mm:ss")
// 将一个其他时间格式，转成 “年-月-日 时:分:秒” 的格式
dayjs(1318781876406).format('YYYY-MM-DD HH:mm:ss');   // 2011-10-17 00:17:56
```

**总结**：

1. npm init （如果已经初始化过，则不需要重复初始化）
2. npm i dayjs （安装模块）
3. 代码中导入模块 `const dayjs = require('dayjs')`
4. 使用 `console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))`

## 全局包

### 和项目包的差异

- 全局安装的模块，不能通过 `require()` 加载使用。
- 全局安装的模块，一般都是命令或者工具（安装了全局模块，相当于给你的系统新增了一个命令）。

### 安装卸载命令

- 安装命令（多一个 `-g`）

```
npm i 模块名 -g
# 或
npm i -g 模块名
### mac 系统如果安装不上，使用下面的命令提高权限
sudo npm i -g 模块名  # 执行命令后，会让你输入开机密码，输入密码的时候是不显示的
```

- 卸载命令（也是多一个 `-g`）

```
npm un 模块名 -g
```

- 全局安装的模块，在系统盘（C盘）

- 通过命令 `npm root -g` 可以查看全局安装路径

### 全局安装 nrm

nrm 是作用是切换镜像源（切换下载地址）。

- nrm ls 查看可用的镜像源
- nrm test 测试每个镜像网站的速度
- nrm use taobao 切换到淘宝
- nrm use tencent 切换到腾讯
- nrm use npm 切换回npm主站

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1646918638082-131cda97-3da5-497c-b535-d5ca8e9077b1.png)

全局安装

```
npm i -g nrm   （mac系统前面加 sudo）
```

使用nrm

```
nrm ls    --- 查看全部可用的镜像源
nrm test  --- 查看可用的镜像源并测试速度
nrm use taobao  ---- 切换到淘宝镜像
nrm use npm  ---- 切换到npm主站
```

### 第一次使用全局模块报错及解决

- 运行 `nrm ls` 或者 `nrm use taobao` 等命令，如果报错如下：“无法加载文件 C:......................，**因为在此系统上禁止运行脚本**。................”

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1665391773118-7b7d511c-58cd-4d82-bc19-b9b39a3c5dad.png)

- 解决办法是：

- `管理员`方式，打开命令行（powershell）窗口
- 执行 `set-ExecutionPolicy RemoteSigned;`
- 在出现的选项中，输入 `A`，回车。即可。

- 如果报错如下  
    “无法将 nrm 识别为 cmdlet、函数、脚本文件或可运行程序的名称。xxxxxxxxxxx”
- 解决办法，重启vscode、重启终端，win7可能要重启电脑。

# 自定义模块

## 实现

我们创建的每个JS文件都是一个自定义模块，并且具有模块作用域，也就是在一个模块中创建的变量、常量、函数等等一切，都只能在当前模块中使用。

- 共享（导出/暴露）内容给其他模块用，需要使用 `module.exports` 导出内容。
- 其他模块，如果需要使用上述模块导出的内容，可以使用 `require()` **加载** 导入

![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1661266377892-2741db00-6662-4599-984d-8610d05e0c3c.jpeg)

_**示例：**_

_**functions.js**_ -- 导出内容

```
// 这是我的函数库
function aa() {
  console.log(111)
}

function bb() {
  console.log(222)
}

// aa、bb，默认只能在functions.js中使用
// aa、bb，属于当前这个模块
// 如果想把aa、bb给其他模块使用，则需要先”分享”
// 【分享】，也叫做【导出】、或者【暴露】
// 语法：module.exports = 导出的内容
// module.exports = {} // 每个模块，默认导出空对象
module.exports = { aa, bb }
```

_**index.js**_  -- 导入内容

```
// 怎么在这里调用 functions.js 中的函数？？？

// 想使用其他js文件中的函数，需要导入
// 导入的语法，也是一行代码
// 导入的语法：1. 必须带路径，即使是 ./ 也不能省略； 2. 可以省略后缀
let obj = require('./functions')
// console.log(obj)
obj.aa()
obj.bb()
```

一个模块导出什么，另一个模块加载后，就会得到什么。

就比如，我给你三个苹果，你只能得到三个苹果，不可能得到其他的。

## exports和module.exports的区别

- 在一个模块中，**module.exports 才真正的表示导出的内容**，默认指向一个空对象
- exports 指向 module.exports

比如下面的代码，**表示导出 name 和 aa**：

```
exports.name = 'lisi'
exports.aa = aa

// exports 指向 module.exports 
// 所以给 exports 加属性，相当于给 module.exports 添加属性
```

![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1665394669199-2ee7b9b2-fc23-45f8-a437-3c24ce24e4a7.jpeg)

比如下面的代码，**就不是导出内容了**：

```
exports = {
  name: 'wangwu',
  aa: aa
}
```

![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1661394670616-fa9cbcc2-169e-4cdf-9b25-12fe2b0afd3b.jpeg)

总结：

- 在一个模块中，**module.exports 才真正的表示导出的内容**，默认指向一个空对象
- exports 指向 module.exports 【let exports = module.exports】
- 如果**给 exports 一个 一个的添加属性**，则属性添加给了导出的对象中，**没有问题**。
- 如果 给 exports 直接赋一个新的值，则 exports 和 modules.exports 就是两个不同的值了。
- 实际开发中，直接使用 module.exports 就可以了。

# require的加载机制

1. 判断缓存中有没有，如果有，使用缓存中的内容
2. 缓存中没有，那么表示第一次加载，加载完会缓存加载结果
3. 判断模块名有没有带路径（./）
4. 模块名中**有路径**，加载**自定义模块**（自己写的文件）`const xx = require('./xx')`

1. 优先加载同名文件，加载一个叫做 xx 的文件
2. 再次加载js文件，加载 xx.js 文件
3. 再次加载json文件，加载 xx.json 文件
4. 如果上述文件都没有，则报错 “Cannot find module './xx'”

5. 模块名**没有路径**，**优先加载核心模块**，**如果没有核心模块，则加载第三方模块**
6. 加载第三方模块的查找方式

1. 优先在当前文件夹的 node_modules 里面查找第三方模块
2. 在当前文件夹的上级目录的node_modules里面查找第三方模块
3. 继续向上层文件夹查找第三方模块
4. .........

# package.json文件

## 创建 `package.json`

在包管理器（npm、yarn、pnpm）初始化之后，会生成一个 package.json 文件

```
npm init 
npm init -y
```

## dependencies 依赖

- dependencies指定了当前项目所依赖（需要）的包，**可以使用** `**npm install**` **可以安装所有的依赖**
- 使用 `npm install 模块` 安装模块时，会将该模块记录到 dependencies 中，表示这是项目必须的模块。
- 使用 `npm install 模块 -D` 安装模块时，会将该模块记录到 devDependencies 中，它表示项目不需要这个模块，但是开发阶段需要这个模块（进行测试、打包等等）

## scripts

- `scripts`指定了运行脚本命令的 npm **命令行**缩写

- 下面的代码中，a 表示 git init 命令。执行命令时，使用 `npm run a` ，相当于执行了 git init
- 下面的代码中，start 表示 node app.js 命令，执行命令时，使用 `npm start` 即可，相当于执行了 node app.js

```
"scripts": {
  "a": "git init",
  "start": "node app.js",
  "t": "dir c:\\"
 }
```

- 运行 `scripts`

```
npm run a
npm run start
# 只有 start 可以简化调用
npm start
```

## name

- 当前项目的名称
- 如果是本地开发一个项目，那么这个名字无所谓
- 如果要向 npm 网站发布包，那么这个名字就是 你要发布的包 的名字
- 要求没有中文和特殊符号，不能和其他第三方包重名即可

## main

- 包的入口文件。
- 如果我们发布包，别人就会下载下来，然后通过 require('xxx') 加载使用
- 使用者，通过 require('xxx') 语法加载的，实际上就是 main 指定的那个 js 文件
- 如果不指定 main 字段，则默认值是 index.js

# 开发属于自己的包

## 规范的包结构

在清楚了包的概念、以及如何下载和使用包之后，接下来，我们深入了解一下包的内部结构。

```
📂 - sy150
		📃 - package.json  （package.json包的配置文件，不要自己创建，应该初始化得来）
		📃 - index.js      （入口文件）
		📃 - README.md     （说明文档）
```

一个规范的包结构，需要符合以下 3 点要求:

1. 包必须以单独的目录而存在
2. 包的顶级目录下要必须包含 package.json 这个包管理配置文件

[https://yarnpkg.com/zh-Hans/docs/package-json](https://yarnpkg.com/zh-Hans/docs/package-json)

## 开发属于自己的包

### 初始化 package.json

注意，JSON文件不能有注释，下面加注释，是为了理解。

```
{
  "name": "sy151",  // 包（模块）的名字，不能和别人已发布的包重名
  "version": "1.0.0",
  "description": "This is a package by Laotang",
  "main": "index.js", // 别人加载我们的模块用，require加载的就是这里指定的文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [ // 在npm网站中，通过关键字可以搜索到我们的模块，按情况设置
    "laotang",
    "itcast",
    "test"
  ],
  "author": "Laotang", // 作者
  "license": "ISC" // 开源协议
}
```

关于更多 license 许可协议相关的内容，可参考 [https://www.jianshu.com/p/23e61804d81e](https://www.jianshu.com/p/23e61804d81e)

### index.js 中定义功能方法

```
// 别人加载的就是我的 index.js 
// 所以，必须在 index.js 中导出内容
function aa() {
  console.log('aaa')
}
function bb() {
  console.log('bbb')
}
module.exports = { aa, bb }
```

### Readme.md包的使用文档

````
### 安装

```
npm i sy151
```

### 使用

```js
const sy151 = require('sy151')

sy151.aa() // aaaaa
sy151.bb() // bbbbb
```
````

编写功能的时候，如果需要使用其他人的包，也是可以的。比如我们的功能中需要用到 dayjs ，则安装dayjs使用即可。

## 注册npm账号

- 访问 [https://www.npmjs.com/](https://www.npmjs.com/) 网站
- 点击 sign up 按钮，进入注册用户界面
- 填写账号相关的信息
- 点击 Create an Account 按钮，注册账号

## 发布包

- `终端中`，切换镜像源为npm（**不能发布到淘宝，所以必须切换镜像源为npm主站**）

- nrm use npm

- `终端中`，登录 npm 账号

- 执行 `npm login` 命令
- 输入账号
- 输入密码（**输入的密码是看不见的，正常**）
- 输入邮箱
- 输入验证码（去邮箱查看）

- 发布

- 注意，**执行命令的文件夹，必须是包的根目录**。
- 运行 `npm publish` 命令，即可将包发布到 npm 上

![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1652015472004-86ba7070-d5b4-478a-80ed-79cd738619ca.jpeg)

- 常见错误

- 自己的模块名不能和已存在的模块名同名。（可以先去npm网站搜索是否同名）
- 24小时内不能重复发布
- 新注册的账号，必须先邮箱（邮件可能是垃圾邮件）验证，然后才能发布

- 删除已发布的包

- 运行 npm unpublish 包名 --force 命令，即可从 npm 删除已发布的包。

- 其他注意事项:

- npm unpublish 命令只能删除 72 小时以内发布的包
- npm unpublish 删除的包，在 24 小时内不允许重复发布
- 发布包的时候要慎重，尽量不要往 npm 上发布没有意义的包!

更多关于npm的命令：[https://www.npmjs.cn/](https://www.npmjs.cn/)

## 更新包

如果包的代码更新了，如何重新发布呢？

- 修改版本号，比如原来的版本号是 1.0.0 ,则需要修改的比原来的版本号大一点，比如改为 1.0.1 或者 1.3.5等等
- 重新执行 `npm publish` 即可将代码更新到 npm网站。

# 其他的包管理器

除了npm以外，其他的包管理器还有 yarn 和 pnpm。

三个包管理器的差别可以参考：[https://pnpm.io/zh/feature-comparison](https://pnpm.io/zh/feature-comparison)

## 安装

- npm

- 无需单独安装，安装node的时候，就一起安装好了

- yarn

- 通过 `npm i yarn -g` 把yarn当做全局包安装即可（所有系统都可以这样安装）。
- Windows系统，可以选择安装程序
- Mac系统 `sudo npm i -g yarn`
- 安装之后，`yarn -v`，如果看到版本号，说明安装成功

- pnpm

- 通过 `npm i -g pnpm`把pnpm当做全局包安装（所有系统都可以这样安装）
- 也可以使用安装程序安装
- 安装之后，`pnpm -v`，如果看到版本号，说明安装成功

mac本通过命令全局安装

```
sudo npm i yarn -g
sudo npm i pnpm -g
```

也可以修改 yarn 的镜像源 和 pnpm的镜像源：

```
yarn config set registry https://registry.npmmirror.com
pnpm config set registry https://registry.npmmirror.com
```

## 命令对比

|   |   |   |   |
|---|---|---|---|
||**npm**|**yarn**|**pnpm**|
|**初始化**|npm init / npm init -y|yarn init / yarn init -y|pnpm init|
|**安装项目包**|npm i 包名|yarn add 包名|pnpm add 包名|
|npm i 包名@版本号|yarn add 包名@版本号|pnpm add 包名@版本号|
|npm i 包名 -D|yarn add 包名 -D|pnpm add 包名 -D|
|npm i|yarn install 或 yarn|pnpm install 或 pnpm i|
|**移除项目包**|npm un 包名|yarn remove 包名|pnpm remove 包名|
|**全局包**|npm i 包名 -g  <br>npm i 包名 -g|yarn global add 包名  <br>yarn global remove 包名|pnpm global add 包名  <br>pnpm global remove 包名|

## 如何区别项目使用的是那个管理器

查看项目文件夹

- pnpm-lock.yaml 有这个文件，说明使用的是 pnpm
- package-lock.json 有这个文件，说明使用的是 npm
- yarn.lock 有这个文件，说明使用的是 yarn

**一个项目，使用中途不要换包管理器**。

---

End