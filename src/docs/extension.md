---
title: 模组/插件
icon: plug-circle-plus
author: btjawa
date: 2023-09-20
category:
  - 使用文档
tag:
  - 使用文档
  - 模组/插件
footer: 转载时请附上原作者btjawa
copyright: <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href="https://github.com/btjawa/BGP-docs" target="_blank">btjawa</a>
---

目前已支持：3DMigoto & Grasscutter

<!-- more -->

## 3DMigoto

可在 "工具/扩展" 选项下下配置模组，自带 `RemoveTransparencyFilter` (消除虚化) 与 `BufferValues` ，可将mod文件夹拖入指定栏来添加模组

模组必须是文件夹形式，其中会有一个或多个 `.ini` 文件

### 手动添加

打开 `resources\GateServer\3DMigoto\Mods` 可自行添加，应用内列表需要重启以应用更改

## Grasscutter

可在 "工具/扩展" 选项下下配置插件，自带 `opencommand-1.6.1.jar` (by jie65535，让gctools可远程控制服务端) ，可将插件JAR拖入指定栏来添加插件

插件必须是jar形式，确保兼容当前gc版本（可在应用 "主页" 下点击 "测试连接" 查看版本）

### 手动添加

打开 `resources\GateServer\Grasscutter\workdir\plugins` 可自行添加，应用内列表需要重启以应用更改