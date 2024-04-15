---
时间: 2023-12-09
标题: reduce
图片: 
链接: 
tags:
---
`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

|参数|描述|
|---|---|
|_total_|必需。_初始值_, 或者计算结束后的返回值。|
|_currentValue_|必需。当前元素|
|_currentIndex_|可选。当前元素的索引|
|_arr_|可选。当前元素所属的数组对象。|

```js
let sum = goodsList.reduce((total,curr)=>{
      return total + curr.price * curr.count
    })
```



