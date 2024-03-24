## 前言

这是一本围绕AutoHotkey（简称: AHK）语言展开的编程启蒙**书籍**，内容由浅入深，由易到难，语言通俗易懂，涵盖全面，同时也是一本有趣、有料的**体系化应用指南**。

本书适用于各层次各行业的**Windows**用户，本书旨在让你了解产业界解决复杂计算问题的基本方法，理解计算机的思考模式，掌握抽象并求解基本计算问题的初步能力，享受编程求解和提升效率的高阶快乐。

本书（教程）共搜集整理可执行代码案例XX个，实际项目开发案例XX个，配套视频教程XX分钟。

O.1[AutoHotkey是什么？为什么学？如何学？（what？why？how？）](https://www.autoahk.com/archives/41791)

## **一、基本概念**

众所周知，信息革命的典型标志就是计算机的出现，了解计算机、Windows系统和软件的发展历程对学习编程是非常有必要的，基础扎实便于更好的理解编程逻辑。在第一部分，我们将对计算机发展、编程语言发展、AutoHotkey语言发展和AutoHotkey编程环境的部署进行系统介绍。

1.1[理解计算机（重点：功能性和可编程性）](https://www.autoahk.com/archives/16913)

1.2[计算机结构和运行原理（重点：冯诺依曼结构和程序运行过程）](https://www.autoahk.com/archives/16934)

1.3[编程语言概述（重点：编译型和解释型）](https://www.autoahk.com/archives/16945)

1.4[AutoHotkey的发展历史（重点：分支的选择）](https://www.autoahk.com/archives/17021)

1.5[AutoHotkey下载、安装及环境配置（重点：恭喜您一只脚已经踏入门）](https://www.autoahk.com/archives/15416)

---

## **二、基础入门**

从各种神秘符号到数据类型等符文，从热键、热字符串到选择、循环等程序结构，从变量、对象到标签、函数等容器，这一章节将由浅入深，从外到内，详细解读AutoHotkey自带的各种魔法。读完这部分就可以作出各种有意思的脚本，会给你工作、学习带来很多意想不到的便利。

2.1[第一个Autohotkey程序-热键打开中文社区网站](https://www.autoahk.com/archives/34070)

2.2[程序的注释-单行注释和多行注释](https://www.autoahk.com/archives/34193)

2.3[程序结构-热键（含命令：keywait、pause/suspend、#if系列、hotkey、settimer）](https://www.autoahk.com/archives/36311)

2.4[程序结构-热字符串](https://www.autoahk.com/archives/21499)

2.5[容器-变量](https://www.autoahk.com/archives/36313)

2.6[符号-运算符](https://www.autoahk.com/archives/12672)

2.7[程序结构-选择结构（单行if语句、多行if语句、多条件if语句、嵌套if语句、三目运算符、switch语句）](https://www.autoahk.com/archives/42015)

2.8[程序结构-表达式和传统形式](https://www.autoahk.com/archives/9497)

2.9[容器-数组（关联数组、二维数组、多维数组和伪数组）](https://www.autoahk.com/archives/1362)

2.10[容器-对象（类）](https://www.autoahk.com/archives/39788)

2.11[程序结构-标签和函数](https://www.autoahk.com/archives/12719)

2.12[字符串操作（查找、截取、分隔、遍历、拼接、排序、格式化等操作）](https://www.autoahk.com/archives/12649)

2.13[程序结构-循环结构（for、loop、while）](https://www.autoahk.com/archives/12734)

## 三、 图形图像（GUI）

友好的用户交互界面是一款软件或者脚本是否成熟的标志性条件，这一大的部分将全面涵盖AHK提供的标准GUI及其控件、GDI+、opencv和结合的前端的用法和案例，也试图通过尽可能全面的解读让大家能从热键阶段过渡到完成项目的编写阶段。不过这部分有一定的难度，需要有一定的美学、前端的基础。

3.1[menu-AHK脚本管理器——兰兰小雪](https://www.autoahk.com/archives/1725)

3.2[tooltip-滚轮调节系统音量](https://www.autoahk.com/archives/28415)

3.2[text-桌面弹幕](https://www.autoahk.com/archives/1707)

3.3[button-屏幕键盘](https://www.autoahk.com/archives/1705)

3.4listview-[下拉列表精炼搜索(支持汉字和拼音)](https://www.autoahk.com/archives/36629)

3.5 –[16进制颜色识别和搭配规律](https://www.autoahk.com/archives/37527)

3.6[获取图片实际尺寸](https://www.autoahk.com/archives/6567)

3.7[GDI+系列教程目录](https://www.autoahk.com/archives/34920)

3.8[获取win10锁屏图片](https://www.autoahk.com/archives/6264)

3.9[FindText 深度教程 v1.2](https://www.autoahk.com/archives/41636)

3.10[AHK调用opencv系列目录](https://www.autoahk.com/archives/40946)

3.11[AutohotKey实现生成条形码（neutron）](https://www.autoahk.com/archives/36765)

[3.12实战案例-鼠标手势](https://www.autoahk.com/archives/34017)

3.13[实战案例-输入法](https://www.autoahk.com/archives/15558)

## 四、 数据处理

文本数据、数据库数据、JSON数据的交互是自动化和应用系统的基础操作之一，但是文本、数据库、JSON、XML、YAML等文件的增删改查一直是一个很大的门槛。这一大部分聚焦这个核心问题，用实际案例解读相关数据的操作，里面也将系统讲述正则表达式这一经典的算法工具，最后对常见经典的算法（AHK实现）进行梳理和分享。

4.1[AHK 中读写文件的方法](https://www.autoahk.com/archives/12722)

4.2[正则表达式](https://www.autoahk.com/archives/37723)

4.3[文本文件（txt、csv）操作](https://www.autoahk.com/archives/34123)

4.4[操作 Access 数据库](https://www.autoahk.com/archives/3376)

4.5[AHK使用JSON全面详解](https://www.autoahk.com/archives/43855)

4.15[算法（累加、冒泡）](https://www.autoahk.com/archives/1043)

## 五、 系统交互

这部分聚焦与windows的交互，这是很多自动化操作的基础。这部分根据自己需要学多学少都是可以的，想全部掌握还是比较有难度。

[5.1数据类型](https://www.autoahk.com/archives/39935)

5.2[Acc库以及一些使用方法](https://www.autoahk.com/archives/38723)

5.3[读取cpu序列号三种方法对比分析](https://www.autoahk.com/archives/7711)

5.4[获取MAC地址的三种方法](https://www.autoahk.com/archives/7758)

5.5[AutoHotkey使用API函数检测蓝牙设备状态](https://www.autoahk.com/archives/39510)

5.6[USB退出自动执行的例子](https://www.autoahk.com/archives/39504)

5.7[设置IP地址](https://www.autoahk.com/archives/38665)

5.8[监测文件(夹)知识汇总](https://www.autoahk.com/archives/34125)

5.9[使用AutoHotkey调用everything.dll进行搜索](https://www.autoahk.com/archives/36540)

## 六、 应用交互

这部分聚焦与第三方软件的交互，如excel、powerpoint、word、QQ、微信、TC等，这个时候AHK更像一个沟通系统与软件的一个桥梁，理论上也是自动化操作的核心部分，毕竟我们如今大部分工作都是通过这些平台完成的。了解了这些对于那些在局域网工作、玩游戏的朋友也有一定的启发作用吧。

[6.1【基础】 如何在 AHK 中运行其他软件](https://www.autoahk.com/archives/12668)

6.2[AutoHotkey实现Excel自动化（第一章：通过原生com方法，实现简单操作）](https://www.autoahk.com/archives/39299)

6.3[AutoHotkey实现Excel自动化（第二章：Excel 对象模型）](https://www.autoahk.com/archives/39772)

## 七、网络交互

文件上传下载、网络数据获取、远程控制、网络翻译等都是一些必要的基本操作，这一部分主要聚焦于网络交互，希望能给大家一些启发。

7.1[如何在 AHK 下载网络内容到文件或变量](https://www.autoahk.com/archives/12670)

7.2[AHK 操控 Chrome 打开百度搜索内容并获取结果的示例 —— 史上最简单、说明最详细的操控 Chrome 入门教程！！！](https://www.autoahk.com/archives/35220)

7.3[FTP库和应用示例](https://www.autoahk.com/archives/40515)

7.4[AutoHotkey调用Youtube-dl下载youtube视频详解](https://www.autoahk.com/archives/34573)

7.5[AutoHotkey调用百度翻译API的详细讲解](https://www.autoahk.com/archives/43902)

---

## 八、命令（函数）详解

这一部分目标是涵盖所有ahk命令，用通俗易懂的语言把所有命令的知识点、使用方法等内容详细的梳理出来。

8.1[mousegetpos——获取鼠标光标的当前位置](https://www.autoahk.com/archives/17574)

8.2[DLLCall（）-Autoahotkey关于dllcall（）函数最全面的解释](https://www.autoahk.com/archives/3334)

8.3[飞跃、空等大佬关于dllcall高级应用的精彩阐述整理-dbgba](https://www.autoahk.com/archives/37790)

8.4[**游戏中常用命令串烧**(click\mouseclick\controlclick\mousemove\mouseclickdrag\send\controlsend)](https://www.autoahk.com/archives/34783)

8.5[关于strsplit（）函数的一点补充](https://www.autoahk.com/archives/39303)

8.6[Suspend-热键、热字符串挂起](https://www.autoahk.com/archives/42086)

8.7[【记录】关于#ClipboardTimeout命令的详细解读](https://www.autoahk.com/archives/34577)

8.8[run-系统应用（自带软件）、命令全整理（记事本、看图、截图……）](https://www.autoahk.com/archives/34431)

## 九、独立知识点

9.1[AutoHotkey编码过程中的相对路径](https://www.autoahk.com/archives/9234) 

9.2[在AHK中实现函数重载](https://www.autoahk.com/archives/12618)

9.3[如何用 AHK 处理命令行参数](https://www.autoahk.com/archives/12622)

9.4[AutoHotkey调用com对象时如果返回两个（多个）值该如何处理？](https://www.autoahk.com/archives/39921)

9.5 [Autohotkey微知识点全整理](https://www.autoahk.com/archives/9195)

## **十、结语**

这既是一本书也是一门编程课程，希望大家一起献言献策，共同补充完善相关知识。这本书，我想不是我自己的一本书，而是这么多年中文用户集体智慧的结晶，当然有的部分讲的细，有的部分讲解的粗，你有什么困惑都可以在评论区留言。本书所讲的内容一定是不全面的，好在这本书依附于整个社区而建，我也没想给他定稿，持续完善，持续补充。如果你觉得不错请捐赠，谢谢！