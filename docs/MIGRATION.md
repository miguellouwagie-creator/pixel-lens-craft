# MIGRATION.md â€” Studio Pixelens Redesign v2

> **PropÃ³sito:** clasificaciÃ³n archivo por archivo de `src/components/` y `src/pages/` del repo actual, indicando quÃ© se hace con cada uno durante el rediseÃ±o Sprint 1. Documento vivo: se actualiza al cerrar cada fase de ejecuciÃ³n (5.1, 5.2, 5.3, 5.4, 5.5).
>
> **Aplica D31 (pivote de scope):** se hace rediseÃ±o UI completo de las pÃ¡ginas pÃºblicas, no "preserve verbatim" salvo para lÃ³gica reutilizable y mÃ³dulos tÃ©cnicos (AuthContext, validation, security, i18n config, Supabase integration).

---

## 0. Meta

| Campo | Valor |
|---|---|
| VersiÃ³n | 1.3 |
| Fecha | 2026-05-13 |
| Autor | Miguel Louwagie Sapena + Claude Opus 4.7 / Sonnet 4.6 |
| Estado | Subfases 5.1, 5.2 y 5.4 ejecutadas y cerradas. Subfase 5.5 pendiente. |
| Alcance | `src/components/`, `src/pages/`, `src/data/`, `src/hooks/` (relevantes para Sprint 1 pÃºblico). |
| Bloquea | G1 gate. |

---

## 1. ConvenciÃ³n de clasificaciÃ³n

| Etiqueta | Significado | AcciÃ³n operativa |
|---|---|---|
| ðŸ—ï¸ **REBUILD** | UI nueva desde cero con nuevo DS, manteniendo datos o lÃ³gica si aplica | Crear archivo nuevo (o reescribir el existente vaciÃ¡ndolo). El archivo final resultante no debe parecerse al actual. |
| â™»ï¸ **REFACTOR** | Se mantiene la estructura general pero se reescribe con DS nuevo | Editar archivo existente preservando interface pÃºblica (props, exports). |
| ðŸ”’ **PRESERVAR** | LÃ³gica intocable, no se modifica | Ignorar durante el rediseÃ±o. Solo se toca si es absolutamente necesario (bug). |
| ðŸ—‘ï¸ **DESCARTAR** | Eliminar completamente | `git rm` el archivo. Antes de borrar, validar con `grep -r "ComponentName" src/` que no hay imports residuales. |
| ðŸ†• **CREAR** | Archivo nuevo que no existe actualmente | Nuevo archivo en la ruta indicada. |
| â­ï¸ **DIFERIR** | Pertenece a Sprint 2 (dashboard, auth) | No se toca en Sprint 1. |

---

## 2. ClasificaciÃ³n de `src/pages/`

| Path | ClasificaciÃ³n | Fase | Notas |
|---|---|---|---|
| `src/pages/Index.tsx` | âœ… REBUILD | 5.1 | **COMPLETO** commit `68e298e`. Home completo. 7 componentes nuevos importados + contact placeholder. |
| `src/pages/Portfolio.tsx` | ðŸ—ï¸ REBUILD | 5.5 | Reescribir galerÃ­a con `react-compare-slider` (cierra DT-12), 4 bloques nuevos (ver CONTENT.md Â§4). Elimina toggle manual de opacidad. Elimina fondo gradiente naranja-rojo. |
| `src/pages/PortfolioWebs.tsx` | ðŸ—ï¸ REBUILD | 5.5 | Reescribir con 4 bloques editoriales. Actualmente es shell de 34 lÃ­neas envolviendo `WebPortfolioShowcase` â€” este pasa tambiÃ©n a REBUILD. |
| `src/pages/Auth.tsx` | â­ï¸ DIFERIR | Sprint 2 | Tocar solo para envolver en nuevo `Header` + `Footer` del rediseÃ±o. Contenido interno intocable Sprint 1. |
| `src/pages/NotFound.tsx` | âœ… REFACTOR | 5.2 | **VALIDADO SIN CAMBIOS** en G5 parcial 5.2. Estado conforme DS final desde Fase 4. |
| `src/pages/dashboard/*.tsx` (todos) | â­ï¸ DIFERIR | Sprint 2 | Cualquier archivo bajo `pages/dashboard/`. No se abre hasta post-Basilea. |
| `src/pages/legal/*.tsx` (Aviso, Privacidad, Cookies) | âœ… REFACTOR | 5.2 | **VALIDADO SIN CAMBIOS** en G5 parcial 5.2. `LegalLayout` con `prose-editorial` y copy real preservado desde Fase 4 (P2). DT-11 cerrado en Fase 4, commit `434897e`. |

