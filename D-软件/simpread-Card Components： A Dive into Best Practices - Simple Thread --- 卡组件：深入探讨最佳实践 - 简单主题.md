> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [www.simplethread.com](https://www.simplethread.com/card-components-best-practices/)

> Discover the versatility and modern aesthetics of card-based UI design explored in this blog. From BB......探索本博客中探讨的基于卡片的 UI 设计的多功能性和现代美学。
![](https://www.simplethread.com/wp-content/uploads/2023/10/Derek_Card-Best-Practices-1.jpg)

What do the BBC, Pinterest, Netflix, and your favorite blog have in common? Card-based UI designs!  
BBC、Pinterest、Netflix 和您最喜欢的博客有什么共同点？基于卡片的UI设计！

Card-based UIs have become a mainstay of UI design over the last decade. Take a look around the web and you’ll notice that cards are absolutely everywhere.  
在过去的十年中，基于卡片的 UI 已成为 UI 设计的支柱。浏览一下网络，您会发现卡片无处不在。

Here at Simple Thread, we embrace card-based UIs quite a bit. But what about this seemingly simple UI component makes it so versatile that it can be used across just about any industry on the web?  
在 Simple Thread，我们非常欢迎基于卡片的 UI。但是，这个看似简单的 UI 组件为何如此通用，以至于可以在网络上的几乎任何行业中使用？

**What is a Card Component?  
什么是卡组件？**
---------------------------------------

At its most basic level a Card Component is simply a container that groups like content together in a way that helps to make it clearly distinct from the content that surrounds it. There are many other elements that can make up a card, though what elements are used in a card highly depends on the goal of the application. The most commonly used elements in a Card Component (as defined by [Google’s Material Design system](https://m2.material.io/components/cards#anatomy)) are:  
在最基本的层面上，卡片组件只是一个容器，它将类似的内容分组在一起，从而有助于使其与其周围的内容清晰地​​区分。还有许多其他元素可以组成卡片，但卡片中使用哪些元素很大程度上取决于应用程序的目标。卡片组件中最常用的元素（由 Google 的 Material Design 系统定义）是：

![](https://www.simplethread.com/wp-content/uploads/2023/10/image1.png)

1.  **Container 容器**  
    The only truly ‘required’ element, the container holds all of the other elements that make up a card component. This container is the primary element that separates the card content from the rest of the content in the UI.  
    容器是唯一真正“必需”的元素，它包含构成卡片组件的所有其他元素。此容器是将卡片内容与 UI 中的其余内容分开的主要元素。
    
2.  **Thumbnail 缩略图**  
    An avatar, logo, or icon that typically denotes ownership over the content within the card.  
    通常表示卡内内容所有权的头像、徽标或图标。
    
3.  **Header Text 标题文本**  
    The title of the card itself.  
    卡本身的标题。
    
4.  **Subhead Text 副标题文本**  
    A subheading that typically contains metadata about the card content. For example, a byline and published date for a blog post.  
    通常包含有关卡片内容的元数据的副标题。例如，博客文章的署名和发布日期。
    
5.  **Media 媒体**  
    Cards frequently include an image or video to help the user understand what content a card represents. This is especially useful when your card layout contains a repeating type of content such as properties on Airbnb.  
    卡片通常包含图像或视频，以帮助用户了解卡片代表的内容。当您的卡片布局包含重复类型的内容（例如 Airbnb 上的房产）时，这尤其有用。
    
6.  **Supporting Text 支持文字**  
    Text that typically is a description of a card’s content.  
    通常是卡片内容描述的文本。
    
7.  **Buttons 纽扣**  
    Calls to Action with clear messaging on what the action is.  
    号召性用语，明确传达行动内容。
    
8.  **Icons 图标**  
    Typically used for secondary actions like share or like.  
    通常用于次要操作，例如分享或点赞。
    

**Advantages of a Card-Based UI Design  
基于卡片的 UI 设计的优点**
---------------------------------------------------------

#### Responsive as Hell 反应灵敏

Card layouts can easily be adapted to just about any screen size. This is the primary advantage of using a Card-Based layout.  
卡片布局可以轻松适应任何屏幕尺寸。这是使用基于卡片的布局的主要优点。

#### Easily Scannable 轻松扫描

Card layouts are easy to scan no matter what the content is. Simple stacks of cards with a consistent design allow users to quickly find what they’re looking for.  
无论内容是什么，卡片布局都很容易扫描。简单的卡片堆和一致的设计让用户可以快速找到他们想要的东西。

#### Common 常见的

Card-Based UIs have been around for over a decade at this point. Their ubiquitousness means that users intuitively know what to expect because they’ve already interacted with many card-based UIs.  
基于卡片的 UI 已经存在十多年了。它们的普遍存在意味着用户直观地知道会发生什么，因为他们已经与许多基于卡片的 UI 进行了交互。

#### Modern Looking 现代外观

In a similar vein, the commonality of Card-based UIs means that they are the modern standard (at least for now)  
同样，基于卡片的 UI 的通用性意味着它们是现代标准（至少目前如此）

#### Actionable 可行的

Well designed cards make it abundantly clear to the user what actions are available to them with the content contained within a card.  
精心设计的卡片可以让用户非常清楚地了解卡片中包含的内容可以执行哪些操作。

**Card Best Practices 银行卡最佳实践**
-------------------------------

While Card Components  are a great way to present users with information in a nicely organized and visually appealing format, there are many pitfalls a designer can fall into when using cards, however, that can ruin the experience of a site or product. To avoid these, we’ve put together some best practices to follow.  
虽然卡片组件是以组织良好且具有视觉吸引力的格式向用户呈现信息的好方法，但设计师在使用卡片时可能会陷入许多陷阱，从而破坏网站或产品的体验。为了避免这些问题，我们汇总了一些可供遵循的最佳实践。

### **One Topic at a Time  
一次一个主题**

Focusing a card to a single topic allows you to present a design that is highly scannable. Users are able to quickly understand the “One Card, One Topic” pattern, allowing them to navigate faster through your design as well as keeping their cognitive load lower than if the card had tried to shotgun multiple things at them at once.  
将卡片聚焦于单一主题可以让您呈现出易于浏览的设计。用户能够快速理解“一张卡，一个主题”模式，使他们能够更快地浏览您的设计，并保持比卡片试图同时向他们射击多个事物时更低的认知负荷。

![](https://www.simplethread.com/wp-content/uploads/2023/10/image3.png)

### **Consistent Padding and Spacing  
一致的填充和间距**

When designing a card component for your project consistency is key. Having a design that changes wildly from card to card will bring a user to a screeching halt trying to understand what is being presented. Even small differences, while difficult to consciously notice, can slow down and frustrate a user. Make sure that you have a consistent system of padding around the outside edges of a card, as well as a consistent spacing system for the content within the card.  
为您的项目设计卡组件时，一致性是关键。卡片之间的设计差异很大，会让用户在试图理解所呈现的内容时突然停下来。即使是很小的差异，虽然很难有意识地注意到，但也会减慢用户的速度并让用户感到沮丧。确保卡片外边缘周围有一致的填充系统，以及卡片内内容的一致间距系统。

For spacing, we typically stick to an 8pt grid. This means that all of our padding and spacing values also keep to this pattern, allowing us to be very consistent in how our components look as well as keep a good rhythm that allows for better scanning.  
对于间距，我们通常坚持 8pt 网格。这意味着我们所有的填充和间距值也遵循这种模式，使我们的组件外观非常一致，并保持良好的节奏，以便更好地扫描。

Want to learn more about using an 8pt grid? Check out this [article](https://uxplanet.org/everything-you-should-know-about-8-point-grid-system-in-ux-design-b69cb945b18d).  
想要了解有关使用 8pt 网格的更多信息？看看这篇文章。

![](https://www.simplethread.com/wp-content/uploads/2023/10/image6.png)

### **Lift Those Cards Up (or How to Use Drop Shadows to Great Effect)  
将这些卡片举起来（或如何使用投影来产生巨大效果）**

The use of drop shadows when creating a card component might seem like a minor aesthetic addition and while using them _does_ make card components look nicer, there are some key user focused reasons for using them.  
创建卡片组件时使用阴影可能看起来像是一个小的美学补充，虽然使用它们确实使卡片组件看起来更好，但使用它们有一些以用户为中心的关键原因。

Placing a drop shadow behind your card component adds depth and dimension to your user interface. This sense of separation that is created helps users to perceive each card as its own distinct and separate element within the user interface. Additionally, a well-implemented drop shadow can enhance the contrast between the card and the UI background, improving readability and accessibility.  
在卡片组件后面放置阴影可以增加用户界面的深度和维度。创建的这种分离感有助于用户将每张卡片视为用户界面中自己独特且独立的元素。此外，良好的阴影可以增强卡片和 UI 背景之间的对比度，从而提高可读性和可访问性。

It’s important to note that while using drop shadows can be helpful, they should be used wisely. Using a comically large and/or dramatic drop shadow will turn an orderly UI into an unreadable mess pretty quickly.  
需要注意的是，虽然使用阴影很有帮助，但应该明智地使用它们。使用大得滑稽和/或戏剧性的阴影会很快将有序的 UI 变成难以阅读的混乱。

![](https://www.simplethread.com/wp-content/uploads/2023/10/image7.png)

### **KYBSS: Keep Your Borders Simple, Stupid  
KYBSS：保持你的边界简单、愚蠢**

A lot of new designers have a tendency to rely heavily on borders even within cards, to denote groups of like content. While borders within your cards can have a purpose, keeping them to a minimum will help your card components neat and readable.  
许多新设计师倾向于严重依赖边框（即使在卡片内）来表示相似内容的组。虽然卡片内的边框可能有其用途，但将边框保持在最低限度将有助于您的卡片组件整洁且可读。

![](https://www.simplethread.com/wp-content/uploads/2023/10/image2.png)

### **Empty States 空状态**

Many of the cards we use are in the context of a dashboard. These cards typically display tables of data points or overviews of data within the application. Many times, the data for these cards needs to be created by the user which means that when a user first visits the page or opens the application, they’ll be greeted with empty cards. While this might seem like a problem, it’s actually a great opportunity to provide information and guidance to the user.  
我们使用的许多卡片都是在仪表板的上下文中。这些卡通常显示应用程序内的数据点表格或数据概述。很多时候，这些卡片的数据需要由用户创建，这意味着当用户第一次访问该页面或打开应用程序时，他们会看到空卡片。虽然这看起来像是一个问题，但实际上这是向用户提供信息和指导的绝佳机会。

#### **Messaging 消息传递**

It’s crucial to provide users with clear messaging to explain why they’re seeing an empty card. This messaging should be short and to the point. For example, the messaging for a card that contains individual records might be “No Records Created.” This helps the user to understand that to display anything here, at least one record will need to be created in the application.  
向用户提供清晰的信息来解释为什么他们会看到一张空卡至关重要。此消息应该简短且切中要点。例如，包含单个记录的卡片的消息可能是“未创建记录”。这有助于用户了解要在此处显示任何内容，至少需要在应用程序中创建一条记录。

#### **Call to Action 呼吁采取行动**

To further reinforce that the user needs to perform an action on an empty state card, a Call to Action should be used as well. Continuing the example from above, the CTA might be “Create a Record.”  
为了进一步强调用户需要在空状态卡上执行操作，还应该使用号召性用语。继续上面的示例，CTA 可能是“创建记录”。

![](https://www.simplethread.com/wp-content/uploads/2023/10/image5.png)

### **Skeleton Loading 骨架加载**

Not everyone has a fast internet connection and not every site or application is going to have a lighting fast load time. To deal with these potential issues, you can use skeleton loading. Skeleton loading is using a wireframe-like or highly simplified version of the content of your card component during the load time of your site or application. This simple representation of the loading content keeps users engaged during load time and to increase the perceived performance of the site or application, using skeleton loading on your card components.  
并非每个人都拥有快速的互联网连接，也不是每个网站或应用程序的加载时间都非常快。为了处理这些潜在的问题，您可以使用骨架加载。骨架加载是在站点或应用程序加载期间使用卡片组件内容的类似线框或高度简化的版本。这种加载内容的简单表示可以让用户在加载期间保持参与，并通过在卡片组件上使用骨架加载来提高站点或应用程序的感知性能。

![](https://www.simplethread.com/wp-content/uploads/2023/10/image4.png)

**Conclusion 结论**
-----------------

Card Components are in just about every corner of the web and it’s not a surprise. They are exceptionally user-friendly, remarkably responsive, and can effortlessly accommodate a diverse range of content. Save your users time and cognitive load by letting them focus on what’s actually important on a site or in an application – the content that they’re looking for.  
卡片组件几乎遍布网络的每个角落，这并不奇怪。它们非常用户友好，反应灵敏，并且可以轻松容纳各种内容。让用户专注于网站或应用程序中真正重要的内容（他们正在寻找的内容），从而节省他们的时间和认知负担。

Loved the article? Hated it? Didn’t even read it?  
喜欢这篇文章吗？讨厌它吗？连读都没读过吗？

We’d love to hear from you.  
我们很乐意听取您的意见。

[Reach Out  伸手](https://www.simplethread.com/contact)