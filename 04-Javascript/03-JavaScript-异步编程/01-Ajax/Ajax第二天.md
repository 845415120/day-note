## 上传头像
```js
// 1. 点击按钮，触发文件域的单击事件；这一步保证点击按钮可以选择图片
document.querySelector('#btnChoose').addEventListener('click', function () {
document.querySelector('#iptFile').click()
})
// 2. 文件域内容改变的时候，实现文件上传
document.querySelector('#iptFile').addEventListener('change', function () {
// console.log(1111)
// console.dir(this)
if (this.files.length > 0) {
// 表示我们选择了图片
let fileObj = this.files[0]
// console.log(fileObj)
// 判断文件大小（不能超过50kb） size: 17873字节 【1024字节 = 1kb 1024kb=1M 1024M=1G】
if (fileObj.size > 50 * 1024) {
return alert('文件不能超过50kb') // 左右结构的代码，右侧先执行；先执行alert，然后再return
}
// 只允许上传 png、gif、jpg、jpeg的图片
const allowType = ['image/png', 'image/gif', 'image/jpeg']
if (!allowType.includes(fileObj.type)) {
return alert('只允许上传png、gif、jpg图片')
}
let fd = new FormData()
fd.append('avatar', fileObj)
axios.post('http://www.itcbc.com:3006/api/formdata', fd).then(({ data: res }) => {
// console.log(res)
document.querySelector('img').src = res.data.filename
})
}
})
```


<p><img src="https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1668161522834-1b459c23-582e-4549-8c00-cdb6df0b4ced.jpeg" alt="">
<a name="ct3xH"></a></p>
<h1 id="回顾表单元素">回顾表单元素</h1>
<pre><code class="language-html">&lt;form action=""&gt;
  单行文本框：
  &lt;input type="text" name="username"&gt;&lt;br /&gt;
  密码框：
  &lt;input type="password" name="pwd"&gt;&lt;br /&gt;
  单项按钮组：
  &lt;input type="radio" value="nan" name="sex"&gt;男
  &lt;input type="radio" value="nv" name="sex"&gt;女&lt;br /&gt;
  复选按钮组：
  &lt;input type="checkbox" name="hobby" value="cf"&gt;吃饭
  &lt;input type="checkbox" name="hobby" value="sj"&gt;睡觉
  &lt;input type="checkbox" name="hobby" value="ddd"&gt;打豆豆&lt;Br /&gt;
  下拉框：
  &lt;select name="address"&gt;
    &lt;option value="bj"&gt;北京&lt;/option&gt;
    &lt;option value="sh"&gt;上海&lt;/option&gt;
    &lt;option value="gz"&gt;广州&lt;/option&gt;
  &lt;/select&gt;&lt;br /&gt;
  文件选择框：
  &lt;input type="file"&gt;&lt;br /&gt;
  多行文本框：
  &lt;textarea name="intro" cols="30" rows="3"&gt;&lt;/textarea&gt;&lt;br /&gt;
  隐藏域：
  &lt;input type="hidden" name="id" value="100"&gt;&lt;br /&gt;
  &lt;!-- h5新增：
  &lt;input type="color"&gt; --&gt;

  &lt;!-- 表单中的按钮 --&gt;
  &lt;!-- 1.提交按钮（点击之后会造成表单提交） --&gt;
  &lt;button id="tijiao"&gt;提交按钮1&lt;/button&gt;
  &lt;button type="submit"&gt;提交按钮2&lt;/button&gt;
  &lt;input type="submit" value="提交按钮3"&gt;
  &lt;hr&gt;
  &lt;!-- 2.普通按钮（点击之后不会有任何反应） --&gt;
  &lt;button type="button"&gt;普通按钮1&lt;/button&gt;
  &lt;input type="button" value="普通按钮2"&gt;
  &lt;hr&gt;
  &lt;!-- 3.重置按钮(点击之后，会重置表单) --&gt;
  &lt;button type="reset"&gt;重置按钮1&lt;/button&gt;
  &lt;input type="reset" value="重置按钮2"&gt;
