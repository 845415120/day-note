# Java基础

<https://www.liaoxuefeng.com/wiki/1252599548343744>

## 20230803

## 安装 JDK

## 安装 IDEA

## 激活IDEA

## Java 版本差别

- Java SE(Java Platform,Standard Edition)**标准版本**。
- Java EE (Java Platform，Enterprise Edition)，java 的企业版本
- Java ME(Java Platform，Micro Edition)，java的微型版本。
![alt](https://pica.zhimg.com/v2-a048d67888923332afa8998217a82583_r.jpg?source=1940ef5c)

## Hello World

点击 src——>new——>package，创建一个文件包，并给包命名
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230803/image.27pjwulx2am8.png)
给包命名
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230803/image.1ntfa1v20xy8.png)

在包下面创建 Java 类文件，点击包名——>New——>Java Class;

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230803/image.5ggs8rc23ko0.webp)

编写helloworld
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230803/image.55q0n8g5nlc0.webp)

运行 Java 文件
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230803/image.zku3zw2ncow.webp)

## Java 基础语法

##### **Java基本的程序结构**

```Java
/**
 * 可以用来自动创建文档的注释
 */
public class Hello {
    public static void main(String[] args) {
        // 向屏幕输出文本:
        System.out.println("Hello, world!");
        /* 多行注释开始
        注释内容
        注释结束 */
    }
} // class定义结束
```

它定义了一个名为Main的公共类，类中包含一个名为main的公共静态方法。main方法是Java程序的入口点，当程序运行时，会从这个方法开始执行。

##### **标识符**

命名规范
大写英文字母开头后面接字母，数字和下划线的组合

##### **关键字**

是被Java语言赋予特殊含义，具有专门用途的单词，比如class，int，double均为Java已经预设好的;组成关键字的全部是**小写字母**,注意String不是关键字;

##### **注释**

- 单行//
- 多行 /**/
- 文档注释  /** */

### 数据类型

Java是强类型语言，对于每一种数据都定义了明确的具体数据类型，变量必须要有明确的类型，什么类型的变量装载什么类型的数据。
基本数据类型 :CPU可以直接进行运算的类型

- 整数(byte、short、**int**、long)
- 浮点型(float、double)
- 字符类型（char）
- 布尔类型(boolean)

**Java基本数据类型占用的字节数**
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230803/image.3cwtc38qcja0.png)

引用数据类型:
除了上述基本类型的变量，剩下的都是引用类型

### **变量**

变量必须先定义后使用
`int x = 1;`
**变量使用**
变量可以重新赋值,还可以赋值给其他变量

```Java
public class Main {
  public static void main (String[]args){
int i = 10;
System.out.println("i")
}
}
```

#### **常量**

定义变量的时候，如果加上final修饰符，这个变量就变成了常量：

```java
final int x = 1
```

常量在定义时进行初始化后就不可再次赋值

## 运算

### 整型运算

#### **遵循四则运算规则**

#### **溢出**

整数由于存在范围限制，如果计算结果超出了范围，就会产生溢出，而溢出不会出错
`System.out.println(sum); // -2147483641`
要解决溢出，可以把int换成long类型

#### **自增/自减**

++n表示先加1再引用n，n++表示先引用n再加1

#### **移位运算**

在计算机中，整数总是以二进制的形式表示。例如，int类型的整数7使用4字节表示的二进制如下：
`00000000 0000000 0000000 00000111`
可以对整数进行移位运算。对整数7左移1位将得到整数14，左移两位将得到整数28：

```Java
int n = 7;       // 00000000 00000000 00000000 00000111 = 7
int a = n << 1;  // 00000000 00000000 00000000 00001110 = 14
int b = n << 2;  // 00000000 00000000 00000000 00011100 = 28
int c = n << 28; // 01110000 00000000 00000000 00000000 = 1879048192
int d = n << 29; // 11100000 00000000 00000000 00000000 = -536870912
```

