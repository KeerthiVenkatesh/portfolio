# Keerthi Venkatesh — Portfolio

A personal portfolio site for **Keerthi Venkatesh**, an aspiring Data Analyst / junior Data Scientist, built to
showcase applied analytics work from virtual internships at **Tata Group** and **J.P. Morgan Chase & Co.** alongside
core skills in Python, SQL, and Power BI.

## Overview

- **Role focus:** Data Analyst / junior Data Scientist — content and design lean into data storytelling, dashboards,
  and quantitative reasoning rather than pure engineering.
- **Signature element:** A live-feeling "insight card" in the hero section with animated counters and a mini bar
  chart, echoing the BI dashboards the candidate actually builds.
- **Sections:** Hero, Featured Work (two case studies), Experience & Education timeline, Skills & Certifications,
  About, Contact.
- **Design system:** Paper/ink light theme with a deep navy dark mode, teal/violet/amber data-viz accent palette,
  `Space Grotesk` display type, `Inter` body type, and `IBM Plex Mono` for data labels and timestamps (all with safe
  system-font fallbacks — see note below).

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS 3](https://tailwindcss.com/)
- Plain JavaScript/JSX — no TypeScript, no extra UI libraries
- Zero environment variables required

## Project structure

```
portfolio/
├── app/
│   ├── layout.js        # Root layout, metadata, optional webfont links
│   ├── page.js           # Assembles all page sections
│   └── globals.css       # Tailwind entry + design tokens (fonts, focus states)
├── components/
│   ├── Nav.jsx            # Sticky nav with dark-mode toggle
│   ├── Hero.jsx           # Hero section
│   ├── InsightCard.jsx    # Animated KPI/insight widget (signature element)
│   ├── Projects.jsx       # Featured case studies
│   ├── MiniChart.jsx      # Small SVG charts used inside project cards
│   ├── Experience.jsx     # Experience & education timeline
│   ├── Skills.jsx         # Skills matrix + certifications
│   ├── About.jsx          # About section
│   ├── Contact.jsx        # Contact links
│   └── Footer.jsx
├── public/                # Static assets (empty — no external images required)
├── tailwind.config.js     # Custom color palette, fonts, animations
├── postcss.config.js
├── next.config.js
├── jsconfig.json          # `@/` import alias
└── package.json
```

## Local setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm run start
```

## Notes

- **Fonts:** The site is fully styled using safe system-font fallback stacks defined in `app/globals.css`, so it
  builds and renders correctly with zero network access. `app/layout.js` also links the real Google Fonts
  (`Space Grotesk`, `Inter`, `IBM Plex Mono`) as a progressive enhancement — the site looks great with or without
  that request succeeding.
- **Dark mode:** Toggled via the button in the nav bar; the preference is remembered in `localStorage` and falls
  back to the visitor's OS-level preference on first visit.
- **Content:** All copy was rewritten from the source resume/LinkedIn profile into achievement-driven language
  with illustrative metrics — it is not copied verbatim from any source document.
