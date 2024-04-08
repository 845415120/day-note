---
标题: 数据结构与算法JavaScript描述
图片: https://img1.doubanio.com/view/subject/s/public/s27371758.jpg
时时: 2014
链接: https://book.douban.com/subject/25945449/
评价: 8.0★★★★
tags:
  - 数据结构
---
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230902/image.aamv7bpytew.png)

## 检索算法
### 1.最大最小值
如何在数组中查找最小值，算法如下。
(1) 将数组第一个元素赋值给一个变量，把这个变量作为最小值。
(2) 开始遍历数组，从第二个元素开始依次同当前最小值进行比较。
(3) 如果当前元素小于最小值，则把当前元素赋值给最小值。


```JavaScript
function  findMin(arr) {
  let min =arr[0];
  for(let i=1;i<arr.length;i++){
    if (arr[i]<min) {
      min = arr[i]
    }
  }
  return min;
  
}
```

### 2.二分查找
二分查找算法，也称折半查找算法，是一种在有序数组中查找某一特定元素的搜索算法。
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230902/image.2ofd585z50o0.webp)

- (1) 将数组的第一个位置设置为下边界（0）
- (2) 将数组最后一个元素所在的位置设置为上边界（数组的长度减 1）。
- (3) 若下边界等于或小于上边界，则做如下操作。
  -   a. 将中点设置为（上边界加上下边界）除以 2。
   -   b. 如果中点的元素小于查询的值，则将下边界设置为中点元素所在下标加 1。
   -   c. 如果中点的元素大于查询的值，则将上边界设置为中点元素所在下标减 1。
   -   d. 否则中点元素即为要查找的数据，可以进行返回。

```javaScript
function binSearch(arr,data){
  let low = 0;
  let high = arr.length-1;
  while (low <= high) {
    let min = Math.floor((low+high)/2)
    if (arr[min] < data) {
      low = min + 1
    }else if (arr[min] > data) {
      high = min -1
    }else{ 
      return min
    }
    return -1;
  }
}
```
## 动态规划
将原问题分解成若干子问题，通过解决子问题来求解原问题

斐波那契数列
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …

递归方法
```javaScript
function recurFib(n) {
  if(n<2){
    return n;
  }
  else{
    return recurFib(n-1) + recurFib(n-2);
  }
}
print(recurFib(10))
```
递归函数的问题是它的执行效率非常低

使用动态规划的技巧去计算斐波那契数列来展示
```javaScript
function dynFib(n) {
  let val = [];
  for ( let i = 0; i <= n; ++i; ){
    var[i] = 0;
  }
  if (n==1 || n==2) {
    return 1;

  }
  else{
    val[1] = 1;
    val[2] = 2;
    for(let i = 3; i <= n; ++i;){
      val[i] = val[i-1] + val[i-2];
    }
    return val[n-1];
  }
}
```

### 最长公共子串
```javaScript
 function lcs (word1, word2) {
      var max = 0
      var index = 0
      var lcsarr = new Array(word1.length + 1)
      for (var i = 0; i <= word1.length + 1; ++i){
        lcsarr[i] = new Array(word2.length + 1)
        for (var j = 0; j <= word2.length + 1; ++j) {
          lcsarr[i][j] = 0
        }
      }
      // 的第二部分代码
      for (var i = 0; i <= word1.length; ++i) {
        for (var j = 0; j <= word2.length; ++j) {
          if (i == 0 || j == 0) {
            lcsarr[i][j] = 0
          } else {
            if (word1[i - 1] == word2[j - 1]) {
              lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1
            } else {
              lcsarr[i][j] = 0
            }
          }
          if (max < lcsarr[i][j]) {
            max = lcsarr[i][j]
            index = i
          }
        }
      }
      var str = ""
      if (max == 0) {
        return ""
      } else {
        for (var i = index - max; i <= max; ++i) {
          str += word2[i]
        }
        return str
      }
    }
```
该函数的第一部分初始化了两个变量以及一个二维数组
第二部分构建了用于保存字符匹配记录的表

### 背包问题
使用动态规划来解决背包问题的关键思路是计算装入背包的每一个物品的最大价值，直到背包装满
```javaScript
    function max (a, b) {
      return (a > b) ? a : b
    }
    function dKnapsack (capacity, size, value, n) {
      var K = []
      for (var i = 0; i <= capacity + 1; i++) {
        K[i] = []
      }
      for (var i = 0; i <= n; i++) {
        for (var w = 0; w <= capacity; w++) {
          if (i == 0 || w == 0) {
            K[i][w] = 0
          }
          else if (size[i - 1] <= w) {
            K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]],
              K[i - 1][w])
          }
          else {
            K[i][w] = K[i - 1][w]
          }
          putstr(K[i][w] + " ")
        }
        print()
      }
      return K[n][capacity]
    }
    var value = [4, 5, 10, 11, 13]
    var size = [3, 4, 7, 8, 9]
    var capacity = 16
    var n = 5
    print(dKnapsack(capacity, size, value, n));
```
## 贪心算法

贪心算法总是会选择当下的最优解

### 找零问题
用最少数量的硬币来找零钱

- 1.初始化一个空的结果列表，用于存储所需的硬币。
- 2.对于每一种硬币面额，从最大面额开始（通常是从大到小排列的），重复以下步骤：
    - 计算当前面额的硬币可以用多少个，即 硬币数量 = 总金额 / 当前面额。
    - 将这些硬币添加到结果列表中。
    - 减去已经添加的硬币总额，更新剩余的总金额。
    - 如果剩余总金额为0，则找零结束；否则，继续下一个面额的硬币。

```javaScript
function makeChange(coins, amount) {
  // 首先将硬币按面额从大到小排序
  coins.sort((a, b) => b - a);

  const change = [];
  let remainingAmount = amount;

  for (const coin of coins) {
    while (remainingAmount >= coin) {
      change.push(coin);
      remainingAmount -= coin;
    }
  }

  if (remainingAmount === 0) {
    return change;
  } else {
    return "无法找零";
  }
}

// 示例用法
const coins = [25, 10, 5, 1];  // 美元面额
const amount = 63;
const result = makeChange(coins, amount);
console.log(result);  // 输出：[25, 25, 10, 1, 1, 1]
```





```
function binarySearch(array, target) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const guess = Math.floor((min + max) / 2);

    if (array[guess] === target) {
      return guess; // 找到目标对象，返回索引
    } else if (array[guess] < target) {
      min = guess + 1; // 目标在guess的右侧
    } else {
      max = guess - 1; // 目标在guess的左侧
    }
  }

  return -1; // 目标对象不在数组中，返回 -1
}
```

