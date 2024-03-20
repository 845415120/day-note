---
时间: 11分
作者: "\r技术蛋老师"
标题: JavaScript九九乘法表 
图片: https://i2.hdslb.com/bfs/archive/321986ce1b7f604350307fad44763c60065f1e83.jpg@480w_300h_1c_!web-space-channel-video.webp
链接: https://www.bilibili.com/video/BV1xE41197mw
评价: ★★★★★
---
```JavaScript
for (var i = 1; i < 10; i++){ 
  for (var j = 1; j <= i; j++){
    document.write(j + "*" + i + "=" + j * i )
  }
  document.write("<br/>")
}
```