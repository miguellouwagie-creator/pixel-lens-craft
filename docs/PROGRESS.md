# PROGRESS.md — Track record Studio Pixelens Redesign v2

> **Single source of truth del estado del proyecto.**
> Se actualiza desde dos fuentes:
> - Claude Code en Antigravity (ejecución técnica, commits, archivos modificados)
> - Claude Opus en claude.ai Project (decisiones estratégicas, análisis, bloqueos)
>
> No borrar entradas antiguas. Solo añadir.

---

## Current status

- **Fase actual:** Fase 1 (Sistema documental) **completada**. CONTENT.md y MIGRATION.md generados. MASTER.md actualizado a v1.4 (pivote D31). PROGRESS.md y CONTEXT_BRIEF.md sincronizados. Pendiente commit de cierre y validación humana del Gate G1.
- **Siguiente fase:** Fase 2 (Auditoría técnica). Ejecuta en Antigravity con Claude Code (Sonnet 4.6, Effort Medium). Entregables: depcheck output, eliminación de archivos huérfanos `.bak/.backup/.temp` y `src/assets_backup/`, creación de `scripts/with_server.py`, validación de paquetes huérfanos.
- **Próximo gate:** G1 (validación humana de CONTENT.md + MIGRATION.md + MASTER v1.4 + PROGRESS v1.6 + CONTEXT_BRIEF v1.4).
- **Siguiente acción inmediata:** Miguel copia los 5 archivos al repo, hace commit único `docs: close Phase 1 with content + migration, pivot scope (D29-D32)`, sincroniza al Project claude.ai, y valida G1.
- **Última actualización:** 2026-04-19 por Miguel + Claude Opus 4.7 (cierre Fase 1, D29-D32, MASTER v1.4, PROGRESS v1.6, CONTEXT_BRIEF v1.4, CONTENT.md v1.0, MIGRATION.md v1.0).

---

## Phase tracker

| Fase | Nombre | Estado | Gate | Fecha inicio | Fecha cierre | Horas reales | Notas |
|---|---|---|---|---|---|---|---|
| Pre | Pre-arranque | ✅ Completa | — | 2026-04-18 | 2026-04-18 | ~7h | Bloque A cerrado. Repo operativo en `C:\dev\pixel-lens-craft`. Branch `redesign/v2-framer-base` publicada en origin con docs canónicos v1.1/v1.2/v1.1 en commit `f37e5ed`. Tags `v1.0-pre-redesign` y `v0.1-cinematic-v2-abandoned` subidos. Branches residuales limpiadas. |
| 0 | Inventario | ✅ Completa | G0 ✓ | 2026-04-19 | 2026-04-19 | ~2h | Ejecutada en Antigravity con Claude Code (Sonnet 4.6, Effort Medium). Commit `902b906`. INVENTORY.md 770 líneas con §0-§18. 21 hallazgos en §16 consolidados como deuda técnica en MASTER §7.4 (DT-01 a DT-14). G0 validado por owner. |
| 1 | Sistema documental | ✅ Completa | G1 (pendiente validación) | 2026-04-19 | 2026-04-19 | ~6h | Ejecutada en claude.ai Project (Opus 4.7). Outputs: CONTENT.md v1.0 (45 KB, copy ES + draft EN para Home + /portfolio + /portfolio-webs + chrome global, 10 anti-patrones, keys huérfanas, diff conceptual), MIGRATION.md v1.0 (clasificación archivo por archivo: 16 CREAR + 12 REBUILD + 6 REFACTOR + 13 DESCARTAR + 14 PRESERVAR). Pivote D31 (rediseño UI completo de portfolios). D29-D32 registradas. Q01-Q04 y Q06-Q08 cerradas. MASTER v1.4, PROGRESS v1.6, CONTEXT_BRIEF v1.4 sincronizados. |
| 2 | Auditoría técnica | ⬜ Pendiente | G2 | — | — | — | Antigravity Sonnet 4.6, ~2-3h. Depcheck, limpieza archivos huérfanos, creación scripts/with_server.py, resolución DT-04, DT-05, DT-06, DT-13. |
| 3 | Design system build | ⬜ Pendiente | G3 | — | — | — | Crítico: flip colores + dark default + pairing Playfair/Inter |
| 4 | Esqueleto y rutas | ⬜ Pendiente | G4 | — | — | — | — |
| 5 | Migración contenido + portfolio | ⬜ Pendiente | G5 | — | — | — | Subfases 5.1-5.5 |
| 6 | Motion unificado | ⬜ Pendiente | G6 | — | — | — | GSAP únicamente |
| 7 | SEO, perf, launch | ⬜ Pendiente | G7 | — | — | — | — |

**Leyenda:** ⬜ Pendiente · 🟡 En curso · ✅ Completa · 🔴 Bloqueada · ⏸️ Pausada

---

## Session log

### 2026-04-18 (mañana)

**Canal:** claude.ai chat (Opus 4.7)
**Duración:** ~3h acumulado

Acciones:
- Análisis del repositorio VoltAgent/awesome-design-md, selección de Framer como base de diseño con flip de tokens de marca (naranja primary, azul accent).
- Auditoría de studiopixelens.com actual, identificación de stack real.
- Revisión de package.json, tailwind.config.ts, src/index.css, migraciones Supabase.
- Descubrimiento crítico: Supabase es backend SaaS completo, no estético. Scope dividido en Sprint 1 (público) y Sprint 2 (dashboard autenticado).
- Confirmación de stack: mantener Vite + React + TypeScript + shadcn + GSAP + i18next.
- Host confirmado: Cloudflare Pages.
- Generación de MASTER.md v1.0 con especificación completa.
- Diseño de hoja de ruta de 7 fases + pre-arranque con Quality Gates.
- Diseño de sistema documental: MASTER + PROGRESS + CONTEXT_BRIEF.
- Definición de modelos por fase.

Outputs:
- `/docs/MASTER.md` v1.0
- `/docs/PROGRESS.md` v1.0
- `/docs/CONTEXT_BRIEF.md` v1.0

