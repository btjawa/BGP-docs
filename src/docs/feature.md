---
title: 功能及原理（建议阅读！）
icon: microchip
order: 1
author: btjawa
date: 2023-09-17
category:
  - 使用文档
tag:
  - 使用文档
  - 功能及原理
sticky: true
star: true
footer: 转载时请附上原作者btjawa
copyright: <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href="https://github.com/btjawa/BGP-docs" target="_blank">btjawa</a>
---

<!-- more -->

::: tip 澄清

私服 即 私人服务器，是指玩家或团体私自搭建的、旨在模拟官方游戏服务器功能的服务器。主要特点是不受官方控制（这意味着可以在私服中测试挂、MOD等等）

原神的私服，本质上是违法的，但这东西和梯子一样，只要你不大规模传播，而且只是为了体验一下，再加上官方现在睁一只眼闭一只眼的态度，米哈游是不会上你家送温暖的（）

你可能会在B站上看到许多类似于 "单机版" "破解版" 这些字眼，实际大多数都只是为了吸引你眼球随便加的tag，自己什么都不知道

Grasscutter 是仿照、模拟原神服务端逻辑进行的一个**重现（Reimplementation）**，全部功能都是手搓的，包括任务；GC本身支持联机，只是不完善 你只需要把端扔到你的windows/linux服务器上，改些参数，你的朋友就可以通过dispatch和你一起玩；配置要求中等（内存1~4G）

真端 有些歧义，但是一般是指 ≈v3.2 **泄漏** 出来的服务端，并可通过 hk4e 登录。拥有与官服完全同步的剧情与交互，但是永远停留在3.2，想更新就等再次泄漏（概率小的不得了）；**理论**上是可以实现联机的，我个人还没有摸索清楚；配置需求比较高（内存20G+）

剧情服与指令服：剧情服一般指的是剧情/任务完整且不会卡死，以剧情为主的端（真端是真正意义上的剧情服，但是3.2不动了，GC4.0至今还有任务，只是很容易卡死）指令服指的就是Grasscutter，以指令为主的端（/tp，/spawn 等）

我个人的理解可能也有些误差，也欢迎大家来Github修正
:::

把这套系统拆解一下：

- Grasscutter - 服务端
- MongoDB - 数据库
- Mitm - 代理

Grasscutter 又可细分为 `Dispatch Server` 与 `Game Server`，前者可以理解为前端，接收到请求后转发至 Game Server “后端” ，Game Server 就是真正给你提供大世界等服务的模块了

MongoDB 则是数据库，存储着你的一切游戏数据，包括圣遗物、角色、材料等等，可使用官方的 [Compass](https://www.mongodb.com/try/download/compass) 可视化编辑