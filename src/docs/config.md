---
title: 配置文件
icon: clipboard-check
author: btjawa
date: 2023-09-20
category:
  - 使用文档
tag:
  - 使用文档
  - 配置文件
footer: 转载时请附上原作者btjawa
copyright: <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href="https://github.com/btjawa/BGP-docs" target="_blank">btjawa</a>
---

<!-- more -->

配置文件，位于 `resources\app.config.json`

::: danger

随意修改配置可能会带来未知的bug！请谨慎！

:::

## 配置结构

```json
{
  "version": 1,
  "getRes": "proxy",
  "game": {
    "path": "",
    "_3dmigoto": "D:\\BTJGenshinPS\\GateServer\\3DMigoto\\3DMigoto Loader.exe"
  },
  "grasscutter": {
    "port": "22102",
    "host": "127.0.0.1",
    "dispatch": {
      "port": "443",
      "host": "127.0.0.1",
      "ssl": "selfsigned"
    }
  },
  "proxy": {
    "port": "443",
    "host": "127.0.0.1",
    "ssl": true
  },
  "mongodb": {
    "port": "27017"
  },
  "java": {
    "exec": "java"
  }
}
```

## 详细说明

::: tip
所有的路径均需要使用 `\\` 以符合json语法，并需要定位至exe文件

例：`D:\\Genshin Impact\\Genshin Impact Game\\YuanShen.exe`

:::

`version` 配置文件版本

```json
"version": 1
```

`getRes` 获取资源的方式，仅可能有两个值

 - `"proxy"` Cloudflare CDN加速，有中转

 - `"direct"` 直连，无中转，大陆环境不稳定

```json
"getRes": "proxy"
```

`game` 游戏相关，3dmigoto 路径将根据你的路径动态构建

  - `"path"` 游戏路径
 
  - `"_3dmigoto"` 3DMigoto路径

```json
"game": {
  "path": "",
  "_3dmigoto": "D:\\BTJGenshinPS\\GateServer\\3DMigoto\\3DMigoto Loader.exe"
}
```

`grasscutter` Grasscutter相关

 - `"port"` GameServer监听端口
  
 - `"host"` GameServer监听IP

```json
"grasscutter": {
  "port": "22102",
  "host": "127.0.0.1"
}
```

`grasscutter.dispatch` Dispatch相关

 - `"port"` Dispatch监听端口
  
 - `"host"` Dispatch监听IP

 - `"ssl"` `keystore.p12` 配置，仅可能有三个值

    - `"selfsigned"` 自签名证书，有可信的ca根证书

    - `"official"` 官方证书，[**gc仓库的issue中有表明不要再使用**](https://github.com/Grasscutters/Grasscutter/issues/2184) 无可信的ca根证书

    - `"no"` 不使用SSL，适用于没有自签名证书且服务不在本地架设

```json
"grasscutter": {
  "dispatch": {
    "port": "443",
    "host": "127.0.0.1",
    "ssl": "selfsigned"
  }
}
```

`proxy` 代理相关

 - `"port"` GameServer监听端口
  
 - `"host"` GameServer监听IP

```json
"proxy": {
  "port": "443",
  "host": "127.0.0.1",
  "ssl": true
}
```

`mongodb` MongoDB相关

 - `port` MongoDB监听端口

```json
"mongodb": {
  "port": "27017"
}
```

`java` Java相关

- `exec` Java被调用使用的路径/命令件

    例：`C:\\Program Files\\Java\\jdk-17\\bin\\java.exe`

    或：`java`

```json
"java": {
  "exec": "java"
}
```