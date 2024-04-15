---
标题: 
图片: 
链接: https://www.sitepoint.com/sending-email-using-node-js/?utm_source=rss
时时: 
评价: 
tags: 
时间: 2024-04-15
---
  
Most web applications need to send email. It may be for registration, password resets, status reports, though to full marketing campaigns such as newsletters and promotions. This tutorial explains how to send email in Node.js, but the concepts and challenges apply to whatever systems you’re using.  
大多数 Web 应用程序都需要发送电子邮件。它可能用于注册、密码重置、状态报告，但可用于完整的营销活动，例如时事通讯和促销活动。本教程介绍了如何在Node.js中发送电子邮件，但这些概念和挑战适用于您正在使用的任何系统。

You’ll find plenty of email-related modules on [npm](https://www.npmjs.com/). The most popular is [NodeMailer](https://nodemailer.com/), which receives more than three million downloads every week.  
您会在 npm 上找到大量与电子邮件相关的模块。最受欢迎的是 NodeMailer，每周下载量超过 300 万次。

To use it, you’ll require an SMTP server which can send email. You may be able to use your own email provider but, for the purposes of this demonstration, I’m using the free [WPOven Test SMTP Server](https://www.wpoven.com/tools/free-smtp-server-for-testing).  
要使用它，您需要一个可以发送电子邮件的 SMTP 服务器。您可以使用自己的电子邮件提供商，但出于本演示的目的，我使用的是免费的WPOven测试SMTP服务器。

Create a new project folder:  
创建一个新的项目文件夹：

```bash
mkdir emailtest
cd emailtest
```

Then create a new `package.json` file with the following JSON content:  
然后创建一个包含以下 JSON 内容的新 `package.json` 文件：

```javascript
{
  "name": "emailtest",
  "type": "module",
  "main": "index.js",
  "dependencies": {
    "nodemailer": "^6.0.0"
  }
}
```

Install the modules (NodeMailer):  
安装模块 （NodeMailer）：

```bash
npm install
```

and create the following `index.js` code:  
并创建以下 `index.js` 代码：

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.freesmtpservers.com',
  port: 25
});

try {

  const send = await transporter.sendMail({
    from: '"Test Email" <test@email.com>',  // sender address
    to: 'someone@example.com',              // list of receivers
    subject: 'Hello!',                      // subject line
    text: 'Hello world!',                   // plain text body
    html: '<p>Hello world!</p>',            // HTML body
  });

  console.dir(send, { depth: null, color: true });

}
catch(e) {

  console.dir(e, { depth: null, color: true });

}
```

_(Consider changing the `to:` address to something unique so you can examine your own test emails!)  
（考虑将 `to:` 地址更改为唯一的地址，以便您可以检查自己的测试电子邮件！_

Run the code. You should see a result with a `250 OK` `response` and a `messageId`:  
运行代码。您应该会看到一个包含 a `250 OK` `response` 和 a `messageId` 的结果：

```bash
$ node index.js
{
  accepted: [ 'someone@example.com' ],
  rejected: [],
  ehlo: [ 'SIZE 33554432', '8BITMIME', 'SMTPUTF8', 'HELP' ],
  envelopeTime: 486,
  messageTime: 289,
  messageSize: 595,
  response: '250 OK',
  envelope: {
    from: 'test@email.com',
    to: [ 'someone@example.com' ]
  },
  messageId: '<4673597e-a9e4-e422-85f7-4422edf31774@email.com>'
}
```

Check the inbox of the `to:` address you used by entering it at the [WPOven Test SMTP Server page](https://www.wpoven.com/tools/free-smtp-server-for-testing) and clicking **Access Inbox**. Click the “Hello!” message to examine the content.  
通过在WPOven测试SMTP服务器页面输入地址并单击“访问收件箱”来检查您使用的 `to:` 地址的收件箱。单击“Hello！”消息以检查内容。

## NodeMailer Basics NodeMailer 基础知识

To send emails, you must create a NodeMailer _transporter_ object to define the service type. SMTP is most common, but [others are available](https://nodemailer.com/transports/) for alternative services. An authentication user ID and password is usually necessary:  
若要发送电子邮件，必须创建一个 NodeMailer 传输器对象来定义服务类型。SMTP 是最常见的，但其他服务可用于替代服务。通常需要身份验证用户 ID 和密码：

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.yourserver.com',
  port: 587,
  auth: {
    user: 'myid@yourserver.com',
    pass: 'my-password'
  },
});
```