### 2026-04-18 (tarde)

**Canal:** claude.ai chat (Opus 4.7)
**Duración:** +1h

Acciones:
- Usuario aporta dos archivos preexistentes del repo: `AGENT.md` y `CLAUDE.md`.
- Análisis de ambos. Descubrimiento de 5 conflictos con MASTER.md v1.0:
  - C1: Tipografía (AGENT.md prohíbe Inter, MASTER.md v1.0 la adoptaba)
  - C2: Motion library (AGENT.md menciona "Motion", MASTER.md v1.0 GSAP)
  - C3: Branch base (AGENT.md dice `dev`, MASTER.md v1.0 `main`)
  - C4: Dirección estética (AGENT.md luxury/editorial, MASTER.md v1.0 Framer bold)
  - C5: Target LCP (AGENT.md < 2.5s, MASTER.md v1.0 < 2.0s)
- Resolución de conflictos: sección 1.6 del MASTER con tabla de reconciliación.
- Pivot de dirección estética a "Editorial Structural" (síntesis Framer + AGENT.md).
- Descubrimiento de archivos de infraestructura no mapeados: `AuthContext.tsx`, `security.ts`, `validation.ts`, `useSecureNavigation.ts`, `Auth.tsx`.
- Incorporación de convención de commits AGENT.md.
- Incorporación de infraestructura Playwright con puerto 5173.
- Actualización de estructura de carpetas con `contexts/`, `integrations/`, `scripts/`, `hooks/`, i18n/.

Outputs:
- `/docs/MASTER.md` v1.1 (incorpora AGENT.md, resuelve conflictos)
- `/docs/PROGRESS.md` v1.1 (este archivo)
- `/docs/CONTEXT_BRIEF.md` v1.1 (coexistencia con AGENT.md documentada)

### 2026-04-18 (noche) — Bloque A housekeeping y cierre pre-arranque

**Canal:** claude.ai chat (Opus 4.7) + PowerShell local (Miguel)
**Duración:** ~3h

Contexto de arranque:
- Repo local en `C:\Users\migue\Dropbox\PC\Downloads\Proyectos Antigravity\pixel-lens-craft`, dentro de Dropbox. Setup incompatible con git por file locks y races.
- `main` local tenía commit `bc910f7` ("docs: move CLAUDE.md to docs/SECURITY_AUDIT.md for clarity") con mensaje engañoso: el commit solo añadió 26 líneas a `AGENT.md`, nunca ejecutó el rename prometido.
- Durante diagnóstico apareció commit nuevo en `origin/main`: `a2b4a2c` ("Document priority reading order for AI agents"), funcionalmente equivalente al local `bc910f7` (mismo bloque en `AGENT.md`, 1 línea de separador de diferencia, mensaje honesto). Divergencia entre local y remoto.
- Branch residual en origin: `git-checkout--b-redesign/v2-framer-base` (mistype de sesión anterior). Limpieza pendiente.

Acciones ejecutadas en copia Dropbox:
- Backup defensivo del commit descartable: tag local `backup/bc910f7-pre-reset`.
- `git reset --hard origin/main` para alinearse con remoto, descartando `bc910f7` redundante.
- `git mv CLAUDE.md docs/SECURITY_AUDIT.md` (100% rename, historia preservada). Commit `ebfe87b`.
- Edición manual de `AGENT.md`: actualización puntero a `/docs/SECURITY_AUDIT.md`. Commit `abe5b99`.
- Tag anotado `v1.0-pre-redesign` sobre `abe5b99`. Push del tag.
- Push de `main` al remoto: `a2b4a2c..abe5b99`.

Mudanza del repo fuera de Dropbox:
- Cerrado Antigravity y procesos Dropbox vía Task Manager.
- Clone fresco en `C:\dev\pixel-lens-craft` desde GitHub.
- Verificado estado: `main` en `abe5b99`, tag `v1.0-pre-redesign` presente, `CLAUDE.md` ausente, `docs/SECURITY_AUDIT.md` presente.

Sincronización de `dev` con `main`:
- `git fetch --all --prune`, checkout de `dev` (`bb4d6c2`), `git pull --ff-only` (already up to date).
- `git merge main --ff-only` exitoso: 9 archivos actualizados, incluyendo `.claude/commands/security-audit.md`, `AGENT.md`, `docs/SECURITY_AUDIT.md`, componentes dashboard, validación, migración de seguridad Supabase `20260412184100`.
- Push de `dev` actualizada: `bb4d6c2..abe5b99`.

Creación de branch de rediseño y commit inicial:
- `git checkout -b redesign/v2-framer-base` desde `dev` actualizada.
- Copia de `MASTER.md` v1.1, `PROGRESS.md` v1.2 y `CONTEXT_BRIEF.md` v1.1 desde Downloads a `docs/` vía `Copy-Item`.
- Commit `f37e5ed`: "docs: add MASTER v1.1, PROGRESS v1.2 and CONTEXT_BRIEF v1.1 as canonical project documentation". 3 archivos, 1372 insertions.
- Push inicial de `redesign/v2-framer-base` a origin con `-u` (upstream configurado).
- Warnings de CRLF esperables en Windows (no bloqueantes). Configurado `git config --global core.autocrlf true` para silenciarlos en futuros commits.

Limpieza de branch residual:
- `git push origin --delete git-checkout--b-redesign/v2-framer-base` exitoso.
- `git fetch --all --prune` para eliminar referencia local.

