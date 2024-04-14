---
时间: 2023-12-10
标题: axios
图片: 
链接: 
tags: 
评价:
---
![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1667890872701-cc839377-b134-4aa3-aac8-b10f78b78238.jpeg)



# 基础概念

- 服务器

- 一台存储网站内容、网站文件的电脑

- 资源

- 网站中使用的文件（html、css、图片、......）这些东西就叫做资源
- 数据也是服务器上的资源，而且是一个网站的灵魂

- 客户端

- 客户端应该指上网的设备
- 但是在前端开发中，可以把浏览器理解为客户端即可。

- URL

- **对服务器上的数据，进行查询、新增、修改、删除等操作，都需要URL**

- URL的构成

- 对于一个项目来说，一般情况下 协议、主机地址、端口号都是不会变
- 协议、主机地址、端口号组成的这一部分叫做根路径。
- 注意标点符号
- 这个网址是由后端程序员提供的，作为前端人员就是拿来使用。

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1660268752663-28136185-a5d4-4953-9ff9-ef52875a7c6b.png#averageHue=%23f9f7f6&clientId=u94432141-f8c9-4&from=paste&height=273&id=uc5f9c528&originHeight=341&originWidth=704&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32559&status=done&style=none&taskId=ue9ad31c6-9e8c-48b7-ba87-86baac035c0&title=&width=563.2)

# 请求和响应

- 什么是请求

- 客户端 向服务器 要资源的 过程
- 客户端 向服务器 提交资源的过程
- ...........
- 通过 url 地址，连接到服务器，广义上讲都叫做请求

- 请求是由谁发送的

- 客户 （客户端）

- 什么是响应

- 客户端发送了请求，服务器做出的回应，叫做响应

- 响应是谁做出的

- 服务器

- **5种常用的请求方式** （**不同的请求目的，对应着不同的请求方式** ）

- 查询获取数据 --- 请求方式：GET
- 添加数据 --- 请求方式：POST
- 删除数据 --- 请求方式：DELETE
- 修改数据 --- 请求方式：PUT / PATCH

- PUT侧重于完整的修改
- PATCH侧重于部分修改

- 了解到Ajax的作用

![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1660232336671-149dfe50-0a1e-45c5-b200-7323a95b817a.jpeg)

# Axios库介绍

