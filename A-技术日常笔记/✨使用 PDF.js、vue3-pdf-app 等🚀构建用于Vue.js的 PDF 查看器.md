---
标题: 
图片: 
链接: https://www.vue-pdf-viewer.dev/?utm_source=dev.to&utm_content=building-a-pdf-viewer-for-vuejs
时时: 
评价: 
tags:
---
## Vue-PDF-Viewer：灵活而强大的Vue.js PDF 组件

Just a quick background about what I’m working on. [Vue-PDF-Viewer](https://www.vue-pdf-viewer.dev/?utm_source=dev.to&utm_content=building-a-pdf-viewer-for-vuejs) renders the PDF viewer on your Vue or Nuxt websites so that your users can interact with your PDF document without leaving your sites. The component has over 20 features including theme customization, built-in localization, web responsive and more.  
简单介绍一下我正在做的事情。Vue-PDF-Viewer 在您的 Vue 或 Nuxt 网站上呈现 PDF 查看器，以便您的用户无需离开您的网站即可与您的 PDF 文档进行交互。该组件具有 20 多种功能，包括主题自定义、内置本地化、Web 响应等。

[![Vue PDF Viewer](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcaxyyicw35mz9exhdc1c.png)](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcaxyyicw35mz9exhdc1c.png)

I would be grateful if you could check [Vue-PDF-Viewer](https://www.vue-pdf-viewer.dev/?utm_source=dev.to&utm_content=building-a-pdf-viewer-for-vuejs) out. It will encourage me to make even more contents ❤️‍🔥  
如果您能查看 Vue-PDF-Viewer，我将不胜感激。它会鼓励我制作更多的内容 ❤️ 🔥

---

## [](https://dev.to/fangtanbamrung/building-a-pdf-viewer-for-vuejs-with-pdfjs-vue3-pdf-app-and-more-21ii#method-1-iframe)Method 1: iFrame  
方法1：iFrame

iFrame provides a straightforward approach to embed PDF files and leverage the browser's built-in PDF viewing capabilities.  
iFrame 提供了一种嵌入 PDF 文件和利用浏览器内置 PDF 查看功能的简单方法。  
Here's how you can implement it in Vue.js:  
以下是在Vue.js中实现它的方法：

1. Install Vue.js and create a new Vue project using the Vite.  
    安装 Vue.js并使用 Vite 创建一个新的 Vue 项目。
2. Add an iFrame element to your Vue component template.  
    将 iFrame 元素添加到你的 Vue 组件模板中。
3. Set the src attribute of the iFrame to the URL or path of the PDF file.  
    将 iFrame 的 src 属性设置为 PDF 文件的 URL 或路径。

Here is the [link](https://codesandbox.io/p/devbox/pdf-vg3g97?file=%2Fsrc%2Fcomponents%2FIframe.vue) to the code sample.  
下面是代码示例的链接。

[![iFrame demo](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffhbc6rlye414j1boy6od.png)](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffhbc6rlye414j1boy6od.png)

Using iFrame has its pros and cons:  
使用 iFrame 有其优点和缺点：

**Pros 优点**

- Simple implementation 实施简单
- Relies on the browser's native PDF viewer  
    依赖于浏览器的本机 PDF 查看器
- Display PDF file as part of a website  
    将 PDF 文件显示为网站的一部分

**Cons 缺点**

- Cannot customize because it's using the browser's native pdf function  
    无法自定义，因为它使用的是浏览器的本机 pdf 功能
- Potential compatibility issues with different browsers and versions  
    与不同浏览器和版本的潜在兼容性问题

**When to use 何时使用**  
Looking for a quick set up without a need for PDF viewer to have UI consistency.  
寻找无需 PDF 查看器即可实现 UI 一致性的快速设置。

---

## [](https://dev.to/fangtanbamrung/building-a-pdf-viewer-for-vuejs-with-pdfjs-vue3-pdf-app-and-more-21ii#method-2-pdf-with-new-tab)Method 2: PDF with New Tab  
方法2：带有新标签的PDF

The second method involves opening the PDF in a new browser tab. Here's an overview of implementing this method in Vue.js:  
第二种方法涉及在新的浏览器选项卡中打开 PDF。下面是在 Vue.js 中实现此方法的概述：

1. Create a link or button element in your Vue component template.  
    在 Vue 组件模板中创建一个链接或按钮元素。
2. Add an onclick event handler to open a new browser tab with the PDF URL.  
    添加 onclick 事件处理程序以打开带有 PDF URL 的新浏览器选项卡。

Using a new tab approach offers the following pros and cons:  
使用新的选项卡方法具有以下优点和缺点：

**Pros 优点**

- Simple implementation 实施简单
- Direct interaction with the PDF content  
    与 PDF 内容直接交互

**Cons 缺点**

- User experience cannot be controlled  
    用户体验无法控制
- Potential compatibility issues with different browsers and versions  
    与不同浏览器和版本的潜在兼容性问题

**When to use 何时使用**  
Similar to method 1 and when you want the viewing experience of PDF file to be separated from the main website. For example, you do not want to add a PDF iFrame.  
与方法1类似，当您希望将PDF文件的查看体验与主网站分开时。例如，您不想添加 PDF iFrame。

---

## [](https://dev.to/fangtanbamrung/building-a-pdf-viewer-for-vuejs-with-pdfjs-vue3-pdf-app-and-more-21ii#method-3-pdfjs)Method 3: PDF.js  
方法3：PDF.js

PDF.js is a powerful JavaScript library maintained by Mozilla that allows rendering and manipulation of PDF files directly in web browsers. It provides extensive features and capabilities for displaying PDFs in Vue.js applications. To utilize PDF.js in Vue.js, follow these steps:  
PDF.js 是由 Mozilla 维护的强大 JavaScript 库，允许直接在 Web 浏览器中渲染和操作 PDF 文件。它提供了广泛的特性和功能，用于在Vue.js应用程序中显示 PDF。若要在Vue.js中使用PDF.js，请按照下列步骤操作：

1. Install the PDF.js library using a script tag.  
    使用 script 标记安装 PDF.js 库。
2. Create a Vue component to display the PDF viewer  
    创建一个 Vue 组件以显示 PDF 查看器
3. incorporate the PDF.js into the component to render PDF files.  
    将PDF.js合并到组件中以渲染 PDF 文件。

I have added a simple PDF Viewer using PDF.js in a Vue website. You may find the codes [here](https://codesandbox.io/p/devbox/pdf-vg3g97?file=%2Fsrc%2Fcomponents%2FPDFjs.vue).  
我在 Vue 网站中使用 PDF.js 添加了一个简单的 PDF 查看器。您可以在此处找到代码。

[![PDF.js demo](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5o25yttxnqftdhxymcny.png)](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5o25yttxnqftdhxymcny.png)

Let's discuss the advantages and disadvantages of using PDF.js:  
让我们讨论一下使用 PDF.js 的优缺点：

**Pros 优点**

- Advanced PDF rendering functionality  
    高级 PDF 渲染功能
- Cross-browser compatibility  
    跨浏览器兼容性
- Extensive customization options  
    广泛的自定义选项
- Well maintained 维护良好
- Big community 大社区

**Cons 缺点**

- May require time and effort to learn the syntax and best practices of the library  
    可能需要时间和精力来学习库的语法和最佳实践
- Not user-friendly technical document  
    非用户友好的技术文档
- Not easy to customize with JavaScript such as Angular, React and Vue  
    使用 Angular、React 和 Vue 等 JavaScript 进行自定义不容易
- Increased complexity when handling more complex PDF interactions  
    处理更复杂的 PDF 交互时增加了复杂性

**When to use 何时使用**  
If you want to customize the PDF viewer UI and integrate it as part of a Vue website.  
如果你想自定义 PDF 查看器 UI 并将其集成为 Vue 网站的一部分。

---

## [](https://dev.to/fangtanbamrung/building-a-pdf-viewer-for-vuejs-with-pdfjs-vue3-pdf-app-and-more-21ii#method-4-vue3pdfapp)Method 4: vue3-pdf-app  
方式四：vue3-pdf-app

vue-pdf is a convenient package specifically designed for Vue.js developers to build PDF viewers. It acts as a wrapper around PDF.js, simplifying the integration process. Here's how you can get started with vue3-pdf-app in Vue.js:  
vue-pdf 是一个方便的软件包，专门为Vue.js开发者构建 PDF 查看器而设计。它充当PDF.js的包装器，简化了集成过程。以下是在 Vue.js 中开始使用 vue3-pdf-app 的方法：

1. Install the vue3-pdf-app package using npm or yarn  
    使用 npm 或 yarn 安装 vue3-pdf-app 包
2. Import the vue3-pdf-app component to display PDF  
    导入 vue3-pdf-app 组件以显示 PDF

Please find the demo [here](https://codesandbox.io/p/sandbox/vue3-pdf-app-forked-p2zygn?file=%2Fsrc%2FApp.vue%3A5%2C8).  
请在此处找到演示。

[![vue3-pdf-app demo](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fojacamdthb869n1ia59i.png)](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fojacamdthb869n1ia59i.png)

Let's explore the advantages and disadvantages of using vue-pdf:  
让我们来探讨一下使用 vue-pdf 的优缺点：

**Pros 优点**

- Easy integration with Vue.js projects  
    轻松与Vue.js项目集成
- Simplified API for PDF rendering  
    用于 PDF 渲染的简化 API
- Customizable viewer options  
    可自定义的查看器选项

**Cons 缺点**

- Support only Vue 3.2 with vue-cli which is not no longer recommended by Vue  
    仅支持 Vue 3.2 和 vue-cli，Vue 不再推荐
- Cannot run on Vite  
    无法在 Vite 上运行
- Not maintained 未维护
- Small community 小社区

**When to use 何时使用**  
Actually, I don't recommend using this library because of it only support Vue 3.2.  
实际上，我不建议使用这个库，因为它只支持 Vue 3.2。

---

## [](https://dev.to/fangtanbamrung/building-a-pdf-viewer-for-vuejs-with-pdfjs-vue3-pdf-app-and-more-21ii#comparison-summary)Comparison Summary  比较摘要

There are multiple methods available to build a PDF viewer for Vue.js. The iFrame approach is simple and relies on the browser's built-in capabilities. Displaying PDFs on the browser provides more control but requires user installation of a PDF viewer plugin. PDF.js offers advanced rendering features and cross-browser compatibility. For Vue.js developers, the vue-pdf package provides a convenient wrapper for PDF.js, simplifying the implementation process. Choose the method that best suits your project requirements and delivers the desired user experience  
有多种方法可用于构建用于Vue.js的 PDF 查看器。iFrame 方法很简单，并且依赖于浏览器的内置功能。在浏览器上显示 PDF 提供了更多控制，但需要用户安装 PDF 查看器插件。PDF.js提供高级渲染功能和跨浏览器兼容性。对于Vue.js开发者来说，vue-pdf 包为PDF.js提供了一个方便的包装器，简化了实现过程。选择最适合您的项目要求并提供所需用户体验的方法
