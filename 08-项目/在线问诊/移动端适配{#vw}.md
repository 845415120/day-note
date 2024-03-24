## 移动端适配{#vw}

> 实现：使用 vw 完成移动端适配

[文档](https://vant-contrib.gitee.io/vant/#/zh-CN/advanced-usage#viewport-bu-ju)

安装：

```bash
npm install postcss-px-to-viewport -D
# or
yarn add -D postcss-px-to-viewport
# or
pnpm add -D postcss-px-to-viewport
```

配置：

1. 新增`postcss.config.js`

```js
// eslint-disable-next-line no-undef
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 设备宽度375计算vw的值
      viewportWidth: 375,
    },
  },
};
```

2. 重启dev服务器

3. 测试：

![image-20220731214535978](C:/desktop/在线问诊/online-consultation-app-dev155/01-教学资源/assets/image-20220731214535978.png)



说明❓：有一个控制台警告可忽略，或者使用 `postcss-px-to-viewport-8-plugin` 代替当前插件

注意事项：

1. vant组件库、css/scss/less、组件内style会转换
2. 但是元素行内样式不会转换