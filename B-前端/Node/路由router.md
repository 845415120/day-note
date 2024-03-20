# express.Router使用

定义: express中的router是一个完整的中间件和路由系统，可以看作是小型的app对象
作用: 以前express路由都写到了一个文件下面，复用性差，维护性差，难以修改对路由进行模块化，更好的管理路由
创建独立的is文件作为一个模块

```javascript
//1导入express
//2 创建路由器对象
const router = express.Router()
//3在router对象上添加路由
 router.<method>(请求url，callback)
//4 暴露
 module.exports = router
//主模块文件 5 引入子路由文件
 const homeRouter = require('./router/homeRouter)
//6 设置和使用中间件 
app.use(homeRouter)
```

以下示例将路由器创建为模块，在其中装入中间件，定义一些路由，然后安装在主应用程序的路径中。
在应用程序目录中创建名为 birds.js 的路由器文件，其中包含以下内容：

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