&lt;/form&gt;
</code></pre>
<p><strong>注意事项</strong> ：</p>
<ul>
<li>表单各项，必须有name属性（和后续的数据提交有关系）</li>
<li>单项按钮组，只要同一组的按钮，name属性要一致，才叫做一组</li>
<li>单项按钮、复选按钮，都要设置value值，提交数据的时候，提交的是value值</li>
<li>下拉框，name属性要给 select标签；value属性要给 option标签
<a name="mx1J2"></a></li>
</ul>
<h1 id="js中获取表单各项值">JS中获取表单各项值</h1>
<pre><code class="language-javascript">// 点击按钮的时候，提交数据
// 1. 如果使用的是普通按钮
document.querySelector('#pt_button').addEventListener('click', function () {
  // 获取表单数据，然后通过 axios() 提交数据即可
  let username = document.querySelector('input').value
  console.log(username)
})

// 2. 如果点击的是提交按钮
document.querySelector('#tijiao').addEventListener('click', function (e) {
  // 如果点击的是提交按钮，则需要阻止默认行为
  e.preventDefault()
  let username = document.querySelector('input').value
  console.log(username)
})

// 3. 找到表单form，注册submit事件(必须配合提交按钮使用)
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()
  let username = document.querySelector('input').value
  console.log(username)
})
</code></pre>
<p><strong>在以后提交数据的时候，可以找到提交按钮，注册click事件；也可以找到form，注册submit事件，或者找到普通按钮，注册click事件，最终的效果是一样的</strong> 。</p>
<blockquote>
<p>总结：无论什么情况，找到按钮，注册单击事件，并且阻止默认行为。</p>
</blockquote>
<p><a name="HbXQE"></a></p>
<h1 id="form-value插件">form-value插件</h1>
<p><a name="Jb3Xj"></a></p>
<h2 id="说明和基本语法">说明和基本语法</h2>
<p>在获取表单数据的时候，如果一个一个的获取，无疑是很麻烦的。比如目前的添加图书：</p>
<pre><code class="language-javascript">let bookname = document.querySelector('#addForm [name=bookname]').value
let author = document.querySelector('#addForm [name=author]').value
let publisher = document.querySelector('#addForm [name=publisher]').value
......
......
......
</code></pre>
<p>那么如何快速的获取表单各项的值呢？<br>答案就是使用插件。<br>课程设计的时候，使用的是 form-serialize 插件；不过我推荐使用 <a href="https://www.npmjs.com/package/form-value">form-value</a> 插件<br>form-value 就是一个快速获取表单数据的插件。<br>该插件功能之一是快速获取表单各项的值，也可以快速进行数据回填。<br><strong>获取表单各项值</strong> 的语法如下：</p>
<pre><code class="language-html">&lt;form action=""&gt;
  用户名：&lt;input type="text" name="username"&gt;&lt;br /&gt;
  手机号：&lt;input type="text" name="phone" /&gt;&lt;br /&gt;
  性　别：&lt;input type="radio" name="sex" value="nan"&gt;男
  &lt;input type="radio" name="sex" value="nv"&gt;女&lt;br /&gt;
  籍　贯：
  &lt;select name="address"&gt;
    &lt;option value="bj"&gt;北京&lt;/option&gt;
    &lt;option value="sh"&gt;上海&lt;/option&gt;
    &lt;option value="gz"&gt;广州&lt;/option&gt;
  &lt;/select&gt;&lt;br /&gt;
  &lt;input type="hidden" name="id" value="100"&gt;
  &lt;button id="tijiao"&gt;提交&lt;/button&gt;
&lt;/form&gt;

&lt;script src="./form-value.js"&gt;&lt;/script&gt;
&lt;script&gt;
  document.querySelector('#tijiao').addEventListener('click', function (e) {
    e.preventDefault()
    // 使用插件提供的 val() 获取表单各项的值
    // let data = val(表单)
    let data = val(document.querySelector('form'))
    console.log(data)
  })
