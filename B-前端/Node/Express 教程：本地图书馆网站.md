# 本地图书馆
[Express 教程 2：创建站点框架 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#%E6%96%87%E4%BB%B6%E6%94%B9%E5%8A%A8%E6%97%B6%E9%87%8D%E5%90%AF%E6%9C%8D%E5%8A%A1%E5%99%A8)

## [使用应用生成器](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#%E4%BD%BF%E7%94%A8%E5%BA%94%E7%94%A8%E7%94%9F%E6%88%90%E5%99%A8)创建

```powershell
npx express-generator

```

## 文件改动时重启服务

安装nodemon

```powershell
npm install -g nodemon
npm install --save-dev nodemon
```

找到 package.json 的 scripts 部分。在 "start" 一行的末尾添加逗号，并在新的一行中添加 "devstart"，如下所示：
JSONCopy to Clipboard

```javascript
"scripts": {
  "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
},
```

启动服务器：`npm run devstart`

为网站设置具体路由

```javascript
app.use('/', indexRouter);
app.use('/users', usersRouter);
```

### [视图（模板）](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#%E8%A7%86%E5%9B%BE%EF%BC%88%E6%A8%A1%E6%9D%BF%EF%BC%89)

 [Response.render()](http://expressjs.com/en/4x/api.html#res.render) 方法用某对象的某个变量值一同来渲染一个特定的模板，然后将结果作为响应发送。

数据库
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1688366255596-fe59784d-998a-428d-80df-916d8099022d.png#averageHue=%23f2f2f2&clientId=ue907690e-de83-4&from=paste&id=ucf0cce42&originHeight=620&originWidth=737&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=49042&status=done&style=none&taskId=u15e5ac02-28c9-4578-8bcf-92d46a0828c&title=)

# 连接数据库

## [安装 Mongoose](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose#%E5%AE%89%E8%A3%85_mongoose)

```
npm install mongoose
```

## [连接到 MongoDB](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose#%E8%BF%9E%E6%8E%A5%E5%88%B0_mongodb_2)

打开 **/app.js**（位于项目根目录），并将以下代码复制到声明 Express 应用对象的位置（var app = express(); 之后）。

```javascript
//连接MongoDB
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('连接数据库成功!')
  })
  .catch((error) => {
    console.error('Error connecting to the database', error)
  })
```

## 创建用户模型

/models

```javascript
//导入 mongoose
const mongoose = require('mongoose')
//创建文档的结构对象
//设置集合中文档的属性以及属性值的类型
let AccountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // 设置必填项
  },
  time: {
    type: Date,
    required: true
  },
  //  类型
  type: {
    type: Number,
    default: -1 //默认值
  },
  // 金额
  account: {
    type: Number,
    required: true
  },
  // 备注
  remarks:{
    type:String,
    
  }

})

//创建模型对象  对文档操作的封装对象
let AccountModel = mongoose.model('accounts', AccountSchema)

//暴露模型对象
module.exports = AccountModel
```

## [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/master/populatedb.js)

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1688434578859-e4c55baf-8346-4800-b54f-ea544ad63c9c.png#averageHue=%23dbb377&clientId=u19525cb7-4662-4&from=paste&height=1076&id=uad92cb7e&originHeight=1313&originWidth=1006&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=150650&status=done&style=none&taskId=ub6784daa-9d86-4116-b092-698ab55ac52&title=&width=824.5901445969563)

## [创建路由](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/routes#%E5%88%9B%E5%BB%BA%E8%B7%AF%E7%94%B1%E5%A4%84%E7%90%86%E5%99%A8%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0)

```javascript
const express = require('express');
const router = express.Router();
// GET 请求主页
router.get('/', (req, res) => {
  res.redirect('/catalog');
});
```

**备注：** 这是我们第一次使用 [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) 响应方法。它会使路由重定向到指定的页面，默认发送 HTTP 状态代码“302 Found”。可以根据需要更改返回的状态代码、设置绝对或相对路径。

# 创建模板呈现数据
