---
时间: 11分
作者: "\r技术蛋老师"
标题: 如何用纯CSS绘制三角形
图片: https://i2.hdslb.com/bfs/archive/028358f090a89b1f8d958a5229f276cdbaca3fc1.jpg@480w_300h_1c_!web-space-channel-video.webp
链接: https://www.bilibili.com/video/BV1r4411d7Es
评价: ★★★★★
---
## 第一种 border

- 三边 border 设置为透明
- 一边 border 设置颜色

```css
width: 0;
border: transparent 10px solid;
border-bottom: black solid 10px;
```

## 第二种 linear-gradient 线性渐变

```css
width: 100px;
height: 100px;
background: linear-gradient(45deg, #000 50px, transparent 50px);
```



# CSS 三角形

主要用到的是border属性，也就是边框。实际上，border属性是右三角形组成的

```css

 div {
      width: 0;
      height: 0;
      border-top: 50px solid red;
      border-right: 50px solid transparent;
      border-left: 50px solid transparent;
    }

```

