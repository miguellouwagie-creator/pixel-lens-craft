# MIGRATION.md — Studio Pixelens Redesign v2

> **Propósito:** clasificación archivo por archivo de `src/components/` y `src/pages/` del repo actual, indicando qué se hace con cada uno durante el rediseño Sprint 1. Documento vivo: se actualiza al cerrar cada fase de ejecución (5.1, 5.2, 5.3, 5.4, 5.5).
>
> **Aplica D31 (pivote de scope):** se hace rediseño UI completo de las páginas públicas, no "preserve verbatim" salvo para lógica reutilizable y módulos técnicos (AuthContext, validation, security, i18n config, Supabase integration).

---

## 0. Meta

| Campo | Valor |
|---|---|
| Versión | 1.3 |
| Fecha | 2026-05-13 |
| Autor | Miguel Louwagie Sapena + Claude Opus 4.7 / Sonnet 4.6 |
| Estado | Subfases 5.1, 5.2 y 5.4 ejecutadas y cerradas. Subfase 5.5 pendiente. |
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
| `src/pages/Index.tsx` | ✅ REBUILD | 5.1 | **COMPLETO** commit `68e298e`. Home completo. 7 componentes nuevos importados + contact placeholder. |
| `src/pages/Portfolio.tsx` | 🏗️ REBUILD | 5.5 | Reescribir galería con `react-compare-image` (cierra DT-12), 4 bloques nuevos (ver CONTENT.md §4). Elimina toggle manual de opacidad. Elimina fondo gradiente naranja-rojo. |
| `src/pages/PortfolioWebs.tsx` | 🏗️ REBUILD | 5.5 | Reescribir con 4 bloques editoriales. Actualmente es shell de 34 líneas envolviendo `WebPortfolioShowcase` — este pasa también a REBUILD. |
| `src/pages/Auth.tsx` | ⏭️ DIFERIR | Sprint 2 | Tocar solo para envolver en nuevo `Header` + `Footer` del rediseño. Contenido interno intocable Sprint 1. |
| `src/pages/NotFound.tsx` | ✅ REFACTOR | 5.2 | **VALIDADO SIN CAMBIOS** en G5 parcial 5.2. Estado conforme DS final desde Fase 4. |
| `src/pages/dashboard/*.tsx` (todos) | ⏭️ DIFERIR | Sprint 2 | Cualquier archivo bajo `pages/dashboard/`. No se abre hasta post-Basilea. |
| `src/pages/legal/*.tsx` (Aviso, Privacidad, Cookies) | ✅ REFACTOR | 5.2 | **VALIDADO SIN CAMBIOS** en G5 parcial 5.2. `LegalLayout` con `prose-editorial` y copy real preservado desde Fase 4 (P2). DT-11 cerrado en Fase 4, commit `434897e`. |

---

## 3. Clasificación de `src/components/` — bloques del Home

