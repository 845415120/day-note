# React  基础

全局安装
````npm install -g create-react-app````

创建项目
`create-react-app your-app 注意命名方式`

## 创建和嵌套组件

大写字母命名,闭合标签

React 应用程序是由 组件 组成的。一个组件是 UI（用户界面）的一部分，它拥有自己的逻辑和外观。组件可以小到一个按钮，也可以大到整个页面。

React 组件是返回标签的 JavaScript 函数：

```JSX
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

至此，你已经声明了 MyButton，你可以把它嵌套到另一个组件中：

```JSX
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。

## 导出和导入一个组件

一个文件中只能有一个默认导出 `export default`
可以有多个具名导出 `export function Button() {}`

默认导入和具名导入 具名有`{}`

## 使用 JSX

JSX 比 HTML 更加严格。你必须闭合标签，如`<br />`。你的组件也不能返回多个 JSX 标签。你必须将它们包裹到一个共享的父级中，比如 `<div>...</div>`或使用空的 `<>...</>` 包裹：

使用驼峰式命名法给 大部分属性命名
例如，需要用strokeWidth 代替 stroke-width

```JSX
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

## 添加样式

```JSX
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

```

## 将 Props 传递给组件

React 组件使用 props 来互相通信

- 如何向组件传递 props
- 如何从组件读取 props
- 如何为 props 指定默认值
- 如何给组件传递 JSX
- Props 如何随时间变化

### Props

是你传递给 JSX 标签的信息
例如，className、src、alt、width 和 height 便是一些可以传递给` <img> `的 props

### 向组件传递 props

Profile 组件没有向它的子组件 Avatar 传递任何 props

```JSX
export default function Profile() {
  return (
    <Avatar />
  );
}
```

- **步骤 1: 将 props 传递给子组件**

首先，将一些 props 传递给 Avatar。例如，让我们传递两个 props：person（一个对象）和 size（一个数字）：

```JSX
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

现在，你可以在 Avatar 组件中读取这些 props 了。

- **步骤 2: 在子组件中读取 props**

```JSX
function Avatar({ person, size }) {
  // 在这里 person 和 size 是可访问的
}
```

在声明 props 时， 不要忘记 ( 和 ) 之间的一对花括号 { 和 }  ：

- **嵌套组件时**:

```dotnetcli
<Card>
  <Avatar />
</Card>
```

父组件将在名为 children 的 prop 中接收到该内容
可以将带有 children prop 的组件看作有一个“洞”，可以由其父组件使用任意 JSX 来“填充

## 条件渲染

在 React 中，没有特殊的语法来编写条件。因此，你将使用与编写常规 JavaScript 代码时相同的技术

- if
- 三元运算符   条件 ? True :False

## 渲染列表

- **如何通过 JavaScript 的 map() 方法从数组中生成组件**

你将依赖 JavaScript 的特性，例如 for 循环 和 array 的 map() 函数 来渲染组件列表
例如

```JSX
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

在你的组件中，使用 map() 函数将一个产品数组，转换为 `<li>`标签的元素列表:

```JSX
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

注意，` <li> `有一个 key 属性。对于列表中的每一个元素，你应该传递一个字符串或者数字给 key，用于在其兄弟节点中唯一标识该元素。

- **如何通过 JavaScript 的 filter() 筛选需要渲染的组件**

对数组项进行过滤

使用 JavaScript 的 filter() 方法来返回满足条件的项

1.创建 一个用来存化学家们的新数组 chemists，这里用到 filter() 方法过滤 people 数组来得到所有的化学家，过滤的条件应该是 person.profession === '化学家'：

```JSX
const chemists = people.filter(person =>
  person.profession === '化学家'
);
```

2.接下来 用 map 方法遍历 chemists 数组:

```jsx
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       因{person.accomplishment}而闻名世界
     </p>
  </li>
);
```

3.最后，返回 listItems：

```jsx
return <ul>{listItems}</ul>;
```

- **何时以及为何使用 React 中的 key**

用 key 保持列表项的顺序

你必须给数组中的每一项都指定一个 key——它可以是字符串或数字的形式，只要能唯一标识出各个数组项就行：
`<li key={person.id}>`

## 添加交互

- 如何处理用户发起的事件
- 如何用状态使组件“记住”信息
- React 是如何分两个阶段更新 UI 的
- 为什么状态在你改变后没有立即更新
- 如何排队进行多个状态的更新
- 如何更新状态中的对象
- 如何更新状态中的数组

### 响应事件

你可以通过在组件中声明 事件处理 函数来响应事件：
添加点击事件

- 在 Button 组件 内部 声明一个名为 handleClick 的函数。
- 实现函数内部的逻辑（使用 alert 来显示消息）。
- 添加 onClick={handleClick} 到`<button>` JSX 中。

事件处理函数有如下特点:

- 通常在你的组件 内部 定义。
- **名称以 handle 开头，后跟事件名称。**
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230711/image.5stcky2v3f00.webp)
注意，onClick={handleClick} 的结尾没有小括号！不要 调用 事件处理函数：你只需 传递给事件 即可。当用户点击按钮时，React 会调用你的事件处理函数。
- **声明响应函数这两种情况**
  - `<button onClick={handleClick}> 传递了 handleClick 函数。`
  - `<button onClick={() => alert('...')}> 传递了 () => alert('...') 函数。`

## 更新界面

通常，你会希望你的组件 “记住” 一些信息并展示出来。例如，也许你想计算一个按钮被点击的次数。要做到这一点，你需要在你的组件中添加 state。
首先，从 React 引入 useState：
`import { useState } from 'react';`
现在你可以在你的组件中声明一个 state 变量：

```
function MyButton() {
  const [count, setCount] = useState(0);
  // ...
```

当前的 state（count），以及用于更新它的函数（setCount）。
第一次显示按钮时，count 的值为 0，因为你把 0 传给了 useState()。当你想改变 state 时，调用 setCount() 并将新的值传递给它。点击该按钮计数器将递增：

```JSX
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

## Hook钩子函数

以 use 开头的函数被称为 Hook钩子函数。
useState 是 React 提供的一个内置 Hook

## 组件间共享数据

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230711/image.7lgckp9w5n40.webp)
共享数据并一起更新

将 MyButton 的 state 上移到 MyApp 中：
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230711/image.42oqmknz2u20.webp)

```JSX
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

```
