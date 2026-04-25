# INVENTORY.md — Studio Pixelens / Pixel Lens Craft

> Inventario exhaustivo y verificable del estado actual del repositorio.
> Generado en Fase 0 (read-only). Ningún archivo de producción fue modificado.
> Criterio de aceptación G0: permite entender el repo sin abrir el código.

---

## 0. Meta

| Campo | Valor |
|---|---|
| Fecha de inventario | 2026-04-19 |
| Branch | `redesign/v2-framer-base` |
| Commit HEAD | `4150925` |
| Tag previo | `v1.0-pre-redesign` |
| Ejecutor | Claude Code (Sonnet 4.6) en Antigravity |
| Total de archivos versionados | 214 |

---

## 1. Stack confirmado

| Categoría | Librería | Versión en package.json | Versión latest (npm) | Notas |
|---|---|---|---|---|
| runtime | Node.js | 20 LTS | — | No declarado en package.json, especificado en MASTER §5.1 |
| build | Vite | ^5.4.19 | 6.x | Configurado en vite.config.ts |
| build | @vitejs/plugin-react-swc | ^3.11.0 | 3.11.0 | SWC compiler |
| build | TypeScript | ^5.8.3 | 5.8.3 | strict: true en tsconfig |
| build | vite-plugin-compression | ^0.5.1 | 0.5.1 | Gzip + Brotli activos |
| build | ESLint | ^9.32.0 | 9.32.0 | Con typescript-eslint |
| ui | React | ^18.3.1 | **19.2.5** | MAJOR disponible, no urgente |
| ui | React DOM | ^18.3.1 | **19.2.5** | Par con react |
| ui | Tailwind CSS | ^3.4.17 | 4.x | v4 es breaking, no migrar Sprint 1 |
| ui | shadcn/ui (Radix) | varios ^1.x / ^2.x | varios | 46 componentes instalados |
| ui | lucide-react | ^0.462.0 | **1.8.0** | MAJOR: v0 → v1 |
| ui | next-themes | ^0.3.0 | 0.4.6 | ThemeProvider **no wired** en App/main |
| ui | class-variance-authority | ^0.7.1 | 0.7.1 | Para variantes de componentes |
| ui | clsx | ^2.1.1 | 2.1.1 | Utility className |
| ui | tailwind-merge | ^2.6.0 | **3.5.0** | MAJOR disponible |
| ui | tailwindcss-animate | ^1.0.7 | 1.0.7 | Animaciones CSS Tailwind |
| motion | gsap | ^3.13.0 | 3.15.0 | Librería única de motion (D04) |
| motion | @gsap/react | ^2.1.2 | 2.1.2 | Hook useGSAP |
| forms | react-hook-form | ^7.61.1 | 7.72.1 | Formularios |
| forms | zod | ^3.25.76 | **4.3.6** | MAJOR disponible |
| forms | @hookform/resolvers | ^3.10.0 | **5.2.2** | MAJOR disponible |
| forms | dompurify | ^3.3.0 | 3.4.0 | Sanitización XSS |
| forms | @types/dompurify | ^3.0.5 | 3.0.5 | Types DOMPurify |
| data | @tanstack/react-query | ^5.83.0 | 5.99.1 | Estado servidor |
| data | @supabase/supabase-js | ^2.75.0 | 2.103.3 | Cliente Supabase |
| data | recharts | ^2.15.4 | **3.8.1** | Solo en ui/chart.tsx (shadcn), no en páginas |
| data | date-fns | ^3.6.0 | **4.1.0** | Solo en ui/calendar.tsx (shadcn), no en páginas |
| routing | react-router-dom | ^6.30.1 | **7.14.1** | MAJOR disponible |
| i18n | i18next | ^25.6.0 | **26.0.6** | MAJOR disponible |
| i18n | react-i18next | ^16.0.0 | **17.0.4** | MAJOR disponible |
| testing | Playwright | no en package.json | — | `scripts/` **no existe** en el repo |
| otros | sonner | ^1.7.4 | **2.0.7** | MAJOR disponible |
| otros | embla-carousel-react | ^8.6.0 | 8.6.0 | Solo en ui/carousel.tsx |
| otros | react-compare-image | ^3.5.10 | 3.5.16 | Potencial uso en Portfolio.tsx |
| otros | react-day-picker | ^8.10.1 | **9.14.0** | MAJOR. Solo en ui/calendar.tsx |
| otros | vaul | ^0.9.9 | **1.1.2** | MAJOR. Solo en ui/drawer.tsx |
| otros | input-otp | ^1.4.2 | 1.4.2 | Solo en ui/input-otp.tsx |
| otros | cmdk | ^1.1.1 | 1.1.1 | Solo en ui/command.tsx |
| otros | react-resizable-panels | ^2.1.9 | **4.10.0** | MAJOR. Solo en ui/resizable.tsx |

> **Nota:** `npm outdated` ejecutado sin `node_modules` instalado (clone fresco). Columna "Current" aparece MISSING. Versiones "Wanted" y "Latest" son correctas desde el registry.

---

## 2. Dependencias outdated

### Output literal de `npm outdated`