| Path | Clasificación | Fase | Reemplaza a / se fusiona con | Notas |
|---|---|---|---|---|
| `src/components/Header.tsx` | ✅ DESCARTAR | 5.2 | — | **COMPLETO** commit `c0b66d4`. Eliminado (código muerto desde D36-1). Chrome activo en `src/components/layout/Header.tsx` (REFACTOR commit `7c7cfe3`). 5 nav items con `common.nav.about` añadido (D38-1). |
| `src/components/Hero.tsx` | ✅ REBUILD | 5.1 | (mismo archivo) | **COMPLETO** commit `223eb78`. Movido a `src/components/home/Hero.tsx`. Layout grid 3fr/2fr, `home.hero.*`, CTA WhatsApp glow + secondary anchor `#cases-web`. |
| `src/components/ServiceSelector.tsx` | ✅ DESCARTAR | 5.1 | Sustituido por nuevo `HomeServices.tsx` (✅ CREAR) | **COMPLETO** commit `6af42f3`. Eliminado. `HomeServices.tsx` creado en `src/components/home/`. |
| `src/components/HorizontalShowcase.tsx` | ✅ DESCARTAR | 5.1 | Sustituido por nuevo `HomeCasesWeb.tsx` (✅ CREAR) | **COMPLETO** commit `db6c756`. Eliminado junto con `FloatingElements.tsx` y `ProjectCard.tsx`. |
| `src/components/FloatingElements.tsx` | ✅ DESCARTAR | 5.1 | — | **COMPLETO** commit `db6c756`. Eliminado. |
| `src/components/StickyScrollSection.tsx` | ✅ DESCARTAR | 5.1 | Sustituido por nuevo `HomeProcess.tsx` (✅ CREAR) | **COMPLETO** commit `1a775af`. Eliminado junto con PricingSection, SimplePricingSection y processData.ts. |
| `src/components/PricingSection.tsx` | ✅ DESCARTAR | 5.1 | — | **COMPLETO** commit `1a775af`. Eliminado. |
| `src/components/PhotoPricingSection.tsx` si existe | 🗑️ DESCARTAR | 5.1 | — | Si hay duplicado con PricingSection (DT-07 candidato), se elimina. Auditar en Fase 2. |
| `src/components/SimplePricingSection.tsx` | 🗑️ DESCARTAR | 5.1 | — | INVENTORY §16.15 confirmó duplicación con `PricingSection`. Eliminar. |
| `src/components/WhyUs.tsx` | ✅ DESCARTAR | 5.1 | Fusionado en `HomeAbout.tsx` nuevo (✅ CREAR) | **COMPLETO** commit `bd10b11`. Eliminado. `HomeAbout.tsx` creado en `src/components/home/` con trust signals. |
| `src/components/Testimonials.tsx` | ✅ REBUILD | 5.1 | (mismo archivo) | **COMPLETO** commit `a9523f1`. Movido a `src/components/home/Testimonials.tsx`. Blockquote editorial sin estrellas ni círculos. |
| `src/components/About.tsx` | ✅ DESCARTAR | 5.1 | Sustituido por nuevo `HomeAbout.tsx` (✅ CREAR, fusión About + WhyUs) | **COMPLETO** commit `bd10b11`. Eliminado. |
| `src/components/FormSection.tsx` | ✅ DESCARTAR | 5.4 | **COMPLETO** commit `92f7cf2`. Eliminado por D39-2: era wrapper layout orphan no renderizado (placeholder lorem D36-3 lo reemplazaba en Index.tsx). Antes del descarte tenía hardcode `tel:+34667326300` L47 (DT-01 cierre). Sustituido por `src/components/home/HomeContact.tsx` (🆕 CREAR §9). Supersede prescripción original "REBUILD UI + reusa lógica RHF+Zod+DOMPurify": la inspección previa (Q5-B=B chat owner) reveló que FormSection no contenía la lógica del form (vivía en ContactForm) y que no estaba importado en producción. |
| `src/components/ContactForm.tsx` | ✅ DESCARTAR | 5.4 | **COMPLETO** commit `92f7cf2`. Eliminado por D39-2: era el componente con la lógica del form (193 líneas, RHF + Zod sin DOMPurify) pero solo importado por FormSection.tsx que también era orphan. Antes del descarte tenía hardcode `whatsappNumber = "34667326300"` L60 (DT-01 cierre) y schema Zod con drift contra MASTER §6.5 (phone requerido min 9 cuando debía ser opcional, message min 10 cuando debía ser min 20). Sustituido por `src/components/home/HomeContact.tsx` (🆕 CREAR §9) con schema corregido, DOMPurify añadido, y patrón shadcn FormMessage + i18n via useMemo schema (D39-8). Nota: corrige mentira documental v1.0-1.2 que afirmaba "Mantener lógica RHF + Zod + DOMPurify" — el código legacy nunca usó DOMPurify. |
| `src/components/Footer.tsx` | ✅ DESCARTAR + REBUILD | 5.2 | — | **COMPLETO** commits `c0b66d4` (descarte legacy) + `6dca42c` (REBUILD selectivo `layout/Footer.tsx`, D38-2). Namespace `footer.col.*` legacy sustituido por `common.footer.*` canónico. Drift `footer.social.instagramUrl` preservado (D38-3). |
| `src/components/WhatsAppButton.tsx` | ✅ DESCARTAR | 5.2 | — | **COMPLETO** commit `c0b66d4`. Eliminado (código muerto desde D36-1). Chrome activo en `src/components/layout/WhatsAppButton.tsx` (REFACTOR commit `da9662c`). |
| `src/components/SectionDivider.tsx` | ✅ DESCARTAR | 5.1 | — | **COMPLETO** (varios commits). Eliminado. El único divider necesario entre HomeProcess y HomeAbout fue inlinado directamente en Index.tsx como `<div aria-hidden className="border-t border-border/40 my-16 mx-auto max-w-6xl" />`. |

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
| `src/data/showcaseData.ts` | ✅ DESCARTAR | 5.1 | **COMPLETO** commit `db6c756`. Eliminado. |
| `src/data/processData.ts` | ✅ DESCARTAR | 5.1 | **COMPLETO** commit `1a775af`. Eliminado. |
| `src/data/galleryData.ts` | ✅ CREAR | 5.1 | **COMPLETO** commit `c4aba54`. Creado en Subfase 5.1 (necesario para HomePhotoShowcase). 9 items con `{ id, imageBefore, imageAfter, numberKey, titleKey, captionKey }`. |
| `src/data/webCasesData.ts` | ✅ CREAR | 5.1 | **COMPLETO** commit `db6c756`. Creado en Subfase 5.1 (necesario para HomeCasesWeb). 3 items con `{ id, image, eyebrowKey, titleKey, bodyKey, tagKeys: string[] }`. |

