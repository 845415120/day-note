# Promise

- Promise 是 ES6 新增的语法，解决了回调地狱的问题
- 可以把 Promise 看成⼀个状态机。
  - 初始是 **pending** 状态，
  - 可以通过函数 **resolve** 和 **reject** ，将状态转变为 **resolved** 或者 **rejected** 状态，
- 状态⼀旦改变就不能再次变 化。
- then 函数会返回⼀个 Promise 实例，

