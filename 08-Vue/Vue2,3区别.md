
# vue2,3区别

## 声明data

vue2

```vue
<template>
  <h1>Hello {{ name }}</h1>
</template>

<script>   
export default {
  data() {
    return {
      name: "江",
    };
  },
};
</script>
```

vue 3

```vue
<template>
  <h1>Hello {{ name }}</h1>
</template>

<script setup>
import { ref } from "vue";
const name = ref("江");
</script>

```

## 更新data

vue 2

```vue
<template>
  <h1>Hello {{ name }}</h1>
</template>

<script>
export default {
  data() {
    return {
      name: "John",
    };
  },
  created() {
    this.name = "Jane";
  },
};
</script>
```  

vue3

```vue
<script setup>
import { ref } from "vue";
const name = ref("John");
name.value = "Jane";
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
```

## 计算(Computed)属性  data(状态)

vue2

```vue
<script>
export default {
  data() {
    return {
      count: 10,
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
};
</script>

<template>
  <div>{{ doubleCount }}</div>
</template>
```

vue3

```vue
<template>
  <h1>Hello {{ doubleCount }}</h1>
</template>

<script setup>
import { ref ,computed } from 'vue';
const count = ref(10)
const doubleCount = computed(()=>count.value*3)
</script>      
```

## v-for

vue 2

```vue
<script>
export default {
  data() {
    return {
      colors: ["red", "green", "blue"],
    };
  },
};
</script>

<template>
  <ul>
    <li
      v-for="color in colors"
      :key="color"
    >
      {{ color }}
    </li>
  </ul>
</template>
```

vue3

```vue
<script setup>
const colors = ["red", "green", "blue"];
</script>

<template>
  <ul>
    <li
      v-for="color in colors"
      :key="color"
    >
      {{ color }}
    </li>
  </ul>
</template>

```

## 事件,methods

vue2

```vue
<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods:{
    incrementCount(){
      this.count++
    }
  }
};
</script>

<template>
  <div>
    <p>Counter: {{ count }}</p>
    <button @click="incrementCount">
      +1
    </button>
  </div>
</template>
```

vue3

```vue
<script setup>
import { ref } from "vue";
const count = ref(0);
function incrementCount() {
  count.value++;
}
</script>
<template>
   <p>Counter: {{ count }}</p>
    <button @click="incrementCount">
      +1
  </button>
</template>
```

## 生命周期钩子mounted 操作dom

页面打开,选中文本框

vue 2

```vue
<script>
export default {
  mounted() {
    this.$refs.inputElement.focus();
  },
};
</script>

<template>
  <input ref="inputElement">
</template>
```

vue 3

```vue
<script setup>
import { ref, onMounted } from "vue";

const inputElement = ref();

onMounted(() => {
  inputElement.value.focus();
});
</script>

<template>
  <input ref="inputElement">
</template>
```

## 生命周期对比

<table>
  <thead>
    <tr>
      <th>vue.js 2.x</th>
      <th>vue.js 3.x</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>beforeCreate</td>
      <td>setup</td>
    </tr>
    <tr>
      <td>created</td>
      <td>setup</td>
    </tr>
    <tr>
      <td>beforeMount</td>
      <td>onBeforeMount</td>
    </tr>
    <tr>
      <td>mounted</td>
      <td>onMounted</td>
    </tr>
    <tr>
      <td>beforeUpdate</td>
      <td>onBeforeUpdate</td>
    </tr>
    <tr>
      <td>updated</td>
      <td>onUpdated</td>
    </tr>
    <tr>
      <td>activated</td>
      <td>onActiveted</td>
    </tr>
    <tr>
      <td>deactivated</td>
      <td>onDeactiveted</td>
    </tr>
    <tr>
      <td>beforeDestroy</td>
      <td>onBeforeUnmount</td>
    </tr>
    <tr>
      <td>destroyed</td>
      <td>onUnmounted</td>
    </tr>
    <tr>
      <td>beforeUnmount</td>
      <td></td>
    </tr>
    <tr>
      <td>unmounted</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Props 父传子

vue 2

```vue
<script>
import UserProfile from "./UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
};
</script>

<template>
  <UserProfile
    name="John"
    :age="20"
    :favorite-colors="['green', 'blue', 'red']"
    is-available
  />
</template>


UserProfile.vue

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    age: {
      type: Number,
      required: true,
      default: null,
    },
    favoriteColors: {
      type: Array,
      required: true,
      default: () => [],
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<template>
  <div>
    <p>My name is {{ props.name }}!</p>
    <p>My age is {{ props.age }}!</p>
    <p>My favorite colors are {{ props.favoriteColors.join(", ") }}!</p>
    <p>I am {{ props.isAvailable ? "available" : "not available" }}</p>
  </div>
</template>
```

vue3