```
Package                          Current    Wanted   Latest  Location  Depended by
@gsap/react                      MISSING     2.1.2    2.1.2  -         pixel-lens-craft
@hookform/resolvers              MISSING    3.10.0    5.2.2  -         pixel-lens-craft
@radix-ui/react-accordion        MISSING    1.2.12   1.2.12  -         pixel-lens-craft
@radix-ui/react-alert-dialog     MISSING    1.1.15   1.1.15  -         pixel-lens-craft
@radix-ui/react-aspect-ratio     MISSING     1.1.8    1.1.8  -         pixel-lens-craft
@radix-ui/react-avatar           MISSING    1.1.11   1.1.11  -         pixel-lens-craft
@radix-ui/react-checkbox         MISSING     1.3.3    1.3.3  -         pixel-lens-craft
@radix-ui/react-collapsible      MISSING    1.1.12   1.1.12  -         pixel-lens-craft
@radix-ui/react-context-menu     MISSING    2.2.16   2.2.16  -         pixel-lens-craft
@radix-ui/react-dialog           MISSING    1.1.15   1.1.15  -         pixel-lens-craft
@radix-ui/react-dropdown-menu    MISSING    2.1.16   2.1.16  -         pixel-lens-craft
@radix-ui/react-hover-card       MISSING    1.1.15   1.1.15  -         pixel-lens-craft
@radix-ui/react-label            MISSING     2.1.8    2.1.8  -         pixel-lens-craft
@radix-ui/react-menubar          MISSING    1.1.16   1.1.16  -         pixel-lens-craft
@radix-ui/react-navigation-menu  MISSING    1.2.14   1.2.14  -         pixel-lens-craft
@radix-ui/react-popover          MISSING    1.1.15   1.1.15  -         pixel-lens-craft
@radix-ui/react-progress         MISSING     1.1.8    1.1.8  -         pixel-lens-craft
@radix-ui/react-radio-group      MISSING     1.3.8    1.3.8  -         pixel-lens-craft
@radix-ui/react-scroll-area      MISSING    1.2.10   1.2.10  -         pixel-lens-craft
@radix-ui/react-select           MISSING     2.2.6    2.2.6  -         pixel-lens-craft
@radix-ui/react-separator        MISSING     1.1.8    1.1.8  -         pixel-lens-craft
@radix-ui/react-slider           MISSING     1.3.6    1.3.6  -         pixel-lens-craft
@radix-ui/react-slot             MISSING     1.2.4    1.2.4  -         pixel-lens-craft
@radix-ui/react-switch           MISSING     1.2.6    1.2.6  -         pixel-lens-craft
@radix-ui/react-tabs             MISSING    1.1.13   1.1.13  -         pixel-lens-craft
@radix-ui/react-toast            MISSING    1.2.15   1.2.15  -         pixel-lens-craft
@radix-ui/react-toggle           MISSING    1.1.10   1.1.10  -         pixel-lens-craft
@radix-ui/react-toggle-group     MISSING    1.1.11   1.1.11  -         pixel-lens-craft
@radix-ui/react-tooltip          MISSING     1.2.8    1.2.8  -         pixel-lens-craft
@supabase/supabase-js            MISSING   2.103.3  2.103.3  -         pixel-lens-craft
@tanstack/react-query            MISSING    5.99.1   5.99.1  -         pixel-lens-craft
@types/dompurify                 MISSING     3.0.5    3.0.5  -         pixel-lens-craft
class-variance-authority         MISSING     0.7.1    0.7.1  -         pixel-lens-craft
clsx                             MISSING     2.1.1    2.1.1  -         pixel-lens-craft
cmdk                             MISSING     1.1.1    1.1.1  -         pixel-lens-craft
date-fns                         MISSING     3.6.0    4.1.0  -         pixel-lens-craft
dompurify                        MISSING     3.4.0    3.4.0  -         pixel-lens-craft
embla-carousel-react             MISSING     8.6.0    8.6.0  -         pixel-lens-craft
gsap                             MISSING    3.15.0   3.15.0  -         pixel-lens-craft
i18next                          MISSING  25.10.10   26.0.6  -         pixel-lens-craft
input-otp                        MISSING     1.4.2    1.4.2  -         pixel-lens-craft
lucide-react                     MISSING   0.462.0    1.8.0  -         pixel-lens-craft
next-themes                      MISSING     0.3.0    0.4.6  -         pixel-lens-craft
react                            MISSING    18.3.1   19.2.5  -         pixel-lens-craft
react-compare-image              MISSING    3.5.16   3.5.16  -         pixel-lens-craft
react-day-picker                 MISSING    8.10.1   9.14.0  -         pixel-lens-craft
react-dom                        MISSING    18.3.1   19.2.5  -         pixel-lens-craft
react-hook-form                  MISSING    7.72.1   7.72.1  -         pixel-lens-craft
react-i18next                    MISSING    16.6.6   17.0.4  -         pixel-lens-craft
react-resizable-panels           MISSING     2.1.9   4.10.0  -         pixel-lens-craft
react-router-dom                 MISSING    6.30.3   7.14.1  -         pixel-lens-craft
recharts                         MISSING    2.15.4    3.8.1  -         pixel-lens-craft
sonner                           MISSING     1.7.4    2.0.7  -         pixel-lens-craft
tailwind-merge                   MISSING     2.6.1    3.5.0  -         pixel-lens-craft
tailwindcss-animate              MISSING     1.0.7    1.0.7  -         pixel-lens-craft
vaul                             MISSING     0.9.9    1.1.2  -         pixel-lens-craft
zod                              MISSING   3.25.76    4.3.6  -         pixel-lens-craft
```

> MISSING = node_modules no instalado en este clone. Versiones "Wanted" y "Latest" son correctas.

### Deps candidatas a auditar en Fase 2

| Paquete | Package.json | Latest | Tipo salto | Observación |
|---|---|---|---|---|
| `react` / `react-dom` | ^18.3.1 | 19.2.5 | MAJOR | React 19 con breaking changes en concurrent mode |
| `react-router-dom` | ^6.30.1 | 7.14.1 | MAJOR | v7 tiene breaking changes en API de rutas |
| `zod` | ^3.25.76 | 4.3.6 | MAJOR | v4 tiene breaking changes en API |
| `@hookform/resolvers` | ^3.10.0 | 5.2.2 | MAJOR | Salto de 2 majors |
| `tailwind-merge` | ^2.6.0 | 3.5.0 | MAJOR | Puede afectar la función `cn()` |
| `lucide-react` | ^0.462.0 | 1.8.0 | MAJOR v0→v1 | Muchos iconos renombrados en v1 |
| `i18next` / `react-i18next` | ^25.6 / ^16.0 | 26.0.6 / 17.0.4 | MAJOR | API config puede cambiar |
| `react-day-picker` | ^8.10.1 | 9.14.0 | MAJOR | Solo en ui/calendar.tsx (shadcn), no en páginas |
| `react-resizable-panels` | ^2.1.9 | 4.10.0 | MAJOR | Solo en ui/resizable.tsx, no en páginas |
| `recharts` | ^2.15.4 | 3.8.1 | MAJOR | Solo en ui/chart.tsx, no en páginas |
| `date-fns` | ^3.6.0 | 4.1.0 | MAJOR | Solo en ui/calendar.tsx |
| `vaul` | ^0.9.9 | 1.1.2 | MAJOR | Solo en ui/drawer.tsx |
| `sonner` | ^1.7.4 | 2.0.7 | MAJOR | Toasts, usado en App.tsx |
| `@supabase/supabase-js` | ^2.75.0 | 2.103.3 | minor | 28 patches de distancia, actualizable |

---

## 3. Árbol src/

