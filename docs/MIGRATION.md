# MIGRATION.md — Studio Pixelens Redesign v2

> **Propósito:** clasificación archivo por archivo de `src/components/` y `src/pages/` del repo actual, indicando qué se hace con cada uno durante el rediseño Sprint 1. Documento vivo: se actualiza al cerrar cada fase de ejecución (5.1, 5.2, 5.3, 5.4, 5.5).
>
> **Aplica D31 (pivote de scope):** se hace rediseño UI completo de las páginas públicas, no "preserve verbatim" salvo para lógica reutilizable y módulos técnicos (AuthContext, validation, security, i18n config, Supabase integration).

---

## 0. Meta

| Campo | Valor |
|---|---|
| Versión | 1.0 |
| Fecha | 2026-04-19 |
| Autor | Miguel Louwagie Sapena + Claude Opus 4.7 |
| Estado | Draft. Clasificación inicial. Se refina al ejecutar cada subfase. |
| Alcance | `src/components/`, `src/pages/`, `src/data/`, `src/hooks/` (relevantes para Sprint 1 público). |
| Bloquea | G1 gate. |

---

## 1. Convención de clasificación

| Etiqueta | Significado | Acción operativa |
|---|---|---|
| 🏗️ **REBUILD** | UI nueva desde cero con nuevo DS, manteniendo datos o lógica si aplica | Crear archivo nuevo (o reescribir el existente vaciándolo). El archivo final resultante no debe parecerse al actual. |
| ♻️ **REFACTOR** | Se mantiene la estructura general pero se reescribe con DS nuevo | Editar archivo existente preservando interface pública (props, exports). |
| 🔒 **PRESERVAR** | Lógica intocable, no se modifica | Ignorar durante el rediseño. Solo se toca si es absolutamente necesario (bug). |
| 🗑️ **DESCARTAR** | Eliminar completamente | `git rm` el archivo. Antes de borrar, validar con `grep -r "ComponentName" src/` que no hay imports residuales. |
| 🆕 **CREAR** | Archivo nuevo que no existe actualmente | Nuevo archivo en la ruta indicada. |
| ⏭️ **DIFERIR** | Pertenece a Sprint 2 (dashboard, auth) | No se toca en Sprint 1. |

---

## 2. Clasificación de `src/pages/`

| Path | Clasificación | Fase | Notas |
|---|---|---|---|
| `src/pages/Index.tsx` | 🏗️ REBUILD | 5.1 | Home completo. Reescribir imports de componentes nuevos. Estructura actual: 14 imports → estructura nueva: 8 bloques modulares (ver CONTENT.md §3). |
| `src/pages/Portfolio.tsx` | 🏗️ REBUILD | 5.5 | Reescribir galería con `react-compare-image` (cierra DT-12), 4 bloques nuevos (ver CONTENT.md §4). Elimina toggle manual de opacidad. Elimina fondo gradiente naranja-rojo. |
| `src/pages/PortfolioWebs.tsx` | 🏗️ REBUILD | 5.5 | Reescribir con 4 bloques editoriales. Actualmente es shell de 34 líneas envolviendo `WebPortfolioShowcase` — este pasa también a REBUILD. |
| `src/pages/Auth.tsx` | ⏭️ DIFERIR | Sprint 2 | Tocar solo para envolver en nuevo `Header` + `Footer` del rediseño. Contenido interno intocable Sprint 1. |
| `src/pages/NotFound.tsx` | ♻️ REFACTOR | 5.2 | Actualizar visual con DS nuevo (tipografía, colores, CTA al home). Mantener lógica. |
| `src/pages/dashboard/*.tsx` (todos) | ⏭️ DIFERIR | Sprint 2 | Cualquier archivo bajo `pages/dashboard/`. No se abre hasta post-Basilea. |
| `src/pages/legal/*.tsx` (Aviso, Privacidad, Cookies) | ♻️ REFACTOR | 5.2 | Mantener copy legal íntegro. Aplicar `LegalLayout` con tipografía DS nueva. Cierra DT-11 (import sin uso en LegalNotice). |

---

## 3. Clasificación de `src/components/` — bloques del Home

