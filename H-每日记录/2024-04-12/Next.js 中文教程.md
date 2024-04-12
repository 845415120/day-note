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