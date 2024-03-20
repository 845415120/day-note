# vuepress

## 导航栏嵌套

版本 vuepress2.0.0

```Javascript
export default {
  navbar: [
    {
      text: "前端基础",
      children: [
        {
          text: "前端基础",
          children: [
            '/HTML/index.md',
            '/CSS/01-CSS属性：字体属性，文本属性和背景属性.md',
            '/Javascript/00-JavaScript起步.md',
            '/正则表达式.md/'
          ],
        },
        {
          text: "前端基础",
          children: [
            '/HTML/index.md',
            '/CSS/01-CSS属性：字体属性，文本属性和背景属性.md',
            '/Javascript/00-JavaScript起步.md',
            '/正则表达式.md/'
          ],

        },
        {
          text: 'ES6',
          link: '/ES6/01-ES6.md/',
        },
        {
          text: '你不知道的JavaScript上笔记',
          link: '/01闭包详解.md',
        },

      ]
    },
```

## 侧边栏 显示目录

```JavaScript
        '/HTML/': [  //不能是中文
          {
            children: [
              '/HTML/index.md'
            ],
          },
        ],
```
