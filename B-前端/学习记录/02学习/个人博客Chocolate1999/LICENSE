# Pinia 是什么？

简单来说一个状态管理库与 vuex 的作用及定位一致。

同时支持 `vue2、3`（会有部分差异）最重要的一点是它支持 **组合式API**，也因为此它会比 `vuex` 更加灵活。

文中部分内容来自官网因为官网的例子非常好，本文讲解使用 `Pinia` 的基本过程及一些注意事项。

## 安装 Pinia

执行下方任意命令安装

```sh
sh复制代码yarn add pinia
# 或者使用 npm
npm install pinia
```

在 main.js 中加入

```js
js复制代码import { createApp } from 'vue'
// 引入 pinia
import { createPinia } from 'pinia'
import App from './App.vue'

// 创建 pinia 实例
const pinia = createPinia()
const app = createApp(App)

// 注册 pinia 插件
app.use(pinia)
app.mount('#app')
```

# Pinia 中的 Store

Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，**它承载着全局状态**。它有点像一个永远存在的组件，每个组件都可以读取和写入它。

Store 分为两种 `Option Store` 和 `Setup Store`，使用方式并无区别。

### Option Store

它有**三个概念**，[state](https://link.juejin.cn?target=https%3A%2F%2Fpinia.vuejs.org%2Fzh%2Fcore-concepts%2Fstate.html)、[getter](https://link.juejin.cn?target=https%3A%2F%2Fpinia.vuejs.org%2Fzh%2Fcore-concepts%2Fgetters.html) 和 [action](https://link.juejin.cn?target=https%3A%2F%2Fpinia.vuejs.org%2Fzh%2Fcore-concepts%2Factions.html)，我们可以假设这些概念相当于组件中的 `data`、 `computed` 和 `methods`。

```js
js复制代码export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

### Setup Store

它可以使用 `vue` 的**组合式API**。

在 `Setup Store` 中 `ref, reactive` 会被识别为 `state`， `computed` 会被识别为`getter`，函数会被识别为 `action`。

```js
js复制代码import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

## store的定义及使用

定义 store 需要一个独一无二的名字 `defineStore('独一无二的名字', () => {})`，`defineStore()` 的第二个参数可接受两类值：Setup 函数或 Option 对象。即Option Store与

将返回的函数命名为 **usexxxx**  是一个符合组合式函数风格的约定。

可以定义任意多的 store，但为了让使用 pinia 的益处最大化(比如允许构建工具自动进行代码分割以及 TypeScript 推断)，**你应该在不同的文件中去定义 store**。

`store` 是一个用 `reactive` 包装的对象，直接结构会丧失响应性，应该使用 `storeToRefs()`包装后进行解构，函数可以直接解构使用因为函数不具备响应式。

```js
js复制代码import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const store = useCounterStore()
    // `name` and `doubleCount` 都是响应式 refs
    // 这也将为由插件添加的属性创建 refs
    // 同时会跳过任何 action 或非响应式(非 ref/响应式)属性
    const { name, doubleCount } = storeToRefs(store)
    // 名为 increment 的 action 可以直接提取
    const { increment } = store

    return {
      name,
      doubleCount,
      increment,
    }
  },
})
```

## 应该在什么时候使用 Store?

一个 Store 应该包含可以在整个应用中访问的数据。这包括在许多地方使用的数据，例如显示在导航栏中的用户信息，以及需要通过页面保存的数据，例如一个非常复杂的多步骤表单。

> 就像眼镜一样

## 重置 store

通过调用 store 的 `$reset()` 方法将 state 重置为初始值。

## 监听 state 的变化

可以通过 store 的 `$subscribe()` 来实现

```js
js复制代码cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 和 cartStore.$id 一样
  mutation.storeId // 'cart'
  // 只有 mutation.type === 'patch object'的情况下才可用
  mutation.payload // 传递给 cartStore.$patch() 的补丁对象。

  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  localStorage.setItem('cart', JSON.stringify(state))
})
```

也可以在 `pinia` 实例上侦听整个 state。

```js
js复制代码watch(
  pinia.state,
  (state) => {
    // 每当状态发生变化时，将整个 state 持久化到本地存储。
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
```

## 监听 action

可以通过 `store.$onAction()` 来监听 action 和它们的结果。传递给它的回调函数会在 action 本身之前执行。

在组件卸载后自动移除监听，但可以通过传入第二个参数使其保留 `store.$onAction(callback, true)`

`after` 表示在 promise 解决之后，允许你在 action 解决后执行一个一个回调函数。

`onError` 允许你在 action 抛出错误或 reject 时执行一个回调函数。

```js
js复制代码const unsubscribe = someStore.$onAction(
  ({
    name, // action 名称
    store, // store 实例，类似 `someStore`
    args, // 传递给 action 的参数数组
    after, // 在 action 返回或解决后的钩子
    onError, // action 抛出或拒绝的钩子
  }) => {
    // 为这个特定的 action 调用提供一个共享变量
    const startTime = Date.now()
    // 这将在执行 "store "的 action 之前触发。
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // 这将在 action 成功并完全运行后触发。
    // 它等待着任何返回的 promise
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // 如果 action 抛出或返回一个拒绝的 promise，这将触发
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// 手动删除监听器
unsubscribe()
```

# 组件外的使用

需要先注册 pinia 否则 store 会调用错误-官方示例

```js
js复制代码import { useUserStore } from '@/stores/user'
import { createApp } from 'vue'
import App from './App.vue'

// ❌  失败，因为它是在创建 pinia 之前被调用的
const userStore = useUserStore()

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// ✅ 成功，因为 pinia 实例现在激活了
const userStore = useUserStore()
```

一个在 vue-router 中使用的示例 同样来自官方

```js
js复制代码import { createRouter } from 'vue-router'
const router = createRouter({
  // ...
})

// ❌ 由于引入顺序的问题，这将失败
const store = useStore()

router.beforeEach((to, from, next) => {
  // 我们想用这里的 store
  if (store.isLoggedIn) next()
  else next('/login')
})

router.beforeEach((to) => {
  // ✅ 这样做是可行的，因为路由器在安装完之后就会开始导航。
  // Pinia 也将被安装。
  const store = useStore()

  if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
})
```

# 目录最佳实践

目录命名为 `stores` 下边有解释。store 文件存储在 modules 目录下 通过 index 统一导出。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c43150d194324ad2b127eba2c771a9b3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

```ts
ts复制代码import { createPinia } from 'pinia';  
import piniaPersist from 'pinia-plugin-persist';  
  
import useUserStore from './modules/useUserStore';  
import useShoppingCartStore from './modules/useShoppingCartStore';  
  
const pinia = createPinia();  
pinia.use(piniaPersist);  
  
// 这里统一导出使用  
export { useUserStore, useShoppingCartStore };  
export default pinia;
```

这样做的原因在于可以一次引入多个 store 使用，而不用每次都单独引入。

```js
js复制代码
import useUserStore from '@/stores/modules/useUserStore';  
import useShoppingCartStore from '@/stores/modules/useShoppingCartStore';

// to

import { useUserStore, useShoppingCartStore } from '@/stores';
```

# pinia 与 vuex 有何不同

- pinia 没有 **mutation**。
- 无需要创建自定义的复杂包装器来支持 TypeScript，一切都可标注类型，API 的设计方式是尽可能地利用 TS 类型推理。
- 无过多的魔法字符串注入，只需要导入函数并调用它们，然后享受自动补全的乐趣就好。
- 无需要动态添加 Store 但仍然可以在任何时候手动使用一个 Store 来注册它。
- 不再有嵌套结构的**模块**。你仍然可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间，虽然是 Pinia 从设计上提供的是一个扁平的结构，但仍然能够在 Store 之间进行交叉组合。**你甚至可以让 Stores 有循环依赖关系**。
- 不再有**可命名的模块**。考虑到 Store 的扁平架构，Store 的命名取决于它们的定义方式，你甚至可以说所有 Store 都应该命名。
- Pinia 的目录一般被命名为 `stores` 而不是 `store`。这是为了强调 Pinia 可以使用多个 store，而不是 Vuex 的单一 store。
- 在 Pinia 中不需要动态注册模块。store 设计之初就是动态的，只有在需要时才会被注册。如果一个 store 从未被使用过，它就永远不会被 “注册”。
- 在 Vue 2 中，Pinia 使用的是 Vuex 的现有接口(因此不能与 Vuex 一起使用)。

 