| Path | Clasificación | Fase | Reemplaza a / se fusiona con | Notas |
|---|---|---|---|---|
| `src/components/Header.tsx` | 🏗️ REBUILD | 5.2 | (mismo archivo) | 458 líneas → ~150 líneas objetivo. Elimina pill-on-scroll. Simplifica dropdown portfolio. Usa `VITE_WHATSAPP_NUMBER` (cierra DT-01 parcial). Lang toggle real (no sólo visual, cierra DT-09 parcial). |
| `src/components/Hero.tsx` | 🏗️ REBUILD | 5.1 | (mismo archivo) | Eliminar sticky video + parallax. Layout asimétrico text-left + image-right. Copy nuevo de `home.hero.*`. CTA WhatsApp conversacional. |
| `src/components/ServiceSelector.tsx` | 🗑️ DESCARTAR | 5.1 | Sustituido por nuevo `HomeServices.tsx` (🆕 CREAR) | Split-screen SaaS 2019-2021 abandonado (D31). Reemplazado por layout editorial de 2 tarjetas numeradas 01/02 según CONTENT.md §3.2. |
| `src/components/HorizontalShowcase.tsx` | 🗑️ DESCARTAR | 5.1 | Sustituido por nuevo `HomeCasesWeb.tsx` (🆕 CREAR) | Scroll horizontal con `FloatingElements` 3D mouse tracking — sobredimensionado y competing con cases de /portfolio-webs. Reemplazado por carrusel editorial horizontal simple con 3 casos (ver CONTENT.md §3.3). |
| `src/components/FloatingElements.tsx` | 🗑️ DESCARTAR | 5.1 | — | Solo existía para apoyar `HorizontalShowcase`. Al morir su consumidor, se descarta. Verificar con `grep` antes de borrar que nadie más lo importa. |
| `src/components/StickyScrollSection.tsx` | 🗑️ DESCARTAR | 5.1 | Sustituido por nuevo `HomeProcess.tsx` (🆕 CREAR) | Proceso con pricing embebido. Se separa: proceso editorial limpio en nuevo bloque, pricing sale del Home (se trata en conversación directa). Ver CONTENT.md §3.5. |
| `src/components/PricingSection.tsx` | 🗑️ DESCARTAR | 5.1 | — | Photo pricing con demo slider. Sale del Home. Las keys `photoPacks.*` se preservan en locales para una futura `/servicios`, pero el componente no se usa. |
| `src/components/PhotoPricingSection.tsx` si existe | 🗑️ DESCARTAR | 5.1 | — | Si hay duplicado con PricingSection (DT-07 candidato), se elimina. Auditar en Fase 2. |
| `src/components/SimplePricingSection.tsx` | 🗑️ DESCARTAR | 5.1 | — | INVENTORY §16.15 confirmó duplicación con `PricingSection`. Eliminar. |
| `src/components/WhyUs.tsx` | 🗑️ DESCARTAR | 5.1 | Fusionado en `HomeAbout.tsx` nuevo (🆕 CREAR) | 6 tarjetas con iconos coloridos: anti-patrón MASTER §6.1 "prohibido 3 cols icono+texto". Bug: WhatsApp con número distinto `34634408043` (DT-01 se cierra aquí). Los trust signals se mueven a nuevo `HomeAbout`. |
| `src/components/Testimonials.tsx` | 🏗️ REBUILD | 5.1 | (mismo archivo) | Reescribir eliminando círculos con iniciales coloridas y estrellas. Layout editorial de 3 citas. Copy nuevo de `home.testimonials.*`. |
| `src/components/About.tsx` | 🗑️ DESCARTAR | 5.1 | Sustituido por nuevo `HomeAbout.tsx` (🆕 CREAR, fusión About + WhyUs) | Reemplaza componente actual que usaba DS tokens correctamente pero copy débil. Nueva versión fusiona team presentation + trust signals. |
| `src/components/FormSection.tsx` | 🏗️ REBUILD | 5.4 | (mismo archivo) | Mantener lógica de React Hook Form + Zod + DOMPurify. Reescribir UI con 2 columnas (info izq + form der). Nuevo copy de `home.contact.*`. Usar `VITE_WHATSAPP_NUMBER`. |
| `src/components/ContactForm.tsx` | ♻️ REFACTOR | 5.4 | — | Si existe como componente separado de `FormSection`, unificar. Si solo es sub-componente del form, reescribir con DS nuevo. Hay que ver el archivo concreto en Fase 2. |
| `src/components/Footer.tsx` | 🏗️ REBUILD | 5.2 | (mismo archivo) | Reescribir con 4 columnas nuevas. Eliminar "Aviso Legal" hardcoded ES. Añadir `common.footer.rightsReserved` (faltante). Usa `VITE_WHATSAPP_NUMBER`. |
| `src/components/WhatsAppButton.tsx` | ♻️ REFACTOR | 5.2 | (mismo archivo) | Mantener floating button. Reescribir visual con DS nuevo. Usa `VITE_WHATSAPP_NUMBER` + mensaje prefilled de `common.whatsapp.prefilledMessage`. Cierra DT-01 para este archivo. |
| `src/components/SectionDivider.tsx` | ♻️ REFACTOR | 5.1 | (mismo archivo) | Usado 3 veces en Home actual. El rediseño reduce uso: solo entre bloque 5 y 6. Simplificar a línea horizontal fina 1px con opacity. |

