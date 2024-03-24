# Hooks基础

## Hooks概念理解
> Hooks的本质：**一套能够使函数组件更强大，更灵活的“钩子”**

React体系里组件分为 类组件 和 函数组件

经过多年的实战，函数组件是一个更加匹配React的设计理念 `UI = f(data)`，也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，**为了能让函数组件可以拥有自己的状态**，所以从react v16.8开始，Hooks应运而生

**注意点：**

1. 有了hooks之后，为了兼容老版本，class类组件并没有被移除，俩者都可以使用
2. 有了hooks之后，不能在把函数成为无状态组件了，因为hooks为函数组件提供了状态
3. hooks只能在函数组件中使用

### 2. Hooks解决了什么问题

Hooks的出现解决了俩个问题    1. 组件的状态逻辑复用  2.class组件自身的问题

1. 组件的逻辑复用

   在hooks出现之前，react先后尝试了 mixins混入，HOC高阶组件，render-props等模式

   但是都有各自的问题，比如mixin的数据来源不清晰，高阶组件的嵌套问题等等

2. class组件自身的问题

   class组件就像一个厚重的‘战舰’ 一样，大而全，提供了很多东西，有不可忽视的学习成本，比如各种生命周期，this指向问题等等，而我们更多时候需要的是一个轻快灵活的'快艇'

## useState
### 1. 基础使用
`本节任务:` 能够学会useState的基础用法
**作用**
​	useState为函数组件提供状态（state）
**使用步骤**
1. 导入 `useState` 函数
2. 调用 `useState` 函数，并传入状态的初始值
3. 从`useState`函数的返回值中，拿到状态和修改状态的方法
4. 在JSX中展示状态
5. 调用修改状态的方法更新状态
**代码实现**

```jsx
import { useState } from 'react'

function App() {
  // 参数：状态初始值比如,传入 0 表示该状态的初始值为 0
  // 返回值：数组,包含两个值：1 状态值（state） 2 修改该状态的函数（setState）
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}
export default App
```

### 2. 状态的读取和修改

`本节任务:` 能够理解useState下状态的读取和修改

**读取状态**

​	该方式提供的状态，是函数内部的局部变量，可以在函数内的任意位置使用

**修改状态**

1. setCount是一个函数，参数表示`最新的状态值`
2. 调用该函数后，将使用新值替换旧值
3. 修改状态后，由于状态发生变化，会引起视图变化

**注意事项**

​	修改状态的时候，一定要使用新的状态替换旧的状态，不能直接修改旧的状态，尤其是引用类型

### 3. 组件的更新过程 

`本节任务:`  能够理解使用hook之后组件的更新情况

函数组件使用 **useState** hook 后的执行过程，以及状态值的变化 

- 组件第一次渲染
  1. 从头开始执行该组件中的代码逻辑
  2. 调用 `useState(0)` 将传入的参数作为状态初始值，即：0
  3. 渲染组件，此时，获取到的状态 count 值为： 0

- 组件第二次渲染
  1. 点击按钮，调用 `setCount(count + 1)` 修改状态，因为状态发生改变，所以，该组件会重新渲染
  2. 组件重新渲染时，会再次执行该组件中的代码逻辑
  3. 再次调用 `useState(0)`，此时 **React 内部会拿到最新的状态值而非初始值**，比如，该案例中最新的状态值为 1
  4. 再次渲染组件，此时，获取到的状态 count 值为：1

注意：**useState 的初始值(参数)只会在组件第一次渲染时生效**。也就是说，以后的每次渲染，useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值

```jsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // 在这里可以进行打印测试
  console.log(count)
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}
export default App
```



### 4. 使用规则

`本节任务:`  能够记住useState的使用规则

1. `useState` 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态

   ```js
   function List(){
     // 以字符串为初始值
     const [name, setName] = useState('cp')
     // 以数组为初始值
     const [list,setList] = useState([])
   }
   ```

2. `useState` 注意事项

   1. 只能出现在函数组件中

   2. 不能嵌套在if/for/其它函数中（react按照hooks的调用顺序识别每一个hook）

      ```js
      let num = 1
      function List(){
        num++
        if(num / 2 === 0){
           const [name, setName] = useState('cp') 
        }
        const [list,setList] = useState([])
      }
      // 俩个hook的顺序不是固定的，这是不可以的！！！
      ```

   3. 可以通过开发者工具查看hooks状态

## useEffect

### 1. 理解函数副作用

`本节任务:` 能够理解副作用的概念

**什么是副作用**

​	副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于 React 组件来说，**主作用就是根据数据（state/props）渲染 UI**，除此之外都是副作用（比如，手动修改 DOM）

**常见的副作用**

1. 数据请求 ajax发送
2. 手动修改dom
3. localstorage操作

useEffect函数的作用就是为react函数组件提供副作用处理的！

### 2. 基础使用

