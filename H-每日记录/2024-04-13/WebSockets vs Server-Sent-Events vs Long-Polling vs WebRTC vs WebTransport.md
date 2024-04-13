---
标题: 
图片: 
链接: https://rxdb.info/articles/websockets-sse-polling-webrtc-webtransport.html#what-is-long-polling
时时: 
评价: 
tags:
---
### 什么是长轮询？
 
长轮询是第一个启用服务器-客户端消息传递方法的“黑客”，该方法可以通过HTTP在浏览器中使用。该技术模拟服务器推送通信与正常的 XHR 请求。与传统的轮询不同，在传统的轮询中，客户端会定期重复向服务器请求数据，而长轮询会建立与服务器的连接，该连接在新数据可用之前保持打开状态。一旦服务器获得新信息，它就会将响应发送到客户端，并关闭连接。在收到服务器的响应后，客户端会立即启动一个新请求，并重复该过程。此方法允许更即时的数据更新，并减少不必要的网络流量和服务器负载。但是，它仍然会导致通信延迟，并且效率低于 WebSockets 等其他实时技术。

```
// long-polling in a JavaScript client
function longPoll() {
    fetch('http://example.com/poll')
        .then(response => response.json())
        .then(data => {
            console.log("Received data:", data);
            longPoll(); // Immediately establish a new long polling request
        })
        .catch(error => {
            /**
             * Errors can appear in normal conditions when a 
             * connection timeout is reached or when the client goes offline.
             * On errors we just restart the polling after some delay.
             */
            setTimeout(longPoll, 10000);
        });
}
longPoll(); // Initiate the long polling
```

Implementing long-pollin
g on the client side is pretty simple, as shown in the code above. However on the backend there can be multiple difficulties to ensure the client receives all events and does not miss out updates when the client is currently reconnecting.  
在客户端实现长轮询非常简单，如上面的代码所示。但是，在后端，要确保客户端接收所有事件并且在客户端当前重新连接时不会错过更新，可能会遇到多种困难。

### What are WebSockets?[​](https://rxdb.info/articles/websockets-sse-polling-webrtc-webtransport.html#what-are-websockets "Direct link to What are WebSockets?") 什么是 WebSockets？

[WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket?retiredLocale=de) provide a full-duplex communication channel over a single, long-lived connection between the client and server. This technology enables browsers and servers to exchange data without the overhead of HTTP request-response cycles, facilitating real-time data transfer for applications like live chat, gaming, or financial trading platforms. WebSockets represent a significant advancement over traditional HTTP by allowing both parties to send data independently once the connection is established, making it ideal for scenarios that require low latency and high-frequency updates.  
WebSocket 通过客户端和服务器之间的单个长期连接提供全双工通信通道。该技术使浏览器和服务器能够在没有 HTTP 请求-响应周期开销的情况下交换数据，从而促进实时聊天、游戏或金融交易平台等应用程序的实时数据传输。WebSockets 代表了传统 HTTP 的重大进步，它允许双方在建立连接后独立发送数据，使其成为需要低延迟和高频率更新的场景的理想选择。

```
// WebSocket in a JavaScript clientconst socket = new WebSocket('ws://example.com');socket.onopen = function(event) {  console.log('Connection established');  // Sending a message to the server  socket.send('Hello Server!');};socket.onmessage = function(event) {  console.log('Message from server:', event.data);};
```

