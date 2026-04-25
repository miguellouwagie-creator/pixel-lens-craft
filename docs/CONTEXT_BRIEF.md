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

En cambios que afectan navegación, formularios o rutas. Puerto dev 5173 (a unificar en Fase 3 per D26 y DT-03; actualmente `vite.config.ts` usa 8080). Infraestructura `scripts/with_server.py` pendiente de crear antes de Fase 6 (DT-04).

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

### 3.13 Hallazgos post-Fase 0 y reconciliación con la realidad del repo

Fase 0 (ejecutada 2026-04-19, commit `902b906`, INVENTORY.md 770 líneas) reveló que MASTER.md v1.2 idealizaba estructuras que no existen en el repo. Decisiones D26-D28 formalizan la reconciliación:

- **D26 (puerto dev)**: unificación en 5173. `vite.config.ts` actual usa 8080. Corrección de 1 línea en Fase 3 como parte de DT-03.
- **D27 (portfolio distribuido)**: `src/components/portfolio/` no existe. El módulo vive en `src/pages/Portfolio.tsx` + N componentes dispersos. Fase 1 genera `PORTFOLIO_SPEC.md` con lista exacta.
- **D28 (deuda técnica progresiva)**: 14 items identificados (DT-01 a DT-14) en MASTER §7.4. Se resuelven al reescribir cada archivo durante rediseño. No fase dedicada de saneamiento.

**Implicación operativa para agentes IA:** MASTER v1.3 §5.2 es ahora descriptiva del repo real, no aspiracional. Si un agente detecta una divergencia entre la descripción y el repo, la verificación con el repo gana (MASTER §1.6 ya cubre resolución de conflictos AGENT.md/MASTER.md, añadir aquí que la realidad del código gana sobre idealizaciones documentales).

### 3.14 Nota operativa para sesiones en Antigravity

Archivada tras Fase 0:
- **Co-Authored-By en commits**: Claude Code tiende a añadirlo automáticamente. AGENT.md no lo contempla. Forzar mensaje exacto del brief sin firma de coautoría de modelos IA.
- **Aprobación de comandos**: usar siempre "1 Yes" puntual, nunca "allow for project". La fricción de aprobar 30-50 comandos en una fase de inventario es aceptable. La alternativa es perder control sobre escrituras.
- **Cuota Pro**: Fase 0 consumió ~94% de una ventana de 5h. Fases posteriores pueden requerir más de una ventana. Planificar puntos de pausa con commit parcial.

### 3.15 Hallazgos Fase 1 y pivote de scope (D31, D32)

Cierre 2026-04-19. Tres lecciones operativas de la sesión Fase 1:

**Pivote D31: rediseño UI completo de portfolios.**
- La regla original "preservación verbatim del portfolio" (D01 + §1.3 non-goal) asumía que la UI actual era aceptable. La auditoría visual durante Fase 1 mostró lo contrario: gradientes naranja-rojo, glow effects, FloatingElements 3D, layout SaaS 2019-2021. Inconsistente con la dirección "Editorial Structural" del resto del rediseño.
- Decisión: rediseño UI completo de `/portfolio` y `/portfolio-webs`. Se preserva solo lógica reutilizable (módulos técnicos en `src/integrations/`, `src/lib/`, `src/contexts/`, `src/hooks/`). Ver MASTER §6.3 v1.4 y MIGRATION.md.
- Coste: ~9h adicionales de Antigravity en Fase 5.5. Beneficio: coherencia editorial completa.
- **Lección operativa para futuros proyectos**: la "preservación verbatim" como decisión de scope debe revisarse después de auditoría visual del módulo a preservar, no antes. Una decisión de preservación basada solo en stack técnico ("funciona, no migrar") puede chocar con la dirección estética cuando emerge.

**Honestidad de copy: anti-patrón de claims comerciales no verificables.**
- Durante Fase 1 emergieron varios claims pre-existentes en el copy actual sin sustento verificable: `+40% más ingresos` en TropiDenia, `+200 empresas impulsadas`, tag `WordPress` en BVS contradiciendo el discurso React-only.
- Decisión D31.1-D31.4 + CONTENT.md §7 anti-patrón #4: no se incluyen métricas ni claims sin captura, contrato o fuente pública. Sustantivo > adjetivo. Hechos > superlativos.
- **Lección operativa**: cuando el rediseño copia el copy del existente, el rediseño hereda los problemas del existente. Auditar copy antiguo con la misma severidad que código antiguo.

