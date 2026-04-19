# CONTEXT_BRIEF.md — Studio Pixelens Redesign

> **Para qué sirve este archivo:**
> Al abrir un chat nuevo en el Project "Studio Pixelens Redesign", este documento garantiza que la IA arranque con el mismo nivel de contexto estratégico que el chat original donde se diseñó el proyecto. No es la especificación (esa es MASTER.md). No es el estado (ese es PROGRESS.md). Es el **por qué** detrás de todo.

---

## 1. Por qué existe este proyecto

### 1.1 Estado de partida

Miguel lanzó studiopixelens.com con un stack técnico sólido (Vite + React + TypeScript + shadcn + Supabase + GSAP) pero una UI que él mismo describe como "proyecto Frankenstein pegando páginas con animaciones sin sentido que marean al usuario". La web funciona, tiene portfolio con efectos GSAP complejos, tiene un backend SaaS completo para edición fotográfica por paquetes, pero la capa visual no está a la altura del servicio que vende.

### 1.2 Misión del rediseño

Aplicar disciplina estructural y motion-first (principios de Framer) **combinado con** alma editorial/luxury (personalidad fotográfica y cinematográfica según AGENT.md del repo), sobre la identidad cromática existente (naranja + azul). Preservar lo que funciona: backend, portfolio, SEO, i18n, infraestructura de seguridad.

### 1.3 Naturaleza dual del producto

Studio Pixelens **no es una web de marketing**. Es una **plataforma SaaS con marketing site alrededor**. El backend Supabase incluye:
- Autenticación de usuarios
- 5 paquetes de pricing escalonado (0-60€, 1-50 fotos)
- Sistema de órdenes y pagos
- Upload de fotos originales
- Workflow de edición (uploaded → free_sample → in_editing → edited → delivered → re_edit_requested)
- Sistema de re-ediciones con máximo 3 por foto, protegido contra race conditions
- Storage segregado por usuario
- AuthContext, hooks de seguridad, utilidades de sanitización

Este descubrimiento obligó a dividir en dos sprints.

### 1.4 Archivos de instrucciones preexistentes en el repo

Al iniciar el proyecto Miguel tenía dos archivos `.md` preexistentes en el repo, añadidos en iteraciones previas:

- **`AGENT.md`** (raíz): instrucciones permanentes para cualquier agente IA trabajando sobre el repo. Define tono de marca, filosofía de diseño (luxury/editorial), anti-patrones prohibidos, convenciones de commit, infraestructura de testing Playwright, reglas SEO específicas. **Lo lee Claude Code automáticamente en Antigravity.**
- **`CLAUDE.md`** (raíz): scoped a auditoría de seguridad puntual. Define el rol de "Auditor de Seguridad Senior" con foco en Supabase RLS, tokens JWT, inyección, XSS. **No guía el rediseño general**, solo se consulta si se pide auditoría específica.

El descubrimiento de estos archivos durante la sesión del 18-abril generó 5 conflictos con MASTER.md v1.0, que fueron resueltos en v1.1. Los más relevantes:
- Tipografía: AGENT.md prohibía Inter, v1.0 la adoptaba. Resuelto con pairing Playfair + Inter.
- Dirección estética: AGENT.md pedía luxury/editorial, v1.0 era Framer bold. Resuelto con "Editorial Structural".
- Branch base: AGENT.md fija `dev` como working branch. v1.0 usaba `main`. Resuelto.

**Lección operativa:** antes de empezar trabajo en repos con historial de IA, pedir siempre `AGENT.md`, `CLAUDE.md`, `.cursor/rules`, `.github/copilot-instructions.md` y similares. Son priors que Claude Code cargará sí o sí.

---

## 2. Carácter de la relación Miguel ↔ Claude

### 2.1 Tono obligatorio

- Crítico-constructivo, directo, sin validación vacía.
- Respeto al tiempo del owner: precisión > cortesía.
- Challenge a las asunciones siempre que haya motivo.
- No endulzar malas noticias. Sí proponer mitigación.

