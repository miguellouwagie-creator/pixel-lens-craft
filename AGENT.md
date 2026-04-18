# AGENT.md — Studio Pixelens (pixel-lens-craft)

> Read this file in full before touching any code file.
> These are permanent instructions for any AI agent (Antigravity, Claude,
> Copilot, etc.) working on this project.

---

## ⚠️ Priority reading order for AI agents

This repository uses a layered documentation system. When working on the
redesign project (branch `redesign/v2-framer-base`), follow this order:

1. **`/docs/MASTER.md`** — complete redesign specification. Highest authority.
2. **`/docs/PROGRESS.md`** — live project state, phase tracker, decisions log.
3. **`/docs/CONTEXT_BRIEF.md`** — project history and working protocol.
4. **`AGENT.md`** (this file) — operational conventions (commits, testing,
   TypeScript, SEO, anti-patterns). Still active but subordinated to MASTER.md
   in cases of conflict.

Where `AGENT.md` and `MASTER.md` conflict on the redesign project, see
`/docs/MASTER.md` section 1.6 "Reconciliación con AGENT.md" for resolved
directives. Current resolved conflicts:
- Typography: Playfair Display + Inter pairing (not "NEVER Inter")
- Motion library: GSAP (not a "Motion" library import)
- LCP target: under 2.5s ceiling, 2.0s objective

If you detect a new conflict not listed in MASTER.md section 1.6, stop and
escalate to Miguel before acting.

`CLAUDE.md` is scoped to security audit tasks only. Do not apply its
"Senior Security Auditor" role outside explicit audit requests.

---

## 🧭 Project Context

**Studio Pixelens** is a professional photography and web design agency based
in Spain. The website is the primary client acquisition tool.

- **Stack:** Vite + React + TypeScript + Tailwind CSS + shadcn/ui + Supabase
- **Active working branch:** `dev` — never commit directly to `main`
- **Target audience:** Local businesses and mid-size companies in Spain looking
  for corporate photography and/or premium web design
- **Brand tone:** Professional, elegant, bold. Conveys artistic confidence,
  not generic polish

---

## 🎨 SKILL: frontend-design

### Design Philosophy

Before writing a single line of visual code, define a **clear aesthetic
direction and commit to it**. This project requires a **luxury/editorial**
aesthetic — refined, with a photographic and cinematic personality.

**Answer these questions before building any component:**
- What problem does this interface solve for a potential studio client?
- What makes this component MEMORABLE?
- What is the differentiating visual element?

### Typography

- **NEVER** use Inter, Roboto, Arial, system-ui, or Space Grotesk
- Use fonts with editorial character: Playfair Display, Cormorant Garamond,
  Editorial New, PP Neue Montreal, Neue Haas Grotesk, DM Serif Display
- Recommended pairing: expressive display font + refined body font
- Text should feel like a high-end photography magazine

### Color & Theme

- Current project palette: inspect `tailwind.config.ts` before changing colors
- Use CSS variables for full consistency
- **Rule:** One dominant color + one sharp accent. Avoid 5+ equally distributed
  colors — they read as generic
- **NEVER** use purple gradients on white backgrounds or predictable combinations
- Dark backgrounds with warm accents (gold, ivory, terracotta) work well
  for photography brands

### Motion & Animation

- Use the **Motion** library (available in the Vite/React stack)
- Prioritize: a well-orchestrated page entrance with staggered `animation-delay`
- Surprising hover states on buttons, portfolio cards, and CTAs
- Scroll-triggered reveals on long sections
- **No** scattered micro-interactions without purpose

### Spatial Composition

- Asymmetric layouts. Overlapping elements. Diagonal flow where appropriate
- Generous negative space in hero and about sections
- Grid-breaking: elements that escape the container at key moments
- Full-bleed photography with edge-to-edge treatment where possible

### Backgrounds & Depth

- Avoid flat solid color backgrounds — add subtle textures, grain overlays,
  mesh gradients, or dramatic shadows
- Portfolio photos should have cinematic treatment (subtle overlay, vignette, etc.)

### What You Must NEVER Do

- ❌ Purple/blue gradient on white background
- ❌ Unmodified default shadcn `shadow-md` cards
- ❌ Hero with centered title + subtitle + green button (generic SaaS pattern)
- ❌ Lucide icons without integration into a cohesive visual system
- ❌ "Features" sections with 3-column icon + text rows (cliché)

