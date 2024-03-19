# 循序渐进vue.js

# 第一章 前端基础

# 第二章 Vue模板应用

## 模板语法

`{{ }}`
 插值只能用在元素的内容节点，无法用在属性节点
`v-text`
 缺点：覆盖元素中的默认内容
`v-html`
 用处：把带有 HTML 标签的字符串，渲染为真正的 DOM  元素
Class 与 Style 绑定`v-bind`
`<div v-bind:id="dynamicId"></div>`

## 计算属性 computed:{}

方法 `methods: {}`

## 条件渲染

v-if
v-show

## 列表渲染

v-for

```Vue
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

### v-for 与 v-if

当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。

### 展示过滤或排序后的结果

举例来说：

```Vue
data() {
  return {
    numbers: [1, 2, 3, 4, 5]
  }
},
computed: {
  evenNumbers() {
    return this.numbers.filter(n => n % 2 === 0)
  }
}
template
<li v-for="n in evenNumbers">{{ n }}</li>
```

## 事件处理

### 监听事件

v-on 指令 (简写为 @) 来监听 DOM 事件
用法：`v-on:click="handler" 或 @click="handler"。`

## 第3章 Vue组件的属性和方法

**属性基础**
在Vue组件中定义的属性数据，我们可以直接使用组件来调用
**方法基础**
组件的方法被定义在methods选项中

### **计算属性**

计算属性定义在Vue组件的computed选项中

### **属性侦听器**

使用属性侦听器可以方便地
监听某个属性的变化，以完成复杂的业务逻辑
定义Vue组件时，可以通过watch选项来定义属性侦听器

### 表单数据的双向绑定

```Vue
<input type="checkbox" value="足球" v-model="checkList"/>足球
<input type="checkbox" value="篮球" v-model="checkList"/>篮球
<input type="checkbox" value="排球" v-model="checkList"/>排球
<p>{{checkList}}</p>
```

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.4vao8dc3fe60.webp)

## 样式绑定

## 第4章 处理用户交互

### 事件的监听与处理

使用@click直接绑定单击事件方法

## 第5章 组件基础

插槽
动态组件

## 第6章 组件进阶

生命周期
组件的注册方式
Props

## 第7章 Vue响应式编程

独立的响应式值Ref的应用

### 组合式API的应用

关于setup方法

## 第8章 动画

## 第9章 构建工具Vue CLI的使用

## 第10章 基于Vue 3的UI组件库——Element Plus

## 第11章 基于Vue的网络框架——vue-axios的应用

安装
`npm install --save axios vue-axios`

```dotnetcli
// 导入vue-axios模块
import VueAxios from 'vue-axios'
import axios from 'axios';
// 导入我们自定义的根组件
import App from './App.vue'
// 挂载根组件
const app = createApp(App)
// 注册axios
app.use(VueAxios, axios)
app.mount('#app')
```

```Vue
import axios from 'axios';

export default {
  ...
  methods: {
    fetchData() {
      axios.get('https://api.example.com/data')
        .then(response => {
          // 请求成功后的操作
          console.log(response.data);
        })
        .catch(error => {
          // 请求失败后的操作
          console.error(error);
        });
    }
  },
  ...
};
```

## 第12章 Vue路由管理

安装
`npm install vue-router@4 -s`
**使用**
 创建路由器对象：在根组件（通常是`main.js`文件）中，导入Vue和Vue Router，并创建一个新的路由器对象。

```javascript
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
```

4. 创建路由出口：在根组件的模板中，添加一个`<router-view>`标签作为路由出口，用于渲染匹配到的组件。

```html
<template>
  <div id="app">
    <!-- 其他组件 -->
    <router-view></router-view>
  </div>
