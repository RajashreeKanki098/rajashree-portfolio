# Rajashree Kanki — Developer Portfolio

A premium, technical portfolio built with React, Vite and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
├── components/     # Reusable UI pieces (Nav, ProjectCard, CaseStudyModal, ...)
├── sections/       # Page sections (Hero, About, Skills, Projects, Contact, ...)
├── data/           # All editable content lives here
│   ├── profile.js  # Your name, role, bio, contact info, social links
│   ├── skills.js   # Skill categories, "how I build" highlights, experience scope
│   └── projects.js # Every project — add a new object here to add a project
├── hooks/
└── App.jsx
```

## Adding a new project

Open `src/data/projects.js` and append a new object to the `projects` array,
following the shape of the existing entries. Set `featured: true` to show it
in the top 3 "Featured Projects", or leave it `false` to have it appear in
the compact "More Projects" list. Every field feeds the project card and the
case-study modal automatically — no other file needs to change.

## Filling in placeholders

A few fields are intentionally left as placeholders because the source brief
didn't include them. Search the codebase for `[ADD` to find them:

- `src/data/profile.js` — GitHub and LinkedIn URLs
- `src/data/projects.js` — Devnar Foundation and Sajdhaj Creations website URLs
- Project screenshots — every project shows a dashed placeholder box; drop
  real screenshots into `src/assets/` and swap `<ScreenshotPlaceholder />`
  for an `<img>` once you have them.

## Design system

- **Colors**: deep ink navy background, teal signal accent — see
  `tailwind.config.js` for the full token list.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels,
  tags, code-like elements), loaded via Google Fonts in `index.html`.
- **Signature element**: projects are presented as "system records" — a
  monospace status bar (ID / status / type) styled after the admin panels
  and ERP dashboards described in the projects themselves.

## Deploying

The `npm run build` command outputs a static site to `dist/`. That folder
can be deployed as-is to Vercel, Netlify, GitHub Pages, or any static host.
