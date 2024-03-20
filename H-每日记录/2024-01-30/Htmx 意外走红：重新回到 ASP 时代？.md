---
名称: 
图片: https://raw.githubusercontent.com/bigskysoftware/htmx/master/www/static/img/htmx_logo.1.png
地址:
---
  
在前后端分离和单页面应用（SPA）已经形成大局的 2023 年，却有一款基于动态服务器页面（ASP）思想的框架 htmx 意外走红。它在 2023 年 JavaScript 明星前端框架中排名第二，仅此 React。接下来就让笔者带大家了解一下 Htmx 究竟是何方神圣以及 Htmx 的爆火是否意味着前端要开历史的倒车重回 ASP 时代呢？

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/VY8SELNGe946Jq4gqAGyahcWC31ZmbcoMceOWxaicYKgwv0gdL9pr4TpCxnRrktaQK4fEHwy7WLLw8c2hcPhAMQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

  

1)  Htmx 是什么

htmx 是一款基于 ASP 思想的前端框架，也可以理解成增强型的 HTML。它允许开发者通过增强 HTML 的特写属性来实现页面的实时交互和动态更新，而不是编写大量的 JavaScript 代码，所以因其小巧的文件体积和能够与现有的服务端框架无缝集成而受到赞誉。Htmx 的实现原理是通过 AJAX、HTML5 和 WebSocket 等技术，将前端和后端的交互方式从传统的请求-响应模式转变为增量更新模式。更多具体的介绍可以参考文章 htmx-使HTML更强大 - 知乎，笔者在此不在赘述。（https://zhuanlan.zhihu.com/p/653008546）

2)  Htmx 是传统思路的回归

如今，React、Vue 等前端主流框架使用的都是单页面应用（SPA），目前也是创建 Web 应用程序的主流方式，前后端采用 JSON 数据进行交互。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/VY8SELNGe946Jq4gqAGyahcWC31ZmbcoU8KC6jorlh2ymiblicbx5AraS6jrJWycboLPSTF5dxYhwCncOc8c938w/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

（图选自 More on HTMX – Back to the Future | Compositional IT）

  

而 Htmx 则是由服务端处理页面交互和响应，例如 UI 事件会被发送至服务端进行处理，并生成 html 本体返回客户端。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/VY8SELNGe946Jq4gqAGyahcWC31Zmbcov4DjJFXCTRFyl06NACbSDGnPUOcpyMdAW79KWJhoIkAiaicax5xyf0ZQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

（图选自 More on HTMX – Back to the Future | Compositional IT）

  

但是笔者认为 Htmx 虽然有它的优点所在，但是在生产环境的使用上还是存在非常大的局限性：

1. 由于需要向 HTML 代码中添加非常多的“增强属性”，HTML 会变得非常臃肿，可读性和可维护性会变得非常差，不适用于大型项目的开发。
    
2. 目前 React、Vue 等 SSR 直出渲染已经能够具有非常好的首屏性能了，笔者认为服务端只需要做好首屏渲染就好了，所有渲染逻辑统一收归服务端渲染后返回 HTML 片段会造成更大的服务器压力。
    

  

总而言之，Htmx 的意外走红并不是 Web 应用开发模式开倒车的征兆，是各自适应场景不同，适合简单的页面，或者前端经验缺乏的人使用。
