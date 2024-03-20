### inal 修饰符

**final 变量：**

final 表示"最后的、最终的"含义，变量一旦赋值后，不能被重新赋值。被 final 修饰的实例变量必须显式指定初始值。

final 修饰符通常和 static 修饰符一起使用来创建类常量。

## **final 类**

final 类不能被继承，没有类能够继承 final 类的任何特性。


```
public final class Test {
   // 类体
}
```
## **final 方法**

父类中的 final 方法可以被子类继承，但是不能被子类重写。

声明 final 方法的主要目的是防止该方法的内容被修改。

如下所示，使用 final 修饰符声明方法。

```
public class Test{
    public final void changeName(){
       // 方法体
    }
}
```
