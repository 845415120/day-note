![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1663398743037-264f28de-161d-459e-b82f-cd38b085711e.jpeg)

# 宏任务和微任务、事件循环

JavaScript是单线程的，也就是说，同一个时刻，JavaScript只能执行一个任务，其他任务只能等待。

## JavaScript是单线程的

js是运行于浏览器的脚本语言，因其经常涉及操作dom，如果是多线程的，也就意味着，同一个时刻，能够执行多个任务。  
试想，如果一个线程修改dom，另一个线程删除dom，那么浏览器就不知道该先执行哪个操作。  
所以js执行的时候会按照一个任务一个任务来执行。  
最重要的原因，是JS在设计的年代，计算机的配置非常低下，根本没有考虑多线程的事。

## 同步任务和异步任务

试想一下，如果js的任务都是同步的，那么遇到定时器、网络请求等这类型需要延时执行的任务会发生什么？  
页面可能会瘫痪，需要暂停下来等待这些需要很长时间才能执行完毕的代码  
所以，又引入了异步任务。

- 同步任务：同步任务不需要进行等待可立即看到执行结果，比如console
- 异步任务：异步任务需要等待一定的时候才能看到结果，比如setTimeout、网络请求

## 事件循环（Event Loop）

事件循环的比较简单，它是一个在  "**JavaScript 引擎等待任务** "，"**执行任务** "和"**进入休眠状态等待更多任务** "这几个状态之间转换的无限循环。引擎的一般算法：

1. 当有任务时：

- 从最先进入的任务开始执行。

2. 没有其他任务，休眠直到出现任务，然后转到第 1 步。

## 任务队列

根据规范，事件循环是通过任务队列的机制来进行协调的。一个 Event Loop 中，可以有一个或者多个任务队列(task queue)，一个任务队列便是一系列有序任务(task)的集合；每个任务都有一个任务源(task source)，源自同一个任务源的 task 必须放到同一个任务队列，从不同源来的则被添加到不同队列。setTimeout/Promise 等API便是任务源。  
在事件循环中，每进行一次循环的关键步骤如下：

- 在此次循环中选择最先进入队列的任务(oldest task)，如果有则执行(一次)
- 检查是否存在 微任务（Microtasks），如果存在则不停地执行，直至清空 微任务队列（Microtasks Queue）
- 更新 render（DOM渲染）
- 以上为一次循环，主线程重复执行上述步骤

在上述循环的基础上需要了解几点：

- JS分为同步任务和异步任务
- 同步任务都在主线程上执行，形成一个执行栈
- 主线程之外，宿主环境管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件。
- 一旦执行栈中的所有同步任务执行完毕（此时JS引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。

## 宏任务

(macro)task，可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。

|   |   |   |
|---|---|---|
|任务（代码）|宏任务|环境|
|script|宏任务|浏览器|
|事件|宏任务|浏览器|
|网络请求（Ajax）|宏任务|浏览器|
|setTimeout() 定时器|宏任务|浏览器 / Node|
|fs.readFile() 读取文件|宏任务|Node|

比如去银行排队办业务，每个人的业务就相当于是一个宏任务；

## 微任务

微任务（microtask）是宏任务中的一个部分，它的执行时机是在同步代码执行之后，下一个宏任务执行之前。  
**微任务包含** ：

```
Promise.then
await
```

比如一个人，去银行存钱，存钱之后，又进行了一些了操作，比如买纪念币、买理财产品、办信用卡，这些就叫做微任务。

## 运行机制

在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：

