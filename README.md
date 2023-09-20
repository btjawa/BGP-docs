# BGP-docs

Docs For BTJGenshinPS.

## Development

Using NPM

**Requirements:**

 - [Node.js](https://registry.npmmirror.com/binary.html?path=node/v18.16.1/) >= 18.16.1
 > npm >= 9.5.1
 - [Git](https://git-scm.com/downloads)

```shell
git clone https://github.com/btjawa/BGP-docs.git
cd BGP-docs-master
npm install
```

**Scripts**

```shell
# 单独打包
npm run docs:build-locally

# 与BGP一起打包：请将文件夹重命名为 "BGP-docs" 并放到BGP项目根目录
npm run docs:build
```