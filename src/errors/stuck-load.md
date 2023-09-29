---
title: 无限转圈
icon: circle-notch
order: 1
author: btjawa
date: 2023-09-28
category:
  - 常见错误
tag:
  - 常见错误
  - 无限转圈
sticky: false
star: true
footer: 转载时请附上原作者btjawa
copyright: <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href="https://github.com/btjawa/BGP-docs" target="_blank">btjawa</a>
---

客户端连接问题
<!-- more -->

## 解决方案

### 1. 代理

可以参考 [4206](4206) 的解决方案

是否有包含 `hoyoverse.com` `mihoyo.com` 请求，并检查是否被正确转发至服务器IP

若使用Mitm，正确代理到了应该为类似这样的日志

```shell
127.0.0.1:6259: GET https://127.0.0.1/query_region_list?version=CNRELWin4.0.1…
             << 200 OK 3.1k
```

若无此类型请求，则是客户端代理服务器配置错误，请检查主机与端口填写

若有此类型请求但同时也包含 `TLS handshake failed` ，请检查客户端是否有正确安装签发 `keystore.p12` 的CA证书与Mitm的根证书

若有此类型请求但有类似于 `目标服务器积极拒绝连接…` ，请手动在服务器dig或ping米哈游域名

也可尝试重启服务器

### 2. 参考进门白屏/连接超时

可以参考 [4206](white-screen-time-out) 的解决方案

## 原理

已经在解决方案中写明