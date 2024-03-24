## 基于 unplugin-vue-components 组件自动注册解决方案

## vant组件库{#vant}

> 实现：完整使用vant组件库

[文档](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#dao-ru-suo-you-zu-jian-bu-tui-jian)

安装：

```bash
# Vue 3 项目，安装最新版 Vant
npm i vant
# 通过 yarn 安装
yarn add vant
# 通过 pnpm 安装
pnpm add vant
```

[按需引入](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#fang-fa-er.-an-xu-yin-ru-zu-jian-yang-shi)：

## 组件自动注册

在基于 `vite`、`webpack` 或 `vue-cli` 的项目中使用 Vant 时，可以使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件，它可以自动引入组件，并按需引入组件的样式。

相比于常规用法，这种方式可以按需引入组件的 CSS 样式，从而减少一部分代码体积，但使用起来会变得繁琐一些。如果业务对 CSS 的体积要求不是特别极致，我们推荐使用更简便的常规用法。

1. 安装 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件：

```bash
# 通过 npm 安装
npm i unplugin-vue-components -D

# 通过 yarn 安装
yarn add unplugin-vue-components -D

# 通过 pnpm 安装
pnpm add unplugin-vue-components -D

```

2. 配置插件

注意❓：关闭自动生成类型声明文件

```diff
+ import Components from 'unplugin-vue-components/vite';
+ import { VantResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    vue(),
    Components({
+     dts: false, // 关闭自动生成类型声明文件
+     resolvers: [VantResolver()]
    })
  ],
  server: {
    port: 3200,
    open: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```


使用：`App.vue`

```vue
<script setup lang="ts">
</script>

<template>
  <!-- 直接使用vant组件 -->
  <van-button>按钮</van-button>
</template>

<style scoped></style>
```

## 