### 2.2 Formato obligatorio

- Resumen al inicio (conclusión primero).
- Detalle estructurado en el cuerpo.
- Bloque final: Riesgos + Siguientes pasos.
- **Prohibido** el em-dash. Sustituir por punto o coma.
- Idioma espejo del usuario.

### 2.3 Rol de Claude en el proyecto

- En **claude.ai Project**: planificación, análisis, revisión, diseño de briefs O.D.A., redacción de docs, decisiones estratégicas.
- En **Antigravity con Claude Code extension**: ejecución, lectura de código, refactor, commits.

Nunca se cruzan responsabilidades.

### 2.4 Rol de Miguel

Owner del proyecto. Decisor final. Ejecutor manual de commits y deploys cuando corresponde. Valida cada Quality Gate antes de avanzar.

---

## 3. Decisiones clave con su razonamiento

Estas decisiones ya están cerradas. **No reabrir** salvo evidencia nueva.

### 3.1 Stack: mantener íntegro

Se consideró migrar a Next.js o añadir Framer Motion. Se descartó porque:
- El stack actual es profesional y maduro.
- Migrar framework añade 15-20 horas sin beneficio.
- GSAP alimenta el portfolio. Introducir otra librería de motion duplica.

### 3.2 Flip de roles de color: orange = primary, blue = accent

Estado actual CSS: blue `--primary`, orange `--cta`. Decisión: **invertir**. Razón:
- Miguel quiere el naranja como energía y llamada.
- Azul mantiene rol de confianza técnica pero como apoyo.
- Framer usa un solo color de acento muy presente. Aquí lo juega el naranja.

Revisable en G3.

### 3.3 Dark mode como default

Actual light. Cambio a dark default:
- Alinea con dirección "Editorial Structural" (fondos oscuros con warm accents).
- Hace vibrar el naranja.
- Light mode disponible via `next-themes`.

Revisable en G3.

### 3.4 Scope dividido en dos sprints

Tras descubrir alcance real del backend SaaS, se dividió:
- **Sprint 1 (deadline May 15):** capa pública.
- **Sprint 2 (post-Basilea, desde Jun 15):** dashboard autenticado.

Razón: Miguel se muda a Basilea el 1 de junio.

### 3.5 Portfolio lift-and-shift, no rebuild

Opciones analizadas:
- Lift-and-shift. **Elegida.**
- Rehacer con Framer Motion. Descartada: 10-15 h extra sin beneficio.
- Iframe embebido. Descartada: SEO y UX negativos.

### 3.6 Host Cloudflare Pages

Miguel ya usa Cloudflare. Sin motivo para migrar.

### 3.7 Dirección estética "Editorial Structural"

Síntesis entre dos fuerzas:
- **Framer structural discipline:** layout, motion, tipografía grande, whitespace, jerarquía.
- **AGENT.md editorial soul:** personalidad fotográfica, cinematográfica, tratamiento premium de imagen.

Ejecución:
- Playfair Display en H1/H2 (editorial).
- Inter en body/UI (clean).
- Dark mode default.
- Orange primary + Blue accent.
- Composición asimétrica en hero y about.
- Full-bleed con overlays cinematográficos en portfolio.
- Prohibido patrón "3 cols icono+texto" y hero SaaS centrado genérico.

### 3.8 Pairing tipográfico Playfair + Inter

Resolución del conflicto AGENT.md (NEVER Inter) vs Inter preexistente:
- Playfair Display (recomendada por AGENT.md) en H1 y H2 (elementos visuales de mayor impacto).
- Inter (ya cargada, performante, buena para UI) en el resto.

Coste: segunda fuente Google Fonts. Beneficio: honra ambas direcciones.

### 3.9 Branch desde `dev`, no `main`

