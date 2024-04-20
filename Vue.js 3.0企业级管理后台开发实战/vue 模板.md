**1、点击【文件】---【首选项】---【用户代码片段】**

![](https://ask.qcloudimg.com/http-save/yehe-8557037/akzxqyws8b.png)

**2、新建或修改vue.json**

![](https://ask.qcloudimg.com/http-save/yehe-8557037/ge8xxi3xqq.png)

**3、将下列代码粘贴上去（可根据自己需要添加/删除）**

{

"Print to console": {

"prefix": "vue",

"body": [

"<template>",

"  <div>\n",

"  </div>",

"</template>\n",

"<script lang='ts'>",

"import { Component, Vue } from 'vue-property-decorator';",

"import { State, Mutation, Action } from 'vuex-class'",

"@Component",

"export default class Layout extends Vue {",

"    mounted() {\n",

"    }",

"};",

"</script>\n",

"<style scoped lang=\"${1:scss}\">\n",

"</style>\n"

    ],

"description": "Create vue template"

  }

}

**4、成功后，创建一个vue空白文件，输入vue3, 按tab键，即可生成vue片段模板。**