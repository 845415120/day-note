08 React-Router
## 1.基础使用

基础使用 - 安装router
实现步骤
1.克隆项目模板到本地并启动项目
`git clone https://gitee.com/react-course-series/react-router.start.git`
2.基于项目模板安装react-router-dom
`yarn add react-router-dom @6`
### 最小化demo

![](Pasted%20image%2020231002213230.png)

效果说明
1.准备俩个按钮
2.点击不同按钮切换不同内容显示
![](Pasted%20image%2020231002213252.png)
## 2.核心组件说明
- BrowerRouter
    两种常用 Router: HashRouter 和 BrowserRouter
    作用:包裹整个应用，React 应用只需要使用一次
    HashRouter
    使用 URL的哈希值实现 (http://localhost:3000/#/first)
    BrowserRouter(推荐 )
    使用H5的 history.pushState API实现 (http://localhost:3000/first)
- Routes
    作用:提供一个路由出口，满足条件的路由组件会染到组件内部，定义path和组件的对应关系
![](Pasted%20image%2020231002213646.png)
- Route
    作用: 用于指定导航链接，完成路由匹配
    语法说明:path属性指定匹配的路径地址，element属性指定要渲染的组件
![](Pasted%20image%2020231002213812.png)

    说明:当url路径为“/about’ 时，会染<About/> 组件

- Link
    作用:用于指定导航链接，完成路由跳转
    语法说明: 组件通过to属性指定路由地址，最终会渲染为a链接元素
![](Pasted%20image%2020231002213619.png)

## 3.编程式导航 (跳转与参数)
作用:通过is编程的方式进行路由页面跳转，比如从登录页跳转到关于页
语法说明:
1.导入useNavigate钩子函数
2.执行钩子函数得到跳转函数
3.执行跳转函数完成跳转
![](Pasted%20image%2020231002213915.png)
注意:如果在跳转时不想加历史记录，可以添加额外参数replace为true

### 跳转携带参数
场景 : 有些时候不光需要跳转路由还需要传递参数
俩种方式:
1.searchParams传参
传参
![](Pasted%20image%2020231002214037.png)
取参
![](Pasted%20image%2020231002214043.png)
2.params传参(path配合: /: id)

传参
![](Pasted%20image%2020231002214110.png)
取参数
![](Pasted%20image%2020231002214115.png)

## 4.嵌套路由
![](Pasted%20image%2020231002214131.png)
Layout(
- Board ( /board )
- Article (/ article )
### 代码实现
1.App.js:定义嵌套路由声明
![](Pasted%20image%2020231002214211.png)

2.Layout.js:使用<Outlet />指定二级路由出口
![](Pasted%20image%2020231002214230.png)
### 嵌套路由 - 默认二级路由
场景:应用首次渲染完毕就需要显示的二级路由
怎么做: 1.给默认路由标记index 2.修改跳转路径path
![](Pasted%20image%2020231002214317.png)

## 5.404页配置
场景:当所有的路径都没有匹配的时候显示
语法说明: 在各级路由的最后添加 * 号路作为兜底
![](Pasted%20image%2020231002214350.png)

## Umi

Umi，中文发音为「乌米」，是可扩展的企业级前端应用框架。

Umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。

然后配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。