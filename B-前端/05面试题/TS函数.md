# TS函数

```typescript
function hello(
  txt:string
):void {
  console.log('hello ' + txt);
}
```

函数`hello()`在声明时，需要给出参数`txt`的类型（string），以及返回值的类型（`void`），后者写在参数列表的圆括号后面。



变量被赋值为一个函数

```typescript
// 写法一
const hello = function (txt:string) {
  console.log('hello ' + txt);
}

// 写法二
const hello:
  (txt:string) => void
= function (txt) {
  console.log('hello ' + txt);
};
```