# Personal Blog — Design & Implementation Document

## 1. Purpose

This document defines the design and implementation approach for a personal blog built with **Astro + Pages CMS + Vercel**.

The goal is deliberately modest:

> Build a quiet, typographic, Tufte-inspired personal site that makes writing and publishing easy.

This is not a digital garden, a personal knowledge graph, a portfolio app, or a bespoke publishing platform. It should feel like a well-made notebook on the web: readable, restrained, personal, and durable.

The highest-level success criterion is simple:

> Writing and publishing should remain easier than maintaining the website.

---

## 2. Core Decisions

Use:

```text
Astro
+ Markdown
+ Pages CMS
+ Vercel
+ a small custom Tufte-inspired theme
```

Do not use Quartz for this version.

### Why Astro

The desired site is primarily a **blog/publication**, not a graph-native knowledge garden.

Astro fits because it gives us:

- first-class Markdown support;
- static output;
- simple content collections;
- flexible layouts;
- easy custom typography;
- easy support for figures, footnotes, and sidenotes;
- minimal client-side JavaScript;
- straightforward deployment.

### Why not Quartz

Quartz is excellent when the product is a network of linked notes with backlinks, graph navigation, popover previews, and Obsidian-style knowledge-garden behavior.

That is not the current goal.

Using Quartz would add an opinionated information architecture we do not need. The blog should remain structurally simple.

### Why Pages CMS

Pages CMS provides the editing layer without introducing a database or hosted CMS backend.

The workflow becomes:

```text
Pages CMS
   ↓
Markdown in GitHub
   ↓
Astro build
   ↓
Vercel deploy
```

This gives:

- browser-based editing;
- non-terminal authoring;
- Git history;
- drafts;
- image management;
- no proprietary content store.

---

## 3. Product Philosophy

The site should feel like:

> A quiet personal notebook with Tufte-like reading ergonomics.

It should emphasize:

- writing;
- arguments;
- diagrams;
- footnotes;
- margin notes;
- figures;
- clear typography;
- long-form readability.

It should not emphasize:

- homepage spectacle;
- animation;
- dashboards;
- card-heavy layouts;
- feeds;
- complex taxonomies;
- social engagement widgets.

The writing should be visually dominant.

---

## 4. Design References

The site is influenced by:

### Tufte-style publishing

Borrow:

- narrow reading columns;
- generous margins;
- sidenotes;
- margin notes;
- integrated figures;
- restrained hierarchy;
- typography-first presentation.

Do not copy Tufte CSS wholesale.

The goal is to borrow the **reading model**, not duplicate an existing stylesheet.

### Literary personal blogs

Borrow:

- strong serif typography;
- simple article titles;
- italic subtitles;
- quiet metadata;
- minimal navigation;
- low visual chrome.

### Personal web

Keep a little individuality:

- a simple personal header;
- small quirks in labels or footer copy;
- subtle handmade-feeling details;
- no startup-branding language.

The result should feel authored, not templated.

---

## 5. Information Architecture

Keep the structure intentionally small.

```text
/
├── Writing
├── About
└── optional: Now
```

### Recommended navigation

```text
Writing
About
```

Optionally:

```text
Now
```

Do not create separate top-level sections for every topic.

Tags are enough for lightweight categorization.

---

## 6. Repository Structure

Recommended project structure:

```text
src/
  components/
    Header.astro
    Footer.astro
    Figure.astro
    Sidenote.astro
    PostList.astro

  layouts/
    BaseLayout.astro
    ArticleLayout.astro

  pages/
    index.astro
    about.astro
    writing/
      index.astro
      [slug].astro

  content/
    posts/
      example-post.md

  styles/
    global.css
    article.css

public/
  images/

.pages.yml
astro.config.mjs
package.json
```

Keep the number of components small.

Do not introduce a design-system abstraction layer unless repetition actually becomes a problem.

---

## 7. Content Model

Use one primary content collection:

```text
posts
```

