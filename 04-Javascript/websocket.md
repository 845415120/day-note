什么是 websocket ? [https://websocket.org/](https://websocket.org/)

- 是一种网络通信协议，和 HTTP 协议 一样。

为什么需要websocket ?

- 因为 HTTP 协议有一个缺陷：通信只能由客户端发起。

理解 websokect 通讯过程

![[Pasted image 20230910160454.png]]

了解 websocket api含义
```JavaScript
// 创建ws实例，建立连接
var ws = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

// 连接成功事件
ws.onopen = function(evt) { 
  console.log("Connection open ...");
  // 发送消息
  ws.send("Hello WebSockets!");
};
// 接受消息事件
ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  // 关闭连接  
  ws.close();
};
// 关闭连接事件
ws.onclose = function(evt) {
  console.log("Connection closed.");
};      
```
说明：我们项目中使用 socket.io-client 来实现客户端代码，它是基于 websocket 的库。

## [[问诊室]]-socket.io使用

- socket.io 什么？
	- socket.io 是一个基于 WebSocket 的 CS（客户端-服务端）的实时通信库
	- 使用它可以在后端提供一个即时通讯服务 
	- 它也提供一个 js 库，在前端可以去链接后端的 socket.io 创建的服务
	- 总结：它是一套基于 websocket 前后端即时通讯解决方案

```bash
pnpm add socket.io-client 
```
如何建立连接？**浏览器和服务器建立双向通信（类似打电话）**
```JavaScript
import { io } from 'socket.io-client'
// 参数1：不传默认是当前服务域名，开发中传入服务器地址
// 参数2：配置参数，根据需要再来介绍
const socket = io(url, options)
```
如何确定连接成功？
```JavaScript
socket.on('connect', () => {
  // 建立连接成功
})
```
如何发送消息？**浏览器向服务器发消息**
```JavaScript
// chat message 发送消息事件，由后台约定，可变
socket.emit('chat message', '消息内容')
```
如何接收消息？**接收服务器发送的消息**
```JavaScript
// chat message 接收消息事件，由后台约定，可变
socket.on('chat message', (ev) => {
  // ev 是服务器发送的消息
})
```
如何关闭连接？
```JavaScript
// 离开组件需要使用
socket.close()
```

sockt.io 在前端使用的js库需要知道哪些内容？

- 如何建立链接 `io('地址')`
    
- 连接成功的事件 `connect`
    
- 如何发消息 `emit` + 事件
    
- 如何收消息 `on` + 事件
    
- 如果关闭连接 `close()`

## 问诊室-通讯规则

> 知道前后端ws**通信事件**以及定义**数据的类型**

1. [前后台约定](https://www.apifox.cn/apidoc/shared-16a58bff-e4db-465c-9c8b-859c839318ac/api-31644739)通讯的一些事件
    

![image-20220829154759024](file://C:/desktop/%E5%9C%A8%E7%BA%BF%E9%97%AE%E8%AF%8A/online-consultation-app-dev155/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%BA%90/assets/image-20220829154759024.png?lastModify=1694333995)

`chatMsgList` **接收**聊天记录

`sendChatMsg` 发送消息

`receiveChatMsg` **接收**消息

`statusChange` **接收**订单状态改变