Descubrimiento y descarte de rediseño previo abandonado:
- `git remote show origin` reveló branch no prevista: `redesign/cinematic-v2`.
- Investigación del historial: 20 commits fechados 2026-03-21, autor Miguel, con rediseño completo (Home, Services, Web Design, Photography, Portfolio, Contact, routing, design system tokens). Finalizaba con fixes de build y deploy (shadcn `@apply`, BOM en `_redirects`, Supabase env vars).
- Auditoría del deployment público `https://redesign-cinematic-v2.pixel-lens-craft.pages.dev/`: solo sirve HTML fallback, sin React montado. Confirma diagnóstico de owner ("no está en funcionamiento").
- Owner confirma intención de descartar: rediseño previo hecho hace semanas, estética "Cinematic Architect" incompatible con nueva dirección "Editorial Structural".
- Tag anotado de salvaguarda: `v0.1-cinematic-v2-abandoned` sobre último commit `046ea3b`, pusheado a origin. Permite rescate futuro por SHA aunque la branch se borre.
- `git push origin --delete redesign/cinematic-v2` exitoso.
- Pendiente manual: despublicar deployment en Cloudflare Pages.

Hallazgos documentados:
- Commit `bc910f7` nunca se subió a origin (descartado en reset local). Tag `backup/bc910f7-pre-reset` solo existe en copia Dropbox ahora obsoleta, aceptable porque contenido ya está en `a2b4a2c`.
- Mensaje del commit remoto `a2b4a2c` es honesto y describe correctamente el cambio. Mensaje del descartado `bc910f7` era engañoso (hablaba de rename que nunca hizo). Cicatriz evitada.
- Rename real de `CLAUDE.md` a `docs/SECURITY_AUDIT.md` sí ejecutado ahora en `ebfe87b`, con mensaje honesto.
- Copia Dropbox pendiente de renombrar a `pixel-lens-craft-DEPRECATED-NO-USAR` como backup de seguridad. Borrado recomendado tras 2 semanas sin incidencias.
- Deployment Cloudflare Pages de cinematic-v2 activo, pendiente despublicar manualmente desde dashboard.

Outputs finales de la sesión:
- `main` en `abe5b99` con tag `v1.0-pre-redesign`, sincronizada con `origin/main`.
- `dev` en `abe5b99`, sincronizada con `origin/dev`.
- `redesign/v2-framer-base` en `f37e5ed` (HEAD), con docs canónicos completos, publicada en origin.
- Tag `v0.1-cinematic-v2-abandoned` en origin como rescate del rediseño previo descartado.
- Repo operativo en `C:\dev\pixel-lens-craft`, fuera de Dropbox.
- Tres branches en origin: `main`, `dev`, `redesign/v2-framer-base`. Dos tags: `v1.0-pre-redesign`, `v0.1-cinematic-v2-abandoned`.

Próximo paso concreto:
- Abrir chat nuevo en el Project "Studio Pixelens Redesign" para Fase 0.
- Pedir brief O.D.A. para Claude Code en Antigravity que genere `docs/INVENTORY.md`.
- Tareas manuales pendientes no bloqueantes: despublicar deployment Cloudflare Pages de cinematic-v2, renombrar carpeta Dropbox vieja.

### 2026-04-18 (noche-2) — Evaluación pack getdesign/framer

**Canal:** claude.ai chat (Opus 4.7) + PowerShell local (Miguel)
**Duración:** ~1h

Contexto:
- Miguel propone ejecutar `npx getdesign@latest add framer` antes de Fase 0 para integrar una referencia visual al MASTER.md.
- Hipótesis inicial: el pack instalaría componentes o tokens que complementarían el Design System.
- Realidad descubierta: `getdesign` es un CLI que genera un único archivo `DESIGN.md` prescriptivo, compite con AGENT.md y MASTER.md §3 por ser fuente de verdad de diseño para coding agents.

Ejecución:
- Sandbox creado en `C:\dev\getdesign-sandbox` con `npm init -y` para evitar contaminación del repo.
- Ejecutado `npx getdesign@latest add framer`. Versión descargada: `getdesign@0.6.3`.
- Output: `DESIGN.md` en raíz + `framer/DESIGN.md` idéntico como copia.

Análisis en profundidad del contenido:
- `DESIGN.md` describe literalmente framer.com como sitio web, no una dirección genérica adaptable.
- Matriz de 10 puntos de comparación con MASTER.md. Resultado: 4 conflictos irresolubles (accent color, tipografía de pago GT Walsheim, filosofía product-forward vs editorial, "no imagery" vs portfolio fotográfico), 4 conflictos resolubles/menores, 2 aportes puros sin coste.
- Riesgo identificado: si se copiara `DESIGN.md` al repo, Claude Code en Antigravity lo leería junto a AGENT.md y MASTER.md sin jerarquía clara. Receta para decisiones incoherentes. Mismo problema que AGENT.md vs MASTER v1.0 en sesión anterior.

Decisión:
- Descarte global del pack (D22).
- Extracción quirúrgica de 7 aportes técnicos neutrales (V1-V7) anexados a MASTER §3.9.
- Updates quirúrgicos en §3.1 (shadows con `--shadow-ring-accent` y multi-layer `--shadow-strong`) y §3.2 (OpenType features de Inter).
- Rechazo explícito de pills 100px en CTAs (D23).
- No se copia `DESIGN.md` al repo. Sandbox se borra.

Outputs:
- `docs/MASTER.md` v1.2 con §3.9, updates en §3.1 y §3.2, D22-D23 en §13.
- `docs/PROGRESS.md` v1.4 con esta sesión, D22-D25.
- `docs/CONTEXT_BRIEF.md` v1.2 con riesgo 9 (herramientas CLI prescriptivas).

Lección operativa archivada:
- Antes de correr CLIs que prometen "design system inspirado en X", verificar si generan archivos **prescriptivos** (instrucciones para agentes, conflicto potencial con AGENT.md + MASTER) o **aditivos** (código, tokens, components, puramente sumativos).
- El valor de este ejercicio no es el output del pack. Es haber verificado que no aporta dirección global y extraído 7 nuggets técnicos reales.

Próximo paso concreto:
- Sandbox `C:\dev\getdesign-sandbox` pendiente de borrar (`Remove-Item -Recurse -Force`).
- Commit de los 3 archivos actualizados en `redesign/v2-framer-base` con mensaje: `docs: integrate getdesign/framer technical takeaways, discard global direction (D22-D25)`.
- Nota operativa: MASTER.md v1.2 se commiteó por separado antes del cierre de este intermedio. El segundo commit sincroniza PROGRESS.md y CONTEXT_BRIEF.md con las decisiones ya archivadas en MASTER.
- Arrancar Fase 0 en Antigravity con el brief O.D.A. ya diseñado, sin cambios.

