---
标题: 
图片: 
链接: https://qufei1993.github.io/nextjs-learn-cn/chapter8
时时: 
评价: 
tags:
---
# 入门

## 创建新项目[](https://qufei1993.github.io/nextjs-learn-cn/chapter1#%E5%88%9B%E5%BB%BA%E6%96%B0%E9%A1%B9%E7%9B%AE)

要创建一个 Next.js 应用程序，请打开终端，进入您想要存储项目的文件夹，并运行以下命令：

```
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

该命令使用 [create-next-app(opens in a new tab)](https://nextjs.org/docs/app/api-reference/create-next-app)，这是一个命令行接口（CLI）工具，可以为您设置一个 Next.js 应用程序。在上述命令中，您还使用 `--example` 标志与此课程的入门 [示例(opens in a new tab)](https://github.com/vercel/next-learn/tree/main/dashboard/starter-example) 一起使用。

## 浏览项目[](https://qufei1993.github.io/nextjs-learn-cn/chapter1#%E6%B5%8F%E8%A7%88%E9%A1%B9%E7%9B%AE)

与让您从头编写代码的教程不同，这门课程的大部分代码已经为您编写了。这更好地反映了现实世界的开发，您可能会与现有的代码库一起工作。

我们的目标是帮助您专注于学习 Next.js 的主要特性，而无需编写所有应用程序代码。

安装后，在代码编辑器中打开项目并导航到 `nextjs-dashboard`。

让我们花些时间来探索项目。

## 文件夹结构[](https://qufei1993.github.io/nextjs-learn-cn/chapter1#%E6%96%87%E4%BB%B6%E5%A4%B9%E7%BB%93%E6%9E%84)

您会注意到项目具有以下文件夹结构：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter1-learn-folder-structure.ca9f28cd.avif)

- `/app`：包含应用程序的所有路由、组件和逻辑，这是您将主要从中工作的地方。
- `/app/lib`：包含在应用程序中使用的函数，例如可重用的实用函数和数据获取函数。
- `/app/ui`：包含应用程序的所有 UI 组件，例如卡片、表格和表单。为节省时间，我们已经为您预先样式化了这些组件。
- `/public`：包含应用程序的所有静态资产，例如图片。
- `/script/`：包含一个 seeding（这里翻译为 “播种” 可以理解为数据库的 Migration）脚本，您将在后面的章节中使用它来填充您的数据库。
- `配置文件`：您还会注意到应用程序根目录下有一些配置文件，例如 `next.config.js`。大多数这些文件在使用 `create-next-app`` 启动新项目时会被创建和预配置。在本课程中，您不需要修改它们。

随意探索这些文件夹，如果您还不理解代码正在执行的一切，不用担心。

## Placeholder data（占位数据）[](https://qufei1993.github.io/nextjs-learn-cn/chapter1#placeholder-data%E5%8D%A0%E4%BD%8D%E6%95%B0%E6%8D%AE)

在构建用户界面时，使用一些占位数据很有帮助。如果尚未提供数据库或 API，您可以：

