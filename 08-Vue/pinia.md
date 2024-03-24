
vuex
在 Vue 3 中使用 Vuex 也是非常简单的。Vue 3中的组合式API（Composition API）允许我们在组件中使用需要的 Vuex 功能。

以下是在 Vue 3 中如何使用 Vuex：

1. 首先，安装 Vuex，并在你的应用程序入口文件中导入 Vuex。

```shell
npm install vuex
```

```javascript
import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

const app = createApp(App)
app.use(store)
app.mount('#app')
```

2. 然后，创建一个名为 `store.js` 的文件并在其中定义 Vuex store。你可以使用 `createStore` 函数来创建一个新的 Vuex store，并导出它。

```javascript
import { createStore } from 'vuex'

const store = createStore({
  state: {
    // 状态/数据
  },
  mutations: {
    // 同步修改状态的方法
  },
  actions: {
    // 异步操作的方法
  },
  getters: {
    // 获取状态的方法
  }
})

export default store
```

3. 在 `store.js` 文件中，你可以定义 state（状态），mutations（同步修改状态的方法），actions（异步操作的方法），getters（获取状态的方法）等。

4. 在组件中使用 Vuex，你可以使用 `useStore` 函数来访问 store 实例。在组件中通过 `import { useStore } from 'vuex'` 来导入 `useStore` 函数，然后使用它来获取 store 实例。

```javascript
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    // 使用 store 中的状态、方法、和 getter
    const stateValue = store.state.someState
    const mutationMethod = () => {
      // 调用 mutation 方法来修改状态
      store.commit('someMutation', payload)
    }
    const getterValue = store.getters.someGetter

    // 返回响应式数据和方法给模板使用
    return {
      stateValue,
      mutationMethod,
      getterValue,
    }
  }
}
```

在组件中，你可以通过 `store.state` 来访问状态，通过 `store.commit` 来调用 mutations 修改状态，通过 `store.dispatch` 来调用 actions，通过 `store.getters` 来获取状态。

这样，你就可以在 Vue 3 中使用 Vuex 了。请根据你的具体需求在你的应用程序中自定义状态、mutations、actions 和 getters。

# pinia

pinia 与 vue
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230723/image.3dgswrxfmjs0.webp)

## 运行过程

ToDoStore.js

```vue
import { defineStore } from 'pinia'
export const useTodoStore = defineStore('ToDoStore', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(todo){
      this.todos.push(todo)
    }
  },
  getters: {
    doneTodos: (state) => state.todos.filter(todo => todo.done) 
  }
})
```

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230723/5.1661185240516.1vekadhldo2o.gif)