&lt;/script&gt;
</code></pre>
<p><strong>数据回填的语法</strong> 如下：</p>
<ol>
<li>要求表单各项的 name 属性值必须具备</li>
<li>准备对象格式的数据，要求对象的键 和 表单各项的 name 一致</li>
<li>使用 <code>val(表单, 数据)</code> 的语法，进行数据回填</li>
</ol>
<p>示例代码如下：</p>
<pre><code class="language-html">&lt;body&gt;
  &lt;form action=""&gt;
    书名：&lt;input type="text" name="bookname"&gt;&lt;br&gt;
    作者：&lt;input type="text" name="author"&gt;&lt;br /&gt;
    出版社：&lt;input type="text" name="publisher"&gt;&lt;br /&gt;
    性别：&lt;input type="radio" name="sex" value="nan"&gt;男
    &lt;input type="radio" name="sex" value="nv"&gt;女&lt;br&gt;
    下拉框：&lt;select name="address"&gt;
      &lt;option value="beijing"&gt;北京&lt;/option&gt;
      &lt;option value="shanghai"&gt;上海&lt;/option&gt;
      &lt;option value="guangzhou"&gt;广州&lt;/option&gt;
    &lt;/select&gt;
  &lt;/form&gt;

  &lt;script src="./form-value.js"&gt;&lt;/script&gt;
  &lt;script&gt;
    // 准备回填的数据
    let shuju = {
      // 要求对象的键和表单项的name一致
      bookname: 'aa',
      author: 'bb',
      publisher: 'cc',
      sex: 'nv',
      address: 'guangzhou'
    }
    // 数据回填
    // val(表单, 数据)
    val(document.querySelector('form'), shuju)
  &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<p><a name="GPFdL"></a></p>
<h2 id="图书管理案例使用form-value插件">图书管理案例使用form-value插件</h2>
<ul>
<li>添加图书时，使用 form-value 插件获取表单数据</li>
</ul>
<pre><code class="language-diff"> // 获取三个输入框的值
-// let bookname = document.querySelector('#addForm [name=bookname]').value
-// let author = document.querySelector('#addForm [name=author]').value
-// let publisher = document.querySelector('#addForm [name=publisher]').value

+let data = val(document.querySelector('#addForm'))
+// console.log(data) // {bookname: 'aa', author: 'bb', publisher: 'cc'}
+data.appkey = 'laotang0099' // 给data对象，加appkey

下面提交数据，直接用data
</code></pre>
<ul>
<li>修改图书时，数据回填的时候，使用插件快速回填数据</li>
</ul>
<pre><code class="language-diff"> let shuju = e.target.dataset
 // console.log(shuju) // {id: '2896', bookname: '遮天三部曲', author: '振东', publisher: '红毛怪'}
 // 数据回填（找到编辑弹框中的 input，然后设置value值）
+// val(表单, 数据)
+val(document.querySelector('#editForm'), shuju)

-// document.querySelector('#editModal [name=bookname]').value = shuju.bookname
-// document.querySelector('#editModal [name=author]').value = shuju.author
-// document.querySelector('#editModal [name=publisher]').value = shuju.publisher
-// document.querySelector('#editModal [name=id]').value = shuju.id
</code></pre>
<ul>
<li>修改图书时，使用form-value插件快速获取表单各项的值
<a name="HDuJh"></a></li>
</ul>
<h1 id="axios请求方法的别名">axios请求方法的别名</h1>
<p>”请求方法的别名”这个词是axios中文网站上写的。<br>实际上就是一些发送请求的简化写法，就是发送请求的另外的一些语法。</p>
<ul>
<li>实际使用，用前两天学的 <code>axios({ method: '', url: '' }).then()</code> 可以</li>
<li>实际使用，用现在即将学的简化方法，也行
<a name="Sumtc"></a></li>
</ul>
<h2 id="使用语法">使用语法</h2>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/22014993/1651042834229-65486717-b992-4d75-bc12-eba6d492009e.png#averageHue=%236e975f&amp;clientId=u0655ea89-69af-4&amp;from=paste&amp;height=367&amp;id=u0018eccc&amp;originHeight=459&amp;originWidth=1558&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=82240&amp;status=done&amp;style=none&amp;taskId=u625e2d0c-934c-4578-83d1-8f6bff3f5ff&amp;title=&amp;width=1246.4" alt="image.png"><br><img src="https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1668138288028-3624f1e0-16cc-45b8-9e1b-e623c073033c.jpeg" alt=""></p>
<pre><code class="language-javascript">// 以前发送GET请求，使用的是万能语法
// -------------------- 万能的写法 --------------------------------
axios({
  method: 'GET',
  url: 'http://www.itcbc.com:3006/api/getbooks',
  params: {
    appkey: 'laotang0099'
  }
}).then(({ data: res }) =&gt; {
  console.log(res)
})

