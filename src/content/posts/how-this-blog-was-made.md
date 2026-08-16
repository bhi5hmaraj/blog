---
title: "How this blog was made"
description: "The small stack and influences behind this site."
date: 2026-08-16
tags: [tech, ai-assisted]
draft: false
---

This version replaces my old Jekyll blog with a small static site built on [Astro](https://astro.build/). Posts remain plain Markdown in the repository, [Pages CMS](https://pagescms.org/) provides browser editing, and [Vercel](https://vercel.com/) handles deployment.

The visual direction is inspired by [Tufte CSS](https://edwardtufte.github.io/tufte-css/): narrow prose, generous margins, quiet typography, and notes that do not fight the text.<sup class="sidenote-number"><a href="#note-et-book" aria-label="Sidenote 1">1</a></sup>

<aside class="sidenote" id="note-et-book"><strong>1.</strong> The typeface is ET Book, served locally from the Tufte CSS project.</aside>

The landing-page light borrows its central idea from Jacky Zhao’s [Sunlit](https://github.com/jackyzha0/sunlit) experiment, reduced here to animated CSS window shades. Article annotations come from [Hypothesis](https://web.hypothes.is/).

[OpenAI Codex](https://openai.com/codex/) helped port the old content, implement the site, test responsive layouts, and revise several visual attempts. I directed the design, chose what stayed, and edited the result. That is why this post carries the `ai-assisted` badge.

The [source is public](https://github.com/bhi5hmaraj/blog).
