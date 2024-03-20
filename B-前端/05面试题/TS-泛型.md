# TS-泛型

## 泛型{#generic}

> 作用：泛型（Generics）可以在保证类型安全前提下，给别名、接口、函数等添加**类型参数**，从而实现**复用**

:::tip

- 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑**可重用性**。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。 
- 在TypeScript中，泛型是一种创建**可复用**代码组件的工具。这种组件不只能被一种类型使用，而是能被多种类型复用。类似于参数的作用，泛型是一种用以**增强类型（types）、接口（interfaces）、函数类型等**能力的非常可靠的手段。   
  :::

### 泛型别名{#generic-alias}

> 掌握：泛型别名基本使用，实现类型复用
>
> 语法：type 类型别名<Type1, Type2...> = {}

```ts
// 对后台返回的数据进行类型定义
type User = {
  name: string;
  age: number;
}

type Goods = {
  id: number;
  goodsName: string;
}

type Data<T> = {
  msg: string;
  code: number;
  data: T
}

// 使用类型
type UserData = Data<User>
type GoodsData = Data<Goods>
```

小结：

- 泛型：定义类型别名后加上`<类型参数>` 就是泛型语法， 使用的时候传入具体的类型即可
- `<T>` 是一个变量，可以随意命名，建议遵循大驼峰即可。
- 和类型别名配合，在类型别名后加上泛型语法，然后类型别名内就可以使用这个类型参数
- 泛型可以提高类型的`复用性`和`灵活性`



### 泛型接口{#generic-interface}

> 掌握：泛型接口基本使用，实现类型复用，了解内置泛型接口
>
> interface 接口名<Type1, Type2...> {}

```ts
// 对象，获取单个ID函数，获取所有ID函数，ID的类型肯定是一致的，但是可能是数字可能是字符串
interface IdFn<T> {
  id: () => T;
  ids: () => T[];
}

const idObj: IdFn<number> = {
  id() { return 1 },
  ids() { return [1, 2] },
};
```

- 在接口名称的后面添加 `<类型变量>`，那么，这个接口就变成了泛型接口，接口中所有成员都可以使用类型变量。

内置的泛型接口：

```ts
const arr = [1, 2, 3];
// TS有自动类型推断，其实可以看做：const arr: Array<number> = [1, 2, 3]
arr.push(4);
arr.forEach((item) => console.log(item));
```

- 可以通过 Ctrl + 鼠标左键(Mac：Command + 鼠标左键) 去查看内置的泛型接口



### 泛型函数{#generic-fn}

> 掌握：泛型函数基本使用，保证函数内类型复用，且保证类型安全
>
> 语法：const fn = <Type1, Type2...>(a:Type1, b:Type2):Type1=>{}

```ts
// 函数的参数是什么类型，返回值就是什么类型
function getId<T>(id: T): T {
  return id
}

let id1 = getId<number>(1)
let id2 = getId('2')
// TS会进行类型推断，参数的类型作为泛型的类型 getId<string>('2')
```

小结

- 泛型函数语法？
  - 函数名称后加上 `<T>` ， `T`是类型参数，是个类型变量，命名建议遵循大驼峰即可。
- `T` 什么时候确定？
  - 当你调用函数的时候，传入具体的类型，T 或捕获到这个类型，函数任何位置均可使用。
- 泛型函数好处？
  - 让函数可以支持不同类型（复用），且保证类型是安全的。
- 调用函数，什么时候可以省略泛型？
  - 传入的数据可以推断出你想要的类型，就可以省略。

```ts
// 我需要的类型 { name: string, age?: number } 但是推断出来是 { name: string}
let id2 = getId({name:'jack'})
```

## 