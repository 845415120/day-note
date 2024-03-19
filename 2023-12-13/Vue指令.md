---
时间: 2023-12-13
标题: Vue 指令卡
图片: 
链接: 
tags: 
评价:
---
|指令|说明|语法|
|---|---|---|
|`v-for`|用于为数组渲染一个列表|`v-for="item in list"`|
|`v-bind`|用于绑定 DOM 属性|`v-bind:src="url"`|
||简写为 `:src="url"`||
|`v-on`|用于绑定 DOM 事件|`v-on:click="function"`|
||简写为 `@click="function"`||
|`v-if`|渲染指令。根据表达式 true 或 false 操作 DOM 元素，实现对 DOM 元素的删除和插入操作|`v-if="expression"`|
|`v-else`|与 `v-if` 同时使用，`v-if` 结果为 false 时，则执行 `v-else`|`v-else`|
|`v-show`|渲染指令，根据表达式 true 或 false 操作 DOM 元素，实现对 DOM 元素的显示和隐藏操作|`v-show="expression"`|
|`v-model`|双向数据绑定，常用于表单元素|`v-model="value"`|
|`v-html`|用于渲染文本，可将带有 HTML 标签的文本渲染为 DOM 元素|`v-html="value"`|
|`v-text`|用于渲染文本，可将 HTML 标签作为普通文本进行渲染|`v-text="value"`|


```vue
v-for
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

// Define reactive state
const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
]);

</script>
```
```

```