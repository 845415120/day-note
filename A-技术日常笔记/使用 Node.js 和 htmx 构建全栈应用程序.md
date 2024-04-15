
 
在本教程中，我将演示如何使用 Node 作为后端，使用 htmx 作为前端来构建一个功能齐全的 CRUD 应用。这将演示 htmx 如何集成到全栈应用程序中，让您评估其有效性并决定它是否是您未来项目的良好选择。

[htmx](https://www.sitepoint.com/htmx-introduction/) 
htmx 是一个现代 JavaScript 库，旨在通过启用部分 HTML 更新来增强 Web 应用程序，而无需重新加载整个页面。它通过网络发送 HTML 来实现这一点，而不是与传统前端框架关联的 JSON 有效负载。
## What We’ll Be Building  
我们将构建的内容

We’ll develop a simple contact manager capable of all CRUD actions: creating, reading, updating, and deleting contacts. By leveraging htmx, the application will offer a single-page application (SPA) feel, enhancing interactivity and user experience.  
我们将开发一个简单的联系人管理器，能够执行所有 CRUD 操作：创建、读取、更新和删除联系人。通过利用 htmx，该应用程序将提供单页应用程序 （SPA） 的感觉，增强交互性和用户体验。

If users have JavaScript disabled, the app will work with full-page refreshes, maintaining usability and discoverability. This approach showcases htmx’s ability to create modern web apps while keeping them accessible and SEO-friendly.  
如果用户禁用了 JavaScript，则该应用将进行整页刷新，从而保持可用性和可发现性。这种方法展示了 htmx 创建现代 Web 应用程序的能力，同时保持它们的可访问性和 SEO 友好性。

Here’s what we’ll end up with.  
这就是我们最终会得到的。

![The final app](https://uploads.sitepoint.com/wp-content/uploads/2024/03/1709753588contact-manager-1.png)

The code for this article can be found on the [accompanying GitHub repo](https://github.com/jameshibbard/node-htmx).  
本文的代码可在随附的 GitHub 存储库中找到。

## Prerequisites 先决条件

To follow along with this tutorial, you’ll need Node.js installed on your PC. If you don’t have Node installed, please head to the [official Node download page](https://nodejs.org/en/download/) and grab the correct binaries for your system. Alternatively, you might like to [install Node using a version manager](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/). This approach allows you to install multiple Node versions and switch between them at will.  
要按照本教程进行操作，您需要在电脑上安装Node.js。如果您尚未安装 Node，请前往官方 Node 下载页面并为您的系统获取正确的二进制文件。或者，您可能希望使用版本管理器安装 Node。这种方法允许您安装多个 Node 版本并在它们之间随意切换。

Apart from that, some familiarity with Node, Pug (which we’ll be using as the template engine) and htmx would be helpful, but not essential. If you’d like a refresher on any of the above, check out our tutorials: [Build a Simple Beginner App with Node](https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/), [A Guide to the Pug HTML Template Preprocessor](https://www.sitepoint.com/a-beginners-guide-to-pug/) and [An Introduction to htmx](https://www.sitepoint.com/htmx-introduction/).  
除此之外，熟悉 Node、Pug（我们将用作模板引擎）和 htmx 会有所帮助，但不是必需的。如果您想复习上述任何内容，请查看我们的教程：使用 Node 构建简单的初学者应用程序、Pug HTML 模板预处理器指南和 htmx 简介。

Before we begin, run the following commands:  
在开始之前，请运行以下命令：

```bash
node -v
npm -v
```

You should see output like this:  
您应该看到如下所示的输出：

```bash
v20.11.1
10.4.0
```

This confirms that Node and npm are installed on your machine and are accessible from your command line environment.

## Setting Up the Project

Let’s start by scaffolding a new Node project:  
让我们从基架开始一个新的 Node 项目：

```bash
mkdir contact-manager
cd contact-manager
npm init -y
```

This should create a `package.json` file in the project root.  
这应该在项目根目录中创建一个 `package.json` 文件。

Next, let’s install the dependencies we’re going to need:  
接下来，让我们安装我们需要的依赖项：

```bash
npm i express method-override pug
```

Of these packages, [Express](https://www.npmjs.com/package/express) is the backbone of our app. It’s a fast and minimalist web framework which offers a straightforward way to handle requests and responses, and to route URLs to specific handler functions. [Pug](https://www.npmjs.com/package/pug) will serve as our template engine, whereas we’ll use [method-override](https://www.npmjs.com/package/method-override) to employ HTTP verbs like PUT and DELETE in places where the client doesn’t support them.  
在这些软件包中，Express 是我们应用程序的支柱。它是一个快速且简约的 Web 框架，它提供了一种处理请求和响应以及将 URL 路由到特定处理程序函数的简单方法。Pug 将用作我们的模板引擎，而我们将使用 method-override 在客户端不支持它们的地方使用 HTTP 谓词，如 PUT 和 DELETE。

Next, create an `app.js` file in the root directory:  
接下来，在根目录中创建一个 `app.js` 文件：

```bash
touch app.js
```

And add the following content:

```javascript
const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('/', routes);

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
```

Here, we’re setting up the structure of our Express app. This includes configuring Pug as our view engine for rendering views, defining the directory for our static assets, and hooking up our router.  
在这里，我们正在设置 Express 应用程序的结构。这包括将 Pug 配置为我们的视图引擎来渲染视图、定义静态资产的目录以及连接我们的路由器。

The application listens on port 3000, with a console log to confirm that Express is running and ready to handle requests on the specified port. This setup forms the base of our application and is ready to be extended with further functionality and routes.  
应用程序侦听端口 3000，并使用控制台日志确认 Express 正在运行并准备好处理指定端口上的请求。此设置构成了我们应用程序的基础，并准备通过进一步的功能和路由进行扩展。

Next, let’s create our routes file:  
接下来，让我们创建路由文件：

```bash
mkdir routes
touch routes/index.js
```

Open that file and add the following:  
打开该文件并添加以下内容：

```javascript
const express = require('express');
const router = express.Router();

// GET /contacts
router.get('/contacts', async (req, res) => {
  res.send('It works!');
});
```

Here, we’re setting up a basic route within our newly created routes directory. This route listens for GET requests at the `/contacts` endpoint and responds with a simple confirmation message, indicating that everything is functioning properly.  
在这里，我们在新创建的路由目录中设置基本路由。此路由侦听 `/contacts` 端点的 GET 请求，并使用简单的确认消息进行响应，指示一切正常。

Next, update the “scripts” section of the `package.json` file with the following:  
接下来，使用以下内容更新 `package.json` 文件的“scripts”部分：

```javascript
"scripts": {
  "dev": "node --watch app.js"
},
```

This makes use of the new [watch mode in Node.js](https://www.sitepoint.com/nodejs-live-restarts-nodemon-watch/#nodejswatchmode), which will restart our app whenever any changes are detected.  
这利用了Node.js中的新监视模式，每当检测到任何更改时，该模式都会重新启动我们的应用程序。

Finally, boot everything up with `npm run dev` and head to [http://localhost:3000/contacts/](http://localhost:3000/contacts/) in your browser. You should see a message saying “It works!”.  
最后，启动所有内容 `npm run dev` 并在浏览器中 http://localhost:3000/contacts/。您应该会看到一条消息，上面写着“它有效！

![The skeleton app running in a browser, displaying the message “It works!”](https://uploads.sitepoint.com/wp-content/uploads/2024/03/1709753592contact-manager-2.png)

Exciting times! 激动人心的时刻！

## Displaying All Contacts 显示所有联系人

Now let’s add some contacts to display. As we’re focusing on htmx, we’ll use a hard-coded array for simplicity. This will keep things streamlined, allowing us to focus on htmx’s dynamic features without the complexity of database integration.  
现在让我们添加一些要显示的联系人。由于我们专注于 htmx，为了简单起见，我们将使用硬编码数组。这将使事情变得简单，使我们能够专注于htmx的动态功能，而没有复杂的数据库集成。

For those interested in adding a database later on, [SQLite](https://www.npmjs.com/package/sqlite3) and [Sequelize](https://www.npmjs.com/package/sequelize) are great choices, offering a file-based system that doesn’t require a separate database server.  
对于那些有兴趣稍后添加数据库的人来说，SQLite 和 Sequelize 是不错的选择，它们提供了一个不需要单独数据库服务器的基于文件的系统。

With that said, please add the following to `index.js` before the first route:  
话虽如此，请在第一 `index.js` 条路线之前添加以下内容：

```javascript
const contacts = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Emily Johnson', email: 'emily.johnson@example.com' },
  { id: 4, name: 'Aarav Patel', email: 'aarav.patel@example.com' },
  { id: 5, name: 'Liu Wei', email: 'liu.wei@example.com' },
  { id: 6, name: 'Fatima Zahra', email: 'fatima.zahra@example.com' },
  { id: 7, name: 'Carlos Hernández', email: 'carlos.hernandez@example.com' },
  { id: 8, name: 'Olivia Kim', email: 'olivia.kim@example.com' },
  { id: 9, name: 'Kwame Nkrumah', email: 'kwame.nkrumah@example.com' },
  { id: 10, name: 'Chen Yu', email: 'chen.yu@example.com' },
];
```

Now we need to create a template for our route to display. Create a `views` folder containing an `index.pug` file:  
现在我们需要为我们的路线创建一个模板来显示。创建一个 `views` 包含文件的 `index.pug` 文件夹：

```bash
mkdir views
touch views/index.pug
```

And add the following:

```pug
doctype html
html
  head
    meta(charset='UTF-8')
    title Contact Manager

    link(rel='preconnect', href='https://fonts.googleapis.com')
    link(rel='preconnect', href='https://fonts.gstatic.com', crossorigin)
    link(href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap', rel='stylesheet')

    link(rel='stylesheet', href='/styles.css')
  body
    header
      a(href='/contacts')
        h1 Contact Manager

    section#sidebar
      ul.contact-list
        each contact in contacts
          li #{contact.name}
      div.actions
        a(href='/contacts/new') New Contact

    main#content
      p Select a contact

    script(src='https://unpkg.com/htmx.org@1.9.10')
```

In this template, we’re laying out the HTML structure for our application. In the head section, we’re including the [Roboto font from Google Fonts](https://fonts.google.com/?query=roboto) and a stylesheet for custom styles.  
在此模板中，我们将为应用程序布局 HTML 结构。在头部部分，我们包括来自 Google Fonts 的 Roboto 字体和用于自定义样式的样式表。

The body is divided into a header, a sidebar for listing contacts, and a main content area where all of our contact information will go. The content area currently contains a placeholder. At the end of the body we’re also including the latest version of the htmx library from a CDN.  
正文分为标题、用于列出联系人的侧边栏和我们所有联系信息的主要内容区域。内容区域当前包含占位符。在正文的末尾，我们还包含了来自 CDN 的最新版本的 htmx 库。

The template expects to receive an array of contacts (in a `contacts` variable), which we iterate over in the sidebar and output each contact name in an unordered list using [Pug’s interpolation syntax](https://pugjs.org/language/interpolation.html).  
该模板期望接收一个联系人数组（在变量 `contacts` 中），我们在侧边栏中对其进行迭代，并使用 Pug 的插值语法在无序列表中输出每个联系人姓名。

Next, let’s create the custom stylesheet:  
接下来，让我们创建自定义样式表：

```bash
mkdir public
touch public/styles.css
```

I don’t intend to list the styles here. Please copy them from the [CSS file in the accompanying GitHub repo](https://github.com/jameshibbard/node-htmx/blob/main/public/styles.css), or feel free to add some of your own. 🙂  
我不打算在这里列出样式。请从随附的 GitHub 存储库中的 CSS 文件中复制它们，或者随意添加一些您自己的文件。🙂

Back in `index.js`, let’s update our route to use the template:  
回到 `index.js` ，让我们更新我们的路由以使用模板：

```javascript
// GET /contacts
router.get('/contacts', (req, res) => {
  res.render('index', { contacts });
});
```

Now when you refresh the page you should see something like this.  
现在，当您刷新页面时，您应该会看到类似这样的内容。

![Contact manager displaying a list of contacts](https://uploads.sitepoint.com/wp-content/uploads/2024/03/1709799943contact-manager-3.png)

## Displaying a Single Contact  
显示单个联系人

So far, all we’ve done is set up a basic Express app. Let’s change that and finally add htmx to the mix. The next step is to make it so that when a user clicks on a contact in the sidebar, that contact’s information is displayed in the main content area — naturally without a full page reload.  
到目前为止，我们所做的只是设置一个基本的 Express 应用程序。让我们改变一下，最后将 htmx 添加到组合中。下一步是让用户点击侧边栏中的联系人时，该联系人的信息会显示在主要内容区域中——自然不会重新加载整页。

To start with, let’s move the sidebar into its own template:  
首先，让我们将侧边栏移动到它自己的模板中：

```bash
touch views/sidebar.pug
```

Add the following to this new file:  
将以下内容添加到此新文件中：

```pug
ul.contact-list
  each contact in contacts
    li
      a(
        href=`/contacts/${contact.id}`,
        hx-get=`/contacts/${contact.id}`,
        hx-target='#content',
        hx-push-url='true'
      )= contact.name

div.actions
  a(href='/contacts/new') New Contact
```

Here we have made each contact a link pointing to `/contacts/${contact.id}` and added three htmx attributes:  
在这里，我们使每个联系人都成为指向 `/contacts/${contact.id}` 的链接，并添加了三个 htmx 属性：

[![Learn to Code with JavaScript](https://cdn.sanity.io/images/708bnrs8/production/9144078672758630a953e5d4989247863d85dbdf-768x260.png?w=768&h=260&auto=format)](https://www.sitepoint.com/premium/books/learn-to-code-with-javascript/?ref_source=bpp)

- `hx-get`. When the user clicks a link, htmx will intercept the click and make a GET request via Ajax to the `/contacts/${contact.id}` endpoint.  
    `hx-get` 。当用户单击链接时，htmx 将拦截该点击并通过 Ajax 向 `/contacts/${contact.id}` 端点发出 GET 请求。
- `hx-target`. When the request completes, the response will be inserted into the div with an ID of `content`. We haven’t specified any kind of [swap strategy](https://htmx.org/attributes/hx-swap/) here, so the contents of the div will be replaced with whatever is returned from the Ajax request. This is the default behavior.  
    `hx-target` 。请求完成后，响应将插入到 ID 为 `content` 的 div 中。我们没有在这里指定任何类型的交换策略，因此 div 的内容将被替换为 Ajax 请求返回的任何内容。这是默认行为。
- `hx-push-url`. This will ensure that the value specified in `htx-get` is pushed onto the browser’s history stack, changing the URL.  
    `hx-push-url` 。这将确保将 中 `htx-get` 指定的值推送到浏览器的历史记录堆栈上，从而更改 URL。

Update `index.pug` to use our template:  
更新 `index.pug` 以使用我们的模板：

```pug
section#sidebar
  include sidebar.pug
```

_Remember: Pug is white space sensitive, so be sure to use the correct indentation.  
请记住：哈巴狗对空白很敏感，因此请务必使用正确的缩进。_

Now let’s create a new endpoint in `index.js` to return the HTML response that htmx is expecting:  
现在，让我们创建一个新的端点 `index.js` 来返回 htmx 期望的 HTML 响应：

```javascript
// GET /contacts/1
router.get('/contacts/:id', (req, res) => {
  const { id } = req.params;
  const contact = contacts.find((c) => c.id === Number(id));

  res.send(`
    <h2>${contact.name}</h2>
    <p><strong>Name:</strong> ${contact.name}</p>
    <p><strong>Email:</strong> ${contact.email}</p>
  `);
});
```

If you save this and refresh your browser, you should now be able to view the details of each contact.  
如果您保存此内容并刷新浏览器，您现在应该能够查看每个联系人的详细信息。

![The final app](https://uploads.sitepoint.com/wp-content/uploads/2024/03/1709753588contact-manager-1.png)

### HTML over the wire  
网络上的 HTML

Let’s take a second to understand what’s going on here. As mentioned at the beginning of the article, htmx delivers HTML over the wire, as opposed to the JSON payload associated with traditional frontend frameworks.  
让我们花点时间了解这里发生了什么。正如本文开头提到的，htmx 通过网络交付 HTML，而不是与传统前端框架相关的 JSON 有效负载。

We can see this if we open our browser’s developer tools, switch to the **Network** tab and click on one of the contacts. Upon receiving a request from the frontend, our Express app generates the HTML needed to display that contact and sends it to the browser, where htmx swaps it into the correct place in the UI.  
如果我们打开浏览器的开发人员工具，切换到“网络”选项卡并单击其中一个联系人，我们可以看到这一点。在收到来自前端的请求后，我们的 Express 应用程序会生成显示该联系人所需的 HTML 并将其发送到浏览器，htmx 会将其交换到 UI 中的正确位置。

![Developer tools showing the request for /contacts/1 in the Network tab](https://uploads.sitepoint.com/wp-content/uploads/2024/03/1709803900contact-manager-4.png)

### Dealing with a full page refresh  
处理整页刷新

So things are going pretty well, huh? Thanks to htmx, we just made our page dynamic by specifying a couple of attributes on an anchor tag. Unfortunately, there’s a problem…  
所以事情进展得很顺利，对吧？多亏了 htmx，我们刚刚通过在锚标签上指定几个属性来使我们的页面动态化。不幸的是，有一个问题......

If you display a contact, then refresh the page, our lovely UI is gone and all you see is the bare contact details. The same will happen if you load the URL directly in your browser.  
如果您显示联系人，然后刷新页面，我们可爱的用户界面就消失了，您看到的只是裸露的联系人详细信息。如果您直接在浏览器中加载 URL，也会发生同样的情况。

The reason for this is obvious if you think about it. When you access a URL such as [http://localhost:3000/contacts/1](http://localhost:3000/contacts/1), the Express route for `'/contacts/:id'` kicks in and returns the HTML for the contact, as we’ve told it to do. It knows nothing about the rest of our UI.  
如果你仔细想想，原因很明显。当您访问 URL（如 http://localhost:3000/contacts/1）时，Express 路由会 `'/contacts/:id'` 启动并返回联系人的 HTML，正如我们告诉的那样。它对我们 UI 的其余部分一无所知。

To combat this, we need to make a couple of changes. On the server, we need to check for an [HX-Request header](https://htmx.org/reference/#request_headers), which indicates that the request came from htmx. If this header exists, then we can send our partial. Otherwise, we need to send the full page.  
为了解决这个问题，我们需要做出一些改变。在服务器上，我们需要检查 HX-Request 标头，它指示请求来自 htmx。如果此标头存在，那么我们可以发送部分标头。否则，我们需要发送整页。

Change the route handler like so:  
更改路由处理程序，如下所示：

```javascript
// GET /contacts/1
router.get('/contacts/:id', (req, res) => {
  const { id } = req.params;
  const contact = contacts.find((c) => c.id === Number(id));

  if (req.headers['hx-request']) {
    res.send(`
      <h2>${contact.name}</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
    `);
  } else {
    res.render('index', { contacts });
  }
});
```

Now, when you reload the page, the UI doesn’t disappear. It does, however, revert from whichever contact you were viewing to the message “Select a contact”, which isn’t ideal.  
现在，当您重新加载页面时，UI 不会消失。但是，它确实会从您正在查看的任何联系人恢复为消息“选择联系人”，这并不理想。

To fix this, we can introduce a `case` statement to our `index.pug` template:  
为了解决这个问题，我们可以在 `index.pug` 模板中引入一个 `case` 语句：

```pug
main#content
  case action
    when 'show'
      h2 #{contact.name}
      p #[strong Name:] #{contact.name}
      p #[strong Email:] #{contact.email}
    when 'new'
      // Coming soon
    when 'edit'
      // Coming soon
    default
      p Select a contact
```

And finally update the route handler:  
最后更新路由处理程序：

```javascript
if (req.headers['hx-request']) {
  // As before
} else {
  res.render('index', { action: 'show', contacts, contact });
}
```

Note that we’re now passing in a `contact` variable, which will be used in the event of a full page reload.  
请注意，我们现在传入了一个 `contact` 变量，该变量将在重新加载整页时使用。

And with this, our app should withstand being refreshed or having a contact loaded directly.  
有了这个，我们的应用程序应该可以承受刷新或直接加载联系人。

### A quick refactor 快速重构

Although this works, you might notice that we have some duplicate content in both our route handler and our main pug template. This isn’t ideal, and things will start to get unwieldy as soon as a contact has anything more than a handful of attributes, or we need to use some logic to decide which attributes to display.  
虽然这有效，但您可能会注意到，我们的路由处理程序和主 pug 模板中都有一些重复的内容。这并不理想，一旦联系人的属性超过少数几个，或者我们需要使用一些逻辑来决定要显示哪些属性，事情就会开始变得笨拙。

To counteract this, let’s move contact into its own template:  
为了解决这个问题，让我们将联系人移动到它自己的模板中：

```bash
touch views/contact.pug
```

In the newly created template, add this:  
在新创建的模板中，添加以下内容：

```pug
h2 #{contact.name}

p #[strong Name:] #{contact.name}
p #[strong Email:] #{contact.email}
```

In the main template (`index.pug`):  
在主模板 （ `index.pug` ） 中：

```pug
main#content
  case action
    when 'show'
      include contact.pug
```

And our route handler:  
我们的路线处理程序：

```javascript
if (req.headers['hx-request']) {
  res.render('contact', { contact });
} else {
  res.render('index', { action: 'show', contacts, contact });
}
```

Things should still work as before, but now we’ve removed the duplicated code.  
事情应该仍然像以前一样工作，但现在我们已经删除了重复的代码。

## The New Contact Form  
新的联系表格

The next task to turn our attention to is creating a new contact. This part of the tutorial will guide you through setting up the form and backend logic, using htmx to handle submissions dynamically.  
接下来要关注的任务是创建一个新的联系人。本教程的这一部分将指导您设置表单和后端逻辑，并使用 htmx 动态处理提交。

Let’s start by updating our sidebar template. Change:  
让我们从更新侧边栏模板开始。改变：

```pug
div.actions
  a(href='/contacts/new') New Contact
```

… to: ...自：

```pug
div.actions
  a(
    href='/contacts/new',
    hx-get='/contacts/new',
    hx-target='#content',
    hx-push-url='true'
  ) New Contact
```

This uses the same htmx attributes as our links to display a contact: `hx-get` will make a GET request via Ajax to the `/contacts/new` endpoint, `hx-target` specifies where to insert the response, and `hx-push-url` will ensure that the URL is changed.  
这使用与我们的链接相同的 htmx 属性来显示联系人： `hx-get` 将通过 Ajax 向 `/contacts/new` 端点发出 GET 请求， `hx-target` 指定插入响应的位置，并确保 `hx-push-url` 更改 URL。

Now let’s create a new template for the form:  
现在，让我们为表单创建一个新模板：

```bash
touch views/form.pug
```

And add the following code:  
并添加以下代码：

```pug
h2 New Contact

form(
  action='/contacts',
  method='POST',
  hx-post='/contacts',
  hx-target='#sidebar',
  hx-on::after-request='if(event.detail.successful) this.reset()'
)
  label(for='name') Name:
  input#name(type='text', name='name', required)

  label(for='email') Email:
  input#email(type='email', name='email', required)

  div.actions
    button(type='submit') Submit
```

Here, we’re using the `hx-post` attribute to tell htmx to intercept the form submission and make a POST request with the form data to the `/contacts` endpoint. The result (an updated list of contacts) will be inserted into the sidebar. We don’t want to change the URL in this case, as the user might want to enter multiple new contacts. We do, however, want to empty the form after a successful submission, which is what the `hx-on::after-request` does. The `hx-on*` attributes allow you to embed scripts inline to respond to events directly on an element. You can read [more about it here](https://htmx.org/attributes/hx-on/).  
在这里，我们使用该 `hx-post` 属性告诉 htmx 拦截表单提交，并向 `/contacts` 端点发出包含表单数据的 POST 请求。结果（更新的联系人列表）将插入到侧边栏中。在这种情况下，我们不想更改 URL，因为用户可能希望输入多个新联系人。但是，我们确实希望在成功提交后清空表单，这就是它 `hx-on::after-request` 的作用。这些 `hx-on*` 属性允许您内联嵌入脚本，以直接在元素上响应事件。你可以在这里阅读更多关于它的信息。

Next, let’s add a route for the form in `index.js`:  
接下来，让我们为表单添加一个 `index.js` 路由：

```javascript
// GET /contacts
...

// GET /contacts/new
router.get('/contacts/new', (req, res) => {
  if (req.headers['hx-request']) {
    res.render('form');
  } else {
    res.render('index', { action: 'new', contacts, contact: {} });
  }
});

// GET /contacts/1
...
```

Route order is important here. If you have the `'/contacts/:id'` route first, then Express will try and find a contact with the ID of `new`.  
路线顺序在这里很重要。如果您先有 `'/contacts/:id'` 路由，那么 Express 将尝试查找 ID 为 的 `new` 联系人。

Finally, update our `index.pug` template to use the form:  
最后，更新我们的 `index.pug` 模板以使用以下表单：

```pug
when 'new'
  include form.pug
```

Refresh the page, and at this point you should be able to render the new contact form by clicking on the _New Contact_ link in the sidebar.  
刷新页面，此时您应该能够通过单击侧边栏中的“新建联系人”链接来呈现新的联系人表单。

![The New Contact form](https://uploads.sitepoint.com/wp-content/uploads/2024/03/1709811109contact-manager-5.png)

## Creating a Contact 创建联系人

Now we need to create a route to handle form submission.  
现在，我们需要创建一个路由来处理表单提交。

First update `app.js` to give us access to the form’s data within our route handler.  
第一次更新 `app.js` ，使我们能够访问路由处理程序中的表单数据。

```diff
const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

+ app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
```

Previously, we would have used the [body-parser package](https://www.npmjs.com/package/body-parser), but I recently learned [this is no longer necessary](https://dev.to/taylorbeeston/you-probably-don-t-need-body-parser-in-your-express-apps-3nio).  
以前，我们会使用 body-parser 包，但我最近了解到这不再需要了。

Then add the following to `index.js`:  
然后将 `index.js` 以下内容添加到：

```javascript
// POST /contacts
router.post('/contacts', (req, res) => {
  const newContact = {
    id: contacts.length + 1,
    name: req.body.name,
    email: req.body.email,
  };

  contacts.push(newContact);

  if (req.headers['hx-request']) {
    res.render('sidebar', { contacts });
  } else {
    res.render('index', { action: 'new', contacts, contact: {} });
  }
});
```

Here, we’re creating a new contact with the data we received from the client and adding it to the `contacts` array. We’re then re-rendering the sidebar, passing it the updated list of contacts.  
在这里，我们将使用从客户端收到的数据创建一个新联系人，并将其添加到数组中 `contacts` 。然后，我们将重新呈现侧边栏，并向其传递更新的联系人列表。

Note that, if you’re making any kind of application that has users, it’s up to you to validate the data you’re receiving from the client. In our example, I’ve added some basic client-side validation, but this can easily be bypassed.  
请注意，如果您要制作任何具有用户的应用程序，则由您来验证从客户端接收的数据。在我们的示例中，我添加了一些基本的客户端验证，但这很容易被绕过。

There’s an example of how to validate input on the server using the [express-validator package](https://www.npmjs.com/package/express-validator) package in the [Node tutorial I linked to above](https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/#validatingforminput).  
在我上面链接的 Node 教程中，有一个如何使用 express-validator 包包验证服务器上的输入的示例。

Now, if you refresh your browser and try adding a contact, it should work as expected: the new contact should be added to the sidebar and the form should be reset.  
现在，如果您刷新浏览器并尝试添加联系人，它应该按预期工作：新联系人应添加到侧边栏，并且应重置表单。

### Adding flash messages 添加 Flash 消息

This is well and good, but now we need a way to inform the user that a contact has been added. In a typical application, we would use a flash message — a temporary notification that alerts the user about the outcome of an action.  
这很好，但现在我们需要一种方法来通知用户已添加联系人。在典型的应用程序中，我们将使用 Flash 消息 — 一种临时通知，用于提醒用户有关操作结果的信息。

The problem we encounter with htmx is that we’re updating the sidebar after successfully creating a new contact, but this isn’t where we want our flash message to be displayed. A better location would be above the new contact form.  
我们在使用 htmx 时遇到的问题是，我们在成功创建新联系人后更新了侧边栏，但这不是我们希望显示 Flash 消息的地方。更好的位置是在新的联系表格上方。

To get around this, we can use the [`hx-swap-oob` attribute](https://htmx.org/attributes/hx-swap-oob/). This allows you to specify that some content in a response should be swapped into the DOM somewhere other than the target, that is “Out of Band”.  
为了解决这个问题，我们可以使用该 `hx-swap-oob` 属性。这允许您指定响应中的某些内容应交换到 DOM 中目标以外的位置，即“带外”。

Update the route handler as follows:  
更新路由处理程序，如下所示：

```javascript
if (req.headers['hx-request']) {
  res.render('sidebar', { contacts }, (err, sidebarHtml) => {
    const html = `
      <main id="content" hx-swap-oob="afterbegin">
        <p class="flash">Contact was successfully added!</p>
      </main>
      ${sidebarHtml}
    `;
    res.send(html);
  });
} else {
  res.render('index', { action: 'new', contacts, contact: {} });
}
```

Here, we’re rendering the sidebar as before, but passing the `render` method an anonymous function as the third parameter. This function receives the HTML generated by calling `res.render('sidebar', { contacts })`, which we can then use to assemble our final response.  
在这里，我们像以前一样渲染侧边栏，但将匿名函数作为第三个参数传递给 `render` 该方法。这个函数接收通过调用 `res.render('sidebar', { contacts })` 生成的 HTML，然后我们可以用它来组装我们的最终响应。

By specifying a swap strategy of `"afterbegin"`, the flash message is inserted at the top of the container.  
通过指定交换 `"afterbegin"` 策略 ，flash 消息将插入到容器的顶部。

Now, when we add a contact, we should get a nice message informing us what happened.  
现在，当我们添加联系人时，我们应该收到一条好消息，告知我们发生了什么。

![Contact was successfully added](https://uploads.sitepoint.com/wp-content/uploads/2024/03/1709814766contact-manager-6.png)

## Editing a Contact 编辑联系人

For updating a contact, we’re going to reuse the form we created in the previous section.  
为了更新联系人，我们将重用在上一节中创建的表单。

Let’s start by updating our `contact.pug` template to add the following:  
让我们从更新 `contact.pug` 模板开始添加以下内容：

```pug
div.actions
  a(
    href=`/contacts/${contact.id}/edit`,
    hx-get=`/contacts/${contact.id}/edit`,
    hx-target='#content',
    hx-push-url='true'
  ) Edit Contact
```

This will add an **Edit Contact** button beneath a contacts details. As we’ve seen before, when the link is clicked, `hx-get` will make a GET request via Ajax to the `/${contact.id}/edit` endpoint, `hx-target` will specify where to insert the response, and `hx-push-url` will ensure that the URL is changed.  
这将在联系人详细信息下方添加一个“编辑联系人”按钮。正如我们之前所看到的，当点击链接时， `hx-get` 将通过 Ajax 向 `/${contact.id}/edit` 端点发出 GET 请求， `hx-target` 指定插入响应的位置，并确保 `hx-push-url` URL 已更改。

Now let’s alter our `index.pug` template to use the form:  
现在，让我们更改 `index.pug` 模板以使用以下形式：

```pug
when 'edit'
  include form.pug
```

Also add a route handler to display the form:  
此外，添加路由处理程序以显示表单：

```javascript
// GET /contacts/1/edit
router.get('/contacts/:id/edit', (req, res) => {
  const { id } = req.params;
  const contact = contacts.find((c) => c.id === Number(id));

  if (req.headers['hx-request']) {
    res.render('form', { contact });
  } else {
    res.render('index', { action: 'edit', contacts, contact });
  }
});
```

Note that we’re retrieving the contact using the ID from the request, then passing that contact to the form.  
请注意，我们将使用请求中的 ID 检索联系人，然后将该联系人传递到表单。

We’ll also need to update our new contact handler to do the same, but here passing an empty object:  
我们还需要更新新的联系人处理程序以执行相同的操作，但此处传递一个空对象：

```diff
// GET /contacts/new
router.get('/contacts/new', (req, res) => {
  if (req.headers['hx-request']) {
-    res.render('form');
+    res.render('form', { contact: {} });
  } else {
    res.render('index', { action: 'new', contacts, contact: {} });
  }
});
```

Then we need to update the form itself:  
然后我们需要更新表单本身：

```pug
- isEditing = () => !(Object.keys(contact).length === 0);

h2=isEditing() ? "Edit Contact" : "New Contact"

form(
  action=isEditing() ? `/update/${contact.id}?_method=PUT` : '/contacts',
  method='POST',

  hx-post=isEditing() ? false : '/contacts',
  hx-put=isEditing() ? `/update/${contact.id}` : false,
  hx-target='#sidebar',
  hx-push-url=isEditing() ? `/contacts/${contact.id}` : false
  hx-on::after-request='if(event.detail.successful) this.reset()',
)
  label(for='name') Name:
  input#name(type='text', name='name', required, value=contact.name)

  label(for='email') Email:
  input#email(type='email', name='email', required, value=contact.email)

  div.actions
    button(type='submit') Submit
```

As we’re passing in either a contact or an empty object to this form, we now have an easy way to determine if we’re in “edit” or “create” mode. We can do this by checking `Object.keys(contact).length`. We can also extract this check into a little helper function at the top of the file using Pug’s [unbuffered code syntax](https://pugjs.org/language/code.html).  
当我们将联系人或空对象传递到此表单时，我们现在有一种简单的方法来确定我们是否处于“编辑”或“创建”模式。我们可以通过检查 `Object.keys(contact).length` 来做到这一点。我们还可以使用 Pug 的无缓冲代码语法将此检查提取到文件顶部的一个小辅助函数中。

Once we know which mode we find ourselves in, we can conditionally change the page title, then decide which attributes we add to the form tag. For the edit form, we need to add a `hx-put` attribute and set it to `/update/${contact.id}`. We also need to update the URL once the contact’s details have been saved.  
一旦我们知道我们发现自己处于哪种模式，我们就可以有条件地更改页面标题，然后决定将哪些属性添加到表单标签中。对于编辑表单，我们需要添加一个 `hx-put` 属性并将其设置为 `/update/${contact.id}` 。保存联系人的详细信息后，我们还需要更新 URL。

To do all of this, we can utilize the fact that, if a conditional returns `false`, Pug will omit the attribute from the tag.  
为了完成所有这些工作，我们可以利用这样一个事实，即如果条件返回 `false` ，Pug 将从标签中省略该属性。

Meaning that this: 这意味着：

```pug
form(
  action=isEditing() ? `/update/${contact.id}?_method=PUT` : '/contacts',
  method='POST',

  hx-post=isEditing() ? false : '/contacts',
  hx-put=isEditing() ? `/update/${contact.id}` : false,
  hx-target='#sidebar',
  hx-on::after-request='if(event.detail.successful) this.reset()',
  hx-push-url=isEditing() ? `/contacts/${contact.id}` : false
)
```

… will compile to the following when `isEditing()` returns `false`:  
...当 `isEditing()` 返回 `false` 时，将编译为以下内容：

```markup
<form 
  action="/contacts" 
  method="POST" 
  hx-post="/contacts" 
  hx-target="#sidebar" 
  hx-on::after-request="if(event.detail.successful) this.reset()"
>
  ...
</form>
```

But when `isEditing()` returns `true`, it will compile to:  
但是当返回 `true` 时 `isEditing()` ，它会编译为：

```markup
<form 
  action="/update/1?_method=PUT" 
  method="POST" 
  hx-put="/update/1" 
  hx-target="#sidebar" 
  hx-on::after-request="if(event.detail.successful) this.reset()" 
  hx-push-url="/contacts/1"
>
  ...
</form>
```

In its update state, notice that the form action is `"/update/1?_method=PUT"`. This query string parameter has been added because we’re using the [method-override package](https://www.npmjs.com/package/method-override), and it will make our router respond to a PUT request.  
在其更新状态下，请注意窗体操作是 `"/update/1?_method=PUT"` 。之所以添加此查询字符串参数，是因为我们使用的是 method-override 包，它将使我们的路由器响应 PUT 请求。

Out of the box, htmx can send PUT and DELETE requests, but the browser can’t. This means that, if we want to deal with a scenario where JavaScript is disabled, we would need to duplicate our route handler, having it respond to both PUT (htmx) and POST (the browser). Using this middleware will keep our code DRY.  
htmx 可以发送 PUT 和 DELETE 请求，但浏览器不能。这意味着，如果我们想处理禁用 JavaScript 的场景，我们需要复制我们的路由处理程序，让它同时响应 PUT （htmx） 和 POST（浏览器）。使用这个中间件将使我们的代码保持干燥。

Let’s go ahead and add it to `app.js`:  
让我们继续将其添加到 `app.js` ：

```diff
const express = require('express');
const path = require('path');
+ const methodOverride = require('method-override');
const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

+ app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
```

Finally, let’s update `index.js` with a new route handler:  
最后，让我们使用新的路由处理程序进行更新 `index.js` ：

```javascript
// PUT /contacts/1
router.put('/update/:id', (req, res) => {
  const { id } = req.params;

  const newContact = {
    id: Number(id),
    name: req.body.name,
    email: req.body.email,
  };

  const index = contacts.findIndex((c) => c.id === Number(id));

  if (index !== -1) contacts[index] = newContact;

  if (req.headers['hx-request']) {
    res.render('sidebar', { contacts }, (err, sidebarHtml) => {
      res.render('contact', { contact: contacts[index] }, (err, contactHTML) => {
        const html = `
          ${sidebarHtml}
          <main id="content" hx-swap-oob="true">
            <p class="flash">Contact was successfully updated!</p>
            ${contactHTML}
          </main>
        `;

        res.send(html);
      });
    });
  } else {
    res.redirect(`/contacts/${index + 1}`);
  }
});
```

Hopefully there’s nothing too mysterious here by now. At the beginning of the handler we grab the contact ID from the request params. We then find the contact we wish to update and swap it out with a new contact created from the form data we received.  
希望现在这里没有什么太神秘的东西。在处理程序的开头，我们从请求参数中获取联系人 ID。然后，我们找到要更新的联系人，并将其替换为根据我们收到的表单数据创建的新联系人。

When dealing with an htmx request, we first render the sidebar template with our updated contacts list. We then render the contact template with the updated contact and use the result of both of these calls to assemble our response. As before, we use an “Out of Band” update to create a flash message informing the user that the contact was updated.  
在处理 htmx 请求时，我们首先使用更新的联系人列表呈现侧边栏模板。然后，我们使用更新的联系人呈现联系人模板，并使用这两个调用的结果来组合我们的响应。和以前一样，我们使用“带外”更新来创建一条 Flash 消息，通知用户联系人已更新。

At this point, you should be able to update contacts.  
此时，您应该能够更新联系人。

![Contact was successfully updated](https://uploads.sitepoint.com/wp-content/uploads/2024/03/1709818821contact-manager-7.png)

## Deleting a Contact 删除联系人

The final piece of the puzzle is the ability to delete contacts. Let’s add a button to do this to our contact template:  
拼图的最后一部分是删除联系人的能力。让我们在联系人模板中添加一个按钮来执行此操作：

```pug
div.actions
  form(method='POST', action=`/delete/${contact.id}?_method=DELETE`)
    button(
      type='submit',
      hx-delete=`/delete/${contact.id}`,
      hx-target='#sidebar',
      hx-push-url='/contacts'
      class='link'
    ) Delete Contact

  a( 
    // as before 
  )
```

Note that it’s good practice to use a form and a button to issue the DELETE request. Forms are designed for actions that cause changes, like deletions, and this ensures semantic correctness. Additionally, using a link for a delete action could be risky because search engines can inadvertently follow links, potentially leading to unwanted deletions.  
请注意，最好使用窗体和按钮发出 DELETE 请求。表单是为导致更改的操作（如删除）而设计的，这确保了语义的正确性。此外，使用链接进行删除操作可能会有风险，因为搜索引擎可能会无意中跟踪链接，从而可能导致不必要的删除。

That being said, I’ve added some [CSS to style the button like a link](https://github.com/jameshibbard/node-htmx/blob/main/public/styles.css#L113), as buttons are ugly. If you copied the styles from the repo before, you already have this in your code.  
话虽如此，我添加了一些 CSS 来设置按钮的样式，就像链接一样，因为按钮很丑。如果之前从存储库复制了样式，则代码中已有此样式。

And finally, our route handler in `index.js`:  
最后，我们的路由处理程序： `index.js`

```javascript
// DELETE /contacts/1
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const index = contacts.findIndex((c) => c.id === Number(id));

  if (index !== -1) contacts.splice(index, 1);
  if (req.headers['hx-request']) {
    res.render('sidebar', { contacts }, (err, sidebarHtml) => {
      const html = `
        <main id="content" hx-swap-oob="true">
          <p class="flash">Contact was successfully deleted!</p>
        </main>
        ${sidebarHtml}
      `;
      res.send(html);
    });
  } else {
    res.redirect('/contacts');
  }
});
```

Once the contact has been removed, we’re updating the sidebar and showing the user a flash message.  
移除联系人后，我们会更新侧边栏并向用户显示 Flash 消息。

![Contact was successfully deleted](https://uploads.sitepoint.com/wp-content/uploads/2024/03/1709819480contact-manager-8.png)

## Taking It Further 更进一步

And that’s a wrap.  
到此为止。

In this article, we’ve crafted a full-stack CRUD application using Node and Express for the backend and htmx for the frontend. Along the way, I’ve demonstrated how htmx can simplify adding dynamic behavior to your web apps, reducing the need for complex JavaScript and full-page reloads, and thus making the user experience smoother and more interactive.  
在本文中，我们精心设计了一个全栈 CRUD 应用程序，后端使用 Node 和 Express，前端使用 htmx。在此过程中，我演示了 htmx 如何简化向 Web 应用程序添加动态行为的过程，减少对复杂 JavaScript 和整页重新加载的需求，从而使用户体验更流畅、更具交互性。

And as an added bonus, the app also functions well without JavaScript.  
作为额外的好处，该应用程序在没有 JavaScript 的情况下也能很好地运行。

Yet while our app _is_ fully functional, it’s admittedly a little bare-bones. If you wish to continue exploring htmx, you might like to look at implementing [view transitions](https://www.sitepoint.com/view-transitions-api-introduction/) between app states, or adding some further validation to the form — for example, to verify that the email address comes from a specific domain.  
然而，虽然我们的应用程序功能齐全，但不可否认的是，它有点简陋。如果您希望继续探索 htmx，您可能希望了解在应用状态之间实现视图转换，或向表单添加一些进一步的验证，例如，验证电子邮件地址是否来自特定域。

I have examples of both of these things (and more besides) in my [Introduction to htmx](https://www.sitepoint.com/htmx-introduction/).  
我在 htmx 的介绍中提供了这两件事（以及更多）的例子。

Apart from that, if you have any questions or comments, please [reach out on X](https://twitter.com/jchibbard).  
除此之外，如果您有任何问题或意见，请联系 X。

Happy coding! 祝您编码愉快！