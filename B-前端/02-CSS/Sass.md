
# Sass

[Sass: Syntactically Awesome Style Sheets](https://sass-lang.com/)

## 什么是 CSS 预处理器？

CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题
例如你可以在 CSS 中使用**变量**、**简单的逻辑程序**、**函数**
可以让你的 CSS **更加简洁**、**适应性更强**、**可读性更佳**，**更易于代码的维护**等诸多好处

## Sass 和 SCSS 有什么区别？

Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：

1. 文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名
2. 语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(;)，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。

## Sass/SCSS 和纯 CSS 写法差很多吗？

**Sass 和 CSS 写法有差别：不带大括号**
**SCSS 和 CSS 写法无差别**

# 安装

## Sass的安装

sass引擎是用Ruby语言开发的，因此在安装 Sass 前，需要先安装Ruby
下面来讲一下 Windows 下的安装Sass的步骤。

### 第一步：安装Ruby（windows环境）

下载地址：[http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)
貌似网络很慢，不一定能下载成功~
安装时，记得勾选“环境变量”：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1681638674576-af1303e7-cd3e-4ac2-ab10-91d8202cbbe3.png#averageHue=%23eeecea&clientId=ua27c65ad-8578-4&id=FfpNI&originHeight=398&originWidth=513&originalType=binary&ratio=1&rotation=0&showTitle=false&size=42024&status=done&style=none&taskId=u0626163e-7212-4ab1-8d06-17d141dbbf6&title=)
安装完ruby之后，在命令行中输入`ruby -v`，查看ruby的的版本：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1681638674553-e9acbff1-4698-414b-b062-0c677819bf86.png#averageHue=%230e0d0d&clientId=ua27c65ad-8578-4&id=a991V&originHeight=162&originWidth=668&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24307&status=done&style=none&taskId=ubc867cc7-9d80-418f-b76d-4d91c5efcb2&title=)

### 第二步：安装 Sass

1、通过命令安装 Sass

```javascript
gem install sass
```

2.本地安装 Sass
可以到 [Rubygems](http://rubygems.org/)(<http://rubygems.org/>) 网站上将 [Sass 的安装包](http://rubygems.org/gems/sass)（<http://rubygems.org/gems/sass）下载下来，然后在命令终端输入：>

```javascript
gem install <手功输入安装的文件路径>
```

查看sass版本的命令为:

```
 sass -v
```

升级sass版本的命令为：

```
 gem update sass
```

删除

```javascript
gem uninstall sass
```

参考链接：[https://www.w3cplus.com/sassguide/install.html](https://www.w3cplus.com/sassguide/install.html)

# Sass 语法格式

Sass 最初语法格式 缩进要求非常严格。另外其不带有任何的分号和大括号
注：这种语法格式对于前端人员都不太容易接受，而且容易出错。

### 1、SCSS语法格式

SCSS 是 Sass 的新语法格式从外形上来判断他和 CSS 长得几乎是一模一样，代码都包裹在一对大括号里，并且末尾结束处都有一个分号。其文件名格式常常以“.scss”为扩展名。
“.sass”只能使用 Sass 老语法规则（缩进规则），“.scss”使用的是 Sass 的新语法规则，也就是 SCSS 语法规则（类似 CSS 语法格式）。

# Sass 编译

常常有人会问，使用 Sass 进行开发，那么是不是直接通过“<link>”引用“.scss”或“.sass”文件呢？
在项目中还是引用“.css”文件
Sass 只不过是做为一个预处理工具，提前帮你做事情，只有你需要时候，他才有攻效。
因为 Sass 开发之后，要让 Web 页面能调用 Sass 写好的东西，就得有这么一个过程，这个过程就称之为 Sass 编译过程。Sass 的编译有多种方法：
命令编译
GUI工具编译  

1. Koala ([http://koala-app.com/](http://koala-app.com/))
2. Compass.app（[http://compass.kkbox.com/](http://compass.kkbox.com/)）

自动化编译

## Sass不同样式风格的输出方法

1. **嵌套输出方式 nested**

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1681642398479-aad8d9f3-d8ea-4cd5-85be-31e410229f12.png#averageHue=%23faf9f8&clientId=ua27c65ad-8578-4&from=paste&id=u1b59ec66&originHeight=296&originWidth=488&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=50331&status=done&style=none&taskId=u905c01e3-b93e-4c80-b093-bfbab50dcaf&title=)

2. **展开输出方式 expanded**

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1681642427300-5b65881d-6950-4326-b887-14ccfaa11f8a.png#averageHue=%23f9f8f6&clientId=ua27c65ad-8578-4&from=paste&id=ubf5076bc&originHeight=281&originWidth=485&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=55842&status=done&style=none&taskId=u0ee009d7-6d66-4d00-8922-ce40f09e777&title=)

3. **紧凑输出方式 compact**

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1681642459586-c7700781-e9fe-4362-b64d-4e0e645bec19.png#averageHue=%23faf9f8&clientId=ua27c65ad-8578-4&from=paste&id=u35e83de6&originHeight=299&originWidth=802&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=60825&status=done&style=none&taskId=u342b3101-378a-4959-9c47-836f47d192f&title=)

4. **压缩输出方式 compressed**

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1681642487857-4a6f4f71-1332-47bf-8af7-c533e542c2e4.png#averageHue=%23faf9f8&clientId=ua27c65ad-8578-4&from=paste&id=ub961b43b&originHeight=401&originWidth=666&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=61955&status=done&style=none&taskId=u56b284a3-1ab9-4089-9cb3-fd420d24a08&title=)

# Sass的基本特性

## 声明变量

定义变量的语法：
在有些编程语言中（如，JavaScript）声明变量都是使用关键词“var”开头，但是在 Sass 不使用这个关键词，而是使用大家都喜欢的美元符号“$”开头。我想用一张图来解释，我一直坚信，一图胜千言万语：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1681642729173-b79c51d0-e86c-495e-9cbc-04087f627f14.png#averageHue=%23b8d9ef&clientId=ua27c65ad-8578-4&from=paste&id=uc2d8c39d&originHeight=307&originWidth=787&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=391833&status=done&style=none&taskId=u8956ae3a-ffdc-4927-854f-655b4b855ef&title=)

### 默认变量

sass 的默认变量仅需要在值后面加上 !default 即可。
sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可。

```javascript
$baseLineHeight: 2;
$baseLineHeight: 1.5 !default;
body{
    line-height: $baseLineHeight; 
}

编译后的css代码：
body{
    line-height:2;
}
```

### 局部变量和全局变量

```javascript
//SCSS
$color: orange !default;//定义全局变量(在选择器、函数、混合宏...的外面定义的变量为全局变量)
.block {
  color: $color;//调用全局变量
}
em {
  $color: red;//定义局部变量
  a {
    color: $color;//调用局部变量
  }
}
span {
  color: $color;//调用全局变量
}
```

## 嵌套

Sass 的嵌套分为三种：

### 选择器嵌套

```javascript
<header>
<nav>
    <a href=“##”>Home</a>
    <a href=“##”>About</a>
    <a href=“##”>Blog</a>
</nav>
<header>

//css:
nav a {
  color:red;
}

header nav a {
  color:green;
}

//Sass
nav {
  a {
    color: red;

    header & {
      color:green;
    }
  }  
}
```

### 属性嵌套

```javascript
.box {
    border-top: 1px solid red;
    border-bottom: 1px solid green;
}

在 Sass 中我们可以这样写：
.box {
  border: {
   top: 1px solid red;
   bottom: 1px solid green;
  }
}

```

### 伪类嵌套

其实伪类嵌套和属性嵌套非常类似，只不过他需要借助`&`符号一起配合使用

```javascript
.clearfix{
&:before,
&:after {
    content:"";
    display: table;
  }
&:after {
    clear:both;
    overflow: hidden;
  }
}

编译出来的 CSS：

clearfix:before, .clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
```

## 混合宏

当你的样式变得越来越复杂，需要重复使用大段的样式时，使用变量就无法达到我们目了。这个时候 Sass 中的混合宏就会变得非常有意义
在 Sass 中，使用“@mixin”来声明一个混合宏

```javascript
@mixin border-radius{
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
```

其中 @mixin 是用来声明混合宏的关键词，有点类似 CSS 中的 @media、@font-face 一样。border-radius 是混合宏的名称。大括号里面是复用的样式代码。

### 带参数混合宏

```javascript
@mixin border-radius($radius:5px){
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
```

### 复杂的混合宏

你可以在大括号里面写上带有逻辑关系

```javascript
@mixin box-shadow($shadow...) {
  @if length($shadow) >= 1 {
    @include prefixer(box-shadow, $shadow);
  } @else{
    $shadow:0 0 4px rgba(0,0,0,.3);
    @include prefixer(box-shadow, $shadow);
  }
}
```

### 调用混合宏

在 Sass 中通过 @mixin 关键词声明了一个混合宏，那么在实际调用中，其匹配了一个关键词“@include”来调用声明好的混合宏。
例如在你的样式中定义了一个圆角的混合宏“border-radius”:

```javascript
@mixin (声明) border-radius{
    -webkit-border-radius: 3px;
    border-radius: 3px;
}
在一个按钮中要调用定义好的混合宏“border-radius”，可以这样使用：

button {
    @include (调用) border-radius;
}

这个时候编译出来的 CSS:
button {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

### 传参

Sass 的混合宏有一个强大的功能，可以传参，那么在 Sass 中传参主要有以下几种情形：

#### 传一个不带值的参数

```javascript
@mixin border-radius($radius){
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
.box {
  @include border-radius(3px);
}

编译出来的 CSS:
.box {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

#### 传一个带值的参数

```javascript
@mixin border-radius($radius:3px){
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
.btn {
  @include border-radius;
}

编译出来的 CSS:
.btn {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

#### 传多个参数

```javascript
@mixin center($width,$height){

.box-center {
  @include center(500px,300px);
}
  有一个特别的参数“…”。当混合宏传的参数过多之时，可以使用参数来替代，如：
@mixin box-shadow($shadows...){
```

### 混合宏的不足

混合宏在实际编码中给我们带来很多方便之处，特别是对于复用重复代码块。但其最大的不足之处是会生成冗余的代码块。比如在不同的地方调用一个相同的混合宏时。如：

```javascript
@mixin border-radius{
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

.box {
  @include border-radius;
  margin-bottom: 5px;
}

.btn {
  @include border-radius;
}
示例在“.box”和“.btn”中都调用了定义好的“border-radius”混合宏。先来看编译出来的 CSS：
.box {
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 5px;
}

.btn {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

上例明显可以看出，Sass 在调用相同的混合宏时，并不能智能的将相同的样式代码块合并在一起。这也是 Sass 的混合宏最不足之处。

## 继承

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1681645555088-15389b50-ada3-4be1-9e64-1a77003ab8b0.png#averageHue=%23f7f6f6&clientId=ua27c65ad-8578-4&from=paste&id=u3cde16a7&originHeight=449&originWidth=791&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=244191&status=done&style=none&taskId=u553a3582-a4d1-4be8-8e89-d7fee312b9f&title=)
图中代码显示“.col-sub .block li,.col-extra .block li” 继承了 “.item-list ul li”选择器的 “padding : 0;” 和 “ul li” 选择器中的 “list-style : none outside none;”以及 * 选择器中的 “box-sizing:inherit;”。

在 Sass 中也具有继承一说，也是继承类中的样式代码块。在 Sass 中是通过关键词 “@extend”来继承已存在的类样式块，从而实现代码的继承

```javascript
//SCSS
.btn {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
  @extend .btn;
}

.btn-second {
  background-color: orange;
  color: #fff;
  @extend .btn;
}
//CSS
.btn, .btn-primary, .btn-second {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}
```

## 占位符 %

% 声明的代码，如果不被 @extend 调用的话，不会产生任何代码。来看一个演示：

```javascript
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}
只有通过 @extend 调用才会产生代码：
//SCSS
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}

.btn {
  @extend %mt5;
  @extend %pt5;
}

.block {
  @extend %mt5;

  span {
    @extend %pt5;
  }
}

//CSS
.btn, .block {
  margin-top: 5px;
}

.btn, .block span {
  padding-top: 5px;
}
```

通过 @extend 调用的占位符，编译出来的代码会将相同的代码合并在一起。这也是我们希望看到的效果，也让你的代码变得更为干净。

# 混合宏 VS 继承 VS 占位符

什么时候用混合宏，什么时候用继承，什么时候使用占位符？
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1681646070278-d9b79400-7398-4ac4-8384-3b4dc86c054c.png#averageHue=%23d8d7d7&clientId=ua27c65ad-8578-4&from=paste&id=u1527bcef&originHeight=364&originWidth=794&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=36443&status=done&style=none&taskId=u91d1e7e8-7868-4fe0-9bb2-0b1a5ce8129&title=)

## 插值#{}

使用 CSS 预处理器语言的一个主要原因是想使用 Sass 获得一个更好的结构体系。比如说你想写更干净的、高效的和面向对象的 CSS。Sass 中的插值(Interpolation)就是重要的一部分。让我们看一下下面的例子：

```javascript
$properties: (margin, padding);
@mixin set-value($side, $value) {
    @each $prop in $properties {
        #{$prop}-#{$side}: $value;
    }
}
.login-box {
    @include set-value(top, 14px);
}

它可以让变量和属性工作的很完美，上面的代码编译成 CSS：
.login-box {
    margin-top: 14px;
    padding-top: 14px;
}
```

## Sass注释

1、类似 CSS 的注释方式，使用 ”/*”开头，结属使用 ”*/ ”
2、类似 JavaScript 的注释方式，使用“//”
两者区别，前者会在编译出来的 CSS 显示，后者在编译出来的 CSS 中不会显示

## [Sass]数据类型

Sass 和 JavaScript 语言类似，也具有自己的数据类型，在 Sass 中包含以下几种数据类型：

- 数字: 如，1、 2、 13、 10px；
- 字符串：有引号字符串或无引号字符串，如，"foo"、 'bar'、 baz；
- 颜色：如，blue、 #04a3f9、 rgba(255,0,0,0.5)；
- 布尔型：如，true、 false；
- 空值：如，null；
- 值列表：用空格或者逗号分开，如，1.5em 1em 0 2em 、 Helvetica, Arial, sans-serif。

## [Sass]字符串

支持 CSS 的两种字符串类型：
有引号字符串 (quoted strings)，如 "Lucida Grande" 、'[http://sass-lang.com'](http://sass-lang.com')；
无引号字符串 (unquoted strings)，如 sans-serifbold。

## [Sass]值列表

所谓值列表 (lists) 是指 Sass 如何处理 CSS 中：

```javascript
margin: 10px 15px 0 0
```

或者：

```javascript
font-face: Helvetica, Arial, sans-serif
```

像上面这样通过空格或者逗号分隔的一系列的值。
事实上，独立的值也被视为值列表——只包含一个值的值列表。
Sass列表函数（Sass list functions）赋予了值列表更多功能（Sass进级会有讲解）：

1. nth函数（nth function） 可以直接访问值列表中的某一项；
2. join函数（join function） 可以将多个值列表连结在一起；
3. append函数（append function） 可以在值列表中添加值；
4. @each规则（@each rule） 则能够给值列表中的每个项目添加样式。

# Sass运算

程序中的运算是常见的一件事情，但在 CSS 中能做运算的，到目前为止仅有 calc() 函数可行。但在 Sass 中，运算只是其基本特性之一。

## 加法/减法

加法运算是 Sass 中运算中的一种，在变量或属性中都可以做加法运算。如：

```javascript
.box {
  width: 20px + 8in;
}

编译出来的 CSS:
.box {
  width: 788px;
}

但对于携带不同类型的单位时，在 Sass 中计算会报错，如下例所示：
.box {
  width: 20px + 1em;
}
编译的时候，编译器会报错：“Incompatible units: 'em' and ‘px'.”
```

## 乘法

Sass 中的乘法运算和前面介绍的加法与减法运算还略有不同。虽然他也能够支持多种单位（比如 em ,px , %），但当一个单位同时声明两个值时会有问题。比如下面的示例：

```javascript
.box {
  width:10px * 2px;  
}
编译的时候报“20px*px isn't a valid CSS value.”错误信息。

如果进行乘法运算时，两个值单位相同时，只需要为一个数值提供单位即可。上面的示例可以修改成：
.box {
  width: 10px * 2;
}

编译出来的 CSS:
.box {
  width: 20px;
}

但对于携带不同类型的单位时，在 Sass 中计算会报错
```

## 除法

Sass 的乘法运算规则也适用于除法运算。不过除法运算还有一个特殊之处。众所周知“**/**”符号在 CSS 中已做为一种符号使用。因此在 Sass 中做除法运算时，直接使用“/”符号做为除号时，将不会生效，编译时既得不到我们需要的效果，也不会报错。一起先来看一个简单的示例：
给运算的外面添加一个小括号( )

```javascript
.box {
  width: (100px / 2);  
}

编译出来的 CSS 如下：
.box {
  width: 50px;
}
```

除了上面情况带有小括号，“/”符号会当作除法运算符之外，如果“/”符号在已有的数学表达式中时，也会被认作除法符号。如下面示例：

```javascript
.box {
  width: 100px / 2 + 2in;  
}
编译出来的CSS：

.box {
  width: 242px;
}
```

另外，在 Sass 除法运算中，当用变量进行除法运算时，“/”符号也会自动被识别成除法，如下例所示：

```javascript
$width: 1000px;
$nums: 10;

.item {
  width: $width / 10;  
}

.list {
  width: $width / $nums;
}
编译出来的CSS:

.item {
  width: 100px;
}

.list {
  width: 100px;
}
```

综合上述，”/  ”符号被当作除法运算符时有以下几种情况：
•    如果数值或它的任意部分是存储在一个变量中或是函数的返回值。
•    如果数值被圆括号包围。
•    如果数值是另一个数学表达式的一部分。

```javascript
//SCSS
p {
  font: 10px/8px;             // 纯 CSS，不是除法运算
  $width: 1000px;
  width: $width/2;            // 使用了变量，是除法运算
  width: round(1.5)/2;        // 使用了函数，是除法运算
  height: (500px/2);          // 使用了圆括号，是除法运算
  margin-left: 5px + 8px/2px; // 使用了加（+）号，是除法运算
}

编译出来的CSS
p {
  font: 10px/8px;
  width: 500px;
  height: 250px;
  margin-left: 9px;
 }
```

Sass 的除法运算还有一个情况。我们先回忆一下，在乘法运算时，如果两个值带有相同单位时，做乘法运算时，出来的结果并不是我们需要的结果。但在除法运算时，如果两个值带有相同的单位值时，除法运算之后会得到一个不带单位的数值。如下所示：

```javascript
.box {
  width: (1000px / 100px);
}
编译出来的CSS如下：
.box {
  width: 10;
}
```

## 变量计算

```javascript
$content-width: 720px;
$sidebar-width: 220px;
$gutter: 20px;

.container {
  width: $content-width + $sidebar-width + $gutter;
  margin: 0 auto;
}

编译出来的CSS
.container {
  width: 960px;
  margin: 0 auto;
}
```

## 颜色运算

所有算数运算都支持颜色值，并且是分段运算的。也就是说，红、绿和蓝各颜色分段单独进行运算。如：

```javascript
p {
  color: #010203 + #040506;
}
```

## 字符运算

在 Sass 中可以通过加法符号“+”来对字符串进行连接。例如：

```javascript
$content: "Hello" + "" + "Sass!";
.box:before {
  content: " #{$content} ";
}

编译出来的CSS：
.box:before {
  content: " Hello Sass! ";
}
```

还可以直接通过 +，把字符连接在一起：

```javascript
div {
  cursor: e + -resize;
}

编译出来的CSS:
div {
  cursor: e-resize;
}
```

字符串 通过 + 拼接 结果转换为前一个字符串形式

```javascript
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}

编译出来的 CSS：
p:before {
  content: "Foo Bar";
  font-family: sans-serif; }
```
