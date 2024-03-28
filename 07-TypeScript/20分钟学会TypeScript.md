---
标题: 
图片: https://i0.hdslb.com/bfs/archive/f6edc3cf1b3b2dc6fbf1175ba415b68cd9d0945a.jpg@518w_290h_1c_!web-video-share-cover.avif
链接: https://www.bilibili.com/video/BV1gX4y177Kf/?spm_id_from=333.999.0.0&vd_source=e815fa5e2c428a98163e9d19be40ec58
时时: 
评价: 
tags:
---
类型推断
## 类型注解
## 类型断言

```ts
let numArr = [1,2,3]

const result = numArr.find(item => item > 2)  as number

result * 5
```

# TS 类型
## 基础类型
```ts
let v1:string ="abc"

let v2:number = 123

let v3:boolean =true

let v4:null=null

let un:undefined=undefined
```

## 联合类型
```ts
let v5:string | null = null
只能分配为一下几个值之一
let v6:1 | 2 | 3 = 2
```


## 数组类型
```ts
let arr:number[] = [1,2,3]
let arr1:Array<string > =['a','b','c']
```

## 元组

类数组 限制存储个数和数据类型

```ts
let t1:[number,string,number?] = [1,'a',2]
```

## 枚举类型

关键字 enum

```ts
enum MyEnum{
	A,
	B,
	C
}
log(MyEnum.A) == log(MyEnum[0])
```

## Void 类型

类似 null undefined

void 只能被分配undefined值
没有返回值 void
```ts
function Myfun(a:number,b:string):Void{
    return a + b
}
```

# 函数
```ts
function Myfun(a:number,b:string):number{
    return a + b
}
```

# 接口
interface
对象的配置
```ts
interface Obj{
	name:strIng,
	age:number
}
cosnt obj:Obj ={
	name:"a",
	age:10
}
cosnt obj2:Obj ={
	name:"a",
	age:12
}
```

# type 类型别名

```ts
type MyUserName = string | number
let a:MyUserName = 10

```


# 泛型

```ts
function myFn ()
```