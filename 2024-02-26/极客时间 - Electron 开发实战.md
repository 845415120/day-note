---
标题: 极客时间 - Electron 开发实战
图片: https://cdn5.cdn-telegram.org/file/PTH7Er95BF7XcVrztYP7zT1sx55scC076wRK7y4fMl6Xlst5ivNFc9vOaMv_xoxZ2VjfnuqUPhFvCS_9DUgRbRi4AT_CI6rG9XUaVs0DC9cCH2HxDZQhCK8DioNRMw65SadyAwTuNDPIjuym4VlnIkBZMWxaS7VTqP_U7nBbuSVoSxaR0vQqaSCgO3Jrw0SnpzvNYjgwFiOMgQwamHtA-r7Qt5CyNOZcTJQsiG1RzZs9Hbkl0i2TxVg5buIpahwHBzp3fnwPL41cReN0FoYmvwZ4otIVFFlMJW3shg4jcK28xK_xhtZCtC2N1RgwJhJhSMcOATqIhFoBZYYXYkzkyQ.jpg
链接: https://pan.quark.cn/s/30b6161a8b4b#/list/share
时时: 
评价:
---

# 学习路径

![](Pasted%20image%2020240226182110.png)

# Electron 

![](Pasted%20image%2020240226182404.png)

# 历史

![](Pasted%20image%2020240226182431.png)

# 03介绍

 Electron 框架，这是一个使用 HTML、CSS 和 JavaScript 开发原生桌面应用程序的开源框架。Electron 提供了强大的 UI 能力，可以利用 Web 生态系统开发界面，同时具备底层操作能力和跨平台解决方案。该框架的核心组成包括 Chromium、Node.js 和内置的 native API，使得开发桌面应用变得高效。了解 Electron 的历史可以追溯到浏览器发展的早期，其中 Mozilla、Chrome 和 Node.js 的发展对其产生了重要影响。Electron 的应用场景包括快速试错、开发特定领域的软件以及同时开发 Web 和桌面端应用。学习 Electron 不仅可以解决业务需求，还可以提升技术广度，使开发者成为复合型人才。
 
# Electron 最小组成
 
![](Pasted%20image%2020240226183225.png)


# 04丨揭秘Electron架构原理：Chromium + Node-js是如何一起工作？

## Chromium架构
![](Pasted%20image%2020240226183635.png)

Electron 和 Chromium 的架构以及它们是如何一起工作的。Chromium 是一个浏览器引擎，它采用了多进程架构，包括一个主进程和多个渲染进程。主进程负责创建窗口、管理浏览器标签页和扩展程序等，而渲染进程则负责处理具体页面的渲染和交互。这两种进程之间通过 IPC 进行通信。

Electron 利用 Chromium 来展示 Web 页面，并且也采用了多进程架构，包括主进程和渲染进程。不同之处在于，Electron 在各个进程中暴露了一些原生 API，并引入了 Node.js。这使得在 Electron 中可以使用 Chromium 和 Node.js 的功能，例如通过 Node.js 来管理窗口、在页面中使用 Node.js 库等。

在将 Node.js 整合到 Chromium 中时，需要解决两种不同事件循环的融合问题。一种方法是在 Chromium 中使用类似 Node.js 的事件循环，但这可能会涉及大量工作。另一种方法是通过轮询 Back up d 来检查 Node.js 中是否有新事件，然后将其转发到 Chromium 的事件循环中。这种方法实现了 Node.js 和 Chromium 事件循环的整合。

# 05丨桌面端技术选型：如何选择合适的桌面端技术？

1. 原生技术：使用各平台的原生语言编写应用，性能和体验好，但需要单独开发和维护，门槛较高。
2. Qt：基于 C++ 的跨平台开发框架，性能较好且跨平台，但门槛也较高。
3. Flutter：跨平台框架，但在 Linux 和 Windows 上应用较少，基建也不够完善。
4. Web 技术代表：如 NW.js 和 Electron，都是基于 Web 技术构建的跨平台框架，开发效率高，但包体积大且性能略低。


# 06丨Electron开发准备：环境搭建及前期准备
  
在开发一个 Electron 应用之前，需要做一些准备工作。以下是项目搭建的主要步骤：

1. **选择合适的编辑器**：推荐使用 Visual Studio Code（简称 VS Code），因为它对 Electron 的支持很好，并提供了 TypeScript 调试等功能。其他编辑器如 Atom、WebStorm 也是不错的选择，具体选择可以根据个人喜好和习惯来决定。
    
2. **安装 Node.js**：在使用 Electron 之前，首先需要安装 Node.js。建议使用 nvm（Node Version Manager）来管理 Node.js 的安装，在 macOS 上可以通过脚本进行安装，而在 Windows 上需要从 nvm 的历史版本中下载并安装。
    
3. **安装特定版本的 Node.js**：根据项目需求，安装特定版本的 Node.js。可以通过 nvm 安装指定版本的 Node.js，然后使用 `node -v` 和 `npm -v` 命令验证安装结果。
    
4. **安装 Electron**：使用 npm（Node.js 包管理器）来安装 Electron。可以通过运行 `npm install -g electron` 命令来全局安装 Electron。
    
5. **验证 Electron 安装**：安装完成后，可以运行 `electron -v` 命令来验证 Electron 是否成功安装。如果使用的是 npm 版本大于 5.2，则可以直接使用 `npx electron` 命令。

