Mobx
## 1.Mobx介绍
### 1.什么是Mobx
![](Pasted%20image%2020231002150117.png)
一个可以和React良好配合的集中状态管理工具mobx和react的关系，相当于vuex和vue同类工具还有
1. redux
2. dva
3. recoil
### 2.有什么优势
1.简单
编写无模板的极简代码来精准描述你的意图 (原生js)
2.轻松实现最优渲染
依赖自动追踪最小渲染优化
3.架构自由
可移植，可测试
## 2.Mobx - 环境搭建
Mobx是一个独立的响应式的库，可以独立于任何UI框架而存在，但是通常人们把它和React来绑定使使用，用Mobx来做响应式数据建模，React作为UI视图框架渲染内容
所以配置方面我们需要三个部分
- 1.一个通过create-react-app 创建好的react项目环境
![](Pasted%20image%2020231002150319.png)
- 2.安装 mobx和 mobx-react-lite
![](Pasted%20image%2020231002150358.png)
- 3.一个链接mobx和react的中间部件
## 3.Mobx- 第一个store
第一个store - 理解需求
需求: 使用Mobx实现计数器案例，mobx负责计数逻辑，react负责渲染和事件触发
![](Pasted%20image%2020231002150925.png)
### 初始化mobx
实现步骤
- 1.定义数据状态 (state)
- 2.数据响应式处理
- 3.定义action函数 (修改数据)
- 4.实例化并导出实例
![](Pasted%20image%2020231002151020.png)
### 连接react
实现步骤
- 1.导入store实例
- 2.使用store中的数据
- 3.修改store中的数据
- 4.让组件视图响应数据变化
![](Pasted%20image%2020231002151548.png)
## 4.Mobx - computed
### computed - 是什么
概念: 基于现有的数据做计算得到新的数据，并且可以在依赖的数据发生变化时立刻进行计算
![](Pasted%20image%2020231002151625.png)
### 如何实现
实现步骤:
1.声明一个存在的数据
2.定义get计算属性
3.在makeAutoObservable方法中标记
![](Pasted%20image%2020231002151935.png)
## 5.Mobx - 模块化
### 是什么
一个项目有很多业务模块，我们不能把所有的代码都写到一起，这样很难维护，为了提供可维护性需要引入模块化
![](Pasted%20image%2020231002152040.png)
### 怎么做
1.拆分Count和List模块，每个模块定义自己独立的state/actions
2.在store/indexjs中导入拆分之后的模块，进行模块组合
3.使用React的 useContext机制导出统一的useStore方法，供业务组件使用
![](Pasted%20image%2020231002152133.png)
代码实现
![](Pasted%20image%2020231002152154.png)
## 总结
1.初始化mobx的过程是怎样的 ?
==声明数据 -> 响应式处理 -> 定义action函数 ->实例化导出==
2.mobx如何配合react, 需要依赖什么包 ?
==mobx-react-lite作为链接包，导出observer方法，包裹组件 (只能和函数组件配合)==
3.模块化解决了什么问题 ?
==维护性问题==
4.如何实现mobx的模块化 ?
==按照功能拆分store模块，根模块中组合子模块，利用context机制依赖注入==
## 6.Mobx + React实战案例 Todos
#### 1.渲染列表数据
```jsx
import { useStore } from '../store'
 const { taskStore } = useStore()
{

            taskStore.list.map(item => (
              <li
                className={item.isDone ? "todo completed" : "todo"}
                key={item.id}
              >
                <div className="view">
                  <input className="toggle" type="checkbox" defaultChecked={true} />
                  <label >{item.name}</label>
                  <button className="destroy"></button>
                </div>
              </li>
            ))
          }
```
2.单选功能


3.全选功能
4.删除功能
5.回车新增功能
6.统计计数功能
![](Pasted%20image%2020231002152335.png)
Mobx实战案例- Todos需求实现
实现步骤
1.打开项目地址，克隆项目到本地
git clone https://gitee.com/react-course-series/mobx react.git
2.安装所有依赖
`yarn install`
说明:，mvc-finished分支为完整版本，如需要可参考master分支为纯模板
## Mobx 和 React 职责划分
Store
1.业务状态数据
2.业务状态操作逻辑
React
1.渲染业务数据
2.UI临时状态维护
3.事件触发，调用Mobx