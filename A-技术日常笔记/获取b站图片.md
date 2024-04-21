## 获取图片

```js
document.querySelectorAll("#page-collection-detail > div > div > div > ul > li > a.cover.cover-normal > div.b-img > picture > img")
document.querySelectorAll("#content>#thumbnail > yt-image > img")
```
document.querySelector("#submit-video-list > ul.clearfix.cube-list > li.small-item.fakeDanmu-item.preview-danmu > a.cover > div.b-img > picture > img")

document.querySelectorAll("#submit-video-list > ul.clearfix.cube-list > li > a.cover > div.b-img > picture > img")

document.querySelectorAll("#content > div.grid-16-8.clearfix > div.article > div > div > div.pic > a > img")
document.querySelectorAll("#content > div.grid-16-8.clearfix > div.article > div.game-list > div:nth-child(13) > div.pic > a > img")
document.querySelectorAll("#content > div.grid-16-8.clearfix > div.article > div.game-list > div > div.content > div.desc")
document.querySelectorAll("#video-eBy51 > div > a > div.cover > img")
document.querySelectorAll(".item > div > a > div.cover> img")
document.querySelectorAll(".item > div > a > div.meta")
document.querySelectorAll("#video-GMvDVz > div > a > div.video-title > strong")
document.querySelectorAll("#page-collection-detail > div > div > div > ul > li.small-item.fakeDanmu-item.preview-danmu > a.cover.cover-normal > div.b-img > picture > img")

document.querySelectorAll("#page-collection-detail > div > div > div > ul > li > a.cover.cover-normal > div.b-img > picture > img")
```js
var imgElements = document.querySelectorAll("#page-collection-detail > div > div > div > ul > li > a.cover.cover-normal > div.b-img > picture > img")

// Check if any img elements are found
if (imgElements.length > 0) {
  // Loop through each img element and retrieve the currentSrc attribute
  imgElements.forEach(function (imgElement) {
    var currentSrcValue = imgElement.src;
    // Log or use the currentSrc value as needed
    console.log(currentSrcValue);
  });
} else {
  console.error("No image elements found");
}


```
document.querySelectorAll("#content > div.grid-16-8.clearfix > div.article > ul > li > div.pic > a > img")
document.querySelectorAll("#content > div.grid-16-8.clearfix > div.article > ul> li > div.info > h2 > a")
document.querySelectorAll("#content > div.grid-16-8.clearfix > div.article > ul > li> div.info > div.pub")
document.querySelectorAll("#page-collection-detail > div > div > div > ul > li> a.title")
```js
var emElements =document.querySelectorAll("#page-collection-detail > div > div > div > ul > li > a")
// Check if any em elements are found
if (emElements.length > 0) {
  // Loop through each em element and retrieve the text content
  emElements.forEach(function (emElement) {
    var emContent = emElement.textContent;
    // Log or use the em content as needed
    console.log(emContent);
  });
} else {
  console.error("No <em> elements found");
}

```
document.querySelectorAll("#page-series-detail > div > div > div > ul > li> a")
document.querySelectorAll("#page-collection-detail > div > div > div > ul > li > a")
## 豆瓣时间
```js
var emElements = document.querySelectorAll("#content > div.grid-16-8.clearfix > div.article > div > div > div.info > ul > li.intro");
// Check if any em elements are found
if (emElements.length > 0) {
  // Loop through each em element and retrieve the text content
  emElements.forEach(function (emElement) {
    var emContent = emElement.textContent;
    // Get the first six characters of emContent
    var firstSixCharacters = emContent.substring(0, 4);
    // Log or use the first six characters as needed
    console.log(firstSixCharacters);
  });
} else {
  console.error("No <em> elements found");
}
```
  
document.querySelector("#content > div.grid-16-8.clearfix > div.article > div:nth-child(3) > div:nth-child(1) > div.info > ul > li.intro")
document.querySelector("#content > div.grid-16-8.clearfix > div.article > div.grid-view > div:nth-child(12) > div.info > ul > li.intro")
## 获取title
```js
document.querySelector("#page-collection-detail > div > div > div > ul > li > a.title")
```

