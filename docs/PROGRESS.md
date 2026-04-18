# PROGRESS.md — Track record Studio Pixelens Redesign v2

> **Single source of truth del estado del proyecto.**
> Se actualiza desde dos fuentes:
> - Claude Code en Antigravity (ejecución técnica, commits, archivos modificados)
> - Claude Opus en claude.ai Project (decisiones estratégicas, análisis, bloqueos)
>
> No borrar entradas antiguas. Solo añadir.

---

## Current status

- **Fase actual:** Pre-arranque
- **Siguiente fase:** Fase 0 (Inventario)
- **Próximo gate:** G0
- **Siguiente acción inmediata:** completar Bloque A (copiar docs canónicos a `docs/` en branch `redesign/v2-framer-base`, commit, push) y preparar brief O.D.A. para Fase 0
- **Última actualización:** 2026-04-18 por Miguel + Claude Opus 4.7 (Bloque A housekeeping ejecutado)

---

## Phase tracker

| Fase | Nombre | Estado | Gate | Fecha inicio | Fecha cierre | Horas reales | Notas |
|---|---|---|---|---|---|---|---|
| Pre | Pre-arranque | 🟡 En curso | — | 2026-04-18 | — | — | Bloque A housekeeping parcial. Branch `redesign/v2-framer-base` creada. Tag `v1.0-pre-redesign` en `abe5b99`. |
| 0 | Inventario | ⬜ Pendiente | G0 | — | — | — | Brief O.D.A. por diseñar |
| 1 | Sistema documental | ⬜ Pendiente | G1 | — | — | — | — |
| 2 | Auditoría técnica | ⬜ Pendiente | G2 | — | — | — | — |
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

### 2026-04-18 (noche) — Bloque A housekeeping

**Canal:** claude.ai chat (Opus 4.7) + PowerShell local (Miguel)
**Duración:** ~1.5h

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

Creación de branch de rediseño:
- `git checkout -b redesign/v2-framer-base` desde `dev` actualizada.
- Branch actual: `redesign/v2-framer-base`. Pendiente: copiar docs canónicos a `docs/`, commit, push inicial.

Hallazgos documentados:
- Commit `bc910f7` nunca se subió a origin (descartado en reset local). Tag `backup/bc910f7-pre-reset` solo existe en copia Dropbox ahora obsoleta, aceptable porque contenido ya está en `a2b4a2c`.
- Mensaje del commit remoto `a2b4a2c` es honesto y describe correctamente el cambio. Mensaje del descartado `bc910f7` era engañoso (hablaba de rename que nunca hizo). Cicatriz evitada.
- Rename real de `CLAUDE.md` a `docs/SECURITY_AUDIT.md` sí ejecutado ahora en `ebfe87b`, con mensaje honesto.
- Copia Dropbox pendiente de renombrar a `pixel-lens-craft-DEPRECATED-NO-USAR` como backup de seguridad. Borrado recomendado tras 2 semanas sin incidencias.

Outputs:
- `main` en `abe5b99` con tag `v1.0-pre-redesign`, sincronizada con `origin/main`.
- `dev` en `abe5b99`, sincronizada con `origin/dev`.
- Branch `redesign/v2-framer-base` creada desde `dev`, aún sin commits propios.
- Repo operativo en `C:\dev\pixel-lens-craft`, fuera de Dropbox.

Próximo paso concreto:
- Copiar `MASTER.md`, `PROGRESS.md`, `CONTEXT_BRIEF.md` desde el knowledge del Project a `docs/` en branch `redesign/v2-framer-base`.
- Commit `docs: add MASTER, PROGRESS and CONTEXT_BRIEF v1.1 as canonical project documentation`.
- Push inicial de `redesign/v2-framer-base` a origin.
- Limpieza de branch residual `git-checkout--b-redesign/v2-framer-base`.
- Cierre de Bloque A. Arranque de Fase 0 con brief O.D.A. para Claude Code.

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
| Q01 | Target del formulario de contacto (WhatsApp per AGENT.md, email, o tabla Supabase nueva) | 5.4 | 2026-04-18 | Pendiente |
| Q02 | Confirmar dark mode como default | 3 | 2026-04-18 | Pendiente |
| Q03 | Confirmar flip orange→primary, blue→accent | 3 | 2026-04-18 | Pendiente |
| Q04 | ¿About actual existe con copy propio, o redactar desde cero? | 5.3 | 2026-04-18 | Pendiente |
| Q05 | ¿Banner de cookies existente en el repo? | 5 legal | 2026-04-18 | Pendiente (auditar en Fase 2) |
| Q06 | Confirmar pairing tipográfico Playfair + Inter, o preferencia distinta | 3 | 2026-04-18 | Pendiente |
| Q07 | Confirmar "Editorial Structural" como dirección estética, o pivot a Framer puro / editorial puro | 3 | 2026-04-18 | Pendiente |
| Q08 | Formato WhatsApp en Contact (AGENT.md lo sugiere como target) | 5.4 | 2026-04-18 | Pendiente |

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
| Horas acumuladas proyecto | — | 5.5 | 2026-04-18 |

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
- [ ] Borrar branch residual `git-checkout--b-redesign/v2-framer-base` en origin tras cierre de Bloque A

---

## Change log

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-18 | Miguel + Claude Opus 4.7 | Documento inicial |
| 1.1 | 2026-04-18 | Miguel + Claude Opus 4.7 | Sesión 18-abril tarde añadida. D10-D14 incorporadas. Q06-Q08 añadidas. Metrics ajustadas a targets AGENT.md. Post-launch ampliado con Playwright y schema validation. |
| 1.2 | 2026-04-18 | Miguel + Claude Opus 4.7 | Sesión Bloque A housekeeping añadida. D15-D18 incorporadas (puntero AGENT.md, rename CLAUDE.md, mudanza fuera de Dropbox, descarte bc910f7). Phase tracker actualizado con referencias a commits `a2b4a2c`, `ebfe87b`, `abe5b99` y tag `v1.0-pre-redesign`. Post-launch ampliado con limpieza de copia Dropbox y branch residual. Horas acumuladas a 5.5. |
