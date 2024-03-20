# vue3 setup

## 引入组件

```vue
<template>
  <app-topnav></app-topnav>
</template>

<script setup lang="ts">
  import AppTopnav from "./components/app-topnav.vue";
</script>

```

# vue2

1. 使用 import 关键字

```javascript
// 引入组件
import HelloWorld from '@/components/HelloWorld.vue'

// 在 Vue 实例中注册组件
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
```

2. 使用 Vue.component 方法

```javascript
// 引入组件
import HelloWorld from '@/components/HelloWorld.vue'

// 全局注册组件
Vue.component('hello-world', HelloWorld)
```

# scoped 仅作用于当前组件

setup 不需要 export default {...}
