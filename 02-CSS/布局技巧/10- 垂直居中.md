---
时间: 11分
作者: "\r技术蛋老师"
标题: CSS垂直居中 
图片: https://i0.hdslb.com/bfs/archive/4a1c5b051d00082c3fa509199a661546c5351b0e.jpg@480w_300h_1c_!web-space-channel-video.webp
链接: https://www.bilibili.com/video/BV167411y7m5
评价: ★★★★★
---
#### 水平居中[​](https://richard-docs.netlify.app/notes/css/n-001#%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD)

- 如果元素为行内元素，给父元素设置 text-align:center
- 如果元素宽度固定，可以设置左右 margin 为 auto ;
- 如果元素为绝对定位，给父元素设置 position: relative ，元素设 left:0;right:0;transform: translateX(-50%);
- flex 布局，justify-content: center
- display 设置为 tabel-ceil

#### 垂直居中[​](https://richard-docs.netlify.app/notes/css/n-001#%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD)

- display: table-cell,同时设置 vertial-align：middle
- flex 布局，align-items：center
- 绝对定位中设置 bottom:0,top:0 ,并设置 margin:auto
- 绝对定位中固定高度时设置 top:50%，margin-top 值为高度一半的负值
- 文本垂直居中设置 line-height 为 height 值

#### 黑科技[​](https://richard-docs.netlify.app/notes/css/n-001#%E9%BB%91%E7%A7%91%E6%8A%80)

- 为父元素设置 display: flex/grid 子元素设置 margin: auto

## 水平垂直居中

### 定位

```
.parent {
      width: 500px;
      height: 500px;
      position: relative;
    }

    .child {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* 使⽤css3的transform来实现 */
    }
```

### flex


```
.parent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 600px;
      height: 600px;
      background: yellow;
    }

    .child {
      color: #fff;
      width: 300px;
      height: 300px;
      background-color: blue;
    }
```

