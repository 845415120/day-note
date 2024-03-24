---
时间: 12分
作者: "\r技术蛋老师"
标题: HTTP是什么？
图片: https://i0.hdslb.com/bfs/archive/80cb01b2d88a4af46547b603ec44339c342960cc.jpg@518w_290h_1c_!web-video-share-cover.webp
链接: https://www.bilibili.com/video/BV1zb4y127JU/?vd_source=e815fa5e2c428a98163e9d19be40ec58
评价: ★★★★★
---
### HTTP协议

在Web应用中，浏览器请求一个URL，服务器就把生成的HTML网页发送给浏览器，而浏览器和服务器之间的传输协议是HTTP，所以：

- HTML是一种用来定义网页的文本，会HTML，就可以编写网页；
    
- HTTP是在网络上传输HTML的协议，用于浏览器和服务器的通信。
    

HTTP协议是一个基于TCP协议之上的请求-响应协议，它非常简单，我们先使用Chrome浏览器查看新浪首页，然后选择View - Developer - Inspect Elements就可以看到HTML：

![html](https://www.liaoxuefeng.com/files/attachments/1328544634372161/l)

切换到Network，重新加载页面，可以看到浏览器发出的每一个请求和响应：

![http](https://www.liaoxuefeng.com/files/attachments/1328544883933249/l)

 使用Chrome浏览器可以方便地调试Web应用程序。

对于Browser来说，请求页面的流程如下：

1. 与服务器建立TCP连接；
2. 发送HTTP请求；
3. 收取HTTP响应，然后把网页在浏览器中显示出来。

浏览器发送的HTTP请求如下：

```
GET / HTTP/1.1
Host: www.sina.com.cn
User-Agent: Mozilla/5.0 xxx
Accept: */*
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8
```

其中，第一行表示使用`GET`请求获取路径为`/`的资源，并使用`HTTP/1.1`协议，从第二行开始，每行都是以`Header: Value`形式表示的HTTP头，比较常用的HTTP Header包括：

- Host: 表示请求的主机名，因为一个服务器上可能运行着多个网站，因此，Host表示浏览器正在请求的域名；
- User-Agent: 标识客户端本身，例如Chrome浏览器的标识类似`Mozilla/5.0 ... Chrome/79`，IE浏览器的标识类似`Mozilla/5.0 (Windows NT ...) like Gecko`；
- Accept：表示浏览器能接收的资源类型，如`text/*`，`image/*`或者`*/*`表示所有；
- Accept-Language：表示浏览器偏好的语言，服务器可以据此返回不同语言的网页；
- Accept-Encoding：表示浏览器可以支持的压缩类型，例如`gzip, deflate, br`。

服务器的响应如下：

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 21932
Content-Encoding: gzip
Cache-Control: max-age=300

<html>...网页数据...
```

服务器响应的第一行总是版本号+空格+数字+空格+文本，数字表示响应代码，其中`2xx`表示成功，`3xx`表示重定向，`4xx`表示客户端引发的错误，`5xx`表示服务器端引发的错误。数字是给程序识别，文本则是给开发者调试使用的。常见的响应代码有：

- 200 OK：表示成功；
- 301 Moved Permanently：表示该URL已经永久重定向；
- 302 Found：表示该URL需要临时重定向；
- 304 Not Modified：表示该资源没有修改，客户端可以使用本地缓存的版本；
- 400 Bad Request：表示客户端发送了一个错误的请求，例如参数无效；
- 401 Unauthorized：表示客户端因为身份未验证而不允许访问该URL；
- 403 Forbidden：表示服务器因为权限问题拒绝了客户端的请求；
- 404 Not Found：表示客户端请求了一个不存在的资源；
- 500 Internal Server Error：表示服务器处理时内部出错，例如因为无法连接数据库；
- 503 Service Unavailable：表示服务器此刻暂时无法处理请求。

从第二行开始，服务器每一行均返回一个HTTP头。服务器经常返回的HTTP Header包括：

- Content-Type：表示该响应内容的类型，例如`text/html`，`image/jpeg`；
- Content-Length：表示该响应内容的长度（字节数）；
- Content-Encoding：表示该响应压缩算法，例如`gzip`；
- Cache-Control：指示客户端应如何缓存，例如`max-age=300`表示可以最多缓存300秒。

HTTP请求和响应都由HTTP Header和HTTP Body构成，其中HTTP Header每行都以`\r\n`结束。如果遇到两个连续的`\r\n`，那么后面就是HTTP Body。浏览器读取HTTP Body，并根据Header信息中指示的`Content-Type`、`Content-Encoding`等解压后显示网页、图像或其他内容。

通常浏览器获取的第一个资源是HTML网页，在网页中，如果嵌入了JavaScript、CSS、图片、视频等其他资源，浏览器会根据资源的URL再次向服务器请求对应的资源。