```
src/
├── App.tsx                         — Router principal con lazy loading, TooltipProvider, Toaster, Sonner
├── main.tsx                        — Punto de entrada: QueryClientProvider > BrowserRouter > AuthProvider > App
├── vite-env.d.ts                   — Declaración tipos import.meta.env para Vite
├── index.css                       — Variables CSS globales (tokens HSL), Tailwind base/components/utilities
│
├── assets/                         — Imágenes y video (incluidas en bundle Vite)
│   ├── Fondo Vid.mp4               — Video hero (3.048 KB = ~3 MB, candidato a optimización)
│   ├── FondoMovil.png              — Imagen hero para móvil (552 KB)
│   ├── Logo2-PP.png                — Logo variante con iniciales PP
│   ├── logo.png                    — Logo principal Studio Pixelens
│   ├── hero-image.jpg              — Imagen hero alternativa
│   ├── miguel-photo.jpeg           — Foto del equipo (About)
│   ├── sergio-foto2.png            — Foto del equipo (About) (648 KB)
│   ├── PC1.jpg                     — Imagen decorativa
│   ├── Section1.jpg                — Imagen de sección
│   ├── Section3.jpg                — Imagen de sección
│   ├── portfolio-bvs.png           — Thumbnail BVS (808 KB)
│   ├── portfolio-gymdenia.png      — Thumbnail GymDenia (568 KB)
│   ├── portfolio-tropidenia.png    — Thumbnail TropiDenia (600 KB)
│   ├── Portfolio GoldenCoastCharter2.png — Thumbnail GoldenCoast (espacio en nombre)
│   ├── Portfolio.png               — Imagen portfolio genérica
│   ├── editada-1.jpeg              — Foto editada para comparación portfolio (256 KB)
│   ├── editada-2.png               — Foto editada para comparación portfolio
│   ├── editada-3.png               — Foto editada para comparación portfolio (408 KB)
│   ├── editada-4.png               — Foto editada para comparación portfolio (316 KB)
│   ├── editada-5.jpg               — Foto editada para comparación portfolio (416 KB)
│   ├── editada-6.jpg               — Foto editada para comparación portfolio (688 KB)
│   ├── editada-8.png               — Foto editada para comparación portfolio (284 KB)
│   ├── editada-9.png               — Foto editada para comparación portfolio
│   ├── editada-10.png              — Foto editada para comparación portfolio (360 KB)
│   ├── sin-editar-1.jpeg           — Foto original para comparación portfolio
│   ├── sin-editar-2.jpeg           — Foto original para comparación portfolio (416 KB)
│   ├── sin-editar-3.jpeg           — Foto original para comparación portfolio
│   ├── sin-editar-4.jpeg           — Foto original para comparación portfolio (576 KB)
│   ├── sin-editar-5.jpg            — Foto original para comparación portfolio (324 KB)
│   ├── sin-editar-6.jpg            — Foto original para comparación portfolio (432 KB)
│   ├── sin-editar-8.jpeg           — Foto original para comparación portfolio
│   ├── sin-editar-9.jpeg           — Foto original para comparación portfolio
│   ├── sin-editar-10.jpeg          — Foto original para comparación portfolio (300 KB)
│   └── showcase/
│       ├── bvs.jpg                 — Imagen showcase proyecto BVS
│       ├── goldencoast.jpg         — Imagen showcase Golden Coast Charter
│       ├── gymdenia.jpg            — Imagen showcase GymDenia
│       └── tropidenia.jpg          — Imagen showcase TropiDenia
│
├── assetsFotos Portfolio           — [FLAGEAR] Posible directorio con espacio en nombre, sin extensión
│
├── assets_backup/                  — [FLAGEAR] Backup de assets en git (duplicado, ~15 MB)
│   ├── Editada 1-10.* (9 archivos) — Copias con espacios en nombre
│   ├── Sin editar 1-10.* (9 archivos) — Copias con espacios en nombre
│   ├── Fondo.png, Fondo4.png, Fondo5.png
│   ├── FondoMovil.png, Logo2.jpg, Logoo.png
│   ├── Portfolio.png, hero-image.jpg, logo.png
│
├── components/
│   ├── About.tsx                   — Sección "Sobre nosotros" con foto de equipo (113 líneas)
│   ├── CTASection.tsx              — Bloque CTA con número WhatsApp hardcoded (41 líneas)
│   ├── ContactForm.tsx             — Formulario contacto RHF+Zod+DOMPurify, target WhatsApp (193 líneas)
│   ├── ContactForm.tsx.bak         — [FLAGEAR] Backup en git, debe eliminarse
│   ├── FloatingElements.tsx        — Elementos decorativos flotantes con GSAP (121 líneas)
│   ├── Footer.tsx                  — Footer con nav, contacto, redes, RGPD links (171 líneas)
│   ├── Footer.tsx.bak              — [FLAGEAR] Backup en git, debe eliminarse
│   ├── FormSection.tsx             — Sección contenedora del formulario con contacto alternativo (117 líneas)
│   ├── GuaranteesSection.tsx       — Sección garantías del servicio (60 líneas)
│   ├── Header.tsx                  — Navegación principal, menú móvil, CTA WhatsApp hardcoded (458 líneas)
│   ├── Header.tsx.backup           — [FLAGEAR] Backup en git, debe eliminarse
│   ├── Hero.tsx                    — Hero con video de fondo y animaciones GSAP (113 líneas)
│   ├── Hero.tsx.backup             — [FLAGEAR] Backup en git, debe eliminarse
│   ├── HorizontalShowcase.tsx      — Carrusel horizontal proyectos con GSAP ScrollTrigger (239 líneas)
│   ├── PageLoader.tsx              — Spinner fallback para Suspense/lazy loading (11 líneas)
│   ├── Portfolio.tsx               — Sección portfolio embebida en Home (70 líneas)
│   ├── PricingSection.tsx          — Paquetes de edición con datos Supabase y WhatsApp (372 líneas)
│   ├── Process.tsx                 — Sección proceso de trabajo (111 líneas)
│   ├── ProjectCard.tsx             — Tarjeta de proyecto individual con animaciones (222 líneas)
│   ├── ScrollToTop.tsx             — useEffect que hace scroll al top en navegación de rutas (18 líneas)
│   ├── SectionDivider.tsx          — Separador visual entre secciones (5 líneas)
│   ├── ServiceSelector.tsx         — Selector de servicios dual con iconos y animaciones (227 líneas)
│   ├── Services.tsx                — Grid de servicios (172 líneas)
│   ├── SimplePricingSection.tsx    — [FLAGEAR] Versión alternativa/duplicada de PricingSection (169 líneas)
│   ├── StickyScrollSection.tsx     — Scroll-spy con GSAP ScrollTrigger, usa processData (270 líneas)
│   ├── Testimonials.tsx            — Sección testimonios de clientes (111 líneas)
│   ├── WebPortfolioShowcase.tsx    — Showcase detallado portfolio web con GSAP (290 líneas)
│   ├── WhatsAppButton.tsx          — Botón flotante WhatsApp fijo en viewport (24 líneas)
│   ├── WhyUs.tsx                   — Sección razones para elegir Studio Pixelens (223 líneas)
│   │
│   ├── dashboard/
│   │   ├── GallerySection.tsx      — Galería fotos con Supabase Storage signed URLs (395 líneas)
│   │   ├── OrdersSection.tsx       — Historial de pedidos con estados via Supabase (191 líneas)
│   │   ├── PackagesSection.tsx     — Selector paquetes edición con React Query + Supabase (200 líneas)
│   │   └── UploadSection.tsx       — Upload fotos originales a Supabase Storage (175 líneas)
│   │
│   └── ui/                         — 46 componentes shadcn/ui (Radix UI), total ~4000 líneas
│       ├── accordion.tsx, alert-dialog.tsx, alert.tsx, aspect-ratio.tsx
│       ├── avatar.tsx, badge.tsx, breadcrumb.tsx, button.tsx (63 líneas, incluye variante "cta")
│       ├── calendar.tsx, card.tsx, carousel.tsx (224 líneas, embla)
│       ├── chart.tsx (303 líneas, recharts), checkbox.tsx, collapsible.tsx
│       ├── command.tsx (132 líneas, cmdk), context-menu.tsx, dialog.tsx
│       ├── drawer.tsx (87 líneas, vaul), dropdown-menu.tsx, form.tsx
│       ├── hover-card.tsx, input-otp.tsx, input.tsx, label.tsx
│       ├── menubar.tsx (207 líneas), navigation-menu.tsx, pagination.tsx
│       ├── popover.tsx, progress.tsx, radio-group.tsx, resizable.tsx
│       ├── scroll-area.tsx, select.tsx (143 líneas), separator.tsx
│       ├── sheet.tsx, sidebar.tsx (637 líneas, más grande de UI), skeleton.tsx
│       ├── slider.tsx, sonner.tsx, switch.tsx, table.tsx
│       ├── tabs.tsx, textarea.tsx, toast.tsx, toaster.tsx
│       ├── toggle-group.tsx, toggle.tsx, tooltip.tsx
│       └── use-toast.ts            — Hook toast de shadcn (duplicado en src/hooks/use-toast.ts)
│
├── contexts/
│   └── AuthContext.tsx             — Contexto auth: user, session, loading, signUp, signIn, signOut (115 líneas)
│
├── data/
│   ├── processData.ts              — Array ProcessItem[] para StickyScrollSection (46 líneas, icon: any)
│   └── showcaseData.ts             — Array Project[] para HorizontalShowcase, 4 proyectos (68 líneas)
│
├── hooks/
│   ├── use-mobile.tsx              — Hook useIsMobile() con matchMedia y breakpoint 768px (19 líneas)
│   ├── use-toast.ts                — Re-export del hook toast de ui/use-toast.ts
│   └── useSecureNavigation.ts      — Hook anti open-redirect: secureNavigate, secureExternalLink (41 líneas)
│
├── i18n/
│   ├── config.ts                   — Configuración i18next, getStoredLanguage() hardcoded a "es" (23 líneas)
│   └── locales/
│       ├── en.json                 — Traducciones inglés (418 keys, 485 líneas)
│       ├── en.json.temp            — [FLAGEAR] Archivo temporal en git
│       ├── es.json                 — Traducciones español (432 keys, 501 líneas)
│       ├── es.json.backup          — [FLAGEAR] Backup en git
│       └── es.json.temp            — [FLAGEAR] Archivo temporal en git
│
├── integrations/
│   └── supabase/
│       ├── client.ts               — Cliente createClient<Database> con validación URL y env vars (33 líneas)
│       └── types.ts                — Tipos generados automáticamente por Supabase CLI (379 líneas)
│
├── lib/
│   ├── gsap.ts                     — Re-export gsap, ScrollTrigger, useGSAP con registerPlugin (8 líneas)
│   ├── security.ts                 — sanitizeHtml, sanitizeInput, isUrlSafe, sanitizeEmail, createSafeHtml (56 líneas)
│   ├── utils.ts                    — Función cn() = twMerge(clsx(...)) (6 líneas)
│   └── validation.ts               — Schemas Zod: emailSchema, passwordSchema, signUpSchema, signInSchema, checkPasswordStrength (87 líneas)
│
└── pages/
    ├── Auth.tsx                    — Login/registro con Tabs, Zod, security lib, redirect si autenticado (272 líneas)
    ├── Dashboard.tsx               — Hub autenticado con 4 tabs: Packs, Subir, Galería, Pedidos (111 líneas)
    ├── Index.tsx                   — Home: orquesta 12 secciones, sin lógica propia (67 líneas)
    ├── NotFound.tsx                — Página 404 con botón volver al inicio (26 líneas)
    ├── Portfolio.tsx               — Galería antes/después con toggle por foto, WhatsApp CTA (153 líneas)
    ├── PortfolioWebs.tsx           — Showcase portfolio web, envuelve WebPortfolioShowcase (37 líneas)
    └── legal/
        ├── CookiesPolicy.tsx       — Política cookies en HTML hardcoded ES (69 líneas)
        ├── LegalNotice.tsx         — Aviso legal en HTML hardcoded ES (97 líneas)
        └── PrivacyPolicy.tsx       — Política privacidad en HTML hardcoded ES (122 líneas)
```

