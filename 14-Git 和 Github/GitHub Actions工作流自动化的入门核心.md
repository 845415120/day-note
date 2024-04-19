---
标题: GitHub Actions工作流自动化的入门核心
图片: https://i0.hdslb.com/bfs/archive/4c7bf06ebfd5529f1c8b99819d2da9d95d7b59c9.jpg@518w_290h_1c_!web-video-share-cover.avif
链接: https://www.bilibili.com/video/BV1aT421y7Ar/?vd_source=e815fa5e2c428a98163e9d19be40ec58
时时: 
评价: 
tags: 
时间: 2024-04-19
---

# 创建仓库

.github和workflows文件夹

yml文件

![](Pasted%20image%2020240419194157.png)

## 添加on和对应事件

```yml
on: push
```
![](Pasted%20image%2020240419195156.png)
## 添加job关键词 和job1,job2


```
on: push
jobs:
  job1:
  job2:
```

![](Pasted%20image%2020240419195900.png)

##  添加job步骤
- 第一个作业名为 "job1"，包含两个步骤：
    
    1. 运行 `pwd` 命令，用于打印当前工作目录。
    2. 运行 `ls` 命令，用于列出当前工作目录下的文件和文件夹。
- 第二个作业名为 "job2"，也包含一个步骤：
    
    1. 运行 `node --version` 命令，用于显示安装的 Node.js 版本。
```
on: push
jobs:
  job1:
    steps:
      - run: pwd
      - run: ls
  job2:
    steps:
      -run: node --version
```

![](Pasted%20image%2020240419200642.png)

## 指定运行在ubuntu和windows

```
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - run: pwd
      - run: ls
  job2:
    runs-on: windows-latest
    steps:
      - run: node --version
```

![](Pasted%20image%2020240419201044.png)
## 创建方法2

![](Pasted%20image%2020240419201248.png)

![](Pasted%20image%2020240419201321.png)

![](Pasted%20image%2020240419201340.png)

## 项目打包和部署

```
on: push

jobs:

  job1:

    runs-on: ubuntu-latest

    steps:

      - run: pwd

      - run: npm --version

      - run: npm run build
```