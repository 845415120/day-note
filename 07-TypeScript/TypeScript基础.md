# TypeScript 基础

typescript教程 <https://wangdoc.com/typescript/any>

[TypeScript.xmind](https://www.yuque.com/attachments/yuque/0/2023/xmind/34220974/1685591017239-12b70af0-1f03-4e17-b281-ae27cedf2e3c.xmind)
![TypeScript.png](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230713/image.742t2i9imi80.png)
**定义任何东西的时候要注明类型，**调用任何东西的时候要检查类型。**

**a 标签**HTMLAnchorElement
**TypeScript是JavaScript类型的超集,它可以编译成纯JavaScript。**
[1个项目学会TypeScript核心基础语法_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV12P411E79E/?spm_id_from=..search-card.all.click&vd_source=e815fa5e2c428a98163e9d19be40ec58)

# 快速入门

浏览器是识别不了typescript的需要先写好,在编译成js
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1685508772454-19cb3205-401d-4c30-bf13-afdf537f0a7d.png#averageHue=%2326344d&clientId=ue6350da0-7cd4-4&from=paste&height=275&id=u74c14e1a&originHeight=336&originWidth=1006&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=42297&status=done&style=none&taskId=u04f6a9ab-58d4-4b7f-b337-49e9055a4ad&title=&width=824.5901445969563)
安装编译typescript器

```javascript
npm install typescript
```

编译器初始化

```javascript
tsc --init
```

编译

```javascript
tsc   编译
tsc  -w 自动编译
```

# 基础

   定义任何东西都要注明类型,调用任何东西都要检查类型
**创建变量时 要指定 变量类型**
**类型名首字母小写**

```typescript
let name:string = 'jiang'
```

## any 类型

## unknown 类型

它与any含义相同，表示类型不确定，可能是任意类型，但是它的使用有一些限制，不像any那样自由，可以视为严格版的any。
unknown类型的变量，不能直接赋值给其他类型的变量

```dotnetcli
let v:unknown = 123;

let v1:boolean = v; // 报错
let v2:number = v; // 报错
```

不能直接调用unknown类型变量的方法和属性。

```dotnetcli
let v1:unknown = { foo: 123 };
v1.foo  // 报错

let v2:unknown = 'hello';
v2.trim() // 报错

let v3:unknown = (n = 0) => n + 1;
v3() // 报错
```

## never 类型

“空类型”即该类型为空，不包含任何值。

## 联合类型

指的是多个类型组成的一个新类型，使用符号|表示

```dotnetcli
let x:string|number;

x = 123; // 正确
x = 'abc'; // 正确
```

## 交叉类型
指的多个类型组成的一个新类型，使用符号&表示
## type 命令
type命令用来定义一个类型的别名。

```dotnetcli
type Age = number;

let age:Age = 55;
```

## 断言

as + 变量类型

## 联合

 | 联合两个类型

定义类

```javascript
class Cat {
  id:string;
  url:string;
  height:number;
  width:number;
  constructor (id:string,url:string,height:number,width:number){
    this.id = id
    this.url = url
    this.height = height
    this.width = width
  }
}
```

## interface 接口

在接口里定义好属性名和属性值类型
在创建对象时多个对象就可以复用
关键字implements  实现接口

```typescript
interface CatType{
  id:string;
  url:string;
  height:number;
  width:number;
}

class Cat implements CatType{
  id: string;
  url: string;
  height: number;
  width: number;
  constructor (id:string,url:string,height:number,width:number){
    this.id = id
    this.url = url
    this.height = height
    this.width = width
  }
}
```

思路有数据时就创建一个tr标签 并且为tr 标签里添加多个td

```typescript
// 增删页面数据
class WebDisplay{
  static addData(data){
    const cat = new Cat (data.id,data.url,data.hight,data.width);
    const tableRow:HTMLTableRowElement = document.querySelector('tr')

    tableRow.innerHTML = `
    <td>${cat.id}</td>
    <td><img src="${cat.url}"></td>
    <td>${cat.height}</td>
    <td>${cat.width}</td>
    <td>${cat.url}</td>
    <td><a href="#">X</a></td>
    `;
    tableBody.appendChild(tableRow)

  }
}
```

1. public   允许在任何地方访问
2. 定义数据类型 data:CatType
3. 定义返回值 类型 :void
4. 给数子类型转换.toSring

## 泛型

1. 泛型是指定义函数、类、接口等时不指定具体类型，而是通过参数传递类型，让代码更加**通用**。
2. 泛型使用**尖括号<>**来声明，并且可以定义多个泛型参数。

## 占位符

1. 占位符是指在定义类型时使用一个特殊的标识符，表示该位置可以任意类型。
2. 占位符 一般用T标识

```typescript
// 接收数据
async function getJSON<T>(url:string):Promise<T> {
  const response:Response = await fetch(url)
  const json:Promise<T> =await response.json()
  return json
}
```

1. 这里我们都知道 json 变量返回的是一个promise, 只不过我们并不知道返回的promise里具体是什么内容, 因此我们可以用泛型来表示
2. 首先我们在函数名字后面加上尖括号和占位符的名称
3. 接着就可以声明json变量的类型为promise,
   1. 后面接上监括号, 尖括号里面就写上占位符的名称,
   2. 这里表示我们知道返回promise, 只不过我们先不着急定义promise返回内容里的类型而已
4. 最后我们return了这个jason变量出去, 因此我们还要为, 定义函数返回的内容类型 其实就是和这个json定义的类型一样了

在 JavaScript 中，**try...catch**语句用于捕获和处理异常。它的语法如下：

```javascript
try {
  // 可能会出现异常的代码
} catch (error) {
  // 处理异常的代码
}
```

```javascript
async function getData() {
 try {
  const json:CatType[] = await getJSON<CatType[]>(url)
  const data = json[0]
  WebDisplay.addData(data)
  
 } catch (error) {
  console.log(error);
  
 }
}
```

1. 在getJSON 中明确占位符内容 在尖括号里明确promise里返回什么内容
2. 因为是返回一个数组, 数组里面有个对象, 这个对象的类型我们前面已经定义好了接口, 也就是CatType, 因此我们可以直接CatType数组来写,
3. 写完以后还可以给json变量声明一下类型,

数组类型声明
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1685586264629-2b7b3d0a-e782-434f-89b7-64b4508c6e69.png#averageHue=%232d303b&clientId=u235ed95c-2969-4&from=paste&height=229&id=ubdbdf24a&originHeight=279&originWidth=1209&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=137885&status=done&style=none&taskId=ueb809e08-dea1-4b3f-9b75-79c82b067c5&title=&width=990.9835833178133)

- 如果数组里是一个对象, 那一般把这个对象的类型写在一个接口interface里, 再进行声明会更方便些

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1685586505627-8220d343-057b-4a48-b6bc-7962981b22e7.png#averageHue=%23282b37&clientId=u235ed95c-2969-4&from=paste&height=301&id=u2dd773a6&originHeight=367&originWidth=1090&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=135086&status=done&style=none&taskId=u05a7db2e-514c-40ad-a5cd-ae544b35f3a&title=&width=893.4426019986903)