---

## 4. Rutas

> Extraído de `src/App.tsx`. Comparado contra MASTER §5.3 para identificar divergencias.

| Path actual | Componente | Import path | Sprint MASTER §5.3 | Público/Auth | Divergencia vs MASTER |
|---|---|---|---|---|---|
| `/` | `Index` | `./pages/Index` | Sprint 1 | Público | Ninguna |
| `/auth` | `Auth` | `./pages/Auth` | Sprint 2 | Público | Ninguna |
| `/dashboard` | `Dashboard` | `./pages/Dashboard` | Sprint 2 | Auth | Dashboard monolítico (tabs) vs sub-rutas en MASTER |
| `/portfolio` | `Portfolio` | `./pages/Portfolio` | Sprint 1 | Público | Ninguna |
| `/portfolio-webs` | `PortfolioWebs` | `./pages/PortfolioWebs` | No en MASTER | Público | Ruta extra no especificada |
| `/aviso-legal` | `LegalNotice` | `./pages/legal/LegalNotice` | Sprint 1 | Público | MASTER dice `/legal/terminos` |
| `/privacidad` | `PrivacyPolicy` | `./pages/legal/PrivacyPolicy` | Sprint 1 | Público | MASTER dice `/legal/privacidad` |
| `/cookies` | `CookiesPolicy` | `./pages/legal/CookiesPolicy` | Sprint 1 | Público | MASTER dice `/legal/cookies` |
| `*` | `NotFound` | `./pages/NotFound` | — | Público | Ninguna |