```js
const liElements = document.querySelectorAll("#page-collection-detail > div > div > div > ul > li");

// Loop through each li element and get the title
liElements.forEach((liElement, index) => {
  // Use nth-child(index + 1) to match the original CSS :nth-child selector
  const titleElement = liElement.querySelector(`:nth-child(${index + 1}) > a.title`);
  
  // Get the title text content
  const title = titleElement ? titleElement.textContent.trim() : 'No title found';

  console.log(` ${title}`);
});
```
## 链接
```js
const liElements = document.querySelectorAll("#page-collection-detail > div > div > div > ul > li");
liElements.forEach((liElement, index) => {
  const anchorElement = liElement.querySelector(`:nth-child(${index + 1}) a.cover.cover-normal`);
  const hrefValue = anchorElement ? anchorElement.getAttribute("href") : 'No href found';
  console.log(`${hrefValue}`);
});
```

## 生成文件
```js
const fs = require('fs')
const path = require('path')
// Directory to store the Markdown files
const outputDirectory = "md_files"
// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory)
}
// List of 30 image URLs
const imageUrls = [
  "https://i2.hdslb.com/bfs/archive/6675da10cca005b9444c28d84d8076ba38b72663.jpg@480w_300h_1c_!web-space-channel-video.webp",
  " https://i2.hdslb.com/bfs/archive/8f8b3d266ee5772d9a91517da3625e286534a73c.jpg@480w_300h_1c_!web-space-channel-video.webp",
  " https://i0.hdslb.com/bfs/archive/a755b617f21916634c5609ce0e9040f005c386bb.jpg@480w_300h_1c_!web-space-channel-video.webp",
  " https://i1.hdslb.com/bfs/archive/95e941df1af96e5a29de45e8752ac4deaf3cc21b.jpg@480w_300h_1c_!web-space-channel-video.webp",
  " https://i0.hdslb.com/bfs/archive/2cf5d8b2e8f820ea209876171c6fa25c3f7c4536.jpg@480w_300h_1c_!web-space-channel-video.webp",
  " https://i1.hdslb.com/bfs/archive/7bbdcd641ce5b10e7baafbdcd6b322201fe34029.jpg@480w_300h_1c_!web-space-channel-video.webp",
  " https://i2.hdslb.com/bfs/archive/6dfeeb85963a9750b0fa1d52d84c499c2a1b85e2.jpg@480w_300h_1c_!web-space-channel-video.webp",
  " https://i1.hdslb.com/bfs/archive/143eff31673c6d72cede7ded5cef4c98c0948bf9.jpg@480w_300h_1c_!web-space-channel-video.webp",
  " https://i0.hdslb.com/bfs/archive/a84256c35eefe83dc69aa8ce7a92d8a157218028.jpg@480w_300h_1c_!web-space-channel-video.webp",
  " https://i1.hdslb.com/bfs/archive/d40b59229981514b53ee611752973caba842ced8.jpg@480w_300h_1c_!web-space-channel-video.webp"]
// List of 30 titles
const titles = [
  "一小时读完《Vue.js 设计与实现》",
  "一小时读完《深入理解现代 JavaScript》",
  "一小时读完《JavaScript 语言精粹(修订版)》",
  "一小时读完《软技能：代码之外的生存指南》",
  "一小时读完《现代 JavaScript 库开发》",
  "一小时读完《浪潮之巅（ IT 图书热卖榜第一名 ）》",
  "一小时读完《你不知道的JavaScript上》",
  "一小时读完《JavaScript设计模式与开发实践》",
  "(旧)一小时读完《JavaScript权威指南第7版》上",
  "一小时读完《JavaScript高级程序设计第四版》"
]
const hrefs = [
  "https://www.bilibili.com/video/BV1K24y1q7eJ/",
  "https://www.bilibili.com/video/BV1qD4y1G7YK",
  "https://www.bilibili.com/video/BV1JY4y1R7vq",
  "https://www.bilibili.com/video/BV1aM4y197aY",
  "https://www.bilibili.com/video/BV1fY4y1C7bx",
  "https://www.bilibili.com/video/BV11Y411e735",
  "https://www.bilibili.com/video/BV1zk4y1b7w5",
  "https://www.bilibili.com/video/BV1rM4y1U7w1",
  "https://www.bilibili.com/video/BV1Ts4y1N7S2",
  "https://www.bilibili.com/video/BV12M411V7NR",
  "https://www.bilibili.com/video/BV1Zk4y137QQ"
]
// Generate Markdown files based on image URLs and titles
imageUrls.forEach((imageUrl, index) => {
  const title = titles[index] || `Title ${index + 1}`
  const href = hrefs[index] || `href ${index + 1}`
  // Create the Markdown content
  const markdownContent = `---
