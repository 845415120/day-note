---
标题: 
图片: https://www.appinn.com/wp-content/uploads/2024/03/Appinn-2024-03-28-16.28.24@2x.jpg
链接: 
时时: 
评价: 
tags: 
时间: 2024-04-18
---
 

![Free Control - 基于 Scrcpy，使用 Windows 控制安卓手机](https://www.appinn.com/wp-content/uploads/2024/03/Appinn-feature-images-2024-03-28T163344.096.jpg "Free Control - 基于 Scrcpy，使用 Windows 控制安卓手机 1")

 
## Scrcpy 是什么

[Scrcpy](https://github.com/Genymobile/scrcpy) 同样是一款开源项目，简单、轻量级，用来显示和控制 Android 设备，但需要命令行操作。

小众软件已经介绍过多次了：

- [Scrcpy 2 发布，新增音频支持｜用 Win 电脑控制 Android 手机](https://www.appinn.com/scrcpy-2/)
- 命令行版：[Scrcpy – 用电脑控制 Android 手机[Win/macOS/Linux]](https://www.appinn.com/scrcpy-remote-android-from-computer/)
- 图形界面：[用电脑控制 Android 手机的 Scrcpy 拥有更易使用的图形界面了](https://www.appinn.com/scrcpy-gui/)(第三方)
- [Scrcpy Remote – 用 iPhone 远程控制 Android 设备[iOS]](https://www.appinn.com/scrcpy-remote/)
- [ws-scrcpy – 用浏览器远程控制 Android 手机，实现云手机效果](https://www.appinn.com/ws-scrcpy/)

## Free Control 用电脑控制手机

Free Control 在 Scrcpy 的基础之上，提供了图形界面：

![Free Control - 基于 Scrcpy，使用 Windows 控制安卓手机 1](https://www.appinn.com/wp-content/uploads/2024/03/Appinn-2024-03-28-16.03.45@2x.jpg "Free Control - 基于 Scrcpy，使用 Windows 控制安卓手机 2")

## 使用步骤

使用也和 Scrcpy 保持了简单，三步走：通过 USB 连接手机，打开 adb wifi 连接，通过 FreeControl 连接就行了。

具体来说，需要先准备 adb 命令行工具（[SDK Platform Tools](https://d.appinn.com/adb-sdk-platform-tools/) 搬运），用来第一次连接手机。

1. 先打开手机的开发者模式
2. 通过 USB 连接电脑，授权电脑连接（在手机上点始终）
3. 在电脑上（打开命令提示符 cmd）输入 Adb Devices 确认授权成功
4. 在电脑上输入 Adb Tcpip 5555 开启无线连接
5. 拔掉手机与电脑的连接，转而去充电。
6. 在 Free Control 里输入 IP 地址（手机的IP地址）进行控制即可。

由于青小蛙之前折腾过 Scrcpy，所以这一条龙操作下来很顺利，如果你遇到什么困难，可以前往留言讨论。

![Free Control - 基于 Scrcpy，使用 Windows 控制安卓手机 2](https://www.appinn.com/wp-content/uploads/2024/03/Appinn-2024-03-28-16.23.26@2x.jpg "Free Control - 基于 Scrcpy，使用 Windows 控制安卓手机 3")

然后，就能在电脑里，用鼠标来控制 android 手机了。

![Free Control - 基于 Scrcpy，使用 Windows 控制安卓手机 3](https://www.appinn.com/wp-content/uploads/2024/03/Appinn-2024-03-28-16.28.24@2x.jpg "Free Control - 基于 Scrcpy，使用 Windows 控制安卓手机 4")

有个问题，如果你的手机有锁屏密码，那么是没有办法在电脑上输入的，所以最好取消密码，就能直接控制了。

不重启的情况下，Wi-Fi 可以随时连接。Android 12 以上系统自动获取声音。

## 获取

- [GitHub](https://github.com/pdone/FreeControl)