### 2026-04-19 — Fase 0 (Inventario) ejecutada y cerrada

**Canales:** Antigravity (Claude Code, Sonnet 4.6, Effort Medium) + claude.ai chat (Opus 4.7) para validación y docs sync.
**Duración:** ~2h Antigravity + ~1h chat.

Pre-arranque:
- Sync de MASTER.md v1.2 + PROGRESS.md v1.4 + CONTEXT_BRIEF.md v1.2 en repo (commit `4150925`) y en Project claude.ai.
- Sandbox `C:\dev\getdesign-sandbox` borrado.
- Apertura de proyecto en Antigravity sobre `C:\dev\pixel-lens-craft`.
- Sanity check: `pwd`, `git branch`, `git rev-parse HEAD` confirman working dir, branch `redesign/v2-framer-base` y commit `4150925`.

Ejecución Antigravity:
- Brief O.D.A. de Fase 0 pegado en sesión Claude Code.
- Efectos: lectura de AGENT.md, MASTER.md, PROGRESS.md, CONTEXT_BRIEF.md antes de actuar. Recorrido exhaustivo de `src/`, `public/`, `supabase/migrations/`, `docs/`, `src/i18n/locales/`, archivos de configuración de raíz.
- Comandos autorizados: `grep`, `find`, `cat`, `wc`, `python3 -c` para parsear JSON, `npm outdated`, `sed | sort | uniq`. Aprobación manual comando por comando ("1 Yes" puntual, nunca "allow for project").
- Rechazo único: primer intento de commit con heredoc y `Co-Authored-By: Claude`. Reformulado a mensaje exacto del brief. Ver nota operativa abajo.
- Cuota llegó al 94% al final. Commit y push completados dentro del margen.

Outputs Antigravity:
- `docs/INVENTORY.md` 770 líneas, 18 secciones según brief.
- Commit `902b906` con mensaje `docs(progress): add initial repository inventory (Phase 0)`, pusheado a `origin/redesign/v2-framer-base`.

Validación del gate G0:
- Owner valida visualmente INVENTORY.md en GitHub. §0-§18 presentes con contenido. §16 con 21 subsecciones de flagging detalladas. §17 refleja estructura real y señala que `src/components/portfolio/` no existe.
- G0 cerrado.

Hallazgos críticos de INVENTORY §16 que generaron decisiones:
- §16.1: puerto dev 8080, debería ser 5173. → Q09 → D26.
- §16.12: `src/components/portfolio/` no existe. → Q10 → D27.
- §16.2, §16.5: deuda técnica (teléfono hardcoded, 14+ any). → D28.
- Además §16 saca a la luz 11 items adicionales de deuda técnica no mapeados previamente (assets_backup, .bak, scripts/ ausente, ThemeProvider no wired, rutas App.tsx divergentes, env var mismatch, i18n switch no funcional, console.error, componentes huérfanos, import muerto, paquete instalado sin usar, nombre de archivo anómalo, migración UUID).

Decisiones tomadas en chat claude.ai tras revisión de INVENTORY:
- **D26**: puerto dev unificado en 5173. Resolución en Fase 3 (DT-03).
- **D27**: portfolio es módulo distribuido. Fase 1 genera `PORTFOLIO_SPEC.md` con lista exacta de archivos.
- **D28**: deuda técnica tratada progresivamente durante rediseño. Tabla consolidada en MASTER §7.4 con 14 items (DT-01 a DT-14). No fase dedicada.

Nota operativa archivada (para futuras sesiones Antigravity):
- Claude Code en Antigravity tiende a añadir `Co-Authored-By: Claude` al commit message. AGENT.md no lo contempla y ensucia historia. Siempre forzar mensaje exacto del brief sin firma de coautoría.
- Aprobación comando por comando con "1 Yes" puntual funcionó bien. Evitar "allow for project" mantiene control granular.

Outputs finales de la sesión (post-commit de cierre Fase 0):
- `docs/MASTER.md` v1.3: §5.2 alineada con repo real, §5.3 con estado actual vs objetivo, §5.5 corregida, §6.3 redefinida, §7.1 con lista concreta, §7.4 nueva con 14 items DT, D26-D28 en §13, Q09-Q10 cerradas.
- `docs/PROGRESS.md` v1.5: phase tracker Fase 0 ✅, sesión 2026-04-19 añadida, D26-D28 en decisions log, Q09-Q10 cerradas, horas acumuladas actualizadas.
- `docs/CONTEXT_BRIEF.md` v1.3: sección 3.13 hallazgos post-Fase 0 añadida, riesgo 10 sobre gap entre MASTER ideal y repo real.

Próximo paso concreto:
- Commit único con los 3 archivos: `docs: close Phase 0 with INVENTORY (902b906), resolve Q09-Q10 (D26-D28)`.
- Sync al Project en claude.ai.
- Abrir sesión nueva en claude.ai Project (Opus 4.7) para diseñar Fase 1. Outputs previstos: `PORTFOLIO_SPEC.md` y `CONTENT.md`.

### 2026-04-19 (tarde) — Fase 1 (Sistema documental) ejecutada y cerrada

**Canal:** claude.ai Project (Opus 4.7, ventana extendida)
**Duración:** ~6h acumuladas en sesiones del 19-abril

Contexto:
- Fase 0 cerrada con INVENTORY.md commiteado en `902b906` y Gate G0 validado.
- Owner aporta archivos del repo a la sesión: `Index.tsx`, `Portfolio.tsx`, `PortfolioWebs.tsx`, `WebPortfolioShowcase.tsx`, `Hero.tsx`, `Header.tsx`, `HorizontalShowcase.tsx`, `StickyScrollSection.tsx`, `WhyUs.tsx`, `About.tsx`, `Testimonials.tsx`, `FormSection.tsx`, `ServiceSelector.tsx`, `PricingSection.tsx`, `Footer.tsx`, locales `es.json` y `en.json`.
- Owner declara explícitamente eliminación del deadline duro May 31. Proyecto orientado a aprendizaje, ritmo dictado por ventanas de cuota Pro y validación humana.

