
## Vue组件通信

父子组件之间的通信
兄弟组件之间的通信
祖孙与后代组件之间的通信
非关系组件间之间的通信

常用的组件通信一共有8种

1. 通过 props 传递
2. 通过 $emit 触发自定义事件
3. 使用 ref
4. EventBus
5. $parent 或$root
6. attrs 与 listeners
7. Provide 与 Inject
8. Vuex

## 父传子

props
在父组件上传一些属性和值，然后子组件进行接收
Father.vue组件

```vue
<Children name="jack" age=18 />
```

Children.vue

```vue
const props = defineProps({
// 字符串形式
name:String // 接收的类型参数
// 对象形式
age:{
type:Number, // 接收的类型为数值
defaule:18, // 默认值为18
require:true // age属性必须传递
}
});
```

## 子传父

`$emit` 触发自定义事件 子组件通过`$emit`触发自定义件，`$emit`第二个参数为传递的数值，父组件绑定监听器获取到子组件传递过来的参数
Children.vue

```js
this.$emit('add', good)
const add = () => {}
```

Father.vue

```js
<Children @add="cartAdd($event)" />

```

## $ref

## 登录权限

首先,在路由配置中设置meta: { requireAuth: true } 表示需要认证才能访问
之后再路由守卫中

```Vue
// 路由守卫，登录判断，以及主子页面之间的切换
router.beforeEach((to, from, next) => {
const { requiredLogin } = to.meta;
});
```

然后再从本地存储localstore中获取login，看看用户有没有登录，如果登录了，则能获取到login且为真，之后放行，执行next,如果不能获取，则表示用户没有登录，那么就跳转到登录页面

```Vue
router.beforeEach((to, from, next) => {
const { requiredLogin } = to.meta;
const isLogin = localStorage.getItem("isLogin");
// 判断是否已经登录并是否页面需要登录权限，如果是，跳转到登录页面，若否，则放行
if (!isLogin && requiredLogin) {
next("login");
} else {
next();
}
});

```

用户登录状态的持久化:
当用户登录成功后，将用户的身份标识或认证令牌存储在
localStorage中。这样，在用户刷新页面或重新打开应用时，可以检查localStorage中是否存在有效的登录信息，从而保持用户的登录状态。

## 登录中如果token失效了，你是怎么处理的

 1.清除失效的token：localStorage.removeItem('token')

在前端，你可以清除本地存储（例如localStorage或sessionStorage）中的token以及与之相关的任何认证信息。这可以通过调用相应的方法（如localStorage.removeItem('token')）来实现。

2. 重定向到登录页：redirect
3. 提示用户重新登录

## Pinia 和 Vuex 的区别

 Pinia和Vuex--状态管理库

 使得 在vue开发中可以分成**数据流**开发和**UI组件**开发两部分  
 区别：  
在Vuex中，你需要定义state、mutations、actions和getters来管理状态。
而在Pinia 中，你只需要定义一个类似state的响应式对象，和用一些方法来代替actions、 mutations和getters这些复杂的方法。  

## ref 和 reactive

ref 将 **静态值** 变为 响应式对象
reactive 将**对象** 变为 响应式对象
