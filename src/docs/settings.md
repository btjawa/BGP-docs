---
title: 可设置项
icon: gear
author: btjawa
date: 2023-09-20
category:
  - 使用文档
tag:
  - 使用文档
  - 可设置项
footer: 转载时请附上原作者btjawa
copyright: <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href="https://github.com/btjawa/BGP-docs" target="_blank">btjawa</a>
---

<!-- more -->

## "主页" 选项卡

::: tip 所有更改将会在如下时机被保存

 - 应用退出时
  
*此处已知在任务栏右键图标关闭不会保存，只有点击应用右上角的关闭按钮才会保存，短期不会修复*

 - 点击 "启动服务" 按钮时

 - 点击 "启动代理" 按钮时

 - 点击 "测试连接" 按钮时

 - 点击 "导出配置" 按钮时
:::

### 游戏目录路径

可以点击 “选择路径” 选择游戏路径，此处需要定位至exe文件

::: tip
国服：YuanShen.exe，国际服：GenshinImpact.exe
:::

可使用 “恢复官服(去补丁)” 以去除补丁恢复官服游戏环境

### Grasscutter设置

目前仅支持使用自带的Server，将在后续追加自定义GC路径

 - `“IP/域名”` 即**GameServer**监听IP，**Dispatch**监听IP将会一并更改

:::warning

此处不建议将监听IP填写为域名

:::

 - `“游戏服务器端口”` 即**GameServer**监听端口

 - `“DISPATCH端口”` 即**Dispatch**监听端口

### SSL证书

即 `resources\GateServer\Grasscutter\workdir\keystore.p12`

 - `“自签名证书”` 即**自签名证书**，有可信的根证书

 - `“官方证书(不推荐)”` 即GC repo中提供的证书，[**gc仓库的issue中有表明不要再使用**](https://github.com/Grasscutters/Grasscutter/issues/2184) 无可信的根证书

 - `“不使用SSL”` 即**不使用SSL**，适用于没有自签名证书且**服务不在本地架设**

### MongoDB设置

端口与数据文件夹目前不支持应用内更改

### 客户端代理

右侧的 `“使用SSL”` 复选项决定代理在转发流量时**是否使用https协议与验证ssl**

 - `“IP/域名”` 即流量转发至的目标IP/域名

 - `“DISPATCH端口”` 即流量转发至的目标端口

:::danger

除非转发至的目标IP/域名不是本地IP，否则请不要轻易改变 `“使用SSL”` 的设置！

:::

:::tip

在点击 `“自签名证书”` 时，将会自动勾选上 `“使用SSL”`

在点击 `“官方证书(不推荐)”` 时，将会自动勾选上 `“使用SSL”`

在点击 `“不使用SSL”` 时，将会自动取消勾选 `“使用SSL”`

:::

##  "设置" 选项卡

- 查看日志，可用于issue

- 3DMigoto路径

- JDK路径

- 导入/出应用配置

(以下皆在TODO)

- 代理开放的端口（默认为 `54321`）

- 自动注册（可在游戏中输入用户名直接注册）

- Grasscutter路径

- MongoDB路径

- 自定义服务端版本