Do not split content into essays, notes, thoughts, dispatches, projects, and other categories until there is a real need.

Example frontmatter:

```yaml
---
title: "Why Maps Are Useful"
description: "Some notes on models, abstraction, and territory."
date: 2026-08-16
tags:
  - epistemics
draft: false
---
```

Recommended schema:

```ts
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { posts };
```

Only publish posts where:

```ts
draft === false
```

---

## 8. Pages CMS

Use Pages CMS only as the content editor.

Example `.pages.yml`:

```yaml
media:
  input: public/images
  output: /images

content:
  - name: posts
    label: Posts
    type: collection
    path: src/content/posts

    filename: "{year}-{month}-{day}-{title}.md"

    view:
      fields: [title, date, draft]
      primary: title
      sort: [date, title]
      default:
        sort: date
        order: desc

    fields:
      - name: title
        label: Title
        type: string
        required: true

      - name: description
        label: Description
        type: text

      - name: date
        label: Date
        type: date
        required: true

      - name: tags
        label: Tags
        type: string
        list: true

      - name: draft
        label: Draft
        type: boolean
        default: true

      - name: body
        label: Body
        type: rich-text
        options:
          format: markdown
```

The Pages CMS configuration should expose only fields the author actually needs.

Avoid implementation-facing field names.

---

## 9. Typography

Typography is the main visual system.

### Recommended font stack

Primary option:

```text
Body: Literata
Headings: Literata
Italics: Literata Italic
Metadata: IBM Plex Mono
Code: IBM Plex Mono
```

Alternative options:

```text
Spectral + IBM Plex Mono
ET Book + IBM Plex Mono
Alegreya + IBM Plex Mono
Source Serif 4 + IBM Plex Sans
```

### Recommendation

Start with **Literata + IBM Plex Mono**.

Why:

- Literata is comfortable for long-form reading;
- it feels literary without looking antique;
- it works well on screens;
- IBM Plex Mono gives metadata a subtle technical/notational character.

Use mono only for:

- dates;
- tags;
- small labels;
- code;
- optional breadcrumbs.

Do not use mono for body text.

---

## 10. Reading Geometry

The reading column matters more than decoration.

Target:

```text
640–720px main article width
60–75 characters per line
18–19px body size
1.55–1.7 line-height
```

Example:

```css
.article {
  max-width: 42rem;
  margin: 0 auto;
  padding: 4rem 1.25rem 8rem;
}

.article-body {
  font-size: 1.08rem;
  line-height: 1.65;
}
```

On wide screens, use extra horizontal space for:

- sidenotes;
- margin notes;
- wider figures.

Do not use extra width to make paragraphs longer.

---

## 11. Color Palette

Use a warm paper-like palette.

```css
:root {
  --paper: #fffff8;
  --paper-soft: #f7f3e8;

  --ink: #222222;
  --ink-soft: #55514c;
  --muted: #746f67;

  --line: #ddd7c8;

  --accent: #8a4f45;
  --link: #805064;
  --highlight: #efe2a8;
}
```

Principles:

- background should be warm, not stark white;
- body text should be dark, not pure black;
- links should be visible but restrained;
- borders should be subtle;
- avoid gradients;
- avoid bright brand colors.

---

## 12. Global CSS Baseline