---

## 3. ClasificaciÃ³n de `src/components/` â€” bloques del Home

| Path | ClasificaciÃ³n | Fase | Reemplaza a / se fusiona con | Notas |
|---|---|---|---|---|
| `src/components/Header.tsx` | âœ… DESCARTAR | 5.2 | â€” | **COMPLETO** commit `c0b66d4`. Eliminado (cÃ³digo muerto desde D36-1). Chrome activo en `src/components/layout/Header.tsx` (REFACTOR commit `7c7cfe3`). 5 nav items con `common.nav.about` aÃ±adido (D38-1). |
| `src/components/Hero.tsx` | âœ… REBUILD | 5.1 | (mismo archivo) | **COMPLETO** commit `223eb78`. Movido a `src/components/home/Hero.tsx`. Layout grid 3fr/2fr, `home.hero.*`, CTA WhatsApp glow + secondary anchor `#cases-web`. |
| `src/components/ServiceSelector.tsx` | âœ… DESCARTAR | 5.1 | Sustituido por nuevo `HomeServices.tsx` (âœ… CREAR) | **COMPLETO** commit `6af42f3`. Eliminado. `HomeServices.tsx` creado en `src/components/home/`. |
| `src/components/HorizontalShowcase.tsx` | âœ… DESCARTAR | 5.1 | Sustituido por nuevo `HomeCasesWeb.tsx` (âœ… CREAR) | **COMPLETO** commit `db6c756`. Eliminado junto con `FloatingElements.tsx` y `ProjectCard.tsx`. |
| `src/components/FloatingElements.tsx` | âœ… DESCARTAR | 5.1 | â€” | **COMPLETO** commit `db6c756`. Eliminado. |
| `src/components/StickyScrollSection.tsx` | âœ… DESCARTAR | 5.1 | Sustituido por nuevo `HomeProcess.tsx` (âœ… CREAR) | **COMPLETO** commit `1a775af`. Eliminado junto con PricingSection, SimplePricingSection y processData.ts. |
| `src/components/PricingSection.tsx` | âœ… DESCARTAR | 5.1 | â€” | **COMPLETO** commit `1a775af`. Eliminado. |
| `src/components/PhotoPricingSection.tsx` si existe | ðŸ—‘ï¸ DESCARTAR | 5.1 | â€” | Si hay duplicado con PricingSection (DT-07 candidato), se elimina. Auditar en Fase 2. |
| `src/components/SimplePricingSection.tsx` | ðŸ—‘ï¸ DESCARTAR | 5.1 | â€” | INVENTORY Â§16.15 confirmÃ³ duplicaciÃ³n con `PricingSection`. Eliminar. |
| `src/components/WhyUs.tsx` | âœ… DESCARTAR | 5.1 | Fusionado en `HomeAbout.tsx` nuevo (âœ… CREAR) | **COMPLETO** commit `bd10b11`. Eliminado. `HomeAbout.tsx` creado en `src/components/home/` con trust signals. |
| `src/components/Testimonials.tsx` | âœ… REBUILD | 5.1 | (mismo archivo) | **COMPLETO** commit `a9523f1`. Movido a `src/components/home/Testimonials.tsx`. Blockquote editorial sin estrellas ni cÃ­rculos. |
| `src/components/About.tsx` | âœ… DESCARTAR | 5.1 | Sustituido por nuevo `HomeAbout.tsx` (âœ… CREAR, fusiÃ³n About + WhyUs) | **COMPLETO** commit `bd10b11`. Eliminado. |
| `src/components/FormSection.tsx` | âœ… DESCARTAR | 5.4 | **COMPLETO** commit `92f7cf2`. Eliminado por D39-2: era wrapper layout orphan no renderizado (placeholder lorem D36-3 lo reemplazaba en Index.tsx). Antes del descarte tenÃ­a hardcode `tel:+34667326300` L47 (DT-01 cierre). Sustituido por `src/components/home/HomeContact.tsx` (ðŸ†• CREAR Â§9). Supersede prescripciÃ³n original "REBUILD UI + reusa lÃ³gica RHF+Zod+DOMPurify": la inspecciÃ³n previa (Q5-B=B chat owner) revelÃ³ que FormSection no contenÃ­a la lÃ³gica del form (vivÃ­a en ContactForm) y que no estaba importado en producciÃ³n. |
| `src/components/ContactForm.tsx` | âœ… DESCARTAR | 5.4 | **COMPLETO** commit `92f7cf2`. Eliminado por D39-2: era el componente con la lÃ³gica del form (193 lÃ­neas, RHF + Zod sin DOMPurify) pero solo importado por FormSection.tsx que tambiÃ©n era orphan. Antes del descarte tenÃ­a hardcode `whatsappNumber = "34667326300"` L60 (DT-01 cierre) y schema Zod con drift contra MASTER Â§6.5 (phone requerido min 9 cuando debÃ­a ser opcional, message min 10 cuando debÃ­a ser min 20). Sustituido por `src/components/home/HomeContact.tsx` (ðŸ†• CREAR Â§9) con schema corregido, DOMPurify aÃ±adido, y patrÃ³n shadcn FormMessage + i18n via useMemo schema (D39-8). Nota: corrige mentira documental v1.0-1.2 que afirmaba "Mantener lÃ³gica RHF + Zod + DOMPurify" â€” el cÃ³digo legacy nunca usÃ³ DOMPurify. |
| `src/components/Footer.tsx` | âœ… DESCARTAR + REBUILD | 5.2 | â€” | **COMPLETO** commits `c0b66d4` (descarte legacy) + `6dca42c` (REBUILD selectivo `layout/Footer.tsx`, D38-2). Namespace `footer.col.*` legacy sustituido por `common.footer.*` canÃ³nico. Drift `footer.social.instagramUrl` preservado (D38-3). |
| `src/components/WhatsAppButton.tsx` | âœ… DESCARTAR | 5.2 | â€” | **COMPLETO** commit `c0b66d4`. Eliminado (cÃ³digo muerto desde D36-1). Chrome activo en `src/components/layout/WhatsAppButton.tsx` (REFACTOR commit `da9662c`). |
| `src/components/SectionDivider.tsx` | âœ… DESCARTAR | 5.1 | â€” | **COMPLETO** (varios commits). Eliminado. El Ãºnico divider necesario entre HomeProcess y HomeAbout fue inlinado directamente en Index.tsx como `<div aria-hidden className="border-t border-border/40 my-16 mx-auto max-w-6xl" />`. |

