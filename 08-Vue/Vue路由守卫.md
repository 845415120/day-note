# vue路由守卫

beforeEach 主要有3个参数 to ， from ， next 。

to ： route 即将进⼊的⽬标路由对象。

from ： route 当前导航正要离开的路由。

next ： function ⼀定要调⽤该⽅法 resolve 这个钩⼦。执⾏效果依赖n ext ⽅法的 调⽤参数。可以控制⽹⻚的跳转