# HANDOFF.md — Studio Pixelens Redesign v2

> Punto de entrada operativo del proyecto. Lee este archivo PRIMERO en cada nueva conversación.
> Solo consulta MASTER, PROGRESS, MIGRATION, CONTENT si necesitas detalle no cubierto aquí.
> Este documento se sobreescribe al cierre de cada subfase. NO acumula historia.

---

## Metadata

| Campo | Valor |
|---|---|
| Versión HANDOFF | v1 |
| Fecha | 2026-05-13 |
| Último cierre | Subfase 5.4 — Contact form REBUILD ✅ (G5 parcial firmado 14/14) |
| Próxima subfase | Subfase 5.5 — Portfolios REBUILD ⬜ |
| Próximo gate | G5 final (cierre Fase 5 completa) |
| Branch activo | `redesign/v2-framer-base` |
| HEAD del repo | `3450fb5` + commit docs sync posterior al cierre 5.4 |

---

## Estado actual en 1 párrafo

Proyecto en Fase 5 (Migración contenido + portfolio), Sprint 1 público. Tres subfases cerradas: 5.1 (Home REBUILD, 11 commits, 2026-05-08), 5.2 (Chrome global, 5 commits, 2026-05-12), 5.4 (Contact form REBUILD, 3 commits, 2026-05-13). El Home está completamente cableado con copy real. `src/components/home/` contiene 8 bloques (Hero, HomeServices, HomeCasesWeb, HomePhotoShowcase, HomeProcess, HomeAbout, Testimonials, HomeContact). `src/components/layout/` contiene chrome global (Header, Footer, MobileNav, LanguageToggle, WhatsAppButton). DT-01 cerrado total 7/7. Falta Subfase 5.5 (Portfolios) para completar Fase 5.

---

## Stack técnico

- **Frontend:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- **i18n:** i18next + `i18next-browser-languagedetector` (locales en `src/i18n/locales/`)
- **Backend:** Supabase (congelado Sprint 1, no tocar)
- **Hosting:** Cloudflare Pages
- **Testing:** Playwright (runner `scripts/with_server.py`)
- **Repo:** `miguellouwagie-creator/pixel-lens-craft`
- **Owner local:** Windows PowerShell, `C:\dev\pixel-lens-craft`
- **Antigravity:** Claude Code en VS Code (Sonnet 4.6 Effort Medium default, Opus para complejidad alta)

---

## Comandos clave

```powershell
cd C:\dev\pixel-lens-craft
git status
git log --oneline -1
npm run dev               # http://localhost:5173
npm run build
npm run lint
# Playwright (locale es-ES obligatorio en context, D39-9):
python scripts/with_server.py --server "npm run dev" --port 5173 -- python tests/<spec>.py
```

---

## Próxima subfase 5.5 — Scope inicial

**Objetivo:** REBUILD completo de `/portfolio` (galería fotografía) y `/portfolio-webs` (3 casos web). Sustituye las páginas legacy con UI con gradientes, glow effects y layout SaaS (pivote de scope D31).

**Componentes a crear (6):**
- `src/components/portfolio/PortfolioHeader.tsx` — Header editorial reutilizable
- `src/components/portfolio/PortfolioIntro.tsx` — Intro contextual /portfolio
- `src/components/portfolio/PortfolioGallery.tsx` — Galería 9 items con `react-compare-image` (cierra DT-12)
- `src/components/portfolio/PortfolioClosing.tsx` — Cierre reutilizable con CTA
- `src/components/portfolio-webs/PortfolioWebsIntro.tsx` — Intro metodológica
- `src/components/portfolio-webs/PortfolioWebsCases.tsx` — 3 casos full-bleed

**Archivos de datos (ya creados en 5.1):**
- `src/data/galleryData.ts` (9 items)
- `src/data/webCasesData.ts` (3 casos)

**Páginas a actualizar:**
- `src/pages/Portfolio.tsx` REBUILD (compone los componentes de `portfolio/`)
- `src/pages/PortfolioWebs.tsx` REBUILD (compone los componentes de `portfolio-webs/`)

