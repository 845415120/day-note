# Vue响应式原理

Vue.js 是采用***\*数据劫持\****结合***\*观察者模式\****的方式，通过

**Object.defineProperty()** 来劫持各个属性的setter，getter，在数据变动时发布消息给观察者，触发相应的监听回调。Watcher调用 组件中的 render函数 去生成虚拟DOM 对比老的DOM 通过diff算法以最小的代价更新DOM节点 是页面实现更新



**proxy**的优势如下

\- Proxy 可以直接监听对象而非属性，可以直接监听数组的变化；

\- Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；

\- Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；