左移29位时，由于最高位变成1，因此结果变成了负数。

还有一种无符号的右移运算，使用`>>>`，它的特点是不管符号位，右移后高位总是补0，因此，对一个负数进行`>>>`右移，它会变成正数，原因是最高位的1变成了0：

对byte和short类型进行移位时，会首先转换为int再进行位移。
仔细观察可发现，左移实际上就是不断地×2，右移实际上就是不断地÷2。

#### **位运算**

位运算是按位进行与、或、非和异或的运算。

& 与运算的规则是，必须两个数同时为1，结果才为1：
| 或运算的规则是，只要任意一个为1，结果就为1：
~ 非运算的规则是，0和1互换：
^ 异或运算的规则是，如果两个数不同，结果为1，否则为0：

#### 运算优先级

在Java的计算表达式中，运算优先级从高到低依次是：

- `()`
- `! ~ ++ --`
- `* / %`
- `+ -`
- `<< >> >>>`
- `&`
- `|`
- `+=` `-=` `*=` `/=`
只需要加括号就可以保证运算的优先级正确。

#### 类型自动提升

在运算过程中，如果参与运算的两个数类型不一致，那么计算结果为较大类型的整型

例如，short和int计算，结果总是int，原因是short首先自动被转型为int：

```Java
public class Main {
    public static void main(String[] args) {
        short s = 1234;
        int i = 123456;
        int x = s + i; // s自动转型为int
        short y = s + i; // 编译错误!
    }
}

```

#### 强制转型

强制转型使用`(类型)`，例如，将int强制转型为short：
`int i = 12345;`
`short s = (short) i; // 12345`

### 浮点数运算

浮点数运算和整数运算相比，**只能进行加减乘除这些数值计算，不能做位运算和移位运算**。

浮点数常常无法精确表示
浮点数0.1在计算机中就无法精确表示，因为十进制的0.1换算成二进制是一个无限循环小数

#### 类型提升

如果参与运算的两个数其中一个是整型，那么整型可以自动提升到浮点型：

#### 溢出

整数运算在除数为0时会报错，而浮点数运算在除数为0时，不会报错，但会返回几个特殊值

- NaN表示Not a Number
- Infinity表示无穷大
- -Infinity表示负无穷大

#### 强制转型

可以将浮点数强制转型为整数
`int n1 = (int) 12.3; // 12`

#### 布尔运算

布尔运算是一种关系运算，包括以下几类：

- 比较运算符：>，>=，<，<=，==，!=
- 与运算 &&
- 或运算 ||
- 非运算 !
优先级 ! > 比较 > `=比较` >与&& > 或||

#### 短路运算

如果一个布尔运算的表达式能提前确定结果，则后续的计算不再执行
`boolean result = true || (5 / 0 > 0); // true
`
对于||运算，只要能确定第一个值为true，后续计算也不再进行，而是直接返回true：

#### 三元运算符

`b ? x : y`

## 字符和字符串

在Java中，字符和字符串是两个不同的类型。
**字符类型** char是基本数据类型
一个char保存一个Unicode字符：
还可以直接用转义字符\u+Unicode编码来表示一个字符：
**字符串类型**
字符串类型String是引用类型
我们用双引号"..."表示字符串

### 转义字符 `\`

`"`字符怎么表示
`String s = "abc\"xyz"; // 包含7个字符: a, b, c, ", x, y, z`
常见的转义字符包括：

```Java
\" 表示字符"
\' 表示字符'
\\ 表示字符\
\n 表示换行符 
\r 表示回车符
\t 表示Tab
\u#### 表示一个Unicode编码的字符
```

### 字符串连接

`+`连接任意字符串和其他数据类型,会将其他数据类型先自动转型为字符串

### 多行字符串

字符串可以用`"""..."""`表示多行字符串

```Java
 String s = """
                   SELECT * FROM
                     users
                   WHERE id > 100
                   ORDER BY name DESC
                   """;
```

