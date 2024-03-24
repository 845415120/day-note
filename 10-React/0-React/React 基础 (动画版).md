学习 React 道具 – 动画指南 --- Learn React Props – The Animated GuideProps are a common stumbling block when moving from JavaScript to React. In reality, using props in R......  
道具是从 JavaScript 迁移到 React 时常见的绊脚石。实际上，在 R 中使用道具......

![](https://www.freecodecamp.org/news/content/images/size/w2000/2023/12/react-props-animated.png)

Props are a common stumbling block when moving from JavaScript to React.  
道具是从 JavaScript 迁移到 React 时常见的绊脚石。

In reality, using props in React components is almost identical to using arguments in plain JavaScript functions.  
实际上，在 React 组件中使用 props 与在纯 JavaScript 函数中使用参数几乎相同。

Let's take a quick look at what props are in React through some helpful animations. These will help you visualize how props function and how you can use them in your React projects.  
让我们通过一些有用的动画快速了解一下 React 中的道具。这些将帮助你可视化 props 是如何运作的，以及如何在你的 React 项目中使用它们。

## How to Pass Data to a JavaScript Function  
如何将数据传递给 JavaScript 函数

The following JavaScript function is broken. What will happen if you try to use it?  
以下 JavaScript 函数已损坏。如果您尝试使用它会发生什么？

function sum() {
  return a + b;
} 

sum(); // Reference Error: a is not defined

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/quaqsusb34cn96j9etvh.gif)

When sum function is called, it throws a Reference Error: a is not defined  
调用 sum 函数时，它会抛出引用错误：未定义 a

If you call this function, you’re going to get a Reference Error which says, "a is not defined".  
如果调用此函数，则将收到一个引用错误，该错误显示“未定义 a”。

This makes sense – the `sum` function is using two values, `a` and `b`, but has no idea what they are.  
这是有道理的——该 `sum` 函数使用两个值和 `a` `b` ，但不知道它们是什么。

To fix it, we need to add `a` and `b` as parameters and pass two numbers as arguments.  
为了解决这个问题，我们需要添加 `a` and `b` 作为参数，并将两个数字作为参数传递。

function sum(a, b) {
  return a + b;   
}

sum(2, 2); // 4

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6ad157f12fb7vqs2ndg5.gif)

Fix the sum function by passing values to both arguments a and b  
通过将值传递给参数 a 和 b 来修复 sum 函数

That’s how you pass data to a JavaScript function, but what about a React component?  
这就是将数据传递给 JavaScript 函数的方式，但是 React 组件呢？

## How to Pass Data to a React Component  
如何将数据传递给 React 组件

A React component looks a lot like a plain JavaScript function. But unlike a JS function, it returns and renders React elements, such as a button.  
React 组件看起来很像一个普通的 JavaScript 函数。但与 JS 函数不同的是，它返回并渲染 React 元素，例如按钮。

function Button() {
  return <button>Click me</button>;   
}

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cbqcu6zf3qwpufqpbp8c.gif)

React component, Button, that renders a button element  
React 组件 Button，用于渲染按钮元素

To call a React component and have it display those elements, we use it as if it was a custom HTML element, but written in JavaScript.  
为了调用 React 组件并让它显示这些元素，我们使用它，就好像它是一个自定义的 HTML 元素，但用 JavaScript 编写。

function App() {
  return <Button />;   
}

function Button() {
  return <button>Click me</button>;   
}

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xmcqn8e44iiid275os5r.gif)

Button component is used in another component, App  
Button 组件用于另一个组件 App。

But how do we pass data to functions when they are called like this?  
但是，当函数被这样调用时，我们如何将数据传递给函数呢？

Using this HTML-like syntax, we can pass it any data we like as if it was a custom HTML attribute.  
使用这种类似 HTML 的语法，我们可以向它传递任何我们喜欢的数据，就好像它是自定义 HTML 属性一样。

For example, if we wanted to add our own custom text to our button, we could add a text attribute and set its value equal to some string.  
例如，如果我们想将自己的自定义文本添加到按钮中，我们可以添加一个文本属性并将其值设置为等于某个字符串。

function App() {
  return <Button text="⭐️" />;   
}

function Button() {
  return <button>Click me</button>;   
}

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8qf1wtif6bfamoz7cb8j.gif)

"text" prop is added to the Button component, with value ⭐️  
“text” 属性添加到 Button 组件中，值 ⭐️

