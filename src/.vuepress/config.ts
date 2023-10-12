/// <reference path="./types/vuepress-plugin-search-pro.d.ts" />

import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/BGP-docs/",

  lang: "zh-CN",
  title: "BGP文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
  ],
});