### 不可变特性

重要特点，字符串不可变
   `String s = "hello";`
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230803/image.484z816ev8i0.webp)
 `s = "world";`
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230803/image.12z86f1yy0q8.webp)
原来的字符串"hello"还在，只是我们无法通过变量s访问它而已

### 空值null

引用类型的变量可以指向一个空值null，它表示不存在，即该变量不指向任何对象

## 流程控制

### 输出

`System.out.println()`

**占位符** 说明
%d 格式化输出整数
%x 格式化输出十六进制整数
%f 格式化输出浮点数
%e 格式化输出科学计数法表示的浮点数
%s 格式化字符串

连续两个%%表示一个%字符本身
//键盘录入,命令行
**输入** import
键盘输入
**步骤1**:导包，需要写在class的上面
`import java.util.Scanner;`
**步骤2**:创建对象
`Scanner sc = new Scanner(System.in);`
    只有sc可以改变，其他属于固定格式
**步骤3**:使用变量接收数据
`int i = sc.nextInt ();`
只有i变量可以改变，其他属于固定格式

### if判断

```Java
if (条件) {
    // 条件满足时执行
}else{
   //不满足时执行
}

```

### 判断引用类型相等

`==` 是否指向同一个对象
要判断引用类型的变量内容是否相等，必须使用`equals()`方法：

```Java
public class Main {
    public static void main(String[] args) {
        String s1 = "hello";
        String s2 = "HELLO".toLowerCase();
        System.out.println(s1);
        System.out.println(s2);
        if (s1.equals(s2)) {
            System.out.println("s1 equals s2");
        } else {
            System.out.println("s1 not equals s2");
        }
    }
}

```

### 练习

BMI = 体重(kg)除以身高(m)的平方
BMI结果：

- 过轻：低于18.5
- 正常：18.5-25
- 过重：25-28
- 肥胖：28-32
- 非常肥胖：高于32

```Java

package if_;
import java.util.Scanner;
public class demo {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入体重:");
        double kg = sc.nextDouble();
        System.out.println("请输入身高:");
        double m = sc.nextDouble();

        if ( kg >0 && m>0){
            double BMI = kg/(m*m);
            if (BMI<18.5){
                System.out.println("过轻");
            }else if (BMI>=18.5 && BMI<25){
                System.out.println("正常");
            }else if (BMI>=25 && BMI<28){
                System.out.println("过重");
            }else if (BMI>=28 && BMI<32){
                System.out.println("肥胖");
            }else if(BMI > 32){
                System.out.println("非常肥胖");
            }
        }
    }

}


```

### switch多重选择

语法:

```Java
switch (option) {
case 3:
    ...
    break;
case 2:
    ...
    break;
case 1:
    ...
    break;
}
```

**yield**
如果需要复杂的语句，我们也可以写很多语句，放到{...}里，然后，用yield返回一个值作为switch语句的返回值：

### 练习

使用switch实现一个简单的石头、剪子、布游戏。

```Java
package _switch;
import java.util.Scanner;


public class demo {
    public static void main(String[] args) {
        System.out.println("请选择 :");

        System.out.println(" 1: 石头");

        System.out.println(" 2: 剪刀");

        System.out.println(" 3: 布");

        Scanner scanner = new Scanner(System.in);
        // 用户输入:
        while(true){
            int choice = scanner.nextInt();
            if (choice>=1 && choice<=3) {
                int random =(int)(1+Math.random() * 3);
                int result = choice-random;
                if (result == 2 || result == -1) {
                    System.out.println("你赢啦");
                } else if (result == -2 || result == 1) {
                    System.out.println("电脑 胜出");
                } else if (result == 0) {
                    System.out.println("eqre");
                } else {
                    System.out.println("input error");
                }
            } else {
                System.out.println("input error");
                continue;
            }
            }

            }
    }


```

### while循环