```css
:root {
  --paper: #fffff8;
  --paper-soft: #f7f3e8;
  --ink: #222;
  --ink-soft: #55514c;
  --muted: #746f67;
  --line: #ddd7c8;
  --accent: #8a4f45;
  --link: #805064;
  --highlight: #efe2a8;
}

html {
  color-scheme: light;
  font-size: 18px;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);

  font-family:
    "Literata",
    Georgia,
    serif;

  line-height: 1.65;
  text-rendering: optimizeLegibility;
}

main {
  width: min(100% - 2rem, 72rem);
  margin-inline: auto;
}

article {
  width: min(100%, 42rem);
  margin-inline: auto;
  padding: 4rem 0 8rem;
}

h1,
h2,
h3 {
  color: var(--ink);
  font-family: "Literata", Georgia, serif;
  font-weight: 500;
  line-height: 1.1;
}

h1 {
  font-size: clamp(2.5rem, 7vw, 4rem);
  letter-spacing: -0.035em;
  margin-bottom: 0.5rem;
}

h2 {
  margin-top: 3rem;
  font-size: 1.75rem;
  letter-spacing: -0.02em;
}

h3 {
  margin-top: 2rem;
  font-size: 1.3rem;
}

p,
li {
  font-size: 1rem;
}

a {
  color: var(--link);
  text-decoration-thickness: 0.06em;
  text-underline-offset: 0.17em;
}

blockquote {
  margin: 2rem 0;
  padding-left: 1rem;
  border-left: 2px solid var(--line);
  color: var(--ink-soft);
  font-style: italic;
}

code,
pre,
.metadata,
.tags {
  font-family:
    "IBM Plex Mono",
    ui-monospace,
    monospace;
}

.metadata,
.tags {
  color: var(--muted);
  font-size: 0.78rem;
}

::selection {
  background: var(--highlight);
}
```

---

## 13. Header

The header should be tiny and quiet.

Recommended:

```text
Bhishma Raj
Writing · About
```

No large logo.

No sticky megamenu.

No mobile hamburger unless navigation actually grows.

Example:

```astro
<header class="site-header">
  <a href="/" class="site-name">Bhishma Raj</a>

  <nav>
    <a href="/writing">Writing</a>
    <a href="/about">About</a>
  </nav>
</header>
```

---

## 14. Homepage

The homepage should be simple.

Suggested structure:

```text
Bhishma Raj

Software engineer. Writing about systems,
AI, institutions, economics, and things
I'm trying to understand.

Writing

Why Maps Are Useful
16 Aug 2026
Some notes on models, abstraction, and territory.

Why India Skipped Manufacturing
...

About
```

Do not add:

- hero artwork;
- graph visualizations;
- animated backgrounds;
- testimonials;
- bento grids;
- card carousels;
- elaborate topic browsing.

A list of good writing is enough.

---

## 15. Article Layout

Recommended structure:

```text
Title

Italic subtitle / description

date · tags

article body

footnotes
related writing (optional)
```

Example:

```text
Why Maps Are Useful

Some notes on models, abstraction, and territory.

16 August 2026 · epistemics · models

...
```

The article title and opening paragraph should dominate visually.

---

## 16. Tufte-Inspired Sidenotes

This is the main custom feature worth building eventually.

The ideal behavior:

### Desktop

Main prose remains in the central column.

Sidenotes appear in the right margin.

### Mobile

Sidenotes collapse inline below the sentence or paragraph they annotate.

### Important rule

Do not block launch on a perfect sidenote implementation.

Start with standard Markdown footnotes.

Later, map footnotes to margin notes on wide screens if useful.

Example conceptual CSS:

```css
.sidenote {
  float: right;
  clear: right;

  width: 16rem;
  margin-right: -19rem;
  margin-top: 0.2rem;

  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.45;
}

@media (max-width: 960px) {
  .sidenote {
    float: none;
    width: auto;
    margin: 1rem 0;
    padding-left: 1rem;
    border-left: 2px solid var(--line);
  }
}
```

Avoid raw float hacks scattered throughout Markdown.

If true sidenotes become important, implement one reusable component or Markdown transformation.

---

## 17. Figures

Figures should support the argument.

Provide three patterns:

### Normal figure

Same width as article.

### Wide figure

Slightly wider than article on desktop.

### Full-width figure

Rare; only for charts/diagrams that need space.

Example component:

```astro
---
const {
  src,
  alt,
  caption,
  width = "normal"
} = Astro.props;
---

<figure class={`figure figure-${width}`}>
  <img src={src} alt={alt} />
  {caption && <figcaption>{caption}</figcaption>}
</figure>
```

