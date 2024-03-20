# BFC

1. 根元素（html）,或包含body的元素
2. 设置浮动（float），且值不为none（为 `left`、`right`），
3. 设置定位（position）, 不为static或relative（为 `absolute` 、 `fixed`）
4. 设置 display 为这些值 `inline-block`、`flex`、`grid`、`table`、`table-cell`、`table-caption`
5. 设置 overflow，且值不为visible (为 `auto`、`scroll`、`hidden`)

满足以上条件之一的即可形成BFC区域

 

## BFC有哪些特性？

1. 属于同一个BFC的两个相邻容器的上下margin可能会重叠
2. 计算BFC高度时浮动元素也会被计算
3. BFC的区域不会与浮动容器发生重叠
4. 所有属于BFC中的盒子默认左对齐，并且它们的左边距可以触及到容器的左边线。最后一个盒子，尽管是浮动的，但依然遵循这个原则
5. BFC是独立容器，容器内部元素不会影响容器外部元素

# 解决问题

**根据特性1 >>> 解决外边距的塌陷问题**

我们可以将其中一个元素设置成BFC区域，这里为box1包裹一层div设置overflow：hidden使其成为BFC区域，使box1，box2成为两个独立容器互不影响

**根据特性2 >>> 解决父元素高度塌陷问题**



**根据特性3 >>> 解决浮动重叠问题**

