![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1668390673410-1b007282-d417-4aa7-87d1-a97015c1bd4e.jpeg)

# 文件域补充

## 属性补充

文件域，就是 文件选择框，也就是 `<input type="file" />`

- 标签的属性

- accept="image/*" 表示只能选择图片类型的文件
- multiple 加入这个属性表示可以多选文件

## 本地预览(超纲)

上传之前，就可以实现预览。  
选择了图片，马上就可以预览。

```
document.querySelector('文件域').addEventListener('change', function () {
  if (this.files.length > 0) {
    let fileObj = this.files[0]  // 找到文件对象
    let url = URL.createObjectURL(fileObj) // 根据文件对象，创建url
    document.querySelector('img').src = url
  }
})
```

# 文件上传总结

分为有

**有...**

1. 给 文件选择框 设置好 name属性，name属性值等于接口要求的参数名
2. 实例化 FormData 对象，传入表单；这样就可以把文件收集到了
3. Ajax提交FormData对象，即可实现文件上传

**没有**

**...****建议**

1. 找到文件对象，固定语法：【`let fileObj = 文件选择框.files[0]`】
2. `let fd = new FormData()`，不用传递表单了（本来也没有）
3. `fd.append('参数名', fileObj)` // 将文件对象加入到FormData对象中
4. Ajax提交FormData对象，即可实现文件上传

**关于服务器返回的结果** ：服务器返回的文件名有两种情况：

- 是一个完整的地址，比如 `[http://www.itcbc.com:3006/formdata/16637270097820.61.jpg](http://www.itcbc.com:3006/formdata/16637270097820.61.jpg)`，那么直接使用这个地址即可。
- 只返回文件路径部分，比如 `formdata/16637270097820.61.jpg`，**则需要自己拼接根路径，然后再使用** 。

# 请求报文&响应报文（了解）

## 了解概念

这部分和底层相关。  
通过这部分内容，了解一下一次请求、响应过程中，浏览器到底向服务器传输了什么样的数据？服务器到底返回了什么数据？  
实际上，一次请求中，比如添加图书，向服务器传输的不仅仅是 书名、作者、出版社这类的数据，这类数据叫做请求体，除了请求体，还有请求行、请求头，三者组成的结果叫做请求报文。  
所以，一次请求，实际上向服务器传输了请求报文，请求报文由以下三个部分组成：

- 请求行
- 请求头
- 请求体

同样的，服务器的一次响应，实际上响应的也是响应报文，响应报文由以下三个部分组成：

- 响应行
- 响应头
- 响应体

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1660381214444-0fae43b2-0d7d-436a-a32e-39f68cc81304.png#averageHue=%23fdfcfc&clientId=u59a57656-4974-4&from=paste&height=492&id=u7ea368e4&originHeight=615&originWidth=936&originalType=binary&ratio=1&rotation=0&showTitle=false&size=69991&status=done&style=none&taskId=u2992b010-e0dc-4831-8fc3-38e780b76a0&title=&width=748.8)

## 重点记忆

- GET请求，没有请求体
- 代码中的 **params** 参数，底层传输的时候，**会把这类参数拼接到 url 后面** 。

- /api/delbook**?id=45&appkey=laotang**
- 又由于 url 的长度有限制，所以这里参数一般都比较小

- 代码中的 **data**  选项，底层传输的时候，会以**请求体** 的方式传输

- 请求体的大小没有限制
- 可以上传文件
- 常见的请求体有三种格式

- 查询字符串格式    `参数=值&参数=值&参数=值`
- JSON格式              `{ "bookname": "aa", "author": "bb" }`
- FormData对象格式  `new FormData()`

- 我们通过 then 获取的服务器返回的结果（res），实际上得到的是响应体
- 响应状态码是判断一次响应的状态，下面列举常见的响应状态码：

- **200 OK**                请求成功。
- 201 Created        资源在服务器端已成功创建。
- 304 Not Modified 资源在客户端被缓存，响应体中不包含任何资源内容！
- **400 Bad Request** 客户端的请求方式、或请求参数有误导致的请求失败！
- 401 Unauthorized 客户端的用户身份认证未通过，导致的此次请求失败！
- **404 Not Found** 客户端请求的资源地址错误，导致服务器无法找到资源！
- **500 Internal Server Error** 服务器内部错误，导致的本次请求失败！

