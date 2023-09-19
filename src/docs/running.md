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
date: 2023-09-17
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

请确保在 主页 选项卡下将 **Grasscutter** 的参数填写为
`IP/域名 127.0.0.1` `游戏服务器端口 22102` `DISPATCH端口 443`

## 页面内容

你可以自由在这里书写你的 Markdown。

::: tip

- 你可以将图片和 Markdown 文件放置在一起，但是你需要使用**相对链接**`./` 进行引用。

- 对于 `.vuepress/public` 文件夹的图片，请使用绝对链接 `/` 进行引用。

:::

主题包含了一个自定义徽章可以使用:

> 文字结尾应该有深蓝色的 徽章文字 徽章。 <Badge text="徽章文字" color="#242378" />

## 页面结构

此页面应当包含:

- [路径导航](https://theme-hope.vuejs.press/zh/guide/layout/breadcrumb.html)
- [标题和页面信息](https://theme-hope.vuejs.press/zh/guide/feature/page-info.html)
- [TOC (文章标题列表)](https://theme-hope.vuejs.press/zh/guide/layout/page.html#标题列表)
- [贡献者、更新时间等页面元信息](https://theme-hope.vuejs.press/guide/feature/meta.html)
- [评论](https://theme-hope.vuejs.press/zh/guide/feature/comment.html)
- [导航栏](https://theme-hope.vuejs.press/zh/guide/layout/navbar.html)
- [侧边栏](https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html)
- [页脚](https://theme-hope.vuejs.press/zh/guide/layout/footer.html)
- 返回顶部按钮

你可以通过主题选项和页面 Frontmatter 自定义它们。
