# TS  interface 接口

## 接口类型{#interface}

### 基本使用{#interface-base}

> 掌握：使用 interface 声明对象类型
>
> 语法：interface 接口类型名字 {key1:type1; key2?:type2...}

- 接口声明是命名对象类型的另一种方式

```typescript
// 通过interface定义对象类型
interface Person {
  name: string;
  age: number;
  sayHi: () => void;
}
// 使用类型
let person: Person = {
  name: 'jack',
  age: 19,
  sayHi() {},
};
```

小结：

- `interface` 后面是接口名称，和类型别名的意思一样。
- 指定 `接口名称` 作为变量的类型使用。
- 接口的每一行只能有 `一个` 属性或方法，每一行不需要加分号。

### interface 继承{#interface-extends}

> 掌握：使用 extends 实现接口继承，达到类型复用

思考：

- 有两个接口，有相同的属性或者函数，如何提高代码复用？

```typescript
interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}
```

继承：

- 相同的属性或展示可以抽离出来，然后使用 `extends` 实现继承复用

```typescript
interface Point2D {
  x: number;
  y: number;
}
// 继承 Point2D
interface Point3D extends Point2D {
  z: number;
}
// 继承后 Point3D 的结构：{ x: number; y: number; z: number }
```

小结：

- 接口继承的语法：`interface 接口A extends 接口B {}`
- 继承后 `接口A` 拥有 `接口B` 的所有属性和函数的类型声明