**Estimación:** ~9h (3.5h /portfolio + 5.5h /portfolio-webs).

**Primer paso obligatorio del brief 5.5:** audit DT-17 con `git grep "pricing\." -- src/`. Si namespace huérfano, eliminar de ambos locales. Si vive bajo algún componente preservado, conservar.

**Copy real:** CONTENT.md §4 (Portfolio) y §5 (PortfolioWebs).
**Spec UI:** MASTER §6.3 y §6.4.

---

## DT abiertos relevantes hoy

| ID | Resumen | Resolver en |
|---|---|---|
| DT-02 | `any` en AuthContext, dashboard/, useSecureNavigation | Sprint 2 (parcial ya resuelto Sprint 1) |
| DT-10 | console.error en GallerySection y useSecureNavigation | 5.5 GallerySection / Sprint 2 useSecureNavigation |
| DT-12 | react-compare-image plan confirmado para PortfolioGallery | 5.5 |
| DT-14 | Migración Supabase nombre UUID sin descripción | Aceptado, sin acción |
| DT-16 | Token `--cta` en archivos legacy del portfolio | 5.5 progresivo (mayoría cierra aquí) |
| DT-17 | Namespace `pricing.*` legacy con 3 keys ES rellenadas para paridad | 5.5 (audit primer paso del brief) |

---

## Decisiones recientes (D35-D39, 1 línea cada una)

Historia completa en MASTER §13. Aquí solo las que afectan operación actual:

- **D35 (2026-04-30):** Cierre Fase 3 (chrome global Fase 3 firmado con i18n cableado y WhatsApp real).
- **D36 (2026-05-03):** Cierre Fase 4. Modelo definitivo anchors-in-Home (rutas /servicios, /sobre, /contacto descartadas, viven como `/#services`, `/#about`, `/#contact`). ScrollToTop extendido para hash navigation.
- **D37 (2026-05-08):** Cierre 5.1. Estructura `src/components/home/`. HomeCasesWeb usa scroll CSS nativo. ProjectCard descartado adelantado por cadena imports.
- **D38 (2026-05-12):** Cierre 5.2. Estructura `src/components/layout/` canónica. Footer REBUILD selectivo por namespace `footer.col.*` legacy desalineado.
- **D39 (2026-05-13):** Cierre 5.4. HomeContact.tsx canónico. ContactForm + FormSection descartados como orphan. DOMPurify directo. Schema Zod en `useMemo([t])` por incompat shadcn FormMessage. Patrón Playwright `locale: 'es-ES'` obligatorio.

---

## Protecciones / archivos PRESERVAR

NO modificar bajo ningún concepto:

- `src/lib/validation.ts`, `src/lib/security.ts`, `src/lib/utils.ts`
- `src/integrations/supabase/*` (Sprint 1 congelado, MASTER §5.5)
- `src/contexts/AuthContext.tsx` (Sprint 2)
- `src/hooks/use-toast.ts`, `use-mobile.tsx`, `useSecureNavigation.ts`
- `src/components/ui/*` (shadcn primitives)
- `src/components/home/*` (cerrados en 5.1 y 5.4)
- `src/components/layout/*` (cerrados en 5.2)
- `src/components/ScrollToTop.tsx`, `PageLoader.tsx`
- `src/pages/legal/*` (copy legal real, Protección 2 desde Fase 4)
- `src/pages/Auth.tsx`, `src/pages/dashboard/*` (Sprint 2)
- `.env`, `.env.example`, `package.json`
- `supabase/migrations/*` (congelado)
- `docs/*` (MASTER, PROGRESS, MIGRATION, CONTENT, HANDOFF, CONTEXT_BRIEF, INVENTORY, PHASE2_REPORT: owner los actualiza al cierre)

---

## Convenciones del flujo

