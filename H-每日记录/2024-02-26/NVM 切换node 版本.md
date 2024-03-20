### 1. 先清空本地安装的`node.js`版本

打开cmd，输入`where node`查看当前的`node`安装在哪个文件夹下，打开文件夹后将`node.exe`所在的文件夹内容全部清空

### 2. 安装nvm管理工具

[打开链接](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fcoreybutler%2Fnvm-windows%2Freleases "https://github.com/coreybutler/nvm-windows/releases")之后，下载压缩包安装`nvm`

![|500](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4cfe6fe6ed064b48bd3660f4d5f3812e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

### 3. 安装nvm管理工具

均点击下一步即可

#### 4. 输入命令查看nvm版本号

输入`nvm v`查看当前版本号，如果成功出现版本号，则代表安装成功

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0b32d4882be41e380654f5e3bd6c720~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

#### 5. 查看`node.js`版本号

输入`nvm ls available`查看当前版本号

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f1402898be84b09b7f8f06fb1d2804e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

#### 6. 安装对应版本

安装命令

`nvm install 12.17.0`

使用命令

`nvm use 12.17.0`

成功之后就可以查看本地的`node`版本了

`node -v`

#### 7. 查看已经安装的版本

`nvm ls`

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31a8b6dc907b4a4480c1bc07109b41ce~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以通过`nvm install xxx`的操作，安装不同版本的`node`，再通过上述命令查看本地已经安装过的`node`版本，再`nvm use xxx`就可以快速切换node版本啦

  

作者：sniper  
链接：https://juejin.cn/post/7094576504243224612  
来源：稀土掘金  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。