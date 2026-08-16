# Bhishma Raj’s blog

A quiet, typographic personal blog built with Astro and edited through Pages CMS.

The landing-page light treatment is inspired by [Sunlit](https://github.com/jackyzha0/sunlit), recreated without its unlicensed source or stock image asset.

```sh
npm install
npm run dev
```

Published posts live in `src/content/posts` with `draft: false`. Vercel deploys `main`; GitHub Actions validates every change.

Markdown footnotes and math work normally. For a captioned or wider image, use native HTML:

```html
<figure class="figure-wide">
  <img src="/images/example.png" alt="Meaningful description" />
  <figcaption>What the figure shows.</figcaption>
</figure>
```
