---
标题: 
图片: 
链接: 
时时: 
评价: 
tags:
---
# 练习forEach和filter的案例

## 回顾forEach和filter


### forEach

```
// const array1 = ['a', 'b', 'c'];

const array1 = [
  { id: 1, uname: '宋江', nickname: '及时雨' }, 
  { id: 2, uname: '吴用', nickname: '智多星' }, 
  { id: 3, uname: '林冲', nickname: '豹子头' }
]

array1.forEach(item => {
  // console.log(item)
  console.log(item.uname)
});
```

forEach - 没有返回值，或者说返回值就是undefined。

### filter

filter - 过滤，所以，filter的作用是过滤(筛选)数组中的元素。

```
const array1 = [
  { id: 1, uname: '宋江', nickname: '及时雨' }, 
  { id: 2, uname: '吴用', nickname: '智多星' }, 
  { id: 3, uname: '林冲', nickname: '豹子头' }
]

const res = array1.filter(item => {
  // console.log(item)
  // console.log(item.uname)
  // return 条件
  return item.id >= 2
});

console.log(res) // res 是筛选的结果
```

## 案例中使用forEach

循环遍第1次，拼接一个div

- div中，使用第1个商品的图片、名称、价格

循环遍历第2次，拼接一个div  
div中，使用第2个商品的图片、名称、价格  
.........  
循环结束，拼接得到 8 个div，把拼接好的 8 个div放到 页面中即可。

```
// 封装一个函数（为了多次调用）
function render(data) {
  let str = ''
  data.forEach(item => {
    str += `
    <div class="item">
      <img src="${item.picture}" alt="">
      <p class="name">${item.name}</p>
      <p class="price">${item.price}</p>
    </div>
    `
  })
  // 循环结束，str 拼接成了 8 个 <div>
  // console.log(str)
  document.querySelector('.list').innerHTML = str
}

// 调用函数，渲染全部商品
render(goodsList)
```

## 案例中使用filter

```
// 2. 筛选 -------------------------------------------------
// 2.1) 找到4个按钮，注册单击事件
// let as = document.querySelectorAll('.filter a')
// for (let i = 0; i < as.length; i++) {
//   // 循环一次，注册一个事件；（结果是循环4次，注册了4个事件）
//   as[i].addEventListener('click', function () { })
// }
// 上述循环，分别注册事件，可以实现效果，但是注册的事件太多了，不科学。此类问题非常适合使用事件委托方案
document.querySelector('.filter').addEventListener('click', function (e) {
  // 2.2) 单击事件，函数内部进行筛选
  // 2.3) 获取每个 a 标签的 data-index 属性 （通过这个属性值，判断点击的是哪个a）
  if (e.target.tagName === 'A') {
    // 如果符合这个条件，说明用户点击了 a 标签
    // let index = 元素.dataset.index  // 元素.dataset = { index: 1 }
    let index = e.target.dataset.index
    // console.log(index) // 1  2  3  undefined
    // 2.4) 使用 filter 对原始数据 goodsList 进行筛选，得到筛选后的新数组
    let arr = []
    // index 的结果，是一个字符串类型的 1，所以下面的判断只能使用 ==，不能使用 ===
    if (index == 1) {
      arr = goodsList.filter(item => item.price <= 100)
    } else if (index == 2) {
      arr = goodsList.filter(item => item.price > 100 && item.price <= 300)
    } else if (index == 3) {
      arr = goodsList.filter(item => item.price > 300)
    } else {
      arr = goodsList
    }
    // 整个判断结束，得到筛选后arr数组
    // console.log(arr)
    // 2.5) 调用 render函数，将筛选后的数据渲染到页面
    render(arr)
  }
})
```

**这个案例多写几遍，后面还会用到** 。  
