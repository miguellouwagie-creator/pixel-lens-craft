# MASTER.md — Studio Pixelens Redesign Specification

> **Single source of truth** del rediseño completo de studiopixelens.com.
> Todo brief O.D.A. hacia Antigravity debe partir de este documento.
> Si un brief contradice el MASTER, el MASTER gana.
>
> **Coexistencia obligatoria con otros documentos del repo:**
> - `AGENT.md`: instrucciones operativas para cualquier agente IA en el repo.
>   Vive en la raíz. Se lee SIEMPRE junto a MASTER.md.
> - `CLAUDE.md`: scoped a auditoría de seguridad puntual. No guía el rediseño.
>
> Donde MASTER.md y AGENT.md difieran, la sección 1.6 "Reconciliación con AGENT.md"
> fija la resolución aplicable.

---

## 0. Meta

| Campo | Valor |
|---|---|
| Proyecto | Studio Pixelens Redesign v2 |
| Nombre interno | Pixel Lens Craft (según CLAUDE.md) |
| Nombre público | Studio Pixelens |
| Owner | Miguel Louwagie Sapena |
| Versión | 1.4 (Apr 19, 2026) — cierre Fase 1, D29-D32, pivote scope UI completa, CONTENT.md + MIGRATION.md añadidos al sistema documental |
| Estado | Draft, pendiente de validación humana |
| Deadline interno | Sin deadline (proyecto orientado a aprendizaje, revisado D32) |
| Deadline duro | Sin deadline duro |
| Timezone base | Europe/Madrid |
| Repo branch trabajo | `redesign/v2-framer-base` (creada desde `dev`) |
| Dominio producción | studiopixelens.com |
| Dominio staging | studiopixelens-v2.pages.dev (Cloudflare Pages) |

---

## 1. Project Overview

### 1.1 Misión

Reescribir la UI completa de studiopixelens.com aplicando una síntesis entre dos direcciones complementarias: la **disciplina estructural** de Framer (motion-first, tipografía grande, jerarquía limpia, layouts impecables) y el **alma editorial/luxury** exigida por AGENT.md (personalidad fotográfica y cinematográfica, refinamiento de revista, tratamiento premium de imágenes). Todo ello preservando la identidad cromática naranja-azul de la marca y manteniendo el módulo de portfolio actual intacto.

### 1.2 Scope (dos sprints secuenciales)

**SPRINT 1 (en curso, desde Apr 18):** capa pública, rediseño UI completo (D31).
- Home, /portfolio, /portfolio-webs, Contacto integrado en Home, Legal (privacidad, cookies, términos)
- Portfolios **rediseñados** (no preservados verbatim — supersede D01 en UI).
- SEO, performance, i18n paridad
- Sin deadline duro. Ritmo dictado por ventanas de cuota Pro y validación humana.

**SPRINT 2 (posterior, sin fecha comprometida):** capa autenticada.
- Login / registro (`/auth` ya existe en el repo)
- Selección de paquetes
- Upload de fotos
- Tracking de órdenes
- Sistema de re-ediciones
- Vista de historial

### 1.3 Non-goals

- No migrar a otro framework (mantiene Vite + React + TypeScript)
- No cambiar de backend (Supabase se queda)
- ~~No rehacer GSAP ni portfolio (lift-and-shift)~~ **OBSOLETO por D31 (2026-04-19):** el portfolio ahora entra en rediseño UI completo. Se preserva la lógica reutilizable (módulos técnicos en `src/integrations/`, `src/lib/`, `src/contexts/`, `src/hooks/`), pero la UI de /portfolio y /portfolio-webs se reescribe. GSAP sigue siendo la librería de motion única.
- No añadir features nuevas. Solo rediseño UI + saneamiento técnico progresivo (§7.4).
- No cambiar URLs públicas (preservar SEO)
- No cambiar modelo de pricing ni lógica de negocio
- No migrar la librería de motion (GSAP se queda, pese a mención en AGENT.md)

### 1.4 Decisiones cerradas

1. Stack actual se mantiene íntegro.
2. Orange se convierte en `--primary`, Blue en `--accent/--secondary`. Flip completo (D02 + D29).
3. Dark mode pasa a ser el modo por defecto. Light mode sigue disponible via `next-themes` (D03 + D29).
4. ~~Portfolio es intocable. Se importa como módulo aislado con sus dependencias.~~ **OBSOLETO por D31 (2026-04-19):** /portfolio y /portfolio-webs entran en rediseño UI completo. Se preserva solo lógica reutilizable (no UI).
5. Host destino: Cloudflare Pages.
6. Ejecución en Antigravity con extensión Claude Code. Planificación en claude.ai Pro.
7. Branch de trabajo: `redesign/v2-framer-base` creada desde `dev`. Nunca desde `main`.
8. Librería de motion única: GSAP 3.13.
9. Tipografía: pairing Playfair Display (display) + Inter (body/UI). Resolución de conflicto con AGENT.md (D11 + D29).
10. **Dirección "Editorial Structural"** confirmada como estética definitiva (D29). No hay pivot a Framer puro ni a editorial puro.
11. **Contacto vía WhatsApp + email fallback** (D30). Formulario web envía a `wa.me/{VITE_WHATSAPP_NUMBER}` con mensaje pre-formateado. Email `studiopixelens@gmail.com` visible como alternativa. No se usa Supabase como target (rompe freeze Sprint 1).
12. **Validación estética por owner antes de ejecución Antigravity** (D32). Cada brief O.D.A. crítico de UI requiere visto bueno conceptual de Miguel en chat antes de pasar a Claude Code. Evita repetir el patrón cinematic-v2.

### 1.5 Dirección estética: "Editorial Structural"

El rediseño no es Framer puro ni revista editorial pura. Es una síntesis deliberada:

| Capa | Inspiración | Manifestación |
|---|---|---|
| Layout y grid | Framer | Disciplina estructural, generoso whitespace, jerarquía clara |
| Motion | Framer | Entradas orquestadas, reveals en scroll, hover intencional |
| Tipografía | AGENT.md editorial | Playfair Display en H1/H2, Inter en body |
| Color | Identidad propia | Naranja vibrante primary + azul accent sobre fondo oscuro |
| Tratamiento fotográfico | AGENT.md cinematográfico | Full-bleed, vignette sutil, overlays con gradiente |
| Composición | AGENT.md | Asimetría puntual, grid-breaking en hero, diagonal flow donde aporte |

**Anti-patrones prohibidos** (de AGENT.md, se adoptan íntegros):
- Gradiente purple/blue sobre blanco.
- Cards shadcn con `shadow-md` por defecto sin modificar.
- Hero centrado con título + subtítulo + botón verde (patrón SaaS genérico).
- Iconos Lucide sueltos sin integración en un sistema visual coherente.
- Sección "Features" con 3 columnas icono + texto.

### 1.6 Reconciliación con AGENT.md

AGENT.md vive en la raíz del repo y es leído automáticamente por Claude Code. Para evitar instrucciones contradictorias a los agentes, esta tabla fija las resoluciones:

| Tema | AGENT.md dice | MASTER.md resuelve | Justificación |
|---|---|---|---|
| Tipografía | "NEVER use Inter" | Playfair Display H1/H2 + Inter body/UI | Compromiso que honra editorial en cabeceras críticas sin sacrificar clean UI y performance |
| Motion library | "Use the Motion library" | GSAP se mantiene | GSAP está en package.json, portfolio depende. Mención de AGENT.md se interpreta como concepto |
| Branch | `dev` working, nunca `main` | Cumplido. Branch rebuild creada desde `dev` | Sin conflicto |
| Tone | Professional, elegant, bold | Adoptado literal | Sin conflicto |
| Composición | Asimétrica, grid-breaking | Adoptado | Sin conflicto |
| LCP | < 2.5s | < 2.5s techo, < 2.0s objetivo | Alineado con matiz |

Si un agente detecta conflicto adicional no listado aquí, debe parar y escalar a Miguel antes de actuar.

---

## 2. Brand Identity

### 2.1 Nombre y claim

- **Nombre público:** Studio Pixelens
- **Nombre interno repo:** Pixel Lens Craft
- **Claim hero (ES):** Transformamos la imagen digital de tu negocio
- **Claim hero (EN):** Digital identity crafted with precision
- **Descripción corta:** Agencia digital local especializada en páginas web y fotografía profesional para PYMEs de Dénia, Jávea, Ondara y la Marina Alta.

### 2.2 Tone of voice

Adoptado de AGENT.md con precisión:

- **Professional, elegant, bold.**
- Transmite **artistic confidence, not generic polish**.
- Directo, técnicamente preciso, sin jerga vacía ni marketing inflado.
- Orientado a resultados, respeta el tiempo del cliente (PYME, no puede perder horas).

### 2.3 Idiomas soportados

- Español (es_ES): idioma principal.
- Inglés (en): secundario. Paridad de contenido obligatoria.

Stack ya incluye `i18next` + `react-i18next` + carpeta `src/i18n/`. No se añaden idiomas en Sprint 1.

---

## 3. Design System

### 3.1 Color Tokens

Todos los valores en HSL (obligatorio por convención actual).

#### Light mode (`:root`)