- 使用 JSON 格式的占位数据或作为 JavaScript 对象。
- 使用第三方服务，如 [mockAPI(opens in a new tab)](https://mockapi.io/)。

对于此项目，我们在 `app/lib/placeholder-data.js` 中提供了一些占位数据。文件中的每个 JavaScript 对象代表数据库中的一张表。例如，对于发票表：

/app/lib/placeholder-data.js

```js
const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  // ...
];
```

在设置数据库的章节中，您将使用这些数据来填充数据库（用一些初始数据填充它）。

## TypeScript[](https://qufei1993.github.io/nextjs-learn-cn/chapter1#typescript)

您可能还注意到大多数文件都带有 `.ts` 或 `.tsx` 后缀。这是因为该项目是使用 TypeScript 编写的。我们希望创建一个反映现代 web 环境的课程。

如果您不熟悉 TypeScript，没关系 - 在需要时，我们将提供 TypeScript 代码片段。

现在，请查看 `/app/lib/definitions.ts` 文件。在这里，我们手动定义了将从数据库返回的类型。例如，发票表具有以下类型：

/app/lib/definitions.ts

```ts
export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};
```

通过使用 TypeScript，您可以确保不会意外地将错误的数据格式传递给组件或数据库，比如将 `number` 类型传递给发票 `amount` 属性而不是 `string` 类型。

如果您是 TypeScript 开发者：

- 我们手动声明数据类型，但为了更好的类型安全性，我们建议使用 [Prisma(opens in a new tab)](https://www.prisma.io/)，它会根据数据库架构自动生成类型。
- Next.js 会检测到您的项目使用 TypeScript，并自动安装必要的软件包和配置。Next.js 还为您的代码编辑器提供了一个 [TypeScript 插件(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/configuring/typescript#typescript-plugin)，以帮助自动完成和提供类型安全性。

## 运行开发服务器[](https://qufei1993.github.io/nextjs-learn-cn/chapter1#%E8%BF%90%E8%A1%8C%E5%BC%80%E5%8F%91%E6%9C%8D%E5%8A%A1%E5%99%A8)

运行 `npm i` 来安装项目的软件包。

```
npm i
```

然后运行 `npm run dev` 来启动开发服务器。

```
npm run dev
```

`npm run dev` 会在端口 3000 上启动您的 Next.js 开发服务器。让我们检查一下它是否工作。在浏览器中打开 [http://localhost:3000(opens in a new tab)](http://localhost:3000/)。您的首页应该如下所示：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter1-acme-unstyled.fd2a1b6d.avif)Chapter 2：CSS 样式

# CSS 样式

当前，您的首页没有任何样式。让我们看看为 Next.js 应用程序添加样式的不同方法。

以下是本章中将涵盖的主题：

- 如何向应用程序添加全局 CSS 文件。
- 两种不同的样式方式：Tailwind 和 CSS Modules。
- 如何使用 clsx 实用程序包有条件地添加类名。

## 全局样式

如果您查看 `/app/ui` 文件夹内，您会看到一个名为 `global.css` 的文件。您可以使用此文件向应用程序的所有路由添加 CSS 规则，例如 CSS 重置规则、用于链接等 HTML 元素的全局样式等。

您可以在应用程序中的任何组件中导入 `global.css`，但通常最好的做法是将其添加到顶级组件中。在 Next.js 中，这就是根布局（稍后会详细介绍）。

在 `/app/layout.tsx` 文件内导入 `global.css` 样式文件，将全局样式添加到您的应用程序：

/app/layout.tsx

```tsx
import '@/app/ui/global.css';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

保存更改并在浏览器中预览。您的首页现在应该如下所示：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter2-home-page-with-tailwind.f044de2b.avif)

但等一下，您并没有添加任何 CSS 规则，样式是从哪里来的？
如果您查看 `global.css` 内部，您会注意到一些 `@tailwind` 指令：

/app/ui/global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Tailwind[](https://qufei1993.github.io/nextjs-learn-cn/chapter2#tailwind)

[Tailwind(opens in a new tab)](https://tailwindcss.com/) 是一个 CSS 框架，通过允许您在 TSX 标记中直接快速编写[实用类(opens in a new tab)](https://tailwindcss.com/docs/utility-first)，加速开发过程。

在 Tailwind 中，您通过添加类名来为元素添加样式。例如，添加类 `"text-blue-500"` 将使 `<h1>` 文本变成蓝色：

```
<h1 className="text-blue-500">I'm blue!</h1>
```

尽管 CSS 样式在全局共享，但每个类都是单独应用于每个元素。这意味着如果您添加或删除一个元素，您不必担心维护单独的样式表、样式冲突或者随着应用程序规模扩大而增加 CSS 捆绑的大小。

当您使用 `create-next-app` 启动新项目时，Next.js 会询问您是否要使用 Tailwind。如果选择 `Yes`，Next.js 将自动安装必要的包并在您的应用程序中配置 Tailwind。

如果您查看 `/app/page.tsx`，您将看到我们在示例中使用 Tailwind 类。

```tsx
import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
 
export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
    // ...
  )
}
```

如果这是您第一次使用 Tailwind，请不要担心。为了节省时间，我们已经为您样式化了所有要使用的组件。

让我们玩一下 Tailwind！复制下面的代码并将其粘贴到 `/app/page.tsx` 中 `<p>` 元素上方：
```tsx
<div  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/>
```