AGENT.md fija `dev` como working branch del repo. La branch `redesign/v2-framer-base` se crea desde `dev`. Merge final: rebuild → dev → main.

### 3.10 Commits estilo AGENT.md

Formato: `type: description` con tipos `feat`, `fix`, `chore`, `style`, `refactor`, `docs`.

### 3.11 Tests Playwright obligatorios

En cambios que afectan navegación, formularios o rutas. Infraestructura ya existe en `scripts/`. Puerto dev 5173.

### 3.12 Modelo y tool por fase

| Fase | Tool | Modelo | Razón |
|---|---|---|---|
| 0 Inventario | Antigravity | Sonnet 4.6 | Tarea mecánica |
| 1 Docs complementarios | Chat Project | Opus 4.7 | Razonamiento estratégico |
| 2A, 2C | Antigravity | Sonnet 4.6 | Extracción |
| 2B Migration | Antigravity | Opus 4.6 | Clasificación requiere criterio |
| 3 Design System | Antigravity | Opus 4.6 | Crítico, toca tokens globales |
| 4 Rutas | Antigravity | Sonnet 4.6 | Mecánica |
| 5.1-5.4 Páginas | Antigravity | Sonnet 4.6 | Estándar |
| 5.5 Portfolio lift | Antigravity | Opus 4.6 | Delicado, sin margen de error |
| 6 Motion | Antigravity | Sonnet 4.6 | Estándar |
| 7 SEO/perf | Antigravity | Opus 4.6 + Sonnet | Decisiones + ejecución |

---

## 4. Constraints personales relevantes del owner

- **Timezone:** Europe/Madrid.
- **Deadline hard:** 31 mayo 2026. Mudanza a Basilea el 1 de junio.
- **Deadline objetivo:** 15 mayo 2026.
- **Disponibilidad semanal estimada:** 6-10 horas útiles.
- **Paralelo:** Máster ENEB en curso con entregables.
- **Suscripción Claude:** Pro 20 €/mes, ventana 5h.
- **Antigravity:** extensión Claude Code instalada.
- **Hosting:** Cloudflare Pages. Repo en GitHub Pro.
- **Preferencia estratégica:** "Learning by doing" pragmático.

---

## 5. Preguntas abiertas al owner

Sincronizadas con PROGRESS.md sección "Preguntas abiertas".

| # | Pregunta | Bloquea | Estado |
|---|---|---|---|
| Q01 | Target del formulario de contacto | Fase 5.4 | Pendiente |
| Q02 | Confirmar dark mode default | Fase 3 | Pendiente |
| Q03 | Confirmar flip orange→primary | Fase 3 | Pendiente |
| Q04 | About actual o redactar desde cero | Fase 5.3 | Pendiente |
| Q05 | Banner de cookies en el repo actual | Fase 5 legal | Pendiente |
| Q06 | Confirmar pairing Playfair + Inter | Fase 3 | Pendiente |
| Q07 | Confirmar "Editorial Structural" | Fase 3 | Pendiente |
| Q08 | Formato WhatsApp en Contact | Fase 5.4 | Pendiente |

---

## 6. Protocolo de sesión

### 6.1 Apertura de un chat nuevo en el Project

Primer mensaje:

**A (sesión estratégica):**
> "Abrimos sesión estratégica sobre [tema]. Lee MASTER.md y CONTEXT_BRIEF.md del Project. Adjunto PROGRESS.md actual del repo."

**B (planificación ejecución):**
> "Voy a ejecutar Fase X en Antigravity. Valida PROGRESS.md y dame el brief O.D.A. adaptado."

**C (review post-ejecución):**
> "Acabo de ejecutar Fase X. Aquí output. Review y genera diff para PROGRESS.md."

### 6.2 Cierre de sesión

> "Cierra sesión. Genera diff de PROGRESS.md con lo tratado."

Claude genera bloque listo para pegar. Miguel commitea.

### 6.3 Coordinación chat ↔ Antigravity

