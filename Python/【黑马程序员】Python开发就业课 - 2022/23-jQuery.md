---
标题: 
图片: https://i0.imgs.ovh/2024/01/12/I4yuD.png
时时: 
链接: 
评价:
---
# 
的用法

### 1. jQuery的引入

```
<script src="js/jquery-1.12.4.min.js"></script>
```

### 2. jQuery的入口函数

我们知道使用js获取标签元素，需要页面加载完成以后再获取，我们通过给onload事件属性设置了一个函数来获取标签元素，而jquery提供了**ready函数**来解决这个问题，保证获取标签元素没有问题，**它的速度比原生的 window.onload 更快**。

**入口函数示例代码:**

```

<script src="js/jquery-1.12.4.min.js"></script>
<script>
    window.onload = function(){
        var oDiv = document.getElementById('div01');
        alert('原生就是获取的div：' + oDiv);
    };
    $(document).ready(function(){
        var $div = $('#div01');
        alert('jquery获取的div：' + $div);
    });
</script>

<div id="div01">这是一个div</div>
```

**入口函数的简写示例代码:**

```

<script src="js/jquery-1.12.4.min.js"></script>
<script>
    window.onload = function(){
        var oDiv = document.getElementById('div01');
        alert('原生就是获取的div：' + oDiv);
    };

    /*
    $(document).ready(function(){
        var $div = $('#div01');
        alert('jquery获取的div：' + $div);
    });
    */

    // 上面ready的写法可以简写成下面的形式：
    $(function(){
        var $div = $('#div01');
        alert('jquery获取的div：' + $div);
    }); 
</script>

<div id="div01">这是一个div</div>
```

# jQuery选择器

### jQuery选择器的种类

1. 标签选择器
2. 类选择器
3. id选择器
4. 层级选择器
5. 属性选择器

**示例代码:**

```
$('#myId') //选择id为myId的标签
$('.myClass') // 选择class为myClass的标签
$('li') //选择所有的li标签
$('#ul1 li span') //选择id为ul1标签下的所有li标签下的span标签
$('input[name=first]') // 选择name属性等于first的input标签
```

**说明:**  
可以使用length属性来判断标签是否选择成功, 如果length大于0表示选择成功，否则选择失败。

```
$(function(){
    result = $("div").length;
    alert(result);
});
```

# 选择集过滤

- has(选择器名称)方法，表示选取包含指定选择器的标签
- eq(索引)方法，表示选取指定索引的标签

**has方法的示例代码:**

```
<script>
    $(function(){
        //  has方法的使用
        var $div = $("div").has("#mytext");
        //  设置样式
        $div.css({"background":"red"});
    });
</script>

<div>
    这是第一个div
    <input type="text" id="mytext">
</div>

<div>
    这是第二个div
    <input type="text">
    <input type="button">
</div>
```

**eq方法的示例代码:**

```
<script>
    $(function(){
        //  has方法的使用
        var $div = $("div").has("#mytext");
        //  设置样式
        $div.css({"background":"red"});

        //  eq方法的使用
        var $div = $("div").eq(1);
        //  设置样式
        $div.css({"background":"yellow"});
    });
</script>

<div>
    这是第一个div
    <input type="text" id="mytext">
</div>

<div>
    这是第二个div
    <input type="text">
    <input type="button">
</div>
```

# 选择集转移

- prev() 表示获取上一个同级元素
- prevAll() 表示获取上面所有同级元素
- next() 表示获取下一个同级元素
- nextAll() 表示获取下面所有同级元素
- parent() 表示获取父元素
- children() 表示获取所有的子元素
- siblings() 表示获取其它同级元素
- find("选择器名称") 表示获取指定选择器的元素

# 获取和设置元素内容

### 1. html方法的使用

jquery中的html方法可以获取和设置标签的html内容

**示例代码:**

```
<script>
    $(function(){

        var $div = $("#div1");
        //  获取标签的html内容
        var result = $div.html();
        alert(result);
        //  设置标签的html内容，之前的内容会清除
        $div.html("<span style='color:red'>你好</span>");
        //  追加html内容
        $div.append("<span style='color:red'>你好</span>");

    });
</script>

<div id="div1">
    <p>hello</p>
</div>
```

**说明:**

给指定标签追加html内容使用**append方法**

# 获取和设置元素属性

### 1. prop方法的使用

之前使用css方法可以给标签设置样式属性，那么设置标签的其它属性可以使用prop方法了。

**示例代码:**

```
<style>
    .a01{
        color:red;
    }
</style>

<script>
    $(function(){
        var $a = $("#link01");
        var $input = $('#input01')

        // 获取元素属性
        var sId = $a.prop("id");
        alert(sId);

        // 设置元素属性
        $a.prop({"href":"http://www.baidu.com","title":'这是去到百度的链接',"class":"a01"});

        //  获取value属性
        // var sValue = $input.prop("value");
        // alert(sValue);

        // 获取value属性使用val()方法的简写方式
        var sValue = $input.val();
        alert(sValue);
        // 设置value值
        $input.val("222222");
    })
</script>

<a id="link01">这是一个链接</a>
<input type="text" id="input01" value="111111">
```

**说明:** 获取value属性和设置value属性还可以通过**val方法**来完成。

# jQuery事件

- click() 鼠标单击
- blur() 元素失去焦点
- focus() 元素获得焦点
- mouseover() 鼠标进入（进入子元素也触发）
- mouseout() 鼠标离开（离开子元素也触发）
- ready() DOM加载完成

# 事件代理

### 1. 事件代理介绍

事件代理就是利用事件冒泡的原理(事件冒泡就是事件会向它的父级一级一级传递),把事件加到父级上，通过判断事件来源，执行相应的子元素的操作，**事件代理首先可以极大减少事件绑定次数，提高性能；其次可以让新加入的子元素也可以拥有相同的操作**。

**事件冒泡代码:**

```

 <script>
    $(function(){

        var $div1 = $('#div1');
        var $div2 = $('#div2');

        $div1.click(function(){
            alert($(this).html());
        }); 

        $div2.click(function(){
            alert($(this).html());
        }); 
    });
</script>

 <div id="div1" style="width:200px; height:200px; background: red;">
    <div id="div2" style="width:100px; height:100px;background: yellow;">
        哈哈
    </div>
</div>
```

**说明:**

当点击子元素div，它的点击事件会向它父元素传递，也会触发了父元素的点击事件，这就是事件冒泡。

### 2. 事件代理的使用

**一般绑定事件的写法:**

```
$(function(){
    $ali = $('#list li');
    $ali.click(function() {
        $(this).css({background:'red'});
    });
})

<ul id="list">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

**事件代理的写法**

```
$(function(){
    $list = $('#list');
    // 父元素ul 来代理 子元素li的点击事件
    $list.delegate('li', 'click', function() {
        // $(this)表示当前点击的子元素对象
        $(this).css({background:'red'});
    });
})

<ul id="list">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

**delegate方法参数说明:**

delegate(childSelector,event,function)

- childSelector: 子元素的选择器
- event: 事件名称，比如: 'click'
- function: 当事件触发执行的函数