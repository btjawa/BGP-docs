---
home: true
icon: home
title: 主页
heroImage: /favicon.png
bgImage: /assets/image/1-light.svg
bgImageDark: /assets/image/1-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: GenshinPS文档
tagline: BGP官方/GC非官方文档
actions:
  - text: 使用文档 📖
    link: ./docs/

  - text: 命令合集 🎯
    link: ./commands/  

highlights:

  - header: 常见错误 🤔
    description: 按照实际使用环境整理了一份错误码/其他错误合集
    image: /assets/image/bomb.svg
    bgImage: /BGP-docs/assets/image/2-light.svg
    bgImageDark: /BGP-docs/assets/image/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 4214
        icon: triangle-exclamation
        details: 客户端报错
        link: ./errors/4214

      - title: 4206
        icon: triangle-exclamation
        details: 客户端报错
        link: ./errors/4206

      - title: 400/4201
        icon: certificate
        details: 客户端报错
        link: ./errors/400-4201

      - title: 502/12-4301账号验证失败
        icon: link
        details: 客户端报错
        link: ./errors/502-4301

      - title: -9107
        icon: link
        details: 客户端报错
        link: ./errors/-9107

      - title: 进门白屏/连接超时
        icon: link
        details: 登录环节一切正常，进门卡死
        link: ./errors/white-screen-time-out

      - title: 无限转圈
        icon: circle-notch
        details: 天理取名/游戏内其他操作无限转圈
        link: ./errors/stuck-load

      - title: 卡检查更新
        icon: wrench
        details: 登录环节一切正常，卡检查更新
        link: ./errors/stuck-update

      - title: 正在加载Resources...
        icon: circle-notch
        details: 服务端卡死
        link: ./errors/stuck-loading-resources

      - title: 无角色语音
        icon: microphone
        details: 客户端配置
        link: ./errors/char-voice

      - title: 任务卡死
        icon: clipboard-check
        details: 服务端问题
        link: ./errors/stuck-game-task

copyright: false
footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href="https://github.com/btjawa/BGP-docs" target="_blank">btjawa</a>
---