</template>
```

5. 创建导航链接：在组件中，使用`<router-link>`标签创建导航链接，指向不同的路由路径。

```html
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>
```

### 定义全局的导航守卫

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.35cnrto8fzu0.webp)

### 动态路由

动态添加与删除路由
在Vue Router中，动态操作路由的方法主要有两个：addRoute和
removeRoute，addRoute用来动态添加一条路由，对应的removeRoute用
来动态删除一条路由。

## 第13章 Vuex状态管理

在Vue应用中，组件状态的管理由如下几部分组成：
**1．状态数据**
状态数据是指data函数中返回的数据，这些数据自带响应性，由其
来对视图的展现进行驱动。
**2．视图**
视图是指template里面定义的视图模板，其通过声明的方式将状态
映射到视图上。
**3．动作**
动作是指会引起状态变化的行为，即上面代码methods选项中定义
的方法，这些方法用来改变状态数据，状态数据的改动最终驱动视图的
刷新。
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.2yycpk0gfjc0.webp)

### 安装Vuex

`npm install vuex@next --save`
Vuex框架的核心是store，即仓库

Vuex中的5个核心概念：

### **state**

状态-也就是应用中组件需要共享的**数据**

### **getter**

 **计算属性**实际上就是Getter方法

### **mutation**

修改store中的某个状态数据的唯一方法是提交Mutation

### **action**

处理异步
Action是我们将要接触到的一个新的Vuex中的核心概念。我们知
道，要修改store仓库中的状态数据，需要通过提交Mutable来实现。但
是Mutation有一个很严重的问题：其定义的方法必须是同步的，即只能
同步地对数据进行修改。在实际开发中，并非所有修改数据的场景都是
同步的，例如从网络请求获取数据，之后刷新页面。当然，也可以将异
步的操作放到组件内部处理，异步操作结束后再提交修改到store仓库，
但这样可能会使本来可以复用的代码要在多个组件中分别编写一遍。
Vuex中提供了Action来处理这种场景。

Action与Mutation类似，不同的是，Action并不会直接修改状态数
据，而是对Mutation进行包装，通过提交Mutation来实现状态的改变。
这样在Action定义的方法中，允许我们包含任意的一步操作。
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.1a3iqb486z6.webp)

### **module**

Module是Vuex进行模块化编程的一种方式

# 第15章 电商后台管理系统实战

Vue3  Vuerouter vuex

## 用户登录模块开发

项目搭建
`vue create shop-admin`

默认生成的Vue项目中有一个HelloWorld.vue文件，可以直接将此文
件删掉。
在components文件夹下新建两个子文件夹，分别命名为home和
login，在home文件夹下新建一个名为Home.vue的文件，在login文件夹
下新建一个名为Login.vue的文件。
Home组件用来渲染管理系统的主页，Login组件用来渲染用户登录页面，为了显示方便，我们先简单实
现这两个组件，代码如下：
Home：
```Vue
<template>
主页
</temmplate>
<script>
export default {
name:"Login"
</script>

Login:

<template>
登录页面
</tempIate>
<script>
export default {
name:"Login"
}
</script>
```

下面对项目的入口做一些管理，由于此后台系统的任何功能页面都
需要登录后操作，因此需要使用路由来进行全局的页面管理，在每次页
面跳转前都检查当前的用户登录状态，如果是未登录状态，则将页面重
定向到登录页面。

在工程的src文件夹下新建一个名为tools的文件夹，在
tools文件夹下新建一个名为Storage.js的文件，此文件用来进行全局状态
配置，编写代码如下：

## 完整的项目代码  

[https://gitee.com/jaki/shop-admin](https://gitee.com/jaki/shop-admin)
地址演示
[http://jaki.gitee.io/shop-admin/#/login](http://jaki.gitee.io/shop-admin/#/login)

## 项目搭建  

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238207500-7310cef0-be6d-4201-aba5-45081f263715.png#averageHue=%23ededed&clientId=u5dad6cba-d530-4&from=paste&height=237&id=u7ad7a678&originHeight=289&originWidth=417&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=33919&status=done&style=none&taskId=u54fe92ed-0873-4ed6-a7cd-8c73683e682&title=&width=341.8032706728934)
如以上代码所示，模拟登录后，我们会将用户输入的用户名和密码 进行存储，只要有用户名存在，就认为当前用户已经登录。当然，这只 是方便我们学习的一种模拟登录方式，在实际的业务开发中，当用户输 入了用户名和密码后会请求后端服务接口，接口会返回用户的身份认证 标识token，真实的应用程序中会通过token来判定用户的登录状态。  

 在tools文件夹下新建一个名为Router.js的文件，用来进行路由配 置。编写代码如下  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238229029-96b37d25-0d9b-45af-98ea-ee41d4a7e04f.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=457&id=ubde40697&originHeight=557&originWidth=579&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=92846&status=done&style=none&taskId=u6ec7f776-52c4-48c6-9a59-703ab5a9e1c&title=&width=474.59015280480884)
 在上面的代码中，我们暂时只配置了两个路由，分别对应管理后台 的主页和用户登录页，并且使用全局的前置守卫进行页面跳转前的登录 状态校验。  
 修改App.vue文件如下，为其添加路由的渲染出口  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238246554-22f09e46-5f56-415a-b7e6-913898f5b945.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=129&id=u25fb6fca&originHeight=157&originWidth=318&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=17848&status=done&style=none&taskId=ua6fec00e-5d28-4e25-a6cc-90ad7b37d19&title=&width=260.65573159227847)
 最后，在main.js文件中完成基本的初始化工作，代码如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238260156-f492f675-fe33-4140-ac7a-3da61571f58e.png#averageHue=%23ebe9e6&clientId=u5dad6cba-d530-4&from=paste&height=160&id=ufc8db6f3&originHeight=195&originWidth=451&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=37042&status=done&style=none&taskId=u910b33fa-7032-4fa9-9dc3-0e4185227dd&title=&width=369.67212247835715)
 至此，我们已经创建了后台管理系统项目的入口框架。运行代码， 无论输入怎样的页面路径，页面都会被重定向到登录页面，如图15-1所 示。后面再来完善登录页面的展示和功能。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238271790-ee042ee7-6ccb-4042-8218-f64a1f46b928.png#averageHue=%23fcfbfb&clientId=u5dad6cba-d530-4&from=paste&height=293&id=u78ada884&originHeight=357&originWidth=401&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=19169&status=done&style=none&taskId=uea9e282c-f8a0-41d6-bebd-c9bc09eb8e2&title=&width=328.68851688208696)

## 用户登录页面的开发  

 涉及Vue项目的页面开发，离不开Element Plus组件库，先为当前 Vue项目引入Element Plus模块：  
 `npm install element-plus --save`
 在main.js文件中添加Element Plus模块的相关初始化代码：  

```vue
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

  注意，别忘了引入Element Plus对应的CSS样式文件。做完这些后， 可以正式开始用户登录页面的开发。  
  首先修改Storage.js文件，为其添加两个修改用户状态的方法，代码 如下  ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238395229-35eebcdd-9ab3-45d9-853f-7ab63e6cb1b3.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=355&id=u918edf23&originHeight=433&originWidth=429&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=54295&status=done&style=none&taskId=u752e64b4-11a1-493b-8fd5-9ac43926cb7&title=&width=351.63933601599825)
  后面会通过store对象提交clearUserInfo和registUserInfo这两个操作 来模拟用户的注销和登录动作。  
 在Login.vue组件中完善用户登录页面，完整代码如下  :
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238418679-a5662587-a669-4868-ac4f-96a40e16afc6.png#averageHue=%23efefef&clientId=u5dad6cba-d530-4&from=paste&height=389&id=ucd774b6d&originHeight=474&originWidth=741&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=107870&status=done&style=none&taskId=u52aaf1c9-074f-456c-bed1-30ae30b025d&title=&width=607.3770349367243)![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238566882-d91c6ad9-073d-49f7-b4a7-812a6fea7421.png#averageHue=%23efefef&clientId=u5dad6cba-d530-4&from=paste&height=1492&id=ua5f1fd9d&originHeight=1820&originWidth=1137&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=335361&status=done&style=none&taskId=u34a4d860-870a-4857-a25f-295ec5fdf96&title=&width=931.9671912591842)  此用户登录页面本身并不复杂，当登录成功后，我们让路由跳转到 后台管理系统的主页。需要注意，上面的代码中使用到的背景图片素材 放在Vue工程的assets文件夹下，你可以将其替换成任意喜欢的背景。运 行工程，效果如图15-2所示。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238592185-9c62cc8d-2a43-4087-b8ff-70a1b97a2fe4.png#averageHue=%23454a45&clientId=u5dad6cba-d530-4&from=paste&height=267&id=u2cad3f78&originHeight=326&originWidth=529&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=65986&status=done&style=none&taskId=u9667ad62-920a-40ad-bdfc-7b061deaf98&title=&width=433.60654720853864)
 可以尝试输入任意的用户名和密码，单击“登录”按钮后会执行登录 操作，页面会跳转到后台管理系统的首页。当然，目前管理后台的主页 还没有任何内容，下一节再来进行主页的开发。  