**Rutas en MASTER §5.3 ausentes en App.tsx:**
- `/servicios` → `Services` (no existe página dedicada, solo componente)
- `/sobre` → `About` (no existe página dedicada, solo componente)
- `/contacto` → `Contact` (no existe página dedicada, solo componente)
- `/styleguide` → `Styleguide` (no existe)
- `/dashboard/paquetes`, `/dashboard/subir`, `/dashboard/pedidos`, `/dashboard/pedidos/:id` (implementadas como tabs en `/dashboard`)

---

## 5. Páginas (src/pages/)

### Index.tsx (Home)
- **Ruta:** `src/pages/Index.tsx`
- **Líneas:** 67
- **Componentes hijos:** Header, Hero, ServiceSelector, SectionDivider (x3), HorizontalShowcase, StickyScrollSection, PhotoPricingSection, WhyUs, Testimonials, About, FormSection, Footer, WhatsAppButton
- **Hooks usados:** ninguno (solo orquesta componentes)
- **Dependencias terceros:** ninguna directa
- **Estado MASTER §7.1:** REBUILD CON NUEVO DS — estructura de secciones cambia en Sprint 1

### Auth.tsx
- **Ruta:** `src/pages/Auth.tsx`
- **Líneas:** 272
- **Componentes hijos:** Button, Input, Label, Card+, Tabs+, Camera (Lucide)
- **Hooks usados:** useState, useNavigate, useAuth (AuthContext)
- **Dependencias terceros:** react-router-dom, lucide-react, @/lib/security, @/lib/validation
- **Estado MASTER §7.1:** PRESERVAR VERBATIM (Sprint 2 rediseña, Sprint 1 no toca)

### Dashboard.tsx
- **Ruta:** `src/pages/Dashboard.tsx`
- **Líneas:** 111
- **Componentes hijos:** Button, Card+, Tabs+, Lucide icons, PackagesSection, OrdersSection, UploadSection, GallerySection
- **Hooks usados:** useEffect, useState, useNavigate, useAuth, supabase (directo)
- **Dependencias terceros:** react-router-dom, lucide-react, @supabase/supabase-js
- **Estado MASTER §7.1:** TBD Fase 2

### Portfolio.tsx (galería edición fotográfica)
- **Ruta:** `src/pages/Portfolio.tsx`
- **Líneas:** 153
- **Componentes hijos:** Button (shadcn), ArrowLeft, MessageCircle (Lucide)
- **Hooks usados:** useState, useTranslation
- **Dependencias terceros:** react-router-dom, react-i18next, lucide-react
- **Estado MASTER §7.1:** TBD Fase 2 — contiene número de teléfono hardcoded

### PortfolioWebs.tsx
- **Ruta:** `src/pages/PortfolioWebs.tsx`
- **Líneas:** 37
- **Componentes hijos:** Header, Footer, WhatsAppButton, WebPortfolioShowcase, Button, ArrowLeft
- **Hooks usados:** ninguno
- **Dependencias terceros:** lucide-react
- **Estado MASTER §7.1:** TBD Fase 2 — ruta no especificada en MASTER §5.3

### NotFound.tsx
- **Ruta:** `src/pages/NotFound.tsx`
- **Líneas:** 26
- **Componentes hijos:** Button, Home (Lucide)
- **Hooks usados:** ninguno
- **Estado MASTER §7.1:** TBD Fase 2

### legal/PrivacyPolicy.tsx
- **Ruta:** `src/pages/legal/PrivacyPolicy.tsx`
- **Líneas:** 122
- **Componentes hijos:** ninguno (HTML hardcoded)
- **Hooks usados:** ninguno
- **Estado MASTER §7.1:** TBD Fase 2 — contenido hardcoded, sin i18n, sin Layout legal

### legal/CookiesPolicy.tsx
- **Ruta:** `src/pages/legal/CookiesPolicy.tsx`
- **Líneas:** 69
- **Componentes hijos:** ninguno (HTML hardcoded)
- **Hooks usados:** ninguno
- **Estado MASTER §7.1:** TBD Fase 2 — contenido hardcoded, sin i18n, sin Layout legal

### legal/LegalNotice.tsx
- **Ruta:** `src/pages/legal/LegalNotice.tsx`
- **Líneas:** 97
- **Componentes hijos:** ninguno (HTML hardcoded, importa useTranslation sin usarlo)
- **Hooks usados:** useTranslation (importado, no utilizado)
- **Estado MASTER §7.1:** TBD Fase 2 — contenido hardcoded, import sin usar

---

## 6. Componentes

### 6.1 shadcn/ui (src/components/ui/)

| Componente | Usado en (referencias verificadas) | Usos aproximados |
|---|---|---|
| button | Auth, Dashboard, NotFound, Portfolio, PortfolioWebs, Header, Footer, ContactForm, PricingSection, WhyUs... | 20+ |
| card | Auth, Dashboard, PackagesSection, OrdersSection, GallerySection | 10+ |
| tabs | Auth, Dashboard | 4 |
| input | Auth, ContactForm | 4 |
| label | Auth, ContactForm | 4 |
| textarea | ContactForm | 2 |
| badge | Header, GallerySection, OrdersSection | 4 |
| dialog | ContactForm (potencial) | 1 |
| tooltip | Header | 2 |
| sonner | App.tsx (Toaster) | 1 |
| toast / toaster | App.tsx (Toaster) | 1 |
| separator | Footer | 2 |
| avatar | — | 0 (instalado, no usado en páginas) |
| chart | — | 0 (solo ui/chart.tsx, no en páginas) |
| calendar | — | 0 (solo ui/calendar.tsx, no en páginas) |
| carousel | — | 0 (solo ui/carousel.tsx, no en páginas) |
| command | — | 0 (solo ui/command.tsx, no en páginas) |
| resizable | — | 0 (solo ui/resizable.tsx, no en páginas) |
| sidebar | — | 0 (solo ui/sidebar.tsx, no en páginas) |
| menubar | — | 0 (instalado, no en páginas) |
| context-menu | — | 0 (instalado, no en páginas) |
| pagination | — | 0 (instalado, no en páginas) |
| breadcrumb | — | 0 (instalado, no en páginas) |
| drawer | — | 0 (vaul, instalado, no en páginas) |
| input-otp | — | 0 (instalado, no en páginas) |

> Nota: button.tsx incluye variante personalizada `"cta"` usada en Auth y NotFound.

### 6.2 Custom (src/components/ excluyendo ui/)

