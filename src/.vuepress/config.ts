import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/BGP-docs/",

  lang: "zh-CN",
  title: "BGP文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
