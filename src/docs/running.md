---
# 这是文章的标题
title: 运行服务
# 这是页面的图标
icon: microchip
# 这是侧边栏的顺序
order: 1
# 设置作者
author: btjawa
# 设置写作时间
date: 2023-09-20
# 一个页面可以有多个分类
category:
  - 使用文档
# 一个页面可以有多个标签
tag:
  - 使用文档
  - 运行服务
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
footer: 转载时请附上原作者btjawa
# 你可以自定义版权信息
copyright: <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href="https://github.com/btjawa/BGP-docs" target="_blank">btjawa</a>
---

基于 `v1.0.0-alpha` 编写；适用于本地部署/云部署。

<!-- more -->

## 自动化运行服务

### 本地端

请确保在 `主页` 选项卡下将 **Grasscutter** 的参数填写为

`IP/域名 127.0.0.1` `游戏服务器端口 22102` `DISPATCH端口 443`

`客户端代理` 一栏端口应该对应DISPATCH端口

点击右下角的 `启动全部服务` 来启动服务（请信任UAC以导入证书），点击 `启动游戏` 启动游戏

等待Grasscutter加载完毕后使用 `/account create 用户名` 创建账户

并在游戏内使用你的用户名（没有设置密码，可以输入≥1位的字符当作密码，例如"1"）来登录

### 远程端

请确保在 `主页` 选项卡下将 **Grasscutter** 的参数填写为

`IP/域名 (服务测配置 server.game.accessAddress)`

`游戏服务器端口 (服务测配置 server.game.bindPort)`

`DISPATCH端口 (服务测配置 server.http.bindPort)`

## 手动运行服务

咕咕咕

可以去 [Grasscutter Wiki](https://github.com/Grasscutters/Grasscutter/wiki) 查看