// -------------------- GET和DELETE的简化写法 --------------------------------
// axios.get('url', 配置对象) // 配置对象可选，配置对象就是以前传递给 axios() 的那个对象
axios.get('http://www.itcbc.com:3006/api/getbooks', {
  params: {
    appkey: 'laotang0099'
  }
}).then(({ data: res }) =&gt; {
  console.log(res)
})


// ============================================================================
// ---------------------- POST请求、PUT请求、PATCH请求 ---------------------------
// axios.post('url', data, 配置对象).then()
axios.post('http://www.itcbc.com:3006/api/addbook', { bookname: 'aad', author: 'dd', publisher: 'dd' }).then(result =&gt; {
  console.log(result.data)
})
</code></pre>
<p><a name="IVABq"></a></p>
<h2 id="图书管理案例中使用简化方法">图书管理案例中使用简化方法</h2>
<blockquote>
<p>不是说学了简化方法，前面的 axios().then() 就不用了。</p>
</blockquote>
<ul>
<li>获取数据时，使用 axios.get() 试试</li>
<li>添加图书时，使用 axios.post() 试试</li>
<li>删除图书时，使用 axios.delete() 试试</li>
<li>修改图书时，使用 axios.put() 试试
<a name="AfgXN"></a></li>
</ul>
<h1 id="axios全局配置">axios全局配置</h1>
<p><a name="U0zw0"></a></p>
<h2 id="使用语法-1">使用语法</h2>
<p><strong>官方参考</strong> ：<a href="https://www.axios-http.cn/docs/config_defaults">https://www.axios-http.cn/docs/config_defaults</a><br><strong>全局配置了请求根路径，后面所有的请求，都不需要加请求根路径了</strong> </p>
<pre><code class="language-javascript">// 全局配置请求根路径
axios.defaults.baseURL = 'http://www.itcbc.com:3006';

//////////////////////////////////////
/////////////  全局配置了请求根路径，后面所有的请求，都不需要加请求根路径了  //////////////
//////////////////////////////////////
</code></pre>
<p><a name="J4hKk"></a></p>
<h2 id="图书管理案例中配置请求根路径">图书管理案例中配置请求根路径</h2>
<ul>
<li>在所有请求之前，配置请求根路径</li>
<li>后续的所有请求，都不需要再写请求根路径了
<a name="DQnVw"></a></li>
</ul>
<h1 id="axios拦截器">axios拦截器</h1>
<p>axios中的拦截器，分为请求拦截器和响应拦截器
<a name="NjGFn"></a></p>
<h2 id="使用语法-2">使用语法</h2>
<p>拦截器语法：<a href="https://www.axios-http.cn/docs/interceptors">https://www.axios-http.cn/docs/interceptors</a><br><img src="https://cdn.nlark.com/yuque/0/2022/png/22014993/1660373044723-560a734f-c9bf-459d-8539-500b2b4bc621.png#averageHue=%23fafaf9&amp;clientId=u760bef67-d2ff-4&amp;from=paste&amp;height=584&amp;id=udb2871d4&amp;originHeight=730&amp;originWidth=973&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=65490&amp;status=done&amp;style=none&amp;taskId=u17c47ac8-b89f-4880-ab60-45dad282565&amp;title=&amp;width=778.4" alt="image.png">
<a name="k8lXm"></a></p>
<h2 id="图书管理案例中使用拦截器">图书管理案例中使用拦截器</h2>
<p><strong>进度条插件</strong> ：</p>
<pre><code class="language-html">加载好 nprogress.css 
加载好 nprogress.js