| Token | Valor HSL | Hex aprox | Rol |
|---|---|---|---|
| `--background` | `220 20% 98%` | `#F7F8FA` | Fondo dominante 60% |
| `--foreground` | `217 19% 27%` | `#384457` | Texto principal |
| `--primary` | `20 91% 48%` | `#EA550B` | **NARANJA. CTAs, acciones primarias, energía** |
| `--primary-foreground` | `220 30% 8%` | `#0E121B` | Texto oscuro sobre naranja (D33-7) |
| `--accent` | `221 68% 33%` | `#1B3F8D` | **AZUL. Acentos, badges, iconos, tech, info** |
| `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | Texto sobre azul |
| `--secondary` | `221 68% 33%` | `#1B3F8D` | Alias de accent para compat shadcn |
| `--secondary-foreground` | `0 0% 100%` | `#FFFFFF` | |
| `--muted` | `220 14% 94%` | `#EDF0F4` | Fondos suaves |
| `--muted-foreground` | `220 9% 40%` | `#5C6470` | Texto secundario (contraste AAA) |
| `--card` | `0 0% 100%` | `#FFFFFF` | Tarjetas |
| `--card-foreground` | `217 19% 27%` | `#384457` | |
| `--border` | `220 13% 91%` | `#E2E6EC` | Bordes sutiles |
| `--input` | `220 13% 91%` | `#E2E6EC` | Inputs |
| `--ring` | `20 91% 48%` | `#EA550B` | Focus ring (naranja) |
| `--destructive` | `0 84.2% 60.2%` | `#EF4444` | Errores |
| `--destructive-foreground` | `0 0% 100%` | `#FFFFFF` | |
| `--success` | `142 45% 36%` | `#345B47` | **NUEVO (D33-1).** Verde sobrio, validaciones positivas |
| `--success-foreground` | `0 0% 100%` | `#FFFFFF` | |
| `--warning` | `45 92% 48%` | `#EFB80E` | **NUEVO (D33-1).** Ámbar hue 45, distinguible de primary hue 20 |
| `--warning-foreground` | `220 30% 8%` | `#0E121B` | Texto oscuro sobre ámbar |
| `--radius` | `0.5rem` | — | Radio base |

#### Dark mode (`.dark`, **default**)

| Token | Valor HSL | Hex aprox | Rol |
|---|---|---|---|
| `--background` | `220 30% 6%` | `#0B0F16` | Fondo oscuro editorial |
| `--foreground` | `0 0% 98%` | `#FAFAFA` | Texto principal |
| `--primary` | `20 91% 52%` | `#EE6818` | Naranja ligeramente más brillante |
| `--primary-foreground` | `220 30% 8%` | `#0E121B` | Texto oscuro sobre naranja (D33-7) |
| `--accent` | `221 68% 55%` | `#3A63C5` | Azul más claro para contraste |
| `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | |
| `--secondary` | `221 50% 20%` | `#1A2A4A` | |
| `--secondary-foreground` | `0 0% 98%` | `#FAFAFA` | |
| `--muted` | `220 20% 12%` | `#181D26` | |
| `--muted-foreground` | `220 9% 65%` | `#9DA4B0` | |
| `--card` | `220 25% 9%` | `#11161F` | |
| `--card-foreground` | `0 0% 98%` | `#FAFAFA` | |
| `--border` | `220 20% 16%` | `#212733` | |
| `--input` | `220 20% 16%` | `#212733` | |
| `--ring` | `20 91% 52%` | `#EE6818` | |
| `--destructive` | `0 62.8% 45%` | `#BA3232` | |
| `--destructive-foreground` | `0 0% 98%` | `#FAFAFA` | |
| `--success` | `142 40% 50%` | `#5DA67F` | **NUEVO (D33-1)** |
| `--success-foreground` | `220 30% 6%` | `#0B0F16` | |
| `--warning` | `45 92% 58%` | `#F4B649` | **NUEVO (D33-1)** |
| `--warning-foreground` | `220 30% 6%` | `#0B0F16` | |

> `--info` no existe como token. Se reusa `--accent` (azul) para mensajes informativos. Decisión D33-1.

#### Tabla de contraste WCAG validada (Fase 3 sub-tarea 1, dark mode)

Mediciones reales del Contrast Checker en `/styleguide` con tokens finales post-hot-fix:

| Par | Ratio | Rating | Uso recomendado |
|---|---|---|---|
| `--foreground` / `--background` | 18.52:1 | AAA | Texto principal sin restricciones |
| `--muted-foreground` / `--background` | 7.65:1 | AAA | Texto secundario sin restricciones |
| `--card-foreground` / `--card` | 17.49:1 | AAA | Texto en cards sin restricciones |
| `--primary` / `--background` | 6.00:1 | AA | Surfaces accent (CTAs, badges, icons) o large text. **NO** body text |
| `--primary-foreground` / `--primary` | 5.80:1 | AA | Texto sobre superficies naranja. Cualquier tamaño normal |
| `--accent` / `--background` | 4.17:1 | AA Large | **Solo** superficies grandes. NO texto de párrafo |
| `--accent-foreground` / `--accent` | 4.64:1 | AA | Texto sobre azul, cualquier tamaño normal |
| `--destructive-foreground` / `--destructive` | 5.77:1 | AA | Texto sobre rojo, cualquier tamaño normal |
| `--success-foreground` / `--success` | 7.34:1 | AAA | Texto sobre verde sin restricciones |
| `--warning-foreground` / `--warning` | 11.96:1 | AAA | Texto sobre ámbar sin restricciones |

#### Gradients

| Token | Definición | Uso |
|---|---|---|
| `--gradient-primary` | `linear-gradient(135deg, hsl(var(--primary)), hsl(20 91% 55%))` | CTAs premium |
| `--gradient-accent` | `linear-gradient(135deg, hsl(var(--accent)), hsl(221 68% 45%))` | Secciones tech |
| `--gradient-hero` | `radial-gradient(ellipse 50% 40% at 70% 20%, hsla(var(--accent), 0.13), transparent 70%)` | Hero principal. **Variante B confirmada en G3 parcial** (D33-2). Anchor off-center top-right, asimetría coherente con AGENT.md |

> **Nota operativa:** durante Fase 3 sub-tarea 1, `/styleguide` contiene ambas variantes A (80%×60% al 10%) y B (50%×40% al 13%) como referencia visual. La variante A se mantiene en código como `--gradient-hero` por defecto hasta que se construya el Hero en Fase 5, momento en que se aplicará la variante B definitiva. La aplicación física del cambio se difiere para evitar commits de última hora durante Fase 3.

Prohibición explícita (AGENT.md): gradientes purple/blue sobre fondo claro. Prohibido sin excepciones.

#### Shadows

| Token | Definición | Uso |
|---|---|---|
| `--shadow-soft` | `0 2px 8px hsla(var(--accent), 0.08)` | Elevación baja, hover sutil |
| `--shadow-medium` | `0 4px 16px hsla(var(--accent), 0.12)` | Cards estándar |
| `--shadow-strong` | `0 0.5px 0 0.5px hsla(0, 0%, 100%, 0.1), 0 10px 30px hsla(220, 30%, 0%, 0.25)` | Elevated cards, multi-layer con highlight superior + ambient profundo (aporte V7 de getdesign) |
| `--shadow-ring-accent` | `0 0 0 1px hsla(var(--accent), 0.15)` | Containment de cards y bordered surfaces sobre fondo oscuro (aporte V3 de getdesign) |
| `--shadow-primary-glow` | `0 0 40px hsla(var(--primary), 0.18)` | **Restringido (D33-3).** Solo CTA hero principal (uno por página) y CTA de cierre de sección final |

Reglas adicionales:
- **Nunca usar `shadow-md` de shadcn sin modificar**. Toda card debe tener shadow custom coherente.
- `--shadow-ring-accent` es la técnica canónica para delinear cards sobre fondos oscuros sin bordes sólidos. Usa el color accent (azul) a opacidad 0.15 para crear contención visible pero no agresiva.
- `--shadow-strong` incorpora multi-layer: un highlight blanco sutil en el top edge simula luz incidente, el ambient profundo da sensación de flotación. No usar en cards estándar, reservar para elementos con jerarquía alta.
- **`--shadow-primary-glow` uso prohibido en**: outline-primary, ghost-accent, botones secundarios, botones dentro de cards, badges, links inline.

#### Focus states canónicos

Patrón global aplicado en `src/index.css` dentro de `@layer base` (cierra brecha B6):

```css
*:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
  border-radius: inherit;
}

input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px hsl(var(--background)),
    0 0 0 4px hsl(var(--ring));
}

*:focus:not(:focus-visible) {
  outline: none;
}
```

Reglas:
- Solo `:focus-visible`, nunca `:focus` solo. Evita rings con click de mouse.
- Inputs usan ring inset doble (background + ring) para no chocar con el border.
- Validado en `/styleguide` Fase 3 sub-tarea 1 con test manual de Tab.

### 3.2 Typography

**Pairing editorial + sans-serif limpio:**

- **Display (H1, H2):** Playfair Display. Weights 700, 800, 900.
- **Body y UI (H3+, párrafos, botones, nav, inputs):** Inter. Weights 400-900.

**Carga en `index.html`** (con preload para reducir FOUT):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&display=swap" />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet" />
```

`font-display: swap` se mantiene como estrategia. Optimización con `size-adjust` / `ascent-override` queda diferida a Fase 6 si Lighthouse marca CLS > 0.05 atribuible a FOUT.

**Configuración Tailwind (`tailwind.config.ts > theme.extend`):**

```ts
fontFamily: {
  sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
  display: ["'Playfair Display'", "Georgia", "serif"],
},

