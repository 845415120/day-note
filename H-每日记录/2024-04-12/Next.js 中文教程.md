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

如果你更喜欢编写传统的 CSS 规则或者希望将样式与 JSX 代码分开 - CSS Modules 是一个很好的选择。
## CSS Modules[](https://qufei1993.github.io/nextjs-learn-cn/chapter2#css-modules)

[CSS Modules(opens in a new tab)](https://nextjs.org/docs/pages/building-your-application/styling) 允许你通过自动生成独特的类名将 CSS 限定在一个组件中，这样你就不必担心样式冲突。

在这个课程中，我们将继续使用 Tailwind，但让我们花一点时间看看如何使用 CSS 模块来实现上面小测验的相同效果。

在 `/app/ui` 目录下，创建一个名为 `home.module.css` 的新文件，然后添加以下 CSS 规则：

/app/ui/home.module.css

```
.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```

然后，在你的 `/app/page.tsx` 文件中导入这些样式，并用 `styles.shape` 替换你添加的 `<div>` 中的 Tailwind 类名：

/app/page.tsx

```tsx
import styles from '@/app/ui/home.module.css';
 
//...
<div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
    <div className={styles.shape}></div>;
// ...
```

保存更改并在浏览器中预览。你应该看到与之前相同的形状。

Tailwind 和 CSS 模块是样式化 Next.js 应用程序的两种最常见的方法。使用其中之一取决于个人喜好 - 你甚至可以在同一个应用程序中同时使用它们两者！

## 使用 clsx 库切换类名[](https://qufei1993.github.io/nextjs-learn-cn/chapter2#%E4%BD%BF%E7%94%A8-clsx-%E5%BA%93%E5%88%87%E6%8D%A2%E7%B1%BB%E5%90%8D)

在某些情况下，您可能需要根据状态或其他条件有条件地为元素设置样式。

[clsx(opens in a new tab)](https://www.npmjs.com/package/clsx) 是一个库，让您可以轻松地切换类名。我们建议查看[文档(opens in a new tab)](https://github.com/lukeed/clsx)以获取更多详细信息，但以下是基本用法：

- 假设您想要创建一个名为 `InvoiceStatus` 的组件，该组件接受状态。状态可以是 `'pending'` 或 `'paid'`。
- 如果是 `'paid'`，您希望颜色是绿色。如果是 'pending'，您希望颜色是灰色。

您可以使用 clsx 来有条件地应用类，例如：

/app/ui/invoices/status.tsx

```tsx
import clsx from 'clsx';
 
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}
```

## 其他样式解决方案[](https://qufei1993.github.io/nextjs-learn-cn/chapter2#%E5%85%B6%E4%BB%96%E6%A0%B7%E5%BC%8F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)

除了我们讨论过的方法之外，您还可以使用以下方式为 Next.js 应用程序添加样式：

- Sass： 允许您导入 `.css` 和 `.scss` 文件。
- CSS-in-JS 库： 例如 [styled-jsx(opens in a new tab)](https://github.com/vercel/styled-jsx)、[styled-components(opens in a new tab)](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components) 和 [emotion(opens in a new tab)](https://github.com/vercel/next.js/tree/canary/examples/with-emotion)。
- 查看 [CSS 文档(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/styling)以获取更多信息。
# 优化字体和图片

在上一章中，您学习了如何为 Next.js 应用程序添加样式。让我们继续通过添加自定义字体和主页图片来完善您的主页。

以下是本章中将涵盖的主题：

- 如何使用 `next/font` 添加自定义字体。
- 如何使用 `next/image` 添加图片。
- Next.js 中如何优化字体和图片。

## 为什么要优化字体？[](https://qufei1993.github.io/nextjs-learn-cn/chapter3#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BC%98%E5%8C%96%E5%AD%97%E4%BD%93)

字体在网站设计中起着重要作用，但在项目中使用自定义字体可能会影响性能，特别是当需要获取和加载字体文件时。

[累积布局移位(opens in a new tab)](https://web.dev/articles/cls?hl=zh-cn)（Cumulative Layout Shift）是 Google 用于评估网站性能和用户体验的度量标准。对于字体而言，布局移位发生在浏览器最初使用备用或系统字体呈现文本，然后在加载完自定义字体后进行替换。这种替换可能导致文本大小、间距或布局发生变化，从而使其周围的元素发生移位。

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter3-font-layout-shift.e65c3323.avif)

Next.js 在您使用 `next/font` 模块时会自动优化应用程序中的字体。它在构建时下载字体文件并将其托管在您的其他静态资产之中。这意味着当用户访问您的应用程序时，不会有额外的字体网络请求，从而不会影响性能。

## 添加主要字体[](https://qufei1993.github.io/nextjs-learn-cn/chapter3#%E6%B7%BB%E5%8A%A0%E4%B8%BB%E8%A6%81%E5%AD%97%E4%BD%93)

让我们向您的应用程序添加一个自定义的 Google 字体，看看它是如何工作的！

在 `/app/ui` 文件夹中，创建一个名为 `fonts.ts` 的新文件。您将使用此文件来保存将在整个应用程序中使用的字体。

从 `next/font/google` 模块导入 `Inter` 字体 - 这将是您的主要字体。然后，指定您想要加载的子集。在这种情况下，是 `'latin'`：

/app/ui/fonts.ts

```ts
import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
```

最后，在 /app/layout.tsx 中的 `<body>` 元素中添加字体：

/app/layout.tsx

```tsx
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```

通过将 Inter 添加到 `<body>` 元素中，该字体将应用于整个应用程序。在这里，您还添加了 Tailwind 的 antialiased 类，该类可使字体更加平滑。使用这个类并不是必需的，但它会增添一些美感。

在浏览器中导航到开发者工具，选择 body 元素。您应该会在样式下看到 Inter 和 Inter_Fallback 已经被应用。

## 实践：添加次要字体

您还可以将字体添加到应用程序的特定元素。

现在轮到您了！在您的 fonts.ts 文件中，导入一个名为 Lusitana 的次要字体，并将其传递给 `/app/page.tsx` 文件中的 `<p>` 元素。除了像之前一样指定一个子集，您还需要指定字体的粗细。

准备好后，展开下面的代码片段以查看解决方案。

> 提示：
> 
> - 如果您不确定要传递给字体的权重选项，请在代码编辑器中检查 TypeScript 错误。
> - 访问 Google Fonts 网站并搜索 Lusitana，查看可用的选项。
> - 查看添加多个字体和所有选项的完整列表的文档。

点击展开/折叠

/app/ui/fonts.ts

```
import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
```

/app/page.tsx

```
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
 
export default function Page() {
  return (
    // ...
    <p
      className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
    >
      <strong>Welcome to Acme.</strong> This is the example for the{' '}
      <a href="https://nextjs.org/learn/" className="text-blue-500">
        Learn Next.js Course
      </a>
      , brought to you by Vercel.
    </p>
    // ...
  );
}
```

最后，`<AcmeLogo />` 组件也使用了 Lusitana 字体。之前被注释掉是为了防止错误，现在你可以取消注释它：

/app/page.tsx

```
// ...
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        {/* ... */}
      </div>
    </main>
  );
}
```

好的，您已将两种自定义字体添加到应用程序！接下来，让我们向主页添加一个主图像。

## 为什么要优化图片？[](https://qufei1993.github.io/nextjs-learn-cn/chapter3#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BC%98%E5%8C%96%E5%9B%BE%E7%89%87)

Next.js 可以在顶层 /public文件夹下提供静态资源，如图片。`/public` 中的文件可以在你的应用程序中引用。

在常规的 HTML 中，你可以如下添加图片：

```
<img  
src="/hero.png"  
alt="Screenshots of the dashboard project showing desktop version"
/>
```

然而，这意味着你必须手动：

- 确保你的图片在不同屏幕尺寸上具有响应性。
- 为不同设备指定图片大小。
- 防止图片加载时的布局变化。
- 对用户视口外的图片进行懒加载。

图片优化是 Web 开发中一个庞大的主题，可以被认为是一门专业领域。与手动实现这些优化相比，你可以使用 `next/image` 组件来自动优化你的图片。

## `<Image>` 组件[](https://qufei1993.github.io/nextjs-learn-cn/chapter3#image-%E7%BB%84%E4%BB%B6)

`<Image>` 组件是 HTML `<img>` 标签的扩展，具有自动图像优化功能，包括：

- 图片加载时自动防止布局移位。
- 调整图像大小，避免向视口较小的设备传送大图像。
- 默认情况下懒加载图像（图像在进入视口时加载）。
- 在浏览器支持的情况下，以现代格式提供图像，如 [WebP(opens in a new tab)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp) 和 [AVIF(opens in a new tab)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image)。
## 添加桌面版主图[](https://qufei1993.github.io/nextjs-learn-cn/chapter3#%E6%B7%BB%E5%8A%A0%E6%A1%8C%E9%9D%A2%E7%89%88%E4%B8%BB%E5%9B%BE)

让我们使用 `<Image>` 组件。如果你查看 `/public` 文件夹，你会看到有两张图片：`hero-desktop.png` 和 `hero-mobile.png`。这两张图片完全不同，它们将根据用户设备是桌面还是移动端而显示不同的图片。

在你的 `/app/page.tsx` 文件中，从 `next/image` 导入该组件。然后，在注释下方添加图片：

/app/page.tsx

```tsx
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
 
export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
    //...
  );
}
```

在这里，你将宽度设置为 `1000` 像素，高度设置为 `760` 像素。设置图像的宽度和高度以避免布局变化是一种良好的实践，这些应该是与源图像相同的纵横比。

你还会注意到使用了 `hidden` 类，这会在移动屏幕上从 DOM 中移除图片，而 `md:block` 会在桌面屏幕上显示图片。

你的主页现在应该是这个样子：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter3-home-page-with-hero.554b69b1.avif)

## 实践：添加移动端主页图片[](https://qufei1993.github.io/nextjs-learn-cn/chapter3#%E5%AE%9E%E8%B7%B5%E6%B7%BB%E5%8A%A0%E7%A7%BB%E5%8A%A8%E7%AB%AF%E4%B8%BB%E9%A1%B5%E5%9B%BE%E7%89%87)

现在轮到你了！在刚刚添加的图片下面，再添加另一个用于 `hero-mobile.png` 的 `<Image>` 组件。

这张图片的宽度应该是 `560` 像素，高度是 `620` 像素。

它应该在移动屏幕上显示，在桌面上隐藏 - 你可以使用开发工具检查桌面和移动图片是否正确切换。

当你准备好时，展开下面的代码片段查看解决方案。

/app/page.tsx

```tsx
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
 
export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
    </div>
    //...
  );
}
```

太好了！你的主页现在已经使用了自定义字体和主页图片。
## 推荐阅读[](https://qufei1993.github.io/nextjs-learn-cn/chapter3#%E6%8E%A8%E8%8D%90%E9%98%85%E8%AF%BB)

关于这些主题，还有很多可以学习的内容，包括优化远程图像和使用本地字体文件。如果您想深入了解字体和图像，请参阅：

- [图像优化文档(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [字体优化文档(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [使用图像改善 Web 性能 (MDN)(opens in a new tab)](https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia)
- [Web 字体 (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
# 创建 Layouts 和 Pages

到目前为止，你的应用只有一个主页。让我们学习如何使用布局和页面创建更多路由。

以下是本章中将涵盖的主题：

- 使用文件系统路由创建仪表板路由。
- 了解在创建新路由段时文件夹和文件的作用。
- 创建一个可以在多个仪表板页面之间共享的嵌套布局。
- 了解放置同位置、部分渲染和根布局的作用。
## 嵌套路由[](https://qufei1993.github.io/nextjs-learn-cn/chapter4#%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1)

Next.js 使用文件系统路由，其中文件夹用于创建嵌套路由。每个文件夹代表一个路由段，对应到一个 URL 段。

图示展示了文件夹如何映射到 URL 段

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter4-folders-to-url-segments.9de2cf06.avif)

你可以使用 `layout.tsx` 和 `page.tsx` 文件为每个路由创建单独的用户界面。

`page.tsx` 是 Next.js 的一个特殊文件，它导出一个 React 组件，让该路由可访问是必需的。在你的应用中，已经有一个页面文件：`/app/page.tsx` - 这是与路由 `/` 相关联的主页。

要创建嵌套路由，可以将文件夹嵌套在彼此之内，并在其中添加 `page.tsx` 文件。例如：

![图示展示了如何添加名为 dashboard 的文件夹以创建新路由 '/dashboard'](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter4-static-site-generation.4e6914d8.avif)

`/app/dashboard/page.tsx` 与路径 `/dashboard` 相关联。让我们创建页面看看它是如何工作的！

```
export default function Page(){
  return <p>Dashboard Page</p>
}
```

现在，确保开发服务器正在运行，并访问 [http://localhost:3000/dashboard。(opens in a new tab)](http://localhost:3000/dashboard%E3%80%82) 你应该看到 "`Dashboard Page`" 文本。

这就是在 Next.js 中创建不同页面的方式：使用文件夹创建新的路由段，并在其中添加一个 `page` 文件。

通过为页面文件使用特殊的名称，Next.js 允许你将 UI 组件、测试文件和其他相关代码与路由放置在一起。只有页面文件内部的内容才会被公开访问。例如，`/ui` 和 `/lib` 文件夹与你的路由一起放置在 `/app` 文件夹中。

## 实践：创建仪表板页面[](https://qufei1993.github.io/nextjs-learn-cn/chapter4#%E5%AE%9E%E8%B7%B5%E5%88%9B%E5%BB%BA%E4%BB%AA%E8%A1%A8%E6%9D%BF%E9%A1%B5%E9%9D%A2)

让我们练习创建更多的路由。在你的 `dashboard` 中，创建两个额外的页面：

- **顾客页面（Customers Page）**：该页面应该在 [http://localhost:3000/dashboard/customers(opens in a new tab)](http://localhost:3000/dashboard/customers) 上可访问。暂时返回一个 `<p>Customers Page</p>` 元素。
- **发票页面（Invoices Page）**：发票页面应该在 [http://localhost:3000/dashboard/invoices(opens in a new tab)](http://localhost:3000/dashboard/invoices) 上可访问。暂时也返回一个 `<p>Invoices Page</p>` 元素。

花点时间解决这个练习，当你准备好时，展开下面的切换查看解决方案：

点击展开/折叠

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter4-routing-solution.16a95569.avif)

Customers Page:

/app/dashboard/customers/page.tsx

```
export default function Page() {  return <p>Customers Page</p>;}
```

Invoices Page:

/app/dashboard/invoices/page.tsx

```
export default function Page() {  return <p>Invoices Page</p>;}
```

## 创建 dashboard 布局[](https://qufei1993.github.io/nextjs-learn-cn/chapter4#%E5%88%9B%E5%BB%BA-dashboard-%E5%B8%83%E5%B1%80)

dashboard 通常具有在多个页面之间共享的导航。在 Next.js 中，你可以使用一个特殊的 layout.tsx 文件来创建在多个页面之间共享的 UI。让我们为 dashboard 页面创建一个布局！

在 `/dashboard` 文件夹中，添加一个名为 `layout.tsx` 的新文件，并粘贴以下代码：

/app/dashboard/layout.tsx

```tsx
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
```

这段代码中发生了一些事情，让我们来详细解释一下：