响应状态码：[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

响应状态码是后端设置的，我们前端只能被动的去看。

## 知道Content-Type请求头

提交的请求体，常见有三种格式，为了让后端知道我们提交的是什么格式的请求体，所以提交请求体的时候，必须指定对应的 Content-Type 请求头。  
每种请求体，都对应着各自的Content-Type。

|   |   |   |
|---|---|---|
|**提交什么格式的数据**|示例|**对应的Content-Type**|
|JSON格式|{ "bookname": "aa", "author": "bb" }|application/json|
|查询字符串格式|bookname=aa&author=bb|application/x-www-form-urlencoded|
|FormData对象|let fd = new FormData()|multipart/form-data 【浏览器自动设置】|

**这个请求头，在使用axios的情况下，不用程序员写，只需要知道即可。**  
**axios底层已经帮我们写好了这个请求头。**

## 总结

1. 请求报文包括什么？

- ✅ A 请求行
- ✅ B 请求头
- 🔲 C 请求参数
- ✅ D 请求体

2. 响应报文包括什么？

- ✅ A 响应行
- ✅ B 响应头
- 🔲 C 响应状态码
- ✅ D 响应体

3. axios代码中的params，底层传输时，以什么方式传输到服务器？

- 🔲 A 会以请求体的方式发送到服务器
- 🔲 B 会转换成请求头，然后发送到服务器
- ✅ C 会转成查询字符串格式，然后拼接到url后面，例如：`/api/delbook?id=22&appkey=laotang`
- 🔲 D 会以响应体的方式

4. 下面描述**正确** 的是？

- ✅ A GET请求**没有** 请求体，参数都会拼接到url后面
- ✅ B 由于url长度有限制，所以GET请求只能携带少量参数
- ✅ C 请求体大小没有限制，所以可以提交大量数据，也可以做文件上传
- 🔲 D 实际编码中，写params或data都无所谓

5. 关于响应状态码，描述正确的是？

- ✅ A 响应状态码分为5类，分别是1开头、2开头、3开头、4开头和5开头的
- ✅ B 200 状态码表示请求 成功
- ✅ C 401状态码表示权限不足
- ✅ D 404 状态码表示请求的资源不存在

6. 请求头中的Content-Type，描述正确的是？

- ✅ A Content-Type的值用于指定请求体的编码格式
- ✅ B application/x-www-form-urlencoded这个值，表示请求体是查询字符串类型
- ✅ C application/json 这个值，表示请求体是JSON类型
- ✅ D multipart/form-data 这个值，表示请求体是FormData类型
- ✅ E 使用axios，无需关心以上这些，直接提交请求体就行了，axios会自动处理
- ✅ F 写原生底层代码，程序员需要自己指定这个请求头，但是如果提交FormData则无需指定

# 原生的GET请求(带参数)

```js
// 1. 实例化浏览器内置对象 XMLHttpRequest，简称 xhr 对象
let xhr = new XMLHttpRequest()

// 2. 注册 xhr 对象的 load 事件【当请求响应成功后，会触发load事件】
xhr.addEventListener('load', function () {
  // 请求响应成功了，所以在这里获取响应结果
  let res = JSON.parse(xhr.response) // 把JSON字符串，转成JS对象，用 JSON.parse()
  console.log(res)
})

// 3. 调用 xhr 对象的 open 方法（设置请求方式和url） ---- 到这一步，还没有发送请求，还只是准备
// xhr.open('GET', 'http://www.itcbc.com:3006/api/getbooks')
// xhr.open('GET', 'http://www.itcbc.com:3006/api/getbooks?参数=值&参数=值')
xhr.open('GET', 'http://www.itcbc.com:3006/api/getbooks?appkey=seventeen')
// URL中，不允许出现中文，如果有参数值是中文，最好手动对中文进行编码
// - 编码使用 encodeURIComponent() 
// - 解码使用 decodeURIComponent()
let str = encodeURIComponent('玄色')
xhr.open('GET', 'http://www.itcbc.com:3006/api/getbooks?appkey=seventeen&author=' + str)

// 4. 调用 xhr 对象的 send 方法，发送请求
xhr.send()
```

# 原生POST请求

```
<button>添加图书</button>

<script>
  // 1. 实例化对象
  const xhr = new XMLHttpRequest()
  
  // 2. 准备一个 load 事件；完整的接收到服务器返回的结果后触发；
  xhr.addEventListener('load', function () {
    // 使用 response 属性，获取服务器返回的结果
    let res = JSON.parse(xhr.response)
    console.log(res)
  })
  
  // 3. 调用 open 方法，设置请求方式、设置请求url地址
  xhr.open('POST', 'http://www.itcbc.com:3006/api/addbook')
  
  // 4. 调用 send 方法，发送请求
  // 接口文档如果写的是 请求体 或 body参数，参数要写到 send() 里面
  // 请求体有三种格式（到达用什么格式，看接口文档）：
  // - JSON格式         Content-Type: application/json
  // - FormData格式     Content-Type: multipart/form-data
  // - 查询字符串格式     Content-Type: application/x-www-form-urlencoded
  
  // 4.1 提交JSON格式
  // xhr.setRequestHeader('Content-Type', 'application/json')
  // xhr.send(JSON.stringify({ bookname: 'dsdf', author: 'dsf', publisher: 'dsf' }))
  
  // 4.2 提交查询字符串
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  // xhr.send('bookname=西游记&author=吴承恩&publisher=北京出版社')
  
  // 4.3 提交FormData 对象
  // 提交FormData对象，请求头不要设置。浏览器会自动设置
  let fd = new FormData()
  fd.append('bookname', 'dsds')
  fd.append('author', 'dsds')
  fd.append('publisher', 'dsds')
  xhr.send(fd)
</script>
```

注意：如果提交FormData对象，则**不能** 设置Content-Type，因为浏览器会自动设置

# 原生代码总结

![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1668237008328-7d84c985-858a-4882-84bb-c7e446a8cd86.jpeg)

# 封装

自己封装，会比较麻烦。但是自己封装有很多好处：

- 复习到以前的知识点
- 锻炼编程能力
- 体会到 axios 是怎么封装的

## 知识回顾和补充

- 将字面量对象转查询字符串

```
let params = {
  appkey: 'laotang',
  id: 100
}
// 转成 appkey=laotang&id=100 这样的查询字符串格式
// console.log(JSON.stringify(params)) // {"appkey":"laotang","id":100}
let arr = []
// 循环遍历 params 对象，循环一次，向arr中加入 【appkey=laotang】这样的一个元素
for (let key in params) {
  // key表示对象的键，比如 appkey、id
  // params[key] 表示对象的值，比如 laotang、100
  arr.push(`${key}=${params[key]}`)  // arr.push('appkey=laotang')  arr.push('id=100')
}
console.log(arr.join('&')) // appkey=laotang&id=100
```

- 区分三种请求体（FormData对象、字面量对象[JSON]、查询字符串）

```js
function abc(data) {
  // 判断data是哪种格式的请求体
  // console.log(typeof data)
  // instanceof，判断对象的原型链上，是否出现过给出的构造函数
  // console.log(data instanceof FormData)
  if (data instanceof FormData) {
    // 说明data是FormData对象
    console.log('formdata')
  } else if (typeof data === 'object') {
    // 说明data是普通的字面量对象
    console.log('字面量对象')
  } else if (typeof data === 'string') {
    // 说明data是查询字符串
    console.log('字符串')
  } else {
    // 说明没有data
    console.log('没有传递data')
  }
}

// abc(new FormData())
// abc({ bookname: 'aa', author: 'bb' })
// abc('bookname=aa&author=bb')
abc()
```

- 原生Ajax中的 loadend 事件 和 获取响应状态码

```js
// load事件，只在成功响应的时候才会触发
// loadend事件，无论成功还是失败都会触发

const xhr = new XMLHttpRequest()

xhr.addEventListener('loadend', function () {
  // 这里无论请求成功，还是失败，都会执行
  // 所以，这里可以得到成功的响应结果；也能得到失败的错误信息
  // console.log(xhr) // xhr.status 表示响应状态码
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('成功', JSON.parse(xhr.response))
    // 说明请求成功
  } else if (xhr.status >= 300) {
    // 说明请求有问题
    console.log('失败', JSON.parse(xhr.response))
  }
})

xhr.open('POST', 'http://www.itcbc.com:3006/api/addbook')
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// 注意下面的bookname，少了e
xhr.send('booknam=aa&author=bb&publisher=cc')
```

## 封装结果

```js
// 模拟axios是怎么封装的
function myaxios({ method, url, params, data }) {
  // 1. 处理params参数【把对象格式转成查询字符串】
  let arr = []
  for (let key in params) {
    // key === id | appkey
    // params[key] === 100 | laotang
    // console.log(params[key]) // key是变量，只能用[]语法
    arr.push(`${key}=${params[key]}`) // id=100   appkey=laotang
  }
  // console.log(arr)
  // console.log(arr.join('&'))
  let querystring = arr.join('&')

  // 2. 发送请求基本的5个步骤
  const xhr = new XMLHttpRequest()

  xhr.addEventListener('loadend', function () {
    // 这里无论请求成功，还是失败，都会执行
    // 所以，这里可以得到成功的响应结果；也能得到失败的错误信息
    // console.log(xhr) // xhr.status 表示响应状态码
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('成功', JSON.parse(xhr.response))
      // 说明请求成功
    } else if (xhr.status >= 300) {
      // 说明请求有问题
      console.log('失败', JSON.parse(xhr.response))
    }
  })

  xhr.open(method, url + '?' + querystring)

  // 3. 判断请求体的类型
  if (data instanceof FormData) {
    // 说明data是FormData对象
    xhr.send(data) // 发送FormData数据，不需要设置Content-Type
  } else if (typeof data === 'object') {
    // 说明data是普通的字面量对象
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(data))
  } else if (typeof data === 'string') {
    // 说明data是查询字符串
    // console.log('字符串')
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(data)
  } else {
    // 说明没有data
    xhr.send()
  }
}
```

测试：

```js
// myaxios({
//   method: 'GET',
//   url: 'http://www.itcbc.com:3006/api/getbooks',
//   params: {
//     id: 58,
//     appkey: 'laotang110022'
//   }
// })


// ---------------------------
myaxios({
  method: 'POST',
  url: 'http://www.itcbc.com:3006/api/addbook',
  data: {
    bookname: 'aa',
    author: 'bb',
    publisher: 'cc',
    appkey: 'laotang110022'
  }
})
```

# Promise

Promise能够处理异步程序。Array/String/Date.......... 他们的级别是一样的

## 回调地狱

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652015629161-b9585a40-a02c-4223-a41c-f4618faa1ea4.png#averageHue=%236594a2&clientId=ua44f78a2-c0f3-4&from=paste&height=386&id=uc4d77e7a&originHeight=482&originWidth=1030&originalType=binary&ratio=1&rotation=0&showTitle=false&size=428983&status=done&style=none&taskId=u77b786a6-4654-48a8-a4f2-3f6942edaea&title=&width=824)  
JS中，大量的使用了**回调函数** 进行异步操作，而异步操作什么时候返回结果是不可控的，如果我们希望几个异步请求按照顺序来执行，那么就需要将这些异步操作嵌套起来，嵌套的层数特别多，就会形成**回调地狱**  或者叫做 **横向金字塔** 。假设有需求：

1. 有三个任意的定时器，定时器时间随机
2. 要求三个定时器都执行完毕，然后输出一句话

如何实现上述需求呢？

```js
setTimeout(() => {
  console.log('张三买酒回来了')
}, Math.floor(Math.random() * 1000))

setTimeout(() => {
  console.log('李四买菜回来了')
}, Math.floor(Math.random() * 1000))

setTimeout(() => {
  console.log('王五买肉回来了')
}, Math.floor(Math.random() * 1000))

console.log('开饭~')
```

解决方案：

```js
setTimeout(() => {
  console.log('张三买酒回来了')
  setTimeout(() => {
    console.log('李四买菜回来了')
    setTimeout(() => {
      console.log('王五买肉回来了')
      console.log('开饭~')
    }, Math.floor(Math.random() * 1000)) // 时间，随机0~1000
  }, Math.floor(Math.random() * 1000)) // 时间，随机0~1000
}, Math.floor(Math.random() * 1000)) // 时间，随机0~1000
```

## Promise简单使用

- Promise对象可以解决回调地狱的问题
- Promise 是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理和更强大
- Promise是JS内置对象（ES6新增）

Promise是“承诺”的意思，实例中，它里面的异步操作就相当于一个承诺，而承诺就会有两种结果，要么完成了承诺的内容，要么失败。  
所以，使用Promise，分为两大部分，首先是有一个承诺（异步操作），然后再兑现结果。  
第一部分：定义“承诺”

```
// 实例化一个Promise，需要给它传递一个函数作为参数，而该函数又有两个形参，通常用resolve和reject来表示。该函数里面可以写异步请求的代码
// 换个角度，也可以理解为定下了一个承诺
let p = new Promise((resolve, reject) => {
  // 形参resolve，单词意思是 完成
  // 形参reject ，单词意思是 失败
  // ”承诺” 一般都需要一定的期限才能完成，当然也可能失败
  // 比如，我承诺 3 年后赚 500万，然后回来娶你。
  // 上述承诺可能成功的完成，也可能失败
  // 在编程中，如果承诺成功的完成，则调用 resolve 函数；失败调用 reject 函数
  setTimeout(() => {
    let money = Math.floor(Math.random() * 1000)
    if (money >= 500) {
      resolve('赚到钱了，回来娶你')
    } else {
      reject('赚钱太难，找个好人嫁了吧')
    }
  }, 3000)
  
});
```

第二部分：获取“承诺”的结果

```
// 通过调用 Promise对象 的then方法和catch方法，分别获取成功的结果和失败的结果
p.then(success => {
  console.log(success) // 赚到钱了，回来娶你
}).catch(err => {
  console.log(err) // 赚钱太难，找个好人嫁了吧
})
```

## 完善Ajax封装

为了能够通过 then方法获取响应结果：

1. 将原生的 Ajax 请求代码封装进 Promise 中
2. 将成功的响应结果，传递给 resolve （响应状态码为 200 视为成功）
3. 将失败的结果传递给 reject （响应状态码超过 2xx 范围，视为失败）
4. 最后，返回Promise对象（调用函数的时候就会得到Promise对象，从而可以使用.then）

axios() 以及 axios.get() 调用之后都返回 Promise对象，所以能够调用 then() 实际开发中，就是直接使用 axios。自己封装只能为了锻炼编程能力。

## async 和 await 修饰符

ES6 --- ES2015  
async 和 await 是 ES2017 中提出来的。  
异步操作是 JavaScript 编程的麻烦事，麻烦到一直有人提出各种各样的方案，试图解决这个问题。  
从最早的回调函数，到 Promise 对象，再到 Generator 函数，每次都有所改进，但又让人觉得不彻底。它们都有额外的复杂性，都需要理解抽象的底层运行机制。  
异步I/O不就是读取一个文件吗，干嘛要搞得这么复杂？**异步编程的最高境界，就是根本不用关心它是不是异步。**  
async 函数就是隧道尽头的亮光，很多人认为它是异步操作的终极解决方案。  
ES2017 提供了async和await关键字。await和async关键词能够将异步请求的结果以返回值的方式返回给我们。  
**使用async和await的基本步骤** ：

1. 需要一个函数，任意函数都可以，函数前加 async
2. 函数中使用固定的语法获取结果：`let 结果 = await Promise对象`

```
// async和await 代替了 then

axios.defaults.baseURL = 'http://www.itcbc.com:3006'

let p1 = axios.get('/api/province')

let p2 = axios.get('/api/city', { params: { pname: '河北省' } })

let p3 = axios.get('/api/county', { params: { pname: '河北省', cname: '承德市' } })

async function abc() {
  let res1 = await p1
  let res2 = await p2
  let res3 = await p3
  console.log(res1.data, res2.data, res3.data)
}
abc()
```

## Promise的静态方法

- Promise.resolve() --- 返回一个成功状态的Promise对象
- Promise.reject() --- 返回一个失败状态的Promise对象

```
Promise.resolve('hello world')
.then(res => {
  console.log(res) // 这里输出 hello world
})
.catch(err => {
    console.log('错误的结果是：', err) // 这里不会输出
})

// --------------------------------------------------

Promise.reject('参数有误')
.then(res => {
    console.log('正确的结果是：', res) // 这里不会输出
})
.catch(err => {
    console.log('错误的结果是：', err) // 这里输出 错误的结果是：参数有误
})
```

- Promise.all([ Promise对象, Promise对象, Promise对象 ]).then(res => {})

- all是所有的意思，等所有的Promise对象都完成，会触发then，res包含所有的3个结果

- Promise.race([ Promise对象, Promise对象, Promise对象 ]).then(res => {})

- race是比赛、赛跑的意思，所以无论哪一个Promise对象得到结果，就算完成了

```
axios.defaults.baseURL = 'http://www.itcbc.com:3006'

let p1 = axios.get('/api/province')

let p2 = axios.get('/api/city', { params: { pname: '河北省' } })

let p3 = axios.get('/api/county', { params: { pname: '河北省', cname: '承德市' } })


// all是所有的意思【需三个Promise对象都执行完，才会进入 then】
Promise.all([p1, p2, p3]).then(res => {
  console.log(res) // [ {第1个请求的result}, {第2个请求的result}, {第3个请求的result} ]
})

// race是赛跑的意思【有任意一个Promise对象执行完，就会进入 then】
Promise.race([p1, p2, p3]).then(res => {
  console.log(res) // 第1个请求的result 或 第2个请求的result 或 第3个请求的result
})
```

## 链式调用then方法

- 可以链式的调用 then 方法：`p.then().then().then()......catch()`
- 前一个then里面返回的字符串，会被下一个then方法接收到。但是没有意义；
- **前一个then里面返回Promise对象**

- **Promise 对象中 resolve 的数据，会被下一个then接收到**
- **Promise 对象中 reject 的数据，会被最后的 catch 接收到**

- 前一个then里面如果没有返回值，则后续的then不会接收到任何值

```
axios.defaults.baseURL = 'http://www.itcbc.com:3006'

let p1 = axios.get('/api/province')

let p2 = axios.get('/api/city', { params: { pname: '河北省' } })

let p3 = axios.get('/api/county', { params: { pname: '河北省', cname: '承德市' } })


p1.then(res1 => {
  console.log(res1.data) // 得到全部的省
  return p2
}).then(res2 => {
  console.log(res2.data) // 得到 河北省中所有的市
  return p3
}).then(res3 => {
  console.log(res3.data) // 得到 河北省承德市中所有的县
}).catch(err => {
  console.log(err) // 输出错误信息
})
```

catch 方法可以统一获取错误信息

## 错误处理

先得到Promise对象

```
axios.defaults.baseURL = 'http://www.itcbc.com:3006'

let p1 = axios.get('/api/province')

// 下面的参数故意写错
let p2 = axios.get('/api/city', { params: { xxx: '河北省' } })

let p3 = axios.get('/api/county', { params: { pname: '河北省', cname: '承德市' } })
```

获取结果，有两个方案，方案一，使用then获取，在链式的尾端，加入catch来进行错误处理

```
// 获取结果，方案一 -------------  使用then  -----------
p1.then(res1 => {
  console.log(res1.data) // 得到全部的省
  return p2  // 由于p2请求出错了，所以直接跳到最后的catch
}).then(res2 => {
  console.log(res2.data) // 不会进入这个 then 里面
  return p3
}).then(res3 => {
  console.log(res3.data) // 不会进入这个 then 里面
}).catch(err => {
  console.dir(err) // 输出错误对象；用console.dir() 可以看到错误对象内部结构
})
```

获取结果，方案二，使用async和await获取结果，使用 `try...catch...` 来处理错误

```
// 获取结果，方案二 --------- 使用async和await -----------
async function abc() {
  try {
    let res1 = await p1
    let res2 = await p2 // 由于p2请求出错了，所以直接跳到最后的catch
    let res3 = await p3 // 不执行
    console.log(res1.data, res2.data, res3.data) // 不执行
  } catch (e) {
    console.dir(e) // 输出错误对象；用console.dir() 可以看到错误对象内部结构
  }
}
abc()
```

知识点：try 或 catch 中，如果有 return 返回值，则返回值相当于是 函数的返回值

## 三种状态

- 最初状态：pending，等待中，此时promise的结果为 undefined；
- 当 resolve(value) 调用时，达到最终状态之一：fulfilled，（成功的）完成，此时可以获取结果value
- 当 reject(error) 调用时，达到最终状态之一：rejected，失败，此时可以获取错误信息 error

**当达到最终的 fulfilled 或 rejected 时，promise的状态就不会再改变了，结果也就固定了，不会再改变了** 。

当调用 resolve的时候，Promise 将到达最终的状态。 达到最终状态之后，Promise的状态就不会再改变了。  
![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1663828791517-58246b65-5a2a-4bcf-9d9b-359da72dcf54.png#averageHue=%23f9f8f8&clientId=udc690b3e-2928-4&from=paste&height=215&id=udc7441d5&originHeight=269&originWidth=758&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24341&status=done&style=none&taskId=u4d6d3994-2704-4513-9852-7e214b97330&title=&width=606.4)  
**多次调用 resolve 或 reject 函数，只有第一次有效，其他的调用都无效** 。

```js
let p = new Promise((resolve, reject) => {
  resolve(1) // 调用resolve，表示Promise到达了成功的状态；一旦成功了，Promise的结果就不会再变了
  reject(2) // 无效
  resolve(3) // 无效
  setTimeout(() => {
    resolve(4) // 无效
  }, 1000)
})

p.then(res => {
    console.log(res) // 输出 1
}).catch(err => {
    console.log(err) // 这里不执行
})
```

## async和await补充

- async 用于修饰一个 function

- async 修饰的函数，总是返回一个 Promise 对象
- 比如async函数中 `return 123`
- 相当于 `return new Promise((resolve, reject) => resolve(123))`
- 如果希望返回失败状态的Promise对象，则 `return Promise.reject(xxx)`

- await 只能出现在 async 函数内

- 常规语法：`let 结果 = await Promise对象`;  // 获取Promise对象的结果
- 由于 await 会等待Promise结束，所以await会**暂停** 函数的执行，但不会影响**函数外** 的同步任务

```
// async ----------------------------------------------------------------
// async用于修饰一个函数
// async修饰的函数，如果有返回值，无论返回了什么，相当于是返回了Promise对象，原本的返回值相当于传递给了resolve
// -- 比如 return 123。相当于 return new Promise((resolve, reject) => { resolve(123) })
// 如果希望返回一个失败状态的Promise对象，则 return Promise.reject(err)
async function abc() {
   return 123
   // return Promise.reject('参数错误')
}
let p = abc() // 调用abc函数，得到Promise对象
p.then(res => {
  console.log(res)
}).catch(err => {
  console.log('错误信息是：', err)
})

// await ---------------------------------------------------------------
// 1. await 只能出现在 async函数中
// 2. await会暂停函数的执行，await下面的(不是后面的)代码会被挡住，当所有的同步代码执行完，才能执行下面的代码
function test() {
  console.log('test')
}
async function abc() {
  console.log(111)
  // await仅仅在async函数中才有效
  await test() // 左右结合的代码，右侧先执行
  // await会暂停函数的执行，await后续的代码都会暂停执行
  // 等所有的同步任务执行完毕，才能执行
  console.log(222)
  console.log(333)
}
abc()
console.log(444)
console.log(555)
```

## 同步异步？

- **new Promise里面的代码是立即执行的**
- **获取结果时（then方法时）是异步的，是最后执行的**
- **await下面的（不是await后面的）代码，可以理解是异步的，最后执行**

```
console.log(1);
new Promise((resolve, reject) => {
  console.log(2);
  resolve();
  console.log(3);
}).then(res => {
  console.log(4); // 这里是异步的
})
console.log(5);
// 输出顺序： 1  2  3  5  4 ,因为只有 .then() 是异步的
```

## 小结

- Promise是异步任务的一种解决方案
- 在避免回调地狱的基础上，可以获取到异步任务的结果
- axios() 以及 axios.get() 等方法的返回值，就是 Promise对象。

**如何使用？**

- 第一步：得到Promise对象

- 自己 new Promise()  ----- 很少用
- 通过第三方工具得到Promise对象，比如 **axios() 、axios.get()**  等
- 通过 **Promise.all()**    Promise.race()  Promise.resolve()  Promise.reject()
- 调用async函数，返回值是Promise对象

- 第二步：获取结果

- Promise对象.then(res => {}).catch(err => {})
- **async和await 配合**

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1668408852511-f6f8ab0f-5252-49a5-89e7-d6cc04c6d407.png#averageHue=%23f8f7f6&clientId=ufb074f17-8776-4&from=paste&height=450&id=u487463f9&originHeight=563&originWidth=1237&originalType=binary&ratio=1&rotation=0&showTitle=false&size=122695&status=done&style=none&taskId=uc965d249-76f4-42ce-940e-4a919b24424&title=&width=989.6)  
**其他小点**

- 多次调用 resolve() 或者 reject() ，只有第 1 次有效。
- new Promise() 中的代码是立即执行的；then() 里面的代码 和 await 下面一行的代码 会在同步代码之后执行，可以理解为是异步的

- `new Promise(() => { /*这里的代码是立即执行的*/ })`
- `then(res => { /* 这是代码是异步的 */ })`
- `await **下面的**  （不是后面的）代码是异步的`

- 链式调用then方法：前一个then返回Promise对象的话，结果会被下一个then 或最后的 catch 得到
- async函数如果有返回值，相当于函数返回了Promise对象，原来的返回值会被传递给 resolve()
- async函数中如果需要返回一个失败状态的 Promise对象，则 `return Promise.reject()`