---

## 🧪 SKILL: webapp-testing

### When to Run Tests

Run Playwright tests **mandatorily** after:
- Any change to navigation components (`Header.tsx`)
- Any change to form flows (`ContactForm.tsx`, `Auth.tsx`)
- Any route changes (`App.tsx`)
- Before opening any Pull Request from `dev → main`

### How to Run

The dev server runs on port `5173` (Vite default).

```bash
python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_test.py
```

### Required Pattern in Every Test Script

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle')  # CRITICAL: wait for JS
    # ... test logic
    browser.close()
```

### Minimum Required Tests for This Project

1. **Navigation:** All Header links load without 404 errors
2. **Contact form:** Form validates empty fields before opening WhatsApp
3. **Auth flow:** Login with wrong credentials shows error without crashing
4. **Responsive:** Screenshot at 375px (mobile) and 1440px (desktop) on homepage

### Testing Rules

- Always run `--help` on available scripts before creating a new one
- Use descriptive selectors: `role=`, `text=`, IDs — never fragile XPath
- Save screenshots to `/tmp/` during development, never commit them to the repo

---

## 🔍 SKILL: seo-audit

### SEO Context

- **Site type:** Local business + portfolio (not SaaS, not e-commerce)
- **Priority keywords:** fotografía profesional España, diseño web pymes,
  fotógrafo corporativo, agencia web Dénia
- **SEO goal:** Capture local and regional leads across Spain

### Mandatory SEO Checklist for Every New or Modified Page

**Title tags:**
- Unique per page, primary keyword first, 50–60 characters
- Format: `[Primary Keyword] | Studio Pixelens`

**Meta descriptions:**
- Unique per page, 150–160 characters, includes implicit CTA
- Never duplicate across pages

**Heading structure:**
- One single `<h1>` per page with primary keyword
- Logical hierarchy: H1 → H2 → H3, never skip levels

**Images:**
- WebP format mandatory for all new images
- Descriptive `alt` on every `<img>` (describe the photo, include keyword if natural)
- `loading="lazy"` on all images outside the initial viewport
- Descriptive file names: `corporate-photography-company.webp` not `IMG_3847.jpg`

**Core Web Vitals targets:**
- LCP < 2.5s — hero images are the biggest risk; always optimize them
- CLS < 0.1 — reserve space for images with `aspect-ratio` in CSS
- INP < 200ms — avoid blocking the main thread with heavy animations

**Schema markup:**
- Contact page must have `LocalBusiness` schema
- Portfolio pages must have `ImageGallery` or `CreativeWork` schema
- **Always validate at:** https://search.google.com/test/rich-results

### Known SEO Issues in This Project

- Site is a SPA (React Router) — verify `index.html` has base meta tags and
  each route updates `<title>` dynamically
- No `sitemap.xml` generated yet — add in next iteration
- `/dashboard` and `/auth` must be blocked with `noindex` in `robots.txt`

### Portfolio Pages

- Each project must have descriptive text (minimum 150 words), not just photos
- Include geographic location where relevant ("corporate photo session in Valencia")
- Internal linking: each project should link to its corresponding service page

---

## ⚙️ General Agent Rules

1. **Always work on `dev`**, never on `main`
2. **One commit per task** — messages in format `type: short description`
   (`fix:`, `feat:`, `chore:`, `style:`, `refactor:`)
3. **Strict TypeScript** — zero `any` types. Use Supabase types or Zod infer
4. **Environment variables** — no sensitive data (phone numbers, keys, IDs)
   in source code. Everything via `import.meta.env.VITE_*`
5. **Before modifying an existing component**, read the full file first
6. **After each task**, confirm which files changed and why
7. **Do not remove** existing functionality unless explicitly instructed

---

## 📁 Key File Structure

```
src/
├── components/        # Reusable components
├── pages/             # Pages (React Router routes)
│   ├── legal/         # Privacy, cookies, legal notice
├── contexts/          # AuthContext
├── integrations/      # Supabase client + generated types
├── lib/               # security.ts, validation.ts, utils.ts
├── hooks/             # Custom hooks
├── i18n/              # Internationalization
└── data/              # Static data
```
