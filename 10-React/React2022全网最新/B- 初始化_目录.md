## 环境初始化

`目标任务:`   能够独立使用React脚手架创建一个react项目
### 1. 使用脚手架创建项目

![](08-React/React2022全网最新/assets/create-react.png)
- 打开命令行窗口
- 执行命令

  ```bash
  npx create-react-app react-basic
  ```
  说明：
  1. npx create-react-app 是固定命令，`create-react-app`是React脚手架的名称
  2. react-basic表示项目名称，可以自定义，保持语义化
  3. npx 命令会帮助我们临时安装create-react-app包，然后初始化项目完成之后会自自动删掉，所以不需要全局安装create-react-app
- 启动项目
  ```bash
  yarn start
  or
  npm start
  ```

### 2. 项目目录说明调整

- 目录说明

  1. `src` 目录是我们写代码进行项目开发的目录

  2. `package.json`  中俩个核心库：react 、react-dom

- 目录调整
# 删除
  - App.test.js
  - reportWebVitals.js
  - setupTests.js
  - logo.svg 
  - App.css
    只保留app.js根组件,index.css和index.js
#  修改
index.js
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

```
app.js

```js
export default function App() {
  return <div>根组件</div>
}
```

- 入口文件说明
  ```jsx
// React 框架的核心包
// ReactDOM : 专门做渲染相关的包
import React from 'react'
import ReactDOM from 'react-dom/client'
//引入全局样式
import './index.css'
//引入根组件
import App from './App'
//渲染跟组件APP 到id为root的dom节点
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
// react 18 严格模式节点需要去掉
//useEffect的执行实际
 <App />
);
  ```