Acciones principales:
- Auditoría visual completa de la UI actual de las páginas públicas.
- Diseño conceptual de Home en 8 bloques editoriales (Hero, Servicios, Casos web, Trabajo fotográfico, Cómo trabajamos, Quiénes somos, Testimonios, Contacto).
- Diseño conceptual de /portfolio en 4 bloques (Header, Intro contextual, Galería con `react-compare-image`, Cierre).
- Diseño conceptual de /portfolio-webs en 4 bloques (Header, Intro metodológica, 3 casos de estudio editorial, Cierre).
- Validación conceptual por owner (Niveles 1+2+3 confirmados).
- Owner aplica criterio de Claude en 3 detalles: equipo (Opción A1 fotos individuales apiladas), ServiceSelector (layout editorial nuevo, no split-screen), Golden Coast Charter (mantener si hay captura, descartar si no).
- Audit de honestidad: Claude detecta y declara contenido inventado en su propia propuesta (Stripe en TropiDenia, tiempos de edición "20-40 min", software Lightroom+Photoshop). Owner confirma instrucción de "usar lo que está puesto en la web".
- 4 micro-decisiones de honestidad cerradas por owner: D31.1 (quitar +40% TropiDenia), D31.2 (quitar tag WordPress BVS), D31.3 (descripción única por caso web), D31.4 (Bloque B /portfolio reducido sin números).
- Owner confirma descarte de Golden Coast Charter (no se encuentra captura usable).

Pivote de scope (D31):
- Diagnóstico: la "preservación verbatim" del portfolio original (D01) chocaba con la dirección Editorial Structural. Mantener `HorizontalShowcase`, `WebPortfolioShowcase` con sus gradientes naranja-rojo, glow blur y FloatingElements 3D habría reproducido el problema "Frankenstein" identificado al inicio del proyecto.
- Decisión D31: rediseño UI completo de `/portfolio` y `/portfolio-webs`. Se preserva solo lógica reutilizable (módulos técnicos en `src/integrations/`, `src/lib/`, `src/contexts/`, `src/hooks/`). Componentes UI antiguos pasan a DESCARTAR.
- Coste: ~9h adicionales de Antigravity en Fase 5.5 vs el "lift-and-shift" original. Beneficio: coherencia editorial completa.

Generación de docs satélites Fase 1:
- `CONTENT.md` v1.0 (45 KB): copy completo ES + draft EN para Home (8 bloques), /portfolio (4 bloques), /portfolio-webs (4 bloques), chrome global (Header, Footer, WhatsApp). 10 anti-patrones de copy. Keys i18n nuevas (~110), modificadas (~55), eliminadas (~62). Diff conceptual con copy actual. Validación pendiente (traducción EN, captions concretos por imagen, datos confirmados de email/horario).
- `MIGRATION.md` v1.0 (23 KB): clasificación archivo por archivo. 16 CREAR (subcomponentes Home + portfolio + portfolio-webs + datos + scripts/with_server.py + lib/motion.ts), 12 REBUILD (Hero, Header, Footer, FormSection, Testimonials, Index.tsx, Portfolio.tsx, PortfolioWebs.tsx, locales, etc.), 6 REFACTOR (NotFound, WhatsAppButton, PageLoader, SectionDivider, páginas legales, ContactForm), 13 DESCARTAR (ServiceSelector, HorizontalShowcase, FloatingElements, StickyScrollSection, PricingSection, SimplePricingSection, WhyUs, About antiguo, WebPortfolioShowcase, ProjectCard, showcaseData, processData, huérfanos confirmados), 14 PRESERVAR (lógica intocable). Orden ejecución Fase 5 en 4 subfases (5.1, 5.2, 5.4, 5.5).

Sincronización docs canónicos:
- MASTER.md v1.3 → v1.4: §0 sin deadline, §1.2 sin fechas duras, §1.3 non-goal portfolio marcado obsoleto, §1.4 puntos 4 obsoleto + 10-12 añadidos con D29-D31, §6.3 reescrita completamente bajo D31 (rediseño UI completo, no más "preservación verbatim"), §7.1 clasificación con CREAR + DIFERIR, §7.4 con DT-15 (huérfanas i18n) + estado "plan confirmado" en items con resolución natural, §13 D29-D32, Q01-Q04 + Q06-Q08 cerradas, §15 changelog.
- PROGRESS.md v1.5 → v1.6 (este archivo): phase tracker Fase 1 ✅, sesión 19-abril tarde añadida, D29-D32 en decisions log, Q01-Q04+Q06-Q08 cerradas en preguntas abiertas, horas acumuladas actualizadas a 17.
- CONTEXT_BRIEF.md v1.3 → v1.4: sección 3.15 nueva (pivote D31 y protocolo D32), riesgo 11 sobre validación estética pre-Antigravity.

Hallazgos archivados en este sesión:
- WhyUs.tsx tiene número WhatsApp distinto del resto del sitio (`34634408043` vs `34667326300`). Bug pre-existente, se cierra al DESCARTAR el componente en Fase 5.1.
- `react-compare-image` ya instalado pero no usado. Se aprovecha en `PortfolioGallery.tsx` (Bloque C de /portfolio) y en `HomePhotoShowcase.tsx` (Bloque 4 de Home). Cierra DT-12.
- Componentes huérfanos de INVENTORY §16.14 (CTASection, GuaranteesSection, Process, Services, SimplePricingSection) confirmados como DESCARTAR en MIGRATION.md §7. Cierra DT-07 plan.
- Keys i18n huérfanas adicionales detectadas: `portfolioShowcase.goldencoast.*` (7 keys, nunca renderizadas) + `photoPacks.trial/basic/standard/premium.*` (reemplazadas por corporate/realestate/events/gastronomy/custom). Nuevo DT-15 añadido a MASTER §7.4.

