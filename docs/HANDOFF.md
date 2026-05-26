# HANDOFF.md — Studio Pixelens Redesign v2

> Punto de entrada operativo del proyecto. Lee este archivo PRIMERO en cada nueva conversación.
> Solo consulta MASTER, PROGRESS, MIGRATION, CONTENT si necesitas detalle no cubierto aquí.
> Este documento se sobreescribe al cierre de cada subfase. NO acumula historia.

---

## Metadata

| Campo | Valor |
|---|---|
| Versión HANDOFF | v2 |
| Fecha | 2026-05-26 |
| Último cierre | Subfase 5.5a — /portfolio REBUILD ✅ (G5 parcial firmado 2026-05-26) |
| Próxima subfase | Subfase 5.5b — /portfolio-webs REBUILD ⬜ |
| Próximo gate | G5 final (cierre Fase 5 completa tras 5.5b) |
| Branch activo | `redesign/v2-framer-base` |
| HEAD del repo | `f49ceac` + commit docs sync posterior al cierre 5.5a |

---

## Estado actual en 1 párrafo

Proyecto en Fase 5 (Migración contenido + portfolio), Sprint 1 público. Cuatro subfases cerradas: 5.1 (Home REBUILD, 11 commits, 2026-05-08), 5.2 (Chrome global, 5 commits, 2026-05-12), 5.4 (Contact form REBUILD, 3 commits, 2026-05-13), 5.5a (/portfolio REBUILD, 1 commit, 2026-05-26). `src/components/home/` con 8 bloques, `src/components/layout/` con chrome global, `src/components/portfolio/` con 4 nuevos componentes (PortfolioHeader, PortfolioIntro, PortfolioGallery, PortfolioClosing). Galería de 9 items con `react-compare-slider v4`. DT-01, DT-12, DT-17 cerrados. Falta solo Subfase 5.5b (/portfolio-webs) para completar Fase 5.

---

## Stack técnico

- **Frontend:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- **i18n:** i18next + `i18next-browser-languagedetector` (locales en `src/i18n/locales/`)
- **Slider antes/después:** `react-compare-slider v4` (DT-12 cerrado; selector DOM `[data-rcs="root"]`)
- **Backend:** Supabase (congelado Sprint 1, no tocar)
- **Hosting:** Cloudflare Pages
- **Testing:** Playwright (runner `scripts/with_server.py`, locale `es-ES` obligatorio en context)
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

## Próxima subfase 5.5b — Scope inicial

**Objetivo:** REBUILD completo de `src/pages/PortfolioWebs.tsx` con 4 bloques editoriales según MASTER §6.4 y CONTENT.md §5. Cierra Fase 5 al firmarse G5 final.

**Componentes a crear (2):**
- `src/components/portfolio-webs/PortfolioWebsIntro.tsx` — Intro metodológica + tech list
- `src/components/portfolio-webs/PortfolioWebsCases.tsx` — 3 casos editorial apilado vertical full-bleed (Q5.5-C=A, D40-3)

**Componentes a reutilizar (validados en 5.5a):**
- `src/components/portfolio/PortfolioHeader.tsx` con props de `/portfolio-webs`
- `src/components/portfolio/PortfolioClosing.tsx` con props de `/portfolio-webs` y link cross a `/portfolio`

**Archivos de datos (ya creados en 5.1):**
- `src/data/webCasesData.ts` (3 casos)

**Páginas a actualizar:**
- `src/pages/PortfolioWebs.tsx` REBUILD (compone los componentes de `portfolio-webs/` + chrome de `layout/`)

**Descartes legacy en 5.5b:**
- `src/components/StickyScrollSection.tsx`
- `src/components/WebPortfolioShowcase.tsx`
- `src/components/ProjectCard.tsx`

Grep defensivo previo a `git rm` para verificar cero importadores en archivos preservados.

**Estimación:** ~5.5h.

**Primer paso obligatorio del brief 5.5b:**
1. `git grep -lE "StickyScrollSection|WebPortfolioShowcase|ProjectCard" -- src/` (debe devolver cero o solo los propios archivos).
2. Audit imports de `Portfolio.tsx` finales para confirmar patrón de chrome estable (es referencia para `PortfolioWebs.tsx`).
3. Verificar estructura `webCasesData.ts` (que items mapeen a keys CONTENT.md §5.3 correctamente).

**Copy real:** CONTENT.md §5.
**Spec UI:** MASTER §6.4.

---

## DT abiertos relevantes hoy

| ID | Resumen | Resolver en |
|---|---|---|
| DT-02 | `any` en AuthContext, dashboard/, useSecureNavigation | Sprint 2 (parcial ya resuelto Sprint 1) |
| DT-10 | 15 lint errors categorizados (no-explicit-any, no-empty-object-type, no-require-imports) en archivos protegidos pre-existentes | Sprint 2 |
| DT-14 | Migración Supabase nombre UUID sin descripción | Aceptado, sin acción |
| DT-16 | Token `--cta` en archivos legacy del portfolio (parcial) | 5.5b (cierre total al descartar StickyScrollSection, WebPortfolioShowcase, ProjectCard) |

**DT cerrados en 5.5a:** DT-12 ✅, DT-17 ✅.

---

## Decisiones recientes (D36-D40, 1 línea cada una)

Historia completa en MASTER §13. Aquí solo las que afectan operación actual:

- **D36 (2026-05-03):** Cierre Fase 4. Modelo anchors-in-Home (rutas /servicios, /sobre, /contacto descartadas, viven como `/#services`, `/#about`, `/#contact`). ScrollToTop extendido para hash navigation.
- **D37 (2026-05-08):** Cierre 5.1. Estructura `src/components/home/`. HomeCasesWeb usa scroll CSS nativo. ProjectCard descartado adelantado por cadena imports.
- **D38 (2026-05-12):** Cierre 5.2. Estructura `src/components/layout/` canónica. Footer REBUILD selectivo por namespace `footer.col.*` legacy desalineado.
- **D39 (2026-05-13):** Cierre 5.4. HomeContact.tsx canónico. ContactForm + FormSection descartados como orphan. DOMPurify directo. Schema Zod en `useMemo([t])` por incompat shadcn FormMessage. Patrón Playwright `locale: 'es-ES'` obligatorio.
- **D40 (2026-05-26):** Cierre 5.5a. Estructura `src/components/portfolio/`. Grid último item full-width. Split 5.5a/5.5b. Layout PortfolioWebsCases apilado vertical full-bleed (Q5.5-C=A para 5.5b). Chrome añadido desde layout/ (no swap). DT-17 cerrado. DT-12 cerrado con `react-compare-slider v4` real.

---

## Q estratégicas abiertas

- **Q12 (abrir al cierre G5 final):** Evaluar arquitectura Antigravity 2.0 + Gemini 3.5 Flash en patrón híbrido para Fase 7 (SEO/perf/launch) y Sprint 2 (dashboard). Hipótesis: preservar cuota Claude para tareas con juicio, offload tareas mecánicas a Flash. Piloto acotado al cierre Fase 6. No antes.

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