## 项目主页搭建  

  前面完成了电商管理后台的登录页面，本节我们来搭建管理系统的 主页框架。  

### 主页框架搭建  

  总体来说，电商后台管理系统还是略显复杂的，其包含商品管理、 订单管理、店铺管理等多个管理模块，我们可以通过嵌套路由的方式来 管理主页中的管理模块。首先在Router.js文件中修改路由的定义，新增 订单管理模块的路由如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238649539-46fc24f0-c6a7-4703-bbe3-a63e2e7ea2a7.png#averageHue=%23eeeeee&clientId=u5dad6cba-d530-4&from=paste&height=195&id=ubaa9d5b3&originHeight=238&originWidth=526&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=29168&status=done&style=none&taskId=uce73d7d4-4e55-46ba-8324-78ad54fdd0b&title=&width=431.14753087276245)
 对于订单模块，参数type用来区分类型，本电商后台管理系统支持 普通订单和秒杀订单两种商品订单。当用户登录完成后，访问系统主页 时，我们默认将其重定向到订单模块。  
 电商系统的主页中需要包含一个侧边栏菜单和一个主体功能模块。 侧边栏用来进行主体功能模块的切换，修改Home.vue中的模板代码如 下  :
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238751961-ebb6d287-ce85-4008-b97f-2650be3d6531.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=846&id=u7dc8c4d6&originHeight=1032&originWidth=811&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=337096&status=done&style=none&taskId=u38b544cf-f641-42da-af56-c18ba49b044&title=&width=664.7540827715026)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238727356-493b2e5b-690c-40c9-ba36-d6aa71e939bc.png#averageHue=%23ededed&clientId=u5dad6cba-d530-4&from=paste&height=473&id=ub608df14&originHeight=577&originWidth=784&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=150477&status=done&style=none&taskId=uddb0a2bb-85a1-483f-814d-6be1f58ea8c&title=&width=642.6229357495166) 如以上代码所示，在侧边栏导航中，我们将所有包含的功能模块都 添加了进来，不同的功能模块以对应不同的组件，后面只需要逐个模块 地进行开发即可。需要注意，为了保证导航栏的选中栏目与当前页面路 由相匹配，我们将导航item的index设置为路由的path，并将el-menu组件 的default-active属性绑定到当前路由的path属性上，这样就自动实现了 联动效果，非常方便。  

 在components文件夹下新建一个名为order的子文件夹，并在其内新 建一个名为Order.vue的文件，用来简单演示本节所编写代码的效果。在 Order.vue文件中编写如下代码  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238771634-26d91d7e-3413-4bc7-9caf-43426090168e.png#averageHue=%23f0f0f0&clientId=u5dad6cba-d530-4&from=paste&height=141&id=u4f646381&originHeight=172&originWidth=779&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=24627&status=done&style=none&taskId=ucd2ed9ec-d1ac-4a4e-8221-839bdb855d0&title=&width=638.5245751898897)
 将此组件在Router.js文件中进行引用。运行工程代码，效果如图15- 3所示。  现在，我们已经完成了管理系统的框架搭建，后面在进行具体功能 模块开发时，只需要专注于各个模块组件内部的逻辑即可。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238793452-8bd60914-74ee-4a27-8d21-d5ac174ef1b3.png#averageHue=%23fcfcfc&clientId=u5dad6cba-d530-4&from=paste&height=402&id=u3dec35ed&originHeight=491&originWidth=547&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=44167&status=done&style=none&taskId=ua7932d6d-bfe6-4d5f-8e05-b6eea3b3521&title=&width=448.36064522319595)

