---
title: 无角色语音
icon: link
order: 1
author: btjawa
date: 2023-09-28
category:
  - 常见错误
tag:
  - 常见错误
  - 无角色语音
sticky: false
star: true
footer: 转载时请附上原作者btjawa
copyright: <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href="https://github.com/btjawa/BGP-docs" target="_blank">btjawa</a>
---

客户端配置问题
<!-- more -->

## 解决方案

关键词：原神语音直链

在例如B站专栏的地方找到你的客户端版本对应的语音包

此处使用 REL4.0.0 JAPANESE 做示例

https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230804185703_R1La3H9xIH1hBiHJ/Audio_Japanese_4.0.0.zip

下载好后，解压下载出来的文件，按照路径放到客户端对应的文件夹中

国际服可将 `YuanShen` 等字样替换为 `GenshinImpact`

示例

### 压缩包示例

```shell {9,11}
Audio_Japanese_4.0.0.zip
|
+-- YuanShen_Data
|   |
|   +-- StreamingAssets
|       |
|       +-- AudioAssets
|           | 
|           +-- Japanese
|               |
|               +-- 1001.pck
|               \-- ...
\-- Audio_Japanese_pkg_version
```

### 游戏文件夹示例

```shell {9}
Genshin Impact Game
|
+-- YuanShen_Data
|   |
|   +-- Managed
|   +-- Native
|   +-- Persistent
|       |
|       +-- audio_lang_14
|       \-- ...
|   \-- ...
|-- ...
\-- YuanShen.exe
```

### 合并后文件夹示例

```shell {9,13,15,21}
Genshin Impact Game
|
+-- YuanShen_Data
|   |
|   +-- Managed
|   +-- Native
|   +-- Persistent
|       |
|       +-- audio_lang_14
|       \-- ...
|   +-- StreamingAssets
|       |
|       +-- AudioAssets
|           | 
|           +-- Japanese
|               |
|               +-- 1001.pck
|               \-- ...
|           \-- ...
|       \-- ...
|   \-- ...
|-- ...
|-- YuanShen.exe
\-- Audio_Japanese_pkg_version
```

在做完这些后，用记事本打开 `YuanShen_Data\Persistent\audio_lang_14` ，并在其中添加语言，保存

例如

```text {2}
Chinese
Japanese
```

## 原理

已经在解决方案中写明