---

## 4. Clasificación de `src/components/` — /portfolio (fotografía)

| Path | Clasificación | Fase | Notas |
|---|---|---|---|
| `src/components/GallerySection.tsx` | 🗑️ DESCARTAR si existe como parte de Portfolio actual | 5.5 | Si el archivo existe y se usaba en Portfolio.tsx, queda sin uso al reescribir la galería con `react-compare-image` directamente en el nuevo `Portfolio.tsx`. Si se usa en otra parte (ej. dashboard), PRESERVAR. Validar en Fase 2 con depcheck. Cierra DT-10 parcial (console.error ocurrencias). |
| Componente nuevo: `PortfolioHeader.tsx` | 🆕 CREAR | 5.5 | Bloque A de /portfolio: breadcrumb + eyebrow + H1 + body. Reutilizable también en /portfolio-webs con props. |
| Componente nuevo: `PortfolioIntro.tsx` | 🆕 CREAR | 5.5 | Bloque B de /portfolio: intro metodológica reducida. |
| Componente nuevo: `PortfolioGallery.tsx` | 🆕 CREAR | 5.5 | Bloque C: grid 2 cols con `react-compare-image` por item. Recibe array de items desde `src/data/galleryData.ts` (🆕 CREAR). |
| Componente nuevo: `PortfolioClosing.tsx` | 🆕 CREAR | 5.5 | Bloque D: cierre con CTA + link cross. Reutilizable en /portfolio-webs con props. |

---

## 5. Clasificación de `src/components/` — /portfolio-webs (desarrollo web)

| Path | Clasificación | Fase | Notas |
|---|---|---|---|
| `src/components/WebPortfolioShowcase.tsx` | 🗑️ DESCARTAR | 5.5 | 290 líneas con GSAP animations, gradientes naranja-rojo por proyecto, glow blur en hover, grid pattern, bolas blur azul/naranja/cyan. Reemplazado por nuevos `PortfolioWebsCases.tsx` editorial. |
| `src/components/ProjectCard.tsx` | 🗑️ DESCARTAR | 5.5 | Si existía como sub-componente de WebPortfolioShowcase, desaparece con su padre. Si se usa en otra página, evaluar en Fase 2. |
| Componente nuevo: `PortfolioWebsIntro.tsx` | 🆕 CREAR | 5.5 | Bloque B de /portfolio-webs: intro metodológica + tech list. |
| Componente nuevo: `PortfolioWebsCases.tsx` | 🆕 CREAR | 5.5 | Bloque C: 3 casos de estudio full-bleed alternados. Recibe array desde `src/data/webCasesData.ts` (🆕 CREAR). |
| (reutiliza) `PortfolioHeader.tsx` | ↗ reutilizado | 5.5 | Mismo componente que /portfolio, con props distintos. |
| (reutiliza) `PortfolioClosing.tsx` | ↗ reutilizado | 5.5 | Mismo componente que /portfolio, con props distintos. |