In the world of React, this custom attribute is what is known as a "prop".  
在 React 的世界里，这个自定义属性就是所谓的“道具”。

We can add as many props to our components as we like. They can be any JavaScript data type.  
我们可以根据需要向组件添加任意数量的道具。它们可以是任何 JavaScript 数据类型。

function App() {
  return <Button text="⭐️" color="green" />;   
}

function Button() {
  return <button>Click me</button>;   
}

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/98vxu9888zplkonokr3q.gif)

prop named "color" (with the value "green") is added to the Button component  
名为 “color” 的道具（值为 “green”）被添加到 Button 组件中

If we want to use the props we've passed down to our component, you might think that each one is passed as a separate argument.  
如果我们想使用我们传递给组件的 props，你可能会认为每个 props 都是作为单独的参数传递的。

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jsymr9ltwjl9kqqcxbpk.gif)

Passed props are not provided as separate arguments to a component  
传递的 props 不会作为组件的单独参数提供

But that’s not the case. Unlike a regular JavaScript function, all of these props are collected into one value, which is itself an object.  
但事实并非如此。与常规的 JavaScript 函数不同，所有这些 props 都收集到一个值中，该值本身就是一个对象。

This single parameter is referred to and named "props”.  
这个单一的参数被称为“props”。

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h2vkphx043s8x0mewa58.gif)

All props that are passed to a component become properties on a single object within that component's parameters  
传递给组件的所有 prop 都将成为该组件参数中单个对象的属性

It can be named anything, but the convention is to call this parameter "props" because that's what it contains – all of the values that are passed down to this component.  
它可以被命名为任何名称，但惯例是将这个参数称为“props”，因为它包含的内容——传递给这个组件的所有值。

Another reason it makes sense to call these values “props” is because what we've passed down are turned into properties on an object.  
将这些值称为“props”的另一个原因是，我们传递下来的内容会转换为对象上的属性。

Once we’ve passed down the data that we like to our component, they can be used inside that component with curly braces.  
一旦我们将我们喜欢的数据传递给我们的组件，它们就可以在该组件中使用大括号。

function App() {
  return <Button text="⭐️" color="green" />;   
}

function Button(props) {
  return (
    <button style={{ background: props.color }}>
     {props.text}
    </button>
  );
}

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n5smudo77dekbv641msq.gif)

The "color" and "text" props are used as properties within the Button component  
“color”和“text”属性用作 Button 组件中的属性

And a neat pattern to use if your components are small, is to destructure the props object.  
如果你的组件很小，一个简洁的模式是解构 props 对象。

By adding a set of curly braces in your parameters, you can use destructure props into individual variables that you can use directly.  
通过在参数中添加一组大括号，您可以将 destructured props 使用到可以直接使用的单个变量中。

function App() {
  return <Button text="⭐️" color="green" />;   
}

function Button({ color, text }) {
  return (
    <button style={{ background: color }}>
     {text}
    </button>
  );
}

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1c19ivyfpnfnpepejkjp.gif)

Props are destructured as individual variables within the Button component, "color" and "text"  
Props 被解构为 Button 组件中的单个变量，“color”和“text”

## 🏆 Become a Professional React Developer  
🏆 成为专业的 React 开发人员

React is hard. You shouldn't have to figure it out yourself.  
反应是很难的。你不应该自己弄清楚。

I've put everything I know about React into a single course, to help you reach your goals in record time:  
我把我所知道的关于 React 的所有知识都放在一门课程中，以帮助你在创纪录的时间内实现你的目标：

[**Introducing: The React Bootcamp  
介绍：React 训练营**](https://www.reactbootcamp.com/)

It features over 100 hands-on challenges, real-world projects, and a complete series of animations to help you finally understand how React works.  
它具有 100 多个动手挑战、真实世界项目和一系列完整的动画，可帮助您最终了解 React 的工作原理。

**It’s the one course I wish I had when I started learning React.  
这是我开始学习 React 时希望拥有的一门课程。**

Click below to try the React Bootcamp for yourself:  
点击下面亲自尝试 React 训练营：

[](https://www.reactbootcamp.com/)

[![](https://reedbarger.nyc3.digitaloceanspaces.com/reactbootcamp/react-bootcamp-cta-alt.png)](https://www.reactbootcamp.com/)

  
_Click to get started 点击开始_

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)  
免费学习编码。freeCodeCamp 的开源课程已经帮助超过 40,000 人找到了开发人员的工作。开始使用