Outputs finales de la sesión (pre-commit de cierre Fase 1):
- `docs/MASTER.md` v1.4
- `docs/PROGRESS.md` v1.6 (este)
- `docs/CONTEXT_BRIEF.md` v1.4
- `docs/CONTENT.md` v1.0 (nuevo)
- `docs/MIGRATION.md` v1.0 (nuevo)

Próximo paso concreto:
- Miguel descarga los 5 archivos del Project, los copia a `docs/` en el repo local `C:\dev\pixel-lens-craft`.
- Commit único: `docs: close Phase 1 with content + migration, pivot scope (D29-D32)`.
- Push a `origin/redesign/v2-framer-base`.
- Sync al Project claude.ai (knowledge actualizado).
- Validación humana del Gate G1.
- Apertura de sesión nueva en claude.ai Project para diseñar brief O.D.A. de Fase 2 (Antigravity Sonnet 4.6: depcheck, limpieza huérfanos, creación scripts/with_server.py).

---

## Decisions log

| # | Fecha | Decisión | Razón | Revisable |
|---|---|---|---|---|
| D01 | 2026-04-18 | Rebuild UI, conservar lógica | Stack actual sólido | No |
| D02 | 2026-04-18 | Orange = `--primary`, Blue = `--accent` | Flip solicitado por owner | En G3 |
| D03 | 2026-04-18 | Dark mode default, light disponible | Editorial + energía color | En G3 |
| D04 | 2026-04-18 | GSAP única librería de motion | Ya instalada, portfolio la usa | No |
| D05 | 2026-04-18 | Cloudflare Pages como host | Ya es el actual | No |
| D06 | 2026-04-18 | Sprint 1 público, Sprint 2 dashboard post-Basilea | Realismo con deadline mudanza | No |
| D07 | 2026-04-18 | Sistema docs: MASTER + PROGRESS + 4 satélites + CONTEXT_BRIEF | Evita fichero gigante | No |
| D08 | 2026-04-18 | Antigravity ejecución, Project planificación | Cada tool en su dominio | No |
| D09 | 2026-04-18 | Sonnet 4.6 default, Opus 4.6 fases críticas | Balance coste/precisión | En ejecución |
| D10 | 2026-04-18 | Branch `redesign/v2-framer-base` creada desde `dev`, no `main` | AGENT.md establece `dev` como working branch | No |
| D11 | 2026-04-18 | Typography pairing: Playfair Display H1/H2 + Inter body/UI | Resolución conflicto AGENT.md vs Inter existente | En G3 |
| D12 | 2026-04-18 | Dirección estética "Editorial Structural": Framer structural + AGENT.md editorial soul | Síntesis de ambas direcciones en vez de elegir una | En G3 |
| D13 | 2026-04-18 | Commit format `type: description` estilo AGENT.md | Consistencia con convención existente del repo | No |
| D14 | 2026-04-18 | Playwright obligatorio tras cambios en Nav/Forms/Routes | Política AGENT.md, evita regresiones | No |
| D15 | 2026-04-18 | Añadir bloque "Priority reading order for AI agents" al inicio de AGENT.md apuntando a /docs/MASTER.md, PROGRESS.md, CONTEXT_BRIEF.md y sección 1.6 del MASTER para conflictos | Evitar que agentes IA lean AGENT.md en aislamiento y apliquen directivas obsoletas sobre el rediseño | No |
| D16 | 2026-04-18 | Renombrar CLAUDE.md a docs/SECURITY_AUDIT.md | Coherencia con estructura documental (/docs/), mantener scope "auditoría seguridad puntual" claro por nombre | No |
| D17 | 2026-04-18 | Mover repo local de Dropbox a C:\dev\pixel-lens-craft vía clone fresco | Git + carpetas sincronizadas en nube son incompatibles: file locks, races, corrupción potencial de .git/ | No |
| D18 | 2026-04-18 | Descartar commit local bc910f7 vía reset --hard origin/main, preservando vía tag backup local | Commit duplicaba funcionalmente a a2b4a2c remoto con mensaje engañoso. Mejor historia limpia en remoto | No |
| D19 | 2026-04-18 | Descartar branch `redesign/cinematic-v2` (rediseño previo marzo 2026) con tag de salvaguarda `v0.1-cinematic-v2-abandoned` pusheado a origin antes de borrar | Owner confirma: rediseño previo no funcional, estética "Cinematic Architect" incompatible con "Editorial Structural" decidida para v2-framer-base. Tag preserva historia completa para rescate eventual por SHA | No |
| D20 | 2026-04-18 | Despublicar deployment Cloudflare Pages de cinematic-v2 (URL `redesign-cinematic-v2.pixel-lens-craft.pages.dev`) manualmente desde dashboard | Evitar confusión con producción, prevenir que URL pública activa muestre proyecto abandonado. Acción manual pendiente, no urgente | No |
| D21 | 2026-04-18 | Actualización de PROGRESS.md al cierre de cada fase (post-Gate), no durante fase | Evitar churn de descargas/resubidas, mantener sincronización limpia entre local, origin y knowledge del Project | En ejecución |
| D22 | 2026-04-18 | Descarte global del pack `getdesign add framer`. Extracción quirúrgica de 7 aportes técnicos neutrales (V1-V7) a MASTER §3.9 | Pack describe literalmente framer.com como sitio web. 4 conflictos irresolubles con Studio Pixelens: flip color naranja/azul (C1), Playfair vs GT Walsheim de pago (C3), filosofía product-forward vs editorial cinematográfico (C4), "no imagery" vs portfolio fotográfico (C5). Adopción global implicaría reabrir D02, D03, D11, D12 | No |
| D23 | 2026-04-18 | Rechazo explícito de pill CTAs 100px radius. Mantener `--radius: 0.5rem` default | Pills son look SaaS consumer. Desalinean con dirección Editorial Structural §1.5. MASTER §3.9 documenta rechazo razonado | En G3 si evidencia nueva |
| D24 | 2026-04-18 | No copiar `DESIGN.md` al repo (ni root ni /docs/). Aportes extraídos viven solo en MASTER §3.9 | Evitar tercer documento de instrucciones compitiendo con AGENT.md y MASTER.md. Única fuente de verdad: MASTER | No |
| D25 | 2026-04-18 | Adoptar OpenType features de Inter globalmente: cv01, cv05, cv09, cv11, ss03, ss07 | Aporte V2 puro sin coste. Refinamiento tipográfico sutil que casa con dirección editorial | No |
| D26 | 2026-04-19 | Unificar puerto dev en 5173. Modificar `vite.config.ts` en Fase 3 como parte de DT-03 | AGENT.md y scripts existentes ya asumen 5173. Default de Vite. Coste: 1 línea. Origen: Q09 tras INVENTORY §16.1 | No |
| D27 | 2026-04-19 | Portfolio es módulo distribuido sin carpeta propia. Fase 1 genera `PORTFOLIO_SPEC.md` con lista exacta de archivos preservados verbatim | INVENTORY §16.12 confirma ausencia de `src/components/portfolio/`. Entry real en `src/pages/Portfolio.tsx` con dependencias dispersas. Resolución Q10 | No |
| D28 | 2026-04-19 | Deuda técnica preexistente tratada progresivamente. Tabla en MASTER §7.4 con 14 items DT-01 a DT-14 y fase de resolución asignada | Rediseño tocará los archivos afectados. Fase dedicada de saneamiento = trabajo doble. Coste marginal de limpiar al reescribir es ~0 | No |
| D29 | 2026-04-19 | Confirmación consolidada dirección estética: dark mode default + flip naranja primary / azul accent + pairing Playfair Display H1/H2 + Inter body/UI + dirección "Editorial Structural". Cierra Q02, Q03, Q06, Q07 | Owner valida sin cambios la propuesta inicial tras revisión completa del trabajo de Fase 1. No hay evidencia que reabra D02, D03, D11, D12. Confirmación necesaria antes de Fase 3 (Design System build) | No |
| D30 | 2026-04-19 | Target del formulario de contacto: WhatsApp como canal primario via `wa.me/{VITE_WHATSAPP_NUMBER}` con mensaje pre-formateado, email `studiopixelens@gmail.com` como fallback secundario. Supabase descartado como target. Cierra Q01 y Q08 | Coherente con AGENT.md que sugiere WhatsApp. Mantiene freeze de `supabase/` durante Sprint 1. Email visible aporta opción para usuarios que prefieren canal asincrónico | No |
| D31 | 2026-04-19 | **Pivote de scope**: rediseño UI completo de `/portfolio` y `/portfolio-webs`. Supersede el non-goal "no rehacer portfolio" de §1.3 y la regla "preservación verbatim" de D01 en lo relativo a UI. Sub-decisiones: D31.1 quitar claim "+40%" TropiDenia (no verificable), D31.2 quitar tag "WordPress" BVS (incoherente con stack declarado), D31.3 descripción única por caso web (no bicolumna Problema/Solución), D31.4 Bloque B /portfolio reducido sin números | Auditoría visual durante Fase 1 mostró que la UI actual del portfolio (gradientes naranja-rojo, glow effects, FloatingElements 3D, layout SaaS) choca frontalmente con dirección Editorial Structural. Mantenerla reproducía el problema "Frankenstein" identificado al inicio. D31.1-D31.4 priorizan honestidad sobre claims comerciales no verificables | No |
| D32 | 2026-04-19 | Protocolo: validación estética por owner en chat antes de pasar brief O.D.A. crítico de UI a Antigravity. Aplicable a Fase 3 (Design System) y Fase 5 (rediseño página por página) | Cinematic-v2 abandonado (D19) demostró el coste de ejecutar UI compleja sin validación previa. Una conversación de 30 minutos en chat ahorra 4-6 horas de Antigravity rehechas. Aplica solo a UI: tareas técnicas mecánicas no requieren esta validación | En G3 si proceso rompe |

