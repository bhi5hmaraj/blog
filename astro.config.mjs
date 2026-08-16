import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

export default defineConfig({
  image: {
    layout: "constrained",
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: "light",
    },
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
