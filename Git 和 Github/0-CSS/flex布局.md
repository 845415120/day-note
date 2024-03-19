
# flex

在flex布局容器中设置felx:1;伸长并吸收flex 容器中额外的自由空间

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。<br />任何一个容器都可以指定为 Flex 布局。

```
.box{   display: flex; }
```

行内元素也可以使用 Flex 布局。

```
.box{   display: inline-flex; }
```

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

## 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。<br />![](https://cdn.nlark.com/yuque/0/2023/png/34220974/1672755868641-51fb03a4-0bd1-41fa-a199-929ecd34dfae.png#averageHue=%23f3e5c2&clientId=u552244c6-ed78-4&from=paste&id=u42227cc2&originHeight=333&originWidth=563&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7126efd1-451f-4762-b184-84394b8bb00&title=)<br />容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。<br />项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

## 容器的属性

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### flex-direction属性

flex-direction属性决定主轴的方向（即项目的排列方向）。

```
.box {   flex-direction: row | row-reverse | column | column-reverse; }
```

![](https://cdn.nlark.com/yuque/0/2023/png/34220974/1672755966535-e91796e8-2dc4-4e16-bded-eb8377d0905b.png#averageHue=%23fbeadc&clientId=u552244c6-ed78-4&from=paste&id=u56fc6b0f&originHeight=203&originWidth=796&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua10138ee-e0b6-4064-ada0-fe764b39355&title=)<br />它可能有4个值。

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

### flex-wrap属性

默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。<br />![](https://cdn.nlark.com/yuque/0/2023/png/34220974/1672755990338-fccc46d5-1957-42d2-9fb2-2da19193949f.png#averageHue=%23a0557f&clientId=u552244c6-ed78-4&from=paste&id=u6c3a67a2&originHeight=276&originWidth=798&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uf85a2bb8-7d81-4a08-96fe-9bce541d73e&title=)

```
.box{   flex-wrap: nowrap | wrap | wrap-reverse; }
```

它可能取三个值。<br />（1）nowrap（默认）：不换行。<br />![](https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756003102-90e2d937-84b1-44e2-99d6-01c0f2a0e843.png#averageHue=%23f9d063&clientId=u552244c6-ed78-4&from=paste&id=u331875b0&originHeight=145&originWidth=700&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u8f2723c8-547f-4051-a6db-20c857997b4&title=)<br />（2）wrap：换行，第一行在上方。<br />![](https://cdn.nlark.com/yuque/0/2023/jpeg/34220974/1672756003118-b134ae17-e1f1-4178-81a4-62e226fad7d8.jpeg#averageHue=%23fad260&clientId=u552244c6-ed78-4&from=paste&id=u2cd2939d&originHeight=177&originWidth=700&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc0f4867d-eae9-449c-9587-8507fd35775&title=)<br />（3）wrap-reverse：换行，第一行在下方。<br />![](https://cdn.nlark.com/yuque/0/2023/jpeg/34220974/1672756003148-ca592831-e43e-4e64-82d1-14917a3b52c3.jpeg#averageHue=%23fad25e&clientId=u552244c6-ed78-4&from=paste&id=ud4fee11c&originHeight=177&originWidth=700&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ued3c8d01-6553-4f77-a2b0-005f32e81f4&title=)

### flex-flow

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```
.box {   flex-flow: <flex-direction> || <flex-wrap>; }
```

### justify-content属性

justify-content属性定义了项目在主轴上的对齐方式。

```
.box {   justify-content: flex-start | flex-end | center | space-between | space-around; }
```

![](https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756040981-411585f1-755b-46bd-9607-7dd37279370d.png#averageHue=%23c799b0&clientId=u552244c6-ed78-4&from=paste&id=u8e6de34c&originHeight=763&originWidth=637&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5b8c8448-925f-4ff7-bcae-07a2a5103ee&title=)<br />它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### align-items属性

align-items属性定义项目在交叉轴上如何对齐。

```
.box {   align-items: flex-start | flex-end | center | baseline | stretch; }
```

![](https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756064572-2d000c37-0c49-4043-8f44-aa03b1582bf6.png#averageHue=%23cb8c87&clientId=u552244c6-ed78-4&from=paste&id=ue932da84&originHeight=786&originWidth=617&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u4cada9e9-e4b7-46b7-a3ec-ce18b0f6ea5&title=)<br />它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

### align-content属性

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```
.box {   align-content: flex-start | flex-end | center | space-between | space-around | stretch; }
```

![](https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756107985-f0a73ebd-e0c9-4c46-87b8-cdee9565e329.png#averageHue=%23c48c8a&clientId=u552244c6-ed78-4&from=paste&id=uf70d003b&originHeight=786&originWidth=620&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7ca9525d-81da-4d23-ab63-e6f0763dbcf&title=)<br />该属性可能取6个值。

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

### 项目的属性

以下6个属性设置在项目上。

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

### order属性

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```
.item {   order: <integer>; }
```

![](https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756158953-f927a126-b661-41ba-92dc-61df1777d4f8.png#averageHue=%23e67f25&clientId=u552244c6-ed78-4&from=paste&id=u5bce438b&originHeight=480&originWidth=751&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7fea02aa-e354-4149-9cdc-3699f2316e2&title=)

### flex-grow属性

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

```
.item {   flex-grow: <number>; /* default 0 */ }
```

![](https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756173594-ec2d4066-cee4-4fbd-a1b3-f9c79fb1bc60.png#averageHue=%23e67f24&clientId=u552244c6-ed78-4&from=paste&id=uc3ffc1e7&originHeight=211&originWidth=802&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uf1d4d460-1323-4a40-b9b5-5631911f444&title=)<br />如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

### flex-shrink属性

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

```

.item {
  flex-shrink: <number>; /* default 1 */
}
```

![](https://cdn.nlark.com/yuque/0/2023/jpeg/34220974/1672756173669-a34b2f72-d9de-4ea4-b5c4-ec782fcba76d.jpeg#averageHue=%23f8d16a&clientId=u552244c6-ed78-4&from=paste&id=u22b3ab63&originHeight=145&originWidth=700&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u61bd43cc-3bc7-466b-be9d-cb7d9a1d5ab&title=)<br />如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。<br />负值对该属性无效。

### flex-basis属性

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```
.item {   flex-basis: <length> | auto; /* default auto */ }
```

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

### flex属性

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```
.item {   flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] }
```

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。<br />建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### align-self属性

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```
.item {   align-self: auto | flex-start | flex-end | center | baseline | stretch; }
```

![](https://cdn.nlark.com/yuque/0/2023/png/34220974/1672756173637-ee168e61-ff90-49b7-8b25-de1fa7ba97b2.png#averageHue=%23d9b3ba&clientId=u552244c6-ed78-4&from=paste&id=ud6c28083&originHeight=390&originWidth=743&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u69e22f32-4a50-43be-95cd-c32624c85a7&title=)<br />该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

一张图看懂flex
![一图流](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230713/image.nhiz1fthvuo.png)