- **Phase gate system:** G0 a G7. Cada gate firmado antes de abrir siguiente fase. Subfases dentro de Fase 5 con G5 parcial por cada cierre.
- **Decision IDs:** D-N en orden ascendente. Sub-decisiones D-N-X (ej. D39-1, D39-2).
- **DT-N:** items de deuda técnica en MASTER §7.4.
- **Q-N:** preguntas de scope al owner durante preparación de brief (ej. Q5-A, Q5-B).
- **O.D.A. brief:** estructura Objetivo + Datos + Arquitectura. Auto-suficiente para Antigravity. Producido por Claude Opus en claude.ai Project, ejecutado por Claude Code en VS Code.
- **Protocolo D32:** validación estética por owner en chat antes de pasar brief O.D.A. crítico de UI a Antigravity. Aplica a UI crítica (Fase 5 y futuras).
- **Sync docs al cierre:** ritual al cierre de cada subfase. Actualizar MASTER + PROGRESS + MIGRATION + CONTENT + HANDOFF. Sin em-dashes en documentos ni respuestas (usar punto o coma).
- **Convención D-N en reportes Antigravity:** solo desviaciones del brief se numeran D-N. Confirmaciones de ejecución no se numeran. Observaciones no bloqueantes con O-N.
- **Cronología logs:** entradas nuevas SIEMPRE al final del bloque correspondiente. Drift histórico no se reordena retroactivamente.

---

## Reglas de comportamiento Claude en chat

Resumen del system prompt del Project (idéntico para todas las conversaciones):

1. Al arrancar conversación nueva, leer HANDOFF.md primero (este archivo). Solo consultar MASTER, PROGRESS, MIGRATION, CONTENT si HANDOFF no cubre el punto específico.
2. Toda decisión consistente con MASTER. Si conflicto, señalar antes de proceder.
3. Nunca proponer saltarse fases ni subfases. Si owner pide sin gate firmado, rechazar.
4. Tono crítico-constructivo, directo, sin validación vacía. En español.
5. Formato respuesta: resumen + detalle + riesgos/próximos pasos.
6. Sin em-dashes.
7. Bloque "Estado del proyecto" al final de cada respuesta operativa.
8. Protocolo D32 en UI crítica.
9. Convención D-N: desviaciones se numeran, confirmaciones no.

---

## Próximos updates programados de HANDOFF.md

| Cuándo | Qué |
|---|---|
| Cierre Subfase 5.5 | HANDOFF.md v2 con scope Fase 6 (Motion unificado GSAP). Documentar D40 (introducción HANDOFF.md como entrada operativa, decidida 2026-05-13) + D41 (cierre 5.5). |
| Cierre Fase 6 | HANDOFF.md v3 con scope Fase 7 (SEO, perf, launch). |
| Cierre Fase 7 | HANDOFF.md v4 con scope Sprint 2 (dashboard, post-Sprint 1). |
| Cierre Sprint 2 | HANDOFF.md v5 con estado proyecto completo o archive del documento si proyecto se cierra. |

---

## Punteros para profundizar

Si HANDOFF no cubre algo, usar `project_knowledge_search` con keywords específicas en estos docs:

- **Arquitectura, design system, tokens DS, DT consolidados, decisions log:** `docs/MASTER.md`
- **Plan archivo por archivo, qué hacer con cada componente:** `docs/MIGRATION.md`
- **Copy real ES + EN, keys i18n, anti-patrones editoriales:** `docs/CONTENT.md`
- **Bitácora completa, session logs históricos, blockers, preguntas abiertas:** `docs/PROGRESS.md`
- **Contexto inicial del proyecto, owner, deadlines, stakeholders:** `docs/CONTEXT_BRIEF.md`
- **Inventario auditoría Fase 0:** `docs/INVENTORY.md`
- **Auditoría técnica Fase 2:** `docs/PHASE2_REPORT.md`

---

## Footer del documento

| Campo | Valor |
|---|---|
| Sobreescribir este archivo en | Cierre Subfase 5.5 |
| Plantilla reutilizable | Sí (estructura fija, valores actualizados) |
| Histórico de HANDOFF | NO se preserva en HANDOFF. Trazabilidad en `docs/PROGRESS.md` session logs y `docs/MASTER.md` decisions log (D40 a documentar en cierre 5.5). |
| Generador | Claude Opus 4.7 en claude.ai Project |