---

## 6. Clasificación de `src/data/`

| Path | Clasificación | Fase | Notas |
|---|---|---|---|
| `src/data/showcaseData.ts` | 🗑️ DESCARTAR | 5.1 | Datos de `HorizontalShowcase` que desaparece. Las 3 entradas de proyectos migran a `src/data/webCasesData.ts` nuevo. |
| `src/data/processData.ts` | 🗑️ DESCARTAR | 5.1 | Pasos del proceso embebidos en `StickyScrollSection` que desaparece. Los 3 pasos nuevos van directamente en `HomeProcess.tsx` o en un archivo nuevo más limpio. Cierra DT-02 parcial (había `any` aquí). |
| `src/data/galleryData.ts` | 🆕 CREAR | 5.5 | Array de 9 objetos con `{ imageBefore, imageAfter, number, title, caption }`. Imports de `src/assets/portfolio-*.png`. |
| `src/data/webCasesData.ts` | 🆕 CREAR | 5.5 | Array de 3 objetos con `{ image, eyebrow, headline, description, tags }` para TropiDenia, BVS, GymDenia. |

---

## 7. Clasificación de `src/components/` — huérfanos de INVENTORY §16.14 (D28)

Archivos identificados como potencialmente huérfanos en Fase 0. Decisión aplicada tras rediseño:

| Path | Clasificación | Fase | Razón |
|---|---|---|---|
| `src/components/CTASection.tsx` | 🗑️ DESCARTAR | 5.1 | Confirmado huérfano en INVENTORY §16.14. El rediseño no necesita un CTASection separado: cada bloque termina con su propio CTA contextual. |
| `src/components/GuaranteesSection.tsx` | 🗑️ DESCARTAR | 5.1 | Confirmado huérfano. Las garantías se integran como trust signals en `HomeAbout.tsx` (`home.about.trust*`). |
| `src/components/Process.tsx` | 🗑️ DESCARTAR | 5.1 | Confirmado huérfano. Sustituido conceptualmente por `StickyScrollSection` → nuevo `HomeProcess.tsx`. |
| `src/components/Services.tsx` | 🗑️ DESCARTAR | 5.1 | Confirmado huérfano. Funcionalidad cubierta por `ServiceSelector` (que también se descarta) → nuevo `HomeServices.tsx`. |

**Nota operativa:** antes del `git rm`, Claude Code debe ejecutar `grep -r "CTASection\|GuaranteesSection\|Process\|Services\|SimplePricingSection" src/ --include="*.tsx" --include="*.ts"` para confirmar cero imports. Si aparece algún import residual (por ejemplo comentado), resolverlo antes de borrar.

---

## 8. Clasificación de archivos preservados (lógica intocable)

| Path | Clasificación | Razón |
|---|---|---|
| `src/contexts/AuthContext.tsx` | 🔒 PRESERVAR | Lógica de auth Supabase. Sprint 2. |
| `src/integrations/supabase/client.ts` | 🔒 PRESERVAR | Cliente Supabase configurado. No se toca. Verificar env var `VITE_SUPABASE_PUBLISHABLE_KEY` coincide con el código (DT-12 candidato, revisar en Fase 2). |
| `src/integrations/supabase/types.ts` | 🔒 PRESERVAR | Tipos generados. Intocables. |
| `src/lib/security.ts` | 🔒 PRESERVAR | Sanitización. |
| `src/lib/validation.ts` | 🔒 PRESERVAR | Zod schemas. Reutilizados por FormSection. |
| `src/lib/utils.ts` | 🔒 PRESERVAR | `cn()` de shadcn. Se preserva tal cual. |
| `src/hooks/useSecureNavigation.ts` | 🔒 PRESERVAR | Navegación segura. Sprint 2 cierra `any` residuales (DT-02). |
| `src/hooks/use-toast.ts` | 🔒 PRESERVAR | Toast de shadcn. |
| `src/hooks/use-mobile.tsx` | 🔒 PRESERVAR | Media query. |
| `src/i18n/config.ts` | ♻️ REFACTOR | Fase 7 (o antes si bloquea i18n paridad). Arregla `getStoredLanguage()` que siempre retorna `"es"` (DT-09). |
| `src/i18n/locales/es.json` | 🏗️ REBUILD | Fase 5.1. Reescribir por completo con keys nuevas de CONTENT.md. Backup previo obligatorio. |
| `src/i18n/locales/en.json` | 🏗️ REBUILD | Fase 5.1. Idem, con draft EN de CONTENT.md. |
| `src/components/ui/*` (shadcn) | 🔒 PRESERVAR mayormente | Los componentes shadcn usados se mantienen. Los huérfanos (sidebar, alert-dialog si no se usa) se auditan con depcheck en Fase 2 (DT-07 cierre total). |
| `src/components/ScrollToTop.tsx` | 🔒 PRESERVAR | Utility. Sin cambios visuales. |
| `src/components/PageLoader.tsx` | ♻️ REFACTOR | Fase 3. Actualizar estética con DS nuevo (tipografía, color de spinner). |
| `supabase/migrations/*` | 🔒 PRESERVAR | Migraciones congeladas Sprint 1. DT-14 aceptado (UUID-named migration queda así). |