---

## 7. Clasificación de `src/components/` — huérfanos de INVENTORY §16.14 (D28)

Archivos identificados como potencialmente huérfanos en Fase 0. Decisión aplicada tras rediseño:

| Path | Clasificación | Fase | Razón |
|---|---|---|---|
| `src/components/CTASection.tsx` | ✅ DESCARTAR | 5.1 | **COMPLETO** (varios commits). Eliminado. |
| `src/components/GuaranteesSection.tsx` | ✅ DESCARTAR | 5.1 | **COMPLETO** (varios commits). Eliminado. |
| `src/components/Process.tsx` | ✅ DESCARTAR | 5.1 | **COMPLETO** (varios commits). Eliminado. |
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
| `src/components/home/HomeContact.tsx` | 5.4 | **COMPLETO** commit `92f7cf2`. Bloque 8 Home: layout 2 cols info+form. Sustituye FormSection + ContactForm legacy descartados. RHF + Zod + DOMPurify directo. 6 campos (nombre, email, teléfono opt, servicio dropdown, mensaje min 20, checkbox terms). Submit abre `wa.me/{VITE_WHATSAPP_NUMBER}?text=...` con payload texto plano. Schema Zod en `useMemo([t])` por compat con shadcn FormMessage (D39-8). |
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
| Consolidar `VITE_WHATSAPP_NUMBER` (7 archivos hardcoded + 1 inconsistente) | 5.1-5.4 | DT-01 | **✅ RESUELTO 7/7** en Subfase 5.4. Las 2 ocurrencias finales (ContactForm L60 `whatsappNumber` const y FormSection L47 `tel:+34667326300`) cerradas al descartar ambos archivos (commit `92f7cf2`). HomeContact lee `import.meta.env.VITE_WHATSAPP_NUMBER`. Grep final `git grep -nE "34667326300\|34634408043" -- src/` vacío. |
| Auditar namespace `pricing.*` en locales | 5.5 | DT-17 | 3 keys ES rellenadas en 5.4 para mantener paridad i18n. Validar uso real con `git grep "pricing\\." -- src/`. Si huérfano, eliminar namespace completo de ambos locales. |

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