| Path | Líneas | Importado por | Tipo |
|---|---|---|---|
| Header.tsx | 458 | Index (1), PortfolioWebs (1), y 7 otros contextos posibles | layout |
| Hero.tsx | 113 | Index | section |
| Footer.tsx | 171 | Index, PortfolioWebs, y otros | layout |
| ServiceSelector.tsx | 227 | Index | section |
| SectionDivider.tsx | 5 | Index (x3) | layout |
| HorizontalShowcase.tsx | 239 | Index | section |
| StickyScrollSection.tsx | 270 | Index | section |
| PricingSection.tsx | 372 | Index | section |
| WhyUs.tsx | 223 | Index | section |
| Testimonials.tsx | 111 | Index | section |
| About.tsx | 113 | Index | section |
| FormSection.tsx | 117 | Index | section |
| ContactForm.tsx | 193 | FormSection | section |
| CTASection.tsx | 41 | (no encontrado en páginas activas) | section |
| FloatingElements.tsx | 121 | Hero (posible) | otro |
| GuaranteesSection.tsx | 60 | (no encontrado en páginas activas) | section |
| Process.tsx | 111 | (no encontrado en páginas activas) | section |
| Services.tsx | 172 | (no encontrado en páginas activas) | section |
| SimplePricingSection.tsx | 169 | (no encontrado en páginas activas) | otro |
| ProjectCard.tsx | 222 | HorizontalShowcase, WebPortfolioShowcase | otro |
| WebPortfolioShowcase.tsx | 290 | PortfolioWebs (1) | section |
| WhatsAppButton.tsx | 24 | Index, PortfolioWebs | layout |
| ScrollToTop.tsx | 18 | App.tsx | otro |
| PageLoader.tsx | 11 | App.tsx (Suspense fallback) | otro |
| dashboard/GallerySection.tsx | 395 | Dashboard | otro |
| dashboard/OrdersSection.tsx | 191 | Dashboard | otro |
| dashboard/PackagesSection.tsx | 200 | Dashboard | otro |
| dashboard/UploadSection.tsx | 175 | Dashboard | otro |

> Componentes marcados "(no encontrado en páginas activas)": CTASection, GuaranteesSection, Process, Services, SimplePricingSection. Candidatos a auditar como código muerto en Fase 2.

### 6.3 Portfolio module (src/components/portfolio/)

No existe directorio `src/components/portfolio/` en el repositorio actual. El portfolio fotográfico está implementado directamente en `src/pages/Portfolio.tsx` (153 líneas) y el portfolio de webs en `src/components/WebPortfolioShowcase.tsx` + `src/pages/PortfolioWebs.tsx`.

> MASTER §5.2 y §6.3 referencian `src/components/portfolio/` como módulo preservado. Esta estructura no existe. La lógica de portfolio está dispersa en pages/ y components/. Flaggeado en §16.

---

## 7. Hooks custom (src/hooks/)

| Hook | Firma | Retornos | Usado en |
|---|---|---|---|
| `useIsMobile()` | `(): boolean` | `boolean` (true si < 768px) | Potencial uso en Header, HorizontalShowcase |
| `useToast()` | `(): { toast, dismiss, toasts }` | Objeto con funciones toast | AuthContext, ContactForm |
| `useSecureNavigation()` | `(): { secureNavigate, secureExternalLink }` | Dos funciones de navegación segura | No encontrado en uso activo en páginas públicas |

---

## 8. Contexts (src/contexts/)

| Context | Estado que gestiona | Provider en App.tsx |
|---|---|---|
| `AuthContext` | `user: User \| null`, `session: Session \| null`, `loading: boolean`, `signUp`, `signIn`, `signOut` | No está en App.tsx. Está en **main.tsx** como `<AuthProvider>` |

> `QueryClientProvider` y `BrowserRouter` también están en main.tsx. App.tsx solo tiene `TooltipProvider`.

---

## 9. Lib utilities (src/lib/)

| Archivo | Funciones exportadas | Uso |
|---|---|---|
| `utils.ts` | `cn(...inputs: ClassValue[]): string` | Merge de clases Tailwind en toda la codebase |
| `security.ts` | `sanitizeHtml`, `sanitizeInput`, `isUrlSafe`, `sanitizeEmail`, `createSafeHtml` | Auth.tsx, useSecureNavigation.ts, GallerySection |
| `validation.ts` | `emailSchema`, `passwordSchema`, `weakPasswordSchema`, `nameSchema`, `signUpSchema`, `signInSchema`, `checkPasswordStrength`, tipos `SignUpForm`, `SignInForm` | Auth.tsx |
| `gsap.ts` | Re-export: `gsap`, `ScrollTrigger`, `useGSAP` (con registerPlugin) | HorizontalShowcase, StickyScrollSection, Hero, WebPortfolioShowcase |

**Ausentes vs MASTER §5.2:**
- `src/lib/supabase.ts` — referenciado en MASTER §5.2, no existe. El cliente Supabase vive en `src/integrations/supabase/client.ts`.
- `src/lib/motion.ts` — referenciado en MASTER §5.2 como "Fase 6, no crear ahora". Correcto, no existe.

---

## 10. Integrations

### 10.1 Supabase

- **Cliente:** `src/integrations/supabase/client.ts` (33 líneas)
  - Crea `createClient<Database>` con `auth.storage: localStorage`, `persistSession: true`, `autoRefreshToken: true`
  - Valida URL con `new URL()` y lanza error si no es válida
  - Valida existencia de env vars al inicializar (throw si faltan)

- **Types generados:** `src/integrations/supabase/types.ts` (379 líneas)
  - Tablas declaradas: `orders`, `photo_packages`, `photos`, `profiles`, `re_edit_requests`
  - Enums: no detectados en los tipos exportados
  - Exports: `Json`, `Database`, `Tables<T>`, `TablesInsert<T>`, `TablesUpdate<T>`, `Enums<T>`, `CompositeTypes<T>`

- **Env vars referenciadas:**
  - `VITE_SUPABASE_URL` — URL del proyecto Supabase
  - `VITE_SUPABASE_PUBLISHABLE_KEY` — **DIVERGENCIA:** MASTER §5.5 dice `VITE_SUPABASE_ANON_KEY`. El código usa `VITE_SUPABASE_PUBLISHABLE_KEY`. Flaggeado en §16.

---

## 11. i18n

- **Archivos locale presentes:** `es.json`, `en.json` (más 3 temporales/backup en git)
- **Keys en es.json:** ~432 (conteo por líneas con strings)
- **Keys en en.json:** ~418
- **Diferencia numérica:** 14 keys (ES tiene 14 keys más que EN)
- **Namespace:** único (`translation`)
- **Configuración:** `src/i18n/config.ts` — función `getStoredLanguage()` hardcoded a `"es"`, sin leer localStorage ni preferencias del navegador. El switch de idioma EN no funciona sin cambiar esta función.
- **Fallback:** `fallbackLng: "es"`