`本节任务:` 能够学会useEffect的基础用法并且掌握默认的执行执行时机

**作用**

​	为react函数组件提供副作用处理

**使用步骤**

1. 导入 `useEffect` 函数
2. 调用 `useEffect` 函数，并传入回调函数
3. 在回调函数中编写副作用处理（dom操作）
4. 修改数据状态
5. 检测副作用是否生效

**代码实现**

```jsx
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
 
  useEffect(()=>{
    // dom操作
    document.title = `当前已点击了${count}次`
  })
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}

export default App

```



### 3. 依赖项控制执行时机

`本节任务:` 能够学会使用依赖项控制副作用的执行时机

**1. 不添加依赖项**

> 组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
>
> 1. 组件初始渲染
> 2. 组件更新 （不管是哪个状态引起的更新）

```jsx
useEffect(()=>{
    console.log('副作用执行了')
})
```



**2. 添加空数组**

> 组件只在首次渲染时执行一次

```jsx
useEffect(()=>{
	 console.log('副作用执行了')
},[])
```



**3. 添加特定依赖项**

> 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行

```jsx
function App() {  
    const [count, setCount] = useState(0)  
    const [name, setName] = useState('zs') 
    
    useEffect(() => {    
        console.log('副作用执行了')  
    }, [count])  
    
    return (    
        <>      
         <button onClick={() => { setCount(count + 1) }}>{count}</button>      
         <button onClick={() => { setName('cp') }}>{name}</button>    
        </>  
    )
}
```

**注意事项**

useEffect 回调函数中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现

## 阶段小练习 - 自定义hook

**需求描述**：自定义一个hook函数，实现获取滚动距离Y

> `const [y] = useWindowScroll()`

```js
import { useState } from "react"

export function useWindowScroll () {
  const [y, setY] = useState(0)
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    setY(h)
  })
  return [y]
}
```

**需求描述：** 自定义hook函数，可以自动同步到本地LocalStorage 

> `const [message, setMessage] = useLocalStorage(key，defaultValue)`
>
> 1. message可以通过自定义传入默认初始值
> 2. 每次修改message数据的时候 都会自动往本地同步一份

```js
import { useEffect, useState } from 'react'

export function useLocalStorage (key, defaultValue) {
  const [message, setMessage] = useState(defaultValue)
  // 每次只要message变化 就会自动同步到本地ls
  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [message, key])
  return [message, setMessage]
} 
```



# Hooks进阶

## useState - 回调函数的参数

`本节任务:`  能够理解useState回调函数作为参数的使用场景

**使用场景**

参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过计算才能获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

**语法**

```jsx
const [name, setName] = useState(()=>{    // 编写计算逻辑    return '计算之后的初始值'})
```

**语法规则**

1. 回调函数return出去的值将作为 `name` 的初始值
2. 回调函数中的逻辑只会在组件初始化的时候执行一次

**语法选择**

1. 如果就是初始化一个普通的数据 直接使用 `useState(普通数据)` 即可
2. 如果要初始化的数据无法直接得到需要通过计算才能获取到，使用`useState(()=>{})` 

**来个需求**

![](state01.png)

```jsx
import { useState } from 'react'

function Counter(props) {
  const [count, setCount] = useState(() => {
    return props.count
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

function App() {
  return (
    <>
      <Counter count={10} />
      <Counter count={20} />
    </>
  )
}

export default App
```



## useEffect - 清理副作用

`本节任务:`  能够掌握清理useEffect的方法

**使用场景**

在组件被销毁时，如果有些副作用操作需要被清理，就可以使用此语法，比如常见的定时器 

**语法及规则**

```js
useEffect(() => {   
    console.log('副作用函数执行了')    
    // 副作用函数的执行时机为: 在下一次副作用函数执行之前执行   
    return () => {      
        console.log('清理副作用的函数执行了')      
        // 在这里写清理副作用的代码    
    }
})
```

**定时器小案例**

> 添加副作用函数前：组件虽然已经不显示了，但是定时器依旧在运行

```jsx
import { useEffect, useState } from 'react'
function Foo() {  
    useEffect(() => {    
        setInterval(() => {     
            console.log('副作用函数执行了')    
        }, 1000)  
    }) 
    return <div>Foo</div>  
}


function App() {  
    const [flag, setFlag] = useState(true)  
    return (    
        <>      
          <button onClick={() => setFlag(false)}>click</button>      
         {flag ? <Foo/> : null}    
        </>  
    )
}

export default App
```

> 添加清理副作用函数后：一旦组件被销毁，定时器也被清理

```jsx
import { useEffect, useState } from 'react'

function Foo() {  
    useEffect(() => {   
        const timerId = setInterval(() => {      
            console.log('副作用函数执行了')    
        }, 1000)   
        // 添加清理副租用函数    
        return () => {      
            clearInterval(timerId)    
        }  
    })  
    return <div>Foo</div>
}
function App() {  
    const [flag, setFlag] = useState(true)  
    return (   
        <>      
          <button onClick={() => setFlag(false)}>click</button>      
         {flag ? <Foo/> : null}    
        </>    
    )
}

export default App
```