---

## 4. ClasificaciÃ³n de `src/components/` â€” /portfolio (fotografÃ­a)

| Path | ClasificaciÃ³n | Fase | Notas |
|---|---|---|---|
| `src/components/GallerySection.tsx` | ðŸ—‘ï¸ DESCARTAR si existe como parte de Portfolio actual | 5.5 | Si el archivo existe y se usaba en Portfolio.tsx, queda sin uso al reescribir la galerÃ­a con `react-compare-slider` directamente en el nuevo `Portfolio.tsx`. Si se usa en otra parte (ej. dashboard), PRESERVAR. Validar en Fase 2 con depcheck. Cierra DT-10 parcial (console.error ocurrencias). |
| Componente nuevo: `PortfolioHeader.tsx` | ðŸ†• CREAR | 5.5 | Bloque A de /portfolio: breadcrumb + eyebrow + H1 + body. Reutilizable tambiÃ©n en /portfolio-webs con props. |
| Componente nuevo: `PortfolioIntro.tsx` | ðŸ†• CREAR | 5.5 | Bloque B de /portfolio: intro metodolÃ³gica reducida. |
| Componente nuevo: `PortfolioGallery.tsx` | ðŸ†• CREAR | 5.5 | Bloque C: grid 2 cols con `react-compare-slider` por item. Recibe array de items desde `src/data/galleryData.ts` (ðŸ†• CREAR). |
| Componente nuevo: `PortfolioClosing.tsx` | ðŸ†• CREAR | 5.5 | Bloque D: cierre con CTA + link cross. Reutilizable en /portfolio-webs con props. |

---

## 5. ClasificaciÃ³n de `src/components/` â€” /portfolio-webs (desarrollo web)