```Java
while (条件表达式) {
    循环语句
}
// 继续执行后续代码
```

### do while循环

```Java
do {
    执行循环语句
} while (条件表达式);
```

do while循环先执行循环，再判断条件；

do while循环会至少执行一次。

### for循环

```Java
for (初始条件; 循环检测条件; 循环后更新计数器) {
    // 执行语句
}
```

### break和continue

break在循环过程中，可以使用break语句跳出当前循环
continue则是提前结束本次循环，直接继续执行下次循环。

### Random

生成随机数
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230803/image.2eojd2y71uzo.webp)

## 数组类型

java数组特点:

- 数组一旦创建后，大小就不可改变。
- 数组所有元素初始化为默认值，整型都是0，浮点型是0.0，布尔型是false；

### 定义数组

定义数组 : new `类型[]`
`int[] ns = new int[5];`

`数组变量.length`获取数组大小

定义数组时直接指定初始化的元素
`int[] ns = new int[] { 68, 79, 91, 85, 62 };`
还可以进一步简写为：
`int[] ns = { 68, 79, 91, 85, 62 };`
Java的数组有几个特点：

### 字符串数组

定义一个字符串数组：

```Java
String[] names = {
    "ABC", "XYZ", "zoo"
};
```

## 数组操作

### 遍历数组

通过for循环就可以遍历数组

```Java
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        for (int i=0; i<ns.length; i++) {
            int n = ns[i];
            System.out.println(n);
        }
    }
}

```

### 求数组最大值

```Java
public static void main(string[] args){
int [] arr ={12,451 98,73 ,60};
// 1. 假设数组中的第一个元素为最大值
int max = arr[0]
// 2.遍历数组，获取每一个元素，准备进行比较
for ( int i=1;i<arr.length;i++){
// 3.如果比较的过程中，出现了Hmax更大的，max 记录更大的
if(arr[i]>arr[0]){
max = arr[i]
}
}
System.out.printIn(max);
}
```

### 数组排序

// 冒泡排序

```Java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] ns = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 36 };
        // 排序前:
        System.out.println(Arrays.toString(ns));
        for (int i = 0; i < ns.length - 1; i++) {
            for (int j = 0; j < ns.length - i - 1; j++) {
                if (ns[j] > ns[j+1]) {
                    // 交换ns[j]和ns[j+1]:
                    int tmp = ns[j];
                    ns[j] = ns[j+1];
                    ns[j+1] = tmp;
                }
            }
        }
        // 排序后:
        System.out.println(Arrays.toString(ns));
    }
}


```

## 命令行参数

Java程序的入口是main方法，而main方法可以接受一个命令行参数，它是一个String[]数组。

这个命令行参数由JVM接收用户输入并传给main方法：

## Number & Math 类

一般地，当需要使用数字的时候，我们通常使用内置数据类型，如：byte、int、long、double 等。

```dotnetcli
int a = 5000;
float b = 13.65f;
byte c = 0x4a;
```

然而，在实际开发过程中，我们经常会遇到需要使用对象，而不是内置数据类型的情形。为了解决这个问题，Java 语言为每一个内置数据类型提供了对应的包装类。
所有的包装类（Integer、Long、Byte、Double、Float、Short）都是抽象类 Number 的子类。

## Math 类

```dotnetcli
public class Test {  
    public static void main (String []args)  
    {  
        System.out.println("90 度的正弦值：" + Math.sin(Math.PI/2));  
        System.out.println("0度的余弦值：" + Math.cos(0));  
        System.out.println("60度的正切值：" + Math.tan(Math.PI/3));  
        System.out.println("1的反正切值： " + Math.atan(1));  
        System.out.println("π/2的角度值：" + Math.toDegrees(Math.PI/2));  
        System.out.println(Math.PI);  
    }  
}
```

## Character 类

Character 类用于对单个字符进行操作。

Character 类在对象中包装一个基本类型 char 的值