Example CSS:

```css
figure {
  margin: 2.5rem 0;
}

figure img {
  display: block;
  max-width: 100%;
  height: auto;
}

figcaption {
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 0.84rem;
  line-height: 1.4;
}

@media (min-width: 1000px) {
  .figure-wide {
    width: 54rem;
    margin-left: -6rem;
  }
}
```

---

## 18. Footnotes

Support normal Markdown footnotes first.

They are:

- portable;
- easy to write;
- easy for Pages CMS;
- accessible;
- compatible with static rendering.

True Tufte-like sidenotes can be layered on later.

Do not invent custom Markdown syntax before the writing habit proves it is needed.

---

## 19. Tags

Tags are lightweight organizational metadata.

Use them sparingly.

Avoid a giant tag cloud on the homepage.

Article metadata can show:

```text
16 Aug 2026 · epistemics · models
```

A `/tags/[tag]` page can be added later if useful.

Do not build tag browsing before there are enough posts for it to matter.

---

## 20. Drafts

Draft filtering is mandatory.

In all public queries:

```ts
posts.filter((post) => !post.data.draft)
```

Drafts should remain visible in Pages CMS but never render publicly.

A private Git repository is not a substitute for draft filtering.

---

## 21. Comments

Do not implement comments in v1.

If comments become useful later:

### giscus

Good if readers are technical.

Pros:

- static-site friendly;
- GitHub Discussions storage;
- no database;
- easy moderation.

Cons:

- requires GitHub account.

### Hypothesis

Potentially useful for selected essays where inline annotation adds value.

Do not load Hypothesis globally.

If added later, make it opt-in per post:

```yaml
annotations: true
```

Do not run multiple commenting systems by default.

---

## 22. Dark Mode

Dark mode is not a launch requirement.

The visual identity is designed around warm paper.

If implementing dark mode is nearly free, keep it.

Do not spend significant time tuning it.

---

## 23. Motion

Use almost no animation.

Acceptable:

- subtle hover transitions;
- opacity transitions;
- maybe a tiny link underline animation.

Avoid:

- page transition libraries;
- parallax;
- animated backgrounds;
- typing effects;
- cursor trails;
- scroll-triggered motion.

The site should feel calm.

---

## 24. Accessibility

Requirements:

- semantic heading hierarchy;
- visible keyboard focus;
- sufficient contrast;
- readable font size;
- mobile-friendly line length;
- meaningful image alt text;
- captions on important figures;
- sidenotes collapse inline on mobile;
- no content encoded only by color.

Tufte-inspired design should improve reading, not reproduce print-layout assumptions that fail on small screens.

---

## 25. Performance

Astro should ship mostly static HTML.

Do not add client-side frameworks unless there is a concrete need.

Avoid:

- React for simple UI;
- animation libraries;
- client-side CMS code;
- large JS bundles;
- unnecessary analytics scripts.

A text-first blog should be extremely fast almost by accident.

---

## 26. Deployment

Use:

```text
GitHub
  ↓
Vercel
```

Vercel deploys from `main`.

The build should remain straightforward:

```bash
npm ci
npm run build
```

No Docker.

No server.

No database.

---

## 27. GitHub Actions

Vercel handles deployment.

GitHub Actions should only validate the site.

Create:

```text
.github/workflows/validate.yml
```

Example:

```yaml
name: Validate

on:
  pull_request:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci

      - run: npm run build
```

Optional later:

```text
npm run lint
npm run format:check
```

Do not build a complex CI pipeline.

---

## 28. Privacy

Only publish content that is safe to be public.

Important:

> Repository privacy is not publishing privacy.

Anything included in the static build is public.

Do not commit:

- credentials;
- private financial details;
- sensitive information about other people;
- private correspondence;
- drafts that should never exist outside a private system.

The simplest safe model is to keep this repository dedicated to publishable content and drafts intended for eventual publication.

---

## 29. Theme Strategy