| Path | ClasificaciÃ³n | Fase | Notas |
|---|---|---|---|
| `src/components/WebPortfolioShowcase.tsx` | ðŸ—‘ï¸ DESCARTAR | 5.5 | 290 lÃ­neas con GSAP animations, gradientes naranja-rojo por proyecto, glow blur en hover, grid pattern, bolas blur azul/naranja/cyan. Reemplazado por nuevos `PortfolioWebsCases.tsx` editorial. |
| `src/components/ProjectCard.tsx` | ðŸ—‘ï¸ DESCARTAR | 5.5 | Si existÃ­a como sub-componente de WebPortfolioShowcase, desaparece con su padre. Si se usa en otra pÃ¡gina, evaluar en Fase 2. |
| Componente nuevo: `PortfolioWebsIntro.tsx` | ðŸ†• CREAR | 5.5 | Bloque B de /portfolio-webs: intro metodolÃ³gica + tech list. |
| Componente nuevo: `PortfolioWebsCases.tsx` | ðŸ†• CREAR | 5.5 | Bloque C: 3 casos de estudio full-bleed alternados. Recibe array desde `src/data/webCasesData.ts` (ðŸ†• CREAR). |
| (reutiliza) `PortfolioHeader.tsx` | â†— reutilizado | 5.5 | Mismo componente que /portfolio, con props distintos. |
| (reutiliza) `PortfolioClosing.tsx` | â†— reutilizado | 5.5 | Mismo componente que /portfolio, con props distintos. |

---

## 6. ClasificaciÃ³n de `src/data/`

| Path | ClasificaciÃ³n | Fase | Notas |
|---|---|---|---|
| `src/data/showcaseData.ts` | âœ… DESCARTAR | 5.1 | **COMPLETO** commit `db6c756`. Eliminado. |
| `src/data/processData.ts` | âœ… DESCARTAR | 5.1 | **COMPLETO** commit `1a775af`. Eliminado. |
| `src/data/galleryData.ts` | âœ… CREAR | 5.1 | **COMPLETO** commit `c4aba54`. Creado en Subfase 5.1 (necesario para HomePhotoShowcase). 9 items con `{ id, imageBefore, imageAfter, numberKey, titleKey, captionKey }`. |
| `src/data/webCasesData.ts` | âœ… CREAR | 5.1 | **COMPLETO** commit `db6c756`. Creado en Subfase 5.1 (necesario para HomeCasesWeb). 3 items con `{ id, image, eyebrowKey, titleKey, bodyKey, tagKeys: string[] }`. |

---

## 7. ClasificaciÃ³n de `src/components/` â€” huÃ©rfanos de INVENTORY Â§16.14 (D28)

Archivos identificados como potencialmente huÃ©rfanos en Fase 0. DecisiÃ³n aplicada tras rediseÃ±o:

| Path | ClasificaciÃ³n | Fase | RazÃ³n |
|---|---|---|---|
| `src/components/CTASection.tsx` | âœ… DESCARTAR | 5.1 | **COMPLETO** (varios commits). Eliminado. |
| `src/components/GuaranteesSection.tsx` | âœ… DESCARTAR | 5.1 | **COMPLETO** (varios commits). Eliminado. |
| `src/components/Process.tsx` | âœ… DESCARTAR | 5.1 | **COMPLETO** (varios commits). Eliminado. |
| `src/components/Services.tsx` | ðŸ—‘ï¸ DESCARTAR | 5.1 | Confirmado huÃ©rfano. Funcionalidad cubierta por `ServiceSelector` (que tambiÃ©n se descarta) â†’ nuevo `HomeServices.tsx`. |

**Nota operativa:** antes del `git rm`, Claude Code debe ejecutar `grep -r "CTASection\|GuaranteesSection\|Process\|Services\|SimplePricingSection" src/ --include="*.tsx" --include="*.ts"` para confirmar cero imports. Si aparece algÃºn import residual (por ejemplo comentado), resolverlo antes de borrar.

---

## 8. ClasificaciÃ³n de archivos preservados (lÃ³gica intocable)

