import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "使用文档",
      icon: "laptop-code",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },
    {
      text: "命令合集",
      icon: "terminal",
      prefix: "commands/",
      children: "structure",
    },
    "slides",
  ],
});