### 完善注销功能  

  上一节我们已经将后台管理系统的主页部分基本搭建完成了，但是 还有一个细节尚未完善：缺少用户注销的功能。本节将此功能补充完 善。关于模拟登录与注销操作的方法，之前在Storage.js文件中已经有了 封装，我们只需要在主页添加一个公用的头视图，在其中布局一个注销 按钮即可。  
 修改Home.vue文件中的el-main组件如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238871314-18e872e3-e8b0-4854-a9ae-7dc26f596392.png#averageHue=%23e9e9e9&clientId=u5dad6cba-d530-4&from=paste&height=253&id=u92ac88ca&originHeight=309&originWidth=764&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=109985&status=done&style=none&taskId=ua5a711b5-8294-4c1b-9e27-097b4563644&title=&width=626.2294935110086)
 logout方法的实现如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238884159-cacad6b5-7e42-474b-ab71-33ae7599dd6c.png#averageHue=%23eeeeee&clientId=u5dad6cba-d530-4&from=paste&height=76&id=ub8e3a836&originHeight=93&originWidth=675&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=17039&status=done&style=none&taskId=u945587b8-1e29-40d3-8fbf-0c9b115c697&title=&width=553.2786755496477)
 运行工程，可以看到主体功能模块的上方已经添加了一个公用的头 视图，单击其中的注销按钮会清空登录数据，返回登录页面，如图15-4 所示  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238896159-dba2746c-7d24-4808-ac7e-a43be0b79e02.png#averageHue=%23faf9f6&clientId=u5dad6cba-d530-4&from=paste&height=309&id=u007be4a7&originHeight=377&originWidth=564&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=41845&status=done&style=none&taskId=uf86117dd-5021-411e-9ea6-dc97d9538f7&title=&width=462.2950711259278)

## 订单管理模块的开发  

  本节将开发电商后台管理系统中的第一个功能模块：订单管理模 块。由于此实战项目不包含后端和数据库相关功能，为了完整地完成前 端功能，我们将采用模拟数据来进行逻辑演示。  

### 使用Mock.js进行模拟数据的生成  

 Mock.js是一款小巧的JavaScript模拟数据生成器，在Vue项目中，我 们可以使用其生成随机数据，方便实现前端开发过程中的调试页面功 能。首先安装Mock.js模块：  
`npm install mockjs --save`
 安装完成后，在项目的src文件夹下新建一个名为mock的子文件 夹，在其中新建一个名为Mock.js的文件，编写代码如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689238957841-1b513796-702d-4ec2-a6e0-abd3e1337cdb.png#averageHue=%23ebebeb&clientId=u5dad6cba-d530-4&from=paste&height=405&id=u1aa99c85&originHeight=494&originWidth=754&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=133238&status=done&style=none&taskId=u3bd293f5-c179-4573-8d45-c3aa4457b79&title=&width=618.0327723917545)
 如以上代码所示，提供了一个获取订单列表的getOrder方法，此方 法将返回生成的模拟数据。关于Mock.js模块的使用语法，本书中不再 详细介绍，读者只需要了解通过上面的方法将返回一组模拟的订单数据 即可。  
 现在，尝试运行此项目，在控制台打印getOrder方法返回的数据， 可以体会到Mock.js模块的强大之处。  

### 编写工具类与全局样式  

  在编写具体的功能模块前，可以先分析一下这些功能模块是否有通 用的部分。某些样式是可以通用的，例如容器样式、输入框样式等，可 以将这些可通用的样式定义为全局样式，这样在之后编写其他功能模块 时就会方便很多。另外，对于一些工具方法，也可以将其整合到一个单 独的JavaScript模块中，方便复用。  
 首先在App.vue文件中编写如下样式代码，这些CSS样式都是全局生效的：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239014673-f12f5e66-0294-427f-a9ee-ef185061dd33.png#averageHue=%23ededed&clientId=u5dad6cba-d530-4&from=paste&height=507&id=uf42e67a5&originHeight=619&originWidth=627&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=88383&status=done&style=none&taskId=uf32ef8eb-1733-41db-b2c3-907c95c34bb&title=&width=513.9344141772283)
 后面在编写HTML模板时，对于这些通用的样式直接使用即可。  
 在工程的tools文件夹下新建一个名为Tools.js的文件，编写代码如 下  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239037208-f592b170-0c06-46e6-94bb-adc41bb38221.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=218&id=u54053b1b&originHeight=266&originWidth=767&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=63067&status=done&style=none&taskId=u28f83367-c349-4cd4-9628-cacef40c6ce&title=&width=628.6885098467848)
 我们暂时只实现一个导出JSON文件的方法，在订单管理模块的订 单导出相关功能中会使用这个方法。  