| Path | ClasificaciÃ³n | RazÃ³n |
|---|---|---|
| `src/contexts/AuthContext.tsx` | ðŸ”’ PRESERVAR | LÃ³gica de auth Supabase. Sprint 2. |
| `src/integrations/supabase/client.ts` | ðŸ”’ PRESERVAR | Cliente Supabase configurado. No se toca. Verificar env var `VITE_SUPABASE_PUBLISHABLE_KEY` coincide con el cÃ³digo (DT-12 candidato, revisar en Fase 2). |
| `src/integrations/supabase/types.ts` | ðŸ”’ PRESERVAR | Tipos generados. Intocables. |
| `src/lib/security.ts` | ðŸ”’ PRESERVAR | SanitizaciÃ³n. |
| `src/lib/validation.ts` | ðŸ”’ PRESERVAR | Zod schemas. Reutilizados por FormSection. |
| `src/lib/utils.ts` | ðŸ”’ PRESERVAR | `cn()` de shadcn. Se preserva tal cual. |
| `src/hooks/useSecureNavigation.ts` | ðŸ”’ PRESERVAR | NavegaciÃ³n segura. Sprint 2 cierra `any` residuales (DT-02). |
| `src/hooks/use-toast.ts` | ðŸ”’ PRESERVAR | Toast de shadcn. |
| `src/hooks/use-mobile.tsx` | ðŸ”’ PRESERVAR | Media query. |
| `src/i18n/config.ts` | â™»ï¸ REFACTOR | Fase 7 (o antes si bloquea i18n paridad). Arregla `getStoredLanguage()` que siempre retorna `"es"` (DT-09). |
| `src/i18n/locales/es.json` | ðŸ—ï¸ REBUILD | Fase 5.1. Reescribir por completo con keys nuevas de CONTENT.md. Backup previo obligatorio. |
| `src/i18n/locales/en.json` | ðŸ—ï¸ REBUILD | Fase 5.1. Idem, con draft EN de CONTENT.md. |
| `src/components/ui/*` (shadcn) | ðŸ”’ PRESERVAR mayormente | Los componentes shadcn usados se mantienen. Los huÃ©rfanos (sidebar, alert-dialog si no se usa) se auditan con depcheck en Fase 2 (DT-07 cierre total). |
| `src/components/ScrollToTop.tsx` | ðŸ”’ PRESERVAR | Utility. Sin cambios visuales. |
| `src/components/PageLoader.tsx` | â™»ï¸ REFACTOR | Fase 3. Actualizar estÃ©tica con DS nuevo (tipografÃ­a, color de spinner). |
| `supabase/migrations/*` | ðŸ”’ PRESERVAR | Migraciones congeladas Sprint 1. DT-14 aceptado (UUID-named migration queda asÃ­). |

---

## 9. Archivos a crear desde cero (ðŸ†• CREAR)

Resumen consolidado de todos los componentes nuevos:

| Nuevo archivo | Fase | DescripciÃ³n breve |
|---|---|---|
| `src/components/home/HomeServices.tsx` | 5.1 | Bloque 2 Home: 2 tarjetas editoriales servicios |
| `src/components/home/HomeCasesWeb.tsx` | 5.1 | Bloque 3 Home: teaser 3 casos web |
| `src/components/home/HomePhotoShowcase.tsx` | 5.1 | Bloque 4 Home: full-bleed before/after slider |
| `src/components/home/HomeProcess.tsx` | 5.1 | Bloque 5 Home: 3 pasos del proceso |
| `src/components/home/HomeAbout.tsx` | 5.1 | Bloque 6 Home: team + trust signals (fusiÃ³n About + WhyUs) |
| `src/components/home/HomeContact.tsx` | 5.4 | **COMPLETO** commit `92f7cf2`. Bloque 8 Home: layout 2 cols info+form. Sustituye FormSection + ContactForm legacy descartados. RHF + Zod + DOMPurify directo. 6 campos (nombre, email, telÃ©fono opt, servicio dropdown, mensaje min 20, checkbox terms). Submit abre `wa.me/{VITE_WHATSAPP_NUMBER}?text=...` con payload texto plano. Schema Zod en `useMemo([t])` por compat con shadcn FormMessage (D39-8). |
| `src/components/portfolio/PortfolioHeader.tsx` | 5.5 | Header editorial reutilizable |
| `src/components/portfolio/PortfolioIntro.tsx` | 5.5 | Intro contextual /portfolio |
| `src/components/portfolio/PortfolioGallery.tsx` | 5.5 | GalerÃ­a con `react-compare-slider` |
| `src/components/portfolio/PortfolioClosing.tsx` | 5.5 | Cierre reutilizable con CTA |
| `src/components/portfolio-webs/PortfolioWebsIntro.tsx` | 5.5 | Intro metodolÃ³gica |
| `src/components/portfolio-webs/PortfolioWebsCases.tsx` | 5.5 | 3 casos full-bleed editorial |
| `src/data/galleryData.ts` | 5.5 | Array de 9 items de galerÃ­a |
| `src/data/webCasesData.ts` | 5.5 | Array de 3 casos web |
| `src/lib/motion.ts` | 3 | Factories GSAP centralizadas (fade-up, stagger, scroll reveal). Cierra DT referenciado en MASTER Â§5.2. |
| `src/lib/tokens.ts` (opcional) | 3 | Tokens tipados para uso en TS (spacing scale, duration, easings). |
| `scripts/with_server.py` | 2 | Script Playwright runner que levanta dev server. Cierra DT-04. |

