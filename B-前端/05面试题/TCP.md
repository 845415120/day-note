# TCP/UDP

UDP:不可靠传输

TCP:

三次握⼿

- 客户端发送 syn (同步序列编号) 请求，进⼊ syn_send 状态，等待确认
- 服务端接收并确认 syn 包后发送 syn+ack 包，进⼊ syn_recv 状态
- 客户端接收 syn+ack 包后，发送 ack 包，双⽅进⼊ established 状态

断开链接四次挥⼿

- 客户端 -- FIN --> 服务端， FIN—WAIT
- 服务端 -- ACK --> 客户端， CLOSE-WAIT
- 服务端 -- ACK,FIN --> 客户端， LAST-ACK
- 客户端 -- ACK --> 服务端，CLOSED