### 完善订单管理页面  

  前面已经做完了所需的准备工作，要完成订单管理页面，剩下的无 非是搭建HTML模板结构，将数据绑定到对应的页面元素上，最后为可 交互的页面元素绑定事件，实现事件函数。Order.vue文件中完整的示例 代码如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239073273-1fcfc5cd-fe3d-4704-9d89-33464634726b.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=283&id=u46c40161&originHeight=345&originWidth=733&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=74579&status=done&style=none&taskId=u1c1878d2-0cf8-4ff4-99ee-9ea60de7a1f&title=&width=600.8196580413211)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239096595-17709c16-1cba-435c-a2eb-87bb30401703.png#averageHue=%23ebebeb&clientId=u5dad6cba-d530-4&from=paste&height=884&id=u5f59edb4&originHeight=1079&originWidth=749&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=305936&status=done&style=none&taskId=ub9500b98-3597-4a7b-9c28-802e1e6bad4&title=&width=613.9344118321276)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239126893-a07b426d-172b-426b-a49e-dc0ea87d645b.png#averageHue=%23ededed&clientId=u5dad6cba-d530-4&from=paste&height=1380&id=u2627ffef&originHeight=1684&originWidth=1286&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=604209&status=done&style=none&taskId=udf26d580-268c-4efc-8503-6fa938033bd&title=&width=1054.0983359360694)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239146596-66e72675-c0ef-4fff-9b67-1cfc2abd9745.png#averageHue=%23eeeeee&clientId=u5dad6cba-d530-4&from=paste&height=1546&id=u4e55ae3b&originHeight=1886&originWidth=1404&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=681489&status=done&style=none&taskId=udcfa6abb-a329-42b0-9e60-0f91f8915fd&title=&width=1150.819645143267)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239164450-1ae1b9ff-4a56-4624-b041-b8d0b4ea7555.png#averageHue=%23f0f0f0&clientId=u5dad6cba-d530-4&from=paste&height=1037&id=ue730f44d&originHeight=1265&originWidth=793&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=232122&status=done&style=none&taskId=uf87bc946-1d7d-4391-ac90-06b6fa086d8&title=&width=649.9999847568453)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239175024-9ff8122e-1857-476e-8828-821a469d6008.png#averageHue=%23eeeeee&clientId=u5dad6cba-d530-4&from=paste&height=516&id=u88a1fb64&originHeight=630&originWidth=774&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=102444&status=done&style=none&taskId=u6284158d-2da9-4940-9d12-168ace87ed9&title=&width=634.4262146302626)
 上面的代码中并没有特别复杂的逻辑，且每个方法的功能都有注 释。运行工程，效果如图15-5所示。现在我们已经完成了订单模块前端 开发完整的功能，可以尝试操作体验一下订单管理的各个功能，需要数 据都是模拟的，但交互流程已经非常完整。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239187954-7088c468-d452-4e51-be9f-f0c2906017ee.png#averageHue=%23f8f6f4&clientId=u5dad6cba-d530-4&from=paste&height=307&id=u1588a25f&originHeight=374&originWidth=603&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=89390&status=done&style=none&taskId=u61d56a00-05de-4308-809f-cdc04cf6083&title=&width=494.26228349101854)

## 商品管理模块的开发  

 有了订单模块开发的经验，相信你再来编写商品管理功能模块会非 常容易。商品管理模块与订单管理模块的开发过程基本类似，先布局页 面，再将获取到的数据绑定到页面上，最后处理用户交互即可。相比订 单管理模块，商品管理模块的新增商品功能略微复杂一些。  

### 商品管理列表页的开发  

 首先，在工程的components文件夹下新建一个good子文件夹，在其 中创建两个Vue组件文件，分别命名为Goods.vue和AddGood.vue。本节 先只做商品列表页的开发，对于AddGood.vue文件可以先不做处理。
 在Router.js文件中注册新创建的这两个组件，首先引入组件：  