```vue
app.vue
<script setup>
import UserProfile from "./UserProfile.vue";
</script>

<template>
  <UserProfile
    name="John"
    :age="20"
    :favourite-colors="['green', 'blue', 'red']"
    is-available
  />
</template>

UserProfile .vue
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
  age: {
    type: Number,
    required: true,
    default: null,
  },
  favouriteColors: {
    type: Array,
    required: true,
    default: () => [],
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>

<template>
  <p>My name is {{ props.name }}!</p>
  <p>My age is {{ props.age }}!</p>
  <p>My favourite colors are {{ props.favouriteColors.join(", ") }}!</p>
  <p>I am {{ props.isAvailable ? "available" : "not available" }}</p>
</template>


```

vue2
`export default {
  props: {`
vue3
`<script setup>
const props = defineProps({`

## 子传父 emit

首先，在子组件中定义一个方法，该方法触发一个自定义事件并传递值

在父组件中使用子组件并监听该自定义事件

vue2

```vue
App.vue
<script>
import AnswerButton from "./AnswerButton.vue";
export default {
  components: {
    AnswerButton,
  },
  data() {
    return {
      canCome: true,
    };
  },
  methods: {
    onAnswerNo() {
      this.canCome = false;
    },
    onAnswerYes() {
      this.canCome = true;
    },
  },
};
</script>

<template>
  <div>
    <p>Are you happy?</p>
    <AnswerButton @yes="onAnswerYes" @no="onAnswerNo" />
    <p style="font-size: 50px">
      {{ canCome ? "😀" : "😥" }}
    </p>
  </div>
</template>

AnswerButton.vue
<script>
export default {
  methods: {
    clickYes() {
      this.$emit("yes");
    },
    clickNo() {
      this.$emit("no");
    },
  },
};
</script>

<template>
  <div>
    <button @click="clickYes">
      YES
    </button>

    <button @click="clickNo">
      NO
    </button>
  </div>
</template>

```

vue3

```vue
App.vue
<script setup>
import { ref } from "vue";
import AnswerButton from "./AnswerButton.vue";

let canCome = ref(true);

function onAnswerNo() {
  canCome.value = false;
}

function onAnswerYes() {
  canCome.value = true;
}
</script>

<template>
  <p>Are you happy?</p>
  <AnswerButton @yes="onAnswerYes" @no="onAnswerNo" />
  <p style="font-size: 50px">
    {{ canCome ? "😀" : "😥" }}
  </p>
</template>


AnswerButton.vue

<script setup>
const emit = defineEmits(["yes", "no"]);

function clickYes() {
  emit("yes");
}

function clickNo() {
  emit("no");
}
</script>

<template>
  <button @click="clickYes">
    YES
  </button>

  <button @click="clickNo">
    NO
  </button>
</template>

```

vue3 defineEmits

## Slot

```vue
App.vue
<script setup>
import FunnyButton from "./FunnyButton.vue";
</script>

<template>
  <FunnyButton> Click me! </FunnyButton>
</template>


FunnyButton.vue

<template>
  <button
    style="
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      padding: 10px 20px;
      font-size: 30px;
      border: 2px solid #fff;
      margin: 8px;
      transform: scale(0.9);
      box-shadow: 4px 4px rgba(0, 0, 0, 0.4);
      transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;
      outline: 0;
    "
  >
    <slot />
  </button>
</template>

```

## 组合选项 provide​

用于提供可以被后代组件注入的值。
**provide** 和**inject** 通常成对一起使用，使一个祖先组件作为其后代组件的依赖注入方，无论这个组件的层级有多深都可以注入成功，只要他们处于同一条组件链上。

vue3

```vue
<script setup>
import { ref, provide } from "vue";
import UserProfile from "./UserProfile.vue";

const user = ref({
  id: 1,
  username: "unicorn42",
  email: "unicorn42@example.com",
});

function updateUsername(username) {
  user.value.username = username;
}

provide("user", { user, updateUsername });
</script>

<template>
  <h1>Welcome back, {{ user.username }}</h1>
  <UserProfile />
</template>

//UserProfile.vue

<script setup>
import { inject } from "vue";
const { user, updateUsername } = inject("user");
</script>
<template>
  <div>
    <h2>My Profile</h2>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <button @click="() => updateUsername('Jane')">
      Update username to Jane
    </button>
  </div>
</template>
```

## Fetch

```vue
<script setup>
import useFetchUsers from "./useFetchUsers";

const { isLoading, error, data: users } = useFetchUsers();
</script>

<template>
  <p v-if="isLoading">
    Fetching users...
  </p>
  <p v-else-if="error">
    An error ocurred while fetching users
  </p>
  <ul v-else-if="users">
    <li
      v-for="user in users"
      :key="user.login.uuid"
    >
      <img
        :src="user.picture.thumbnail"
        alt="user"
      >
      <p>
        {{ user.name.first }}
        {{ user.name.last }}
      </p>
    </li>
  </ul>
</template>
```

```vue
import { ref } from "vue";

export default function useFetchUsers() {
  const data = ref();
  const error = ref();
  const isLoading = ref(false);

  async function fetchData() {
    isLoading.value = true;
    try {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const { results: users } = await response.json();
      data.value = users;
      error.value = undefined;
    } catch (err) {
      data.value = undefined;
      error.value = err;
    }
    isLoading.value = false;
  }
  fetchData();

  return { isLoading, error, data };
}

```
