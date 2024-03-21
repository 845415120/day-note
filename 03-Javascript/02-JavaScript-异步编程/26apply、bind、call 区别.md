# bind、call、apply 区别



- call 和 apply 会调用函数, 并且改变函数内部this指向
- call 和 apply 传递的参数不一样，call 传递**参数列表** aru1, aru2.. 形式，apply 必须**数组**形式 [arg]
- bind 不会调用函数，可以改变函数内部 this 指向，并返回一个**函数**