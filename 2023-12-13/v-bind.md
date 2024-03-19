---
时间: 2023-12-13
标题: v-bind
图片: 
链接: 
tags: 
评价:
---


|语法|示例|说明|
|---|---|---|
|`v-bind:src`|`<img v-bind:src="imageSrc">`|绑定一个 `src` 属性。|
|简写为：`src`|`<img :src="imageSrc">`||
|动态绑定 `v-bind:[key]`|`<button v-bind:[key]="value"></button>`|动态绑定属性，`key` 由变量决定。|
|字符串拼接|`<img :src="'/path/to/images/' + fileName">`|字符串拼接路径。|
|绑定 `class`|`<div :class="{red: isRed}"></div>`|根据条件添加类名。|
||`<div :class="[classA, classB]"></div>`|绑定多个类名，数组中的每个元素都是一个类名。|
||`<div :class="[classA, classB, {classC: isC}]"></div>`|动态绑定类名，根据条件添加类名。|
|绑定 `style`|`<div :style="{fontSize: size + 'px'}"></div>`|绑定单个样式属性。|
||`<div :style="[styleObjectA, styleObjectB]"></div>`|绑定多个样式属性，数组中的每个元素都是一个样式对象。|
||`<div v-bind="{id: someProp, 'other-attr': otherProp}"></div>`|绑定多个属性，属性名由对象中的键决定。|