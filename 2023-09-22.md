##### Vue.js中的插槽（Slot）是什么？请提供一个具有命名插槽和作用域插槽的示例。

答案：插槽是一种用于在组件中扩展内容的机制。命名插槽允许父组件向子组件插入具有特定名称的内容，而作用域插槽允许子组件将数据传递给父组件。示例：
```vue
<!-- 父组件 -->
<template>
  <div>
    <slot name="header"></slot>
    <slot :data="data"></slot>
  </div>
</template>

<!-- 子组件 -->
<template>
  <div>
    <slot name="header">默认标题</slot>
    <slot :data="computedData">{{ computedData }}</slot>
  </div>
</template>

```

##### React生命周期方法？列举一些常用的生命周期方法。

答案：React生命周期方法是在组件不同阶段执行的特定方法。以下是一些常用的React生命周期方法：

componentDidMount：组件挂载后立即调用。 componentDidUpdate：组件更新后调用。 componentWillUnmount：组件卸载前调用。 shouldComponentUpdate：决定组件是否需要重新渲染。 getDerivedStateFromProps：根据props的变化来更新状态。

  