**Fase 5.4 — Contact form REBUILD (2-2.5h reales, ejecutada 2026-05-13)**
1. **COMPLETO** Crear `src/components/home/HomeContact.tsx` (CREAR nuevo, NO REBUILD de FormSection como brief original planteaba; supersede por D39-1 tras inspección Q5-B=B que reveló FormSection orphan).
2. **COMPLETO** Schema Zod con campos: name (min 2), email, phone (opcional), service (dropdown web/photo/both), message (min 20), terms (checkbox). Movido al interior del componente con `useMemo([t])` por incompat shadcn FormMessage (D39-8).
3. **COMPLETO** DOMPurify importado directo (no via wrapper de security.ts que no cubre el caso "strip total", D39-6).
4. **COMPLETO** Submit: valida, sanitiza, construye payload texto plano, abre `wa.me/{VITE_WHATSAPP_NUMBER}?text=...` en nueva pestaña, toast éxito.
5. **COMPLETO** Layout 2 columnas desktop (info izq + form der), stack vertical mobile info→form (Q5-C=A).
6. **COMPLETO** Copy i18n cableado `home.contact.*` + 13 keys nuevas (serviceLabel, servicePlaceholder, serviceOptions.*, termsLabel, termsLink, validation.*, whatsapp.*).
7. **COMPLETO** Wire `<HomeContact />` en Index.tsx sustituyendo placeholder lorem D36-3.
8. **COMPLETO** `git rm` ContactForm.tsx y FormSection.tsx (DT-01 cierra 7/7).
9. **COMPLETO** Test Playwright `tests/contact-form.spec.py` con 4 escenarios (empty submit, full submit, no phone, message min length). 4/4 PASS.
10. **COMPLETO** Verificación final: build OK, lint nuevo OK, paridad i18n diff:0.
11. **COMPLETO** 3 commits push: `92f7cf2` (feat + cleanup en mismo commit por staging area, D1), `5605764` (i18n keys), `3450fb5` (wire Index).

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
- [x] Cero ocurrencias de `"34667326300"` o `34634408043` en el código (`grep -r "34667\|34634" src/` debe estar vacío excepto `.env.example`) (DT-01). **✅ Cerrado en Subfase 5.4 (commit `92f7cf2`).**
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
| 1.1 | 2026-05-08 | Miguel + Claude Sonnet 4.6 | Cierre Subfase 5.1. §0 meta actualizado. Marcadas como ✅ COMPLETO todas las entradas de Subfase 5.1: Hero, ServiceSelector, HorizontalShowcase, FloatingElements, StickyScrollSection, PricingSection, SimplePricingSection, WhyUs, About, Testimonials, SectionDivider (§3), showcaseData y processData (§6), CTASection, GuaranteesSection, Process, Services (§7). Entradas CREAR en §6: galleryData.ts y webCasesData.ts actualizadas a ✅ con fase real 5.1 (adelantadas de 5.5 por necesidad de HomeCasesWeb/HomePhotoShowcase). Nota sub-decisión D37-5: ProjectCard.tsx eliminado en Step 3 junto con HorizontalShowcase (no en §5 como planeado originalmente). |
| 1.2 | 2026-05-12 | Miguel Louwagie Sapena + Claude Opus 4.7 / Sonnet 4.6 | Cierre Subfase 5.2. §0 meta actualizado. §2 NotFound y legales marcados VALIDADO SIN CAMBIOS. §3 entradas Header.tsx, Footer.tsx, WhatsAppButton.tsx actualizadas a ✅ COMPLETO con hashes de commit. Nota REBUILD selectivo Footer por D38-2. |
| 1.3 | 2026-05-13 | Miguel + Claude Opus 4.7 | Cierre Subfase 5.4 Contact form REBUILD. §0 meta versión bumped. §3 fila `FormSection.tsx` 🏗️ REBUILD → ✅ DESCARTAR con nota D39-2 (era wrapper layout orphan no renderizado). §3 fila `ContactForm.tsx` ♻️ REFACTOR → ✅ DESCARTAR con nota D39-2 (lógica del form vivía aquí, no en FormSection; corrige mentira documental "Mantener lógica RHF+Zod+DOMPurify" — legacy nunca usó DOMPurify). §9 nueva entrada `src/components/home/HomeContact.tsx` 🆕 CREAR 5.4 con detalle de implementación (RHF+Zod+DOMPurify directo, payload texto plano, schema en useMemo por shadcn FormMessage). §10 fila DT-01 marcada ✅ RESUELTO 7/7 con commit `92f7cf2`. §10 nueva entrada DT-17 (namespace `pricing.*` legacy auditar en 5.5). §11 paso Fase 5.4 reescrito con 11 sub-pasos reflejando ejecución real. §14 checklist DT-01 marcado [x]. |