**Nota sobre estructura de carpetas:** se introducen subdirectorios `src/components/home/`, `src/components/portfolio/`, `src/components/portfolio-webs/` para agrupar los componentes por pÃ¡gina. Esto reduce ruido en `src/components/` (que hoy tiene ~30 archivos mezclados). Los componentes globales (Header, Footer, WhatsAppButton, SectionDivider, PageLoader, ScrollToTop) se quedan en la raÃ­z de `src/components/`.

---

## 10. Archivos y carpetas a sanear (deuda tÃ©cnica)

Tareas de limpieza que se ejecutan junto al rediseÃ±o o en Fase 2:

| Tarea | Fase | DT # | AcciÃ³n |
|---|---|---|---|
| Eliminar `src/assets_backup/` de git | 2 | DT-05 | `git rm -r --cached src/assets_backup/` + aÃ±adir a `.gitignore` |
| Eliminar archivos `.bak`, `.backup`, `.temp` de git | 2 | DT-06 | 7 archivos identificados en INVENTORY Â§16.4. `git rm` uno a uno tras confirmar que no son las versiones buenas. |
| Investigar `src/assetsFotos Portfolio` | 2 | DT-13 | Directorio con nombre con espacios, sin extensiÃ³n. Inspeccionar manualmente: si es un fichero basura, `git rm`. Si contiene assets vÃ¡lidos, renombrar a `src/assets/portfolio-additional/`. |
| Crear directorio `scripts/` | 2 | DT-04 | `mkdir scripts/` + crear `scripts/with_server.py` para Playwright. |
| Cambiar puerto dev 8080 â†’ 5173 en `vite.config.ts` | 3 | DT-03 | Una lÃ­nea. Debe ser coherente con AGENT.md que asume 5173. |
| Wirear `ThemeProvider` de next-themes en `main.tsx` | 3 | DT-08 | Envolver `<App />` en `<ThemeProvider defaultTheme="dark">`. Dark mode default operativo. |
| Resolver 14+ `any` explÃ­citos de Sprint 1 | 5 | DT-02 | En cada archivo tocado, tipar propiamente. Los de dashboard/ quedan para Sprint 2. |
| Limpiar console.error activos en GallerySection | 5 o DESCARTAR | DT-10 | Si GallerySection muere, desaparece el problema. Si se preserva, limpiar. |
| Eliminar import sin uso en LegalNotice.tsx | 5.2 | DT-11 | `useTranslation` importado sin consumo. Quitar import. |
| Fix `getStoredLanguage()` en i18n/config.ts | 7 (o antes) | DT-09 | FunciÃ³n actual siempre retorna "es". Implementar lectura real de `localStorage`. |
| Consolidar `VITE_WHATSAPP_NUMBER` (7 archivos hardcoded + 1 inconsistente) | 5.1-5.4 | DT-01 | **âœ… RESUELTO 7/7** en Subfase 5.4. Las 2 ocurrencias finales (ContactForm L60 `whatsappNumber` const y FormSection L47 `tel:+34667326300`) cerradas al descartar ambos archivos (commit `92f7cf2`). HomeContact lee `import.meta.env.VITE_WHATSAPP_NUMBER`. Grep final `git grep -nE "34667326300\|34634408043" -- src/` vacÃ­o. |
| Auditar namespace `pricing.*` en locales | 5.5 | DT-17 | 3 keys ES rellenadas en 5.4 para mantener paridad i18n. Validar uso real con `git grep "pricing\\." -- src/`. Si huÃ©rfano, eliminar namespace completo de ambos locales. |

---

## 11. Orden de ejecuciÃ³n propuesto (subfases de Fase 5)

Propuesta de secuencia para que el trabajo en Antigravity sea fluido y testeable:

**Fase 5.1 â€” Home (16-17h)**
1. Crear estructura de carpetas `src/components/home/`
2. `Hero.tsx` REBUILD
3. `HomeServices.tsx` CREAR + `ServiceSelector.tsx` DESCARTAR
4. `HomeCasesWeb.tsx` CREAR + `HorizontalShowcase.tsx` + `FloatingElements.tsx` DESCARTAR + datos en `webCasesData.ts`
5. `HomePhotoShowcase.tsx` CREAR
6. `HomeProcess.tsx` CREAR + `StickyScrollSection.tsx` + `PricingSection.tsx` + `SimplePricingSection.tsx` DESCARTAR
7. `HomeAbout.tsx` CREAR + `About.tsx` + `WhyUs.tsx` DESCARTAR
8. `Testimonials.tsx` REBUILD
9. `Index.tsx` REBUILD (el assembly)
10. HuÃ©rfanos DESCARTAR: CTASection, GuaranteesSection, Process, Services
11. `es.json` + `en.json` REBUILD con copy CONTENT.md
12. Test manual: Home completa en ES y EN, motion suave, todos los links activos