You can send emails to one or more recipients using the transporter’s `sendMail()` method:  
您可以使用传输程序 `sendMail()` 的方法向一个或多个收件人发送电子邮件：

```javascript
const send = await transporter.sendMail({
  from: '"Test Email" <test@email.com>',          // sender address
  to: 'someone@example.com, sometwo@example.com', // list of receivers
  cc: 'somethree@example.com',
  bcc: 'somefour@example.com',
  subject: 'Hello!',                              // subject line
  text: 'Plain text version of the message',      // plain text body
  html: '<p>HTML version of the message</p>',     // HTML body
});
```

All email clients support plain text messages. You can also send a rich-formatted version of the same message used when the email client supports HTML (more about that [below](https://www.sitepoint.com/sending-email-using-node-js/?utm_source=rss#craftinghtmlemails)).  
所有电子邮件客户端都支持纯文本消息。您还可以发送电子邮件客户端支持 HTML 时使用的相同邮件的丰富格式版本（更多内容见下文）。

NodeMailer provides plenty of [other messaging options](https://nodemailer.com/message/), but the most common is [attachments](https://nodemailer.com/message/attachments/). An array of objects defines filenames and content. For example:  
NodeMailer 提供了许多其他消息传递选项，但最常见的是附件。对象数组定义文件名和内容。例如：

```javascript
const send = await transporter.sendMail({
  // ...
  attachments: [
    { // get file content from disk
      filename: 'text1.txt',
      path: '/path/to/file1.txt'
    },
    {  // get file content from a URL
      filename: 'text2.txt',
      path: 'https://myserver.com/text2.txt'
    },
    { // create file from UTF-8 string
      filename: 'text3.txt',
      content: 'This is the file content!'
    },
    { // create file from data URI
      filename: 'text4.txt',
      path: 'data:text/plain;base64,SGVsbG8gd29ybGQh'
    }
  ]
});
```

## Sending Services 发送服务

It’s easy to send simple one-off emails, but please don’t underestimate challenge as your requirements evolve.  
发送简单的一次性电子邮件很容易，但随着需求的发展，请不要低估挑战。

[![Learn to Code with JavaScript](https://cdn.sanity.io/images/708bnrs8/production/9144078672758630a953e5d4989247863d85dbdf-768x260.png?w=768&h=260&auto=format)](https://www.sitepoint.com/premium/books/learn-to-code-with-javascript/?ref_source=bpp)

1. **You may not have an SMTP server**. Not all email services provide SMTP (Google is [withdrawing basic SMTP support in Gmail](https://workspaceupdates.googleblog.com/2023/09/winding-down-google-sync-and-less-secure-apps-support.html)).  
    您可能没有 SMTP 服务器。并非所有电子邮件服务都提供 SMTP（Google 正在取消 Gmail 中的基本 SMTP 支持）。
    
2. **Most services limit outgoing emails**. If you’re sending many emails, you may hit your provider’s limit. At that point, all emails going through the same service will fail: that’s your newsletter as well as personal and business messages.  
    大多数服务都限制外发电子邮件。如果您要发送多封电子邮件，则可能会达到提供商的限制。届时，所有通过同一服务的电子邮件都将失败：这是您的时事通讯以及个人和企业消息。
    
3. **You may become a spammer**. It’s easy for recipients to mark your email as “junk” — _even when it’s not_. When enough people do that, you could discover all emails from your domain become blocked across the Internet.  
    您可能会成为垃圾邮件发送者。收件人很容易将您的电子邮件标记为“垃圾邮件”，即使事实并非如此。当有足够多的人这样做时，您可能会发现来自您域的所有电子邮件都会在互联网上被阻止。
    

It’s better to use a dedicated email service rather than your own mail server. The following services reduce the potential problems and some offer free plans for those with low usage requirements:  
最好使用专用的电子邮件服务，而不是您自己的邮件服务器。以下服务减少了潜在的问题，有些服务为使用要求低的人提供免费计划：

- [aws.amazon.com/ses](https://aws.amazon.com/ses/)
- [brevo.com](https://www.brevo.com/)
- [clicksend.com](https://www.clicksend.com/)
- [mailchimp.com](https://mailchimp.com/)
- [mailersend.com](https://www.mailersend.com/)
- [mailgun.com](https://www.mailgun.com/)
- [mailjet.com](https://www.mailjet.com/)
- [mailtrap.io](https://mailtrap.io/)
- [postmarkapp.com](https://postmarkapp.com/)
- [sender.net](https://www.sender.net/)
- [sendgrid.com](https://sendgrid.com/)

### Asynchronous application architecture  
异步应用程序体系结构

Sending a single email is often fast, but:  
发送一封电子邮件通常很快，但是：

- the SMTP server could be down so retries are necessary, or  
    SMTP 服务器可能已关闭，因此需要重试，或者
- the message could get caught in the middle of a bulk newsletter posting  
    该消息可能会在批量时事通讯发布中被捕获

Rather than sending emails directly within your Node.js application, it’s generally better to send the data to a [task queue](https://www.sitepoint.com/implement-task-queue-node-js/). The end user need not wait for a response and can continue to use the app.  
通常最好将数据发送到任务队列，而不是直接在 Node.js 应用程序中发送电子邮件。最终用户无需等待响应，即可继续使用该应用。

Another process can monitor the email queue, send the next message, and requeue items when a failure occurs.  
另一个进程可以监视电子邮件队列、发送下一封邮件，并在发生故障时对项目重新排队。

## Crafting HTML Emails 制作 HTML 电子邮件

HTML5 and CSS3 work consistently well in modern browsers. Email clients are another matter, taking us back to the frustrating late 1990s days of tables and inline styles.  
HTML5 和 CSS3 在现代浏览器中始终运行良好。电子邮件客户端是另一回事，它让我们回到了 1990 年代后期令人沮丧的表格和内联样式时代。

These are some of the issues you’ll face:  
以下是您将面临的一些问题：

- There are dozens of native and web-based email clients including Gmail, Yahoo Mail, Apple Mail, iOS Mail, Android Mail, Windows Mail, Outlook, Outlook.com, (new) Outlook, Thunderbird, AOL, Claws, RoundCube, and so on.  
    有几十个本机和基于Web的电子邮件客户端，包括Gmail，Yahoo Mail，Apple Mail，iOS Mail，Android Mail，Windows Mail，Outlook，Outlook.com，（新）Outlook，Thunderbird，AOL，Claws，RoundCube等。
    
- All use their own weird and wonderful rendering engines with unique issues and bugs. Somewhat bizarrely, Outlook has used Microsoft Word to render HTML since 2007 (although the new preview version is browser based).  
    它们都使用自己奇怪而美妙的渲染引擎，但存在独特的问题和错误。有点奇怪的是，Outlook自2007年以来一直使用Microsoft Word来呈现HTML（尽管新的预览版本是基于浏览器的）。
    
- Most clients block or limit fonts, images, trackers, media queries, iframes, videos, audio, forms, and scripts.  
    大多数客户端阻止或限制字体、图像、跟踪器、媒体查询、iframe、视频、音频、表单和脚本。
    
- Even web-based email clients running in the browser must remove HTML, CSS, and JavaScript that’s dangerous or that could affect UI layout. For example, it shouldn’t be possible for an email to auto-click its own links or absolutely position an element over a delete button.  
    即使在浏览器中运行的基于 Web 的电子邮件客户端也必须删除危险或可能影响 UI 布局的 HTML、CSS 和 JavaScript。例如，电子邮件不应该自动单击自己的链接或将元素绝对放置在删除按钮上。
    
- Email clients can reformat your HTML to ensure it’s a single column or adheres with the user’s light/dark mode preferences.  
    电子邮件客户端可以重新格式化您的 HTML，以确保它是单列或符合用户的浅色/深色模式首选项。
    

It’s possible to [hand-code HTML emails](https://www.campaignmonitor.com/dev-resources/guides/coding-html-emails/) but, unless your layout is simple, it’s a difficult, frustrating, and error-prone. The following sections suggest tools and resources that may make your life easier.  
可以手动编写 HTML 电子邮件代码，但除非您的布局简单，否则这是一个困难、令人沮丧且容易出错的过程。以下部分提供了可能使您的生活更轻松的工具和资源。

### Pre-built email templates  
预建的电子邮件模板

The following sites provide free and commercial robust email templates you can preview, download, and use with minimal effort:  
以下网站提供免费和商业强大的电子邮件模板，您可以毫不费力地预览、下载和使用：

- [codedmails 编码邮件](https://codedmails.com/)
- [Campaign Monitor templates  
    Campaign Monitor 模板](https://www.campaignmonitor.com/email-templates/)
- [Litmus email templates 石蕊电子邮件模板](https://www.litmus.com/email-templates)
- [Stripo templates Stripo 模板](https://stripo.email/templates/)

### Email template design tools  
电子邮件模板设计工具

The following no-code design tools allow you to create your own HTML email templates using a simpler WYSWYG editor:  
以下无代码设计工具允许您使用更简单的 WYSWYG 编辑器创建自己的 HTML 电子邮件模板：

- [beefree 无蜂](https://beefree.io/)
- [Blocks Edit 块编辑](https://blocksedit.com/)
- [Campaign Monitor 活动监视器](https://templates.campaignmonitor.com/generate/publicbrandedtemplates/)
- [chamaileon 查迈林](https://chamaileon.io/)
- [fly-brid 苍蝇布里德](https://www.ryanfield.ca/fly-brid/)
- [GrapesJS GrapesJS系列](https://grapesjs.com/demo-newsletter-editor.html)
- [knak 纳克](https://knak.com/)
- [Mail Developer 邮件开发人员](https://maildeveloper.com/)
- [Maily 梅利](https://maily.to/)
- [postcards 明信片](https://designmodo.com/postcards/)
- [Psd2Newsletters Psd2时事通讯](https://www.psd2newsletters.com/)
- [Stensul 斯滕苏尔](https://stensul.com/)
- [Stripo](https://stripo.email/)
- [TOPOL.io](https://topol.io/)
- [unlayer 解层](https://unlayer.com/)

Some of these services also provide code validation and testing facilities.  
其中一些服务还提供代码验证和测试工具。

### Email template conversion  
电子邮件模板转换

[Premailer](https://premailer.dialect.ca/) is a web tool which takes a page URL or pasted source code and transforms it to email-compatible HTML and plain text templates. There’s a [REST API](https://premailer.dialect.ca/api) and [Node.js `premailer-api` module](https://www.npmjs.com/package/premailer-api) should you need to automate the process.  
Premailer 是一种 Web 工具，它获取页面 URL 或粘贴的源代码，并将其转换为与电子邮件兼容的 HTML 和纯文本模板。有一个 REST API 和Node.js `premailer-api` 模块，如果你需要自动化这个过程。

Similar tools include: 类似的工具包括：

- [alter.email](https://alter.email/)
- [email-comb 电子邮件梳子](https://codsen.com/os/email-comb/play)
- [Postdrop 投递后](https://app.postdrop.io/)

### Email template markup tools  
电子邮件模板标记工具

[Cerberus](https://www.cerberusemail.com/), [Email Framework](https://emailframe.work/), [Email Skeleton](https://matthieusolente.github.io/email-skeleton-generator/), and [Good Email Code](https://www.goodemailcode.com/) provide HTML component snippets you can copy and adapt in your own templates.  
Cerberus、Email Framework、Email Skeleton 和 Good Email Code 提供了 HTML 组件片段，您可以在自己的模板中复制和调整。

[HEML](https://heml.io/) and [MJML](https://mjml.io/) are email markup languages. They’re similar to HTML but prevent typical compatibility issues. [Maizzle](https://maizzle.com/) takes a similar approach using [Tailwind CSS](https://tailwindcss.com/).  
HEML 和 MJML 是电子邮件标记语言。它们类似于 HTML，但可以防止典型的兼容性问题。Maizzle 使用 Tailwind CSS 采用了类似的方法。

[Parcel](https://parcel.io/) is a code editor which understands email formatting and can show previews. You’ll also find plenty of [email extensions for VS Code](https://marketplace.visualstudio.com/search?term=email&target=VSCode).  
Parcel 是一个代码编辑器，可以理解电子邮件格式并可以显示预览。你还会找到大量适用于 VS Code 的电子邮件扩展。

[caniemail.com](https://www.caniemail.com/) is the email equivalent of the web page [caniuse.com](https://www.caniuse.com/) and reports whether a specific HTML or CSS feature is usable across multiple clients. Finally, [Accessible Email](https://github.com/wilbertheinen/accessible-email-documentation) provides associated resources and links.  
caniemail.com 是网页的电子邮件等效 caniuse.com 并报告特定的 HTML 或 CSS 功能是否可以跨多个客户端使用。最后，可访问电子邮件提供关联的资源和链接。

### Email testing tools 电子邮件测试工具

While an HTML email may work in your own email apps, can you be sure it works in others? The following tools will help, but there’s no substitute for testing a range of real devices, OSes, and email clients.  
虽然 HTML 电子邮件可能在您自己的电子邮件应用程序中有效，但您能确定它在其他应用程序中有效吗？以下工具会有所帮助，但测试一系列真实设备、操作系统和电子邮件客户端是无可替代的。

[HTML Email Check](https://www.htmlemailcheck.com/) and [MailTrap](https://mailtrap.io/html-email-checker/) validate your source code and report problems you could encounter in specific clients.  
HTML 电子邮件检查和邮件陷阱验证您的源代码并报告您在特定客户端中可能遇到的问题。

[emailpreview](https://emailpreview.io/), [Mailosaur](https://mailosaur.com/email-previews), and [Email Preview Services](https://emailpreviewservices.com/en/features/email-design-testing) provide layout preview facilities so you can check how your design will look on a variety of clients.  
emailpreview、Mailosaur 和电子邮件预览服务提供布局预览功能，因此您可以检查您的设计在各种客户端上的外观。

Finally, [Litmus](https://www.litmus.com/) and [Email on Acid](https://www.emailonacid.com/email-testing/) have a range of tools to validate code, check accessibility, preview across clients, record analytics, and run full marketing campaigns.  
最后，Litmus 和 Email on Acid 拥有一系列工具来验证代码、检查可访问性、跨客户预览、记录分析和运行完整的营销活动。

### Learn how to code emails the right way  
了解如何以正确的方式对电子邮件进行编码

As we’ve seen above, there are many tools that can help you to create email layouts that work across the many email clients out there. But there’s nothing like understanding how to code all by yourself, especially when you need to sort out the inevitable bugs that arise.  
正如我们在上面看到的，有许多工具可以帮助您创建适用于许多电子邮件客户端的电子邮件布局。但是，没有什么比了解如何自己编写代码更好的了，尤其是当您需要解决不可避免的错误时。

If you’d like to learn the ins and outs of email coding (even if it’s just as a backup), check out _[Crafting HTML Email](https://www.sitepoint.com/premium/books/crafting-html-email/)_, by Rémi Parmentier. It covers modern perspectives on building your own email templates, essential best practices, how to add interactivity to emails, and how to make your templates accessible. It even walks you through a case study to see all this in practice.  
如果您想了解电子邮件编码的来龙去脉（即使它只是作为备份），请查看 Rémi Parmentier 的 Crafting HTML Email。它涵盖了构建自己的电子邮件模板的现代观点、基本的最佳实践、如何为电子邮件添加交互性以及如何使模板易于访问。它甚至会引导您完成案例研究，以在实践中了解所有这些。

## Reading Incoming Email 阅读传入电子邮件

Most apps need only send emails, but there may be occasions when you want to examine incoming emails — for things like service registration, unsubscribe handling, automated support, and so on. While it’s beyond the scope of this tutorial, Node.js modules such as [ImapFlow](https://imapflow.com/) allow your application to connect to an IMAP inbox, fetch messages, and process a response:  
大多数应用程序只需要发送电子邮件，但有时您可能想要检查传入的电子邮件，例如服务注册、退订处理、自动支持等。虽然它超出了本教程的范围，但 ImapFlow 等Node.js模块允许应用程序连接到 IMAP 收件箱、获取消息和处理响应：

```javascript
import ImapFlow from 'imapflow';

const client = new ImapFlow({
    host: 'imap.email',
    port: 993,
    secure: true,
    auth: {
        user: 'account@imap.email',
        pass: 'mypassword'
    }
});

try {

  // connect
  await client.connect();

  // select and lock inbox
  const lock = await client.getMailboxLock('INBOX');

  // get latest message
  const msg = await client.fetchOne(client.mailbox.exists, { source: true });
  console.log( msg.source.toString() );

  // release lock
  lock.release();

  // log out
  await client.logout();

}
catch (e) {
  console.log(e);
}
```

## Conclusion 结论

Sending emails from Node.js web apps is easy. Sending emails which look good, work reliably in all email clients, don’t halt the user, and don’t cause spam woes can be considerably more difficult.  
从Node.js Web 应用程序发送电子邮件很容易。发送看起来不错、在所有电子邮件客户端中可靠运行、不会阻止用户并且不会引起垃圾邮件问题的电子邮件可能要困难得多。

I recommend you keep emails simple to start, perhaps opting for infrequent plain text messages. Of course, your clients and marketing department will soon want fancy colors and animations, but you can deliver that tomorrow!  
我建议你保持电子邮件的简单易行，也许选择不常见的纯文本消息。当然，您的客户和营销部门很快就会想要花哨的颜色和动画，但您明天就可以交付！

## Frequently Asked Questions (FAQs) about Sending Emails Using Node.js  
有关使用 Node.js 发送电子邮件的常见问题 （FAQ）

### How can I attach files to my emails using Node.js?  
如何使用 Node.js 将文件附加到我的电子邮件中？

Attaching files to your emails using Node.js is quite straightforward. You can use the ‘attachments’ property in the mail options. This property takes an array of attachment options. Each attachment option is an object that contains the filename and path properties. The filename property is the name of the file as it will appear in the email, and the path property is the location of the file on your system.  
使用 Node.js 将文件附加到您的电子邮件非常简单。您可以在邮件选项中使用“附件”属性。此属性采用附件选项数组。每个附件选项都是一个包含文件名和路径属性的对象。filename 属性是文件的名称，因为它将显示在电子邮件中，path 属性是文件在系统上的位置。

Here’s an example: 下面是一个示例：

```
let mailOptions = {
```

### Can I send HTML emails using Node.js?  
我可以使用 Node.js 发送 HTML 电子邮件吗？

Yes, you can send HTML emails using Node.js. Instead of using the ‘text’ property in the mail options, you use the ‘html’ property. The value of this property is the HTML content of the email.  
是的，您可以使用 Node.js 发送 HTML 电子邮件。不要在邮件选项中使用“text”属性，而是使用“html”属性。此属性的值是电子邮件的 HTML 内容。

Here’s an example: 下面是一个示例：

```
let mailOptions = {
```

### How can I send emails to multiple recipients?  
如何向多个收件人发送电子邮件？

To send emails to multiple recipients, you can provide a list of email addresses separated by commas in the ‘to’ property of the mail options.  
若要向多个收件人发送电子邮件，可以在邮件选项的“收件人”属性中提供以逗号分隔的电子邮件地址列表。

Here’s an example: 下面是一个示例：

```
let mailOptions = {
```

### How can I handle errors when sending emails?  
发送电子邮件时如何处理错误？

You can handle errors when sending emails by using a callback function. This function is passed as the second argument to the ‘sendMail’ method. The callback function takes two parameters: an error object and an info object. If an error occurs when sending the email, the error object will contain information about the error.  
您可以使用回调函数处理发送电子邮件时的错误。此函数作为第二个参数传递给“sendMail”方法。回调函数采用两个参数：error 对象和 info 对象。如果在发送电子邮件时发生错误，则错误对象将包含有关错误的信息。

Here’s an example: 下面是一个示例：

```
transporter.sendMail(mailOptions, function(error, info){
```

### Can I use a Gmail account to send emails?  
我可以使用 Gmail 帐户发送电子邮件吗？

Yes, you can use a Gmail account to send emails. However, you need to enable ‘Less secure apps’ in your Gmail account settings. Also, you need to use ‘smtp.gmail.com’ as the host and 587 as the port in the transporter options.  
是的，您可以使用 Gmail 帐户发送电子邮件。但是，您需要在Gmail帐户设置中启用“安全性较低的应用”。此外，您需要在传输器选项中使用“smtp.gmail.com”作为主机，使用 587 作为端口。

Here’s an example: 下面是一个示例：

```
let transporter = nodemailer.createTransport({
host: 'smtp.gmail.com',
port: 587,
auth: {
user: 'your-email@gmail.com',
pass: 'your-password'
}
});
```

### How can I send emails asynchronously?  
如何异步发送电子邮件？

You can send emails asynchronously by using Promises. The ‘sendMail’ method returns a Promise that resolves with an info object when the email is sent.  
您可以使用 Promise 异步发送电子邮件。“sendMail”方法返回一个 Promise，该 Promise 在发送电子邮件时使用 info 对象进行解析。

Here’s an example: 下面是一个示例：

```
transporter.sendMail(mailOptions)
.then(info => console.log('Email sent: ' + info.response))
.catch(error => console.log(error));
```

### Can I use a custom SMTP server to send emails?  
我可以使用自定义 SMTP 服务器发送电子邮件吗？

Yes, you can use a custom SMTP server to send emails. You need to provide the host, port, and authentication details of the SMTP server in the transporter options.  
是的，您可以使用自定义 SMTP 服务器发送电子邮件。您需要在传输器选项中提供 SMTP 服务器的主机、端口和身份验证详细信息。

Here’s an example: 下面是一个示例：

```
let transporter = nodemailer.createTransport({
host: 'smtp.example.com',
port: 587,
auth: {
user: 'username',
pass: 'password'
}
});
```

### How can I send emails with a specific charset?  
如何发送具有特定字符集的电子邮件？

You can send emails with a specific charset by using the ‘charset’ property in the mail options. This property sets the charset of the email.  
您可以使用邮件选项中的“charset”属性发送具有特定字符集的电子邮件。此属性设置电子邮件的字符集。

Here’s an example: 下面是一个示例：

```
let mailOptions = {
from: 'sender@example.com',
to: 'receiver@example.com',
subject: 'Hello',
text: 'Hello world',
charset: 'UTF-8'
};
```

### Can I send emails with a specific content type?  
我可以发送具有特定内容类型的电子邮件吗？

Yes, you can send emails with a specific content type. You can use the ‘contentType’ property in the mail options. This property sets the content type of the email.  
是的，您可以发送具有特定内容类型的电子邮件。您可以在邮件选项中使用“contentType”属性。此属性设置电子邮件的内容类型。

Here’s an example: 下面是一个示例：

```
let mailOptions = {
from: 'sender@example.com',
to: 'receiver@example.com',
subject: 'Hello',
text: 'Hello world'
contentType: 'text/plain
};
```

### How can I send emails with a specific encoding?  
如何发送具有特定编码的电子邮件？

You can send emails with a specific encoding by using the ‘encoding’ property in the mail options. This property sets the encoding of the email.  
您可以使用邮件选项中的“encoding”属性发送具有特定编码的电子邮件。此属性设置电子邮件的编码。

Here’s an example: 下面是一个示例：

```
let mailOptions = {
from: 'sender@example.com',
to: 'receiver@example.com',
subject: 'Hello',
text: 'Hello world',
encoding: 'base64'
};
```
