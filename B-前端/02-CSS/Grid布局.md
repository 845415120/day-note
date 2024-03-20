# Grid

![image.png](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230713/image.27uvbqcbx05c.webp)
上图这样的布局，就是 Grid 布局的拿手好戏。

[CSS Grid 网格布局教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

[CSS Grid 生成器](https://layout.bradwoods.io/customize)

```vue
 <style>
    #container {
      display: grid;
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      /* 先列后行 */
      grid-auto-flow: row dense;
    }

    .item {
      font-size: 2em;
      text-align: center;
      border: 1px solid #e5e4e9;
    }

    .item-1 {
      background-color: #ef342a;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .item-2 {
      background-color: #f68f26;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .item-3 {
      background-color: #4ba946;
    }

    .item-4 {
      background-color: #0376c2;
    }

    .item-5 {
      background-color: #c077af;
    }

    .item-6 {
      background-color: #f8d29d;
    }

    .item-7 {
      background-color: #b5a87f;
    }

    .item-8 {
      background-color: #d0e4a9;
    }

    .item-9 {
      background-color: #4dc7ec;
    }

    .id {
      display: grid;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;
      grid-template-areas: "header header header"
        "main main sidebar"
        "footer footer footer";
    }
  </style>
</head>

<body>
  <div id="container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
    <div class="item item-9">9</div>
  </div>
  <div class="id"></div>
</body>

```
