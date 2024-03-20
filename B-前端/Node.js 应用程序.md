## 构建一个简单的 Node.js 应用程序，用于使用 Express 下载 PDF.js

## [](https://dev.to/fredabod/building-a-simple-nodejs-app-for-downloading-pdfs-using-expressjs-42ki#introduction)介绍

在本教程中，我们将演练使用 Express 构建 Node.js 应用程序的过程.js该应用程序允许用户下载 PDF 文件。对于从文档管理系统到教育平台的各种应用程序，这可能是一个有用的功能。

## [](https://dev.to/fredabod/building-a-simple-nodejs-app-for-downloading-pdfs-using-expressjs-42ki#prerequisites)先决条件

在开始之前，请确保满足以下先决条件：

- [安装了 Node.js](https://nodejs.org/) 和 [npm](https://www.npmjs.com/)。
- 使用 设置项目目录并初始化 Node.js 项目。`npm init`

## [](https://dev.to/fredabod/building-a-simple-nodejs-app-for-downloading-pdfs-using-expressjs-42ki#step-1-project-setup)第 1 步：项目设置

为项目创建一个新目录 （app.js），并使用以下命令初始化 Node.js 项目：  

```
npm init
```

## [](https://dev.to/fredabod/building-a-simple-nodejs-app-for-downloading-pdfs-using-expressjs-42ki#step-2-install-dependencies)步骤 2：安装依赖项

为项目安装必要的依赖项。您可以通过运行以下命令来执行此操作：  

```
npm i express
```

## [](https://dev.to/fredabod/building-a-simple-nodejs-app-for-downloading-pdfs-using-expressjs-42ki#step-3-setting-up-the-express-app)第 3 步：设置快捷应用程序

创建快速应用程序并设置基本的快速服务器。下面是此步骤的代码：  

```
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
```

## [](https://dev.to/fredabod/building-a-simple-nodejs-app-for-downloading-pdfs-using-expressjs-42ki#step-4-creating-a-route-for-pdf-download)步骤 4：创建用于 PDF 下载的路由

创建处理 PDF 文件下载的快速路由。代码如下：  

```
app.get('/download-pdf', (req, res) => {
  const filePath = `./pdfs/java.pdf`;
});
```

确保你创建了一个名为“添加你自己的pdf文件”的文件夹，我的文件夹叫做`pdfs``java.pdf`

## [](https://dev.to/fredabod/building-a-simple-nodejs-app-for-downloading-pdfs-using-expressjs-42ki#step-5-check-if-the-pdf-file-exists)步骤 5：检查 PDF 文件是否存在

使用该方法检查 PDF 文件是否存在于指定目录中。如果该文件不存在，我们将处理“找不到文件”错误。`fs.existsSync`  

```
  if (!fs.existsSync(filePath)) {
    const notFoundError = new CustomError(404, 'PDF file not found');
    return next(notFoundError);
  }
```

## [](https://dev.to/fredabod/building-a-simple-nodejs-app-for-downloading-pdfs-using-expressjs-42ki#step-6-send-the-pdf-file-for-download)步骤 6：发送 PDF 文件以供下载

如果文件存在，我们可以使用该方法发送PDF文件以供下载。下面是此步骤的代码：`res.download`  

```
  res.download(filePath, `java.pdf`, (err) => {
    if (err) {
      const downloadError = new CustomError(500, 'Error: Unable to download the PDF file');
      return next(downloadError);
    }
  });
});
```

## [](https://dev.to/fredabod/building-a-simple-nodejs-app-for-downloading-pdfs-using-expressjs-42ki#step-7-error-handling)步骤 7：错误处理

实现错误处理以捕获和响应各种错误，例如找不到文件或下载错误。以下是在 Express 应用中处理错误的方法：  

```
app.use((err, req, res, next) => {
  if (err instanceof customError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    // Handle other errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
```

## [](https://dev.to/fredabod/building-a-simple-nodejs-app-for-downloading-pdfs-using-expressjs-42ki#step-8-run-the-application)步骤 8：运行应用程序

使用以下代码启动 Node.js 应用程序：  

```
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
```

现在你应该有这个——  

```
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// Replace this with your actual PDF directory path
const pdfDirectory = './pdfs';

// Error handling class
class CustomError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

// Middleware for error handling
app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/download-pdf', (req, res) => {
  const filePath = `${pdfDirectory}/java.pdf`;

  if (!fs.existsSync(filePath)) {
    const notFoundError = new CustomError(404, 'PDF file not found');
    return next(notFoundError);
  }

  res.download(filePath, `java.pdf`, (err) => {
    if (err) {
      const downloadError = new CustomError(500, 'Error: Unable to download the PDF file');
      return next(downloadError);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
```

现在，您可以测试或运行您的应用程序，然后使用您选择的任何浏览器{Chrome}访问此路由`node app.js``http://localhost:3000/download-pdf`

仅此而已 🙏🙏🙏