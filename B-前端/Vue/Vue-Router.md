# Vue Router

## 安装

npm
`npm install vue-router@4`
yarn
`yarn add vue-router@4`

## Vue3中新增路由分为以下几个步骤

1. 首先需要安装并导入Vue Router，可以通过npm包管理器安装，命令如下：

```vue
npm install vue-router@4.0.0-beta.13
```

2. 导入Vue Router并创建路由实例，可以在main.js中进行如下配置：

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

3. 在router.js中定义路由规则，如：

```javascript
// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

4. 在App.vue中添加路由占位符：

```html
<!-- App.vue -->
<template>
  <div>
    <router-view/>
  </div>
</template>
```

5. 在需要使用路由的组件中添加路由链接和路由跳转：

```html
<!-- Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<!-- Contact.vue -->
<template>
  <div>
    <h1>Contact</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>
```

以上就是在Vue3中新增路由的步骤。

路由基本使用

### 声明式导航

`<router-link :to="">`

### 编程式导航

router.push()

### 嵌套路由

children

### 路由模式

history
hash

## 动态路由

`path : '/地址/:id'`

`this.$route.params.id`

```vue
// User.vue
<template>
  <div>
    <h2>User Detail</h2>
    <p>User ID: {{ $route.params.id }}</p>
  </div>
</template>

// router.js
import Vue from 'vue'
import Router from 'vue-router'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/:id',
      name: 'User',
      component: User
    }
  ]
})
```

## 路由重定向

**redirect**

```Vue
const routes = [
  {
    path: '/contact',
    redirect: '/about' // 将访问/contact重定向到/about
  },
]
```

**别名 alias:**
将 / 别名为 /home
`const routes = [{ path: '/', component: Homepage, alias: '/home' }]`

## 路由组件传参

使用 props 代替 $route.params

```Vue
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const routes = [{ path: '/user/:id', component: User }]
```

替换成

```Vue
const User = {
  // 请确保添加一个与路由参数完全相同的 prop 名
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const routes = [{ path: '/user/:id', component: User, props: true }]
```

props 也可以是对象和函数
`props: { newsletterPopup: false }`
 `props: route => ({ query: route.query.q })`

## 历史模式

### hash

路由中会有#,它在 SEO 中确实有不好的影响
createWebHashHistory

### history  推荐使用这个模式

```Vue
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
})
```

## 导航守卫

全局,组件

vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。

### beforeEach全局前置守卫

`router.beforeEach((to,from,next)=>{} )`
to : 目标路由
from : 要离开的路由
next : function

## 限制路由(登录)

结合使用全局前置守卫 和  路由元信息（meta）

1. 定义路由配置时设置元信息

```dotnetcli
const routes = [
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/dashboard',
    component: DashboardComponent,
    meta: { requireAuth: true } // 需要认证才能访问
  },
  // 其他路由配置...
];
```

2. 使用全局前置守卫进行路由验证

```vue
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !isAuthenticated()) {
    // 如果要前往的路由需要认证，并且用户未登录，重定向到登录页面
    next('/login');
  } else {
    // 否则继续导航
    next();
  }
});
```

### 路由懒加载

使用动态导入
当路由被激活时，对应的组件会被动态加载
```Vue
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue') // 使用动态导入
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue') // 使用动态导入
  },
  // 其他路由...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```
