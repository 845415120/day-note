---
标题: 
图片: 
链接: 
时时: 
评价: 
tags:
---
## **开发属于自己的包**  
### **初始化 package.json**  
注意，JSON文件不能有注释，下面加注释，是为了理解。  
关于更多 license 许可协议相关的内容，可参考 [https://www.jianshu.com/p/23e61804d81e](https://www.jianshu.com/p/23e61804d81e)  
**index.js 中定义功能方法**  
**Readme.md包的使用文档**  

编写功能的时候，如果需要使用其他人的包，也是可以的。比如我们的功能中需要用到 dayjs ，则安装dayjs使用即可。  
### **注册npm账号**  
●访问 [https://www.npmjs.com/](https://www.npmjs.com/) 网站  
●点击 sign up 按钮，进入注册用户界面  
●填写账号相关的信息  
●点击 Create an Account 按钮，注册账号**发布包**  
●终端中，切换镜像源为npm（**不能发布到淘宝，所以必须切换镜像源为npm主站**）  
    ○ nrm use npm  
●终端中，登录 npm 账号  
    ○执行 npm login 命令  
    ○输入账号  
    ○输入密码（**输入的密码是看不见的，正常**）  
    ○输入邮箱  
    ○输入验证码（去邮箱查看）  
●发布  
    ○注意，**执行命令的文件夹，必须是包的根目录**。  
    ○运行 npm publish 命令，即可将包发布到 npm 上  
  

![](https://cdn.nlark.com/yuque/0/2022/jpeg/22014993/1652015472004-86ba7070-d5b4-478a-80ed-79cd738619ca.jpeg?x-oss-process=image%2Fresize%2Cw_915%2Climit_0%2Finterlace%2C1)

  
●常见错误  
 ○自己的模块名不能和已存在的模块名同名。（可以先去npm网站搜索是否同名）  
 ○24小时内不能重复发布  
 ○新注册的账号，必须先邮箱（邮件可能是垃圾邮件）验证，然后才能发布  
●删除已发布的包  
 ○运行 npm unpublish 包名 --force 命令，即可从 npm 删除已发布的包。  
●其他注意事项:  
 ○npm unpublish 命令只能删除 72 小时以内发布的包  
 ○npm unpublish 删除的包，在 24 小时内不允许重复发布  
 ○发布包的时候要慎重，尽量不要往 npm 上发布没有意义的包!  
更多关于npm的命令：[https://www.npmjs.cn/](https://www.npmjs.cn/)