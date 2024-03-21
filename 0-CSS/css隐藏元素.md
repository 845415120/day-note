## display: none[​](https://richard-docs.netlify.app/notes/css/n-007#display-none)

直接将元素移出dom，不占用位置，元素没有被渲染，仿佛没有这个元素一样，但是通过DOM仍然可以访问到这个元素。

## visibility: hidden[​](https://richard-docs.netlify.app/notes/css/n-007#visibility-hidden)

把元素设置为不可见，但是在视图上还是会占据这个位置，设置此属性的原生是不可交互的，用户不能与这样的元素互动，比如点击事件等。

## opacity: 0[​](https://richard-docs.netlify.app/notes/css/n-007#opacity-0)

将元素的透明度设置为0，但元素仍然会占位，设置为透明度的元素还是可以与元素交互的，因为只是改变了元素的透明度，元素仍然在原来的地方。

## position[​](https://richard-docs.netlify.app/notes/css/n-007#position)

通过定位将元素直接移出屏幕，达到隐藏的效果。

## 尺寸[​](https://richard-docs.netlify.app/notes/css/n-007#%E5%B0%BA%E5%AF%B8)

可以通过使用最小化其尺寸被隐藏width，height，padding，border-width和/或font-size。还需多设置一个overflow: hidden;以确保内容不会溢出。