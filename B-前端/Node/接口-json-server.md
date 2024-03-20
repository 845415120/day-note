# 接口的组成
一个接口一般由如下几个部分组成

- 请求方法
- 接口地址（URL）
- 请求参数
- 响应结果

一个接口示例 [https://www.free-api.com/doc/325](https://gitee.com/link?target=https%3A%2F%2Fwww.free-api.com%2Fdoc%2F325)
体验一下： [https://api.asilu.com/idcard/?id=371522199111299668](https://gitee.com/link?target=https%3A%2F%2Fapi.asilu.com%2Fidcard%2F%3Fid%3D371522199111299668)
## RESTful API
RESTful API 是一种特殊风格的接口，主要特点有如下几个：

- URL 中的路径表示 资源，路径中不能有 动词，例如create , delete , update 等这些都不能有
- 操作资源要与 HTTP 请求方法 对应
- 操作结果要与 HTTP 响应状态码 对应

规则示例：

| **操作** | **请求类型** | **URL** | **返回** |
| --- | --- | --- | --- |
| 新增歌曲 | POST | /song | 返回新生成的歌曲信息 |
| 删除歌曲 | DELETE | /song/10 | 返回一个空文档 |
| 修改歌曲 | PUT | /song/10 | 返回更新后的歌曲信息 |
| 修改歌曲 | PATCH | /song/10 | 返回更新后的歌曲信息 |
| 获取所有歌曲 | GET | /song | 返回歌曲列表数组 |
| 获取单个歌曲 | GET | /song/10 | 返回单个歌曲信息 |

扩展阅读： [https://www.ruanyifeng.com/blog/2014/05/restful_api.html](https://gitee.com/link?target=https%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2014%2F05%2Frestful_api.html)
## json-server
json-server 本身是一个 JS 编写的工具包，可以快速搭建 RESTful API 服务
官方地址: [https://github.com/typicode/json-server](https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Ftypicode%2Fjson-server)
操作步骤：

- 全局安装 json-server

`npm i -g json-server`

- 创建 JSON 文件（db.json），编写基本结构
```javascript
{
	"song": [
		{ "id": 1, "name": "干杯", "singer": "五月天" },
		{ "id": 2, "name": "当", "singer": "动力火车" },
		{ "id": 3, "name": "不能说的秘密", "singer": "周杰伦" }
	]
}
```

- 以 JSON 文件所在文件夹作为工作目录，执行如下命令
```javascript
json-server --watch db.json
```
默认监听端口为 3000
## 接口测试工具
介绍几个接口测试工具 apipost [https://www.apipost.cn/](https://gitee.com/link?target=https%3A%2F%2Fwww.apipost.cn%2F) (中文) apifox [https://www.apifox.cn/](https://gitee.com/link?target=https%3A%2F%2Fwww.apifox.cn%2F) (中文) postman [https://www.postman.com/](https://gitee.com/link?target=https%3A%2F%2Fwww.postman.com%2F) (英文)

接口文档生成
[https://www.bilibili.com/video/BV1gM411W7ex?p=160](https://www.bilibili.com/video/BV1gM411W7ex?p=160)
