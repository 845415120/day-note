## flex 基础

Flex布局是通过给父容器设置样式(**display:flex**)从而形成一个**弹性容器**（**flex container**），其中这个容器里的子元素被称为**弹性项目**（**flex item**），而在容器中有两根默认的轴，一根是水平的**主轴（main axis）**，另一根是**垂直的交叉轴（cross axis）**，弹性项目根据这两根轴在弹性容器中进行排列布局，从而形成了flex布局。

**弹性容器**属性： flex-direction(主轴方向)

flex-wrap(换行)

**justify-content：属性定义了项目在主轴上的对齐方式。**

**align-items属性定义项目在交叉轴上如何对齐。**

**弹性项目(flex item)**

**order**属性定义项目的**排列顺序**。数值越小，排列越靠前，默认为0

**flex**属性是 控制其在主轴和交叉轴上的伸展和收缩行为

flex-grow(放大 0), flex-shrink(缩小 1) 和 flex-basis(初始 auto)的简写

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

表示项目可以在容器中伸展和收缩，并且初始大小由内容决定。