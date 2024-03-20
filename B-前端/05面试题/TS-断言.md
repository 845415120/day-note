# TS-断言

## 类型断言{#type-assert}

> 语法：let 变量名 = 值 as 类型

有时候你会比 TS 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型。

比如，

```ts
// aLink 的类型 HTMLElement，该类型只包含所有标签公共的属性或方法
// 这个类型太宽泛，没包含 a 元素特有的属性或方法，如 href
const aLink = document.getElementById('link')
```

- 但是我们明确知道获取的是一个 `A` 元素，可以通过 `类型断言` 给它指定一个更具体的类型。

```ts
const aLink = document.getElementById('link') as HTMLAnchorElement
```

- 解释:
  1. 使用 `as` 关键字实现类型断言
  2. 关键字 `as` 后面的类型是一个更加具体的类型（HTMLAnchorElement 是 HTMLElement 的子类型）
  3. 通过类型断言，aLink 的类型变得更加具体，这样就可以访问 a 标签特有的属性或方法了

例如：

```ts
const img = document.getElementById('img') as HTMLImageElement
// 如果不知道标签的类型：document.querySelector('div') 鼠标摸上去就可以看见
```

## 