# Koa

1. 新建node项目

npm init

2. 安装 koa 框架

npm install  --save koa

3. 编写简单程序

```javascript
//index.js
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'hello world'
})

app.listen(4000)
console.log('4000')
```

4. 运行 访问

node index.js
[http://127.0.0.1:4000/](http://127.0.0.1:4000/)