---

## Blockers actuales

| Fecha | Blocker | Dueño | ETA | Impacto si no se resuelve |
|---|---|---|---|---|
| — | Ninguno | — | — | — |

---

## Preguntas abiertas al owner

Cosas que Claude necesita para avanzar. Miguel responde antes de la fase que bloquean.

| # | Pregunta | Bloquea fase | Fecha planteada | Respuesta |
|---|---|---|---|---|
| Q01 | Target del formulario de contacto (WhatsApp per AGENT.md, email, o tabla Supabase nueva) | 5.4 | 2026-04-18 | **Resuelta 2026-04-19** → D30 (WhatsApp `wa.me/{VITE_WHATSAPP_NUMBER}` primario + email `studiopixelens@gmail.com` fallback) |
| Q02 | Confirmar dark mode como default | 3 | 2026-04-18 | **Resuelta 2026-04-19** → D29 (confirmado) |
| Q03 | Confirmar flip orange→primary, blue→accent | 3 | 2026-04-18 | **Resuelta 2026-04-19** → D29 (confirmado) |
| Q04 | ¿About actual existe con copy propio, o redactar desde cero? | 5.3 | 2026-04-18 | **Resuelta 2026-04-19** → CONTENT.md §3.6 (redactado nuevo, fusiona About + WhyUs en `home.about.*` con trust signals integrados) |
| Q05 | ¿Banner de cookies existente en el repo? | 5 legal | 2026-04-18 | Pendiente (auditar en Fase 2) |
| Q06 | Confirmar pairing tipográfico Playfair + Inter, o preferencia distinta | 3 | 2026-04-18 | **Resuelta 2026-04-19** → D29 (confirmado) |
| Q07 | Confirmar "Editorial Structural" como dirección estética, o pivot a Framer puro / editorial puro | 3 | 2026-04-18 | **Resuelta 2026-04-19** → D29 (confirmado) |
| Q08 | Formato WhatsApp en Contact (AGENT.md lo sugiere como target) | 5.4 | 2026-04-18 | **Resuelta 2026-04-19** → D30 (`wa.me/{VITE_WHATSAPP_NUMBER}` con mensaje prefilled `common.whatsapp.prefilledMessage`) |
| Q09 | Puerto dev 8080 vs 5173 | 0 → 3 | 2026-04-19 | **Resuelta** → D26 (5173 estándar) |
| Q10 | `src/components/portfolio/` no existe como carpeta | 1 | 2026-04-19 | **Resuelta** → D27 (módulo distribuido, ahora reorganizado en subdirectorios temáticos por D31) |