- 执行一个宏任务（执行栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
- 宏任务里的同步代码执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
- 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
- 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652015831577-5c298342-ff26-4457-8714-07fe2df74524.png#averageHue=%23c9a384&clientId=ua44f78a2-c0f3-4&from=paste&height=113&id=u530c5497&originHeight=141&originWidth=1033&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30522&status=done&style=none&taskId=u365d4ba3-29ea-48b9-8902-6c1e4a742c8&title=&width=826.4)  
![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1654339142533-79a61739-054a-4e42-a0f8-580e5f7c2a36.png#averageHue=%23f6e7c3&clientId=u938fd40e-0fe8-4&from=paste&height=212&id=ub27cde42&originHeight=265&originWidth=583&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26994&status=done&style=none&taskId=u3fa22bf5-6612-4239-804f-c9af50545d9&title=&width=466.4)

## 面试题分析

- 1

```
console.log(1)
setTimeout(function() {
  console.log(2)
}, 0)
const p = new Promise((resolve, reject) => {
  resolve(1000)
})
p.then(data => {
  console.log(data)
})
console.log(3)
```

- 2

```
console.log(1)
setTimeout(function() {
  console.log(2)
  new Promise(function(resolve) {
    console.log(3)
    resolve()
  }).then(function() {
    console.log(4)
  })
})
new Promise(function(resolve) {
  console.log(5)
  resolve()
}).then(function() {
  console.log(6)
})
setTimeout(function() {
  console.log(7)
  new Promise(function(resolve) {
    console.log(8)
    resolve()
  }).then(function() {
    console.log(9)
  })
})
console.log(10)
```

- 3

```
console.log(1)
setTimeout(function() {
  console.log(2)
}, 0)
const p = new Promise((resolve, reject) => {
  console.log(3)
  resolve(1000) // 标记为成功
  console.log(4)
})
p.then(data => {
  console.log(data)
})
console.log(5)
```

- 4

```
new Promise((resolve, reject) => {
    resolve(1)
    new Promise((resolve, reject) => {
      resolve(2)
    }).then(data => {
      console.log(data)
    })
  }).then(data => {
    console.log(data)
  })
  console.log(3)
```

- 5

```js
setTimeout(() => {
  console.log(1)
}, 0)
new Promise((resolve, reject) => {
  console.log(2)
  resolve('p1')
  new Promise((resolve, reject) => {
    console.log(3)
    setTimeout(() => {
      resolve('setTimeout2')
      console.log(4)
    }, 0)
    resolve('p2')
  }).then(data => {
    console.log(data)
  })
  setTimeout(() => {
    resolve('setTimeout1')
    console.log(5)
  }, 0)
}).then(data => {
  console.log(data)
})
console.log(6)
```

- 6

```
<!-- 如果有多个script，则优先执行script，再执行定时器 -->
<script>
    console.log(1);
    async function fnOne() {
      console.log(2);
      await fnTwo(); // 右结合先执行右侧的代码, 然后等待
      console.log(3);
    }
    async function fnTwo() {
      console.log(4);
    }
    fnOne();
    setTimeout(() => {
      console.log(5);
    }, 2000);
    let p = new Promise((resolve, reject) => { // new Promise()里的函数体会马上执行所有代码
      console.log(6);
      resolve();
      console.log(7);
    })
    setTimeout(() => {
      console.log(8)
    }, 0)
    p.then(() => {
      console.log(9);
    })
    console.log(10);
  </script>
<script>
    console.log(11);
    setTimeout(() => {
      console.log(12);
      let p = new Promise((resolve) => {
        resolve(13);
      })
      p.then(res => {
        console.log(res);
      })
      console.log(15);
    }, 0)
    console.log(14);
  </script>
```

# 看接口文档写代码（全）

## 第一种情况

接口文档描述：Query参数 或 查询参数  
具体到代码：

```
axios({
  method: 'XXX',
  url: 'xxxxxxxxxxxxxxxxxxxxx',
  params: {
    参数: 值, 
    参数: 值
  }
})
```

```
// 下面只是拿GET来举例子
axios.get('url', { params: { 参数: 值, 参数: 值 } }).then(result => {

})
```

## 第二种情况

接口文档描述：`/api/getbooks/:id/:appkey`  
具体到代码：  
**把** `**:xxx**` **换成具体的值即可。**

```
axios({
  method: 'XXX',
  url: '/api/getbooks/100/laotang', // 这里的100就是id值，laotang就是appkey的值
})
```

```
// 下面只是拿GET来举例子
axios.get('/api/getbooks/100/laotang').then(result => {

})
```

## 第三种情况（少）

接口文档描述：

- 请求体 或 body参数
- 并指定 Content-Type: application/x-www-form-urlencoded

具体到代码：

```
axios({
  method: 'XXXX',
  url: 'xxxxxxxxxxxxxxxxxxx',
  data: '参数=值&参数=值'  // data要写查询字符串格式
})
```

```
// 下面拿POST请求来具体
axios.post('url', '参数=值&参数=值').then()
```

## 第四种情况（多）

接口文档描述：

- 请求体 或 body参数
- 并指定 Content-Type: application/json

具体到代码：

```
axios({
  method: 'XXXX',
  url: 'xxxxxxxxxxxxxxxxxxx',
  data: {  // data写对象格式，axios内部会自动将对象转成JSON
    参数: 值,
    参数: 值
  }
})
```

```
// 下面拿POST请求来具体
axios.post('url', { 参数: 值, 参数: 值 }).then()
```

## 第五种情况

接口文档描述：

- 请求体 或 body参数
- 并指定 Content-Type: multipart/form-data

具体到代码：

```
axios({
  method: 'XXXX',
  url: 'xxxxxxxxxxxxxxxxxxx',
  data: fd // fd 就是 new FormData() 得来的对象
})
```

```
// 下面拿POST请求来具体
axios.post('url', fd).then(result => {

})
```

# 个人设置案例

## 在lib文件夹中，创建request.js

在这个文件中，放请求的配置

- 配置请求根路径
- 配置拦截器

创建 request.js 之后，在 其他html页面中，别忘记引入。

```
// request 请求
// 请求的配置，都放到这里

axios.defaults.baseURL = 'http://www.itcbc.com:3006'
```

## 注册

```
// 注册功能
// 1. 找到按钮注册单击事件（找到表单注册submit事件也行）
document.querySelector('button').addEventListener('click', async function (e) {
  // 2. 阻止默认行为
  e.preventDefault()
  // 3. 获取账号密码
  // val(表单)  // 只要表单各项有 name 属性，即可获取到这项的值
  // console.log(val(document.querySelector('form')))
  let data = val(document.querySelector('form'))
  // 4. 按照接口文档要求，提交账号密码
  // axios.post('/api/register', data).then(({ data: res }) => {})
  const { data: res } = await axios.post('/api/register', data)
  // console.log(res)
  if (res.status === 0) {
    // 5. 注册成功-提示、重置表单、跳转到登录页     注册失败-给出提示
    location.href = './login.html'
  }
})
```

## 登录

别忘了引入 request.js

```
// 登录功能
// 1. 找到按钮注册单击事件（找到表单注册submit事件也行）
document.querySelector('button').addEventListener('click', async function (e) {
  // 2. 阻止默认行为
  e.preventDefault()
  // 3. 获取账号密码
  // val(表单)  // 只要表单各项有 name 属性，即可获取到这项的值
  // console.log(val(document.querySelector('form')))
  let data = val(document.querySelector('form'))
  // 4. 按照接口文档要求，提交账号密码
  // axios.post('/api/login', data).then(({ data: res }) => {})
  const { data: res } = await axios.post('/api/login', data)
  // console.log(res)
  if (res.status === 0) {
    // 5. 登录成功-提示、重置表单、跳转到首页     注册失败-给出提示
    location.href = './index.html'
  }
})
```

## 使用响应拦截器处理错误提示

```
// 2. 配置拦截器
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // console.log('2xx', response)
    if (response.data.status === 1) {
      alert(response.data.message)
    }
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // console.dir('>2xx')
    // console.dir(error)
    // 加入下面的判断，是保证在有响应结果的情况下，在做。。。。。
    if (error.response) {
      if (error.response.data.status === 1) {
        alert(error.response.data.message)
      }
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```

## 令牌的作用

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1660640763773-aec5570b-8991-4401-9dee-bcdca4a96602.png#averageHue=%23f9f8f7&clientId=u77003ab8-2e9a-4&from=paste&height=407&id=ue62392ce&originHeight=509&originWidth=994&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55428&status=done&style=none&taskId=ua6b38e98-9b6c-42de-9f87-694eead8bae&title=&width=795.2)

## 具体使用令牌

1. 登录成功后，将接口响应的 token 存起来

```
document.querySelector('form').addEventListener('submit', async function (e) {
  e.preventDefault()
  const { data: res } = await axios.post('/api/login', val(this))
  if (res.status === 0) {
    // 把服务器返回的令牌存到本地存储
    localStorage.setItem('mytoken', res.token)
    alert(res.message) // 登录成功提示
    location.href = './index.html' // 跳转到index.html
  }
})
```

2. 请求获取用户信息接口的时候，加好请求头

```
// 进入这个页面，应该马上获取用户信息
// 发送请求，获取用户信息（获取用户的用户名、头像、省市县数据）
axios({
  method: 'GET',
  url: '/user/info',
  // 携带请求头
  headers: {
    Authorization: localStorage.getItem('mytoken')
  }
}).then(({ data: res }) => {
  console.log(res);
})
```

上述，发送请求的时候，带请求头 ，没有问题。  
但是，考虑到后续还有很多请求，都需要这个请求头，所以最好的办法是，统一配置。

## 统一配置请求头

统一配置请求头，有两个办法：  
办法一：像配置请求根路径那样

```
// 全局配置 请求头
axios.defaults.headers.common['Authorization'] = localStorage.getItem('mytoken')
```

办法二：加请求拦截器

```
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // console.log(config) // config = { method: 'GET', url: '/user/info', ..... }
    // url 以 /user 开头的，才需要加这个请求头
    if (config.url.startsWith('/user/')) {
      config.headers.Authorization = localStorage.getItem('mytoken')
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
```

## token过期处理

如果本地存储的token被人为的修改错了。  
或者，token过期了（目前，我们用的token有效期是10个小时）  
如果出现上述情况，那么服务器就会返回 `{ status: 1, message: '身份认证失败' }`  
所以，我们在**响应** 拦截器的第**2** 个函数中，加判断：

- 判断status 和 message
- 移除没用的token
- 跳转到登录页面

```
function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // console.dir(error)
  if (error.response) {
    // 因为有些请求可能没有响应结果。判断如果有响应结果的前提之下，然后在获取响应结果里面的内容
    if (error.response.data.status === 1 && error.response.data.message === '身份认证失败') {
      // 说明token遭到破坏了，或者token过期了
      localStorage.removeItem('mytoken') // 移除没用的token
      location.href = './login.html' // 跳转到登录页重新登录
    } else if (error.response.data.status === 1) {
      alert(error.response.data.message)
    }
  }
  return Promise.reject(error)
}
```

## 梳理token使用流程

1. token只有登录接口才会返回。而且 我们后续要用token，所以在**登录之后** ，**将** 服务器返回的**token存到本地存储** 。

`localStorage.setItem('mytoken', 服务器返回的token)`

2. 请求其他接口的时候，需要加请求头。一般都是全局配置请求头

1. 要么使用 `axios.defaults.headers.common['Authorization'] = localStorage.getItem('mytoken')`
2. 要么就用**请求** 拦截器。`config.headers.Authorization = localStorage.getItem('mytoken')`

3. 处理token过期的情况。token过期，服务器将会返回 401 状态码。在**响应拦截器** 的第**2** 个函数中：

```
if (error.response.status === 401) {
  // 说明token有问题了（修改错了、过期了.....）
  localStorage.removeItem('mytoken') // 这行可选，可以选择将过期的token移除掉
  location.href = './login.html'
}
```

## 把获取的用户名，放到 input 中

```
// 进入这个页面，应该马上获取用户信息
;(async function () {
  const { data: res } = await axios.get('/user/info')
  // console.log(res)
  // 设置用户名
  document.querySelector('#username').value = res.data.username
})()
```

## 获取省，放到下拉框中

```
let province = document.querySelector('[name=province]')

// 进入页码马上获取省、切换一个省的时候获取市、切换一个市的时候获取县
;(async function () {
  const { data: res } = await axios.get('/api/province')
  // console.log(res)
  let arr = [`<option value="">--省--</option>`]
  res.forEach(item => arr.push(`<option value="${item}">${item}</option>`))
  province.innerHTML = arr.join('')
})()
```

## 省切换的时候，获取市，放到下拉框中

```
let city = document.querySelector('[name=city]')

// 切换一个省的时候获取市
province.addEventListener('change', async function () {
  // console.log(province.value)
  // 切换省的时候，无论省是空值，还是有值，都要重置县
  county.innerHTML = '<option value="">--县--</option>'
  if (province.value === '') {
    // 说明没有选择任何省(清空后面的市、并且return终止函数执行)
    return (city.innerHTML = '<option value="">--市--</option>')
  }
  
  // 如果省不是空值，则发送请求，获取对应的市
  const { data: res } = await axios.get('/api/city', { params: { pname: province.value } })
  let arr = [`<option value="">--市--</option>`]
  res.forEach(item => arr.push(`<option value="${item}">${item}</option>`))
  city.innerHTML = arr.join('')
})
```

**切换省的时候，无论有没有选择省，都要重置县，重置县的代码写到 return 前面** 。

## 市切换的时候，获取县，放到下拉框

```
let county = document.querySelector('[name=county]')

// 切换一个市的时候获取县
city.addEventListener('change', async function () {
  // console.log(province.value)
  if (city.value === '') {
    // 说明没有选择任何市(清空后面的县、并且return终止函数执行)
    return (county.innerHTML = '<option value="">--县--</option>')
  }
  // 如果市不是空值，则发送请求，获取对应的县
  const { data: res } = await axios.get('/api/county', {
    params: {
      pname: province.value,
      cname: city.value
    }
  })
  let arr = [`<option value="">--县--</option>`]
  res.forEach(item => arr.push(`<option value="${item}">${item}</option>`))
  county.innerHTML = arr.join('')
})
```

## 点击保存，把选择的省市县提交

```
// ------------------------ 点击保存，提交省市县 -------------------------
document.querySelector('button').addEventListener('click', async function (e) {
  e.preventDefault()
  let data = val(document.querySelector('form')) // 获取省市县的值
  const { data: res } = await axios.post('/user/info', data)
  if (res.status === 0) {
    alert(res.message)
  }
})
```

## 更换头像

```
// ----------------------- 头像上传 -----------------------------------
// 点击 figcaption 触发文件域的单击事件
document.querySelector('figcaption').addEventListener('click', function () {
  document.querySelector('#upload').click()
})
// 文件域（文件选择框）的内容改变的时候，实现文件上传
document.querySelector('#upload').addEventListener('change', async function () {
  if (this.files.length > 0) {
    // 说明选择了图片
    // 找到文件对象
    let fileObj = this.files[0]
    // 实例化FormData
    let fd = new FormData()
    // 把文件对象加入到FormData中
    fd.append('avatar', fileObj)
    // Ajax提交FormData对象
    const { data: res } = await axios.post('/user/avatar', fd)
    if (res.status === 0) {
      alert(res.message)
      document.querySelector('img').src = res.data
    }
  }
})
```

## 页面刷新后，数据回填

页面刷新后，马上获取用户信息。  
我们需要把用户的 用户名、省、市、县、头像，设置到页面中（数据回填）  
但是，用户信息有三种情况：

- 刚刚注册的用户，只有用户名，其他值都是 null
- 更改了头像的用户，有头像
- 更改了籍贯的用户，有省市县

所以，数据回填的时候，需要判断一下用户是否有头像、是否有省市县。

```
// 进入这个页面，应该马上获取用户信息
;(async function () {
  const { data: res } = await axios.get('/user/info')
  // console.log(res)
  // 设置用户名（不需要判断，用户，肯定有用户）
  document.querySelector('#username').value = res.data.username
+ // 判断用户是否有头像
+ // if (res.data.avatar) {
+ //   document.querySelector('img').src = res.data.avatar
+ // }
+ res.data.avatar && (document.querySelector('img').src = res.data.avatar)
})()
```

处理默认的省市县：

```
// 进入这个页面，应该马上获取用户信息
;(async function () {
  const { data: res } = await axios.get('/user/info')
  // console.log(res)
  // 设置用户名（不需要判断，用户，肯定有用户）
  document.querySelector('#username').value = res.data.username
  // 判断用户是否有头像
  // if (res.data.avatar) {
  //   document.querySelector('img').src = res.data.avatar
  // }
  res.data.avatar && (document.querySelector('img').src = res.data.avatar)
  // 判断用户，是否有省市县
  if (res.data.province && res.data.city && res.data.county) {
    // 说明用户有省市县
    // 把用户所在的省的全部的市都获取得到，放到第2个下拉框中
    let p1 = axios.get('/api/city', { params: { pname: res.data.province } })
    // 把用户所在的事里面的全部的县获取得到，放到第3个下拉框中
    let p2 = axios.get('/api/county', {
      params: {
        pname: res.data.province,
        cname: res.data.city
      }
    })
    // 
    const [{ data: shi }, { data: xian }] = await Promise.all([p1, p2])
    // console.log(result) // [{ data: [市....] }, { data: [县.....] }]
    // console.log(shi)
    // console.log(xian)
    let arr1 = ['<option value="">--市--</option>']
    shi.forEach(item => arr1.push(`<option value="${item}">${item}</option>`))
    city.innerHTML = arr1.join('')

    let arr2 = ['<option value="">--县--</option>']
    xian.forEach(item => arr2.push(`<option value="${item}">${item}</option>`))
    county.innerHTML = arr2.join('')
    // 勾选、用户所在的省、市、县
    province.value = res.data.province
    city.value = res.data.city
    county.value = res.data.county
  }
})()
```