`import Goods from '../components/goods/Goods.vue'`
`import AddGood from '../components/goods/AddGood.vue'`
 在home路由下新增两个子路由：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239267574-7fe84ca9-bf0f-4fc7-ae4d-c44afeddf316.png#averageHue=%23eaeaea&clientId=u5dad6cba-d530-4&from=paste&height=161&id=u617ea8c5&originHeight=196&originWidth=582&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=41544&status=done&style=none&taskId=u21215811-b2d2-454c-b3bf-12dd3bbaa0e&title=&width=477.0491691405851)
 在开始编写商品管理功能模块的代码前，先在Mock.js文件中新增 一个获取商品数据的方法，代码如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239279954-3a496562-ba95-4162-85c0-cfffbd4eaf7b.png#averageHue=%23e9e9e9&clientId=u5dad6cba-d530-4&from=paste&height=354&id=uf20a97fb&originHeight=432&originWidth=725&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=145347&status=done&style=none&taskId=u78ac36b1-1303-4214-9399-8e97c65a5e0&title=&width=594.2622811459179)
 下面给出完整的商品列表页面Goods.vue中的代码。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239305211-ed35e1ce-82dd-4f43-a5c5-d495dcc47d5a.png#averageHue=%23efefef&clientId=u5dad6cba-d530-4&from=paste&height=753&id=u17410c5a&originHeight=919&originWidth=792&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=212993&status=done&style=none&taskId=u5c153cf8-c85a-4c4f-90cd-a63a085695f&title=&width=649.1803126449199)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239318050-558b6bc2-24ce-4c26-b623-25d173fac059.png#averageHue=%23f0f0f0&clientId=u5dad6cba-d530-4&from=paste&height=939&id=ue9cd7c3f&originHeight=1146&originWidth=839&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=267122&status=done&style=none&taskId=uf08896e1-b686-46b4-bf0b-19fe094c722&title=&width=687.7049019054139)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239328115-6bdd1a9a-f498-4b43-afe6-25286f651682.png#averageHue=%23f1f1f1&clientId=u5dad6cba-d530-4&from=paste&height=867&id=ue08bb94e&originHeight=1058&originWidth=795&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=156511&status=done&style=none&taskId=u2b38fdb0-30c1-4587-bbc2-e4d7cee0ef5&title=&width=651.6393289806961)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239340237-0cd9f313-c8cd-42c4-936b-5190d38b91a7.png#averageHue=%23efefef&clientId=u5dad6cba-d530-4&from=paste&height=854&id=u7554bbb8&originHeight=1042&originWidth=804&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=197750&status=done&style=none&taskId=u7309ecc2-6f88-4398-8075-0f3322e3643&title=&width=659.0163779880247)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239346626-66093ec4-d8f3-4112-898f-1de21c027d0f.png#averageHue=%23efefef&clientId=u5dad6cba-d530-4&from=paste&height=357&id=u4deb58a5&originHeight=436&originWidth=764&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=57547&status=done&style=none&taskId=u713f2cd0-d85b-4b56-bc15-2e5b12f7446&title=&width=626.2294935110086)
 此页面没有过多的交互逻辑，需要注意的是，如果数据本身无法直 接支持页面的渲染，需要转换后才能使用，我们可以通过创建新的计算 属性来实现。运行当前工程，商品列表页面如图15-6所示。可以尝试单 击页面中的交互元素检验对应方法的执行是否正确。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239359345-7e7e4307-9994-4581-ad65-93bf7652e1c4.png#averageHue=%23faf8f5&clientId=u5dad6cba-d530-4&from=paste&height=334&id=u508d080d&originHeight=408&originWidth=650&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=63880&status=done&style=none&taskId=ub3dcb028-b121-46c6-84be-ecaa1a973af&title=&width=532.7868727515125)

### 新建商品的基础配置  

 在商品管理列表页有一个新建商品的按钮，单击后会跳转到新建商 品页面，在此页面需要对商品的诸多属性进行设置，可以使用el-tab组 件来将商品设置分成几个模块，如基础设置、价格库存设置和详情设置 等。每一个设置模块都可以封装成一个独立的组件。  
 首先，在工程的goods文件夹下新建一些文件，分别为 GoodBaseSetting.vue、GoodPriceSetting.vue和GoodDetailSetting.vue。在 AddGood.vue中引入这3个子组件即可。在AddGood.vue中编写如下代 码  ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239383984-61413c57-738c-4875-ba89-d16ad75dd6d8.png#averageHue=%23ebebeb&clientId=u5dad6cba-d530-4&from=paste&height=560&id=ubf5d6f43&originHeight=683&originWidth=734&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=174396&status=done&style=none&taskId=ue7697c05-6497-4add-9bf2-0651e34a4b2&title=&width=601.6393301532464)
 下面需要逐一对每个独立的商品设置模块进行开发。首先编写 GoodBaseSetting组件的代码如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239400712-21517138-e63f-444f-96c9-5a82f157b567.png#averageHue=%23ededed&clientId=u5dad6cba-d530-4&from=paste&height=162&id=u9cc6fd6c&originHeight=198&originWidth=728&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=44747&status=done&style=none&taskId=u74846e36-19ed-48a9-be76-501832b804b&title=&width=596.721297481694)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239429522-55ebb9bd-fde1-4798-88a4-71eb210fe177.png#averageHue=%23eeeeee&clientId=u5dad6cba-d530-4&from=paste&height=825&id=u99aa700b&originHeight=1007&originWidth=804&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=321626&status=done&style=none&taskId=u3c926e3a-d6ea-49ad-b2c9-9b5d9cd11e2&title=&width=659.0163779880247)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239436829-aade779c-e534-40a2-b6e0-2b8bb7c80ebe.png#averageHue=%23f1f1f1&clientId=u5dad6cba-d530-4&from=paste&height=451&id=uc80f74e8&originHeight=550&originWidth=803&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=56792&status=done&style=none&taskId=ufe8638e8-70e9-42cb-b0aa-fa1927ff3b1&title=&width=658.1967058760994)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239443224-172397fa-683d-4947-88bc-e0a83f750c93.png#averageHue=%23faf9f7&clientId=u5dad6cba-d530-4&from=paste&height=290&id=uf4fc50d2&originHeight=354&originWidth=569&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=46104&status=done&style=none&taskId=u17c0f295-ab93-440b-8735-b0666141384&title=&width=466.39343168555484)

### 新建商品的价格和库存配置  

 价格和库存配置模块相对简单，只需要布局一些输入框来接收用户 的输入配置即可。在GoodPriceSetting.vue中编写如下代码：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239470795-062b6b7d-aa3c-42da-bcc7-b3b742962118.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=859&id=u0daea521&originHeight=1048&originWidth=781&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=362558&status=done&style=none&taskId=u4c5b9604-f9ac-40dd-9b30-531f28a4cbe&title=&width=640.1639194137405)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239482327-0e3a23ea-9a7b-40f7-a0ed-6505b5998cdf.png#averageHue=%23ededed&clientId=u5dad6cba-d530-4&from=paste&height=811&id=u2be35091&originHeight=990&originWidth=762&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=188415&status=done&style=none&taskId=u62a7d842-c0c0-4f68-869e-51f850574f8&title=&width=624.5901492871578)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239488661-5fcb42d3-78a2-4de0-bd7b-1670729ce8e3.png#averageHue=%23f8f7f5&clientId=u5dad6cba-d530-4&from=paste&height=296&id=u9ff9b508&originHeight=361&originWidth=584&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=44839&status=done&style=none&taskId=u0570d33b-c444-49ad-9fdd-8c34e004bac&title=&width=478.6885133644359)