Do not start from a large opinionated theme unless it clearly saves time.

Preferred approach:

1. Astro basic/blog starter.
2. Small custom `global.css`.
3. One `ArticleLayout`.
4. Small set of components.
5. Pages CMS.

This is likely simpler than taking a dark or highly styled theme and undoing most of it.

If using an existing theme, treat it as scaffolding rather than identity.

---

## 30. Non-Goals

Explicitly do not build in v1:

- backlinks;
- graph view;
- digital-garden semantics;
- custom search;
- newsletter infrastructure;
- user accounts;
- CMS backend;
- database;
- recommendation system;
- complex project pages;
- AI chatbot;
- automatic summaries;
- full custom design system;
- multi-theme support;
- elaborate comment system.

If one of these becomes useful later, add it because of actual usage.

---

## 31. Implementation Order

### Phase 1 — Functional

1. Create Astro project.
2. Add `posts` content collection.
3. Add one sample post.
4. Build homepage.
5. Build writing index.
6. Build article route.
7. Add draft filtering.
8. Deploy to Vercel.

### Phase 2 — Typography

1. Add Literata.
2. Add IBM Plex Mono.
3. Set article width.
4. Set line-height.
5. Add warm paper palette.
6. Tune headings.
7. Tune metadata.

### Phase 3 — Authoring

1. Add Pages CMS.
2. Test create/edit flow.
3. Test draft flow.
4. Test image uploads.

### Phase 4 — Tufte details

1. Add figure component.
2. Add captions.
3. Add standard footnotes.
4. Add sidenotes only if genuinely useful.
5. Test wide figures.

### Phase 5 — Optional extras

Only after regular publishing:

1. tags page;
2. giscus;
3. Hypothesis;
4. RSS polish;
5. dark mode.

---

## 32. Pitfalls

### Pitfall 1: Turning the blog into a web-design project

The site exists to publish writing.

If a feature delays publishing without making reading or writing meaningfully better, skip it.

### Pitfall 2: Over-copying Tufte

Tufte's principles matter more than reproducing his exact CSS.

Preserve:

- reading width;
- marginal information;
- figure integration;
- restraint.

Do not turn the site into a museum reproduction.

### Pitfall 3: Overusing mono

Mono is for notation and metadata.

Body text should remain serif.

### Pitfall 4: Complex content taxonomy

One `posts` collection is enough until it demonstrably is not.

### Pitfall 5: Desktop-only sidenotes

Margin notes must collapse gracefully on small screens.

### Pitfall 6: Hiding drafts by convention

Filtering must happen in code.

### Pitfall 7: Theme dependency

Avoid heavily modifying upstream theme internals.

A tiny custom theme is easier to maintain.

### Pitfall 8: Adding interactivity because Astro supports it

Astro's flexibility is not an obligation to use JavaScript.

The default should remain static HTML.

---

## 33. Acceptance Criteria

The first version is complete when:

- [ ] Astro builds successfully.
- [ ] Vercel deploys from `main`.
- [ ] Pages CMS can create and edit posts.
- [ ] Draft posts never render publicly.
- [ ] Homepage lists published writing.
- [ ] Article pages are comfortably readable on desktop and mobile.
- [ ] Body typography uses Literata.
- [ ] Metadata uses IBM Plex Mono.
- [ ] Warm paper palette is applied.
- [ ] Standard Markdown footnotes work.
- [ ] Figures and captions work.
- [ ] No unnecessary client-side framework is loaded.
- [ ] Navigation remains simple.
- [ ] Writing a new post takes less effort than editing the site.

---

## 34. Final Principle

The design should disappear behind the writing.

A good version of this site should make a visitor notice:

1. the title;
2. the argument;
3. the diagrams;
4. the footnotes;
5. the next piece they want to read.

Not the framework.

Not the CMS.

Not the theme.

The intended feeling is:

> **A well-made personal notebook that happens to live on the web.**

Build that, publish, and resist adding more until the writing itself asks for it.
