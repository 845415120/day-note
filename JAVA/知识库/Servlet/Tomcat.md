---
时间: 2023-11-14
标题: Tomcat
图片: https://tomcat.apache.org/res/images/tomcat.png
链接: https://www.runoob.com/servlet/servlet-form-data.html
tags:
---


## 设置 Web 应用服务器：Tomcat

在市场上有许多 Web 应用服务器支持 Servlet。有些 Web 应用服务器是免费下载的，Tomcat 就是其中的一个。

Apache Tomcat 是一款 Java Servlet 和 JavaServer Pages 技术的开源软件实现，可以作为测试 Servlet 的独立服务器，而且可以集成到 Apache Web 应用服务器。下面是在电脑上安装 Tomcat 的步骤：

- 从 [http://tomcat.apache.org/](http://tomcat.apache.org/) 上下载最新版本的 Tomcat。
- 一旦您下载了 Tomcat，解压缩到一个方便的位置。例如，如果您使用的是 Windows，则解压缩到 C:\apache-tomcat-5.5.29 中，如果您使用的是 Linux/Unix，则解压缩到 /usr/local/apache-tomcat-5.5.29 中，并创建 CATALINA_HOME 环境变量指向这些位置。

在 Windows 上，可以通过执行下面的命令来启动 Tomcat：

## 启动

 C:\apache-tomcat-5.5.29\bin\startup.bat


Tomcat 启动后，可以通过在浏览器地址栏输入 **http://localhost:8080/** 访问 Tomcat 中的默认应用程序。如果一切顺利，那么会显示以下结果：

![Tomcat Home page|500](https://www.runoob.com/wp-content/uploads/2014/07/TomcatHomePage.jpg)

有关配置和运行 Tomcat 的进一步信息可以查阅应用程序安装的文档，或者可以访问 Tomcat 网站：[http://tomcat.apache.org](http://tomcat.apache.org/)。

在 Windows 上，可以通过执行下面的命令来停止 Tomcat：
## 关闭
\shutdown


## 设置 CLASSPATH

由于 Servlet 不是 Java 平台标准版的组成部分，所以您必须为编译器指定 Servlet 类的路径。

如果您运行的是 Windows，则需要在您的 C:\autoexec.bat 文件中放入下列的行：

set CATALINA=C:\apache-tomcat-5.5.29
set CLASSPATH=%CATALINA%\common\lib\servlet-api.jar;%CLASSPATH%

或者，在 Windows NT/2000/XP 中，您也可以用鼠标右键单击"我的电脑"，选择"属性"，再选择"高级"，"环境变量"。然后，更新 CLASSPATH 的值，按下"确定"按钮。

在 Unix（Solaris、Linux 等）上，如果您使用的是 C shell，则需要在您的 .cshrc 文件中放入下列的行：

setenv CATALINA=/usr/local/apache-tomcat-5.5.29
setenv CLASSPATH $CATALINA/common/lib/servlet-api.jar:$CLASSPATH

**注意：**假设您的开发目录是 C:\ServletDevel（在 Windows 上）或 /user/ServletDevel（在 UNIX 上），那么您还需要在 CLASSPATH 中添加这些目录，添加方式与上面的添加方式类似。
