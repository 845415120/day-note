# Vue 基础

安装
npm init vue@3

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

举例

```Vue
data() {
  return {
    name: 'Vue.js'
  }
},
methods: {
  greet(event) {
    // 方法中的 `this` 指向当前活跃的组件实例
    alert(`Hello ${this.name}!`)
    // `event` 是 DOM 原生事件
    if (event) {
      alert(event.target.tagName)
    }
  }
}
<!-- `greet` 是上面定义过的方法名 -->
<button @click="greet">Greet</button>
```

**事件修饰符**
Vue 为 v-on 提供了事件修饰符 修饰符是用` . `表示的指令后缀

- .stop

```Vue
<!-- 单击事件将停止传递 -->
<a @click.stop="doThis"></a>

```

**按键修饰符**
仅在key为Enter时调用submit
`<input @keyup.enter="submit" />`

## 表单输入绑定  v-model

基本用法

**文本**

```Vue
<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />
```

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.1fozi9cjzx28.webp)
**复选框**
单一的复选框，绑定布尔类型值：

```Vue
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.3c0wumxcoyi0.webp)

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.4305t9cnf7e0.webp)
**单选按钮**
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.2germ5zy5rpc.webp)
**选择器**
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.88e5p3cp9p4.webp)
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.o525o8q1b80.webp)
选择器的选项可以使用 v-for 动态渲染：

```Vue
export default {
  data() {
    return {
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}

<select v-model="selected">
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>

<div>Selected: {{ selected }}</div>

```

使用 v-bind 将值绑定到当前组件实例上的动态数据

```Vue
<input type="radio" v-model="pick" :value="first" />
<input type="radio" v-model="pick" :value="second" />
```

pick 会在第一个按钮选中时被设为 first，在第二个按钮选中时被设为 second。

## 生命周期钩子

举例来说，mounted 钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码：
注册周期钩子

```vue
export default {
  mounted() {
    console.log(`the component is now mounted.`)
  }
}
```

<https://cn.vuejs.org/api/options-lifecycle.html#serverprefetch>
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.6wccn9kr08g0.webp)

## 侦听器  watch:{}

在每次响应式属性发生变化时触发一个函数。

```Vue
export default {
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  watch: {
    // 每当 question 改变时，这个函数就会执行
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    }
  }
}
```

```HTML
<p>
  Ask a yes/no question:
  <input v-model="question" />
</p>
<p>{{ answer }}</p>
```

## 模板引用 ref

需要直接访问底层 DOM 元素
`ref`它允许我们在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用

### 组件上的 ref

引用中获得的值是组件实例

```vue
<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  mounted() {
    // this.$refs.child 是 <Child /> 组件的实例
  }
}
</script>

<template>
  <Child ref="child" />
</template>

```

- 如果一个子组件使用的是选项式 API ，被引用的组件实例和该子组件的 this 完全一致  
- 这意味着父组件对子组件的每一个属性和方法都有完全的访问权
- 这使得在父组件和子组件之间创建紧密耦合的实现细节变得很容易，当然也因此，应该只在绝对需要时才使用组件引用。
- 大多数情况下，你应该首先使用标准的 props 和 emit 接口来实现父子组件交互。

### v-for 中的模板引用

### 访问模板引用

挂载结束后引用都会被暴露在 `this.$refs`之上：

```vue
<script>
export default {
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<template>
  <input ref="input" />
</template>
```

注意，你只可以在组件挂载后才能访问模板引用。如果你想在模板中的表达式上访问 `$refs.input`，在初次渲染时会是 null。这是因为在初次渲染前这个元素还不存在呢！

## 组件基础

定义一个组件

### 使用组件

```vue
<script>
import ButtonCounter from './ButtonCounter.vue'

export default {
  components: {
    ButtonCounter
  }
}
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>
```

### 传递 props

父组件 向 子组件 传值
在组件的 props 列表上声明

```Vue
export default {
  // ...
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  }
}
```

这种情况下，我们可以使用 v-for 来渲染它们：

``` Vue

<BlogPost
  v-for="post in posts"
  :key="post.id"
  :title="post.title"
 />
```

## 监听事件 emits

父组件可以通过 v-on 或 @ 来选择性地监听子组件上抛的事件，就像监听原生 DOM 事件那样：

```Vue
<BlogPost
  ...
  @enlarge-text="postFontSize += 0.1"
 />
```

子组件可以通过调用内置的 $emit 方法，通过传入事件名称来抛出一个事件：

```Vue
<!-- BlogPost.vue, 省略了 <script> -->
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
```

我们可以通过 emits 选项来声明需要抛出的事件：

```Vue
<script>
export default {
  props: ['title'],
  emits: ['enlarge-text']
}
</script>
```

## 插槽

### 通过插槽来分配内容

`<slot>`
一些情况下我们会希望能和 HTML 元素一样向组件中传递内容：

```vue

<AlertBox>
  Something bad happened.    <slot />
</AlertBox>
```

这可以通过 Vue 的自定义` <slot> `元素来实现：

如上所示，我们使用 `<slot>`作为一个占位符，父组件传递进来的内容就会渲染在这里。

## 动态组件

有些场景会需要在两个组件间来回切换，比如 Tab 界面：
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230712/image.55g669x52qs0.webp)
上面的例子是通过 Vue 的 `<component>`元素和特殊的 `is`  实现的：

```Vue
<!-- currentTab 改变时组件也改变 -->
<component :is="currentTab"></component>
```

在上面的例子中，被传给 :is 的值可以是以下几种：

- 被注册的组件名
- 导入的组件对象
你也可以使用 `is` 来创建一般的 HTML 元素。