---

## Metrics log

| Métrica | Target | Último valor | Fecha medición |
|---|---|---|---|
| Lighthouse Performance mobile | ≥92 | — | — |
| Lighthouse SEO | ≥95 | — | — |
| Lighthouse Accessibility | ≥95 | — | — |
| Lighthouse Best Practices | ≥95 | — | — |
| Bundle size gzip ruta promedio | <250 KB | — | — |
| LCP mobile 4G | <2.5s techo, <2.0s objetivo | — | — |
| CLS | <0.1 | — | — |
| INP | <200 ms | — | — |
| Horas acumuladas proyecto | — | 17 | 2026-04-19 |

---

## Post-launch checklist

- [ ] Redirects 301 configurados
- [ ] Google Search Console: sitemap enviado
- [ ] Google Search Console: change of address si aplica
- [ ] Bing Webmaster Tools: sitemap enviado
- [ ] Analytics instalado (si aplica)
- [ ] Monitoring 48h post-launch: sin caídas, sin errores 5xx, sin drop de ranking
- [ ] Tag git `v2.0-redesign-live` aplicado
- [ ] Playwright suite completa pasa en preview antes de cambiar DNS
- [ ] Schema.org validado en rich-results test (Home, Contact, Portfolio)
- [ ] Renombrar o borrar carpeta `C:\Users\migue\Dropbox\...\pixel-lens-craft` (copia Dropbox obsoleta) tras confirmar que nada del rediseño depende de ella
- [ ] Despublicar deployment Cloudflare Pages de branch `redesign/cinematic-v2` (URL `redesign-cinematic-v2.pixel-lens-craft.pages.dev`) desde dashboard Cloudflare

---

## Change log

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-18 | Miguel + Claude Opus 4.7 | Documento inicial |
| 1.1 | 2026-04-18 | Miguel + Claude Opus 4.7 | Sesión 18-abril tarde añadida. D10-D14 incorporadas. Q06-Q08 añadidas. Metrics ajustadas a targets AGENT.md. Post-launch ampliado con Playwright y schema validation. |
| 1.2 | 2026-04-18 | Miguel + Claude Opus 4.7 | Sesión Bloque A housekeeping añadida. D15-D18 incorporadas (puntero AGENT.md, rename CLAUDE.md, mudanza fuera de Dropbox, descarte bc910f7). Phase tracker actualizado con referencias a commits `a2b4a2c`, `ebfe87b`, `abe5b99` y tag `v1.0-pre-redesign`. Post-launch ampliado con limpieza de copia Dropbox y branch residual. Horas acumuladas a 5.5. |
| 1.3 | 2026-04-18 | Miguel + Claude Opus 4.7 | Cierre oficial Bloque A. D19 (descarte cinematic-v2 con tag salvaguarda), D20 (despublicar Cloudflare Pages), D21 (protocolo actualización PROGRESS.md por gate). Phase tracker: Pre-arranque ✅ completa, Fase 0 siguiente. Commit `f37e5ed` de docs canónicos registrado. Tag `v0.1-cinematic-v2-abandoned` añadido. Sesión noche ampliada con descubrimiento, auditoría y descarte de rediseño previo. Post-launch actualizado con despublicación Cloudflare. Branch residual `git-checkout--b-redesign/v2-framer-base` retirada del post-launch (ya ejecutada). Horas acumuladas a 7. |
| 1.4 | 2026-04-18 | Miguel + Claude Opus 4.7 | Intermedio opcional cerrado: evaluación pack `getdesign/framer`. Sesión noche-2 añadida con contexto, ejecución en sandbox, análisis de conflictos, decisión final. D22 (descarte global del pack), D23 (rechazo pills 100px), D24 (no copiar DESIGN.md al repo), D25 (OpenType Inter global). Current status actualizado con cierre de intermedio. Horas acumuladas a 8. MASTER.md v1.2 referenciado como commit anterior a este sync. |
| 1.5 | 2026-04-19 | Miguel + Claude Opus 4.7 | Cierre Fase 0. Sesión 2026-04-19 añadida con ejecución Antigravity (Sonnet 4.6), validación G0, hallazgos INVENTORY §16 (21 items). Phase tracker Fase 0 ✅ con commit `902b906` y 770 líneas. D26 (puerto 5173), D27 (portfolio distribuido), D28 (deuda técnica progresiva con 14 items DT en MASTER §7.4). Q09 y Q10 resueltas. Horas acumuladas a 11. Nota operativa archivada sobre Co-Authored-By en Antigravity. |
| 1.6 | 2026-04-19 | Miguel + Claude Opus 4.7 | Cierre Fase 1 (Sistema documental). Sesión 2026-04-19 (tarde) añadida: auditoría visual UI actual, diseño conceptual Home (8 bloques), /portfolio (4 bloques), /portfolio-webs (4 bloques), validación owner Niveles 1-3, audit de honestidad (claims inventados detectados y corregidos), 4 micro-decisiones D31.1-D31.4. Pivote D31 (rediseño UI completo portfolios). Outputs: CONTENT.md v1.0 (45 KB), MIGRATION.md v1.0 (23 KB). Phase tracker Fase 1 ✅. D29 (consolidación dirección estética), D30 (WhatsApp + email fallback), D31 (pivote scope), D32 (validación estética pre-Antigravity). Q01-Q04, Q06-Q08 resueltas. DT-15 añadido (huérfanas i18n). Horas acumuladas a 17. |