---

## 9. Archivos a crear desde cero (🆕 CREAR)

Resumen consolidado de todos los componentes nuevos:

| Nuevo archivo | Fase | Descripción breve |
|---|---|---|
| `src/components/home/HomeServices.tsx` | 5.1 | Bloque 2 Home: 2 tarjetas editoriales servicios |
| `src/components/home/HomeCasesWeb.tsx` | 5.1 | Bloque 3 Home: teaser 3 casos web |
| `src/components/home/HomePhotoShowcase.tsx` | 5.1 | Bloque 4 Home: full-bleed before/after slider |
| `src/components/home/HomeProcess.tsx` | 5.1 | Bloque 5 Home: 3 pasos del proceso |
| `src/components/home/HomeAbout.tsx` | 5.1 | Bloque 6 Home: team + trust signals (fusión About + WhyUs) |
| `src/components/portfolio/PortfolioHeader.tsx` | 5.5 | Header editorial reutilizable |
| `src/components/portfolio/PortfolioIntro.tsx` | 5.5 | Intro contextual /portfolio |
| `src/components/portfolio/PortfolioGallery.tsx` | 5.5 | Galería con `react-compare-image` |
| `src/components/portfolio/PortfolioClosing.tsx` | 5.5 | Cierre reutilizable con CTA |
| `src/components/portfolio-webs/PortfolioWebsIntro.tsx` | 5.5 | Intro metodológica |
| `src/components/portfolio-webs/PortfolioWebsCases.tsx` | 5.5 | 3 casos full-bleed editorial |
| `src/data/galleryData.ts` | 5.5 | Array de 9 items de galería |
| `src/data/webCasesData.ts` | 5.5 | Array de 3 casos web |
| `src/lib/motion.ts` | 3 | Factories GSAP centralizadas (fade-up, stagger, scroll reveal). Cierra DT referenciado en MASTER §5.2. |
| `src/lib/tokens.ts` (opcional) | 3 | Tokens tipados para uso en TS (spacing scale, duration, easings). |
| `scripts/with_server.py` | 2 | Script Playwright runner que levanta dev server. Cierra DT-04. |

**Nota sobre estructura de carpetas:** se introducen subdirectorios `src/components/home/`, `src/components/portfolio/`, `src/components/portfolio-webs/` para agrupar los componentes por página. Esto reduce ruido en `src/components/` (que hoy tiene ~30 archivos mezclados). Los componentes globales (Header, Footer, WhatsAppButton, SectionDivider, PageLoader, ScrollToTop) se quedan en la raíz de `src/components/`.

---

## 10. Archivos y carpetas a sanear (deuda técnica)

Tareas de limpieza que se ejecutan junto al rediseño o en Fase 2:

| Tarea | Fase | DT # | Acción |
|---|---|---|---|
| Eliminar `src/assets_backup/` de git | 2 | DT-05 | `git rm -r --cached src/assets_backup/` + añadir a `.gitignore` |
| Eliminar archivos `.bak`, `.backup`, `.temp` de git | 2 | DT-06 | 7 archivos identificados en INVENTORY §16.4. `git rm` uno a uno tras confirmar que no son las versiones buenas. |
| Investigar `src/assetsFotos Portfolio` | 2 | DT-13 | Directorio con nombre con espacios, sin extensión. Inspeccionar manualmente: si es un fichero basura, `git rm`. Si contiene assets válidos, renombrar a `src/assets/portfolio-additional/`. |
| Crear directorio `scripts/` | 2 | DT-04 | `mkdir scripts/` + crear `scripts/with_server.py` para Playwright. |
| Cambiar puerto dev 8080 → 5173 en `vite.config.ts` | 3 | DT-03 | Una línea. Debe ser coherente con AGENT.md que asume 5173. |
| Wirear `ThemeProvider` de next-themes en `main.tsx` | 3 | DT-08 | Envolver `<App />` en `<ThemeProvider defaultTheme="dark">`. Dark mode default operativo. |
| Resolver 14+ `any` explícitos de Sprint 1 | 5 | DT-02 | En cada archivo tocado, tipar propiamente. Los de dashboard/ quedan para Sprint 2. |
| Limpiar console.error activos en GallerySection | 5 o DESCARTAR | DT-10 | Si GallerySection muere, desaparece el problema. Si se preserva, limpiar. |
| Eliminar import sin uso en LegalNotice.tsx | 5.2 | DT-11 | `useTranslation` importado sin consumo. Quitar import. |
| Fix `getStoredLanguage()` en i18n/config.ts | 7 (o antes) | DT-09 | Función actual siempre retorna "es". Implementar lectura real de `localStorage`. |
| Consolidar `VITE_WHATSAPP_NUMBER` (7 archivos hardcoded + 1 inconsistente) | 5.1-5.4 | DT-01 | Se resuelve por capas al reescribir cada componente (FormSection, Footer, Header, Hero, WhyUs→HomeAbout, CTASection→descartado, PricingSection→descartado, Portfolio). Al final Sprint 1, cero hardcodes. |

---

## 11. Orden de ejecución propuesto (subfases de Fase 5)

Propuesta de secuencia para que el trabajo en Antigravity sea fluido y testeable:

**Fase 5.1 — Home (16-17h)**
1. Crear estructura de carpetas `src/components/home/`
2. `Hero.tsx` REBUILD
3. `HomeServices.tsx` CREAR + `ServiceSelector.tsx` DESCARTAR
4. `HomeCasesWeb.tsx` CREAR + `HorizontalShowcase.tsx` + `FloatingElements.tsx` DESCARTAR + datos en `webCasesData.ts`
5. `HomePhotoShowcase.tsx` CREAR
6. `HomeProcess.tsx` CREAR + `StickyScrollSection.tsx` + `PricingSection.tsx` + `SimplePricingSection.tsx` DESCARTAR
7. `HomeAbout.tsx` CREAR + `About.tsx` + `WhyUs.tsx` DESCARTAR
8. `Testimonials.tsx` REBUILD
9. `Index.tsx` REBUILD (el assembly)
10. Huérfanos DESCARTAR: CTASection, GuaranteesSection, Process, Services
11. `es.json` + `en.json` REBUILD con copy CONTENT.md
12. Test manual: Home completa en ES y EN, motion suave, todos los links activos

**Fase 5.2 — Chrome global (4-5h)**
1. `Header.tsx` REBUILD
2. `Footer.tsx` REBUILD
3. `WhatsAppButton.tsx` REFACTOR
4. `PageLoader.tsx` REFACTOR
5. `NotFound.tsx` REFACTOR
6. Páginas legal `src/pages/legal/*` REFACTOR (solo layout, copy preservado)
7. Test manual: navegación, lang toggle, WhatsApp button desde cualquier página

**Fase 5.4 — Contact form (2h)**
1. `FormSection.tsx` REBUILD (UI + reusa lógica RHF/Zod)
2. Validación Zod confirmada
3. `VITE_WHATSAPP_NUMBER` consolidado en el último archivo que lo referencia
4. Test Playwright de form (envío valid, invalid, WhatsApp open)

