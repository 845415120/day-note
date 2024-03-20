---
时间: 2023-11-15
标题: IDEA新建Servlet
图片: obsidian://open?vault=%E6%B1%9F&file=Z-%E9%99%84%E4%BB%B6%2FPasted%20image%2020231115161451.png
链接: https://www.cnblogs.com/kendoziyu/p/create-servlet-project-with-intellij-idea.html
tags:
---
  
Java Servlet 是 J2EE 规范中一项关于 Web 应用的规范。Tomcat 则是实现 Java Servlet 规范的一个开源项目。
# 新建一个 Servlet 项目
## 第一步：File-New-Project
![|500](https://img-blog.csdnimg.cn/d7cec6f8788c42aebe43d280c91a6864.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bCP5rWp56CB5a2X6LS85b-r,size_20,color_FFFFFF,t_70,g_se,x_16)
## 第二步：点击New Project：
输入项目名称Name
输入项目路径：Location
勾选Create Git repository
选择jdk版本
点击创建Create
![|500](Pasted%20image%2020231115112257.png)
## 第三步：右键项目名称选择Add Frameworks Support 或者(菜单)帮助寻找操作
勾选Web Application
![|500](Pasted%20image%2020231115112243.png)
创建成功！
##  [IDEA2023.2以上版本没有“添加框架支持”（Add Framework Support）选项解决办法](https://www.cnblogs.com/lihuawei/p/17693739.html)
**解决办法：**
选中模块，双击shift（或“帮助”菜单-->查找），选择操作，中文版搜索“添加框架支持”，英文版搜索“Add Framework Support”，即可使用
![|500](https://img2023.cnblogs.com/blog/520426/202309/520426-20230911155104250-1819512634.png) 
![|500](https://img2023.cnblogs.com/blog/520426/202309/520426-20230911154951297-175071471.png)
点OK，之后就会出现一个web文件夹
![|500](https://image.cubox.pro/cardImg/2023111512403061627/87388.jpg?imageMogr2/quality/90/ignore-error/1)
## 引入 lib 包
1. File -> Project Structure 打开窗口
2. 在窗口左侧菜单中，找到 Libraries，并选中
3. 点击 `+` ，弹出 New Project Library，选中 Java，弹出文件夹选择框
4. 选择 javac-servlet\lib 所在的完整路径，点击 Ok
右键[WEB-INF](https://so.csdn.net/so/search?q=WEB-INF&spm=1001.2101.3001.7020)，点new,创建一个Directory，命名为lib![|500](https://image.cubox.pro/cardImg/2023111512403095493/54068.jpg?imageMogr2/quality/90/ignore-error/1)
![|500](https://image.cubox.pro/cardImg/2023111512403017143/43357.jpg?imageMogr2/quality/90/ignore-error/1)
将servlet-api.jar文件（可以在tomcat的lib文件夹中找到）复制到这个路径下
![|500](https://image.cubox.pro/cardImg/2023111512403095657/80421.jpg?imageMogr2/quality/90/ignore-error/1)
右键这个文件，添加到Library中![|500](https://image.cubox.pro/cardImg/2023111512403125620/44493.jpg?imageMogr2/quality/90/ignore-error/1)
![|500](https://image.cubox.pro/cardImg/2023111512403141507/92728.jpg?imageMogr2/quality/90/ignore-error/1)
![|500](https://image.cubox.pro/cardImg/2023111512403172977/71131.jpg?imageMogr2/quality/90/ignore-error/1)
这样就可以了
在右上角找到这个[配置tomcat](https://so.csdn.net/so/search?q=%E9%85%8D%E7%BD%AEtomcat&spm=1001.2101.3001.7020)![|500](https://image.cubox.pro/cardImg/2023111512403158145/53643.jpg?imageMogr2/quality/90/ignore-error/1)
点击加号
![|500](https://image.cubox.pro/cardImg/2023111512403181839/30247.jpg?imageMogr2/quality/90/ignore-error/1)
找到Tomcat Server 里的Local
![|500](https://image.cubox.pro/cardImg/2023111512403281735/70069.jpg?imageMogr2/quality/90/ignore-error/1)
在Configure找到你的Tomcat路径，（如果有跟我一样的提示，直接点右边的Fix就可以，然后再点Apply,点OK）然后点OK
![|500](https://image.cubox.pro/cardImg/2023111512403291990/84308.jpg?imageMogr2/quality/90/ignore-error/1)
![|500](https://image.cubox.pro/cardImg/2023111512403278884/63409.jpg?imageMogr2/quality/90/ignore-error/1)右键src,新建一个包，命名为Servlet
![|500](https://image.cubox.pro/cardImg/2023111512403398420/81812.jpg?imageMogr2/quality/90/ignore-error/1)
右键Servlet包，新建ServletTest类![|500](https://image.cubox.pro/cardImg/2023111512403362213/64233.jpg?imageMogr2/quality/90/ignore-error/1)
输入以下代码
点开web.xml,在......中间加入以下代码
## 运行
点击运行按钮，进入下面这个页面
![|500](https://image.cubox.pro/cardImg/2023111512403375377/28653.jpg?imageMogr2/quality/90/ignore-error/1)
在网址后添加之前在web.xml中设置的
/servletTest
![|500](https://image.cubox.pro/cardImg/2023111512403395441/21134.jpg?imageMogr2/quality/90/ignore-error/1)
现在就成功运行啦![|500](https://image.cubox.pro/cardImg/2023111512403445597/61123.jpg?imageMogr2/quality/90/ignore-error/1)
如果有操作不对的地方欢迎指正哦！！！
# 无法解析javax.servlet的解决方法
找到tomcat的安装目录，在其lib目录下找到servlet.api-jar这个包，将其导入即可。
![|500](https://cdn.nlark.com/yuque/0/2023/webp/34220974/1700025367950-0c516d6e-310d-48c7-94a6-0bf91efce39a.webp)
点击右上角的项目结构图标
![|500](https://cdn.nlark.com/yuque/0/2023/webp/34220974/1700025372627-7a1eb44a-ac4e-499e-bff4-2be1738806f4.webp)
![|500](https://cdn.nlark.com/yuque/0/2023/webp/34220974/1700025379616-6860aa22-2cdd-42a6-9c5a-f892706d4673.webp)
单击模块，在依赖栏目下，点击添加按钮，添加相应的jar包即可。
# 1 IDEA 创建一个 Servlet
![500](Pasted%20image%2020231115161451.png)
## 写在前面
上一篇文章 [在 Tomcat 上部署你的第一个 Servlet 应用](https://www.cnblogs.com/kendoziyu/p/deploy-first-servlet-app-into-tomcat.html) 使用最原始的命令行方式编译 Servlet 类，并且部署到 tomcat 安装目录下的 **webapps** 文件夹下。但是实际情况下，我们现在的工作已经十分依赖集成开发工具 IDEA 了，本文就借助 IDEA 创建一个 Servlet ，并且在 IDEA 工具内通过 tomcat 来启动服务和本地调试。
## 项目地址
    git clone https://gitee.com/kendoziyu/code-servlet-parent.git
其中，**develop-servlet** 就是本文的项目。
## 1.创建项目
首先 File -> New -> Project... 打开创建项目窗口
![500](https://image.cubox.pro/cardImg/2023111516140283298/34713.jpg?imageMogr2/quality/90/ignore-error/1)
接着就是给你的项目找一个合适的名字和合适的路径，我的项目命名为 develop-servlet
![500](https://image.cubox.pro/cardImg/2023111516140352288/33641.jpg?imageMogr2/quality/90/ignore-error/1)
点击 Finish 完成创建，并且在新的窗口中打开项目。
![500](https://image.cubox.pro/cardImg/2023111516140327044/32178.jpg?imageMogr2/quality/90/ignore-error/1)
自动创建的模板，为我们创建了以下文件：
*   /web/WEB-INF/web.xml
*   /web/index.jsp
## \*自定义修改
首先，这个 **web** 文件夹的取名，不太符合我的习惯，我更喜欢命名为 **webapp**。
右击 web 文件夹 --> Refactor --> Rename...
另外，当前 3.1 是稳定版本，4.0 是 alpha 版本，所以我们稍稍改动一下 **web.xml**，把 servlet 版本改为 3.1
    <?xml version="1.0" encoding="UTF-8"?>
    <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
             version="3.1">
    </web-app>
## 2.添加 Servlet 依赖
在 tomcat 安装目录下的 **lib** 下有 **servlet-api.jar**，而我的 tomcat 安装目录是 D:\\server\\apache-tomcat-9.0.39</span>
![500](https://image.cubox.pro/cardImg/2023111516140338380/37487.jpg?imageMogr2/quality/90/ignore-error/1)
接着我们在 idea 中添加依赖库，我们先通过 File --> Project Structure... 打开窗口：
![500](https://image.cubox.pro/cardImg/2023111516140394733/65361.jpg?imageMogr2/quality/90/ignore-error/1)
D:\\server\\apache-tomcat-9.0.39\\lib\\servlet-api.jar
![500](https://image.cubox.pro/cardImg/2023111516140456705/82091.jpg?imageMogr2/quality/90/ignore-error/1)
## 3.创建 LoginServlet
```
    package coderead.servlet;
    import javax.servlet.ServletException;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    import java.io.IOException;
    /**
     * JSP 页面的 Servlet
     *
     * @author kendoziyu
     * @since 2020/10/21 0021
     */
    public class LoginServlet extends HttpServlet {
        @Override
        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            response.getWriter().write("<h1> Hello World </h1>");
        }
        @Override
        protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
            super.doPost(req, resp);
        }
    }
```
## 4\. 配置 web.xml
我们声明一个名为 **loginServlet** 的 servlet 对应类 **coderead.servlet.LoginServlet**，并且配置它的拦截 url 地址为 **/Login**
```Java
    <?xml version="1.0" encoding="UTF-8"?>
    <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
             version="3.1">
        <servlet>
            <servlet-name>loginServlet</servlet-name>
            <servlet-class>coderead.servlet.LoginServlet</servlet-class>
        </servlet>
        <servlet-mapping>
            <servlet-name>loginServlet</servlet-name>
            <url-pattern>/Login</url-pattern>
        </servlet-mapping>
    </web-app>
```
## 5\. 添加运行项
我们打算用 tomcat 的方式来运行我们的项目，首先我们要 **Add Configuration...**
![500](https://image.cubox.pro/cardImg/2023111516140440543/17488.jpg?imageMogr2/quality/90/ignore-error/1)
然后在 **Run/Debug Configuration** 窗口，选择 **Tomcat Server** -> **Local**
![500](https://image.cubox.pro/cardImg/2023111516140446781/56915.jpg?imageMogr2/quality/90/ignore-error/1)
接着我们就需要设置应用服务器 **Applicaiton Server**：
![500](https://image.cubox.pro/cardImg/2023111516140412737/40296.jpg?imageMogr2/quality/90/ignore-error/1)
点击 **Configure...** 打开了 **Tomcat Server** 窗口，我选择了一下本地 Tomcat 安装目录 D:\\server\\apache-tomcat-9.0.39，并选择 **Ok**
![500](https://image.cubox.pro/cardImg/2023111516140515113/88288.jpg?imageMogr2/quality/90/ignore-error/1)
此时，在 **Run/Debug Configuration** 窗口出现一个 Warning: No artifacts configured
![500](https://image.cubox.pro/cardImg/2023111516140595113/93500.jpg?imageMogr2/quality/90/ignore-error/1)
点击 **Fix** ，如果你的 IDEA 版本没有出现这个警告和 **Fix** 按钮，那也请不要慌张，选择 **File** -> **Project Structure** 即可。
## 6\. 配置 Web Module
如果你不是用 idea 直接创建的 Web Application（比如是用 git clone 下来的代码，或者你自己手动创建的 webapp 文件夹），那你可以看一下，你的 webapp 文件夹上并没有一些“特殊的记号”。此时我们可以先添加 Web 模块，后创建 Artifact，这样会快很多。
![500](https://image.cubox.pro/cardImg/2023111516140527756/74779.jpg?imageMogr2/quality/90/ignore-error/1)
如果你的 **webapp** 文件夹上已经有一个“小蓝点”，那你可能可以直接跳至第 7 步，前提是你确定你的配置是正确的。在 Project Structure 窗口下，选择 **Modules**
![500](https://image.cubox.pro/cardImg/2023111516140632940/34487.jpg?imageMogr2/quality/90/ignore-error/1)
添加后效果如下图所示，接着我们要修改 **Web Module Deployment Descriptor** 和 **Web Resource Directory**。
![500](https://image.cubox.pro/cardImg/2023111516140615540/19176.jpg?imageMogr2/quality/90/ignore-error/1)
鼠标悬浮至 `+` 和 `-` 下方的 **\>>**，会出现编辑按钮：
![50](https://image.cubox.pro/cardImg/2023111516140659969/57881.jpg?imageMogr2/quality/90/ignore-error/1)
编辑 **Web Module Deployment Descriptor** 选择 项目根目录路径\\webapp\\WEB-INF\\web.xml，版本选择 **3.1** ，和 web.xml 中的版本一致。
![500](https://image.cubox.pro/cardImg/2023111516140741067/79521.jpg?imageMogr2/quality/90/ignore-error/1)
编辑 **Web Resource Directory**，选择项目根目录下的 **webapp** 目录
![500](https://image.cubox.pro/cardImg/2023111516140759060/99517.jpg?imageMogr2/quality/90/ignore-error/1)
## 7\. 创建 Artifact
如果你做了 6 步，那么你可以直接选择 **Create Artifact**。
![500](https://image.cubox.pro/cardImg/2023111516140769695/18416.jpg?imageMogr2/quality/90/ignore-error/1)
如果你不是用 Create Artifact 方式，那就需要你自己选择 Artifact 的类型：-
如果选 Web Application: Exploded，这个是以**文件夹形式**（War Exploded）发布项目，选择这个，发布项目时就会自动生成文件夹在指定的 output directory;-
如果选 Web Application: Archive，就是 **war 包形式**，每次都会重新打包全部的，将项目打成一个 war 包，放到指定位置；
![500](https://image.cubox.pro/cardImg/2023111516140738024/71644.jpg?imageMogr2/quality/90/ignore-error/1)
## 8\. 部署
再次选择 **Add Configuration...** ，打开 **Run/Debug Configurations**， `+` -> **Tomcat Server** -> **Local** ，切换到 Deployment，发现已经把 Artifact 自动添加进去了。
![500](https://image.cubox.pro/cardImg/2023111516140832824/21602.jpg?imageMogr2/quality/90/ignore-error/1)
这里的 **develop-servlet** 是由第 7 步上面的图片 Artifact - Name 所决定的，同时也会影响 Web 项目的 ContextPath。第 7 步 Artifact 的 **Output Directory** 最终目录是 **develop\_servlet**，因此 ContextPath 也是 develop\_servlet。-
也就是说我们应该在浏览器中通过 [http://localhost:8080/develop\_servlet/](http://localhost:8080/develop_servlet/) 访问我们的项目。不加其他配置的情况 [http://localhost:8080/](http://localhost:8080/) 的访问结果为 <span 404 Not Found。
## \* 选择输出目录
还是因为我是 git clone 得到的项目，没有配置输出目录，弹出这个报错：
![500](https://image.cubox.pro/cardImg/2023111516140864149/58973.jpg?imageMogr2/quality/90/ignore-error/1)
我们可以在 Project Structure 窗口，配置 **Project compiler output** 为 项目根目录\\out
![500](https://image.cubox.pro/cardImg/2023111516140878751/57881.jpg?imageMogr2/quality/90/ignore-error/1)
## 9\. jsp 调用 Servlet
首次打开时，会进入 index.jsp，如果没登录，我希望通过 jsp 调用 Servlet。
```Java
    <%--
      User: kendoziyu
      Date: 2020/10/21
    --%>
    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <html>
      <head>
        <title>首页</title>
      </head>
      <body>
      <%
        String loginName = (String) request.getSession().getAttribute("loginName");
      %>
      <%
        if (loginName == null || loginName.isEmpty()) {
      %>
      <a href="/Login">去登录</a>
      <% } else { %>
        Hello, <%=loginName%>
      <% } %>
      </body>
    </html>
``
不过，此时点击“去登录”，直接跳转 [http://localhost:8080/Login，结果](http://localhost:8080/Login%EF%BC%8C%E7%BB%93%E6%9E%9C) 404 找不到页面，稍微改造一下：
方法一：可以修改链接地址为相对地址
    <a href="Login">去登录</a>
适用场景：当前页面是在 WebRoot 路径下。
方法二：目标 URL 前面加上请求 ContextPath 前缀
```
    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <html>
      <head>
        <title>首页</title>
      </head>
      <body>
      <%
        String loginName = (String) request.getSession().getAttribute("loginName");
        String prefix = request.getContextPath();
      %>
      <%
        if (loginName == null || loginName.isEmpty()) {
      %>
      <a href="<%=prefix%>/Login">去登录</a>
      <% } else { %>
        Hello, <%=loginName%>
      <% } %>
      </body>
    </html>
```
## 10\. Servlet 跳转 jsp
方法一： **sendRedirect 方式**-
sendRedirect("/a.jsp");-
可以将页面跳转到任何路径，不局限于web应用中，跳转的过程中url地址变化，无法使用request.setAttribute来传递。-
方法二：**forward 方式**-
request.getRequestDispatcher("/a.jsp").forward(request.response);-
url地址不变，只能跳转到本web应用中的页面上。可以用 request.setAttibute 方法
我们改写一下 LoginServlet
```
    package coderead.servlet;
    import javax.servlet.ServletException;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    import java.io.IOException;
    /**
     * JSP 页面的 Servlet
     *
     * @author kendoziyu
     * @since 2020/10/21 0021
     */
    public class LoginServlet extends HttpServlet {
        @Override
        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    //        response.getWriter().write("<h1> Hello World </h1>");
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        }
        @Override
        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            request.getSession().setAttribute("loginName", request.getParameter("username"));
            response.sendRedirect("index.jsp");
        }
    }
``
login.jsp
```
    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <html>
    <head>
        <title>登录</title>
    </head>
    <body>
    <form action="Login" method="post">
        username: <input type="username" name="username"> <br>
        password: <input type="password" name="password"> <br>
        <input type="submit" value="submit">
        <input type="reset" value="reset"> <br>
    </form>
    </body>
    </html>
```
## 参考文章
[使用 IntelliJ IDEA 新建一个 Servlet 项目](https://blog.csdn.net/a376298333/article/details/79121548)-
[Tomcat控制台中文乱码问题](https://www.cnblogs.com/arebirth/p/tomcatencoding.html)