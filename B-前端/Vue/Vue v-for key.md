# Vue v-for key

### v-for key

·key是为Vue中的vnode标记的唯一id,通过这个key,我们的diff操作可以更准确、更快速

·dff算法的过程中，先会进行新旧节点的首尾交叉对比，当无法匹配的时候会用新节点的ky与旧节点进行比对，然
后超出差异