**Fase 5.5 — Portfolios (3.5h + 5.5h = 9h)**
1. Crear estructura `src/components/portfolio/` y `src/components/portfolio-webs/`
2. `PortfolioHeader.tsx`, `PortfolioIntro.tsx`, `PortfolioGallery.tsx`, `PortfolioClosing.tsx` CREAR
3. `PortfolioWebsIntro.tsx`, `PortfolioWebsCases.tsx` CREAR
4. `Portfolio.tsx` REBUILD (assembly)
5. `PortfolioWebs.tsx` REBUILD (assembly)
6. `WebPortfolioShowcase.tsx` + `ProjectCard.tsx` (si existe) DESCARTAR
7. Datos en `galleryData.ts` y `webCasesData.ts`
8. Test manual: sliders funcionan en desktop y mobile, lang toggle, cross-links entre los dos portfolios

**Total estimado Fase 5 completa:** ~25-26h Antigravity.

---

## 12. Criterio de cierre de cada subfase

Una subfase (5.1, 5.2, 5.4, 5.5) se considera cerrada cuando:

1. Todos los archivos de la lista tienen clasificación aplicada (CREAR, REBUILD, REFACTOR, DESCARTAR hecho).
2. El tipo-checker `npm run lint` pasa sin errores.
3. El build `npm run build` pasa sin errores.
4. Test Playwright asociado (si aplica según MASTER §9.2) pasa.
5. Validación visual manual por Miguel.
6. Un commit por subfase con mensaje formato `feat(redesign): close phase 5.X — <resumen>`.

Si una subfase no cierra al primer intento (fallos de test, problemas visuales), se itera sobre la misma rama sin abrir siguiente subfase. Scope creep evitado.

---

## 13. Archivos fuera de scope Sprint 1 (recordatorio)

Todo lo que sigue NO se toca en Sprint 1, se trata en Sprint 2:

- `src/pages/dashboard/` (todas las páginas)
- `src/pages/Auth.tsx` (interior, no el wrapper chrome)
- `src/components/dashboard/*` si existe
- `supabase/migrations/` (migraciones congeladas)
- Schema y lógica de Supabase en `src/integrations/supabase/types.ts`

---

## 14. Validaciones finales antes de G5 (cierre Fase 5)

Checklist pre-merge a `dev`:

- [ ] `src/assets_backup/` eliminado de git (DT-05).
- [ ] Archivos `.bak/.backup/.temp` eliminados (DT-06).
- [ ] `scripts/with_server.py` existe y funciona (DT-04).
- [ ] `vite.config.ts` usa puerto 5173 (DT-03).
- [ ] `ThemeProvider` wired en `main.tsx`, dark mode default (DT-08).
- [ ] Cero ocurrencias de `"34667326300"` o `34634408043` en el código (`grep -r "34667\|34634" src/` debe estar vacío excepto `.env.example`) (DT-01).
- [ ] Cero componentes huérfanos en `src/components/` (depcheck clean).
- [ ] i18n keys huérfanas de locales eliminadas (goldencoast, photoPacks.trial/basic/standard/premium).
- [ ] `npm run build` OK.
- [ ] `npm run lint` OK.
- [ ] Playwright Home + portfolio + portfolio-webs passing.
- [ ] Lighthouse Home mobile ≥ 80 (target final 92, pero pre-Fase 7 80 es aceptable).
- [ ] Lang toggle ES ↔ EN funcional desde cualquier página.
- [ ] WhatsApp button funciona desde cualquier página con mensaje prefilled correcto.

---

## 15. Change log

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-19 | Miguel + Claude Opus 4.7 | Documento inicial. Clasificación archivo por archivo (`src/pages/`, `src/components/`, `src/data/`, `src/hooks/`, `src/i18n/`, huérfanos). 16 CREAR nuevos + 12 REBUILD + 6 REFACTOR + 13 DESCARTAR + 14 PRESERVAR. Orden ejecución Fase 5 en 4 subfases (5.1, 5.2, 5.4, 5.5). Cross-reference con CONTENT.md y deuda técnica MASTER §7.4. |