fontSize: {
  // Escala 1.333 (perfect fourth, D33-5). H6 fuera de escala intencional (D33-F2): rol eyebrow/label.
  // Columna px nominal de referencia (md). clamp() es la fuente de verdad para H1-H3.
  "h1": ["clamp(2.75rem, 6vw + 1rem, 5.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em", fontWeight: "900" }],
  "h2": ["clamp(2.25rem, 4vw + 1rem, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.015em", fontWeight: "700" }],
  "h3": ["clamp(1.75rem, 3vw + 0.75rem, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
  "h4": ["1.875rem", { lineHeight: "1.25", letterSpacing: "0", fontWeight: "700" }],
  "h5": ["1.4rem", { lineHeight: "1.35", letterSpacing: "0", fontWeight: "600" }],
  "h6": ["1.05rem", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "600" }],
  "body": ["1rem", { lineHeight: "1.65", letterSpacing: "0" }],
  "prose-editorial": ["1.0625rem", { lineHeight: "1.7", letterSpacing: "0" }],
  "eyebrow": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "600" }],
}
```

**Tabla resumen de tamaños y rasgos** (validados en `/styleguide` G3 parcial):

| Nivel | Tamaño nominal (md) | clamp / responsive | line-height | letter-spacing | weight | Family |
|---|---|---|---|---|---|---|
| H1 | 88px | `clamp(2.75rem, 6vw + 1rem, 5.5rem)` | 1.0 | -0.02em | 900 light / **800 dark** | Playfair Display |
| H2 | 60px | `clamp(2.25rem, 4vw + 1rem, 3.75rem)` | 1.05 | -0.015em | 700 | Playfair Display |
| H3 | 44px | `clamp(1.75rem, 3vw + 0.75rem, 2.75rem)` | 1.15 | -0.01em | 700 | Inter |
| H4 | 30px | breakpoint Tailwind (`md:`/`lg:`) | 1.25 | 0 | 700 | Inter |
| H5 | 22.4px | breakpoint Tailwind | 1.35 | 0 | 600 | Inter |
| H6 (eyebrow/label) | 16.8px | breakpoint Tailwind | 1.4 | 0.01em | 600 | Inter |
| body | 16px | fijo | 1.65 | 0 | 400 | Inter |
| `.prose-editorial` | 17px | fijo | 1.7 | 0 | 400 | Inter |
| eyebrow | 12px | fijo | 1.4 | 0.05em | 600 | Inter |

**Override Playfair en dark mode** (D33-6, decidido tras A/B en `/styleguide` G3 parcial):

```css
.dark h1,
.dark .font-display.text-h1 {
  font-weight: 800;
}
```

Razón: weight 900 en dark satura visualmente cuando convive con CTA naranja, subtítulos Inter y otros elementos. Weight 800 mantiene presencia editorial sin ahogar elementos circundantes. Light mode sigue en 900 (default Tailwind, sin override).

**OpenType features Inter (D25 + B13):**

`font-feature-settings` en `:root` para herencia universal:

```css
:root {
  font-feature-settings: "cv01", "cv05", "cv09", "cv11", "ss03", "ss07";
}
```

Efecto: glifos alternativos más refinados (a, g, l, 0, %, &), separación estilística en números y caracteres técnicos. Subtle pero acumulativo, aporta pulido editorial a texto pequeño sin coste perceptual. H3-H6 (Inter) heredan automáticamente. H1-H2 (Playfair) ignoran las features sin coste.

**`.prose-editorial` aplicación (D33-F4, lista cerrada):**

Solo en estos contextos. Ampliar la lista requiere D nueva.

- `home.about.body` (descripción larga sección About en home).
- `home.hero.subtitle` (subtítulo del hero, si supera 2 líneas).
- Descripciones de casos en `/portfolio` y `/portfolio-webs` (campo `case.description`).
- Cuerpo de páginas legales (`/legal/*`).

Resto del sitio: `text-body` (16px).

**Reglas de uso (síntesis):**
- H1 único por página.
- Max width párrafo: 65ch.
- Body 17px (`.prose-editorial`) reservado a párrafos largos.

**Prohibiciones:**
- No uppercase abuse (solo badges y botones pequeños).
- No italics en body.
- No fuentes decorativas adicionales.

**Nota conflicto AGENT.md:** AGENT.md prohíbe Inter categóricamente. Esta especificación usa Playfair Display (recomendada por AGENT.md) en H1/H2 y mantiene Inter en el resto. Resolución en sección 1.6.

### 3.3 Spacing & Layout

- Container: ya definido (padding 2rem, max 1400px en 2xl).
- Section padding vertical: `py-20 md:py-28 lg:py-32`.
- Grid default: 12 columnas.
- Gap estándar entre cards: `gap-6 lg:gap-8`.

**Principios de composición (AGENT.md):**
- Asimetría en hero y about (no todo centrado).
- Overlapping puntual (foto que sobresale de card, título que rompe columna).
- Grid-breaking en momentos clave.
- Generous negative space en hero y about.
- Full-bleed photography donde sea relevante.

### 3.4 Motion Principles

**Librería única:** GSAP 3.13 + `@gsap/react`.

**Resolución AGENT.md:** "Use the Motion library" se interpreta como referencia conceptual, no librería específica. GSAP se mantiene.

**Reglas:**
1. Máximo 2 tipos de animación por página.
2. Duración 300-600ms. Nunca superar 800ms.
3. Easing estándar: `cubic-bezier(0.4, 0, 0.2, 1)`.
4. Respetar `prefers-reduced-motion` siempre.
5. Si una animación rompe LCP o CLS, se elimina.
6. No micro-interacciones sin propósito.

**Patrones canónicos (AGENT.md):**
- Entrada de página orquestada con stagger `animation-delay`.
- Hover states sorpresivos en botones, portfolio cards, CTAs.
- Scroll-triggered reveals en secciones largas.
- Scroll horizontal del showcase se mantiene (portfolio).

### 3.5 Components (shadcn/ui baseline)

Instalados. Core confirmado en uso:
- `Button`, `Card`, `Input`, `Textarea`, `Label`, `Form`
- `Dialog`, `AlertDialog`, `Sheet`, `Drawer` (vaul)
- `Navigation Menu`, `Dropdown Menu`
- `Toast` (sonner + radix-toast)
- `Tabs`, `Accordion`, `Separator`
- `Badge`, `Avatar`, `Tooltip`, `Popover`
- `Select`, `Checkbox`, `Radio Group`, `Switch`

Acción Fase 2: auditar uso real con `depcheck`, eliminar huérfanos. Target reducción bundle >= 40KB gzip.

### 3.6 Variantes personalizadas obligatorias

**Button (implementadas en sub-tarea 2, commit `adc8b02`):**
- `primary`: naranja sólido, **texto oscuro `--primary-foreground` (220 30% 8%, post-D33-7)**. `hover:bg-primary/90`, `active:scale-[0.985]`.
- `accent`: azul sólido, blanco. `hover:bg-accent/90`, `active:scale-[0.985]`.
- `outline-primary`: borde naranja 2px, transparente, texto naranja. `hover:bg-primary/10`, `active:scale-[0.985]`.
- `ghost-accent`: texto azul, transparente. `hover:bg-accent/10`, `active:scale-[0.985]`.

**Prop `glow` opcional** (D33-3): aplica `--shadow-primary-glow` solo en `variant="primary"`. Restricción de uso: CTA hero principal (uno por página) y CTA cierre de sección final. Otras combinaciones disparan warning de consola.

**Card variant `feature` (implementada en sub-tarea 2, commit `1648246`):** componente `FeatureCard` en `src/components/ui/feature-card.tsx` envuelve shadcn `Card` con `--shadow-ring-accent` (containment azul al 15%) y hover `translateY(-0.5)` + `--shadow-medium`. Prop `static={true}` desactiva hover para uso decorativo.

**Heading semántico (implementado en sub-tarea 2, commit `9684c0f`):** componente `<Heading level={1-6}>` en `src/components/ui/heading.tsx` aplica tamaño + family + weight según escala §3.2. Props auxiliares: `visualLevel` para override visual sin perder semántica HTML, `eyebrow` para rol label en `level={6}`.

### 3.7 Iconografía

- **Lucide React** única librería.
- Tamaño default 20px. Hero 24-32px.
- Stroke width 1.75.
- **Nunca iconos sueltos sin integrar** en sistema visual coherente.

### 3.8 Tratamiento fotográfico (AGENT.md)

- Fotos del portfolio con tratamiento cinematográfico: overlay sutil, vignette ligera, gradient-on-hover.
- Full-bleed edge-to-edge donde posible.
- Nunca fondo sólido plano: texture sutil, grain overlay, mesh gradient o shadows dramáticos.
- Imágenes con `aspect-ratio` fijo en CSS (anti-CLS).

### 3.9 Anexos técnicos adoptados de getdesign/framer

El 18-abril-2026 se evaluó el pack `npx getdesign@latest add framer`. El pack entrega un único `DESIGN.md` prescriptivo que describe literalmente framer.com como sitio web. Se descartó como dirección global por conflicto estructural con la identidad de Studio Pixelens (ver D22 en §13). Se extrajeron 7 aportes técnicos neutrales que se integran aquí sin reabrir decisiones cerradas.

#### V1. Escala de spacing canónica

Base 8px. Escala permitida en px:

```
1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 30, 35
```

Valores fuera de esta escala requieren justificación. Tailwind config ya soporta valores arbitrarios, la escala aplica a decisiones de spacing no automatizadas. Section padding sigue la regla existente `py-20 md:py-28 lg:py-32` (que ya encaja: 80px / 112px / 128px, todos múltiplos o variaciones coherentes).

#### V2. OpenType features en Inter

Integrado en §3.2.

#### V3. Ring shadows para containment

Integrado en §3.1 como `--shadow-ring-accent`. Patrón canónico para cards sobre fondos oscuros.

#### V4. Scale transition value en hover de cards

Valor canónico para hover scale de cards interactivas: `transform: scale(0.985)` en press, `scale(1.0)` en rest, `translateY(-2px)` en hover (ya en MASTER §3.6 card variant `feature`).

Framer usa `scale(0.85)` para interacciones de press más agresivas. Ajustado a `0.985` por coherencia con la dirección editorial más contenida. No adoptar el 0.85 literal.

#### V5. Principio "dense within, spacious between"

Componentes internos con spacing ajustado (line-height tight en displays, padding mínimo dentro de cards). Espacio externo (entre secciones, entre bloques) generoso y aireado. Aplicar en:
- Hero: título comprimido (line-height 0.9-1.0, tracking negativo) dentro de un bloque con section padding amplio.
- Cards: padding interno 15-24px, gap entre cards `gap-6 lg:gap-8`.
- Secciones: `py-20 md:py-28 lg:py-32` como mínimo.

#### V6. Border radius por tipo de elemento

Escala canónica:

| Elemento | Radius |
|---|---|
| Micro-elementos, precision edges | 1px |
| Small UI (badges, thumbnails) | 4-6px |
| Inputs, buttons estándar | 8px (`--radius` default) |
| Cards, product screenshots | 10-12px |
| Large containers, feature cards | 15-20px |
| Navigation pills secundarias | 30-40px |

**Rechazo explícito:** pills 100px radius en CTAs principales (D23). La dirección Editorial Structural de MASTER §1.5 rechaza el look SaaS-pill moderno en favor de radios moderados que leen mejor en contexto editorial.

#### V7. Multi-layer shadow para elevated cards

Integrado en §3.1 como `--shadow-strong`. Highlight blanco 0.5px top edge + ambient oscuro 10px 30px.

#### Lo NO adoptado del pack (razonado en D22)

- **`#000000` puro como fondo**: MASTER §3.1 mantiene `220 30% 6%` (`#0B0F16`) azulado oscuro. El negro puro es agresivo y plano, el azulado editorial da profundidad cinematográfica.
- **Framer Blue `#0099ff` como accent único**: colisión directa con el flip naranja/azul de D02. Naranja es primary y no se renuncia.
- **GT Walsheim**: tipografía de pago innecesaria. Playfair Display cumple el rol display con más personalidad editorial y es gratis.
- **"No decorative imagery, no icons"**: incompatible con portfolio fotográfico cinematográfico y con sistema Lucide de §3.7. Se rechaza.
- **Pills 100px en CTAs**: ver V6 y D23.
- **Prohibición de gradientes**: MASTER §3.1 define 3 gradientes controlados. Se mantienen.

---

## 4. Content Inventory

### 4.1 Servicios

| Servicio | Resumen | Target |
|---|---|---|
| Diseño Web Profesional | Páginas web modernas, rápidas, responsive, SEO | PYMEs Marina Alta |
| Fotografía Corporativa | Empresas, producto, inmobiliaria, personal branding | Negocios locales |
| Desarrollo a Medida | React, aplicaciones web, integraciones | Clientes técnicos |
| Edición Fotográfica (SaaS) | Paquetes por volumen, re-ediciones incluidas | Fotógrafos, ecommerce |

### 4.2 Paquetes edición (Supabase `photo_packages`)

| Paquete | Fotos | Precio/foto | Total | Descuento |
|---|---|---|---|---|
| Pack Prueba | 1 | 0.00 € | 0.00 € | — |
| Pack Básico | 5 | 2.00 € | 10.00 € | 0% |
| Pack Estándar | 10 | 1.80 € | 18.00 € | 10% |
| Pack Premium | 20 | 1.50 € | 30.00 € | 25% |
| Pack Profesional | 50 | 1.20 € | 60.00 € | 40% |

Hasta 3 re-ediciones gratuitas por foto.

### 4.3 SEO actual (preservar + ampliar)

| Campo | Valor |
|---|---|
| Title actual | Studio Pixelens - Fotografía Profesional & Desarrollo Web |
| Description | Studio Pixelens: Diseño web y fotografía profesional en Dénia. Elevamos la imagen de tu empresa con webs rápidas y fotos impactantes. ¡Contacta hoy! |
| Keywords primarias | fotografía profesional España, diseño web pymes, fotógrafo corporativo, agencia web Dénia, diseño web Dénia, fotografía empresarial Marina Alta |
| Canonical | https://studiopixelens.com |
| OG locale | es_ES |
| Twitter site | @studiopixelens |

---

## 5. Technical Architecture

### 5.1 Stack confirmado

**Runtime y build:**
- Node.js 20 LTS
- Vite 5.4 + `@vitejs/plugin-react-swc`
- TypeScript 5.8 (**zero `any` policy**)
- ESLint 9 + typescript-eslint
- `vite-plugin-compression`

**UI:**
- React 18.3
- Tailwind CSS 3.4 + `tailwindcss-animate` + `@tailwindcss/typography`
- shadcn/ui (Radix completo)
- `lucide-react`
- `next-themes`

**Motion:**
- GSAP 3.13 + `@gsap/react`

**Formularios y validación:**
- `react-hook-form` 7.61
- `zod` 3.25
- `@hookform/resolvers` 3.10
- `dompurify` 3.3

**Data y estado:**
- `@tanstack/react-query` 5.83
- `@supabase/supabase-js` 2.75

**Routing:**
- `react-router-dom` 6.30

**i18n:**
- `i18next` 25.6 + `react-i18next` 16

**Testing:**
- Playwright (ya montado, puerto dev 5173)
- Runner: `python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_test.py`

**Otros:**
- `sonner`, `date-fns`, `react-compare-image`, `embla-carousel-react`, `class-variance-authority`, `clsx`, `tailwind-merge`

### 5.2 Estructura de carpetas

**Estructura actual del repo (verificada en Fase 0, INVENTORY.md §3):**

```
/
├── docs/
│   ├── MASTER.md
│   ├── PROGRESS.md
│   ├── CONTEXT_BRIEF.md
│   ├── INVENTORY.md         ← output Fase 0 ✓
│   ├── SECURITY_AUDIT.md    ← ex-CLAUDE.md renombrado (D16)
│   └── [pendientes]: CONTENT.md, MIGRATION.md, PORTFOLIO_SPEC.md (output Fase 1/2)
├── AGENT.md                 ← instrucciones agente IA, convive con MASTER
├── public/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css            ← tokens globales
│   ├── components/
│   │   ├── ui/              ← shadcn (48 primitivos)
│   │   ├── dashboard/       ← Sprint 2, no tocar
│   │   └── [custom directos, sin subcarpetas portfolio/layout/sections]
│   ├── pages/
│   │   ├── Index.tsx (home)
│   │   ├── Portfolio.tsx    ← entry del módulo portfolio distribuido
│   │   ├── Auth.tsx         ← existente, Sprint 2 lo rediseña
│   │   ├── Dashboard.tsx    ← Sprint 2
│   │   └── legal/           ← Privacidad.tsx, Cookies.tsx, AvisoLegal.tsx, LegalNotice.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx  ← existente, Sprint 1 no toca
│   ├── integrations/
│   │   └── supabase/        ← client.ts + types.ts generados
│   ├── hooks/
│   │   └── useSecureNavigation.ts  ← existente
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── security.ts      ← existente, auditado SECURITY_AUDIT.md
│   │   └── validation.ts    ← existente, auditado SECURITY_AUDIT.md
│   ├── i18n/
│   │   ├── config.ts
│   │   └── locales/         ← es.json, en.json
│   └── data/
├── supabase/
│   ├── config.toml
│   └── migrations/          ← CONGELADO durante Sprint 1
├── index.html
├── tailwind.config.ts
├── vite.config.ts           ← puerto actual 8080, corregir a 5173 en Fase 3 (D26)
├── tsconfig.json
├── package.json
└── components.json
```

**Divergencias conocidas con la estructura original planteada en MASTER v1.2:**

| Planteado en v1.2 | Realidad (Fase 0) | Resolución |
|---|---|---|
| `scripts/with_server.py` | No existe | Crear antes de Fase 6 (motion/tests). §7.4 DT-04 |
| `src/components/portfolio/` como carpeta | No existe. Portfolio distribuido en `pages/Portfolio.tsx` + varios componentes sueltos (HorizontalShowcase, ProjectCard, WebPortfolioShowcase, StickyScrollSection) | D27. `PORTFOLIO_SPEC.md` enumera archivos exactos en Fase 1 |
| `src/components/layout/` y `src/components/sections/` | No existen como subcarpetas. Todo plano en `src/components/` | Mantener estructura plana actual, no reorganizar en Sprint 1 |
| `src/lib/supabase.ts` | No existe. Cliente real en `src/integrations/supabase/client.ts` | Sin acción, eliminar referencia. §16.10 de INVENTORY |
| `src/lib/motion.ts` | No existe | Crear en Fase 6 cuando se centralice motion |
| `src/types/` | No existe. Sin tipos custom globales | Crear en Fase 2 o 3 si surge necesidad real |

**Artefactos a limpiar (§16 INVENTORY, §7.4 deuda técnica):**
- `src/assets_backup/` (18 archivos con espacios, compromete bundle)
- `*.bak`, `*.backup`, `*.temp` en componentes e i18n/
- `src/assetsFotos Portfolio` (nombre anómalo, verificar)

### 5.3 Routing map

**Objetivo Sprint 1** (tabla objetivo, rutas finales tras Fase 4):

| Path | Componente | Sprint | Público | Descripción |
|---|---|---|---|---|
| `/` | `Home` | 1 | Sí | Landing principal |
| `/servicios` | `Services` | 1 | Sí | Detalle de 4 servicios |
| `/portfolio` | `Portfolio` | 1 | Sí | Módulo preservado |
| `/sobre` | `About` | 1 | Sí | Quiénes somos |
| `/contacto` | `Contact` | 1 | Sí | Formulario + datos |
| `/legal/privacidad` | `Privacy` | 1 | Sí | RGPD |
| `/legal/cookies` | `Cookies` | 1 | Sí | Política cookies |
| `/legal/terminos` | `Terms` | 1 | Sí | Términos |
| `/styleguide` | `Styleguide` | 1 | Solo dev | Validación DS |
| `/auth` | `Auth` | 2 | Sí | Login / registro (ya existe) |
| `/dashboard` | `Dashboard` | 2 | Auth | Hub cliente |
| `/dashboard/paquetes` | `Packages` | 2 | Auth | Selección |
| `/dashboard/subir` | `Upload` | 2 | Auth | Upload |
| `/dashboard/pedidos` | `Orders` | 2 | Auth | Historial |
| `/dashboard/pedidos/:id` | `OrderDetail` | 2 | Auth | Detalle |

**Estado actual (Fase 0, INVENTORY §16.8):** `App.tsx` no implementa esta tabla. Divergencias:
- `/servicios`, `/sobre`, `/contacto` no existen como páginas (el home actual los tiene como secciones scroll).
- `/styleguide` no existe.
- Legal implementado en `/privacidad`, `/cookies`, `/aviso-legal` (paths distintos).
- Dashboard usa un único `/dashboard` con tabs internas, no sub-rutas.
- Ruta extra `/portfolio-webs` presente.

**Resolución:** Fase 4 (esqueleto y rutas) reestructura `App.tsx` a la tabla objetivo. Redirects 301 desde paths antiguos a paths nuevos en Fase 7 para preservar SEO.

**Durante Sprint 1**: `/auth` y `/dashboard/*` existen pero redirigen al home con "Próximamente". Marcar `noindex` en `robots.txt`.

### 5.4 State management

- Estado servidor: React Query. Stale-while-revalidate.
- Estado local UI: useState / useReducer.
- Contextos: tema (next-themes) y auth (`AuthContext.tsx`).
- Forms: React Hook Form + Zod.

### 5.5 Backend Supabase (Sprint 1)

Sprint 1 solo lee `photo_packages`. No toca producción.

Cliente en `src/integrations/supabase/client.ts`. Env vars reales (verificadas en INVENTORY §16.9): `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`.

> Nota: versiones previas de MASTER documentaban `VITE_SUPABASE_ANON_KEY`. El código real usa `VITE_SUPABASE_PUBLISHABLE_KEY`. Valor funcional equivalente, nombre distinto. Mantenemos el nombre del código. `.env.example` debe reflejarlo.

### 5.6 Schema Supabase (referencia)

Tablas: `profiles`, `photo_packages`, `orders`, `photos`, `re_edit_requests`.

Buckets: `original-photos`, `edited-photos` (privados, folder-scoped por UUID).

Funciones SECURITY DEFINER: `handle_new_user()`, `update_updated_at_column()`, `request_photo_re_edit(UUID, TEXT)` con `SELECT FOR UPDATE`.

Seguridad aplicada (migración `20260412184100`): UPDATE en `photos` restringido a `notes`. Trigger `enforce_photo_update_restrictions` bloquea modificación de campos críticos.

**Congelación Sprint 1:** no modificar `supabase/migrations/` ni `src/integrations/supabase/`.

---

## 6. Feature Specifications

### 6.1 Home

**Estructura (con asimetría, no 3 columnas genéricas):**
1. Hero con claim en Playfair Display weight 900, subclaim Inter, CTA primario naranja + CTA outline. Fondo oscuro gradient. Composición asimétrica.
2. Teaser servicios: **prohibido grid 2x2 o 4 cols idénticas**. Layout editorial con tamaños variables, o lista con fotos intercaladas.
3. Portfolio teaser: 3-4 proyectos con tratamiento full-bleed y overlay.
4. "Por qué elegirnos": **prohibido 3 cols icono+texto**. Bloques narrativos alternados izq/der con foto de apoyo.
5. Teaser paquetes edición (tabla elegante, sin precios detallados).
6. CTA final fondo naranja sólido.
7. Footer.

**Motion:** fade-in-up orquestado en hero con stagger, reveal on scroll en cards.

### 6.2 Services

- Hero editorial.
- 4 bloques alternados izq/der con imagen + copy + CTA.
- Tabla detallada paquetes edición.
- FAQ con accordion.
- CTA contacto.

### 6.3 Portfolios (REDISEÑO UI COMPLETO, D31)

**Pivote D31 (2026-04-19):** las páginas `/portfolio` (fotografía) y `/portfolio-webs` (desarrollo web) se rediseñan UI completa. Supersede el non-goal de §1.3 "no rehacer portfolio" y la regla original de "preservación verbatim". Se preserva solo lógica reutilizable (no UI).

**Realidad estructural confirmada (Fase 0, INVENTORY §16.12):** el portfolio no es una carpeta `src/components/portfolio/`. Era un módulo distribuido con entry en `src/pages/Portfolio.tsx` y dependencias esparcidas en `src/components/`. Tras el pivote D31, esta estructura distribuida se reorganiza en subdirectorios temáticos:

- `src/components/portfolio/` (CREADA en Fase 5.5): componentes de /portfolio fotografía
- `src/components/portfolio-webs/` (CREADA en Fase 5.5): componentes de /portfolio-webs desarrollo web

Ver `MIGRATION.md` para clasificación archivo por archivo y `CONTENT.md` §4 y §5 para copy.

**Componentes a DESCARTAR (sustituidos por nuevos editoriales):**
- `src/components/HorizontalShowcase.tsx` (scroll horizontal con FloatingElements 3D)
- `src/components/StickyScrollSection.tsx` (proceso + pricing embebido)
- `src/components/ProjectCard.tsx` (si existe como sub-componente huérfano)
- `src/components/WebPortfolioShowcase.tsx` (gradientes naranja-rojo + glow blur + grid pattern)
- `src/components/FloatingElements.tsx` (3D mouse tracking, anti-patrón editorial)

**Componentes a CREAR (nuevos, editoriales):**
- `PortfolioHeader.tsx` (reutilizable en /portfolio y /portfolio-webs)
- `PortfolioIntro.tsx` (intro contextual /portfolio)
- `PortfolioGallery.tsx` (galería con `react-compare-image`, cierra DT-12)
- `PortfolioWebsIntro.tsx` (intro metodológica)
- `PortfolioWebsCases.tsx` (3 casos full-bleed editorial)
- `PortfolioClosing.tsx` (cierre reutilizable con CTA + cross-link)

**Páginas reescritas:**
- `src/pages/Portfolio.tsx` (REBUILD, ver CONTENT.md §4)
- `src/pages/PortfolioWebs.tsx` (REBUILD, ver CONTENT.md §5)

**Lógica preservada (no entra en REBUILD):**
- `src/contexts/AuthContext.tsx`, `src/integrations/supabase/`, `src/lib/security.ts`, `src/lib/validation.ts`, `src/hooks/useSecureNavigation.ts`, `supabase/migrations/`, `src/components/ui/*` (shadcn).

**Razón del pivote:** la "preservación verbatim" original asumía que el portfolio actual cumplía un estándar editorial. La auditoría visual durante Fase 1 mostró que no: gradientes naranja-rojo, glow effects, FloatingElements 3D, layout SaaS 2019-2021. Mantenerlos chocaba frontalmente con la dirección "Editorial Structural" y reproducía el problema "proyecto Frankenstein" identificado al inicio del proyecto. Mejor rediseñar UI con criterio editorial coherente que preservar UI incoherente con el resto del rediseño.

**Contenido textual (AGENT.md):** cada caso de estudio con descripción honesta, sin métricas inventadas. Geolocalización cuando aplique. Internal linking al servicio correspondiente. Ver `CONTENT.md` §10 para diff conceptual con el copy actual.

### 6.4 About

- Hero con foto del equipo en tratamiento editorial full-bleed.
- Narrativa en bloques alternados.
- Stack visual (logos o badges).
- Contacto rápido.

### 6.5 Contact

Formulario con React Hook Form + Zod + DOMPurify:
- Nombre (min 2), email, teléfono (opcional), mensaje (min 20).
- Sanitización obligatoria.
- Target submit: **pendiente** Q01 (AGENT.md sugiere WhatsApp).
- Estados: idle, loading, success (sonner), error.

Validación cliente obligatoria antes de enviar o abrir WhatsApp.

### 6.6 Legal

Privacy, Cookies, Terms. Layout `LegalLayout` con `prose`.

---

## 7. Migration Plan

### 7.1 Clasificación

| Categoría | Regla | Aplicable a |
|---|---|---|
| PRESERVAR (lógica) | 1:1, no modificar | `supabase/migrations/`, `src/contexts/AuthContext.tsx`, `src/integrations/supabase/`, `src/lib/security.ts`, `src/lib/validation.ts`, `src/lib/utils.ts`, `src/hooks/useSecureNavigation.ts`, `src/hooks/use-toast.ts`, `src/hooks/use-mobile.tsx`, `src/components/ui/*` (shadcn primitives en uso) |
| REBUILD CON NUEVO DS | UI nueva, datos mantenidos | Hero, ServiceSelector→HomeServices, HorizontalShowcase→HomeCasesWeb, StickyScrollSection→HomeProcess, About+WhyUs→HomeAbout, Testimonials, FormSection, Header, Footer, Portfolio.tsx, PortfolioWebs.tsx, WebPortfolioShowcase→PortfolioWebsCases, etc. Lista exhaustiva en `MIGRATION.md` |
| REFACTOR PARCIAL | Lógica + JSX nuevo | NotFound.tsx, WhatsAppButton.tsx, PageLoader.tsx, SectionDivider.tsx, ContactForm.tsx (si es separado), páginas legales. |
| DESCARTAR | Eliminar | Componentes huérfanos confirmados (CTASection, GuaranteesSection, Process, Services, SimplePricingSection, FloatingElements, ProjectCard si huérfano), `src/data/showcaseData.ts`, `src/data/processData.ts`, archivos `.bak/.backup/.temp`, `src/assets_backup/`. Lista exhaustiva en `MIGRATION.md` §3-7. |
| CREAR | Nuevo archivo | 16 componentes + datos nuevos detallados en `MIGRATION.md` §9: HomeServices, HomeCasesWeb, HomePhotoShowcase, HomeProcess, HomeAbout, PortfolioHeader, PortfolioIntro, PortfolioGallery, PortfolioClosing, PortfolioWebsIntro, PortfolioWebsCases, galleryData, webCasesData, motion factory, scripts/with_server.py |
| DIFERIR | Sprint 2 | `src/pages/dashboard/*`, `src/pages/Auth.tsx` (interior), componentes dashboard, schema Supabase. |

### 7.2 Auditoría deps (Fase 2)

`npx depcheck` + eliminación. Target bundle gzip por ruta < 250 KB.

### 7.3 i18n paridad

Diff `es.json` vs `en.json` = 0 en claves antes de cerrar Sprint 1.

Contador actual de claves: ver INVENTORY §11. Switch de idioma no funcional hoy (INVENTORY §16.17), DT-09 lo resuelve.

### 7.4 Deuda técnica preexistente a sanear (D28)

Tabla consolidada de items identificados en Fase 0 (INVENTORY §16) con fase de resolución asignada. Cada item se marca como resuelto cuando el trabajo de su fase lo elimine de forma natural. No se crea fase dedicada de saneamiento.

**Actualización Fase 1 (2026-04-19):** la clasificación de `MIGRATION.md` confirma resolución natural de varios items por DESCARTE de componentes y REBUILD de archivos. Los items se mantienen en estado "Abierto" hasta ejecución física en Fase 2 o 5, pero su camino de resolución está fijado.

| ID | Descripción | Fuente | Resolver en | Estado |
|---|---|---|---|---|
| DT-01 | `"34667326300"` hardcoded en 7 archivos (ContactForm, CTASection, Footer, FormSection, Header, PricingSection, Portfolio) + bug `34634408043` en WhyUs. Extraer a `VITE_WHATSAPP_NUMBER` | INVENTORY §16.2, AGENT.md §⚙️ | Fase 5.1-5.4 (REBUILD natural de cada componente: Header, Footer, Hero, FormSection, WhatsAppButton; CTASection, PricingSection, WhyUs DESCARTAR) | Abierto, plan confirmado |
| DT-02 | 14+ `any` explícitos en AuthContext, ContactForm, dashboard/*, processData.ts, useSecureNavigation | INVENTORY §16.5, MASTER §10.3 | Sprint 1: ContactForm.tsx en Fase 5.4 (REBUILD), processData.ts DESCARTAR; Sprint 2: AuthContext, dashboard, useSecureNavigation | Abierto |
| DT-03 | Puerto dev `vite.config.ts: 8080` debe ser 5173 (D26) | INVENTORY §16.1, MASTER §9.3 | Fase 3 (design system + config global) | Abierto |
| DT-04 | Directorio `scripts/` no existe. `scripts/with_server.py` referenciado por AGENT.md y MASTER §9.3 no existe. Tests Playwright no ejecutables | INVENTORY §16.6 | Fase 2 (auditoría técnica) — adelantado desde Fase 6 para que tests E2E sean ejecutables desde Fase 3+ | ✅ Resuelto en Fase 2, commit `f0743c7` |
| DT-05 | `src/assets_backup/` con 18 archivos duplicados comprometidos en git. Añadir a `.gitignore` y ejecutar `git rm -r --cached` | INVENTORY §16.3 | Fase 2 (auditoría técnica) | ✅ Resuelto en Fase 2, commit `ddce38a` (27 archivos desindexados, ver PROGRESS.md sesión 2026-04-25) |
| DT-06 | Archivos `.bak`, `.backup`, `.temp` comprometidos en git (7 archivos en components/ e i18n/) | INVENTORY §16.4 | Fase 2 | ✅ Resuelto en Fase 2, commit `a77f245` |
| DT-07 | Componentes potencialmente huérfanos: `CTASection`, `GuaranteesSection`, `Process`, `Services`, `SimplePricingSection`. `SimplePricingSection` duplica `PricingSection` | INVENTORY §16.14, §16.15 | Fase 5.1 — DESCARTAR confirmado en MIGRATION.md §7. Validación con `grep` antes de `git rm` | Auditado en Fase 2 (dossier en PHASE2_REPORT.md §3). Ejecución DESCARTE en Fase 5.1 |
| DT-08 | `ThemeProvider` de `next-themes` no está wired en `main.tsx`/`App.tsx`. Dark mode default de §3.1 no operativo | INVENTORY §16.7, MASTER §3 | Fase 3 (design system build) | Abierto |
| DT-09 | `getStoredLanguage()` en `src/i18n/config.ts` siempre retorna `"es"`. Switch a EN no funcional | INVENTORY §16.17, MASTER §2.3 | Fase 5.2 (chrome global, lang toggle real en Header) | Abierto |
| DT-10 | `console.error()` activo en `GallerySection` (3 ocurrencias) y `useSecureNavigation` (2). `vite.config.ts` los elimina en build pero contaminan dev | INVENTORY §16.16 | GallerySection: si DESCARTAR en Fase 5.5, se cierra solo. useSecureNavigation: Sprint 2 | Abierto |
| DT-11 | `LegalNotice.tsx` importa `useTranslation` sin usarlo | INVENTORY §16.19 | Fase 5.2 (REFACTOR páginas legales) | Abierto |
| DT-12 | `react-compare-image` instalado pero no usado. `Portfolio.tsx` implementa comparación manualmente | INVENTORY §16.18 | Fase 5.5 — uso confirmado en `PortfolioGallery.tsx` (Bloque C de /portfolio) y `HomePhotoShowcase.tsx` (Bloque 4 de Home) | Abierto, plan confirmado |
| DT-13 | Archivo/directorio anómalo `src/assetsFotos Portfolio` (nombre con espacios, sin extensión) | INVENTORY §16.20 | Fase 2 (verificar manualmente qué es) | ✅ Resuelto en Fase 2, commit `f802256` (era archivo ASCII de 2 bytes, sin refs) |
| DT-14 | Primera migración Supabase con nombre UUID sin descripción semántica (`20251010085309_18845f8a-...sql`) | INVENTORY §16.21 | Sin acción (migraciones congeladas Sprint 1) | Aceptado |
| DT-15 | Keys i18n huérfanas: `portfolioShowcase.goldencoast.*` (7 keys) y `photoPacks.trial/basic/standard/premium.*` nunca renderizadas | CONTENT.md §9.1, sesión Fase 1 | Fase 5.1 (REBUILD de `es.json` y `en.json`) | Abierto, plan confirmado |
| DT-16 | Token `--cta` activo (no huérfano como se catalogó inicialmente) en `tailwind.config.ts`. Auditoría grep en sub-tarea 2 (Step 5) detectó uso vivo en 15 archivos legacy: About, Hero, Footer, Services, Header, Testimonials, ProjectCard, FormSection, PackagesSection, GallerySection, UploadSection, Auth, NotFound, button.tsx + propio config | Re-clasificado en Fase 3 sub-tarea 2 tras grep (cataloging error en sub-tarea 1) | **Fase 5** (rediseño página por página). Limpieza natural cuando los componentes legacy se reescriban con `--primary` directo. Coherente con D28 (deuda técnica progresiva) | Abierto, plan confirmado |

**Principio operativo:** cada PR que toque un archivo listado arriba debe cerrar el item correspondiente como parte del trabajo, no como tarea separada. Esto evita el coste de una fase de saneamiento dedicada.

---

## 8. SEO & Performance

### 8.1 Meta tags

Librería: `react-helmet-async` en Fase 7.

**Title format obligatorio (AGENT.md):** `[Primary Keyword] | Studio Pixelens`

Ejemplos:
- Home: `Fotografía Profesional y Diseño Web | Studio Pixelens`
- Servicios: `Servicios de Diseño Web y Fotografía | Studio Pixelens`
- Portfolio: `Portfolio de Proyectos | Studio Pixelens`

Length 50-60 chars. Primary keyword primero. Único por página.

**Meta description:** 150-160 chars, CTA implícito, nunca duplicada.

### 8.2 Heading structure

- Un solo `<h1>` por página con keyword primaria.
- Jerarquía H1 → H2 → H3 sin saltos.

### 8.3 Imágenes

- WebP obligatorio para nuevas.
- `alt` descriptivo con keyword natural.
- `loading="lazy"` below-the-fold.
- File names descriptivos: `fotografia-corporativa-empresa.webp`.
- `aspect-ratio` CSS (anti-CLS).

### 8.4 Schema.org

- Home: `LocalBusiness`.
- Contact: `LocalBusiness` con datos exactos.
- Portfolio items: `ImageGallery` o `CreativeWork`.
- Services: `Service`.
- Global: `Organization`.

Validar en https://search.google.com/test/rich-results antes de launch.

### 8.5 Sitemap y robots

- `public/sitemap.xml` rutas públicas.
- `public/robots.txt` con `noindex` para `/dashboard/*` y `/auth`.

### 8.6 Core Web Vitals

| Métrica | Target | Notas |
|---|---|---|
| LCP | < 2.5s techo, < 2.0s objetivo | Hero images riesgo principal |
| INP | < 200ms | Evitar main-thread blocking |
| CLS | < 0.1 | `aspect-ratio` en imágenes |
| Lighthouse Performance | >= 92 | |
| Lighthouse SEO | >= 95 | |
| Lighthouse Accessibility | >= 95 | |
| Lighthouse Best Practices | >= 95 | |

### 8.7 Issues conocidos (AGENT.md)

- SPA React Router: verificar `index.html` tiene base meta tags y cada ruta actualiza `<title>` dinámicamente con Helmet.
- Sitemap.xml no existe: crear en Fase 7.
- `/dashboard` y `/auth` noindex obligatorio.

---

## 9. Testing Infrastructure

### 9.1 Stack

Playwright ya montado. Python scripts en `scripts/`.

### 9.2 Cuándo correr tests (obligatorio)

- Cambios en navegación (`Nav.tsx`, `Header.tsx`).
- Cambios en flujos form (`ContactForm.tsx`, `Auth.tsx`).
- Cambios de rutas (`App.tsx`).
- Antes de cualquier PR `redesign/v2-framer-base` → `dev`.

### 9.3 Cómo correr

```bash
python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_test.py
```

### 9.4 Patrón base

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle')
    # ...
    browser.close()
```

### 9.5 Tests mínimos

1. Navigation: links Header cargan sin 404.
2. Contact form: valida campos vacíos antes de enviar.
3. Auth flow: login con credenciales erróneas muestra error sin crashear.
4. Responsive: screenshot 375px y 1440px en homepage.

### 9.6 Reglas

- Selectores descriptivos: `role=`, `text=`, IDs. Nunca XPath frágil.
- Screenshots dev en `/tmp/`, nunca commitear.
- Correr `--help` de scripts antes de crear nuevos.

---

## 10. Security & Compliance

### 10.1 Supabase RLS

Bien configurado. No tocar Sprint 1. Auditoría completa en CLAUDE.md pre-launch Sprint 2.

### 10.2 Input sanitization

- Todo input pasa por Zod.
- Renderizado HTML pasa por DOMPurify.
- Prohibido `dangerouslySetInnerHTML` sin sanitizar.

### 10.3 TypeScript estricto

- **Cero `any`**.
- Tipos generados Supabase o inferencia Zod.
- `strict: true` en tsconfig.

### 10.4 Variables de entorno

- Keys en `.env.local` (git-ignored).
- Prefijo `VITE_` solo si va al bundle.
- **Nada sensible en source code**: teléfonos, emails, keys, IDs. Todo via `import.meta.env.VITE_*`.

### 10.5 GDPR

- Banner cookies granular (necesarias, analytics, marketing).
- Privacidad en footer.
- Borrado de cuenta en Sprint 2.

### 10.6 CSP headers

```
default-src 'self'
img-src 'self' data: https:
font-src 'self' https://fonts.gstatic.com
connect-src 'self' https://*.supabase.co
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
```

---

## 11. Deployment

### 11.1 Cloudflare Pages

- Framework: Vite
- Build: `npm run build`
- Output: `dist`
- Node: 20
- Env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

### 11.2 Dominios

- Staging: `studiopixelens-v2.pages.dev`
- Prod: `studiopixelens.com` (cambiar DNS solo post G7)

### 11.3 Git flow

```
main            (producción)
  ↑ PR tras G7
dev             (integración)
  ↑ PR tras Sprint completo
redesign/v2-framer-base  (trabajo del rediseño)
```

### 11.4 Commit convention (AGENT.md)

Formato obligatorio: `type: short description`

Tipos:
- `feat:` nueva feature
- `fix:` corrección
- `chore:` mantenimiento, config
- `style:` estilo sin lógica
- `refactor:` refactor sin cambio funcional
- `docs:` documentación

Ejemplos:
- `feat: add Playfair Display to typography system`
- `docs(progress): complete Phase 0 inventory`
- `refactor: extract motion variants to lib/motion.ts`

Un commit por tarea. Mensajes concisos.

### 11.5 Rollback

- Cloudflare Pages mantiene histórico. Rollback 1 clic.
- Tag pre-launch: `v1.0-pre-redesign` en `main` actual.

---

## 12. Quality Gates

| Gate | Criterio | Responsable |
|---|---|---|
| G0 | INVENTORY.md refleja repo sin omisiones | Miguel |
| G1 | Docs satélites coherentes entre sí y con MASTER | Miguel |
| G2 | MIGRATION.md clasifica 100% componentes públicos | Miguel |
| G3 | `/styleguide` renderiza primitivos ambos modos, tipografía validada | Miguel + revisión visual |
| G4 | Todas rutas navegables, Nav/Footer 3 viewports | Miguel |
| G5 | Cada página pasa side-by-side. Portfolio 100% idéntico. | Miguel |
| G6 | Motion coherente, CWV verdes, Playwright pasa | Miguel + Lighthouse + Playwright |
| G7 | Lighthouse >=92, redirects 301, i18n paridad, schema validado | Miguel |

---

## 13. Decisions Log

| # | Fecha | Decisión | Razón | Revisable |
|---|---|---|---|---|
| D01 | 2026-04-18 | Rebuild UI + preservación lógica | Stack sólido | No |
| D02 | 2026-04-18 | Orange primary, Blue accent | Flip de marca | En G3 |
| D03 | 2026-04-18 | Dark mode default | Editorial + energía color | En G3 |
| D04 | 2026-04-18 | GSAP única librería motion | Ya instalada, portfolio depende | No |
| D05 | 2026-04-18 | Cloudflare Pages host | Ya es el actual | No |
| D06 | 2026-04-18 | Sprint 1 público, Sprint 2 dashboard | Deadline Basilea | No |
| D07 | 2026-04-18 | Docs: MASTER + PROGRESS + 4 satélites | Minimiza ruido contexto | No |
| D08 | 2026-04-18 | Antigravity ejecución, Project planificación | Doble vía | No |
| D09 | 2026-04-18 | Sonnet 4.6 default, Opus 4.6 fases críticas | Balance coste/precisión | En ejecución |
| D10 | 2026-04-18 | Branch `redesign/v2-framer-base` desde `dev` | Respeta convención AGENT.md | No |
| D11 | 2026-04-18 | Typography: Playfair Display H1/H2 + Inter body/UI | Resolución conflicto AGENT.md vs Inter | En G3 |
| D12 | 2026-04-18 | Dirección "Editorial Structural": Framer layout + editorial soul | Síntesis AGENT.md + visión Framer | En G3 |
| D13 | 2026-04-18 | Commit format `type: description` estilo AGENT.md | Consistencia con convención repo | No |
| D14 | 2026-04-18 | Playwright tests obligatorios en cambios Nav, Forms, Routes | Política AGENT.md | No |
| D22 | 2026-04-18 | Evaluado pack `getdesign add framer`. Descartado como dirección global por conflicto estructural (flip color C1, tipografía de pago C3, filosofía product-forward vs editorial C4, "no imagery" vs portfolio fotográfico C5). Adoptados 7 aportes técnicos neutrales en §3.9 (V1-V7) | Pack entrega descripción literal de framer.com, producto de naturaleza distinta a Studio Pixelens. Adopción global implicaría reabrir D02, D03, D11, D12 y contradecir AGENT.md. Aportes técnicos puntuales sí suman sin coste conceptual | No |
| D23 | 2026-04-18 | Mantener `--radius: 0.5rem` (8px) default en CTAs. Rechazo explícito de pill CTAs 100px radius | Pills 100px son look SaaS consumer. Desalinean con dirección Editorial Structural de §1.5 que busca coherencia con referencias tipo Monocle / NYT / editorial luxury | En G3 si evidencia nueva |
| D26 | 2026-04-19 | Unificar puerto dev en 5173. Modificar `vite.config.ts` en Fase 3 (DT-03) | AGENT.md §🧪 y `scripts/with_server.py` ya asumen 5173. Default de Vite. Coste: 1 línea. Alternativa (cambiar MASTER/AGENT/scripts a 8080) tiene coste mayor sin beneficio | No |
| D27 | 2026-04-19 | Portfolio es módulo distribuido (no carpeta `src/components/portfolio/`). Entry: `src/pages/Portfolio.tsx`. Dependencias dispersas en `src/components/`. Fase 1 consolida lista en `PORTFOLIO_SPEC.md` | INVENTORY §16.12 confirma ausencia de la carpeta. Estructura real emergió durante Fase 0. Mientras no exista PORTFOLIO_SPEC.md, regla operativa: cualquier archivo referenciado por Portfolio.tsx directa o indirectamente queda preservado verbatim | No |
| D28 | 2026-04-19 | Deuda técnica preexistente tratada progresivamente durante rediseño, no en fase dedicada. Tabla consolidada en §7.4 con 14 items (DT-01 a DT-14) y fase de resolución asignada a cada uno | Rediseño ya va a tocar los archivos afectados. Saneamiento separado = trabajo doble. Coste marginal de limpiar al reescribir es prácticamente cero | No |
| D29 | 2026-04-19 | Confirmación consolidada de la dirección estética y de tokens. Dark mode default + flip naranja primary / azul accent + pairing Playfair Display H1/H2 + Inter body/UI + dirección "Editorial Structural". Cierra Q02, Q03, Q06, Q07 | Owner valida sin cambios la propuesta inicial tras revisión completa del trabajo de Fase 1. Sin evidencia que reabra D02, D03, D11, D12. Confirmación necesaria antes de Fase 3 (Design System build) | No |
| D30 | 2026-04-19 | Target del formulario de contacto: WhatsApp como canal primario via `wa.me/{VITE_WHATSAPP_NUMBER}` con mensaje pre-formateado, email `studiopixelens@gmail.com` como fallback secundario visible. Supabase descartado como target. Cierra Q01 y Q08 | Coherente con AGENT.md que sugiere WhatsApp. Mantiene freeze de `supabase/` durante Sprint 1 (no añadir tablas de contactos). Email visible aporta opción para usuarios que prefieren canal asincrónico | No |
| D31 | 2026-04-19 | **Pivote de scope**: rediseño UI completo de `/portfolio` y `/portfolio-webs`. Supersede el non-goal "no rehacer portfolio" de §1.3 y la regla "preservación verbatim" de D01 en lo relativo a UI. Se preserva solo lógica reutilizable. Sub-decisiones: D31.1 quitar claim "+40%" TropiDenia (no verificable), D31.2 quitar tag "WordPress" BVS (incoherente con stack declarado), D31.3 descripción única por caso web (no bicolumna Problema/Solución), D31.4 Bloque B /portfolio reducido sin números | Auditoría visual durante Fase 1 mostró que la UI actual del portfolio (gradientes naranja-rojo, glow effects, FloatingElements 3D, layout SaaS) choca frontalmente con dirección Editorial Structural. Mantenerla reproducía el problema "Frankenstein" identificado al inicio. Mejor coherencia editorial completa que preservación parcial incoherente. D31.1-D31.4 priorizan honestidad sobre claims comerciales no verificables | No |
| D32 | 2026-04-19 | Protocolo: validación estética por owner en chat antes de pasar brief O.D.A. crítico de UI a Antigravity. Aplicable a Fase 3 (Design System) y Fase 5 (rediseño página por página) | Cinematic-v2 abandonado (D19) demostró el coste de ejecutar UI compleja sin validación previa. Una conversación de 30 minutos en chat ahorra 4-6 horas de Antigravity rehechas. Aplica solo a UI: tareas técnicas mecánicas (depcheck, config, scripts) no requieren esta validación | En G3 si proceso rompe |
| D33 | 2026-04-30 | **Afinamiento Design System (cierre Fase 3 sub-tarea 1).** 7 sub-decisiones validadas en chat antes de brief y confirmadas en `/styleguide` con G3 parcial: D33-1 estados semánticos `--success` (142 45% 36% / 142 40% 50%) + `--warning` (hue 45 ámbar para diferenciar de primary hue 20), `--info` no existe como token (alias `--accent`). D33-2 `--gradient-hero` reformulado de linear 135deg a radial elíptico off-center; variante final B 50%×40% al 13% (validada en A/B `/styleguide`). D33-3 `--shadow-primary-glow` capped a opacidad 0.18 y blur 40px, restricción de uso a CTA hero y cierre de sección. D33-4 tamaño base body 16px global, `.prose-editorial` 17px en lista cerrada de aplicaciones. D33-5 ratio modular 1.333 (perfect fourth) con `clamp()` en H1-H3 y breakpoints en H4-H6, H6 fuera de escala como rol eyebrow/label. D33-6 Playfair H1 dark = weight 800 fijo (validado en A/B `/styleguide`), light mode mantiene 900. D33-7 `--primary-foreground` cambiado de blanco (3.23:1 AA Large) a `220 30% 8%` (5.80:1 AA), patrón editorial dark text on warm surface | Cierra brechas detectadas en pre-brief: B1 (estados sin token), B3 (gradient genérico), B4 (glow excesivo), B5 (escala body), B7-B11 (tipografía sin escala), B13 (font-features alcance). Validación G3 parcial en `/styleguide` confirma todos los cambios visualmente y mediante Contrast Checker en runtime. Mejora real medida: `--primary-foreground/--primary` de 3.23:1 a 5.80:1 (AA Large → AA), elimina fail accesibilidad en CTA primary | En G3 final si evidencia visual nueva durante sub-tareas 2-3 |
| D34 | 2026-04-30 | **Patrones de componentes DS (cierre Fase 3 sub-tarea 2).** Cuatro decisiones de arquitectura: D34-1 componente `<Heading level={1-6}>` semántico con `visualLevel` para override visual sin perder semántica + `eyebrow` para `level={6}` (encapsula tipografía DS). D34-2 Button shadcn ampliado con 4 variantes custom (primary, accent, outline-primary, ghost-accent) vía CVA + prop `glow` opcional restringido a primary, sin tocar variants legacy. D34-3 `FeatureCard` como wrapper de shadcn Card (no fork) con `shadow-ring-accent` y hover lift `translateY(-0.5)`. D34-4 script anti-flash síncrono en `<head>` de `index.html` aplica `class="dark"` antes de hidratación React, complemento defensivo de `<ThemeProvider defaultTheme="dark">`. Sub-decisión documental D34-5: DT-16 re-clasificado a Fase 5 tras detectar uso vivo de `--cta` en 15 archivos legacy. Observaciones no bloqueantes registradas: O1 (`glow` visualmente imperceptible en `/styleguide`, validación real en CTA hero Fase 5) + O2 (`disabled` sobre primary se ve marrón por `disabled:opacity-50` default shadcn, comportamiento estándar no regresión) | Componentes encapsulados garantizan invariantes del DS (tipografía correcta automáticamente, glow nunca aplicado a variantes equivocadas). Wrapper de Card respeta upstream shadcn updates. Anti-flash defensivo aunque next-themes ya cubre la hidratación, protege ante navegadores no-Chromium en producción. Validación G3 parcial sub-tarea 2 visual + Playwright timing test pasados | En G3 final si evidencia visual nueva durante sub-tarea 3 |

### Pendientes de cerrar

| # | Pendiente | Bloquea | Quién resuelve |
|---|---|---|---|
| ~~Q01~~ | ~~Target formulario contacto~~ | ~~Fase 5.4~~ | **Resuelta 2026-04-19** → D30 (WhatsApp + email fallback) |
| ~~Q02~~ | ~~Confirmar dark mode default~~ | ~~Fase 3~~ | **Resuelta 2026-04-19** → D29 (confirmado) |
| ~~Q03~~ | ~~Confirmar flip orange→primary~~ | ~~Fase 3~~ | **Resuelta 2026-04-19** → D29 (confirmado) |
| ~~Q04~~ | ~~About existente o redactar desde cero~~ | ~~Fase 5.3~~ | **Resuelta 2026-04-19** → CONTENT.md §3.6 (redactado nuevo, fusiona About + WhyUs como `home.about.*`) |
| Q05 | Banner cookies en repo actual | Fase 5 legal | Auditoría Fase 2 |
| ~~Q06~~ | ~~Confirmar pairing Playfair + Inter~~ | ~~Fase 3~~ | **Resuelta 2026-04-19** → D29 (confirmado) |
| ~~Q07~~ | ~~Confirmar "Editorial Structural"~~ | ~~Fase 3~~ | **Resuelta 2026-04-19** → D29 (confirmado) |
| ~~Q08~~ | ~~Formato WhatsApp en Contact~~ | ~~Fase 5.4~~ | **Resuelta 2026-04-19** → D30 (`wa.me/{VITE_WHATSAPP_NUMBER}` con mensaje prefilled) |
| ~~Q09~~ | ~~Puerto dev 8080 vs 5173~~ | ~~Fase 0~~ | **Resuelta 2026-04-19** → D26 (5173 estándar) |
| ~~Q10~~ | ~~`src/components/portfolio/` no existe~~ | ~~Fase 1~~ | **Resuelta 2026-04-19** → D27 (módulo distribuido, ahora reorganizado en subdirectorios temáticos por D31) |

---

## 14. Glossary

- **DS:** Design System.
- **CWV:** Core Web Vitals.
- **RLS:** Row Level Security (Supabase).
- **SECURITY DEFINER:** función PostgreSQL con permisos del creador.
- **O.D.A.:** Objective, Data, Architecture.
- **Sprint 1 / Sprint 2:** capa pública / autenticada.
- **AGENT.md:** instrucciones permanentes agentes IA del repo.
- **CLAUDE.md:** contexto auditoría seguridad puntual.

---

## 15. Change log

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-18 | Miguel + Claude Opus 4.7 | Documento inicial |
| 1.1 | 2026-04-18 | Miguel + Claude Opus 4.7 | Integración AGENT.md y CLAUDE.md. Resolución conflictos tipografía, motion, branch. Dirección "Editorial Structural". Secciones 9 (testing), 10.3-10.4 (TS/env), 11.4 (commits). D10-D14 y Q06-Q08. |
| 1.2 | 2026-04-18 | Miguel + Claude Opus 4.7 | Evaluación pack getdesign/framer. Nueva sección §3.9 con 7 aportes técnicos V1-V7. Updates quirúrgicos en §3.1 (shadows con `--shadow-ring-accent` y multi-layer `--shadow-strong`) y §3.2 (OpenType features de Inter). D22-D23 añadidas en §13. Pack descartado como dirección global, razonamiento archivado. |
| 1.3 | 2026-04-19 | Miguel + Claude Opus 4.7 | Cierre Fase 0. §5.2 reescrita con estructura real del repo + tabla de divergencias vs v1.2 (scripts/, portfolio/, layout/, sections/, lib/supabase.ts, lib/motion.ts, types/ inexistentes). §5.3 ampliada con estado actual vs objetivo de rutas. §5.5 corregida (VITE_SUPABASE_PUBLISHABLE_KEY). §6.3 redefinida como módulo distribuido. §7.1 preservación verbatim con lista concreta. Nueva §7.4 Deuda técnica con 14 items DT-01 a DT-14. D26-D28 en §13. Q09-Q10 cerradas. |
| 1.4 | 2026-04-19 | Miguel + Claude Opus 4.7 | Cierre Fase 1. **Pivote de scope D31:** /portfolio y /portfolio-webs entran en rediseño UI completo. §0 deadline eliminado (proyecto orientado a aprendizaje). §1.2 sin fechas duras. §1.3 non-goal "no rehacer portfolio" marcado obsoleto. §1.4 punto 4 marcado obsoleto, añadidos puntos 10-12 con D29-D31 confirmadas. §6.3 reescrita completamente como rediseño UI (no más "preservación verbatim"). §7.1 clasificación actualizada con CREAR + DIFERIR como nuevas categorías y referencias a MIGRATION.md. §7.4 actualizada con DT-15 (huérfanas i18n) + estado "plan confirmado" en items con resolución natural ya prevista. §13 D29 (confirmación dark mode + flip + tipografía + Editorial Structural), D30 (WhatsApp + email fallback), D31 (pivote scope con sub-decisiones D31.1-D31.4), D32 (validación estética pre-Antigravity). Q01-Q04, Q06-Q08 cerradas. CONTENT.md y MIGRATION.md añadidos al sistema documental. |
| 1.5 | 2026-04-30 | Miguel + Claude Opus 4.7 | Cierre G3 parcial (Fase 3 sub-tarea 1). §3.1 Color Tokens reescrita completa: `--primary-foreground` = `220 30% 8%` en ambos modos (D33-7), nuevos tokens `--success` y `--warning` (D33-1) con hue 45 ámbar para diferenciar de primary, `--gradient-hero` reformulado a radial off-center variante B (D33-2), `--shadow-primary-glow` opacidad 0.18 con restricción de uso (D33-3), tabla de contraste WCAG validada con mediciones reales del Contrast Checker, focus states canónicos `:focus-visible` documentados (B6). §3.2 Typography reescrita completa: escala 1.333 con `clamp()` en H1-H3 + breakpoints en H4-H6 (D33-5), tabla completa de tamaños/line-heights/tracking/weights validados en `/styleguide`, override Playfair weight 800 en dark mode (D33-6), `.prose-editorial` con lista cerrada de uso (D33-F4), `font-feature-settings` movido a `:root` para herencia universal (B13), preload de Playfair weights en `index.html`. §7.4 nueva entrada DT-16 (token `--cta` huérfano detectado por Antigravity, resolución en sub-tarea 2). §13 nueva entrada D33 con sub-decisiones D33-1 a D33-7. |
| 1.6 | 2026-04-30 | Miguel + Claude Opus 4.7 | Cierre Fase 3 sub-tarea 2 (G3 parcial sub-tarea 2 firmado). §3.6 Variantes personalizadas reescrita: corrección crítica del color del texto en variant `primary` (oscuro `220 30% 8%` post-D33-7, NO blanco), prop `glow` documentado con restricción D33-3, FeatureCard como wrapper documentado, Heading semántico documentado. §7.4 fila DT-16 re-clasificada: re-cataloging tras grep en Step 5 (token `--cta` no era huérfano, está activo en 15 archivos legacy). Resolución diferida a Fase 5 (coherente con D28). §13 nueva entrada D34 con sub-decisiones D34-1 a D34-5 + observaciones O1/O2 no bloqueantes. |