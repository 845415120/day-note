  
Windows+VScode 配置与使用 git，超详细教程，

## 填写提交信息
![](Pasted%20image%2020231004151626.png)

当我们在 [VScode](https://so.csdn.net/so/search?q=VScode&spm=1001.2101.3001.7020) 中编写代码后，需要提交到 git 仓库时，但是我们又不想切换到 git 的命令行窗口，我们可以在 VScode 中配置 git，然后就可以很方便快捷的把代码提交到仓库中。

### 第一步：安装 Git 命令行工具

点击 [git 官网](https://git-scm.com/)，然后点击 download，来到下面的界面

![](https://img-blog.csdnimg.cn/0f34ba0f6ab34da4946b6cf46d45747d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

 根据自己的电脑，选择相应的版本，我这里是下载的 **Windows** 

网上有很多 git 工具安装的教程，比较简单，这里不详细记录了。

**注意：一定要记得自己安装的路径！！！**

安装完成后，在桌面上点击右键，出现下图所示的图标，则表示安装成功：

![](https://img-blog.csdnimg.cn/b03d65248d114cf69ecf0a27af885839.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_15,color_FFFFFF,t_70,g_se,x_16)

###  第二步：配置 VScode 中的 git

 1. 打开 VScode，依次点击下图中的地方

![](https://img-blog.csdnimg.cn/f861266b930b482684535b99200e89d3.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

 2. 在输入框中输入 **git.path** ，再点击第二个地方，打开 **settings.json** 文件

![](https://img-blog.csdnimg.cn/43de2e35cbee4778a2c767f0952bf6b5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

![](https://img-blog.csdnimg.cn/01dc658c9e464bee9e40ec26200fe215.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

3. 在 **settings.json** 文件中，添加 **git** 的安装路径

![](https://img-blog.csdnimg.cn/934d3479d8124defb2148a8aad7b4aa6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

![](https://img-blog.csdnimg.cn/f0b37eb2ba1949bc926e8ad6ddfba261.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

注意：冒号前面是 **git.path** ，路径是 **cmd** 文件夹中的 **git.exe** 

然后关闭 **VScode** ，再次打开，过几秒钟后，点击左侧的第 3 个图标，也就是下图的第一个地方，发现第 2 和第 3 个地方变成了可点击状态，不是暗色的，表面 git 环境配置成功。

![](https://img-blog.csdnimg.cn/98e7cc4f76c54e49961815bebcc1aa7d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

###  第三步：使用 **VScode** **+** **git**，提交到仓库

先从 **GitHub** 上面拉下来一个仓库，

如果出现下面的错误，可以参考我之前的一篇[博客](https://blog.csdn.net/czjl6886/article/details/122111208) ，可以解决该问题，也可以翻墙

![](https://img-blog.csdnimg.cn/324b45a9b7054d3ab2497ab5bc29bfb1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_18,color_FFFFFF,t_70,g_se,x_16)

使用之前博客的方法，成功 **clone** 下来

注意！！！这种方法虽然可以成功 **clone** 下来，但是，在后续的推送命令，仍会报错，所以建议翻墙，再 git clone [GitHub - jin5437/manage-system-vue2: vue2+router 实现的后台管理系统](https://github.com/jin5437/manage-system-vue2.git "GitHub - jin5437/manage-system-vue2: vue2+router实现的后台管理系统")

![](https://img-blog.csdnimg.cn/50b1f2dccaab4d63a41e5d874a0f13c3.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_17,color_FFFFFF,t_70,g_se,x_16)

翻墙之后： 

![](https://img-blog.csdnimg.cn/509d04acdbf04b6bb2d0e29c1d3857c7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_18,color_FFFFFF,t_70,g_se,x_16)

使用 **VScode** ，打开 **clone** 下来的文件，这是我在 **GitHub** 上发布的一个小项目，使用 **Vue2 + router** ，实现的一个用户管理的小系统，感兴趣的朋友可以 **clone** 下来，适合初学者。

![](https://img-blog.csdnimg.cn/13bde2cfdc4a43b190a16bfd3fe49f77.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

当我们修改代码时，左侧会提示我们哪个文件发生了改动 

![](https://img-blog.csdnimg.cn/2624282d646340bdb5f2382aebf1724f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

 点击上图的第 3 处的 **+** 号，表示 **add** 命令，如下图，这时，文件被放在暂存区

![](https://img-blog.csdnimg.cn/b10c2dae72944bdbbecfc9450c83b1dd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

 在下图的输入框中，输入要提交的备注信息，如 **again test** ，然后，可以按 **Ctrl + enter** ，或者点击橙色框中的对号，就是完成了 **commit** 命令

![](https://img-blog.csdnimg.cn/0117cf9d116a4c939814a98a196ded9f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

接着，点击下图的第一个地方，依次点击拉取、推送，即 **pull** 命令和 **push** 命令。

![](https://img-blog.csdnimg.cn/28060c9660e14943af078dde958c86c8.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

 命令完成后，**VScode** 对我的 **GitHub** 账号进行了认证，一步一步进行操作即可。

![](https://img-blog.csdnimg.cn/1f15419691624ba082ea33e58f60e06b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

![](https://img-blog.csdnimg.cn/a1de7b3544c5410f9e8254fb3eaa2d91.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

![](https://img-blog.csdnimg.cn/ed12657895f74f52b10a63e47068e8be.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

去 **GitHub** 官网，查看仓库，就能发现成功推送上去了！ 

![](https://img-blog.csdnimg.cn/abc8270302834cabaa94dd1a50fa8a5e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5ZSv5LiA55qE6Zi_6YeR,size_20,color_FFFFFF,t_70,g_se,x_16)

 至此，大功告成！