While the basics of the WebSocket API are easy to use it has shown to be rather complex in production. A socket can loose connection and must be re-created accordingly. Especially detecting if a connection is still usable or not, can be very tricky. Mostly you would add a [ping-and-pong](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#pings_and_pongs_the_heartbeat_of_websockets) heartbeat to ensure that the open connection is not closed. This complexity is why most people use a library on top of WebSockets like [Socket.IO](https://socket.io/) which handles all these cases and even provides fallbacks to long-polling if required.  
虽然 WebSocket API 的基础知识易于使用，但它在生产中已被证明是相当复杂的。套接字可能会松开连接，必须相应地重新创建。特别是检测连接是否仍然可用，可能非常棘手。大多数情况下，您会添加一个乒乓球检测信号，以确保打开的连接不会关闭。这种复杂性就是为什么大多数人在 WebSocket 之上使用一个库，比如 Socket.IO 可以处理所有这些情况，甚至在需要时提供长轮询的回退。

### What are Server-Sent-Events?[​](https://rxdb.info/articles/websockets-sse-polling-webrtc-webtransport.html#what-are-server-sent-events "Direct link to What are Server-Sent-Events?")  
什么是 Server-Sent-Events？

Server-Sent Events (SSE) provide a standard way to push server updates to the client over HTTP. Unlike WebSockets, SSEs are designed exclusively for one-way communication from server to client, making them ideal for scenarios like live news feeds, sports scores, or any situation where the client needs to be updated in real time without sending data to the server.  
服务器发送事件 （SSE） 提供了一种通过 HTTP 将服务器更新推送到客户端的标准方法。与 WebSocket 不同，SSE 专为服务器到客户端的单向通信而设计，非常适合实时新闻提要、体育比分等场景，或者任何需要实时更新客户端而无需向服务器发送数据的情况。

You can think of Server-Sent-Events as a single HTTP request where the backend does not send the whole body at once, but instead keeps the connection open and trickles the answer by sending a single line each time an event has to be send to the client.  
您可以将 Server-Sent-Events 视为单个 HTTP 请求，其中后端不会一次发送整个正文，而是保持连接打开状态，并在每次必须将事件发送到客户端时通过发送一行来涓涓细流应答。

Creating a connection for receiving events with SSE is straightforward. On the client side in a browser, you initialize an [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) instance with the URL of the server-side script that generates the events.  
使用 SSE 创建用于接收事件的连接非常简单。在浏览器的客户端上，使用生成事件的服务器端脚本的 URL 初始化 EventSource 实例。

Listening for messages involves attaching event handlers directly to the EventSource instance. The API distinguishes between generic message events and named events, allowing for more structured communication. Here's how you can set it up in JavaScript:  
侦听消息涉及将事件处理程序直接附加到 EventSource 实例。该 API 区分通用消息事件和命名事件，从而实现更结构化的通信。以下是在 JavaScript 中设置它的方法：

```
// Connecting to the server-side event streamconst evtSource = new EventSource("https://example.com/events");// Handling generic message eventsevtSource.onmessage = event => {    console.log('got message: ' + event.data);};
```

In difference to WebSockets, an EventSource will automatically reconnect on connection loss.  
与 WebSocket 不同，EventSource 将在连接丢失时自动重新连接。

On the server side, your script must set the `Content-Type` header to `text/event-stream` and format each message according to the [SSE specification](https://www.w3.org/TR/2012/WD-eventsource-20120426/). This includes specifying event types, data payloads, and optional fields like event ID and retry timing.  
在服务器端，脚本必须根据 SSE 规范将 `Content-Type` 标头 `text/event-stream` 设置为每条消息并设置其格式。这包括指定事件类型、数据有效负载以及可选字段，如事件 ID 和重试计时。

Here's how you can set up a simple SSE endpoint in a Node.js Express app:  
下面介绍如何在 Node.js Express 应用中设置简单的 SSE 终端节点：

```
import express from 'express';const app = express();const PORT = process.env.PORT || 3000;app.get('/events', (req, res) => {    res.writeHead(200, {        'Content-Type': 'text/event-stream',        'Cache-Control': 'no-cache',        'Connection': 'keep-alive',    });    const sendEvent = (data) => {        // all message lines must be prefixed with 'data: '        const formattedData = `data: ${JSON.stringify(data)}\n\n`;        res.write(formattedData);    };    // Send an event every 2 seconds    const intervalId = setInterval(() => {        const message = {            time: new Date().toTimeString(),            message: 'Hello from the server!',        };        sendEvent(message);    }, 2000);    // Clean up when the connection is closed    req.on('close', () => {        clearInterval(intervalId);        res.end();    });});app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
```

### What is the WebTransport API?[​](https://rxdb.info/articles/websockets-sse-polling-webrtc-webtransport.html#what-is-the-webtransport-api "Direct link to What is the WebTransport API?")  
什么是 WebTransport API？

WebTransport is a cutting-edge API designed for efficient, low-latency communication between web clients and servers. It leverages the [HTTP/3 QUIC protocol](https://en.wikipedia.org/wiki/HTTP/3) to enable a variety of data transfer capabilities, such as sending data over multiple streams, in both reliable and unreliable manners, and even allowing data to be sent out of order. This makes WebTransport a powerful tool for applications requiring high-performance networking, such as real-time gaming, live streaming, and collaborative platforms. However, it's important to note that WebTransport is currently a working draft and has not yet achieved widespread adoption. As of now (March 2024), WebTransport is in a [Working Draft](https://w3c.github.io/webtransport/) and not widely supported. You cannot yet use WebTransport in the [Safari browser](https://caniuse.com/webtransport) and there is also no native support [in Node.js](https://github.com/w3c/webtransport/issues/511). This limits its usability across different platforms and environments.

Even when WebTransport will become widely supported, its API is very complex to use and likely it would be something where people build libraries on top of WebTransport, not using it directly in an application's sourcecode.  
即使WebTransport将得到广泛支持，它的API使用起来也非常复杂，很可能是人们在WebTransport之上构建库，而不是直接在应用程序的源代码中使用它。

### What is WebRTC?[​](https://rxdb.info/articles/websockets-sse-polling-webrtc-webtransport.html#what-is-webrtc "Direct link to What is WebRTC?") 什么是WebRTC？

[WebRTC](https://webrtc.org/) (Web Real-Time Communication) is an open-source project and API standard that enables real-time communication (RTC) capabilities directly within web browsers and mobile applications without the need for complex server infrastructure or the installation of additional plugins. It supports peer-to-peer connections for streaming audio, video, and data exchange between browsers. WebRTC is designed to work through NATs and firewalls, utilizing protocols like ICE, STUN, and TURN to establish a connection between peers.  
WebRTC（Web 实时通信）是一个开源项目和 API 标准，可直接在 Web 浏览器和移动应用程序中实现实时通信 （RTC） 功能，而无需复杂的服务器基础设施或安装额外的插件。它支持点对点连接，用于在浏览器之间流式传输音频、视频和数据交换。WebRTC 旨在通过 NAT 和防火墙工作，利用 ICE、STUN 和 TURN 等协议在对等方之间建立连接。

While WebRTC is made to be used for client-client interactions, it could also be leveraged for server-client communication where the server just simulated being also a client. This approach only makes sense for niche use cases which is why in the following WebRTC will be ignored as an option.  
虽然 WebRTC 用于客户端-客户端交互，但它也可以用于服务器-客户端通信，其中服务器只是模拟也是一个客户端。这种方法只对利基用例有意义，这就是为什么在下文中，WebRTC将作为一个选项被忽略。

The problem is that for WebRTC to work, you need a signaling-server anyway which would then again run over websockets, SSE or WebTransport. This defeats the purpose of using WebRTC as a replacement for these technologies.  
问题在于，要使WebRTC工作，无论如何，您都需要一个信令服务器，然后它将再次通过websocket，SSE或WebTransport运行。这违背了使用 WebRTC 替代这些技术的目的。

## Limitations of the technologies[​](https://rxdb.info/articles/websockets-sse-polling-webrtc-webtransport.html#limitations-of-the-technologies "Direct link to Limitations of the technologies")  
技术的局限性

### Sending Data in both directions[​](https://rxdb.info/articles/websockets-sse-polling-webrtc-webtransport.html#sending-data-in-both-directions "Direct link to Sending Data in both directions")  
双向发送数据

Only WebSockets and WebTransport allow to send data in both directions so that you can receive server-data and send client-data over the same connection.  
只有 WebSocket 和 WebTransport 允许双向发送数据，以便您可以通过同一连接接收服务器数据和发送客户端数据。

While it would also be possible with **Long-Polling** in theory, it is not recommended because sending "new" data to an existing long-polling connection would require to do an additional http-request anyway. So instead of doing that you can send data directly from the client to the server with an additional http-request without interrupting the long-polling connection.  
虽然从理论上讲，Long-Polling 也可以这样做，但不建议这样做，因为将“新”数据发送到现有的 Long-Polling 连接无论如何都需要执行额外的 http 请求。因此，您可以使用额外的 http-request 将数据直接从客户端发送到服务器，而不会中断长轮询连接。

**Server-Sent-Events** do not support sending any additional data to the server. You can only do the initial request, and even there you cannot send POST-like data in the http-body by default with the native [EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource). Instead you have to put all data inside of the url parameters which is considered a bad practice for security because credentials might leak into server logs, proxies and caches. To fix this problem, [RxDB](https://rxdb.info/) for example uses the [eventsource polyfill](https://github.com/EventSource/eventsource) instead of the native `EventSource API`. This library adds additional functionality like sending **custom http headers**. Also there is [this library](https://github.com/Azure/fetch-event-source) from microsoft which allows to send body data and use `POST` requests instead of `GET`.  
Server-Sent-Events 不支持向服务器发送任何其他数据。您只能执行初始请求，即使在那里，您也无法默认使用本机 EventSource API 在 http-body 中发送类似 POST 的数据。相反，您必须将所有数据放在 url 参数中，这被认为是一种不利于安全的做法，因为凭据可能会泄漏到服务器日志、代理和缓存中。为了解决这个问题，例如，RxDB 使用 eventsource polyfill 而不是 native `EventSource API` .此库添加了其他功能，例如发送自定义 http 标头。此外，还有来自微软的这个库，它允许发送正文数据并使用 `POST` 请求而不是 `GET` .

### 6-Requests per Domain Limit[​](https://rxdb.info/articles/websockets-sse-polling-webrtc-webtransport.html#6-requests-per-domain-limit "Direct link to 6-Requests per Domain Limit")  
每个域 6 个请求数限制

Most modern browsers allow six connections per domain () which limits the usability of all steady server-to-client messaging methods. The limitation of six connections is even shared across browser tabs so when you open the same page in multiple tabs, they would have to shared the six-connection-pool with each other. This limitation is part of the HTTP/1.1-RFC (which even defines a lower number of only two connections).  
大多数现代浏览器允许每个域 （） 有 6 个连接，这限制了所有稳定的服务器到客户端消息传递方法的可用性。六个连接的限制甚至在浏览器选项卡之间共享，因此当您在多个选项卡中打开同一页面时，它们必须彼此共享六个连接池。此限制是 HTTP/1.1-RFC 的一部分（它甚至定义了仅两个连接的较小数量）。

> Quote From [RFC 2616 – Section 8.1.4](https://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1.4): "Clients that use persistent connections SHOULD limit the number of simultaneous connections that they maintain to a given server. A single-user client SHOULD NOT maintain more than **2 connections** with any server or proxy. A proxy SHOULD use up to 2*N connections to another server or proxy, where N is the number of simultaneously active users. These guidelines are intended to improve HTTP response times and avoid congestion."

While that policy makes sense to prevent website owners from using their visitors to D-DOS other websites, it can be a big problem when multiple connections are required to handle server-client communication for legitimate use cases. To workaround the limitation you have to use HTTP/2 or HTTP/3 with which the browser will only open a single connection per domain and then use multiplexing to run all data through a single connection. While this gives you a virtually infinity amount of parallel connections, there is a [SETTINGS_MAX_CONCURRENT_STREAMS](https://www.rfc-editor.org/rfc/rfc7540#section-6.5.2) setting which limits the actually connections amount. The default is 100 concurrent streams for most configurations.

In theory the connection limit could also be increased by the browser, at least for specific APIs like EventSource, but the issues have beem marked as "won't fix" by [chromium](https://issues.chromium.org/issues/40329530) and [firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=906896).  
从理论上讲，浏览器也可以增加连接限制，至少对于像 EventSource 这样的特定 API，但这些问题已被 chromium 和 firefox 标记为“无法修复”。