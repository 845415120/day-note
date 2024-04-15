---
时间: 2023-12-12
标题: vue3.js 变化
图片: 
链接: 
tags: 
评价:
---
## 1.setup 组件选项
在开始使用组合式 API 前，需要一个可以实际使用它的位置。
官方将此位置称为setup它是一个组件选项，
```js
setup(props，context){
	return {
 		// 这里返回的任何内容，都可以用于组件的其余部分
 	}
    //组件的“其余部分”
}
```

此外，setup 函数返回的所有内容都暴露给组件的其余部分以及组件的模板使用。

setup 选项具有以下特点。
- setup 选项是一个函数。
- setup 选项函数接受两个参数，分别是 props 和 context。
- setup 选项函数通过 return 将内容返回，使其在组件其余部分使用。。如果要在 template模块或 setup 函数外部使用  那么必须使用 retum 关键字返回 

## 2，参数 props
setup 函数的第一个参数是 props。props 是响应式的，当传入新的 props 时，它将被更新
```js
export default {
	props:{
    title: String
    },
    setup(props){
     console.log(props.title)   	
    }
}
```

props 对象定义属性的方式和 Vuejs 2 一致 (第 2~4 行)，不点在于，Vuejs 2 使用 this 直接获取 props 对象的属性，如 this.title。Vuejs 3 并没有 this 对象，因此无法和 Vue,js 2 一样使用 this 获取 title，但 setup 函数在初始化时注入了 props 对象，因此在初始化时，可在 setup 函数内通过props.title 获取对象的属性数据(第6行)

## 3。参数 context
setup函数的第二个参数是context。context 是一个普通的JavaScript 上下文对象，它暴露了4个可使用的组件对象，分别是 attrs、slotsemit和expose，如代码清单43所示。

```js
setup(props，context){
	console.log(context.attrs)// Attribute (非响应式对象，等同于 Sattrs)
 	console.log(context.slots)//插槽(非响应式对象，等同于 Sslots)
   	console.log(context.emit)// 触发事件(方法，等同于 Semit)
    console.log(context.expose) // 暴露公共 property (函数)
}
```

context 是一个普通的 JavaScript 对象，可以安全地对 context 使用ES6解构。解构之后，即可直接使用解构后的对象，而不必以 context.xxx 的语法调用对象，如代码清单44 所示。

```js
setup(props, { attrs, slots, emit, expose }) (
    console.log(attrs)  // Attribute (非响应式对象，等同于 Sattrs)
}
```

**提示**: setup 函数内部的 this 不是该实例的引用，因为 setup 函数是在解析其他组件选项之前被调用的，所以 setup 函数内部的 this 指向与其他选项的 this 完全不同，这使得 setup 函数在和其他选项式 API一起使用时可能导致混淆，因此不能在 setup 函数中使用 this。



## template 支持 多根节点
vue2
```
<template>
  <div> //根节点包裹
    <header> ...</header>
  </div>
</template>
```

vue3
```js
<template>
  <header>...</header>
  <main></main>
  <footer></footer>
</template>
```

## 单文件组件组合式API

git remote add origin git@github.com:845415120/my-history.git

git push -u origin master