# 07丨开发一个简单版的番茄钟（上）

# 08丨开发一个简单版的番茄钟（下）

# 09丨与Web开发不同（一）：主进程与渲染进程

![](Pasted%20image%2020240226194539.png)


1. 主进程和渲染进程的定义：主进程是运行 packed Jason main 脚本的进程，负责管理原生 GUI、创建渲染进程和控制应用的整个生命周期；而渲染进程类似于普通的 web 页面，但可以使用 Node.js 访问系统底层资源。
    
2. 主进程和渲染进程的职责：主进程管理应用的生命周期、原生 GUI、窗口等，而渲染进程负责加载具体的页面，并与主进程进行通信。
    
3. Native 模块的重要性：主进程和渲染进程中都有很多 Native 模块，它们可以提升产品的体验。主进程大约有 20 多个 Native 模块，渲染进程有 8 个，其中一些模块在两个进程中都可以使用。
    
4. 常用的 Native 模块：你简要介绍了一些常用的 Native 模块，如 APP 模块管理应用生命周期，Window 模块管理窗口，Menu 模块创建原生菜单等等。
    
5. 学习建议：建议关注主进程和渲染进程中常用的一些模块，并在需要时快速查看官方文档。
# 10丨与Web开发不同（二）：进程间通信

1. 为什么需要进程间通信：你总结了进程间通信的三种常见情况，包括通知事件、数据传输和数据共享。举例说明了在开发过程中为什么会需要使用进程间通信，以及如何通过 IPC 实现不同进程之间的通信。
    
2. IPC 的经典模型：你介绍了从渲染进程到主进程的通信方式，包括 IPC Renderer 发送事件到 IPC Main 并通过事件监听进行响应的过程。还介绍了在 Electron 7.0 发布后新增的 invoke 和 handle 方法，用于请求和响应模式的通信。
    
3. 主进程向渲染进程发送事件：你解释了在主进程中向渲染进程发送事件的方法，强调了使用 WebContents.send 方法来发送事件至具体的渲染进程，以及如何在渲染进程中监听和处理这些事件。
    
4. 页面间通信：最后，你介绍了两个渲染进程之间通信的情况，包括事件触发和数据共享。提到了 Electron 5.0 后新增的 sendTo 方法，简化了页面间通信的实现。
# 11丨与Web开发不同（三）：Native能力及原生GUI.mp4



![](Pasted%20image%2020240226200101.png)

![](Pasted%20image%2020240226195855.png)

# 12丨与Web开发不同（四）： 释放前端想象力，基于Electron能做什么？

1. **不再需要考虑IE浏览器的兼容性**：在这个世界里，不再需要担心兼容旧版IE浏览器，可以放心地使用Chrome等现代浏览器的最新特性。
    
2. **前端打包的简化**：由于只需对Chrome等高版本浏览器进行打包，可以减小包的体积，提高性能。
    
3. **利用新特性**：举例说明了一些新特性，如懒加载，展示了如何在没有第三方库的情况下实现功能。
    
4. **持续学习**：强调了定期关注Chrome更新，以便了解新技术，提高自身视野和想象力。
    
5. **使用高级语法**：不再受限于兼容性，可以大胆地使用高级语法和新的数据类型，如BigInt。
    
6. **跨域问题的解决**：可以充分利用Electron的网络请求能力来解决跨域问题，包括使用Electron的网络模块来发请求。
    
7. **本地操作能力**：可以操作本地文件，引入本地存储等，不仅局限于外部存储。
    
8. **多进程运行**：通过Node.js的cluster模块，可以将任务拆分成独立的进程，充分利用计算机的多核。


# 13丨实战项目综述：整体需求分析

![](Pasted%20image%2020240228172050.png)
![](Pasted%20image%2020240228172105.png)

# 14丨设计思路：做远程控制有几步？

![](Pasted%20image%2020240228172220.png)

![](Pasted%20image%2020240228172240.png)

![](Pasted%20image%2020240228172258.png)

3.怎么响应控制指令

robotjs(Node.js)


# 15丨项目架构与基础业务：Electron 与 React 框架结合

![](Pasted%20image%2020240228172429.png)
16丨主页面基础业务：Real World IPC
17丨傀儡端实现（一）：基于Electron能力捕获桌面视频流
# 18丨傀儡端实现（二）：如何接收&响应指令？

![](Pasted%20image%2020240228173107.png)
19丨傀儡端实现（三）：基于WebRTC传输视频流（上）
20丨傀儡端实现（四）：基于WebRTC传输视频流（下）
21丨信令服务：如何连接两端（上）
22丨信令服务：如何连接两端（下）
23丨指令传输实现：如何建立数据传输？
24丨项目完善与总结（上）：App特性
25丨项目完善与总结（下）：原生GUI
26丨Electron 应用打包：从HTML到安装包
27丨Electron 应用更新（一）：软件更新的痛点
28丨Electron 应用更新（二）：线上项目如何更新？
29丨Electron 质量监控：桌面端的质量抓手是什么？
30丨使用原生能力：如何集成C++能力？
31丨Electron 自动化测试：如何编写端到端测试？
32丨Electron体验优化：如何优化白屏问题？
33丨Electron客户端的安全：从XSS到RCE
34丨Electron bad parts：辩证看待Electron技术
35丨结束语