---

## 12. Public assets

| Archivo | Tipo | Tamaño KB | Nota |
|---|---|---|---|
| android-chrome-512x512.png | PNG | 360 | Icono PWA grande |
| android-chrome-192x192.png | PNG | 68 | Icono PWA |
| apple-touch-icon.png | PNG | 60 | Icono iOS |
| favicon.ico | ICO | 16 | Favicon multi-size |
| favicon-32x32.png | PNG | 4 | Favicon 32px |
| favicon-16x16.png | PNG | 4 | Favicon 16px |
| placeholder.svg | SVG | 4 | Placeholder shadcn |
| site.webmanifest | JSON | 1 | Manifest PWA |
| sitemap.xml | XML | 1 | Sitemap (mínimo, sin rutas) |
| robots.txt | TXT | 1 | Robots (pendiente noindex /auth /dashboard) |
| _headers | — | 4 | Headers Cloudflare Pages |
| _redirects | — | 1 | Redirects Cloudflare Pages |

> Ningún asset en `public/` supera 500 KB. Los assets grandes (+500 KB) están en `src/assets/` (bundle Vite): `Fondo Vid.mp4` (~3 MB), `sergio-foto2.png` (648 KB), `portfolio-bvs.png` (808 KB), `portfolio-tropidenia.png` (600 KB), `portfolio-gymdenia.png` (568 KB), `editada-6.jpg` (688 KB), `sin-editar-4.jpeg` (576 KB), `FondoMovil.png` (552 KB). Todos candidatos a optimización WebP y compresión.

---

## 13. Scripts Playwright

El directorio `scripts/` **no existe** en el repositorio. AGENT.md §🧪 y MASTER §9.3 referencian `scripts/with_server.py` para correr Playwright, pero el archivo no está en el repo.

**Implicación:** los tests Playwright no son ejecutables desde el repo actual sin crear el directorio y script primero.

**Puerto dev declarado en AGENT.md y MASTER:** 5173.
**Puerto dev real (vite.config.ts):** 8080. Ver §16 para detalle del impacto.

---

## 14. Supabase migrations

Listado cronológico. **Contenido SQL no leído** (congelado Sprint 1).

| Archivo | Fecha extraída del nombre | Descripción extraída del nombre |
|---|---|---|
| `20251010085309_18845f8a-735e-447f-96dc-3bf91147cad7.sql` | 2025-10-10 08:53 | Migración inicial (UUID como nombre, sin descripción) |
| `20260412184100_security_remediation.sql` | 2026-04-12 18:41 | Remediación de seguridad (RLS, triggers, funciones SECURITY DEFINER) |

---

## 15. Docs existentes

| Archivo | Líneas | Descripción |
|---|---|---|
| `docs/MASTER.md` | 951 | Especificación completa del rediseño v2. Single source of truth. v1.2 |
| `docs/PROGRESS.md` | 299 | Estado del proyecto, session log, decisions log, metrics. v1.4 |
| `docs/CONTEXT_BRIEF.md` | 274 | Historia, razonamiento, protocolo de sesión. v1.2 |
| `docs/SECURITY_AUDIT.md` | 16 | Protocolo de auditoría de seguridad (scoped a auditorías puntuales) |
| `docs/INVENTORY.md` | (este archivo) | Inventario Fase 0 |

**Docs esperados en MASTER §5.2, pendientes de creación:**
- `docs/CONTENT.md` — output Fase 2
- `docs/MIGRATION.md` — output Fase 2
- `docs/PORTFOLIO_SPEC.md` — output Fase 2

---

## 16. Observaciones

Lista de flagging. **Sin acción correctiva.** Solo señalar.

### 16.1 Puerto dev incorrecto en vite.config.ts

`vite.config.ts` configura `server.port: 8080`. AGENT.md §🧪 y MASTER §9.3 dicen "puerto dev 5173". Los tests Playwright escritos con `http://localhost:5173` fallarán contra el servidor real que corre en 8080.

### 16.2 Número de teléfono hardcoded en múltiples archivos

`"34667326300"` aparece hardcoded en:
- `src/components/ContactForm.tsx` (línea 56, 57, 59)
- `src/components/CTASection.tsx` (líneas 5, 21, 32, 33)
- `src/components/Footer.tsx` (línea 118)
- `src/components/FormSection.tsx` (línea 45)
- `src/components/Header.tsx` (líneas 49, 315, 440)
- `src/components/PricingSection.tsx` (líneas 34, 337)
- `src/pages/Portfolio.tsx` (línea 85)

Viola AGENT.md §⚙️ regla 4: "no sensitive data in source code". Debe ir a `import.meta.env.VITE_WHATSAPP_NUMBER`.

### 16.3 src/assets_backup/ comprometido en git

~~El directorio `src/assets_backup/` contiene 18 archivos duplicados con espacios en los nombres (`Editada 1.jpeg`, etc.). Añade peso innecesario al clone y al bundle si Vite los procesa. Debería estar en `.gitignore`.~~

**✅ Resuelto en Fase 2, commit `ddce38a` (2026-04-25).** `git rm -r --cached src/assets_backup/` ejecutado (27 archivos desindexados). `.gitignore` actualizado con `src/assets_backup/`. Archivos conservados en disco.

### 16.4 Archivos .bak, .backup, .temp en git

~~Archivos de trabajo comprometidos en el repositorio:~~
~~- `src/components/ContactForm.tsx.bak`~~
~~- `src/components/Footer.tsx.bak`~~
~~- `src/components/Header.tsx.backup`~~
~~- `src/components/Hero.tsx.backup`~~
~~- `src/i18n/locales/es.json.backup`~~
~~- `src/i18n/locales/en.json.temp`~~
~~- `src/i18n/locales/es.json.temp`~~

**✅ Resuelto en Fase 2, commit `a77f245` (2026-04-25).** Los 7 archivos eliminados con `git rm`. `.gitignore` actualizado con patrones `*.bak`, `*.backup`, `*.temp`.

### 16.5 Violaciones zero-any policy (14+ ocurrencias)

`any` explícito encontrado (viola MASTER §10.3 / AGENT.md):
- `src/contexts/AuthContext.tsx:10-11` — `Promise<{ error: any }>` en signUp/signIn
- `src/components/ContactForm.tsx:54` — `onSubmit = async (data: any)`
- `src/components/dashboard/GallerySection.tsx:127,182,222` — `error: any`, `variant: any`
- `src/components/dashboard/OrdersSection.tsx:51,76,89` — `error: any`, `variant: any`
- `src/components/dashboard/PackagesSection.tsx:40,78` — `error: any`
- `src/components/dashboard/UploadSection.tsx:95` — `error: any`
- `src/data/processData.ts:6` — `icon: any`
- `src/hooks/useSecureNavigation.ts:12` — `state?: any`