官方网站：[https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)  
中文网站1：[https://www.axios-http.cn/](https://www.axios-http.cn/)  
中文网站2：[http://www.axios-js.com/zh-cn/docs/](http://www.axios-js.com/zh-cn/docs/)  
使用之前，需要准备axios.js

- 使用 CDN 的方式加载 （加载其他服务器上的 axios.js 文件）

- 或者下载到自己的电脑，然后使用

[axios.js](https://www.yuque.com/attachments/yuque/0/2022/js/22014993/1660232614710-791f416d-a566-4fd8-9e14-df395c14c085.js)

# 语法练习：GET请求

```js
<!-- 引入axios.js -->
<script src="./axios.js"></script>

<script>
  // 练习，发送GET请求
  // axios().then()
  // axios({ /* 请求的配置 */ }).then(result => { /* result.data 就是响应结果 */ })

  axios({
    // 键: 值,
    // 键: 值,
    method: 'GET', // method 指定请求方式; GET不区分大小写，建议大写
    url: 'http://www.itcbc.com:3006/api/getbooks'
  }).then(result => {
    console.log(result.data) // result.data 才是真正的服务器响应的结果
  })
  
  
  // ------------------------ 使用解构赋值的方式，直接获取服务器返回的结果----------
  axios({
    method: 'GET', // GET不区分大小写；GET是默认值，如果不写method，表示发送的就是GET请求
    url: 'http://www.itcbc.com:3006/api/getbooks', // url必须小写。url的值，抄就可以了
  }).then(({ data: res }) => {
    console.log(res); // res 表示服务器返回的结果
  })

</script>
```

# 语法练习：带条件的GET请求

带条件的查询，另一个说法是 带查询参数  
在请求的配置项中，加 `params`配置即可。

```js
// axios({ /* 请求的配置 */ }).then(result => {})
axios({
  // method: 'GET', // method不写，默认表示发送的就是GET请求
  url: 'http://www.itcbc.com:3006/api/getbooks',
  // 通过 params 来指定查询条件，或查询参数
  params: {
    id: 2,
    bookname: '红楼梦'
  }
}).then(({ data }) => {
  console.log(data)
})
```

# 语法练习：POST请求

提交的bookname、author、publisher 单词不能写错，值要求是2~10个字符

```js
<button>添加一本书</button>
<script src="./axios.js"></script>
<script>
  // 发送POST请求，目的是提交数据给服务器，让服务器那边添加这条数据
  // 点击按钮的时候，在发送请求
  document.querySelector('button').addEventListener('click', function () {
    // axios().then()
    axios({
      method: 'POST',
      url: 'http://www.itcbc.com:3006/api/addbook',
      // 指定提交的数据
      data: {
        bookname: '史记', // bookname固定写法，不能改；值要求2~10个字符
        author: '司马迁',
        publisher: '北京出版社'
      }
    }).then(({ data }) => {
      console.log(data)
    })
  })
</script>
```

# 接口及接口文档

发送请求的时候，用什么地址？请求方式是什么？该提交哪些参数？这个请求是干什么的？

- 接口就是请求的那个地址，大家称它为 数据接口，简称接口
- 接口是后端同学设计的
- 后端同学需要出具一个接口的使用说明书，也就是接口文档
- 前端同学，要会看接口文档，会根据接口文档发送请求

**Ajax课上使用的接口文档** ：[https://docs.apipost.cn/preview/f62dc0b91dc8d8ea/c31d9a50dccf65e3](https://docs.apipost.cn/preview/f62dc0b91dc8d8ea/c31d9a50dccf65e3)

# 用params还是data

看接口文档即可。

- 接口文档写的是”**查询参数** ”或者”**Query参数** ”或者”**请求参数** ”，则使用 **params**
- 接口文档写的是”**请求体** ”或者 ”**body参数** ”，则使用 **data**

# 案例 - 获取数据展示到表格

```
// --------------------- 1. 获取图书并展示 -----------------
// let fn = () => {}
function renderBooks () {
  // 发送ajax请求，获取图书
  axios({
    method: 'GET',
    url: 'http://www.itcbc.com:3006/api/getbooks',
    params: {
      appkey: 'laotang110022'
    }
  }).then(({ data: res }) => {
    // console.log(res)
    // 渲染到表格中
    const arr = res.data.map(item => {
      return `<tr>
                <th scope="row">${item.id}</th>
                <td>${item.bookname}</td>
                <td>${item.author}</td>
                <td>${item.publisher}</td>
                <td>
                  <button type="button" class="btn btn-link btn-sm btn-delete">删除</button>
                  <button type="button" class="btn btn-link btn-sm btn-update">编辑</button>
                </td>
              </tr>`
    })
    // console.log(arr.join(''))
    document.querySelector('tbody').innerHTML = arr.join('')
  })
}
renderBooks()

// --------------------- 2. 添加图书 ----------------------
// --------------------- 3. 删除图书 ----------------------
// --------------------- 4. 修改图书 ----------------------
```

# 补充 - bootstrap的模态框

```
<div class="modal fade" id="addModal">
  <!-- 这就是一个bootstrap的模态框 -->
</div>

<script>
  let 变量 = new bootstrap.Modal(模态框盒子)
  变量.show() // 让模态框显示
  变量.hide() // 让模态框隐藏
</script>
```

# 案例-添加图书

【1】修改添加按钮

- 加入 id
- 去掉两个自定义属性

```
<button id="add-btn" class="btn btn-success btn-sm">添加</button>
```

【2】点击添加，显示模态框

```
const myModal = new bootstrap.Modal(document.querySelector('#addModal'))
// myModal.show() // 让模态框显示
// myModel.hide() // 让模态框隐藏
document.querySelector('#add-btn').addEventListener('click', function () {
  myModal.show() // 让模态框显示
})
```

【3】点击模态框中的确认按钮，完成添加

```
// 点击模态框中的确认按钮，完成添加
document.querySelector('#addBtn').addEventListener('click', function () {
  // 最终目标，就是把输入框的值，提供给接口
  const bookname = document.querySelector('#addForm [name=bookname]').value
  const author = document.querySelector('#addForm [name=author]').value
  const publisher = document.querySelector('#addForm [name=publisher]').value
  // console.log(bookname, author, publisher)
  axios({
    method: 'POST',
    url: 'http://www.itcbc.com:3006/api/addbook',
    data: {
      bookname: bookname,
      author: author,
      publisher: publisher,
      appkey: 'laotang110022'
    }
  }).then(({ data: res }) => {
    // console.log(res)
    // 添加成功
    myModal.hide() // 关闭模态框
    document.querySelector('#addForm').reset() // 重置表单
    renderBooks() // 重新获取全部图书，重新渲染
  })
})
```

# 加入appkey区分数据

**获取图书** 的时候，通过 params 添加 appkey参数，因为接口文档写的是查询参数：

```
axios({
  method: 'GET', // method 指定请求方式; GET不区分大小写，建议大写
  url: 'http://www.itcbc.com:3006/api/getbooks',
+  params: {
+    appkey: 'laot33ang'
+  }
})
```

**添加图书** 的时候：在data中加appkey，因为接口文档写的是请求体：

```
axios({
  method: 'POST',
  url: 'http://www.itcbc.com:3006/api/addbook',
  // 接口文档描述的是 query参数 或 查询查询，代码要使用 params
  // 接口文档描述的是 body参数 或 请求体，代码要使用 data
+  data: { bookname, author, publisher, appkey: 'laot33ang' }
})
```

**重点：**

- **自己用自己的 appkey，这样就表示使用自己的私有数据了**
- **无论是什么操作，比如获取数据、添加数据，删除数据，修改数据，appkey的值必须相同**

# Network - 网络面板（重点）

**专门用于排查网络请求错误的** 。

- 面板介绍

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652779728053-db375914-93c9-42a7-b684-16728b6f2dd1.png#averageHue=%23f6f2e1&clientId=u45e8646b-03c1-4&from=paste&height=470&id=u68949b32&originHeight=588&originWidth=1494&originalType=binary&ratio=1&rotation=0&showTitle=false&size=263717&status=done&style=none&taskId=u87c514bb-c9b7-4cec-868b-633a7904cb8&title=&width=1195.2)

- 隐藏时间轴（可选）

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652779761268-152f10f2-370d-49e2-9a30-c8c630b9df84.png#averageHue=%2375cf9a&clientId=u45e8646b-03c1-4&from=paste&height=429&id=u2682ae3c&originHeight=536&originWidth=1298&originalType=binary&ratio=1&rotation=0&showTitle=false&size=212349&status=done&style=none&taskId=u7960c61b-1ec2-4693-8fdb-27cf12c0b10&title=&width=1038.4)

- 禁用浏览器缓存（可选）

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652779790094-e8419d23-4122-448f-9a00-9ea73727fe50.png#averageHue=%239cc1ac&clientId=u45e8646b-03c1-4&from=paste&height=351&id=u8e03fe3e&originHeight=439&originWidth=1293&originalType=binary&ratio=1&rotation=0&showTitle=false&size=198127&status=done&style=none&taskId=u118f783b-11a0-4a58-ae09-4232b786fa5&title=&width=1034.4)

- 模拟网速（**看看就行，不要乱调** ）

- No throttling  -- 不限速
- Fast 3G  -- 模拟快速3G网络
- Slow 3G – 模拟慢速3G网络

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652779814819-b3c42b5d-6e79-40d6-aedf-0fbb6469e195.png#averageHue=%23e8e8e2&clientId=u45e8646b-03c1-4&from=paste&height=347&id=u0dde7ec1&originHeight=434&originWidth=1297&originalType=binary&ratio=1&rotation=0&showTitle=false&size=200232&status=done&style=none&taskId=u40cd7544-2a51-4b25-9e06-42639fbb9e2&title=&width=1037.6)

- 显示请求方式（建议）

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652779899123-4713ed60-c8cb-4181-ab37-9fcbd36045ce.png#averageHue=%23f2e9ca&clientId=u45e8646b-03c1-4&from=paste&height=325&id=u66dab6fc&originHeight=406&originWidth=1484&originalType=binary&ratio=1&rotation=0&showTitle=false&size=203977&status=done&style=none&taskId=ud1289313-65f8-493d-9bc1-d941ca87f15&title=&width=1187.2)

- 查看请求状态码（目前了解）

- 200 表示成功
- pending 表示等待（可能网络不好或者断网了）
- 4xx 和 5xx 都表示不同程度的错误
- Failed 表示失败

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652779926149-4b695f5c-8afb-4099-92fc-5a8da703588c.png#averageHue=%239ad1b0&clientId=u45e8646b-03c1-4&from=paste&height=266&id=uced25283&originHeight=332&originWidth=1452&originalType=binary&ratio=1&rotation=0&showTitle=false&size=127851&status=done&style=none&taskId=u12982c61-16d3-486f-9bc3-daebb9ff17a&title=&width=1161.6)

- **查看提交的数据（非常重要）**

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652780041074-69ae216a-265f-4a6c-9243-f15c4a366718.png#averageHue=%23a8c2aa&clientId=u45e8646b-03c1-4&from=paste&height=350&id=u2c81692b&originHeight=438&originWidth=1666&originalType=binary&ratio=1&rotation=0&showTitle=false&size=99179&status=done&style=none&taskId=u5fdb4826-f565-4c45-a88a-8d037fffd09&title=&width=1332.8)

- **查看响应结果（非常重要）**

![](https://cdn.nlark.com/yuque/0/2022/png/22014993/1652780085283-5dda6624-340c-468a-98c9-30c917c3263d.png#averageHue=%23c1d8c4&clientId=u45e8646b-03c1-4&from=paste&height=322&id=u34263258&originHeight=403&originWidth=1658&originalType=binary&ratio=1&rotation=0&showTitle=false&size=106895&status=done&style=none&taskId=ub86e63a5-039c-40a1-91c7-3491fe373a4&title=&width=1326.4)

# 案例-删除图书

删除需要使用id，所以在循环遍历的时候，给每个 删除 按钮，添加好自定义属性，用于存储当前这条数据的id，代码如下：

```
const arr = res.data.map(item => {
  return `<tr>
            <th scope="row">${item.id}</th>
            <td>${item.bookname}</td>
            <td>${item.author}</td>
            <td>${item.publisher}</td>
            <td>
              <button data-id="${item.id}" type="button" class="btn btn-link btn-sm btn-delete">删除</button>
              <button type="button" class="btn btn-link btn-sm btn-update">编辑</button>
            </td>
          </tr>`
})
```

JS代码如下：

```
// ------------------------------------ 3. 删除功能 ----------------------------------
// 1. 使用事件委托的方式，为删除添加单击事件
document.querySelector('tbody').addEventListener('click', function (e) {
  // console.log(e.target.classList.contains('btn-delete'))
  // 判断，点击的目标元素，是否包含 btn-delete 这个类名（如果包含，说明点击的是删除）
  if (e.target.classList.contains('btn-delete')) {
    // 2. 点击的时候，获取到当前这条数据的id（循环遍历的时候，给每个删除添加 data-id 属性；点击删除的时候获取这个属性值）
    let id = e.target.dataset.id
    // console.log(id)
    // 3. 发送请求，删除数据
    axios({
      method: 'DELETE',
      url: 'http://www.itcbc.com:3006/api/delbook',
      params: {
        id: id,
        appkey: 'laotang0099'
      }
    }).then(({ data: res }) => {
      // console.log(res)
      renderBooks() // 调用renderBooks() 重新获取最新的数据，重新渲染到页面中
    })
  }
})
```

# 案例-修改图书

## 点击编辑显示模态框

在删除的基础之上，再加一个判断即可。

```
// 编辑的模态框
let editModal = new bootstrap.Modal(document.getElementById('editModal'))

document.querySelector('tbody').addEventListener('click', function (e) {

  // 判断点击的是否是删除
  if (e.target.classList.contains('btn-delete')) {
    // 删除的代码，略.........
  }

  // 判断点击的是否是编辑
  if (e.target.classList.contains('btn-update')) {
    // console.log('点击的是编辑')
    // 点击的是编辑 --> 显示模态框
    editModal.show()
  }

}
```

## 数据回填

所有的修改，都需要数据回填。  
数据回填，也叫做数据回显。就是把修改的这条数据放回到 输入框 中。  
具体做法：循环遍历的时候，用 编辑 按钮的 data-xxx 属性，将数据存储起来：

```
<button 
  data-id="${item.id}" 
  data-bookname="${item.bookname}" 
  data-author="${item.author}" 
  data-publisher="${item.publisher}" 
  type="button" 
  class="btn btn-link btn-sm btn-update"
>编辑</button>
```

点击编辑的时候，获取这些data-xxx属性值，设置给输入框即可：

```js
// 判断，点击的是否是编辑
if (e.target.classList.contains('btn-update')) {
  // console.log('点击的是编辑')
  // 获取4个 data-xxx 属性值
  let shuju = e.target.dataset // e.target 表示点击的编辑按钮； dataset 可以获取元素所有的 data-xxx 属性值
  // console.log(shuju)
  // 当前这本书的数据已经得到了，下面设置输入框的默认值
  document.querySelector('#editModal [name=bookname]').value = shuju.bookname
  document.querySelector('#editModal [name=author]').value = shuju.author
  document.querySelector('#editModal [name=publisher]').value = shuju.publisher
  document.querySelector('#editModal [name=id]').value = shuju.id
  // 点击的是编辑 --> 显示模态框
  editModal.show()
}
```

## 点击确认完成修改

```js
// --------------------------- 点击 编辑模态框中的 确认，完成修改 -----------------------
document.querySelector('#editBtn').addEventListener('click', function () {
  // 获取输入框的值
  let id = document.querySelector('#editModal [name=id]').value
  let bookname = document.querySelector('#editModal [name=bookname]').value
  let author = document.querySelector('#editModal [name=author]').value
  let publisher = document.querySelector('#editModal [name=publisher]').value
  // 发送ajax请求，提交数据即可
  axios({
    method: 'PUT',
    url: 'http://www.itcbc.com:3006/api/updatebook',
    data: { id, bookname, author, publisher, appkey: 'laotang0099' }
  }).then(result => {
    console.log(result.data)
    // 关闭弹框
    editModal.hide()
    // 调用 renderBooks() 重新渲染数据
    renderBooks()
  })
})
```