**Fase 5.2 â€” Chrome global (4-5h)**
1. `Header.tsx` REBUILD
2. `Footer.tsx` REBUILD
3. `WhatsAppButton.tsx` REFACTOR
4. `PageLoader.tsx` REFACTOR
5. `NotFound.tsx` REFACTOR
6. PÃ¡ginas legal `src/pages/legal/*` REFACTOR (solo layout, copy preservado)
7. Test manual: navegaciÃ³n, lang toggle, WhatsApp button desde cualquier pÃ¡gina

**Fase 5.4 â€” Contact form REBUILD (2-2.5h reales, ejecutada 2026-05-13)**
1. **COMPLETO** Crear `src/components/home/HomeContact.tsx` (CREAR nuevo, NO REBUILD de FormSection como brief original planteaba; supersede por D39-1 tras inspecciÃ³n Q5-B=B que revelÃ³ FormSection orphan).
2. **COMPLETO** Schema Zod con campos: name (min 2), email, phone (opcional), service (dropdown web/photo/both), message (min 20), terms (checkbox). Movido al interior del componente con `useMemo([t])` por incompat shadcn FormMessage (D39-8).
3. **COMPLETO** DOMPurify importado directo (no via wrapper de security.ts que no cubre el caso "strip total", D39-6).
4. **COMPLETO** Submit: valida, sanitiza, construye payload texto plano, abre `wa.me/{VITE_WHATSAPP_NUMBER}?text=...` en nueva pestaÃ±a, toast Ã©xito.
5. **COMPLETO** Layout 2 columnas desktop (info izq + form der), stack vertical mobile infoâ†’form (Q5-C=A).
6. **COMPLETO** Copy i18n cableado `home.contact.*` + 13 keys nuevas (serviceLabel, servicePlaceholder, serviceOptions.*, termsLabel, termsLink, validation.*, whatsapp.*).
7. **COMPLETO** Wire `<HomeContact />` en Index.tsx sustituyendo placeholder lorem D36-3.
8. **COMPLETO** `git rm` ContactForm.tsx y FormSection.tsx (DT-01 cierra 7/7).
9. **COMPLETO** Test Playwright `tests/contact-form.spec.py` con 4 escenarios (empty submit, full submit, no phone, message min length). 4/4 PASS.
10. **COMPLETO** VerificaciÃ³n final: build OK, lint nuevo OK, paridad i18n diff:0.
11. **COMPLETO** 3 commits push: `92f7cf2` (feat + cleanup en mismo commit por staging area, D1), `5605764` (i18n keys), `3450fb5` (wire Index).

**Fase 5.5 â€” Portfolios (3.5h + 5.5h = 9h)**
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

1. Todos los archivos de la lista tienen clasificaciÃ³n aplicada (CREAR, REBUILD, REFACTOR, DESCARTAR hecho).
2. El tipo-checker `npm run lint` pasa sin errores.
3. El build `npm run build` pasa sin errores.
4. Test Playwright asociado (si aplica segÃºn MASTER Â§9.2) pasa.
5. ValidaciÃ³n visual manual por Miguel.
6. Un commit por subfase con mensaje formato `feat(redesign): close phase 5.X â€” <resumen>`.

Si una subfase no cierra al primer intento (fallos de test, problemas visuales), se itera sobre la misma rama sin abrir siguiente subfase. Scope creep evitado.

---

## 13. Archivos fuera de scope Sprint 1 (recordatorio)

Todo lo que sigue NO se toca en Sprint 1, se trata en Sprint 2:

- `src/pages/dashboard/` (todas las pÃ¡ginas)
- `src/pages/Auth.tsx` (interior, no el wrapper chrome)
- `src/components/dashboard/*` si existe
- `supabase/migrations/` (migraciones congeladas)
- Schema y lÃ³gica de Supabase en `src/integrations/supabase/types.ts`

---

## 14. Validaciones finales antes de G5 (cierre Fase 5)

Checklist pre-merge a `dev`:

- [ ] `src/assets_backup/` eliminado de git (DT-05).
- [ ] Archivos `.bak/.backup/.temp` eliminados (DT-06).
- [ ] `scripts/with_server.py` existe y funciona (DT-04).
- [ ] `vite.config.ts` usa puerto 5173 (DT-03).
- [ ] `ThemeProvider` wired en `main.tsx`, dark mode default (DT-08).
- [x] Cero ocurrencias de `"34667326300"` o `34634408043` en el cÃ³digo (`grep -r "34667\|34634" src/` debe estar vacÃ­o excepto `.env.example`) (DT-01). **âœ… Cerrado en Subfase 5.4 (commit `92f7cf2`).**
- [ ] Cero componentes huÃ©rfanos en `src/components/` (depcheck clean).
- [ ] i18n keys huÃ©rfanas de locales eliminadas (goldencoast, photoPacks.trial/basic/standard/premium).
- [ ] `npm run build` OK.
- [ ] `npm run lint` OK.
- [ ] Playwright Home + portfolio + portfolio-webs passing.
- [ ] Lighthouse Home mobile â‰¥ 80 (target final 92, pero pre-Fase 7 80 es aceptable).
- [ ] Lang toggle ES â†” EN funcional desde cualquier pÃ¡gina.
- [ ] WhatsApp button funciona desde cualquier pÃ¡gina con mensaje prefilled correcto.

---

## 15. Change log

| VersiÃ³n | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-19 | Miguel + Claude Opus 4.7 | Documento inicial. ClasificaciÃ³n archivo por archivo (`src/pages/`, `src/components/`, `src/data/`, `src/hooks/`, `src/i18n/`, huÃ©rfanos). 16 CREAR nuevos + 12 REBUILD + 6 REFACTOR + 13 DESCARTAR + 14 PRESERVAR. Orden ejecuciÃ³n Fase 5 en 4 subfases (5.1, 5.2, 5.4, 5.5). Cross-reference con CONTENT.md y deuda tÃ©cnica MASTER Â§7.4. |
| 1.1 | 2026-05-08 | Miguel + Claude Sonnet 4.6 | Cierre Subfase 5.1. Â§0 meta actualizado. Marcadas como âœ… COMPLETO todas las entradas de Subfase 5.1: Hero, ServiceSelector, HorizontalShowcase, FloatingElements, StickyScrollSection, PricingSection, SimplePricingSection, WhyUs, About, Testimonials, SectionDivider (Â§3), showcaseData y processData (Â§6), CTASection, GuaranteesSection, Process, Services (Â§7). Entradas CREAR en Â§6: galleryData.ts y webCasesData.ts actualizadas a âœ… con fase real 5.1 (adelantadas de 5.5 por necesidad de HomeCasesWeb/HomePhotoShowcase). Nota sub-decisiÃ³n D37-5: ProjectCard.tsx eliminado en Step 3 junto con HorizontalShowcase (no en Â§5 como planeado originalmente). |
| 1.2 | 2026-05-12 | Miguel Louwagie Sapena + Claude Opus 4.7 / Sonnet 4.6 | Cierre Subfase 5.2. Â§0 meta actualizado. Â§2 NotFound y legales marcados VALIDADO SIN CAMBIOS. Â§3 entradas Header.tsx, Footer.tsx, WhatsAppButton.tsx actualizadas a âœ… COMPLETO con hashes de commit. Nota REBUILD selectivo Footer por D38-2. |
| 1.3 | 2026-05-13 | Miguel + Claude Opus 4.7 | Cierre Subfase 5.4 Contact form REBUILD. Â§0 meta versiÃ³n bumped. Â§3 fila `FormSection.tsx` ðŸ—ï¸ REBUILD â†’ âœ… DESCARTAR con nota D39-2 (era wrapper layout orphan no renderizado). Â§3 fila `ContactForm.tsx` â™»ï¸ REFACTOR â†’ âœ… DESCARTAR con nota D39-2 (lÃ³gica del form vivÃ­a aquÃ­, no en FormSection; corrige mentira documental "Mantener lÃ³gica RHF+Zod+DOMPurify" â€” legacy nunca usÃ³ DOMPurify). Â§9 nueva entrada `src/components/home/HomeContact.tsx` ðŸ†• CREAR 5.4 con detalle de implementaciÃ³n (RHF+Zod+DOMPurify directo, payload texto plano, schema en useMemo por shadcn FormMessage). Â§10 fila DT-01 marcada âœ… RESUELTO 7/7 con commit `92f7cf2`. Â§10 nueva entrada DT-17 (namespace `pricing.*` legacy auditar en 5.5). Â§11 paso Fase 5.4 reescrito con 11 sub-pasos reflejando ejecuciÃ³n real. Â§14 checklist DT-01 marcado [x]. |