```dotnetcli
char ch = 'a';
 
// Unicode 字符表示形式
char uniChar = '\u039A'; 
 
// 字符数组
char[] charArray ={ 'a', 'b', 'c', 'd', 'e' };
```

## String 类 0818

API 应用程序接口
java API  JDK中提供的各种功能的Java类

### 创建字符串

String str = "Runoob";
String str2=new String("Runoob");
字符串长度 length() 方法
连接字符串  concat() 方法

## StringBuilder 类

当对字符串进行修改的时候，需要使用 StringBuffer 和 StringBuilder 类。
和 String 类不同的是，StringBuffer 和 StringBuilder 类的对象能够被多次的修改，并且不产生新的未使用对象。

![alt](https://www.runoob.com/wp-content/uploads/2013/12/java-string-20201208.png)
在使用 StringBuffer 类时，每次都会对 StringBuffer 对象本身进行操作，而不是生成新的对象，所以如果需要对字符串进行修改推荐使用 StringBuffer。
由于 StringBuilder 相较于 StringBuffer 有速度优势，所以多数情况下建议使用 StringBuilder 类。

```dotnetcli
public class RunoobTest{
    public static void main(String args[]){
        StringBuilder sb = new StringBuilder(10);
        sb.append("Runoob..");
        System.out.println(sb);  
        sb.append("!");
        System.out.println(sb); 
        sb.insert(8, "Java");
        System.out.println(sb); 
        sb.delete(5,8);
        System.out.println(sb);  
    }
}
```

![alt](https://www.runoob.com/wp-content/uploads/2013/12/2021-03-01-java-stringbuffer.svg)

## Date  日期时间

Date(long millisec)
### 获取当前日期时间
Java中获取当前日期和时间很简单，使用 Date 对象的 toString() 方法来打印当前日期和时间，如下所示：

```dotnetcli
import java.util.Date;
  
public class DateDemo {
   public static void main(String[] args) {
       // 初始化 Date 对象
       Date date = new Date();
        
       // 使用 toString() 函数显示日期时间
       System.out.println(date.toString());
   }
}
Mon May 04 09:51:52 CDT 2013
```

### 日期比较
Java使用以下三种方法来比较两个日期：

- 使用 getTime() 方法获取两个日期（自1970年1月1日经历的毫秒数值），然后比较这两个值。
- 使用方法 before()，after() 和 equals()。例如，一个月的12号比18号早，则 new Date(99, 2, 12).before(new Date (99, 2, 18)) 返回true。
- 使用 compareTo() 方法，它是由 Comparable 接口定义的，Date 类实现了这个接口。

# 面向对象编程基础

## class和instance

class是一种对象模版，它定义了如何创建实例，因此，class本身就是一种数据类型：
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230804/image.609kcua0e180.png)

而instance是对象实例，instance是根据class创建的实例，可以创建多个instance，每个instance类型相同，但各自属性可能不相同：
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230804/image.6nmcl2qfxe40.webp)

**定义class**

在Java中，创建一个类，例如，给这个类命名为Person，就是定义一个class：

```Java
class Person {
    public String name;
    public int age;
}
```

**创建实例**  

`Person ming = new Person();`

## 方法

方法的定义格式:

```Java
修饰符 方法返回类型 方法名(方法参数列表) {
    若干方法语句;
    return 方法返回值;
}

```

```Java
public static void 方法 (){
方法体
}
```

方法的调用格式:
方法名();
**this变量**
在方法内部，可以使用一个隐含的变量this，它始终指向当前实例。

```Java
package C_lass;

public class Student {
    private String name;
    private int age;
    //    构造方法
    public Student(){

    }
    public Student(String name, int age){
        this.name = name;
        this.age = age;
    }
//成员方法
    public void setName(String name) {
        this.name = name;
    }
    public String getName(){
        return name;
    }

    public void  setAge(int age){
       this.age =age;
    }
    public int getAge(){
        return  age;
    }
    public void show(){
        System.out.println(name + "," + age);
    }

}

```