### 新建商品的详情设置  

  商品的详情定制性较强，通常在上架添加商品时进行定制化的设 置。商品详情可以采用富文本编辑器来进行编辑。富文本编辑器可以提 供将富文本转换成HTML文本的功能，使用起来十分方便。虽然看上去 一款富文本编辑器支持各种样式的文本、图片、超链接等功能，实现比 较复杂，但是互联网上有很多优秀的富文本插件可以直接使用，无须我 们重复开发。  
 首先，在Vue工程目录下执行如下指令安装wangEditor富文本编辑 器插件：  
`npm i wangeditor -S`
 安装成功后，在goods文件夹下新建一个名为GoodEdit.vue的文件， 在其中编写如下代码  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239537838-091a6845-6e95-4f02-a3df-9b2bca38113c.png#averageHue=%23ededed&clientId=u5dad6cba-d530-4&from=paste&height=850&id=u87f2cab7&originHeight=1037&originWidth=762&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=232937&status=done&style=none&taskId=u2aa573f4-9ff2-4daa-a40a-dbe27865592&title=&width=624.5901492871578)
 上面的代码有着详细的注释，通过一些简单的配置即可使用此富文 本组件，修改GoodDetailSetting.vue文件的代码如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239552420-0945e669-e567-4a63-8197-702fcf74c6f8.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=626&id=udf58330b&originHeight=764&originWidth=743&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=158099&status=done&style=none&taskId=u0c26db8a-eebc-476b-9234-2062d9d8582&title=&width=609.0163791605751)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239559473-81d352a9-4b53-4a3f-adbc-f24623bc6522.png#averageHue=%23f5f4f2&clientId=u5dad6cba-d530-4&from=paste&height=273&id=u0e63c81f&originHeight=333&originWidth=542&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=36531&status=done&style=none&taskId=uaf911bfe-544d-4264-8f45-e66089909de&title=&width=444.2622846635689)

## 添加商品分类  

 商品分类管理模块相对简单，只需要通过一个列表来展示已有的分 类，并提供对应的删除和新增分类功能。在goods文件夹下新建一个名 为GoodCategory.vue的文件，编写如下示例代码  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239578904-ea278b46-ed20-4c0a-b2c4-49f4c294776e.png#averageHue=%23ebebeb&clientId=u5dad6cba-d530-4&from=paste&height=91&id=u50b56d9a&originHeight=111&originWidth=735&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=36528&status=done&style=none&taskId=uc2ffc394-5f0d-4d93-bc72-353f0e84681&title=&width=602.4590022651719)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239614703-0f094e6a-15f1-4593-89d2-ba308fa2cf96.png#averageHue=%23f1f1f1&clientId=u5dad6cba-d530-4&from=paste&height=1017&id=u7db5938f&originHeight=1241&originWidth=895&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=259011&status=done&style=none&taskId=u9bbbcb1b-b466-495c-a20f-4ddfe2bd7a1&title=&width=733.6065401732365)
 运行代码，效果如图15-10所示。不要忘记在Router.js中补充对应的 路由配置，并且为新增商品模块中的新增分类添加对应的跳转功能。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239630211-cd353aa7-50ff-4005-b4e8-b3fcf524710a.png#averageHue=%23999389&clientId=u5dad6cba-d530-4&from=paste&height=339&id=udaa175d2&originHeight=414&originWidth=535&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=47173&status=done&style=none&taskId=uef631332-617c-431e-b557-c5d50aff730&title=&width=438.5245798800911)