**Protocolo D32: validación estética pre-Antigravity.**
- El rediseño abandonado `redesign/cinematic-v2` (D19) costó tiempo porque ejecutó UI sin validación previa. Estética "Cinematic Architect" no encajaba con el resto del proyecto, descubierta solo tras 20 commits.
- Decisión D32: cualquier brief O.D.A. crítico de UI requiere visto bueno conceptual de Miguel en chat antes de ejecutar en Antigravity. Bloques completos validados verbalmente antes de pasar a código.
- Aplicable a Fase 3 (Design System) y Fase 5 (rediseño página por página). No aplica a tareas técnicas mecánicas (depcheck, config, scripts).
- Coste: ~30 min de chat por subfase. Beneficio: evitar 4-6h de Antigravity rehechas.

### 3.16 Eliminación de deadline duro

El 19-abril-2026 owner declara explícitamente que el proyecto pasa a régimen de aprendizaje sin deadline duro.

- Fechas anteriores eliminadas: ya no aplica May 15 (interno) ni May 31 (mudanza Basilea).
- Ritmo dictado por: ventanas de cuota Pro 5h, validación humana entre fases, respeto a tiempo paralelo del owner.
- Implicación para sesiones futuras: Claude no presiona por velocidad. Claude prioriza calidad de output, validación de owner, y aprendizaje técnico explícito cuando aplique.

---

## 4. Constraints personales relevantes del owner

- **Timezone:** Europe/Madrid.
- **Deadline:** sin deadline duro (revisado 2026-04-19, sección 3.16). Proyecto orientado a aprendizaje pragmático.
- **Mudanza:** Miguel se muda a Basilea el 1 de junio. La mudanza no es deadline del proyecto, pero sí condiciona ritmo (semanas previas con menor disponibilidad).
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
10. **Divergencia silenciosa entre MASTER y realidad del repo.** Fase 0 demostró que MASTER v1.2 idealizaba estructuras ausentes (scripts/, portfolio/, layout/, sections/, lib/motion.ts, lib/supabase.ts, types/) y documentaba env vars que no coinciden con el código. Riesgo: si agentes IA ejecutan briefs basados en MASTER sin cross-checkear con el repo, tomarán decisiones sobre ficciones. Mitigación: 1) MASTER v1.3 §5.2 ahora es descriptiva del repo real + tabla de divergencias. 2) Fases futuras que creen archivos nuevos (scripts/, PORTFOLIO_SPEC.md) deben actualizar MASTER §5.2 en el mismo commit. 3) Regla operativa añadida: cuando realidad del código y descripción documental difieran, la realidad gana y dispara actualización del documento.
11. **Validación humana como cuello de botella en proceso D32.** El protocolo D32 (validación estética en chat antes de Antigravity) introduce un paso síncrono que depende de la disponibilidad de Miguel. Si una sesión arranca sin validación previa pendiente cerrada, el trabajo se paraliza. Mitigación: 1) cada cierre de sesión deja explícitamente lo siguiente que requiere validación, en lenguaje claro y con preguntas concretas. 2) Si una decisión estética no es crítica (ej. radius de un componente secundario), Claude puede ejecutar con criterio propio y marcar para revisión post-hoc, no bloquear. 3) D32 aplica a UI crítica (Home, portfolios, Header, Footer), no a cada decisión menor. 4) Si owner no responde en 48h y el trabajo no es crítico, Claude puede actuar con criterio archivado y abrir Q nueva si emerge duda.

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
| 1.3 | 2026-04-19 | Miguel + Claude Opus 4.7 | §3.11 actualizada (puerto real 8080, scripts/ pendiente). §3.13 nueva: hallazgos post-Fase 0 y reconciliación con repo (D26-D28). §3.14 nueva: notas operativas Antigravity (Co-Authored-By, aprobaciones, cuota). Riesgo 10 sobre divergencia MASTER vs realidad del repo. |
| 1.4 | 2026-04-19 | Miguel + Claude Opus 4.7 | Cierre Fase 1. §3.15 nueva: pivote D31 (rediseño UI completo portfolios) + lecciones operativas (preservación verbatim revisable post-auditoría visual, anti-patrón claims comerciales no verificables, protocolo D32 de validación pre-Antigravity). §3.16 nueva: eliminación de deadline duro (proyecto orientado a aprendizaje, sin May 15 ni May 31). §4 actualizada eliminando deadlines obsoletos, mantiene mudanza como factor de ritmo no como deadline. Riesgo 11 sobre validación humana D32 como cuello de botella, con mitigación de 4 puntos. |
