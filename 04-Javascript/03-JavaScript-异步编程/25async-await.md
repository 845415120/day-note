---
时间: 11分
作者: "\r技术蛋老师"
标题: AsyncAwait关键字-让我们更优化地写代码
图片: https://i2.hdslb.com/bfs/archive/ddb11a92108b412564195495ce29715cc6f48891.jpg@480w_300h_1c_!web-space-channel-video.webp
链接: https://www.bilibili.com/video/BV1tZ4y1Q7Zh
评价: ★★★★★
---




## 六.Async与Await

### 1.Async

async 函数，使得异步操作变得更加方便。

- 更好的语义。
- 返回值是 Promise。

```javascript
async function test(){
 
}
test()
```

### 2.Await

`await`命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。

```javascript
async function test(){
    var res1 =  await ajax("http://localhost:3000/news1")
    var res2 =  await ajax("http://localhost:3000/news2")
    return res2
}

test().then(res=>{
 console.log("返回结果",res)
}).catch(err=>{
 console.log("err",err)
})
```


# async/await

## async/await （异步函数）概述

async/await 是在 ES8(即ES 2017）中引入的新语法，是另外一种异步编程解决方案。

本质： 是 Generator 的语法糖。

- async 的返回值是 Promise 实例对象。
- await 可以得到异步结果。

我们在普通的函数前面加上 async 关键字，就成了 async 函数。

什么是语法糖呢？语法糖就是让语法变得更加简洁、更加舒服，有一种甜甜的感觉。

## async/await 的基本用法

async 后面可以跟一个 Promise 实例对象。代码举例如下：

```javascript
    const request1 = function() {
        const promise = new Promise(resolve => {
            request('https://www.baidu.com/xxx_url', function(response) {
                if (response.retCode == 200) {
                    // 这里的 response 是接口1的返回结果
                    resolve('request1 success'+ response);
                } else {
                    reject('接口请求失败');
                }
            });
        });

        return promise;
    };

    async function queryData() {
        const response = await request1();
        });
        return response;
    }
    queryData().then(data => {
        console.log(data);
    });
```

## 基于 async/await 处理多次 Ajax 请求【重要】

实际开发中，现在有三个网络请求，请求2必须依赖请求1的结果，请求3必须依赖请求2的结果，如果按照往常的写法，会有三层回调，会陷入“回调地狱”。

这种场景其实就是接口的多层嵌套调用。之前学过 Promise，它可以把原本的**多层嵌套调用**改进为**链式调用**。

而今天要学习的 async/await ，可以把原本的“多层嵌套调用”改成类似于同步的写法，非常优雅。

代码举例：

暂略。

### Promise、async...await、Generator的对比

我们在使用 Promise、async...await、Generator 的时候，返回的都是 Promise 的实例。

如果直接使用 Promise，则需要通过 then 来进行链式调用；如果使用 async...await、Generator，写起来更像同步的代码。

## 参考链接

- [js async await 终极异步解决方案](https://www.cnblogs.com/CandyManPing/p/9384104.html)
- [理解 JavaScript 的 async/await](https://segmentfault.com/a/1190000007535316)

