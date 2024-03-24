# Git

## 查看分支

`git branch`


**目标：** 能够使用 git 管理项目，并且能够将代码上传到Github

[首先【Git的基础】 | 猴子都能懂的GIT入门 | 贝格乐（Backlog）](https://backlog.com/git-tutorial/cn/intro/intro1_1.html)

```
git checkout -b gh-pages

// 新建仓库
$ git init
//创建新分支
git checkout -b gh-pages

# 将所有文件添加到暂存区
git add .

# 初始化提交
git commit -m '初始化提交'


// 关联你的远程仓库
$ git remote add origin xxxx

// 切换到gh-pages分支
$ git checkout gh-pages

// 提交代码到gh-pages分支
$ git push origin gh-pages

// 合并到master分支
$ git checkout master
$ git merge gh-pages
```

## 初始化和开发分支

**核心步骤：**

```javascript
# 初始化项目仓库
git init -b main

# 将所有文件添加到暂存区
git add .

# 初始化提交
git commit -m '初始化提交'

```

使用 gitee 管理项目<br />核心步骤：<br />在Github上创建项目

- 本地设置仓库别名

```javascript
git remote add origin git@github.com:845415120/web-.git
```

- 本地推送到远程仓库

```javascript
# 推送主分支
git push -u origin main
```

## 创建并合并分支

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230706/image.6421bd86z800.webp)

Git鼓励大量使用分支：

```
查看分支：git branch
创建分支：git branch <name>
切换分支：git checkout <name>
创建+切换分支：git checkout -b <name>
合并某分支到当前分支：git merge <name>
删除分支：git branch -d <name>
```
创建+切换分支：git checkout -b
合并某分支到当前分支：git merge




# Git 备忘录

## 安装

### GitHub Desktop GitHub 桌面

[desktop.github.com](https://desktop.github.com/)

### Git 全平台版

[git-scm.com](https://git-scm.com/)

## 配置工具

对所有本地仓库的用户信息进行配置

`$ git config --global user.name "[name]"`

对你的commit操作设置关联的用户名

`$ git config --global user.email "[email address]"`

对你的commit操作设置关联的邮箱地址

`$ git config --global color.ui auto`

启用有帮助的彩色命令行输出

## 分支

分支是使用 Git 工作的一个重要部分。你做的任何提交都会发生在当前“checked out”到的分支上。使用 `git status` 查看那是哪个分支。

`$ git branch [branch-name]`

创建一个新分支

`$ git switch -c [branch-name]`

切换到指定分支并更新工作目录(working directory)

`$ git merge [branch]`

将指定分支的历史合并到当前分支。这通常在拉取请求(PR)中完成，但也是一个重要的 Git 操作。

`$ git branch -d [branch-name]`

删除指定分支

## 创建仓库

当着手于一个新的仓库时，你只需创建一次。要么在本地创建，然后推送到 GitHub；要么通过 clone 一个现有仓库。

`$ git init`

在使用过 `git init` 命令后，使用以下命令将本地仓库与一个 GitHub 上的空仓库连接起来：

`$ git remote add origin [url]`

将现有目录转换为一个 Git 仓库

`$ git clone [url]`

Clone（下载）一个已存在于 GitHub 上的仓库，包括所有的文件、分支和提交(commits)

## .gitignore 文件

有时一些文件最好不要用 Git 跟踪。这通常在名为 `.gitignore` 的特殊文件中完成。你可以在 [github.com/github/gitignore](https://github.com/github/gitignore) 找到有用的 `.gitignore` 文件模板。

## 同步更改

将你本地仓库与 GitHub.com 上的远端仓库同步

`$ git fetch`

下载远端跟踪分支的所有历史

`$ git merge`

将远端跟踪分支合并到当前本地分支

`$ git push`

将所有本地分支提交上传到 GitHub

`$ git pull`

使用来自 GitHub 的对应远端分支的所有新提交更新你当前的本地工作分支。`git pull` 是 `git fetch` 和 `git merge` 的结合

## 进行更改

浏览并检查项目文件的发展

`$ git log`

列出当前分支的版本历史

`$ git log --follow [file]`

列出文件的版本历史，包括重命名

`$ git diff [first-branch]...[second-branch]`

展示两个分支之间的内容差异

`$ git show [commit]`

输出指定commit的元数据和内容变化

`$ git add [file]`

将文件进行快照处理用于版本控制

`$ git commit -m "[descriptive message]"`

将文件快照永久地记录在版本历史中

## 重做提交

清除错误和构建用于替换的历史

`$ git reset [commit]`

撤销所有 `[commit]` 后的的提交，在本地保存更改

`$ git reset --hard [commit]`

放弃所有历史，改回指定提交。

> 小心！更改历史可能带来不良后果。如果你需要更改 GitHub（远端）已有的提交，请谨慎操作。如果你需要帮助，可访问 [github.community](https://github.community/) 或联系支持(support)。

## 术语表

- **git**: 一个开源的分布式版本控制系统
- **GitHub**: 一个托管和协作管理 Git 仓库的平台
- **commit 提交**: 一个 Git 对象，是你整个仓库的快照的哈希值
- **branch 分支**: 一个轻型可移动的 commit 指针
- **clone**: 一个仓库的本地版本，包含所有提交和分支
- **remote 远端**: 一个 GitHub 上的公共仓库，所有小组成员通过它来交换修改
- **fork**: 一个属于另一用户的 GitHub 上的仓库的副本
- **pull request 拉取请求**: 一处用于比较和讨论分支上引入的差异，且具有评审、评论、集成测试等功能的地方
- **HEAD**: 代表你当前的工作目录。使用`git checkout` 可移动 HEAD 指针到不同的分支、标记(tags)或提交

##### 1. git常用命令以及工作中都怎么工作

```js
git init 初始化仓库

git status 查看当前各个区域的代码状态。

git log查看commit记录

git reflog查看完整记录

git add 添加工作区代码到暂存区

Git commit 暂存区代码的提交

git reset 代码的版本回退

git stash 将暂存处代码收起来

git stash pop 将收起来的暂存区的代码释放出来

Git tag 可以打标签

Git branch 基于当前分支创建一个分支

git checkout 切换分支

git merge 合并分支

git remote add origin 添加远端仓库地址

git clone 克隆仓库

git pull下拉对应分支代码

git push 上传对应分支代码


```



公司中每一个项目都会有一个对应的远端仓库（gitLab），我们需要创建账号并配置权限。

一般公司会有几个主要分支，分别对应4个环境，当代码更新的时候会通过流水线自动部署到对应的环境：

1. 

   发布分支（prod、master）这个分支代码对应的就是线上的代码

2. 

   UAT分支（uat），这个分支上的代码对应的是公司内部演示用的分支

3. 

   TEST分支（test），这个分支的代码是用于测试

4. 

   DEV分支（dev），研发自测分支

正常功能开发或者bug修复， 从dev分支拉取代码，进行开发就可以。

如果是解决线上bug，应该从master拉取一个分支（hotfix__）, 然后开发完成后将其合并到test或者uat，测试没有问题后，将其合并到master。还要将hotfix上对应的commit合并到dev分支， 专业dev分支也就修复了这个bug。

如果当前版本代码需要回退（功能不做了，要么要去先着急干别的）， 执行git reset --hard， 再回到当前的commit也是git reset 只不过需要注意，此时要通过git reflog来查看时间最后的一次commit。

