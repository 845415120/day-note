
高亮是前端常用的一个操作，一般在搜索结果中高亮来强调搜索关键词中使用，一般做法是在结果中查找关键词，然后在外面包裹一个容器，提前把容器的样式定义好

那么我们在浏览器中，直接 Command+F 或者 Ctrl+F 在页面中搜索，搜索结果会有个高亮的显示，然后我们打开控制台，发现关键字的外面并没包裹一层容器，同时我们在 css 中也没有看到高亮的样式，那么这种效果是怎么做的呢
```js
<div id="box">hello react</div>

#box {
  text-align: center;
  margin-top: 200px;
  font-size: 20px;
}

// 获取到dom
const element = document.getElementById('box')

// 判断下当前浏览器是否支持这个api
if (CSS.highlights) {
  console.log('CSS.highlights is supported')

  // 创建选区
  const range = new Range()
  range.setStart(element, 0)
  range.setEnd(element, 1)

  // 创建高亮
  const highlight = new Highlight(range)
  // 注册高亮
  CSS.highlights.set('highlight', highlight)
}

#box::highlight(highlight) {
  background-color: rgb(32, 168, 130);
  color: white;
}
```