## 店长管理模块的开发  

 店长管理模块用来对店长进行统计、审核等操作，技术上都是通过 列表来展示店长相关信息，通过检索条件来与后端数据接口交互进行数 据获取。开发此模块在技术上并没有太大的难度。  
  首先在工程的components文件夹下新建一个名为manager的子文件 夹，用来存放店长管理的相关组件。在manager文件夹下新建3个文件， 命名为ManagerList.vue、ManagerOrder.vue和ManagerReqList.vue。  

 我们先来编写店长列表模块的开发。首先在Mock.js中添加一个新 的方法，用来模拟店长数据：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239674928-cd7d0637-41cc-4ea9-b4dd-b9da10a76151.png#averageHue=%23ebebeb&clientId=u5dad6cba-d530-4&from=paste&height=302&id=u6407a490&originHeight=368&originWidth=690&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=96430&status=done&style=none&taskId=ub18ea2c6-f143-4b58-9ca5-8efec1e82fa&title=&width=565.5737572285287)
 将新建的3个组件注册到对应的路由中，在Router.js文件中添加如下 路由配置：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239685673-293ce93f-23b7-410f-8996-4f3a74b4fce3.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=275&id=u4fd2cd07&originHeight=336&originWidth=394&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=39979&status=done&style=none&taskId=u15c6e9e5-807c-4a66-9f5e-41c0de018c3&title=&width=322.95081209860916)
 编写ManagerList.vue组件的代码如下  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239699957-09524811-18fa-4bec-bea2-69b51ce6f90f.png#averageHue=%23eaeaea&clientId=u5dad6cba-d530-4&from=paste&height=408&id=u1eb31d52&originHeight=498&originWidth=741&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=149811&status=done&style=none&taskId=u4588d750-b99f-4ef9-9100-312c0a74035&title=&width=607.3770349367243)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239712632-ba0fe973-51dd-4ada-9f6b-b6154b9bb9ca.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=851&id=u6dc78d41&originHeight=1038&originWidth=790&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=297568&status=done&style=none&taskId=ub969aa30-9eaa-49cb-b7eb-3c20dd43018&title=&width=647.5409684210691)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239719550-6de4d30f-6ef1-439f-a000-2d3ce2b3b0ce.png#averageHue=%23efefef&clientId=u5dad6cba-d530-4&from=paste&height=223&id=u06239b1d&originHeight=272&originWidth=772&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=50968&status=done&style=none&taskId=ud43e69ad-a080-41a4-a836-305817d8505&title=&width=632.7868704064118)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239728716-da9a2025-3009-483b-a9e0-fbb7f3c60e3f.png#averageHue=%23ede1cf&clientId=u5dad6cba-d530-4&from=paste&height=298&id=u2f78d2a9&originHeight=363&originWidth=639&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=75744&status=done&style=none&taskId=uae2e60c4-7323-42c9-a0e0-f2d232c7423&title=&width=523.7704795203331)

### 店长审批列表与店长订单  

略
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239755857-9fb14009-fd1a-4705-9201-e500275c9768.png#averageHue=%23f7f6f3&clientId=u5dad6cba-d530-4&from=paste&height=636&id=ucfdf3ab1&originHeight=776&originWidth=646&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=156544&status=done&style=none&taskId=u4abd6107-008c-41ac-b9b9-90494776aaa&title=&width=529.5081843038109)

## 数据统计功能模块开发  

 数据统计模块是此电商后台管理系统的最后一个功能模块，此模块 需要使用一个图表绘制的工具，可以使用echarts模块方便地实现图表绘 制。首先在工程根目录下执行如下指令来安装echarts：  
`npm install echarts --save`
 安装完成后，在工程中的financial文件夹下新建一个名为Charts.vue 的文件，编写如下代码  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239827938-02c3a1a0-a8d9-4814-bfb1-00edc43f475e.png#averageHue=%23efefef&clientId=u5dad6cba-d530-4&from=paste&height=698&id=ued6069b0&originHeight=851&originWidth=769&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=115024&status=done&style=none&taskId=u7a3271c5-ea63-4415-b247-0252979d068&title=&width=630.3278540706356)
 Charts是我们自定义的一个图表组件，再在financial文件夹下新建一 个名为DataCom.vue的文件，进行常规的路由配置后，在其中编写如下 代码  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239841246-42879e44-00af-4336-a158-9aa3b0d2a91f.png#averageHue=%23e8e8e8&clientId=u5dad6cba-d530-4&from=paste&height=230&id=ud1ab010e&originHeight=280&originWidth=756&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=123465&status=done&style=none&taskId=ufa401533-8f1d-4eeb-9213-e85ca57da2f&title=&width=619.6721166156053)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239852193-ff7f1ebb-a1bd-427a-82ce-ec30798a40d4.png#averageHue=%23ededed&clientId=u5dad6cba-d530-4&from=paste&height=984&id=u787bc44e&originHeight=1200&originWidth=745&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=379815&status=done&style=none&taskId=u763b1ad3-2b51-45f8-a46c-70895672268&title=&width=610.6557233844259)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239870343-7f764b70-938e-4ca9-b0b4-49ce372ebbd0.png#averageHue=%23f0f0f0&clientId=u5dad6cba-d530-4&from=paste&height=884&id=u01d75ad8&originHeight=1078&originWidth=782&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=151805&status=done&style=none&taskId=ucc18be42-d503-4b72-9f68-18929f4d0a5&title=&width=640.9835915256658)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239876016-1a18ea21-1f82-4f3c-8c9d-329b7ef4e023.png#averageHue=%23f1f1f1&clientId=u5dad6cba-d530-4&from=paste&height=311&id=ue0cdc9df&originHeight=380&originWidth=775&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=40499&status=done&style=none&taskId=uc1bf1f8e-f90d-4f92-9779-74ff813237b&title=&width=635.2458867421881)
 现在，我们还需要一些模拟数据的支持，在Mock.js文件中添加两 个新的数据模拟方法，代码如下：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1689239886143-988cd0ef-3f7a-467b-8a76-fdce3b714597.png#averageHue=%23ececec&clientId=u5dad6cba-d530-4&from=paste&height=289&id=u1ed6c3ad&originHeight=352&originWidth=739&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=83957&status=done&style=none&taskId=uaedae0ae-053a-4394-9338-b0822dab4bb&title=&width=605.7376907128735)
至此，我们已经使用Vue完成了一个完整的电商后台管理系统。此 项目虽然略微复杂了一些，但是可以帮助你积累一些宝贵的实践经验。 在动手实现的过程中遇到任何问题，都可以参考本书附带资料中的代码 资源。也可以从如下地址找到