如果需要让进度条显示，则调用 NProgress.start()  // N P 都是大写的
如果需要让进度条隐藏，则调用 NProgress.done()   // N P 都是大写的
</code></pre>
<p><strong>图书管理案例中使用</strong> ：</p>
<ul>
<li>加入请求拦截器和响应拦截器</li>
<li>在请求拦截器的第1个函数中，return config 之前，加入 NProgress.start()</li>
<li>在响应拦截器的两个函数中，都加入 NProgress.done() （在return那行之前加）</li>
</ul>
<p>拦截器是针对所有请求的，所以加好拦截器，无论是获取数据，添加数据，还是删除数据都会使得拦截器的代码执行，也就是都有进度条的效果了。
<a name="vB78K"></a></p>
<h1 id="formdata（重点）">FormData（重点）</h1>
<p><a name="DAhHU"></a></p>
<h2 id="基本使用">基本使用</h2>
<p>FormData 是一个浏览器内置对象。作用是用于获取表单数据。</p>
<ul>
<li>表单各项必须有 name 属性</li>
<li>let fd = new FormData(表单)  // 可以把表单中的数据收集到了</li>
<li>ajax提交的时候，直接提交 fd 即可</li>
</ul>
<pre><code class="language-html">&lt;body&gt;
  &lt;form action=""&gt;
    用户名：&lt;input type="text" name="username"&gt;&lt;br /&gt;
    密　码：&lt;input type="password" name="pwd"&gt;&lt;br /&gt;
    性　别：&lt;input type="radio" value="男" name="sex"&gt;男 &lt;input type="radio" value="女" name="sex"&gt;女&lt;br /&gt;
    &lt;button&gt;提交&lt;/button&gt;
  &lt;/form&gt;

  &lt;script src="./lib/axios.js"&gt;&lt;/script&gt;
  &lt;script&gt;
    axios.defaults.baseURL = 'http://www.itcbc.com:3006'
    // 点击按钮，会造成表单提交，阻止默认行为，使用 FormData 收集表单数据,Ajax提交数据
    document.querySelector('button').addEventListener('click', function (e) {
      e.preventDefault() // 阻止默认行为
      // let fd = new FormData(表单)
      let fd = new FormData(document.querySelector('form'))
      // ajax提交数据，也就是提交 fd 
      axios.post('/api/formdata', fd).then(result =&gt; {
        console.log(result.data)
      })
    })
  &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<p><a name="pQWO5"></a></p>
<h2 id="formdata相关的api">FormData相关的API</h2>
<ul>
<li><code>fd.append('键', 值)</code>  --- 向原有数据中，新增一个值</li>
<li><code>fd.delete('键')</code> --- 从原有数据中，移除一个值</li>
<li><code>fd.set('键', 值)</code> --- 修改原有数据中的一个值</li>
<li><code>fd.forEach((value, key) =&gt; {})</code> --- 遍历查看对象中有哪些数据</li>
</ul>
<pre><code class="language-javascript">axios.defaults.baseURL = 'http://www.itcbc.com:3006'

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault() // () 必须加
  // 使用内置的FormData收集表单各项数据
  // let fd = new FormData(表单)
  let fd = new FormData(this)
  // console.log(fd) // 直接输出fd，是看不见数据的

  // 1. 通过append来向 fd 对象中，追加一些数据
  fd.append('age', 20)

  // 2. 通过delete来删除 fd 对象中的数据
  fd.delete('pwd')

  // 3. 通过set来修改 fd 对象中的数据
  fd.set('sex', '妖')

  // 4. forEach遍历数据，通过它查看 fd 对象中有哪些数据
  fd.forEach((value, key) =&gt; {
    console.log(key, value)
  })
  // 下面，就可以把fd提交到服务器
  // axios({
  //   method: 'POST',
  //   url: '/api/formdata',
  //   data: fd,
  // })
  axios.post('/api/formdata', fd).then(({ data: res }) =&gt; {
    console.log(res)
  })
})
</code></pre>
<p><a name="dxSZg"></a></p>
<h1 id="上传文件">上传文件</h1>
<p>原理和提交其他文本值一样，只不过上传，提交的是一个文件而已。<br><strong>注意，文件选择框，name 必须是 avatar，因为接口要求的</strong> 。
<a name="p8JCo"></a></p>
<h2 id="利用form标签">利用form标签</h2>
<ul>
<li>new FormData() 的时候，传入 表单。这样就可以获取到表单项的值。</li>
</ul>
<pre><code class="language-html">&lt;body&gt;
  &lt;form action=""&gt;
    头像：&lt;input type="file" name="avatar"&gt;
    &lt;button&gt;上传&lt;/button&gt;
  &lt;/form&gt;

  &lt;script src="./axios.js"&gt;&lt;/script&gt;
  &lt;script&gt;
    document.querySelector('button').addEventListener('click', function (e) {
      e.preventDefault()
      // let fd = new FormData(表单)
      let fd = new FormData(document.querySelector('form'))
      axios.post('http://www.itcbc.com:3006/api/formdata', fd).then(({ data: res }) =&gt; {
        console.log(res)
      })
    })
  &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<p><a name="wVTII"></a></p>
