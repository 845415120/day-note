# Vue SSR服务端渲染



### 什么是 SSR？

Vue.js 是一个用于构建客户端应用的框架。默认情况下，Vue 组件的职责是在浏览器中生成和操作 DOM。然而，Vue 也支持将组件在服务端直接渲染成 HTML 字符串，作为服务端响应返回给浏览器，最后在浏览器端将静态的 HTML“激活”(hydrate) 为能够交互的客户端应用。

一个由服务端渲染的 Vue.js 应用也可以被认为是“同构的”(Isomorphic) 或“通用的”(Universal)，因为应用的大部分代码同时运行在服务端**和**客户端。

### 为什么要用 SSR？

与客户端的单页应用 (SPA) 相比，SSR 的优势主要在于：

**更快的首屏加载**

**统一的心智模型**

**更好的 SEO**

### 渲染一个应用

让我们来看一个 Vue SSR 最基础的实战示例。

1. 创建一个新的文件夹，`cd` 进入
2. 执行 `npm init -y`
3. 在 `package.json` 中添加 `"type": "module"` 使 Node.js 以 [ES modules mode](https://nodejs.org/api/esm.html#modules-ecmascript-modules) 运行
4. 执行 `npm install vue`
5. 创建一个 `example.js` 文件：



```js
// 此文件运行在 Node.js 服务器上
import { createSSRApp } from 'vue'
// Vue 的服务端渲染 API 位于 `vue/server-renderer` 路径下
import { renderToString } from 'vue/server-renderer'

const app = createSSRApp({
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{ count }}</button>`
})

renderToString(app).then((html) => {
  console.log(html)
})
```

接着运行：



```sh
> node example.js
```

它应该会在命令行中打印出如下内容：



```
<button>1</button>
```

[`renderToString()`](https://cn.vuejs.org/api/ssr.html#rendertostring) 接收一个 Vue 应用实例作为参数，返回一个 Promise，当 Promise resolve 时得到应用渲染的 HTML。当然你也可以使用 [Node.js Stream API](https://nodejs.org/api/stream.html) 或者 [Web Streams API](https://developer.mozilla.org/zh-CN/docs/Web/API/Streams_API) 来执行流式渲染。查看 [SSR API 参考](https://cn.vuejs.org/api/ssr.html)获取完整的相关细节。

然后我们可以把 Vue SSR 的代码移动到一个服务器请求处理函数里，它将应用的 HTML 片段包装为完整的页面 HTML。接下来的几步我们将会使用 [`express`](https://expressjs.com/)：

- 执行 `npm install express`
- 创建下面的 `server.js` 文件：

js

```
import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const server = express()

server.get('/', (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
  })

  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})

server.listen(3000, () => {
  console.log('ready')
})
```

最后，执行 `node server.js`，访问 `http://localhost:3000`。你应该可以看到页面中的按钮了。