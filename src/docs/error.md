---
title: 错误排查
icon: gear
author: btjawa
date: 2023-09-20
category:
  - 使用文档
tag:
  - 使用文档
  - 错误排查
footer: 转载时请附上原作者btjawa
copyright: <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href="https://github.com/btjawa/BGP-docs" target="_blank">btjawa</a>
---

应用打包成ia32其实是为了减小大小，若遇到任何与架构相关的问题请更新为64位，或是自行降级GateServer

其他大部分游戏内/运行内遇到的错误可以看 [常见错误](/errors/README.md)

<!-- more -->

[我是issue地址捏](https://github.com/btjawa/BTJGenshinPS/issues)

## MongoDB一闪而过

这时可尝试进入 `resources\data` 文件夹，尝试手动运行 `run_mongo.bat`，若弹出提示框

```sh
mongod.exe - 系统错误
由于找不到 MSVCP140.dll，无法继续执行代码。重新安装程序可能会解决此问题。
```

等等说找不到 xxx.dll 的，可进入 `resources\GateServer\MongoDB` 文件夹，手动双击 `vc_redist.x64.exe` 并按照指引安装

:::warning
请务必使用应用提供的安装文件，不要使用网上下载下来的文件，会造成部分组件缺失
:::

安装完毕后，重启系统

## Grasscutter一闪而过

一般是Java问题，应用本身会自动在运行服务时检测并下载Java，下面的错误排查适用于玄学情况，如果还是搞不定请issue

这时可尝试进入 `resources\data` 文件夹，尝试手动运行 `run_gc.bat`，若还是一闪而过

请在应用内 "设置" 选项卡下点击 "编辑应用配置"，使用记事本或其他编辑器打开，定位到 `java.exec`，即

```json
{
    ...
    "java": {
        "exec": "java"
    }
}
```

### 若这个键的值是 `java`

请自行下载jdk (>=17.0.0) ，放置在你想要的地方，此处假设是 `D:\jdk-17.0.2`

定位到 `D:\jdk-17.0.2\bin` ，往下一直翻直到找到 `java` 或 `java.exe` ，右键属性->安全，完整复制"对象路径"，随后转到配置文件

将exec后的 `java` 替换为对象路径，并在每个路径分隔符 `\` 后再添加一个分隔符，例

```json
// 更改前
"java": {
    "exec": "D:\jdk-17.0.2\bin\java.exe"
}
// 更改后
"java": {
    "exec": "D:\\jdk-17.0.2\\bin\\java.exe"
}
```

随后保存，停止服务，重启应用

### 若这个键的值已经是 `xxx\\java.exe`

可能只是单纯的设备性能问题，可尝试多次重启应用并启动服务

### 其他

若使用上面的方法都无法解决的话，如果这个键的值是 `java` ，可尝试在cmd中使用 `java --version`

若没有看到类似于 `Runtime Environment` ，而是 `Unrecognized option: --version` ，说明你安装的是jre，请自行搜索"jdk17安装"，安装好后再尝试 `java --version`

若没有看到类似于 `Runtime Environment` ，而是类似于 `不支持16位应用` ，则是jdk损坏，请重装

### 其他的其他

如果你非常确定你的jdk没有问题，可以考虑是Grasscutter配置问题

定位至 `resources\GateServer\Grasscutter\logs` ，用记事本或其他编辑器打开 `latest.log` ，并自行排查

1. `There was an error while trying to load the configuration from config.json.`

`config.json` 出现了问题，自己不会修的话就再下一个GateServer，替换掉

2. `Exception in thread "main" java.lang.NullPointerException: Cannot read field "strings" because "textstrings[j]" is null`
   
空指针，可能是多种问题导致的，可以先尝试删除 `Grasscutter\workdir\cache` 文件夹

这里我列举所有问题的话会导致我的肝爆炸，所以有不会的可以issue