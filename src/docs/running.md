---
# 这是文章的标题
title: 快速入门
# 这是页面的图标
icon: microchip
# 这是侧边栏的顺序
order: 1
# 设置作者
author: btjawa
# 设置写作时间
date: 2023-10-11
# 一个页面可以有多个分类
category:
  - 使用文档
# 一个页面可以有多个标签
tag:
  - 使用文档
  - 快速入门
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
footer: 转载时请附上原作者btjawa
# 你可以自定义版权信息
copyright: <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href="https://github.com/btjawa/BGP-docs" target="_blank">btjawa</a>
---

<!-- more -->

## 自动化运行服务

### 本地端

请确保在 `主页` 选项卡下将 **Grasscutter** 的参数填写为

`IP/域名 127.0.0.1` `游戏服务器端口 22102` `DISPATCH端口 443`

`客户端代理` 一栏的端口应该对应Grasscutter中的DISPATCH端口

点击右下角的 `启动全部服务` 来启动服务，点击 `选择游戏路径` 添加路径，点击 `启动游戏` 启动游戏

等待Grasscutter加载完毕后使用 `/account create 用户名` 创建账户

并在游戏内使用你的用户名（没有设置密码，可以输入≥1位的字符当作密码，例如"1"）来登录

### 远程端

#### 服务器配置

请确保在 `主页` 选项卡下将 **Grasscutter** 的参数按如下指引填写

`IP/域名` 你服务器的内网/公网IP，若是虚拟机或是内网环境请填写内网IP

:::tip

Windows下ip可在cmd中使用 `ipconfig` 查看，找到对应网卡下的IPv4或IPv6地址

Linux各发行版下可使用 `ifconfig` 查看，找到对应网卡下的inet或inet6

此处RedHat/CentOS可使用 `yum -y install net-tools` ，Debian/Ubuntu可使用 `apt install net-tools`

#### 内网IP

分为A类、B类、C类

A类地址：10.0.0.0 ~ 10.255.255.255

B类地址：172.16.0.0 ~ 172.31.255.255

C类地址：192.168.0.0 ~ 192.168.255.255

请确保你找到的ip不是127.0.0.1或localhost

并在**本地**可以ping到，延迟>1ms，在服务器可以ping到，延迟<1ms

#### 公网IP

此处只需要确保找到的不是内网ip，或127.0.0.1/localhost

并在**本地**可以ping到，延迟>1ms，在服务器可以ping到，延迟<1ms

:::

`游戏服务器端口` 应是gc目录下 `config.json` ，`server.game.bindPort` 的键值

`DISPATCH端口` 应是gc目录下 `config.json` ，`server.http.bindPort` 的键值

在服务端点击 `启动全部服务` 启动后，可安全关闭代理

随后在防火墙放出 UDP `22102`，TCP `443` 或你自己选择的Dispatch端口

若是腾讯云、阿里云等需要在安全组额外放出

#### 本地配置

在 `"客户端代理"` 配置好服务器的公网IP与Dispatch端口，点击 `启动代理` 来启动代理

点击 `选择游戏路径` 添加路径，点击 `启动游戏` 启动游戏

等待Grasscutter加载完毕后使用 `/account create 用户名` 创建账户

并在游戏内使用你的用户名（没有设置密码，可以输入≥1位的字符当作密码，例如"1"）来登录

## 手动运行服务

咕咕咕...

可以去 [Grasscutter Wiki](https://github.com/Grasscutters/Grasscutter/wiki) 查看