## useEffect - 发送网络请求

`本节任务:`  能够掌握使用useEffect hook发送网络请求

**使用场景**

如何在useEffect中发送网络请求，并且封装同步 async await操作

**语法要求**

不可以直接在useEffect的回调函数外层直接包裹 await ，因为**异步会导致清理函数无法立即返回**

```js
useEffect(async ()=>{    
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')   
    console.log(res)
},[])
```

**正确写法**

在内部单独定义一个函数，然后把这个函数包装成同步

```jsx
useEffect(()=>{   
    async function fetchData(){      
       const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            console.log(res)   
    } 
},[])
```

## useRef

`本节任务:`  能够掌握使用useRef获取真实dom或组件实例的方法

**使用场景**

在函数组件中获取真实的dom元素对象或者是组件对象

**使用步骤**

1. 导入 `useRef` 函数
2. 执行 `useRef` 函数并传入null，返回值为一个对象 内部有一个current属性存放拿到的dom对象（组件实例）
3. 通过ref 绑定 要获取的元素或者组件

**获取dom**

```jsx
import { useEffect, useRef } from 'react'
function App() {  
    const h1Ref = useRef(null)  
    useEffect(() => {    
        console.log(h1Ref)  
    },[])  
    return (    
        <div>      
            <h1 ref={ h1Ref }>this is h1</h1>    
        </div>  
    )
}
export default App
```

**获取组件实例**

> 函数组件由于没有实例，不能使用ref获取，如果想获取组件实例，必须是类组件

`Foo.js`

```jsx
class Foo extends React.Component {  
    sayHi = () => {    
        console.log('say hi')  
    }  
    render(){    
        return <div>Foo</div>  
    }
}
    
export default Foo
```

`App.js`

```jsx
import { useEffect, useRef } from 'react'
import Foo from './Foo'
function App() {  
    const h1Foo = useRef(null)  
    useEffect(() => {    
        console.log(h1Foo)  
    }, [])  
    return (    
        <div> <Foo ref={ h1Foo } /></div>  
    )
}
export default App
```

## useContext

`本节任务:`  能够掌握hooks下的context使用方式

![](D:/react课程全系列/课程讲义及资源/课程讲义/1.React基础课/assets/context.png)

**实现步骤**

1. 使用`createContext` 创建Context对象
2. 在顶层组件通过`Provider` 提供数据
3. 在底层组件通过`useContext`函数获取数据

**代码实现**

```jsx
import { createContext, useContext } from 'react'
// 创建Context对象
const Context = createContext()

function Foo() {  
    return <div>Foo <Bar/></div>
}

function Bar() {  
    // 底层组件通过useContext函数获取数据  
    const name = useContext(Context)  
    return <div>Bar {name}</div>
}

function App() {  
    return (    
        // 顶层组件通过Provider 提供数据    
        <Context.Provider value={'this is name'}>     
            <div><Foo/></div>    
        </Context.Provider>  
    )
}

export default App
```

## 阶段小练习-todoMvc-hook版

案例仓库地址：https://gitee.com/react-course-series/react-tomvc-hook

**项目演示步骤：**

1. 克隆项目到本地

   ```bash
   git clone  https://gitee.com/react-course-series/react-tomvc-hook.git
   ```

2. 安装必要依赖

   ```bash
   yarn
   ```

3. 开启mock接口服务，**保持窗口不关闭**  ！！！！！

   ```bash
   # 启动mock服务
   yarn mock-serve
   ```

4. **另起一个bash窗口**开启前端服务

   ```bash
   yarn start
   ```

5. 浏览器输入 localhost:3000演示效果

**项目开发步骤：**

1. 切换到todo-test分支

   ```bash
   git checkout todo-test
   ```

2. 打开 app.js

   已有基础样板代码，在这个基础上编写业务逻辑即可

3. 接口文档

   | 接口作用 | 接口地址                              | 接口方法 | 接口参数               |
   | -------- | ------------------------------------- | -------- | ---------------------- |
   | 获取列表 | http://localhost:3001/data            | GET      | 无                     |
   | 删除     | http://localhost:3001/data/:id        | DELETE   | id                     |
   | 搜索     | http://localhost:3001/data/?q=keyword | GET      | name（以name字段搜索） |

**实现功能**

| 功能         | 核心思路                             |
| ------------ | ------------------------------------ |
| 表格数据渲染 | elementPlus el-table组件使用         |
| 删除功能     | 获取当前id  调用接口                 |
| 搜索功能     | 用的依旧是列表接口，多传一个name参数 |
| 清除搜索功能 | 清空搜索参数  重新获取列表           |

 