<h2 id="单独上传">单独上传</h2>
<pre><code class="language-html">&lt;input type="file" multiple style="display:none;"&gt;
&lt;button&gt;选择文件&lt;/button&gt;
&lt;hr&gt;
&lt;img src="" alt=""&gt;
</code></pre>
<p>【1】点击按钮，能够选择图片</p>
<pre><code class="language-javascript">// 点击按钮，能够选择文件
document.querySelector('button').addEventListener('click', function () {
  // 用 代码的方式，触发一下 文件域的单击事件
  document.querySelector('input').click()
})
</code></pre>
<p>【2】文件域（文件选择框）值改变的时候，上传</p>
<ul>
<li>判断，是否选择了文件</li>
<li>获取文件对象</li>
<li>创建 FormData 对象</li>
<li>把文件对象，加入到 FormData 中</li>
<li>Ajax提交 FormData</li>
</ul>
<pre><code class="language-javascript">// 当 文件域 改变的时候，上传
document.querySelector('input').addEventListener('change', function () {
  // 判断一下，用户是否选择了文件
  if (this.files.length &gt; 0) {
    // console.log(1111)
    // 1. 找到文件对象【描述文件的对象】
    // console.dir(this)
    let fileObj = this.files[0]
    // 可以加入判断类型（type）、判断大小（size单位字节）
    // 2. 创建FormData对象，并且把文件对象加入到 FormData中
    let fd = new FormData()
    // fd.append('age', 'zlis')
    fd.append('avatar', fileObj)
    // 3. ajax提交FormData
    axios.post('http://www.itcbc.com:3006/api/formdata', fd).then(({ data: res }) =&gt; {
      console.log(res)
      document.querySelector('img').src = res.data.filename
    })
  }
})
</code></pre>
<p><a name="gNSFF"></a></p>
<h1 id="上传头像案例">上传头像案例</h1>
<pre><code class="language-javascript">// 1. 点击按钮，触发文件域的单击事件；这一步保证点击按钮可以选择图片
document.querySelector('#btnChoose').addEventListener('click', function () {
  document.querySelector('#iptFile').click()
})

// 2. 文件域内容改变的时候，实现文件上传
document.querySelector('#iptFile').addEventListener('change', function () {
  // console.log(1111)
  // console.dir(this)
  if (this.files.length &gt; 0) {
    // 表示我们选择了图片
    let fileObj = this.files[0]
    // console.log(fileObj)
    // 判断文件大小（不能超过50kb） size: 17873字节  【1024字节 = 1kb     1024kb=1M    1024M=1G】
    if (fileObj.size &gt; 50 * 1024) {
      return alert('文件不能超过50kb') // 左右结构的代码，右侧先执行；先执行alert，然后再return
    }
    // 只允许上传 png、gif、jpg、jpeg的图片
    const allowType = ['image/png', 'image/gif', 'image/jpeg']
    if (!allowType.includes(fileObj.type)) {
      return alert('只允许上传png、gif、jpg图片')
    }

    let fd = new FormData()
    fd.append('avatar', fileObj)
    axios.post('http://www.itcbc.com:3006/api/formdata', fd).then(({ data: res }) =&gt; {
      // console.log(res)
      document.querySelector('img').src = res.data.filename
    })
  }
})
</code></pre>