```Java
package C_lass;

public class class_demo {

   public static void main(String[] args){
       Student s1 = new Student();
      s1.setName("jiang");
       s1.setAge(24);
       s1.show();
   }
}

```

## 构造方法 new

## 方法重载

## 继承


## 集合基础-V10.0
## 集合和数组的区别对比
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230821/image.75uey6u366c0.png)

集合类的特点：提供一种存储空间可变的存储模型，存储都的数据容量可以发生改变

- ·集合和数组的区别：
  - ·共同点：都是存储数据的容器
  - ·不同点：数组的容量是固定的，集合的容量是可变的

### 集合类
ArrayList 

### git  idea git


## 学生管理系统


```
package 学生管理系统.text;

import java.util.Scanner;

public class Manager {
    public static void main(String[] args) {
        // 2.键盘录入
        Scanner sc = new Scanner(System.in);
       lo: while(true){
            //1.搭建主界面
            System.out.println("______欢迎来到学生管理系统_______");
            System.out.println("1.添加学生");
            System.out.println("2.删除学生");
            System.out.println("3.修改学生");
            System.out.println("4.查看学生");
            System.out.println("5.退出");
            System.out.println("请输入您的选择");


            String choice =  sc.next();

            switch(choice){
                case "1":
                    System.out.println("添加学生");
                    break;
                case "2":
                    System.out.println("删除学生");
                    break;
                case "3":
                    System.out.println("修改学生");
                    break;
                case "4":
                    System.out.println("查看学生");
                    break;
                case "5":
                    System.out.println("感谢使用");
                    break lo;
                default:
                    System.out.println("输入有误");
                    break;
            }

        }


    }
}



## 继承
继承的概念
- 继承是面向对象三大特征之一，可以使得子类具有父类的属性和方法，还可以在子类中重新定义，以及追加属性和方法
实现继承的格式
- 继承通过extends实现
- 格式：class 子类 extends 父类 { } 
  - 举例：class Dog extends Animal { }
```
public class Granddad {

    public void drink() {
        System.out.println("爷爷爱喝酒");
    }

}

public class Father extends Granddad {

    public void smoke() {
        System.out.println("爸爸爱抽烟");
    }

}

public class Mother {

    public void dance() {
        System.out.println("妈妈爱跳舞");
    }

}
public class Son extends Father {
	// 此时，Son类中就同时拥有drink方法以及smoke方法
}
```

### super
this&super关键字：

- this：代表本类对象的引用
- super：代表父类存储空间的标识(可以理解为父类对象引用)

- this和super的使用分别
  - 成员变量：
    - this.成员变量    -   访问本类成员变量
    - super.成员变量 -   访问父类成员变量
  - 成员方法：
    - this.成员方法  - 访问本类成员方法
    - super.成员方法 - 访问父类成员方法
- 构造方法：
  - this(…)  -  访问本类构造方法
  - super(…)  -  访问父类构造方法

### 方法重写
```public class ipione2 extends ipione {
    //方法重写
    //两种功能
    public  void  smallBlack(){
        super.smallBlack();//继承父类-英文
        System.out.println("说中文");

    }
}
```
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230823/02_权限修饰符.566k5mkvcbw0.webp)


## 集合
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230824/image.2nusav2jnds0.webp)
红黑树
![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230824/image.nv7osabq6io.webp)

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230824/image.1ghxdvxoe3t.webp)






  read_own:
    image: hectorqin/reader
    container_name: reader_own
    restart: always
    ports:
      - 4395:8080
    volumes:
      - /home/reader/logs:/logs
      - /home/reader/storage:/storage
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - READER_APP_CACHECHAPTERCONTENT=true #是否开启缓存章节内 V2.0


![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230830/1692962541617.49ax9n8qxky0.png)

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230830/1692964550561.2cslinscvtc0.png)