## gpt 表单校验

Element UI 是一个基于 Vue.js 的组件库，用于构建用户界面。在 Element UI 中，表单校验是通过使用表单验证规则来实现的。以下是一个简单的例子，演示如何在 Element UI 中进行表单校验：

首先，确保你已经安装了 Element UI：

1. 导入 Element UI 的 Form 组件和 Input 组件：

```vue
<template>
  <el-form :model="form" :rules="rules" ref="myForm" label-width="80px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <!-- 其他表单项 -->
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-ui';

export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
  },
  data() {
    return {
      form: {
        username: '',
        // 其他表单项
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          // 其他校验规则
        ],
        // 其他表单项的校验规则
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.myForm.validate(valid => {
        if (valid) {
          // 表单验证通过，执行提交操作
          console.log('表单验证通过');
        } else {
          // 表单验证未通过
          console.log('表单验证未通过');
          return false;
        }
      });
    },
  },
};
</script>

```

在上面的例子中，我们使用了 `el-form` 组件来包裹整个表单，每个表单项使用 `el-form-item` 包裹，并在 `rules` 中定义了相应的校验规则。在点击提交按钮时，通过调用 `this.$refs.myForm.validate` 方法来触发表单校验。



## 登录表单的校验

**`目标`**对登录表单进行规则校验

> 基础模板已经有了基础校验的代码,所以我们这一章节更多的是修正和完善

### **el-form表单校验的先决条件**

![image-20200830212537835](assets/image-20200830212537835.png)

### 手机号和密码的校验

**字段名对应**

> 为什么要对应? 因为基础模板采用的是**`username`**的字段,但是实际接口中采用的是**`mobile`**的字段,为了更方便的写代码,所以我们将**`username`**改成**`mobile`**

这里除了字段名，还有我们的规则校验名称，以及prop名称。

**英文提示变成中文**

基础模板中都是**placeHolder**占位符是英文,要变成中文

登录按钮文字同样需要换成中文

**校验手机号和校验密码**

基础模板中,已经做了校验,我们针对代码进行一些优化

新规则：手机号必填，并且进行格式校验，密码必填，长度6-16位之间

```js
 data() {
    // 自定义校验函数
    const validateMobile = function(rule, value, callback) {
      // 校验value
      // if (validMobile(value)) {
      //   // 如果通过 直接执行callback
      //   callback()
      // } else {
      //   callback(new Error('手机号格式不正确'))
      // }
      validMobile(value) ? callback() : callback(new Error('手机号格式不正确'))
    }

    return {
      loginForm: {
        mobile: '13800000002',
        password: '123456'
      },
      loginRules: {
        mobile: [{ required: true, trigger: 'blur', message: '手机号不能为空' }, {
          validator: validateMobile, trigger: 'blur'
        }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }, {
          min: 6, max: 16, message: '密码的长度在6-16位之间 ', trigger: 'blur'
        }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
```

我们在**`utils/validate.js`**方法中增加了一个校验手机号的方法

```js
/**
 * 校验手机号
 * **/
export function validMobile(str) {
  return /^1[3-9]\d{9}$/.test(str) // 校验手机号
}
```

**`utils/validate.js`**是一个专门存放校验工具方法的文件

### 关于修饰符

**关于修饰符**

> 在该页面中，我们发现了事件的几个修饰符 **`@keyup.enter.native`**  **`@click.native.prevent`**

@keyup.**`enter`**属于按键修饰符，如果我们想监听在按回车键的时候触发，可以如下编写

```vue
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit">
```

@keyup.enter.**`native`** 表示监听组件的原生事件，比如 keyup就是于input的原生事件，这里写native表示keyup是一个原生事件

**提交代码**

**`本节任务`**：实现登录用户的手机号和密码校验