时间: 11分
作者: "\\r技术蛋老师"
标题: ${title}
图片: ${imageUrl}
链接: ${href}
评价: ★★★★★
---`
  // Create a filename based on the title
  const sanitizedTitle = title.replace(/ /g, '') // Replace spaces with underscores
  const filename = path.join(outputDirectory, `${sanitizedTitle}.md`)
  // Write the content to the file
  fs.writeFileSync(filename, markdownContent)
  console.log(`File created: ${filename}`)
})
```

## 代码
[node-获取b站封面地址](C:\desktop\江鹏利\node-获取b站封面地址)

## jav 图片
document.querySelector("body > section > div > div.movie-list.h.cols-4.vcols-8 > div:nth-child(24) > a > div.cover > img")
```
var imgElements =document.querySelectorAll("div> div > a > div.cover > img")

// Check if any img elements are found
if (imgElements.length > 0) {
  // Loop through each img element and retrieve the currentSrc attribute
  imgElements.forEach(function (imgElement) {
    var currentSrcValue = imgElement.src;
    // Log or use the currentSrc value as needed
    console.log(currentSrcValue);
  });
} else {
  console.error("No image elements found");
}
```

## 哔哩哔哩

document.querySelectorAll("#page-collection-detail > div > div > div > ul > li > a.cover.cover-normal > div.b-img > picture > img")

### up 主页

document.querySelectorAll("#submit-video-list > ul.clearfix.cube-list > li > a.cover > div.b-img > picture > img")

```
var imgElements = document.querySelectorAll("#submit-video-list > ul.clearfix.cube-list > li > a.cover > div.b-img > picture > img")

// Check if any img elements are found
if (imgElements.length > 0) {
  // Loop through each img element and retrieve the currentSrc attribute
  imgElements.forEach(function (imgElement) {
    var currentSrcValue = imgElement.src;
    // Log or use the currentSrc value as needed
    console.log(currentSrcValue);
  });
} else {
  console.error("No image elements found");
}

```


## 难忘今宵
### 图片

```
var imgElements = document.querySelectorAll("#submit-video-list > ul.clearfix.cube-list > li > a.cover > div > picture > img")

// Check if any img elements are found
if (imgElements.length > 0) {
  // Loop through each img element and retrieve the currentSrc attribute
  imgElements.forEach(function (imgElement) {
    var currentSrcValue = imgElement.src;
    // Log or use the currentSrc value as needed
    console.log(currentSrcValue);
  });
} else {
  console.error("No image elements found");
}



```

### 标题
```
var imgElements = document.querySelectorAll("#submit-video-list > ul.clearfix.cube-list > li > a.title")

// Check if any img elements are found
if (imgElements.length > 0) {
  // Loop through each img element and retrieve the currentSrc attribute
  imgElements.forEach(function (imgElement) {
    var currentSrcValue = imgElement.title;
    // Log or use the currentSrc value as needed
    console.log(currentSrcValue);
  });
} else {
  console.error("No image elements found");
}
```



### 时长

```
var imgElements = document.querySelectorAll("#submit-video-list > ul.clearfix.cube-list > li > a.cover > span.length")

// Check if any img elements are found
if (imgElements.length > 0) {
  // Loop through each img element and retrieve the currentSrc attribute
  imgElements.forEach(function (imgElement) {
    var currentSrcValue = imgElement.textContent;
    // Log or use the currentSrc value as needed
    console.log(currentSrcValue);
  });
} else {
  console.error("No image elements found");
}
```
### 链接

```
var imgElements =document.querySelectorAll("#submit-video-list > ul.clearfix.cube-list > li > a.cover")

// Check if any img elements are found
if (imgElements.length > 0) {
  // Loop through each img element and retrieve the currentSrc attribute
  imgElements.forEach(function (imgElement) {
    var currentSrcValue = imgElement.href;
    // Log or use the currentSrc value as needed
    console.log(currentSrcValue);
  });
} else {
  console.error("No image elements found");
}
```