- Briefs O.D.A. se diseñan en el chat.
- Antigravity ejecuta sin reinterpretar.
- Antigravity actualiza PROGRESS.md (sección técnica) y commitea.
- Miguel resume output al chat. Claude diseña siguiente brief.

### 6.4 Convivencia con AGENT.md

Cuando Claude Code abre el repo en Antigravity, lee AGENT.md antes que nada. Las reglas de AGENT.md son operativas y se aplican. Donde AGENT.md y MASTER.md difieran, la sección 1.6 del MASTER fija resoluciones. Si emerge un conflicto nuevo no listado, Claude Code debe parar y escalar a Miguel.

---

## 7. Riesgos conocidos a vigilar

1. **Scope creep.** Tentación de meter dashboard Sprint 2 en Sprint 1. Rechazar sin discusión.
2. **Pérdida de SEO.** Launch sin 301 redirects y Search Console bien configurado = caída ranking.
3. **Cuota Pro agotada.** Sesiones largas pueden topar límite 5h.
4. **Portfolio con dependencias tóxicas.** Lift-and-shift puede exponer conflictos. Escalar a Miguel, no resolver solo.
5. **i18n desincronizado.** Rehacer sin respetar claves rompe versión EN.
6. **Supabase schema cambia.** Congelar `supabase/` durante Sprint 1.
7. **AGENT.md contradiciendo MASTER.md.** Si emerge un conflicto no previsto en sección 1.6, Claude Code puede actuar contra criterio. Mitigación: revisar sección 1.6 ante cualquier comportamiento inesperado.
8. **Zero `any` no se respeta.** Si se cuela un `any` en código nuevo, la auditoría de seguridad Sprint 2 falla. Revisar en cada PR.
9. **Herramientas CLI prescriptivas sin jerarquía clara.** CLIs tipo `getdesign`, `shadcn` o equivalentes pueden generar archivos de instrucciones (.md prescriptivos) que competirían con AGENT.md y MASTER.md §3 por ser fuente de verdad de diseño para coding agents. Mitigación: antes de correr cualquier CLI de este tipo, verificar si genera archivos prescriptivos o aditivos. Si prescriptivos, pasar por evaluación (como se hizo con getdesign/framer en sesión 18-abril noche-2) antes de copiar nada al repo. Decisión D24 formaliza: ningún documento de diseño entra al repo fuera de MASTER §3 y sus anexos controlados.

---

## 8. Qué NO es este documento

- **MASTER.md** = qué hay que hacer y cómo debe quedar.
- **PROGRESS.md** = dónde estamos, qué hicimos, qué falta.
- **CONTEXT_BRIEF.md** (este) = de dónde venimos y cómo trabajamos.
- **AGENT.md** = instrucciones permanentes para cualquier agente IA en el repo (no lo editamos nosotros).
- **CLAUDE.md** = contexto auditoría seguridad puntual.
- **INVENTORY.md, CONTENT.md, MIGRATION.md, PORTFOLIO_SPEC.md** = material de trabajo generado en Fases 0-2.

---

## 9. Change log

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-18 | Miguel + Claude Opus 4.7 | Documento inicial para mudanza a Project |
| 1.1 | 2026-04-18 | Miguel + Claude Opus 4.7 | Sección 1.4 (AGENT.md y CLAUDE.md como priors). Sección 3.7 refinada a Editorial Structural. Añadidas 3.8-3.11 (pairing tipográfico, branch `dev`, commits, Playwright). 6.4 coexistencia con AGENT.md. Riesgo 7-8 añadidos. |
| 1.2 | 2026-04-18 | Miguel + Claude Opus 4.7 | Riesgo 9 añadido sobre herramientas CLI prescriptivas. Contexto: evaluación y descarte global de `getdesign/framer` en sesión noche-2 del 18-abril (ver MASTER §3.9 y PROGRESS D22-D25). |
