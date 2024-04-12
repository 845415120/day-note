---
标题: 
图片: https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter9-loading-page-with-skeleton.a338e330.avif
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

首先，你将 `<SideNav />` 组件导入到你的布局中。你导入到这个文件中的任何组件都将成为布局的一部分。

`<Layout />` 组件接收一个 `children` 属性。这个子组件可以是一个页面或另一个布局。在你的情况下，位于 `/dashboard` 中的页面将自动嵌套在 `<Layout />` 中，如下所示：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter-4-shared-layout.07e30869.avif)

检查一切是否正确运行，保存你的更改并检查你的本地主机。你应该会看到以下内容：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter4-shared-layout-page.736619c4.avif)

在 Next.js 中使用布局的一个好处是，在导航时，只有页面组件会更新，而布局不会重新渲染。这被称为[部分渲染(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#3-partial-rendering)。

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter4-partial-rendering-dashboard.c473fa40.avif)

## 根布局（layout）[](https://qufei1993.github.io/nextjs-learn-cn/chapter4#%E6%A0%B9%E5%B8%83%E5%B1%80layout)

在第三章中，你将 Inter 字体引入到另一个布局中：`/app/layout.tsx`。作为提醒：

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
这被称为根布局，是必需的。你添加到根布局的任何 UI 将在应用程序中的所有页面之间共享。你可以使用根布局来修改 `<html>` 和 `<body>` 标签，添加元数据（关于元数据的更多内容将在后面的章节中学到）。

由于你刚刚创建的新布局（`/app/dashboard/layout.tsx`）专门用于 dashboard 页面，因此不需要在上述根布局中添加任何 UI。

# 页面之间导航
在上一章中，您创建了 dashboard 的布局和页面。现在，让我们添加一些链接，以便用户可以在仪表板路由之间进行导航。
以下是本章中将涵盖的主题：
- 如何使用 `next/link` 组件。
- 如何使用 `usePathname()` 钩子显示活动链接。
- Next.js 中导航的工作原理。
## 为什么要优化导航？[](https://qufei1993.github.io/nextjs-learn-cn/chapter5#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BC%98%E5%8C%96%E5%AF%BC%E8%88%AA)

为了在页面之间创建链接，传统上会使用 `<a>` HTML 元素。目前，侧边栏链接使用 `<a>` 元素，但请注意在浏览器中在主页、发票和客户页面之间导航时发生了什么。

您看到了吗？

每次页面导航时都会出现完整的页面刷新！

## `<Link>` 组件[](https://qufei1993.github.io/nextjs-learn-cn/chapter5#link-%E7%BB%84%E4%BB%B6)

在 Next.js 中，您可以使用 `<Link />` 组件在应用程序的页面之间进行链接。`<Link>` 允许您使用 JavaScript 进行[客户端导航(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works)。

要使用 `<Link />` 组件，请打开 `/app/ui/dashboard/nav-links.tsx`，并从 [next/link(opens in a new tab)](https://nextjs.org/docs/app/api-reference/components/link) 导入 `Link` 组件。然后，将 `<a>` 标签替换为 `<Link>`：

/app/ui/dashboard/nav-links.tsx

```tsx
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
 
// ...
 
export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
```

正如您所见，Link 组件类似于使用 `<a>` 标签，但是您使用的不是 `<a href="…">`，而是 `<Link href="…">`。

保存更改并检查它是否在您的 localhost 上运行。现在，您应该能够在页面之间导航，而无需看到完整的刷新。尽管应用程序的某些部分是在服务器上渲染的，但没有完整的页面刷新，使其感觉像一个 web 应用程序。这是为什么呢？

## 自动代码拆分和预取[](https://qufei1993.github.io/nextjs-learn-cn/chapter5#%E8%87%AA%E5%8A%A8%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86%E5%92%8C%E9%A2%84%E5%8F%96)

为了提高导航体验，Next.js 会自动按路由段拆分您的应用程序。这与传统的 React [SPA(opens in a new tab)](https://developer.mozilla.org/en-US/docs/Glossary/SPA) 不同，传统 SPA 在初始加载时会加载应用程序的所有代码。

按路由拆分代码意味着页面变得隔离。如果某个页面抛出错误，应用程序的其余部分仍将正常工作。

此外，在生产环境中，每当 `<Link>` 组件出现在浏览器的视口中时，Next.js 会自动在后台预取链接路由的代码。当用户点击链接时，目标页面的代码将在后台已经加载，这就是使页面过渡几乎瞬间完成的原因！

了解更多关于[导航如何工作(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works)的信息。

## 模式：显示活动链接[](https://qufei1993.github.io/nextjs-learn-cn/chapter5#%E6%A8%A1%E5%BC%8F%E6%98%BE%E7%A4%BA%E6%B4%BB%E5%8A%A8%E9%93%BE%E6%8E%A5)

一种常见的用户界面模式是显示活动链接，以向用户指示他们当前所在的页面。为了做到这一点，您需要从 URL 中获取用户当前的路径。Next.js 提供了一个名为 `usePathname()` 的钩子，您可以使用它来检查路径并实现此模式。

由于 [usePathname()(opens in a new tab)](https://nextjs.org/docs/app/api-reference/functions/use-pathname) 是一个钩子，您需要将 `nav-links.tsx` 转换为客户端组件。在文件顶部添加 React 的 `"use client"` 指令，然后从 `next/navigation` 导入 `usePathname()`：

```tsx
'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
 
// ...
```

接下来，在你的 `<NavLinks />` 组件内部，将路径赋值给一个名为 pathname 的变量：

```tsx
export default function NavLinks() {
  const pathname = usePathname();
  // ...
}
```

你可以使用在 [CSS 样式(opens in a new tab)](https://nextjs.org/learn/dashboard-app/css-styling)章节介绍的 `clsx` 库，在链接处于活动状态时有条件地应用类名。当 `link.href` 与 `pathname` 匹配时，链接应该显示为蓝色文本和浅蓝色背景。

以下是 `nav-links.tsx` 的最终代码：

```tsx
'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
// ...
 
export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
```

保存并检查你的本地主机。现在，你应该看到活动链接以蓝色突出显示。

# 建立你的数据库

在继续工作于你的 dashboard 之前，你需要一些数据。在这一章中，你将使用 @vercel/postgres 来设置一个 PostgreSQL 数据库。如果你已经熟悉 PostgreSQL 并且更愿意使用自己的提供者，你可以跳过这一章并自行设置。否则，让我们继续吧！

以下是本章中将涵盖的主题：

- 将你的项目推送到 GitHub。
- 设置 Vercel 账户并链接你的 GitHub 存储库以进行即时预览和部署。
- 创建并将你的项目链接到一个 PostgreSQL 数据库。
- 使用初始数据填充数据库。

## 创建 GitHub 存储库
首先，如果你还没有这样做，让我们将你的存储库推送到 GitHub。这将使设置数据库和部署变得更容易。

如果你需要帮助设置你的存储库，请查看 GitHub 上的[这篇指南(opens in a new tab)](https://help.github.com/en/github/getting-started-with-github/create-a-repo)。

> 需要注意的是：
> 
> - 你也可以使用其他 Git 提供者，如 GitLab 或 Bitbucket。
> - 如果你对 GitHub 不熟悉，我们推荐使用 [GitHub Desktop App(opens in a new tab)](https://desktop.github.com/) 以简化开发工作流程。

## 创建 Vercel 账户[](https://qufei1993.github.io/nextjs-learn-cn/chapter6#%E5%88%9B%E5%BB%BA-vercel-%E8%B4%A6%E6%88%B7)

访问 [vercel.com/signup(opens in a new tab)](https://vercel.com/signup) 创建一个账户。选择免费的 "`hobby`" 计划。选择 **"Continue with GitHub"** 来连接你的 GitHub 和 Vercel 账户。

## 连接并部署你的项目[](https://qufei1993.github.io/nextjs-learn-cn/chapter6#%E8%BF%9E%E6%8E%A5%E5%B9%B6%E9%83%A8%E7%BD%B2%E4%BD%A0%E7%9A%84%E9%A1%B9%E7%9B%AE)

接下来，你将被带到这个屏幕，在这里你可以选择导入你刚刚创建的 GitHub 存储库：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter6-import-git-repo.17adcf4c.avif)

给你的项目取一个名字，然后点击 Deploy（部署）。

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter6-configure-project.85ed5f9c.avif)

太棒了！🎉 你的项目现在已经部署完成。

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter6-deployed-project.25bb1256.avif)

通过连接你的 GitHub 存储库，每当你推送更改到主分支时，Vercel 将自动重新部署你的应用程序，无需额外配置。在发起拉取请求时，你还将获得[即时预览(opens in a new tab)](https://vercel.com/docs/deployments/preview-deployments#preview-urls)，这样你就可以及早发现部署错误，并与团队成员分享项目的预览以获得反馈。

## 创建一个 Postgres 数据库

接下来，为了设置数据库，点击 **Continue to Dashboard** 并从项目仪表板中选择 **Storage** 选项卡。选择 **Connect Store** → **Create New** → **Postgres** → **Continue**.

![Connect Store 屏幕显示了 Postgres 选项以及 KV、Blob 和 Edge Config](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter6-create-database.f7195c58.avif)

接受条款，为你的数据库分配一个名称，并确保你的数据库区域设置为 **Washington D.C (iad1)** - 这也是所有新 Vercel 项目的[默认区域(opens in a new tab)](https://vercel.com/docs/functions/serverless-functions/regions#select-a-default-serverless-region)。通过将数据库放置在与应用程序代码相同的区域或靠近应用程序代码的区域，可以减少数据请求的延迟。

![数据库创建模态框显示了数据库名称和区域](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter6-database-region.af101a2c.avif)

**需要注意的是**：一旦初始化后，你无法更改数据库区域。如果你想使用不同的[区域(opens in a new tab)](https://vercel.com/docs/storage/vercel-postgres/limits#supported-regions)，你应该在创建数据库之前设置它。

连接后，转到 `.env.local` 选项卡，点击 “Show secret” 并复制片段。

![.env.local 选项卡显示了隐藏的数据库秘密](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter6-database-dashboard.c0425bc9.avif)

转到你的代码编辑器，将 `.env.example` 文件重命名为 `.env`。粘贴从 Vercel 复制的内容。

**重要提示**：进入你的 `.gitignore` 文件，确保 `.env` 是被忽略的文件之一，以防止在推送到 GitHub 时暴露你的数据库秘密。

最后，在终端中运行 `npm i @vercel/postgres` 安装 [Vercel Postgres SDK(opens in a new tab)](https://vercel.com/docs/storage/vercel-postgres/sdk)。

## 填充你的数据库[](https://qufei1993.github.io/nextjs-learn-cn/chapter6#%E5%A1%AB%E5%85%85%E4%BD%A0%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93)

既然你的数据库已经创建好了，让我们使用一些初始数据填充它。这将使你在构建 Dashboard 时有一些可用的数据。

在项目的 `/scripts` 文件夹中，有一个名为 `seed.js` 的文件。这个脚本包含了创建和填充发票、客户、用户、收入表的指令。

如果你不理解代码在做什么的话，不用担心，但为了给你一个概述，该脚本使用 SQL 来创建表，然后使用 `placeholder-data.js` 文件中的数据在表创建后填充它们。

接下来，在你的 `package.json` 文件中，添加以下行到你的 scripts：

/package.json

```
"scripts": {
  "build": "next build",
  "dev": "next dev",
  "start": "next start",
  "seed": "node -r dotenv/config ./scripts/seed.js"
},
```
这是执行 `seed.js` 的命令。

现在，运行 `npm run seed`。你应该在终端中看到一些 `console.log` 消息，让你知道脚本正在运行。

**故障排除**：

- 确保在将数据库秘密复制到 `.env` 文件之前先将其显示出来。
- 脚本使用 bcrypt 对用户密码进行哈希，如果 bcrypt 与你的环境不兼容，你可以更新脚本以使用 [bcryptjs(opens in a new tab)](https://www.npmjs.com/package/bcryptjs)。
- 如果在填充数据库时遇到任何问题并希望重新运行脚本，可以通过在数据库查询界面中运行 `DROP TABLE tablename` 来删除任何现有表。有关更多详细信息，请参阅下面的[执行查询部分(opens in a new tab)](https://nextjs.org/learn/dashboard-app/setting-up-your-database#executing-queries)。但要小心，这个命令将删除表和它们的所有数据。由于你在示例应用中使用占位数据，因此在这种情况下可以这样做，但在生产应用中不应该运行此命令。
- 如果在填充你的 Vercel Postgres 数据库时继续遇到问题，请在 [GitHub 上发起讨论(opens in a new tab)](https://github.com/vercel/next-learn/issues)。

## 浏览你的数据库[](https://qufei1993.github.io/nextjs-learn-cn/chapter6#%E6%B5%8F%E8%A7%88%E4%BD%A0%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93)

让我们看看你的数据库是什么样子。回到 Vercel，并点击侧边导航上的 **Data**。

在这个部分，你会找到四个新表：users、customers、invoices 和 revenue。

![数据库屏幕显示了下拉列表，其中有四个表：users、customers、invoices 和 revenue](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter6-database-tables.2d296700.avif)

通过选择每个表，你可以查看其记录，并确保条目与 `placeholder-data.js` 文件中的数据一致。

## 执行查询[](https://qufei1993.github.io/nextjs-learn-cn/chapter6#%E6%89%A7%E8%A1%8C%E6%9F%A5%E8%AF%A2)

你可以切换到 `“query”` 选项卡与数据库进行交互。这个部分支持标准的 SQL 命令。例如，输入 `DROP TABLE customers` 将删除 `"customers"` 表以及所有其数据 - 所以要小心！

让我们运行你的第一个数据库查询。将以下 SQL 代码粘贴并运行到 Vercel 界面中：

```
SELECT invoices.amount, customers.name
FROM invoices
JOIN customers ON invoices.customer_id = customers.id
WHERE invoices.amount = 666;
```

## Vercel Postgres 搭配本地数据库[](https://qufei1993.github.io/nextjs-learn-cn/chapter6#vercel-postgres-%E6%90%AD%E9%85%8D%E6%9C%AC%E5%9C%B0%E6%95%B0%E6%8D%AE%E5%BA%93)

在本地开发时你可能想使用本地搭建的 Postgres 数据库，但 `Vercel Postgres` 目前支持的并不是特别好，详情请参见 [扩展篇 1：Vercel Postgres 搭配本地数据库](https://qufei1993.github.io/nextjs-learn-cn/chapter17)

# 获取数据

既然你已经创建并填充了你的数据库，让我们讨论一下获取应用程序数据的不同方式，以及构建 Dashboard 概览页面。

以下是本章中将涵盖的主题：

- 了解一些获取数据的方法：API、ORM、SQL 等。
- 如何使用 Server Components 更安全地访问后端资源。
- 什么是网络瀑布。
- 如何使用 JavaScript 模式实现并行数据获取。
## 选择如何获取数据[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#%E9%80%89%E6%8B%A9%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE)

### API 层[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#api-%E5%B1%82)

API 是你的应用程序代码和数据库之间的中间层。有几种情况下你可能会使用 API：

- 如果你使用提供 API 的第三方服务。
- 如果你从客户端获取数据，你希望有一个在服务器上运行的 API 层，以避免将数据库秘密暴露给客户端。

在 Next.js 中，你可以使用[路由处理程序(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)创建 API 端点。

### 数据库查询[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9F%A5%E8%AF%A2)

当你创建一个全栈应用程序时，你还需要编写与数据库交互的逻辑。对于像 Postgres 这样的[关系数据库(opens in a new tab)](https://aws.amazon.com/cn/relational-database/)，你可以使用 SQL 或像 [Prisma(opens in a new tab)](https://vercel.com/docs/storage/vercel-postgres/using-an-orm#) 这样的 [ORM(opens in a new tab)](https://vercel.com/docs/storage/vercel-postgres/using-an-orm#) 来实现。

有几种情况下你需要编写数据库查询：

- 当创建 API 端点时，你需要编写与数据库交互的逻辑。
- 如果你正在使用 React Server Components（在服务器上获取数据），你可以跳过 API 层，直接查询数据库，而不会有暴露数据库秘密给客户端的风险。
让我们更深入地了解 React Server Components。

### 使用 Server Components 获取数据[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#%E4%BD%BF%E7%94%A8-server-components-%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE)

默认情况下，Next.js 应用程序使用 React Server Components。使用 Server Components 获取数据是一种相对较新的方法，使用它们有一些好处：

- Server Components 支持 promises，为异步任务（如数据获取）提供了更简单的解决方案。你可以使用 async/await 语法，而无需使用 useEffect、useState 或数据获取库。
- Server Components 在服务器上执行，因此你可以将昂贵的数据获取和逻辑保留在服务器上，并仅将结果发送到客户端。

如前所述，由于 Server Components 在服务器上执行，你可以直接查询数据库，而无需额外的 API 层。

### 使用 SQL[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#%E4%BD%BF%E7%94%A8-sql)

在你的仪表板项目中，你将使用 [Vercel Postgres SDK(opens in a new tab)](https://vercel.com/docs/storage/vercel-postgres/sdk) 和 SQL 编写数据库查询。我们使用 SQL 的原因有几点：

- 在关系查询数据库中 SQL 是行业标准（例如，ORM 在底层生成 SQL）。
- 对 SQL 的基本理解可以帮助你理解关系数据库的基础知识，使你能够将你的知识应用于其他工具。
- SQL 是多才多艺的，允许你获取和操作特定的数据。
- Vercel Postgres SDK 提供了对 [SQL 注入(opens in a new tab)](https://vercel.com/docs/storage/vercel-postgres/sdk#preventing-sql-injections)的保护。

如果你以前没有使用过 SQL，不用担心 - 我们已经为你提供了查询。

打开 `/app/lib/data.ts`，这里你会看到我们正在从 @vercel/postgres 导入 [sql(opens in a new tab)](https://vercel.com/docs/storage/vercel-postgres/sdk#sql) 函数。这个函数允许你查询你的数据库：

/app/lib/data.ts

```
import { sql } from '@vercel/postgres';
```

你可以在任何 Server Component 中调用 sql。但为了让你更轻松地浏览组件，我们将所有数据查询都保留在 data.ts 文件中，你可以将它们导入到组件中。

## 获取 Dashboard 概览页面的数据[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#%E8%8E%B7%E5%8F%96-dashboard-%E6%A6%82%E8%A7%88%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%95%B0%E6%8D%AE)

既然你了解了不同的获取数据方式，让我们获取 Dashboard 概览页面的数据。导航到 `/app/dashboard/page.tsx`，粘贴以下代码，并花些时间来探索它：

/app/dashboard/page.tsx

```
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
 
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        仪表板
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="已收款" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="待处理" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="总发票数" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="总客户数"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}     </div>    </main>  );}
```

在上面的代码中：

- Page 是一个异步组件。这允许你使用 await 来获取数据。
- 还有 3 个组件接收数据：`<Card>`、`<RevenueChart>` 和 `<LatestInvoices>`。它们当前被注释掉，以防止应用程序出错。
## 获取 `<RevenueChart/>` 组件的数据[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#%E8%8E%B7%E5%8F%96-revenuechart-%E7%BB%84%E4%BB%B6%E7%9A%84%E6%95%B0%E6%8D%AE)

要获取 `<RevenueChart/>` 组件的数据，从 `data.ts` 中导入 `fetchRevenue` 函数，并在你的组件内调用它：

/app/dashboard/page.tsx

```tsx
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';
 
export default async function Page() {
  const revenue = await fetchRevenue();
  // ...
}
```

然后，取消注释 `<RevenueChart/>` 组件，导航到组件文件（/`app/ui/dashboard/revenue-chart.tsx`）并取消注释其中的代码。检查你的 localhost，你应该能够看到一个使用收入数据的图表。

![收入图表显示过去 12 个月的总收入](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter7-recent-revenue.1c075c34.avif)

让我们继续导入更多的数据查询！

## 获取 `<LatestInvoices />` 组件的数据[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#%E8%8E%B7%E5%8F%96-latestinvoices--%E7%BB%84%E4%BB%B6%E7%9A%84%E6%95%B0%E6%8D%AE)

对于 `<LatestInvoices />` 组件，我们需要获取最新的 5 张发票，并按日期排序。

你可以获取所有的发票，然后使用 JavaScript 进行排序。这对于我们的小型数据来说不是问题，但随着应用程序的增长，它可能会显著增加每个请求传输的数据量和用于排序的 JavaScript。

与在内存中对最新发票进行排序不同，你可以使用 SQL 查询仅获取最近的 5 张发票。例如，这是你的 `data.ts` 文件中的 SQL 查询：

/app/lib/data.ts

```tsx
// 获取最近的 5 张发票，按日期排序
const data = await sql<LatestInvoiceRaw>`
  SELECT invoices.amount, customers.name, customers.image_url, customers.email
  FROM invoices
  JOIN customers ON invoices.customer_id = customers.id
  ORDER BY invoices.date DESC
  LIMIT 5`;
```

在你的页面中，导入 `fetchLatestInvoices` 函数：

/app/dashboard/page.tsx

```tsx
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';
 
export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  // ...
}
```

然后，取消注释 `<LatestInvoices />` 组件。你还需要在 `<LatestInvoices />` 组件本身（位于 `/app/ui/dashboard/latest-invoices`）中取消注释相关代码。

如果你访问 localhost，你应该会看到只有最近的 5 张发票从数据库返回。希望你开始看到直接查询数据库的优势了！

![最新发票组件和收入图表一起显示](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter7-latest-invoices.fe9376ac.avif)

## 练习：为 `<Card>` 组件获取数据[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#%E7%BB%83%E4%B9%A0%E4%B8%BA-card-%E7%BB%84%E4%BB%B6%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE)

现在轮到你为 `<Card>` 组件获取数据了。卡片将显示以下数据：

- 已收款的发票总额。
- 待处理的发票总额。
- 发票的总数。
- 客户的总数。

再次，你可能会诱惑地获取所有发票和客户，并使用 JavaScript 操纵数据。例如，你可以使用 `Array.length` 来获取发票和客户的总数：

```
const totalInvoices = allInvoices.length;
const totalCustomers = allCustomers.length;
```

但是使用 SQL，你可以仅获取需要的数据。虽然使用 Array.length 要短一些，但这意味着在请求期间需要传输的数据较少。这是 SQL 的替代方法：

/app/lib/data.ts

```
const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
```

你需要导入的函数叫做 `fetchCardData`。你需要解构函数返回的值。

提示：

- 检查卡片组件，看看它们需要什么数据。
- 检查 data.ts 文件，看看该函数返回什么。

当你准备好后，展开下面的切换以查看最终代码：

点击展开/折叠

/app/dashboard/page.tsx

```tsx
  import { Card } from '@/app/ui/dashboard/cards';
  import RevenueChart from '@/app/ui/dashboard/revenue-chart';
  import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
  import { lusitana } from '@/app/ui/fonts';
  import {
    fetchRevenue,
    fetchLatestInvoices,
    fetchCardData,
  } from '@/app/lib/data';
  
  export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {
      numberOfInvoices,
      numberOfCustomers,
      totalPaidInvoices,
      totalPendingInvoices,
    } = await fetchCardData();
  
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Collected" value={totalPaidInvoices} type="collected" />
          <Card title="Pending" value={totalPendingInvoices} type="pending" />
          <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
          <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <RevenueChart revenue={revenue} />
          <LatestInvoices latestInvoices={latestInvoices} />
        </div>
      </main>
    );
  }
```

太好了！你现在已经为仪表板概览页面获取了所有数据。你的页面应该看起来像这样：

![仪表板页面，已获取所有数据](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter7-complete-dashboard.433aebc0.avif)

然而...有两件事情需要注意：

- 数据请求无意中相互阻塞，形成请求瀑布。
- 默认情况下，Next.js 对路由进行预渲染以提高性能，这称为静态渲染。因此，如果你的数据发生变化，它不会反映在你的 Dashboard 中。

让我们在本章中讨论第一点，然后在下一章详细了解第二点。

## 请求瀑布是什么？[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#%E8%AF%B7%E6%B1%82%E7%80%91%E5%B8%83%E6%98%AF%E4%BB%80%E4%B9%88)

"瀑布" 指的是一系列的网络请求序列，这些请求依赖于前面请求的完成。在数据获取的情况下，每个请求只能在前一个请求返回数据后才能开始。

![示意图显示按时间顺序进行顺序数据获取和并行数据获取](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter7-sequential-parallel-data-fetching.9bb1c5c1.avif)

例如，我们需要等待 `fetchRevenue()` 执行完毕，然后 `fetchLatestInvoices()` 才能开始运行，以此类推。

  
/app/dashboard/page.tsx

```tsx
const revenue = await fetchRevenue();
const latestInvoices = await fetchLatestInvoices(); // 等待 fetchRevenue() 完成
const {
  numberOfInvoices,
  numberOfCustomers,
  totalPaidInvoices,
  totalPendingInvoices,
} = await fetchCardData(); // 等待 fetchLatestInvoices() 完成
```

这种模式不一定是不好的。有些情况下，你可能希望有瀑布，因为你希望在进行下一个请求之前满足某个条件。例如，你可能希望先获取用户的 ID 和个人资料信息。一旦有了 ID，你可能会继续获取他们的朋友列表。在这种情况下，每个请求都依赖于前一个请求返回的数据。

然而，这种行为也可能是无意的，并且会影响性能。

## 并行数据获取[](https://qufei1993.github.io/nextjs-learn-cn/chapter7#%E5%B9%B6%E8%A1%8C%E6%95%B0%E6%8D%AE%E8%8E%B7%E5%8F%96)

避免瀑布的一种常见方式是同时启动所有数据请求 - 进行并行处理。

在 JavaScript 中，您可以使用 `Promise.all()` 或 `Promise.allSettled()` 函数同时启动所有 Promise。例如，在 `data.ts` 中，我们在 `fetchCardData()` 函数中使用了 `Promise.all()`：

/app/lib/data.js

```js
export async function fetchCardData() {
  try {
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;
 
    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);
    // ...
  }
}
```

通过使用这种模式，您可以：

- 同时开始执行所有数据获取，这可能会带来性能提升。
- 使用可应用于任何库或框架的本机 JavaScript 模式。

然而，仅依赖此 JavaScript 模式有一个缺点：如果一个数据请求比其他所有请求慢，会发生什么？

# 静态和动态渲染

在上一章中，您为 Dashboard 概述页面获取了数据。但是，我们简要讨论了当前设置的两个局限性：

- 数据请求正在创造一个无意的瀑布。
- Dashboard 是静态的，因此任何数据更新都不会反映在您的应用程序上。

以下是本章中将涵盖的主题：

- 什么是静态渲染，以及它如何提高应用程序的性能。
- 什么是动态渲染以及何时使用它。
- 使 Dashboard 动态化的不同方法。
- 模拟一个缓慢的数据获取，看看会发生什么。
## 什么是静态渲染？[](https://qufei1993.github.io/nextjs-learn-cn/chapter8#%E4%BB%80%E4%B9%88%E6%98%AF%E9%9D%99%E6%80%81%E6%B8%B2%E6%9F%93)

使用静态渲染，数据获取和渲染在构建时（部署时）或[重新验证期间(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data)在服务器上进行。然后，结果可以在[内容分发网络（CDN）(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default)中分发和缓存。

![显示用户在请求页面时如何访问 CDN 而不是服务器的图](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter8-static-site-generation.4e6914d8.avif)

每当用户访问你的应用程序时，缓存的结果都会被提供。静态渲染有几个好处：

- **更快的网站** - 预渲染的内容可以被缓存和全球分布。这确保了世界各地的用户可以更快、更可靠地访问您的网站内容。
- **减少服务器负载** - 由于内容被缓存，您的服务器不必为每个用户请求动态生成内容。
- **搜索引擎优化** - 预渲染内容更容易被搜索引擎爬虫索引，因为当页面加载时，内容已经可用。这可以提高搜索引擎排名。

静态渲染对于**没有数据**或**跨用户共享数据**的 UI（如静态博客文章或产品页面）非常有用。它可能不适合具有定期更新的个性化数据的 Dashboard。

与静态渲染相反的是动态渲染。

## 什么是动态渲染？[](https://qufei1993.github.io/nextjs-learn-cn/chapter8#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93)

通过动态渲染，内容在请求时（当用户访问页面时）在服务器上为每个用户呈现。动态渲染有几个好处：

- **实时数据** - 动态渲染允许您的应用程序显示实时或频繁更新的数据。这对于数据经常变化的应用程序来说是理想的。
- **用户特定内容** - 提供个性化内容（如 Dashboard 或用户配置文件）并根据用户交互更新数据更容易。
- **请求时间信息** - 动态渲染允许您访问只能在请求时知道的信息，如 Cookie 或 URL 搜索参数。****
## 使 Dashboard 动态化[](https://qufei1993.github.io/nextjs-learn-cn/chapter8#%E4%BD%BF-dashboard-%E5%8A%A8%E6%80%81%E5%8C%96)

默认情况下，`@vercel/postgresql` 不设置自己的缓存语义。这允许框架设置自己的静态和动态行为。

您可以在服务器组件或数据获取函数中使用名为 `unstable_noStore` 的 Next.js API 来选择退出静态呈现。让我们添加这个。

在你的 `data.ts` 中，从 `next/cache` 导入 `unstable_noStore`，并在数据获取函数的顶部调用它：

/app/lib/data.ts

```ts
// ...
import { unstable_noStore as noStore } from 'next/cache';
 
export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
 
  // ...
}
 
export async function fetchLatestInvoices() {
  noStore();
  // ...
}
 
export async function fetchCardData() {
  noStore();
  // ...
}
 
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  noStore();
  // ...
}
 
export async function fetchInvoicesPages(query: string) {
  noStore();
  // ...
}
 
export async function fetchFilteredCustomers(query: string) {
  noStore();
  // ...
}
 
export async function fetchInvoiceById(query: string) {
  noStore();
  // ...
}
```

**注意**：`unstable_noStore` 是一个实验性的 API，可能在将来发生变化。如果您更喜欢在自己的项目中使用稳定的 API，您也可以使用 [Segment 配置选项(opens in a new tab)](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config) `export const dynamic = "force-dynamic"`。

## 模拟慢速数据获取[](https://qufei1993.github.io/nextjs-learn-cn/chapter8#%E6%A8%A1%E6%8B%9F%E6%85%A2%E9%80%9F%E6%95%B0%E6%8D%AE%E8%8E%B7%E5%8F%96)

使 Dashboard 动态化是迈出的良好第一步。然而... 还有一个我们在上一章提到的问题。如果一个数据请求比其他所有请求都慢，会发生什么？

让我们模拟一次慢速数据获取。在您的 `data.ts` 文件中，取消注释 `fetchRevenue()` 函数内部的 `console.log` 和 `setTimeout`：

/app/lib/data.ts

```ts
export async function fetchRevenue() {
  try {
    // 为演示目的，我们人为延迟响应。
    // 在生产中请勿这样做 :)
    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
 
    const data = await sql<Revenue>`SELECT * FROM revenue`;
 
    console.log('Data fetch completed after 3 seconds.');
 
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
```

现在在新标签页中打开 [http://localhost:3000/dashboard/，(opens in a new tab)](http://localhost:3000/dashboard/%EF%BC%8C) 注意页面加载所需的时间较长。在终端中，您还应该看到以下消息：

```
Fetching revenue data...
Data fetch completed after 3 seconds.
```

在这里，您添加了一个人为的 3 秒延迟，以模拟慢速数据获取。结果是在获取数据时整个页面被阻塞。

这引出了开发者必须解决的一个常见挑战：

使用动态渲染，**您的应用程序速度只有在最慢的数据获取完成时才能达到**。

# 流式传输

在上一章中，您使得 Dashboard 页面变得动态化，然而，我们讨论了慢速数据获取如何影响应用程序性能的问题。让我们看看在存在慢速数据请求时如何改善用户体验。

以下是本章中将涵盖的主题：

- 什么是流式传输以及何时可能使用它。
- 如何使用 loading.tsx 和 Suspense 实现流式传输。
- 什么是加载骨架。
- 什么是路由组，以及何时可能使用它们。
- 在应用程序中放置 Suspense 边界的位置。
## 什么是流式传输？[](https://qufei1993.github.io/nextjs-learn-cn/chapter9#%E4%BB%80%E4%B9%88%E6%98%AF%E6%B5%81%E5%BC%8F%E4%BC%A0%E8%BE%93)

流式传输是一种数据传输技术，允许您将路由分解为较小的 “chunks（块）”，并在它们准备就绪时逐步从服务器流式传输到客户端。

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter9-server-rendering-with-streaming.224147f5.avif)

通过流式传输，您可以防止慢速数据请求阻塞整个页面。这允许用户在等待所有数据加载之前看到和与页面的某些部分交互，而无需等待在向用户显示任何 UI 之前加载所有数据。

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter9-server-rendering-with-streaming-chart.3e1e4035.avif)

流式传输在 React 的组件模型中表现良好，因为可以将每个组件视为一个块。

在 Next.js 中，有两种实现流式传输的方式：

- 在页面级别，使用 `loading.tsx` 文件。
- 对于特定组件，使用 `<Suspense>`。

让我们看看这是如何工作的。

## 使用 `loading.tsx` 流式传输整个页面[](https://qufei1993.github.io/nextjs-learn-cn/chapter9#%E4%BD%BF%E7%94%A8-loadingtsx-%E6%B5%81%E5%BC%8F%E4%BC%A0%E8%BE%93%E6%95%B4%E4%B8%AA%E9%A1%B5%E9%9D%A2)

在 `/app/dashboard` 文件夹中，创建一个名为 `loading.tsx` 的新文件：

/app/dashboard/loading.tsx

```tsx
export default function Loading() {
  return <div>Loading...</div>;
}
```

刷新 [http://localhost:3000/dashboard，(opens in a new tab)](http://localhost:3000/dashboard%EF%BC%8C) 您现在应该会看到：

![带有'Loading...'文本的仪表板页面](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter9-loading-page.297bb486.avif)

这里发生了一些事情：

- `loading.tsx` 是一个基于 Suspense 构建的特殊 Next.js 文件，它允许您创建回退 UI，以在页面内容加载时显示为替代。
- 由于 `<Sidebar>` 是静态的，因此它会立即显示。用户可以在动态内容加载时与 `<Sidebar>` 进行交互。
- 用户在导航离开之前不必等待页面完成加载（这称为可中断导航）。

恭喜！您刚刚实现了流式传输。但我们可以做更多来改善用户体验。让我们显示一个加载骨架，而不是 `Loading...` 文本。

## 添加加载骨架[](https://qufei1993.github.io/nextjs-learn-cn/chapter9#%E6%B7%BB%E5%8A%A0%E5%8A%A0%E8%BD%BD%E9%AA%A8%E6%9E%B6)

加载骨架是 UI 的简化版本。许多网站将它们用作占位符（或备用），以指示用户内容正在加载。您嵌入到 loading.tsx 中的任何 UI 都将作为静态文件的一部分嵌入并首先发送。然后，服务器将其余的动态内容从服务器流式传输到客户端。

在您的 loading.tsx 文件中，导入一个名为 `<DashboardSkeleton>` 的新组件：

/app/dashboard/loading.tsx

```
import DashboardSkeleton from '@/app/ui/skeletons'; export default function Loading() {  return <DashboardSkeleton />;}
```

然后，刷新 [http://localhost:3000/dashboard，(opens in a new tab)](http://localhost:3000/dashboard%EF%BC%8C) 您现在应该会看到：

![带有加载骨架的仪表板页面](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter9-loading-page-with-skeleton.a338e330.avif)

## 修复使用路由组的加载骨架错误

当前，您的加载骨架也会应用于发票和客户页面。

由于 `loading.tsx` 处于文件系统中 `/invoices/page.tsx` 和 `/customers/page.tsx` 的上一级，它也应用于这些页面。

我们可以通过使用[路由组(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/routing/route-groups)来更改这一点。在 dashboard 文件夹内创建一个名为 `/(overview)` 的新文件夹。然后，将您的 `loading.tsx` 和 `page.tsx` 文件移到该文件夹内：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter9-route-group.7ff82119.avif)

现在，loading.tsx 文件将仅适用于您的 Dashboard 概览页面。

路由组允许您将文件组织成逻辑组，而不影响 URL 路径结构。当您使用括号 `()` 创建一个新文件夹时，该名称将不包括在 URL 路径中。因此，`/dashboard/(overview)/page.tsx` 变成了 `/dashboard`。

在这里，您使用了一个路由组来确保 `loading.tsx` 仅适用于您的仪表板概览页面。但是，您还可以使用路由组将应用程序分成不同的部分（例如 `(marketing)` 路由和 `(shop)` 路由），或者按团队对更大的应用程序进行组织。

## 流式传输一个组件[](https://qufei1993.github.io/nextjs-learn-cn/chapter9#%E6%B5%81%E5%BC%8F%E4%BC%A0%E8%BE%93%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6)

到目前为止，您一直在流式传输整个页面。但是，相反，您可以更加细致，并使用 React Suspense 流式传输特定组件。

Suspense 允许您推迟呈现应用程序的某些部分，直到满足某些条件（例如加载数据）。您可以在 Suspense 中包装动态组件。然后，传递一个回退组件，以在动态组件加载时显示。

如果您记得慢数据请求 `fetchRevenue()`，这是减缓整个页面速度的请求。您可以使用 Suspense 来流式传输仅此组件，并立即显示页面其余的 UI，而不是阻塞整个页面。

要这样做，您需要将数据获取移至组件内部，让我们更新代码看看会是什么样子：

删除 `/dashboard/(overview)/page.tsx` 中的 `fetchRevenue()` 及其数据的所有实例：

  
/app/dashboard/(overview)/page.tsx

```tsx
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data'; // 删除 fetchRevenue
 
export default async function Page() {
  const revenue = await fetchRevenue // 删除这一行
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
 
  return (
    // ...
  );
}
```

然后，从 React 中导入 `<Suspense>`，并将其包装在 `<RevenueChart />` 周围。您可以传递一个名为 `<RevenueChartSkeleton>` 的回退组件。

/app/dashboard/(overview)/page.tsx

```tsx
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
 
export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
 
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
```

最后，更新 `<RevenueChart>` 组件以获取其自己的数据，并删除传递给它的 prop：

/app/ui/dashboard/revenue-chart.tsx

```tsx
import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';
 
// ...
 
export default async function RevenueChart() { // 使组件异步，删除 props
  const revenue = await fetchRevenue(); // 在组件内获取数据
 
  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);
 
  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }
 
  return (
    // ...
  );
}
```

现在刷新页面，您应该会看到几乎立即显示仪表板信息，而 `<RevenueChart>` 显示为回退骨架：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter9-loading-revenue-chart.2cc710cd.avif)
### 练习：流式传输 `<LatestInvoices>`[](https://qufei1993.github.io/nextjs-learn-cn/chapter9#%E7%BB%83%E4%B9%A0%E6%B5%81%E5%BC%8F%E4%BC%A0%E8%BE%93-latestinvoices)

现在轮到你了！通过流式传输 `<LatestInvoices>` 组件来实践刚学到的内容。

将 `fetchLatestInvoices()` 从页面下移至 `<LatestInvoices>` 组件。使用名为 `<LatestInvoicesSkeleton>` 的回退 `（fallback）` 包装该组件。

当你准备好时，展开切换以查看解决方案代码：

点击展开/折叠

Dashboard Page:

/app/dashboard/(overview)/page.tsx

```tsx
  import { Card } from '@/app/ui/dashboard/cards';
  import RevenueChart from '@/app/ui/dashboard/revenue-chart';
  import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
  import { lusitana } from '@/app/ui/fonts';
  import { fetchCardData } from '@/app/lib/data'; // Remove fetchLatestInvoices
  import { Suspense } from 'react';
  import {
    RevenueChartSkeleton,
    LatestInvoicesSkeleton,
  } from '@/app/ui/skeletons';
  
  export default async function Page() {
    // Remove `const latestInvoices = await fetchLatestInvoices()`
    const {
      numberOfInvoices,
      numberOfCustomers,
      totalPaidInvoices,
      totalPendingInvoices,
    } = await fetchCardData();
  
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Collected" value={totalPaidInvoices} type="collected" />
          <Card title="Pending" value={totalPendingInvoices} type="pending" />
          <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
          <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </div>
      </main>
    );
  }
```

`<LatestInvoices>` 组件。记得删除 props！

/app/ui/dashboard/latest-invoices.tsx

```tsx
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
 
export default async function LatestInvoices() { // Remove props
  const latestInvoices = await fetchLatestInvoices();
 
  return (
    // ...
  );
}
```

## 组件分组
太好了！你已经接近成功，现在你需要将 `<Card>` 组件包装在 Suspense 中。虽然你可以为每个单独的卡片获取数据，但这可能会导致卡片加载时出现弹出效果，这对用户来说可能是视觉上的冲击。

那么，你会如何解决这个问题呢？

为了创建更具阶梯效果，你可以使用一个包装组件来组织这些卡片。这意味着静态的 `<Sidebar/>` 会首先显示，然后是卡片，依此类推。

在你的 page.tsx 文件中：

1. 删除 `<Card>` 组件。
2. 删除 `fetchCardData()` 函数。
3. 导入一个名为 `<CardWrapper />` 的新包装组件。
4. 导入一个名为 `<CardsSkeleton />` 的新骨架组件。
5. 使用 Suspense 包装 `<CardWrapper />`。
/app/dashboard/page.tsx

```tsx
import CardWrapper from '@/app/ui/dashboard/cards';
// ...
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
 
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      // ...
    </main>
  );
}
```
然后，进入 /`app/ui/dashboard/cards.tsx` 文件，导入 `fetchCardData()` 函数，并在 `<CardWrapper/>` 组件内调用它。确保在此组件中取消注释任何必要的代码。
/app/ui/dashboard/cards.tsx

```tsx
// ...
import { fetchCardData } from '@/app/lib/data';
 
// ...
 
export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
 
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}
```
刷新页面，你应该会看到所有的卡片同时加载。当你希望多个组件同时加载时，可以使用这种模式。

## 决定放置 Suspense 边界的位置[](https://qufei1993.github.io/nextjs-learn-cn/chapter9#%E5%86%B3%E5%AE%9A%E6%94%BE%E7%BD%AE-suspense-%E8%BE%B9%E7%95%8C%E7%9A%84%E4%BD%8D%E7%BD%AE)

放置 Suspense 边界的位置取决于几个因素：

1. 您希望用户在页面流式传输时如何体验。
2. 您希望优先考虑哪些内容。
3. 组件是否依赖于数据获取。

看看您的 Dashboard 页面，有没有什么您会做得不同的？

别担心。没有一个正确的答案。

- 您可以像我们在 `loading.tsx` 中所做的那样流式传输整个页面... 但如果其中一个组件具有较慢的数据获取，这可能会导致较长的加载时间。
- 您可以逐个流式传输每个组件... 但这可能会导致UI在准备就绪时突然出现在屏幕上。
- 您还可以通过流式传输页面部分来创建错开效果。但您需要创建包装组件。

放置 suspense 边界的位置将取决于您的应用程序。总的来说，将数据获取移到需要它的组件中，然后在这些组件周围包装 Suspense 是一种良好的实践。但是，如果您的应用程序需要，将整个页面或部分页面进行流式传输也没有问题。

不要害怕尝试使用 Suspense，看看哪种方法最有效，它是一个强大的 API，可以帮助您创建更令人愉悦的用户体验。

## 展望未来[](https://qufei1993.github.io/nextjs-learn-cn/chapter9#%E5%B1%95%E6%9C%9B%E6%9C%AA%E6%9D%A5)

流式传输和服务器组件为我们处理数据获取和加载状态提供了新的方式，最终目标是改善最终用户体验。

在下一章中，您将了解到 “部分预渲染”（Partial Prerendering），这是一种专为流式传输而构建的新的 Next.js 渲染模型。
# 部分预渲染（可选）

部分预渲染是在 Next.js 14 中引入的实验性功能。随着该功能在稳定性方面的进展，本页内容可能会进行更新。如果您不喜欢使用实验性功能，您可以跳过这一章节。完成课程不需要学习这一章节。

以下是本章中将涵盖的主题：

- 部分预渲染是什么。
- 部分预渲染是如何工作的。
## 结合静态和动态内容[](https://qufei1993.github.io/nextjs-learn-cn/chapter10#%E7%BB%93%E5%90%88%E9%9D%99%E6%80%81%E5%92%8C%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9)

目前，如果您在路由内调用[动态函数(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-functions)（例如 `noStore()`、`cookies()` 等），整个路由将变为动态。

这与今天大多数 Web 应用程序的构建方式相一致，您可以在整个**应用程序**或**特定路由**中选择静态或动态渲染。

然而，大多数路由既不是完全静态也不是完全动态。您可能有一个既包含静态又包含动态内容的路由。例如，假设您有一个社交媒体动态，帖子可能是静态的，但帖子的点赞数是动态的。或者是电子商务网站，产品详情是静态的，但用户的购物车是动态的。

回到您的 Dashboard 页面，您会考虑哪些组件是静态的，哪些是动态的？

一旦准备好，点击下面的按钮，看看我们如何拆分仪表板路由：
![](Pasted%20image%2020240412215859.png)

## 部分预渲染是什么？[](https://qufei1993.github.io/nextjs-learn-cn/chapter10#%E9%83%A8%E5%88%86%E9%A2%84%E6%B8%B2%E6%9F%93%E6%98%AF%E4%BB%80%E4%B9%88)

在 Next.js 14 中，有一个名为部分预渲染的新渲染模型的预览。部分预渲染是一项实验性功能，允许您在呈现具有静态加载外壳的路由的同时，保持一些部分是动态的。换句话说，您可以隔离路由的动态部分。例如：

![部分预渲染的产品页面显示静态导航和产品信息，以及动态的购物车和推荐产品](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter10-thinking-in-ppr.2b7b7e06.avif)

当用户访问一个路由时：

- 提供一个静态路由外壳，这使得初始加载很快。
- 外壳中留下动态内容将异步加载。
- 异步洞在并行加载，减少页面的整体加载时间。

这与您的应用程序今天的行为不同，其中整个路由要么完全是静态的，要么是动态的。

部分预渲染将超快的静态边缘交付与完全动态的能力结合在一起，我们相信它[有可能成为Web 应用程序的默认渲染模型(opens in a new tab)](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model)，将静态站点生成和动态交付的优点融为一体。
## 部分预渲染是如何工作的？[](https://qufei1993.github.io/nextjs-learn-cn/chapter10#%E9%83%A8%E5%88%86%E9%A2%84%E6%B8%B2%E6%9F%93%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84)

部分预渲染利用 React 的 [Concurrent APIs(opens in a new tab)](https://react.dev/blog/2021/12/17/react-conf-2021-recap#react-18-and-concurrent-features)，并使用 [Suspense(opens in a new tab)](https://react.dev/reference/react/Suspense) 推迟渲染应用程序的某些部分，直到满足某些条件（例如加载数据）。

fallback 被嵌入到初始静态文件中，以及其他静态内容。在构建时（或重新验证期间），路由的静态部分被预渲染，其余部分被推迟到用户请求路由时。

值得注意的是，将组件包装在 Suspense 中并不会使组件本身变为动态的（请记住使用 unstable_noStore 来实现此行为），而是 Suspense 用作路由的静态和动态部分之间的边界。

部分预渲染的好处在于，您无需更改代码即可使用它。只要使用 Suspense 包装路由的动态部分，Next.js 就会知道路由的哪些部分是静态的，哪些是动态的。

> 注意：要了解有关如何配置部分预渲染的详细信息，请查阅[部分预渲染（实验性）文档(opens in a new tab)](https://nextjs.org/docs/app/api-reference/next-config-js/partial-prerendering)或尝试使用[部分预渲染模板和演示(opens in a new tab)](https://vercel.com/templates/next.js/partial-prerendering-nextjs)。重要的是要注意，该功能目前处于实验性阶段，尚未准备好用于生产部署。

## 总结[](https://qufei1993.github.io/nextjs-learn-cn/chapter10#%E6%80%BB%E7%BB%93)

回顾一下，您已经采取了一些优化应用程序数据获取的步骤，您已经：

- 在与应用程序代码相同的地区创建了一个数据库，以减少服务器和数据库之间的延迟。
- 在服务器上使用 React 服务器组件获取数据。这允许您将昂贵的数据获取和逻辑保留在服务器上，减少客户端 JavaScript 捆绑，并防止数据库机密信息暴露给客户端。
- 使用 SQL 仅获取所需的数据，减少每个请求传输的数据量和内存中转换数据所需的 JavaScript 量。
- 在 JavaScript 中并行获取数据（在有意义的情况下）。
- 实施了流式传输以防止慢速数据请求阻塞整个页面，并允许用户在等待所有内容加载完成之前开始与 UI 进行交互。
- 将数据获取移动到需要它的组件，从而隔离了路由中应该是动态的部分，为部分预渲染做好准备。

在下一章中，我们将研究在获取数据时您可能需要实现的两种常见模式：搜索和分页。

# 添加搜索和分页

在前一章中，通过流式传输提高了 Dashboard 的初始加载性能。现在让我们转到 `/invoices` 页面，学习如何添加搜索和分页！

以下是本章中将涵盖的主题：

- 学习如何使用 Next.js 的 API：searchParams、usePathname 和 useRouter。
- 使用 URL 搜索参数实现搜索和分页。

## 初始代码

在您的 `/dashboard/invoices/page.tsx` 文件中，粘贴以下代码：

/app/dashboard/invoices/page.tsx

```tsx
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
 
export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
```

花一些时间熟悉页面和您将要使用的组件：

- `<Search/>` 允许用户搜索特定的发票。
- `<Pagination/>` 允许用户在发票的页面之间导航。
- `<Table/>` 显示发票。
您的搜索功能将跨足客户端和服务器。当用户在客户端搜索发票时，URL 参数将被更新，在服务器上获取数据，并使用新数据重新呈现表格。

## 为什么使用 URL 搜索参数？[](https://qufei1993.github.io/nextjs-learn-cn/chapter11#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8-url-%E6%90%9C%E7%B4%A2%E5%8F%82%E6%95%B0)

如上所述，您将使用 URL 搜索参数来管理搜索状态。如果您习惯于使用客户端状态进行搜索，这种模式可能是新的。

使用 URL 参数实现搜索有一些好处：

- **书签和共享的 URL**：由于搜索参数在 URL 中，用户可以将应用程序的当前状态，包括其搜索查询和过滤器，收藏夹起来以供将来参考或分享。
- **服务器端渲染和初始加载**：可以直接在服务器上使用 URL 参数以呈现初始状态，使处理服务器端渲染变得更容易。
- **分析和跟踪**：直接在 URL 中包含搜索查询和过滤器使得更容易跟踪用户行为，而无需额外的客户端逻辑。
## 添加搜索功能[](https://qufei1993.github.io/nextjs-learn-cn/chapter11#%E6%B7%BB%E5%8A%A0%E6%90%9C%E7%B4%A2%E5%8A%9F%E8%83%BD)

以下是您将用于实现搜索功能的 Next.js 客户端 hooks：

- `useSearchParams` - 允许您访问当前 URL 的参数。例如，此 URL `/dashboard/invoices?page=1&query=pending` 的搜索参数将是：`{page: '1', query: 'pending'}`。
- `usePathname` - 允许您读取当前 URL 的路径名。例如，对于路由 `/dashboard/invoices`，`usePathname` 将返回 `'/dashboard/invoices'`。
- `useRouter` - 使您能够在客户端组件内以编程方式在路由之间导航。有[多种方法(opens in a new tab)](https://nextjs.org/docs/app/api-reference/functions/use-router#userouter)可供您使用。

以下是实现步骤的快速概述：

- 捕获用户的输入。
- 使用搜索参数更新 URL。
- 保持 URL 与输入字段同步。
- 更新表以反映搜索查询。
## 1. 捕获用户的输入[](https://qufei1993.github.io/nextjs-learn-cn/chapter11#1-%E6%8D%95%E8%8E%B7%E7%94%A8%E6%88%B7%E7%9A%84%E8%BE%93%E5%85%A5)

进入 `<Search>` 组件（`/app/ui/search.tsx`），您会注意到：

- `"use client"` - 这是一个客户端组件，这意味着您可以使用事件监听器和 hook。
- `<input>` - 这是搜索输入。

创建一个新的 `handleSearch` 函数，并为 `<input>` 元素添加一个 `onChange` 监听器。每当输入值发生变化时，`onChange` 将调用 `handleSearch`。

/app/ui/search.tsx

```tsx
'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
 
export default function Search({ placeholder }: { placeholder: string }) {
  function handleSearch(term: string) {
    console.log(term);
  }
 
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
```

打开开发者工具中的控制台（console）测试上述代码是否正常工作，然后在搜索框架内输入内容。您应该在控制台中看到搜索词被记录。

太棒了！您已经捕获了用户的搜索输入。现在，您需要使用搜索词更新 URL。

## 2. 随着搜索参数更新 URL

从 `'next/navigation'` 导入 `useSearchParams` hook， 并将其赋值给一个变量：

/app/ui/search.tsx

```tsx
'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
 
export default function Search() {
  const searchParams = useSearchParams();
 
  function handleSearch(term: string) {
    console.log(term);
  }
  // ...
}
```

在 handleSearch 中，使用新的 searchParams 变量创建一个新的 URLSearchParams 实例。

/app/ui/search.tsx

```tsx
'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
 
export default function Search() {
  const searchParams = useSearchParams();
 
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
  }
  // ...
}
```

`URLSearchParams` 是一个 `Web API`，提供了操纵 `URL` 查询参数的实用方法。与创建复杂的字符串文字不同，您可以使用它获取参数字符串，例如 `?page=1&query=a`。

接下来，根据用户的输入设置 `params` 字符串。如果输入为空，您将要删除它：

/app/ui/search.tsx

```tsx
'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
 
export default function Search() {
  const searchParams = useSearchParams();
 
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
  }
  // ...
}
```

现在您有了查询字符串。您可以使用 Next.js 的 `useRouter` 和 `usePathname` hook 来更新 URL。

从 `'next/navigation'` 导入 `useRouter` 和 `usePathname`，并在 `handleSearch` 中使用 `useRouter()` 的 `replace` 方法：

/app/ui/search.tsx

```tsx
'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
 
export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
 
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }
}
```

这里是正在发生的事情的详细说明：

- `${pathname}` 是当前路径，在您的案例中是 `"/dashboard/invoices"`。
- 当用户在搜索栏中键入时，`params.toString()` 将此输入转换为友好的 URL 格式。
- `replace(${pathname}?${params.toString()})` 更新 URL，其中包含用户的搜索数据。例如，如果用户搜索 "Lee"，则为 `/dashboard/invoices?query=lee`。
- 由于 Next.js 的客户端导航（您在[导航页面的章节中(opens in a new tab)](https://qufei1993.github.io/nextjs-learn-cn/chapter5)了解到的）URL 无需重新加载页面即可更新。
## 3. 保持 URL 和输入同步[](https://qufei1993.github.io/nextjs-learn-cn/chapter11#3-%E4%BF%9D%E6%8C%81-url-%E5%92%8C%E8%BE%93%E5%85%A5%E5%90%8C%E6%AD%A5)
为确保输入字段与 URL 同步，并在共享时填充，您可以通过从 `searchParams` 中读取传递一个 `defaultValue` 给 input：
  
/app/ui/search.tsx

```tsx
<input
  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
  placeholder={placeholder}
  onChange={(e) => {
    handleSearch(e.target.value);
  }}
  defaultValue={searchParams.get('query')?.toString()}
/>
```

## 4. 更新表格[](https://qufei1993.github.io/nextjs-learn-cn/chapter11#4-%E6%9B%B4%E6%96%B0%E8%A1%A8%E6%A0%BC)

最后，您需要更新表格组件以反映搜索查询。

导航回到发票页面。

页面组件接受一个[名为 searchParams 的 prop(opens in a new tab)](https://nextjs.org/docs/app/api-reference/file-conventions/page)，因此您可以将当前的 URL 参数传递给 `<Table>` 组件。

  
/app/dashboard/invoices/page.tsx

```tsx
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
 
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
```

如果导航到 `<Table>` 组件，您将看到两个 prop，`query` 和 `currentPage`，传递给 `fetchFilteredInvoices()` 函数，该函数返回与查询匹配的发票。

  
/app/ui/invoices/table.tsx

```tsx
// ...
export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  // ...
}
```

有了这些变化，继续测试。如果搜索一个词，您将更新 URL，这将向服务器发送一个新的请求，在服务器上获取数据，只有与查询匹配的发票将被返回。

> **何时使用 `useSearchParams()` hook vs. `searchParams` prop？**  
> 您可能已经注意到您使用了两种不同的方法来提取搜索参数。您使用其中一种取决于您是在客户端还是服务器上工作。
> 
> - `<Search>` 是一个客户端组件，因此您使用 `useSearchParams()` hook 从客户端访问参数。
> - `<Table>` 是一个服务器组件，它自己获取数据，因此您可以将 `searchParams prop` 从页面传递给组件。
> 
> 作为一般规则，如果要从客户端读取参数，请使用 `useSearchParams()` hook，因为这样可以避免返回到服务器。
> 
## 最佳实践：防抖[](https://qufei1993.github.io/nextjs-learn-cn/chapter11#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E9%98%B2%E6%8A%96)

恭喜！您已经在 Next.js 中实现了搜索！但是有一些优化操作可以进行。

在您的 `handleSearch` 函数内部，添加以下 `console.log`：

/app/ui/search.tsx

```tsx
function handleSearch(term: string) {
  console.log(`Searching... ${term}`);
 
  const params = new URLSearchParams(searchParams);
  if (term) {
    params.set('query', term);
  } else {
    params.delete('query');
  }
  replace(`${pathname}?${params.toString()}`);
}
```

然后在搜索栏中键入 "Emil" 并检查开发工具中的控制台。发生了什么？

Dev Tools Console

```
Searching... E
Searching... Em
Searching... Emi
Searching... Emil
```

您在每次按键时都更新了 URL，因此在每次按键时都在查询数据库！虽然在我们的应用程序中这不是问题，但想象一下如果您的应用程序有数千用户，每个用户在每次按键时都向数据库发送新请求，那将会是一个问题。

防抖是一种编程实践，用于限制函数触发的速率。在我们的情况下，只有在用户停止输入时才希望查询数据库。

防抖的工作原理：

1. 触发事件：当发生应该被防抖的事件（比如搜索框中的按键）时，定时器启动。
2. 等待：如果在计时器到期之前发生新事件，则重置计时器。
3. 执行：如果计时器达到倒计时结束，将执行防抖函数。

您可以以几种方式实现防抖，包括手动创建自己的防抖函数。为了保持简单，我们将使用一个名为 use-debounce 的库。

安装 use-debounce：

Terminal

```
npm i use-debounce
```

在您的 `<Search>` 组件中，导入一个名为 `useDebouncedCallback` 的函数：

/app/ui/search.tsx

```tsx
// ...
import { useDebouncedCallback } from 'use-debounce';
 
// Inside the Search Component...
const handleSearch = useDebouncedCallback((term) => {
  console.log(`Searching... ${term}`);
 
  const params = new URLSearchParams(searchParams);
  if (term) {
    params.set('query', term);
  } else {
    params.delete('query');
  }
  replace(`${pathname}?${params.toString()}`);
}, 300);
```

这个函数将包装 `handleSearch` 的内容，并且只有在用户停止输入一段时间后（300 毫秒）才运行代码。

现在再次在搜索栏中键入，并在开发工具中打开控制台。您应该会看到以下内容：

Dev Tools Console

```
Searching... Emil
```

通过防抖，您可以减少发送到数据库的请求数量，从而节省资源。

## 添加分页[](https://qufei1993.github.io/nextjs-learn-cn/chapter11#%E6%B7%BB%E5%8A%A0%E5%88%86%E9%A1%B5)

在引入搜索功能之后，您会注意到表格一次只显示 6 张发票。这是因为 `data.ts` 中的 `fetchFilteredInvoices()` 函数每页返回最多 6 张发票。

添加分页允许用户浏览不同页面以查看所有发票。让我们看看如何使用 URL 参数实现分页，就像您在搜索中所做的那样。

导航到 `<Pagination/>` 组件，您会注意到它是一个客户端组件。您不希望在客户端上获取数据，因为这会暴露您的数据库凭据（请记住，您没有使用 API 层）。相反，您可以在服务器上获取数据，并将其作为 prop 传递给组件。

在 `/dashboard/invoices/page.tsx` 中，导入一个名为 `fetchInvoicesPages` 的新函数，并将 `searchParams` 中的查询作为参数传递：

  
/app/dashboard/invoices/page.tsx

```tsx
// ...
import { fetchInvoicesPages } from '@/app/lib/data';
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string,
    page?: string,
  },
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
 
  const totalPages = await fetchInvoicesPages(query);
 
  return (
    // ...
  );
}
```

`fetchInvoicesPages` 根据搜索查询返回页面的总数。例如，如果有 12 张与搜索查询匹配的发票，并且每页显示 6 张发票，那么总页数将为 2。

接下来，将 `totalPages` 属性传递给 `<Pagination/>` 组件：

/app/dashboard/invoices/page.tsx

```tsx
// ...
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
 
  const totalPages = await fetchInvoicesPages(query);
 
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
```

导航到 `<Pagination/>` 组件并导入 `usePathname` 和 `useSearchParams` hooks。我们将使用这两者来获取当前页并设置新的页数。确保在此组件中取消注释代码。由于您尚未实现 `<Pagination/>` 逻辑，您的应用程序将暂时中断。现在让我们来做这个！

/app/ui/invoices/pagination.tsx

```tsx
'use client';
 
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';
 
export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
 
  // ...
}
```

接下来，在 `<Pagination>` 组件中创建一个名为 `createPageURL` 的新函数。类似于搜索，您将使用 `URLSearchParams` 来设置新的页码，并使用 `pathName` 创建 URL 字符串。

/app/ui/invoices/pagination.tsx

```tsx
'use client';
 
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';
 
export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
 
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
 
  // ...
}
```

这里是正在发生的事情的详细说明：

- `createPageURL` 创建当前搜索参数的实例。
- 然后，它更新 `"page"` 参数为提供的 `pageNumber`。
- 最后，使用 `pathname` 和更新后的搜索参数构造完整的 URL。

`<Pagination>` 组件的其余部分涉及样式和不同状态（第一页、最后一页、活动、禁用等）。我们不会详细介绍这门课程，但请随时查看代码以查看 `createPageURL` 在哪里被调用。

最后，当用户键入新的搜索查询时，您希望将页码重置为 1。您可以通过更新 `<Search>` 组件中的 `handleSearch` 函数来实现这一点：

/app/ui/search.tsx

```tsx
'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
 
export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
 
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
}
```

## 总结[](https://qufei1993.github.io/nextjs-learn-cn/chapter11#%E6%80%BB%E7%BB%93)

恭喜你！你刚刚使用 URL 参数和 Next.js API 实现了搜索和分页。

总结一下，在本章中：

- 你使用 URL 搜索参数而不是客户端状态处理了搜索和分页。
- 你在服务器上获取了数据。
- 你使用了 useRouter 路由 Hook 以实现更平滑的客户端过渡。

这些模式与你在使用客户端 React 时可能习惯的方式有所不同，但希望现在你更好地理解了使用 URL 搜索参数并将该状态提升到服务器的好处。

# Mutating 数据

在上一章节中，使用 URL 搜索参数和 Next.js API 实现了搜索和分页。让我们继续在发票（Invoices）页面上工作，添加创建、更新和删除发票的功能！

以下是本章中将涵盖的主题：

- React Server Actions 是什么以及如何使用它们来改变数据。
- 如何处理表单和 Server Components。
- 使用原生 `formData` 对象的最佳实践，包括类型验证。
- 如何使用 `revalidatePath` API 重新验证客户端缓存。
- 如何创建具有特定 IDs 的动态路由段。
- 如何使用 React 的 `useFormStatus` hook 进行乐观更新。
## 什么是 Server Actions？[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#%E4%BB%80%E4%B9%88%E6%98%AF-server-actions)

React Server Actions 允许您在服务器上直接运行异步代码。它们消除了通过创建 API 改变数据的方式。相反，您编写的在服务器上执行的异步函数，可以在客户端或 Server Components 中直接调用。

对于 Web 应用程序安全性是最重要的，因为它们可能受到各种威胁。这就是 Server Actions 发挥作用的地方。它们提供了一种有效的安全解决方案，防范各种类型的攻击，保护您的数据，并确保访问是经过授权的。Server Actions 通过诸如 POST 请求、加密闭包、严格的输入检查、错误消息 hashing 和主机限制等技术实现这一点，所有这些技术共同作用以显着增强应用程序的安全性。

## Server Actions 和 forms[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#server-actions-%E5%92%8C-forms)

在 React 中，您可以在 `<form>` 元素中使用 `action` 属性来调用操作。该操作将自动接收包含捕获数据的原生 `FormData` 对象。

例如：

```js
// Server Component
export default function Page() {
  // Action
  async function create(formData: FormData) {
    'use server';
 
    // Logic to mutate data...
  }
 
  // Invoke the action using the "action" attribute
  return <form action={create}>...</form>;
}
```

在 Server Component 中调用 Server Action 的一个优势是渐进增强 - 即使客户端上禁用了 JavaScript，forms 仍可以工作。

## Next.js with Server Actions[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#nextjs-with-server-actions)

Server Actions 与 Next.js [缓存(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/caching)深度集成。通过 Server Action 提交表单时，您不仅可以使用该操作来改变数据，还可以使用 `revalidatePath` 和 `revalidateTag` 等 API 来重新验证相关的缓存。

## 创建发票[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#%E5%88%9B%E5%BB%BA%E5%8F%91%E7%A5%A8)

以下是创建一个新发票的步骤：

- 创建一个捕获用户输入的 form。
- 创建一个 Server Action，并从 form 中调用它。
- 在 Server Action 中，从 formData 对象中提取数据。
- 验证和准备要插入数据库的数据。
- 插入数据并处理任何错误。
- 重新验证缓存并将用户重定向回发票页面。
### 1. 创建新 route 和 form[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#1-%E5%88%9B%E5%BB%BA%E6%96%B0-route-%E5%92%8C-form)

首先，在 `/invoices` 目录内，添加一个名为 `/create` 的新路由段，包含一个 `page.tsx` 文件：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter-12-create-invoice-route.1e37f5b2.avif)

您将使用此路由来创建新的发票。在您的 `page.tsx` 文件中，粘贴以下代码，然后花些时间研究它
/dashboard/invoices/create/page.tsx

```tsx
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
```

您的页面是一个 Server Component，用于获取 `customers` 并将其传递给 `<Form>` 组件。为了节省时间，我们已经为您创建了 `<Form>` 组件。

转到 `<Form>` 组件，您会看到该表单：

- 有一个包含 `customers` 列表的 `<select>`（下拉）元素。
- 有一个用于 `amount` 的带有 `type="number"` 的 `<input>` 元素。
- 有两个带有 `type="radio"` 的 `<input>` 元素，用于状态。
- 有一个 `type="submit"` 的按钮。

在 [http://localhost:3000/dashboard/invoices/create(opens in a new tab)](http://localhost:3000/dashboard/invoices/create) 上，您应该看到以下 UI：
![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter12-create-invoice-page.7d61ad37.avif)
### 2. 创建 Server Action[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#2-%E5%88%9B%E5%BB%BA-server-action)

太好了，现在让我们创建一个 Server Action，当 form 提交时将调用该 Server Action。

导航到您的 `lib` 目录并创建一个名为 `actions.ts` 的新文件。在该文件顶部添加 React 的 · 指令：

/app/lib/actions.ts

```
'use server';
```

通过添加 `'use server'`，您将文件中的所有导出函数标记为服务器函数。然后可以将这些服务器函数导入到 Client 和 Server 组件中，使它们变得非常灵活。

您还可以通过在 action 内部添加 `"use server"` 直接在 Server Component 中编写 Server Actions。但是在本课程中，我们将把它们都组织在一个单独的文件中。

在您的 `actions.ts` 文件中，创建一个接受 `formData` 的新异步函数：
  
/app/lib/actions.ts

```
'use server'; export async function createInvoice(formData: FormData) {}
```

然后，在您的 `<Form>` 组件中，从 `actions.ts` 文件中导入 `createInvoice`。给 `<form>` 元素添加 action 属性，并调用 `createInvoice` action。

/app/ui/invoices/create-form.tsx

```tsx
'use client';
 
import { customerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
 
export default function Form({
  customers,
}: {
  customers: customerField[];
}) {
  return (
    <form action={createInvoice}>
      // ...
  )
}
```

> 值得知道：在 HTML 中，您会将 URL 传递给 `action` 属性。此 URL 将是您的 form 数据应提交的目标（通常是 API 端点）。  
> 然而，在 React 中，action 属性被视为一个特殊的 prop - 这意味着 React 在其之上构建，以允许调用 actions。  
> 在幕后，Server Actions 创建一个 POST API 端点。这就是在使用 Server Actions 时为什么不需要手动创建 API 端点的原因。
> 
### 3. 从 formData 中提取数据[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#3-%E4%BB%8E-formdata-%E4%B8%AD%E6%8F%90%E5%8F%96%E6%95%B0%E6%8D%AE)

回到您的 `actions.ts` 文件，您需要提取 formData 的值，有几种方法可以使用。在本例中，让我们使用 `.get(name)` 方法。

/app/lib/actions.ts

```ts
'use server';
 
export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
}
```

> 提示：如果您正在处理包含许多字段的 forms，您可能想考虑使用 JavaScript 的 `Object.fromEntries()` 方法与 `entries()` 方法。例如：  
> `const rawFormData = Object.fromEntries(formData.entries())`

为了检查一切是否连接正确，尝试填写 form。提交后，您应该在终端中看到您刚刚输入到 forms 中的数据。

现在，您的数据呈对象形式，将更容易处理。

### 4. 验证和准备数据[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#4-%E9%AA%8C%E8%AF%81%E5%92%8C%E5%87%86%E5%A4%87%E6%95%B0%E6%8D%AE)

在将 form 数据发送到数据库之前，您希望确保它具有正确的格式和正确的类型。如果您还记得在本课程前面的部分，您的 invoices 表期望以下格式的数据：

/app/lib/definitions.ts

```
export type Invoice = {
  id: string; // Will be created on the database
  customer_id: string;
  amount: number; // Stored in cents
  status: 'pending' | 'paid';
  date: string;
};
```

到目前为止，您只有来自 form 的 `customer_id`、`amount` 和 `status`。

**类型验证和强制转换**

验证来自 form 的数据是否符合数据库中期望的类型非常重要。例如，如果您在 action 中添加一个 console.log：

```
console.log(typeof rawFormData.amount);
```

您会注意到 `amount` 是字符串类型，而不是数字。这是因为具有 `type="number"` 的输入元素实际上返回一个字符串，而不是数字！

为了处理类型验证，您有几个选择。虽然您可以手动验证类型，但使用类型验证库可以为您节省时间和精力。对于您的示例，我们将使用 [Zod(opens in a new tab)](https://zod.dev/)，这是一个 TypeScript 优先的验证库，可以为你简化这些校验任务。

在您的 `actions.ts` 文件中，导入 Zod 并定义一个与 form 对象形状匹配的 schema。这个 schema 将在 formData 保存到数据库之前验证它。
  
/app/lib/actions.ts

```ts
'use server';
 
import { z } from 'zod';
 
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function createInvoice(formData: FormData) {
  // ...
}
```

`amount` 字段被专门设置为强制（更改）从字符串更改为数字，同时还验证其类型。
然后，您可以将 `rawFormData` 传递给 `CreateInvoice` 以验证类型：

/app/lib/actions.ts

```ts
// ...
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
}
```

**以分为单位存储值**

通常，将货币值以分为单位存储在数据库中是一种良好的做法，以消除 JavaScript 浮点错误并确保更高的准确性。

让我们将金额转换为分：
  
/app/lib/actions.ts

```ts
// ...
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
}
```

**创建新日期**

最后，让我们为发票的创建日期创建一个新的格式为 "YYYY-MM-DD" 的日期：

/app/lib/actions.ts

```ts
// ...
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
}
```
### 5. 插入数据到数据库[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#5-%E6%8F%92%E5%85%A5%E6%95%B0%E6%8D%AE%E5%88%B0%E6%95%B0%E6%8D%AE%E5%BA%93)

现在您已经拥有数据库所需的所有值，您可以创建一个 SQL 查询，将新发票插入数据库并传入变量：

/app/lib/actions.ts

```ts
import { z } from 'zod';
import { sql } from '@vercel/postgres'; // 这里需要注意
 
// ...
 
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
}
```

> **译者注**：因为 Vercel Postgres 搭配本地数据库还存在一些问题，在 [nextjs-learn-example(opens in a new tab)](https://github.com/qufei1993/nextjs-learn-example) 示例中，我使用了一种 hack 的方式来处理，如果您在本地开发是按照我的 hack 方式，请替换 `import { sql } from '@vercel/postgres';` 为 `import { sql } from './sql-hack';` 详情参见 [https://qufei1993.github.io/nextjs-learn-cn/chapter17(opens in a new tab)](https://qufei1993.github.io/nextjs-learn-cn/chapter17)

现在，我们还没有处理任何错误。我们将在下一章中处理错误。让我们继续进行下一步。

### 6. 重新验证和重定向[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#6-%E9%87%8D%E6%96%B0%E9%AA%8C%E8%AF%81%E5%92%8C%E9%87%8D%E5%AE%9A%E5%90%91)

Next.js 拥有一个[客户端路由缓存(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/caching#router-cache)，它在用户的浏览器中存储路由段一段时间。除了[prefetching(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#1-prefetching)，此缓存确保用户在路由之间快速导航的同时减少向服务器发出的请求次数。

由于您正在更新发票路由中显示的数据，因此您希望清除此缓存并触发对服务器的新请求。您可以使用 Next.js 的 [revalidatePath(opens in a new tab)](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) 函数来实现：

/app/lib/actions.ts

```ts
'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
 
// ...
 
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
 
  revalidatePath('/dashboard/invoices');
}
```

一旦数据库已更新，将重新验证 `/dashboard/invoices` 路径，并从服务器获取新数据。

此时，您还希望将用户重定向回 `/dashboard/invoices` 页面。您可以使用 Next.js 的 `[redirect](https://nextjs.org/docs/app/api-reference/functions/redirect)` 函数来实现：

  
/app/lib/actions.ts

```ts
'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
// ...
 
export async function createInvoice(formData: FormData) {
  // ...
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
```

恭喜！您刚刚实现了您的第一个 Server Action。通过添加一个新的发票来测试它，如果一切正常：

- 在提交时，您应该被重定向到 `/dashboard/invoices` 路由。
- 您应该看到新发票在表格的顶部。
## 更新发票[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#%E6%9B%B4%E6%96%B0%E5%8F%91%E7%A5%A8)

更新发票 form 同创建发票 form 类似，唯一区别是你需要传递发票 `id` 来更新数据库中的记录。让我们看看如何获取并传递发票 `id`。

以下是更新发票的步骤：

- 创建一个带有发票 `id` 的新动态路由段。
- 从页面参数中读取发票 `id`。
- 从数据库中获取特定发票。
- 使用发票数据预填充 form。
- 更新数据库中的发票数据。

### 1. 创建带有发票 id 的动态路由段[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#1-%E5%88%9B%E5%BB%BA%E5%B8%A6%E6%9C%89%E5%8F%91%E7%A5%A8-id-%E7%9A%84%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E6%AE%B5)

Next.js 允许您在不知道确切段名称的情况下创建[动态路由段(opens in a new tab)](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)，并希望基于数据创建路由。这可以是博客文章标题、产品页面等。您可以通过将文件夹名称包装在方括号中来创建动态路由段。例如，`[id]`、`[post]` 或 `[slug]`。

在 `/invoices` 文件夹中，创建一个名为 `[id]` 的新动态路由，然后创建一个名为 `edit` 的新路由，其中包含一个 `page.tsx` 文件。您的文件结构应如下所示：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter12-edit-invoice-route.12871faf.avif)

在您的 `<Table>` 组件中，请注意有一个 `<UpdateInvoice />` 按钮，它从表记录中接收发票的 `id`。

  
/app/ui/invoices/table.tsx

```tsx
export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  return (
    // ...
    <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
      <UpdateInvoice id={invoice.id} />
      <DeleteInvoice id={invoice.id} />
    </td>
    // ...
  );
}
```

导航到您的 `<UpdateInvoice />` 组件，并更新 `Link` 的 `href` 以接收 `id` 属性。您可以使用模板文字链接到动态路由段：

/app/ui/invoices/buttons.tsx

```tsx
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
 
// ...
 
export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
```

### 2. 从页面参数中读取发票 `id`[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#2-%E4%BB%8E%E9%A1%B5%E9%9D%A2%E5%8F%82%E6%95%B0%E4%B8%AD%E8%AF%BB%E5%8F%96%E5%8F%91%E7%A5%A8-id)

回到您的 `<Page>` 组件，粘贴以下代码：

/app/dashboard/invoices/[id]/edit/page.tsx

```tsx
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
```

请注意，它与您的 `/create` 发票页面类似，只是导入了不同的 form（来自 `edit-form.tsx` 文件）。该 form 应该使用客户的名称、发票金额和状态的 `defaultValue` 进行预填充。要预填充 form 字段，您需要使用 `id` 获取特定的发票。

除了 `searchParams` 之外，页面组件还接收一个称为 `params` 的属性，您可以使用它来访问 `id`。更新您的 `<Page>` 组件以接收此属性：

/app/dashboard/invoices/[id]/edit/page.tsx

```tsx
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  // ...
}
```

### 3. 获取特定发票[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#3-%E8%8E%B7%E5%8F%96%E7%89%B9%E5%AE%9A%E5%8F%91%E7%A5%A8)

然后：

- 导入一个名为 `fetchInvoiceById` 的新函数，并将 `id` 作为参数传递。
- 导入 `fetchCustomers` 以获取下拉列表的客户名称。

您可以使用 `Promise.all` 并行获取发票和客户：

/app/dashboard/invoices/[id]/edit/page.tsx

```tsx
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  // ...
}
```

您将在终端中看到有关 `invoice` 属性的临时 TS 错误，因为 `invoice` 可能是 `undefined`。现在不要担心，当您添加错误处理时，将在下一章中解决它。

太好了！现在，测试一切是否连接正确。访问 [http://localhost:3000/dashboard/invoices(opens in a new tab)](http://localhost:3000/dashboard/invoices) 然后单击铅笔图标以编辑发票。导航后，您应该看到一个预填充有发票详细信息的 form：

![](https://qufei1993.github.io/nextjs-learn-cn//_next/static/media/chapter12-edit-invoice-page.90ede370.avif)

URL 也应更新为带有 `id` 的形式：[http://localhost:3000/dashboard/invoice/uuid/edit(opens in a new tab)](http://localhost:3000/dashboard/invoice/uuid/edit)

> **UUID VS 自增键** 我们使用 `UUID` 而不是自增键（例如 1、2、3 等）。这会使 URL 变得更长；然而，UUID 消除了 ID 冲突的风险，是全球唯一的，并减少了枚举攻击的风险 - 这使它们非常适用于大型数据库。

然而，如果您喜欢更清晰的 URL，您可能更喜欢使用自增键。

### 4. 将 id 传递给 Server Action[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#4-%E5%B0%86-id-%E4%BC%A0%E9%80%92%E7%BB%99-server-action)

最后，您希望将 `id` 传递给 Server Action，以便您可以在数据库中更新正确的记录。您不能像这样将 `id` 作为参数传递：

/app/ui/invoices/edit-form.tsx

```tsx
// Passing an id as argument won't work
<form action={updateInvoice(id)}>
```

反而，您可以使用 JS `bind` 将 `id` 传递给 Server Action。这将确保传递给 Server Action 的任何值都被编码。

/app/ui/invoices/edit-form.tsx

```tsx
// ...
import { updateInvoice } from '@/app/lib/actions';
 
export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
 
  return (
    <form action={updateInvoiceWithId}>
      <input type="hidden" name="id" value={invoice.id} />
    </form>
  );
}
```

注意：在 form 中使用隐藏的 input 字段也是可行的（例如 `<input type="hidden" name="id" value={invoice.id} />`）。然而，这些值将以完整文本形式出现在 HTML 源代码中，对于 id 等敏感数据来说并不理想。

然后，在您的 actions.ts 文件中，创建一个新的 action `updateInvoice`：

/app/lib/actions.ts

```ts
// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
 
// ...
 
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
```

与 `createInvoice` action 类似，在这里您正在：

- 从 `formData` 中提取数据。
- 使用 Zod 验证类型。
- 将金额转换为分。
- 将变量传递给 SQL 查询。
- 调用 `revalidatePath` 以清除客户端缓存并发出新的服务器请求。
- 调用 `redirect` 将用户重定向到发票页面。

通过编辑发票进行测试。提交 form 后，您应该被重定向到发票页面，并且发票应该已更新。

## 删除发票[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#%E5%88%A0%E9%99%A4%E5%8F%91%E7%A5%A8)

要使用 Server Action 删除发票，请将删除按钮包装在 `<form>` 元素中，并使用 `bind` 将 `id` 传递给 Server Action：

/app/ui/invoices/buttons.tsx

```tsx
import { deleteInvoice } from '@/app/lib/actions';
 
// ...
 
export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
 
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
```

在您的 `actions.ts` 文件中，创建一个名为 `deleteInvoice` 的新 action。

/app/lib/actions.ts

```ts
export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}
```

由于此 action 是在 `/dashboard/invoices` 路径中调用的，您不需要调用 `redirect`。调用 `revalidatePath` 将触发新的服务器请求并重新渲染表格。

## 进一步阅读[](https://qufei1993.github.io/nextjs-learn-cn/chapter12#%E8%BF%9B%E4%B8%80%E6%AD%A5%E9%98%85%E8%AF%BB)

在本章中，您学习了如何使用 Server Actions 来改变数据。您还学会了如何使用 `revalidatePath` API 来重新验证Next.js 缓存，并使用 `redirect` 将用户重定向到新页面。

您还可以阅读更多关于[使用 Server Actions 进行安全性方面(opens in a new tab)](https://nextjs.org/blog/security-nextjs-server-components-actions)的内容，以获取更多学习资料。

# 错误处理

在上一章节中，您学到了如何使用 Server Actions 来改变数据。让我们看看如何使用 JavaScript 的 `try/catch` 语句和 Next.js API 优雅地处理错误。

以下是本章中将涵盖的主题：

- 如何使用特殊的 `error.tsx` 文件捕获路由段中的错误，并向用户显示一个备用 UI。
- 如何使用 `notFound` 函数和 `not-found` 文件来处理 404 错误（对于不存在的资源）。
## 为 Server Actions 添加 try/catch[](https://qufei1993.github.io/nextjs-learn-cn/chapter13#%E4%B8%BA-server-actions-%E6%B7%BB%E5%8A%A0-trycatch)

首先，让我们向您的 Server Actions 添加 JavaScript 的 `try/catch` 语句，以使您能够优雅地处理错误。

如果您知道如何操作，请花费几分钟更新您的 Server Actions，或者您可以复制下面的代码：

/app/lib/actions.ts

```t
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
```