### 16.6 scripts/ no existe en el repositorio

~~AGENT.md §🧪 y MASTER §9.3 referencian `scripts/with_server.py` (runner Playwright). El directorio `scripts/` no está en el repo. Los tests automatizados no son ejecutables sin crear este archivo.~~

**✅ Resuelto en Fase 2, commit `f0743c7` (2026-04-25).** `scripts/with_server.py` creado. Smoke test pasado contra http://localhost:5173 (200, exit 0). Ver PHASE2_REPORT.md §2.

### 16.7 next-themes instalado pero ThemeProvider no wired

`next-themes` está en package.json. El `ThemeProvider` no aparece en `main.tsx` ni en `App.tsx`. Solo se usa `useTheme` en `src/components/ui/sonner.tsx`. El sistema de temas (dark/light toggle) no está activo. MASTER §1.4 y §3 especifican dark mode default via `next-themes`.

### 16.8 Rutas de MASTER §5.3 incompletas en App.tsx

Faltan 7 rutas especificadas:
- `/servicios`, `/sobre`, `/contacto` — no existen como páginas independientes
- `/styleguide` — no existe
- `/legal/privacidad`, `/legal/cookies`, `/legal/terminos` — implementadas en paths distintos (`/privacidad`, `/cookies`, `/aviso-legal`)
- Sub-rutas dashboard — implementadas como tabs en `/dashboard`
- Ruta `/portfolio-webs` — extra, no en spec

### 16.9 Env var mismatch: VITE_SUPABASE_PUBLISHABLE_KEY vs VITE_SUPABASE_ANON_KEY

`src/integrations/supabase/client.ts` lee `import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY`. MASTER §5.5 y §11.1 documentan `VITE_SUPABASE_ANON_KEY`. El `.env.local` debe contener la variable con el nombre real usado en el código.

### 16.10 src/lib/supabase.ts ausente

MASTER §5.2 lista `src/lib/supabase.ts` en la estructura de carpetas. No existe. El cliente Supabase está en `src/integrations/supabase/client.ts` (correcto). La referencia en MASTER §5.2 es una incongruencia documental.

### 16.11 src/types/ directory ausente

MASTER §5.2 lista `src/types/` en la estructura esperada. El directorio no existe. No hay archivos de tipos custom.

### 16.12 src/components/portfolio/ no existe

MASTER §5.2 describe `src/components/portfolio/` como "MÓDULO PRESERVADO". No existe esta estructura. El portfolio fotográfico está en `src/pages/Portfolio.tsx` y el de webs en `src/components/WebPortfolioShowcase.tsx`.

### 16.13 Componentes con line count anormalmente alto (>200 líneas)

| Componente | Líneas |
|---|---|
| Header.tsx | 458 |
| PricingSection.tsx | 372 |
| GallerySection.tsx | 395 |
| WebPortfolioShowcase.tsx | 290 |
| StickyScrollSection.tsx | 270 |
| ServiceSelector.tsx | 227 |
| WhyUs.tsx | 223 |
| ProjectCard.tsx | 222 |

### 16.14 Componentes potencialmente huérfanos

~~No se encontraron importaciones activas de: `CTASection.tsx`, `GuaranteesSection.tsx`, `Process.tsx`, `Services.tsx`, `SimplePricingSection.tsx`. Candidatos a código muerto. Verificar con depcheck en Fase 2.~~

**✅ Auditado en Fase 2 (2026-04-25). Ver PHASE2_REPORT.md §3.** Confirmados como huérfanos: CTASection, GuaranteesSection, Process, Services, SimplePricingSection. FloatingElements: huérfano diferido (único import es HorizontalShowcase, también DESCARTAR). Dossier completo listo para ejecución en Fase 5.1. NO eliminar hasta Fase 5.1.

### 16.15 SimplePricingSection.tsx duplica PricingSection.tsx

Dos componentes con funcionalidad similar (169 vs 372 líneas). Origen incierto. No está importado activamente.

### 16.16 console.error en código de producción

`src/components/dashboard/GallerySection.tsx` líneas 66, 87, 104: `console.error()` activo.
`src/hooks/useSecureNavigation.ts` líneas 15, 29: `console.error()` activo.

> Nota: `vite.config.ts` tiene `esbuild: { drop: ["console", "debugger"] }` que elimina console en build de producción. En desarrollo seguirán apareciendo.

### 16.17 i18n: switch de idioma no funcional

`src/i18n/config.ts` línea 7-9: `getStoredLanguage()` siempre retorna `"es"`. El cambio de idioma a EN no persistirá ni se activará desde el navegador.

### 16.18 Portfolio.tsx (page) no usa react-compare-image

El paquete `react-compare-image` está instalado pero `Portfolio.tsx` implementa la comparación antes/después con toggle manual (useState + opacity), no con el paquete. Candidato a auditar si el paquete es necesario.

### 16.19 LegalNotice.tsx importa useTranslation sin usarlo

`src/pages/legal/LegalNotice.tsx` línea 2: `import { useTranslation } from "react-i18next"`. No se usa en el componente. Import muerto.

### 16.20 Archivo sin extensión: "assetsFotos Portfolio"

~~El árbol `src/` incluye `src/assetsFotos Portfolio` sin extensión. Puede ser un directorio con espacios en el nombre o un archivo mal nombrado. Requiere verificación manual.~~

**✅ Resuelto en Fase 2, commit `f802256` (2026-04-25).** Verificado: era un archivo de texto ASCII de 2 bytes (solo CRLF). Sin referencias en ningún archivo fuente. Eliminado con `git rm`.

### 16.21 Primera migración con nombre UUID

`supabase/migrations/20251010085309_18845f8a-735e-447f-96dc-3bf91147cad7.sql` — nombre sin descripción semántica. No permite inferir contenido sin leer el SQL.

---

## 17. Fuera de scope Sprint 1

Listado de paths intocables según MASTER §5.2 y §7.1:

```
/supabase/migrations/
/src/integrations/supabase/
/src/contexts/AuthContext.tsx
/src/lib/security.ts
/src/lib/validation.ts
/src/hooks/useSecureNavigation.ts
```

> `/src/components/portfolio/` referenciado en MASTER §7.1 como intocable no existe como directorio. El módulo de portfolio fotográfico real está en `src/pages/Portfolio.tsx` — tratar como intocable en Sprint 1 hasta clarificación en Fase 2.

---

## 18. Change log

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-19 | Claude Code (Sonnet 4.6) | Inventario inicial Fase 0 |
