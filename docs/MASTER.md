# MASTER.md â€” Studio Pixelens Redesign Specification

> **Single source of truth** del rediseÃ±o completo de studiopixelens.com.
> Todo brief O.D.A. hacia Antigravity debe partir de este documento.
> Si un brief contradice el MASTER, el MASTER gana.
>
> **Coexistencia obligatoria con otros documentos del repo:**
> - `AGENT.md`: instrucciones operativas para cualquier agente IA en el repo.
>   Vive en la raÃ­z. Se lee SIEMPRE junto a MASTER.md.
> - `CLAUDE.md`: scoped a auditorÃ­a de seguridad puntual. No guÃ­a el rediseÃ±o.
>
> Donde MASTER.md y AGENT.md difieran, la secciÃ³n 1.6 "ReconciliaciÃ³n con AGENT.md"
> fija la resoluciÃ³n aplicable.

---

## 0. Meta

| Campo | Valor |
|---|---|
| Proyecto | Studio Pixelens Redesign v2 |
| Nombre interno | Pixel Lens Craft (segÃºn CLAUDE.md) |
| Nombre pÃºblico | Studio Pixelens |
| Owner | Miguel Louwagie Sapena |
| VersiÃ³n | 2.1 (May 13, 2026) â€” cierre Subfase 5.4 Contact form REBUILD, D39-1 a D39-9, HomeContact.tsx canÃ³nico, DT-01 cerrado 7/7, DT-17 abierto (namespace pricing.* legacy a auditar en 5.5) |
| Estado | Draft, pendiente de validaciÃ³n humana |
| Deadline interno | Sin deadline (proyecto orientado a aprendizaje, revisado D32) |
| Deadline duro | Sin deadline duro |
| Timezone base | Europe/Madrid |
| Repo branch trabajo | `redesign/v2-framer-base` (creada desde `dev`) |
| Dominio producciÃ³n | studiopixelens.com |
| Dominio staging | studiopixelens-v2.pages.dev (Cloudflare Pages) |

---

## 1. Project Overview

### 1.1 MisiÃ³n

Reescribir la UI completa de studiopixelens.com aplicando una sÃ­ntesis entre dos direcciones complementarias: la **disciplina estructural** de Framer (motion-first, tipografÃ­a grande, jerarquÃ­a limpia, layouts impecables) y el **alma editorial/luxury** exigida por AGENT.md (personalidad fotogrÃ¡fica y cinematogrÃ¡fica, refinamiento de revista, tratamiento premium de imÃ¡genes). Todo ello preservando la identidad cromÃ¡tica naranja-azul de la marca y manteniendo el mÃ³dulo de portfolio actual intacto.

### 1.2 Scope (dos sprints secuenciales)

**SPRINT 1 (en curso, desde Apr 18):** capa pÃºblica, rediseÃ±o UI completo (D31).
- Home, /portfolio, /portfolio-webs, Contacto integrado en Home, Legal (privacidad, cookies, tÃ©rminos)
- Portfolios **rediseÃ±ados** (no preservados verbatim â€” supersede D01 en UI).
- SEO, performance, i18n paridad
- Sin deadline duro. Ritmo dictado por ventanas de cuota Pro y validaciÃ³n humana.

**SPRINT 2 (posterior, sin fecha comprometida):** capa autenticada.
- Login / registro (`/auth` ya existe en el repo)
- SelecciÃ³n de paquetes
- Upload de fotos
- Tracking de Ã³rdenes
- Sistema de re-ediciones
- Vista de historial

### 1.3 Non-goals

- No migrar a otro framework (mantiene Vite + React + TypeScript)
- No cambiar de backend (Supabase se queda)
- ~~No rehacer GSAP ni portfolio (lift-and-shift)~~ **OBSOLETO por D31 (2026-04-19):** el portfolio ahora entra en rediseÃ±o UI completo. Se preserva la lÃ³gica reutilizable (mÃ³dulos tÃ©cnicos en `src/integrations/`, `src/lib/`, `src/contexts/`, `src/hooks/`), pero la UI de /portfolio y /portfolio-webs se reescribe. GSAP sigue siendo la librerÃ­a de motion Ãºnica.
- No aÃ±adir features nuevas. Solo rediseÃ±o UI + saneamiento tÃ©cnico progresivo (Â§7.4).
- No cambiar URLs pÃºblicas (preservar SEO)
- No cambiar modelo de pricing ni lÃ³gica de negocio
- No migrar la librerÃ­a de motion (GSAP se queda, pese a menciÃ³n en AGENT.md)

### 1.4 Decisiones cerradas

1. Stack actual se mantiene Ã­ntegro.
2. Orange se convierte en `--primary`, Blue en `--accent/--secondary`. Flip completo (D02 + D29).
3. Dark mode pasa a ser el modo por defecto. Light mode sigue disponible via `next-themes` (D03 + D29).
4. ~~Portfolio es intocable. Se importa como mÃ³dulo aislado con sus dependencias.~~ **OBSOLETO por D31 (2026-04-19):** /portfolio y /portfolio-webs entran en rediseÃ±o UI completo. Se preserva solo lÃ³gica reutilizable (no UI).
5. Host destino: Cloudflare Pages.
6. EjecuciÃ³n en Antigravity con extensiÃ³n Claude Code. PlanificaciÃ³n en claude.ai Pro.
7. Branch de trabajo: `redesign/v2-framer-base` creada desde `dev`. Nunca desde `main`.
8. LibrerÃ­a de motion Ãºnica: GSAP 3.13.
9. TipografÃ­a: pairing Playfair Display (display) + Inter (body/UI). ResoluciÃ³n de conflicto con AGENT.md (D11 + D29).
10. **DirecciÃ³n "Editorial Structural"** confirmada como estÃ©tica definitiva (D29). No hay pivot a Framer puro ni a editorial puro.
11. **Contacto vÃ­a WhatsApp + email fallback** (D30). Formulario web envÃ­a a `wa.me/{VITE_WHATSAPP_NUMBER}` con mensaje pre-formateado. Email `studiopixelens@gmail.com` visible como alternativa. No se usa Supabase como target (rompe freeze Sprint 1).
12. **ValidaciÃ³n estÃ©tica por owner antes de ejecuciÃ³n Antigravity** (D32). Cada brief O.D.A. crÃ­tico de UI requiere visto bueno conceptual de Miguel en chat antes de pasar a Claude Code. Evita repetir el patrÃ³n cinematic-v2.

### 1.5 DirecciÃ³n estÃ©tica: "Editorial Structural"

El rediseÃ±o no es Framer puro ni revista editorial pura. Es una sÃ­ntesis deliberada:

| Capa | InspiraciÃ³n | ManifestaciÃ³n |
|---|---|---|
| Layout y grid | Framer | Disciplina estructural, generoso whitespace, jerarquÃ­a clara |
| Motion | Framer | Entradas orquestadas, reveals en scroll, hover intencional |
| TipografÃ­a | AGENT.md editorial | Playfair Display en H1/H2, Inter en body |
| Color | Identidad propia | Naranja vibrante primary + azul accent sobre fondo oscuro |
| Tratamiento fotogrÃ¡fico | AGENT.md cinematogrÃ¡fico | Full-bleed, vignette sutil, overlays con gradiente |
| ComposiciÃ³n | AGENT.md | AsimetrÃ­a puntual, grid-breaking en hero, diagonal flow donde aporte |

**Anti-patrones prohibidos** (de AGENT.md, se adoptan Ã­ntegros):
- Gradiente purple/blue sobre blanco.
- Cards shadcn con `shadow-md` por defecto sin modificar.
- Hero centrado con tÃ­tulo + subtÃ­tulo + botÃ³n verde (patrÃ³n SaaS genÃ©rico).
- Iconos Lucide sueltos sin integraciÃ³n en un sistema visual coherente.
- SecciÃ³n "Features" con 3 columnas icono + texto.

### 1.6 ReconciliaciÃ³n con AGENT.md

AGENT.md vive en la raÃ­z del repo y es leÃ­do automÃ¡ticamente por Claude Code. Para evitar instrucciones contradictorias a los agentes, esta tabla fija las resoluciones:

| Tema | AGENT.md dice | MASTER.md resuelve | JustificaciÃ³n |
|---|---|---|---|
| TipografÃ­a | "NEVER use Inter" | Playfair Display H1/H2 + Inter body/UI | Compromiso que honra editorial en cabeceras crÃ­ticas sin sacrificar clean UI y performance |
| Motion library | "Use the Motion library" | GSAP se mantiene | GSAP estÃ¡ en package.json, portfolio depende. MenciÃ³n de AGENT.md se interpreta como concepto |
| Branch | `dev` working, nunca `main` | Cumplido. Branch rebuild creada desde `dev` | Sin conflicto |
| Tone | Professional, elegant, bold | Adoptado literal | Sin conflicto |
| ComposiciÃ³n | AsimÃ©trica, grid-breaking | Adoptado | Sin conflicto |
| LCP | < 2.5s | < 2.5s techo, < 2.0s objetivo | Alineado con matiz |

Si un agente detecta conflicto adicional no listado aquÃ­, debe parar y escalar a Miguel antes de actuar.

---

## 2. Brand Identity

### 2.1 Nombre y claim

- **Nombre pÃºblico:** Studio Pixelens
- **Nombre interno repo:** Pixel Lens Craft
- **Claim hero (ES):** Transformamos la imagen digital de tu negocio
- **Claim hero (EN):** Digital identity crafted with precision
- **DescripciÃ³n corta:** Agencia digital local especializada en pÃ¡ginas web y fotografÃ­a profesional para PYMEs de DÃ©nia, JÃ¡vea, Ondara y la Marina Alta.

### 2.2 Tone of voice

Adoptado de AGENT.md con precisiÃ³n:

- **Professional, elegant, bold.**
- Transmite **artistic confidence, not generic polish**.
- Directo, tÃ©cnicamente preciso, sin jerga vacÃ­a ni marketing inflado.
- Orientado a resultados, respeta el tiempo del cliente (PYME, no puede perder horas).

### 2.3 Idiomas soportados

- EspaÃ±ol (es_ES): idioma principal.
- InglÃ©s (en): secundario. Paridad de contenido obligatoria.

Stack ya incluye `i18next` + `react-i18next` + carpeta `src/i18n/`. No se aÃ±aden idiomas en Sprint 1.

---

## 3. Design System

### 3.1 Color Tokens

Todos los valores en HSL (obligatorio por convenciÃ³n actual).

#### Light mode (`:root`)

| Token | Valor HSL | Hex aprox | Rol |
|---|---|---|---|
| `--background` | `220 20% 98%` | `#F7F8FA` | Fondo dominante 60% |
| `--foreground` | `217 19% 27%` | `#384457` | Texto principal |
| `--primary` | `20 91% 48%` | `#EA550B` | **NARANJA. CTAs, acciones primarias, energÃ­a** |
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
| `--warning` | `45 92% 48%` | `#EFB80E` | **NUEVO (D33-1).** Ãmbar hue 45, distinguible de primary hue 20 |
| `--warning-foreground` | `220 30% 8%` | `#0E121B` | Texto oscuro sobre Ã¡mbar |
| `--radius` | `0.5rem` | â€” | Radio base |

#### Dark mode (`.dark`, **default**)

| Token | Valor HSL | Hex aprox | Rol |
|---|---|---|---|
| `--background` | `220 30% 6%` | `#0B0F16` | Fondo oscuro editorial |
| `--foreground` | `0 0% 98%` | `#FAFAFA` | Texto principal |
| `--primary` | `20 91% 52%` | `#EE6818` | Naranja ligeramente mÃ¡s brillante |
| `--primary-foreground` | `220 30% 8%` | `#0E121B` | Texto oscuro sobre naranja (D33-7) |
| `--accent` | `221 68% 55%` | `#3A63C5` | Azul mÃ¡s claro para contraste |
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

> `--info` no existe como token. Se reusa `--accent` (azul) para mensajes informativos. DecisiÃ³n D33-1.

#### Tabla de contraste WCAG validada (Fase 3 sub-tarea 1, dark mode)

Mediciones reales del Contrast Checker en `/styleguide` con tokens finales post-hot-fix:

| Par | Ratio | Rating | Uso recomendado |
|---|---|---|---|
| `--foreground` / `--background` | 18.52:1 | AAA | Texto principal sin restricciones |
| `--muted-foreground` / `--background` | 7.65:1 | AAA | Texto secundario sin restricciones |
| `--card-foreground` / `--card` | 17.49:1 | AAA | Texto en cards sin restricciones |
| `--primary` / `--background` | 6.00:1 | AA | Surfaces accent (CTAs, badges, icons) o large text. **NO** body text |
| `--primary-foreground` / `--primary` | 5.80:1 | AA | Texto sobre superficies naranja. Cualquier tamaÃ±o normal |
| `--accent` / `--background` | 4.17:1 | AA Large | **Solo** superficies grandes. NO texto de pÃ¡rrafo |
| `--accent-foreground` / `--accent` | 4.64:1 | AA | Texto sobre azul, cualquier tamaÃ±o normal |
| `--destructive-foreground` / `--destructive` | 5.77:1 | AA | Texto sobre rojo, cualquier tamaÃ±o normal |
| `--success-foreground` / `--success` | 7.34:1 | AAA | Texto sobre verde sin restricciones |
| `--warning-foreground` / `--warning` | 11.96:1 | AAA | Texto sobre Ã¡mbar sin restricciones |

#### Gradients

| Token | DefiniciÃ³n | Uso |
|---|---|---|
| `--gradient-primary` | `linear-gradient(135deg, hsl(var(--primary)), hsl(20 91% 55%))` | CTAs premium |
| `--gradient-accent` | `linear-gradient(135deg, hsl(var(--accent)), hsl(221 68% 45%))` | Secciones tech |
| `--gradient-hero` | `radial-gradient(ellipse 50% 40% at 70% 20%, hsla(var(--accent), 0.13), transparent 70%)` | Hero principal. **Variante B confirmada en G3 parcial** (D33-2). Anchor off-center top-right, asimetrÃ­a coherente con AGENT.md |

> **Nota operativa:** durante Fase 3 sub-tarea 1, `/styleguide` contiene ambas variantes A (80%Ã—60% al 10%) y B (50%Ã—40% al 13%) como referencia visual. La variante A se mantiene en cÃ³digo como `--gradient-hero` por defecto hasta que se construya el Hero en Fase 5, momento en que se aplicarÃ¡ la variante B definitiva. La aplicaciÃ³n fÃ­sica del cambio se difiere para evitar commits de Ãºltima hora durante Fase 3.

ProhibiciÃ³n explÃ­cita (AGENT.md): gradientes purple/blue sobre fondo claro. Prohibido sin excepciones.

#### Shadows

| Token | DefiniciÃ³n | Uso |
|---|---|---|
| `--shadow-soft` | `0 2px 8px hsla(var(--accent), 0.08)` | ElevaciÃ³n baja, hover sutil |
| `--shadow-medium` | `0 4px 16px hsla(var(--accent), 0.12)` | Cards estÃ¡ndar |
| `--shadow-strong` | `0 0.5px 0 0.5px hsla(0, 0%, 100%, 0.1), 0 10px 30px hsla(220, 30%, 0%, 0.25)` | Elevated cards, multi-layer con highlight superior + ambient profundo (aporte V7 de getdesign) |
| `--shadow-ring-accent` | `0 0 0 1px hsla(var(--accent), 0.15)` | Containment de cards y bordered surfaces sobre fondo oscuro (aporte V3 de getdesign) |
| `--shadow-primary-glow` | `0 0 40px hsla(var(--primary), 0.18)` | **Restringido (D33-3).** Solo CTA hero principal (uno por pÃ¡gina) y CTA de cierre de secciÃ³n final |

Reglas adicionales:
- **Nunca usar `shadow-md` de shadcn sin modificar**. Toda card debe tener shadow custom coherente.
- `--shadow-ring-accent` es la tÃ©cnica canÃ³nica para delinear cards sobre fondos oscuros sin bordes sÃ³lidos. Usa el color accent (azul) a opacidad 0.15 para crear contenciÃ³n visible pero no agresiva.
- `--shadow-strong` incorpora multi-layer: un highlight blanco sutil en el top edge simula luz incidente, el ambient profundo da sensaciÃ³n de flotaciÃ³n. No usar en cards estÃ¡ndar, reservar para elementos con jerarquÃ­a alta.
- **`--shadow-primary-glow` uso prohibido en**: outline-primary, ghost-accent, botones secundarios, botones dentro de cards, badges, links inline.

#### Focus states canÃ³nicos

PatrÃ³n global aplicado en `src/index.css` dentro de `@layer base` (cierra brecha B6):

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
- **Body y UI (H3+, pÃ¡rrafos, botones, nav, inputs):** Inter. Weights 400-900.

**Carga en `index.html`** (con preload para reducir FOUT):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&display=swap" />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet" />
```

`font-display: swap` se mantiene como estrategia. OptimizaciÃ³n con `size-adjust` / `ascent-override` queda diferida a Fase 6 si Lighthouse marca CLS > 0.05 atribuible a FOUT.

**ConfiguraciÃ³n Tailwind (`tailwind.config.ts > theme.extend`):**

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

**Tabla resumen de tamaÃ±os y rasgos** (validados en `/styleguide` G3 parcial):

| Nivel | TamaÃ±o nominal (md) | clamp / responsive | line-height | letter-spacing | weight | Family |
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

RazÃ³n: weight 900 en dark satura visualmente cuando convive con CTA naranja, subtÃ­tulos Inter y otros elementos. Weight 800 mantiene presencia editorial sin ahogar elementos circundantes. Light mode sigue en 900 (default Tailwind, sin override).

**OpenType features Inter (D25 + B13):**

`font-feature-settings` en `:root` para herencia universal:

```css
:root {
  font-feature-settings: "cv01", "cv05", "cv09", "cv11", "ss03", "ss07";
}
```

Efecto: glifos alternativos mÃ¡s refinados (a, g, l, 0, %, &), separaciÃ³n estilÃ­stica en nÃºmeros y caracteres tÃ©cnicos. Subtle pero acumulativo, aporta pulido editorial a texto pequeÃ±o sin coste perceptual. H3-H6 (Inter) heredan automÃ¡ticamente. H1-H2 (Playfair) ignoran las features sin coste.

**`.prose-editorial` aplicaciÃ³n (D33-F4, lista cerrada):**

Solo en estos contextos. Ampliar la lista requiere D nueva.

- `home.about.body` (descripciÃ³n larga secciÃ³n About en home).
- `home.hero.subtitle` (subtÃ­tulo del hero, si supera 2 lÃ­neas).
- Descripciones de casos en `/portfolio` y `/portfolio-webs` (campo `case.description`).
- Cuerpo de pÃ¡ginas legales (`/legal/*`).

Resto del sitio: `text-body` (16px).

**Reglas de uso (sÃ­ntesis):**
- H1 Ãºnico por pÃ¡gina.
- Max width pÃ¡rrafo: 65ch.
- Body 17px (`.prose-editorial`) reservado a pÃ¡rrafos largos.

**Prohibiciones:**
- No uppercase abuse (solo badges y botones pequeÃ±os).
- No italics en body.
- No fuentes decorativas adicionales.

**Nota conflicto AGENT.md:** AGENT.md prohÃ­be Inter categÃ³ricamente. Esta especificaciÃ³n usa Playfair Display (recomendada por AGENT.md) en H1/H2 y mantiene Inter en el resto. ResoluciÃ³n en secciÃ³n 1.6.

### 3.3 Spacing & Layout

- Container: ya definido (padding 2rem, max 1400px en 2xl).
- Section padding vertical: `py-20 md:py-28 lg:py-32`.
- Grid default: 12 columnas.
- Gap estÃ¡ndar entre cards: `gap-6 lg:gap-8`.

**Principios de composiciÃ³n (AGENT.md):**
- AsimetrÃ­a en hero y about (no todo centrado).
- Overlapping puntual (foto que sobresale de card, tÃ­tulo que rompe columna).
- Grid-breaking en momentos clave.
- Generous negative space en hero y about.
- Full-bleed photography donde sea relevante.

### 3.4 Motion Principles

**LibrerÃ­a Ãºnica:** GSAP 3.13 + `@gsap/react`.

**ResoluciÃ³n AGENT.md:** "Use the Motion library" se interpreta como referencia conceptual, no librerÃ­a especÃ­fica. GSAP se mantiene.

**Reglas:**
1. MÃ¡ximo 2 tipos de animaciÃ³n por pÃ¡gina.
2. DuraciÃ³n 300-600ms. Nunca superar 800ms.
3. Easing estÃ¡ndar: `cubic-bezier(0.4, 0, 0.2, 1)`.
4. Respetar `prefers-reduced-motion` siempre.
5. Si una animaciÃ³n rompe LCP o CLS, se elimina.
6. No micro-interacciones sin propÃ³sito.

**Patrones canÃ³nicos (AGENT.md):**
- Entrada de pÃ¡gina orquestada con stagger `animation-delay`.
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

AcciÃ³n Fase 2: auditar uso real con `depcheck`, eliminar huÃ©rfanos. Target reducciÃ³n bundle >= 40KB gzip.

### 3.6 Variantes personalizadas obligatorias

**Button (implementadas en sub-tarea 2, commit `adc8b02`):**
- `primary`: naranja sÃ³lido, **texto oscuro `--primary-foreground` (220 30% 8%, post-D33-7)**. `hover:bg-primary/90`, `active:scale-[0.985]`.
- `accent`: azul sÃ³lido, blanco. `hover:bg-accent/90`, `active:scale-[0.985]`.
- `outline-primary`: borde naranja 2px, transparente, texto naranja. `hover:bg-primary/10`, `active:scale-[0.985]`.
- `ghost-accent`: texto azul, transparente. `hover:bg-accent/10`, `active:scale-[0.985]`.

**Prop `glow` opcional** (D33-3): aplica `--shadow-primary-glow` solo en `variant="primary"`. RestricciÃ³n de uso: CTA hero principal (uno por pÃ¡gina) y CTA cierre de secciÃ³n final. Otras combinaciones disparan warning de consola.

**Card variant `feature` (implementada en sub-tarea 2, commit `1648246`):** componente `FeatureCard` en `src/components/ui/feature-card.tsx` envuelve shadcn `Card` con `--shadow-ring-accent` (containment azul al 15%) y hover `translateY(-0.5)` + `--shadow-medium`. Prop `static={true}` desactiva hover para uso decorativo.

**Heading semÃ¡ntico (implementado en sub-tarea 2, commit `9684c0f`):** componente `<Heading level={1-6}>` en `src/components/ui/heading.tsx` aplica tamaÃ±o + family + weight segÃºn escala Â§3.2. Props auxiliares: `visualLevel` para override visual sin perder semÃ¡ntica HTML, `eyebrow` para rol label en `level={6}`.

### 3.7 IconografÃ­a

- **Lucide React** Ãºnica librerÃ­a.
- TamaÃ±o default 20px. Hero 24-32px.
- Stroke width 1.75.
- **Nunca iconos sueltos sin integrar** en sistema visual coherente.

### 3.8 Tratamiento fotogrÃ¡fico (AGENT.md)

- Fotos del portfolio con tratamiento cinematogrÃ¡fico: overlay sutil, vignette ligera, gradient-on-hover.
- Full-bleed edge-to-edge donde posible.
- Nunca fondo sÃ³lido plano: texture sutil, grain overlay, mesh gradient o shadows dramÃ¡ticos.
- ImÃ¡genes con `aspect-ratio` fijo en CSS (anti-CLS).

### 3.9 Anexos tÃ©cnicos adoptados de getdesign/framer

El 18-abril-2026 se evaluÃ³ el pack `npx getdesign@latest add framer`. El pack entrega un Ãºnico `DESIGN.md` prescriptivo que describe literalmente framer.com como sitio web. Se descartÃ³ como direcciÃ³n global por conflicto estructural con la identidad de Studio Pixelens (ver D22 en Â§13). Se extrajeron 7 aportes tÃ©cnicos neutrales que se integran aquÃ­ sin reabrir decisiones cerradas.

#### V1. Escala de spacing canÃ³nica

Base 8px. Escala permitida en px:

```
1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 30, 35
```

Valores fuera de esta escala requieren justificaciÃ³n. Tailwind config ya soporta valores arbitrarios, la escala aplica a decisiones de spacing no automatizadas. Section padding sigue la regla existente `py-20 md:py-28 lg:py-32` (que ya encaja: 80px / 112px / 128px, todos mÃºltiplos o variaciones coherentes).

#### V2. OpenType features en Inter

Integrado en Â§3.2.

#### V3. Ring shadows para containment

Integrado en Â§3.1 como `--shadow-ring-accent`. PatrÃ³n canÃ³nico para cards sobre fondos oscuros.

#### V4. Scale transition value en hover de cards

Valor canÃ³nico para hover scale de cards interactivas: `transform: scale(0.985)` en press, `scale(1.0)` en rest, `translateY(-2px)` en hover (ya en MASTER Â§3.6 card variant `feature`).

Framer usa `scale(0.85)` para interacciones de press mÃ¡s agresivas. Ajustado a `0.985` por coherencia con la direcciÃ³n editorial mÃ¡s contenida. No adoptar el 0.85 literal.

#### V5. Principio "dense within, spacious between"

Componentes internos con spacing ajustado (line-height tight en displays, padding mÃ­nimo dentro de cards). Espacio externo (entre secciones, entre bloques) generoso y aireado. Aplicar en:
- Hero: tÃ­tulo comprimido (line-height 0.9-1.0, tracking negativo) dentro de un bloque con section padding amplio.
- Cards: padding interno 15-24px, gap entre cards `gap-6 lg:gap-8`.
- Secciones: `py-20 md:py-28 lg:py-32` como mÃ­nimo.

#### V6. Border radius por tipo de elemento

Escala canÃ³nica:

| Elemento | Radius |
|---|---|
| Micro-elementos, precision edges | 1px |
| Small UI (badges, thumbnails) | 4-6px |
| Inputs, buttons estÃ¡ndar | 8px (`--radius` default) |
| Cards, product screenshots | 10-12px |
| Large containers, feature cards | 15-20px |
| Navigation pills secundarias | 30-40px |

**Rechazo explÃ­cito:** pills 100px radius en CTAs principales (D23). La direcciÃ³n Editorial Structural de MASTER Â§1.5 rechaza el look SaaS-pill moderno en favor de radios moderados que leen mejor en contexto editorial.

#### V7. Multi-layer shadow para elevated cards

Integrado en Â§3.1 como `--shadow-strong`. Highlight blanco 0.5px top edge + ambient oscuro 10px 30px.

#### Lo NO adoptado del pack (razonado en D22)

- **`#000000` puro como fondo**: MASTER Â§3.1 mantiene `220 30% 6%` (`#0B0F16`) azulado oscuro. El negro puro es agresivo y plano, el azulado editorial da profundidad cinematogrÃ¡fica.
- **Framer Blue `#0099ff` como accent Ãºnico**: colisiÃ³n directa con el flip naranja/azul de D02. Naranja es primary y no se renuncia.
- **GT Walsheim**: tipografÃ­a de pago innecesaria. Playfair Display cumple el rol display con mÃ¡s personalidad editorial y es gratis.
- **"No decorative imagery, no icons"**: incompatible con portfolio fotogrÃ¡fico cinematogrÃ¡fico y con sistema Lucide de Â§3.7. Se rechaza.
- **Pills 100px en CTAs**: ver V6 y D23.
- **ProhibiciÃ³n de gradientes**: MASTER Â§3.1 define 3 gradientes controlados. Se mantienen.

---

## 4. Content Inventory

### 4.1 Servicios

| Servicio | Resumen | Target |
|---|---|---|
| DiseÃ±o Web Profesional | PÃ¡ginas web modernas, rÃ¡pidas, responsive, SEO | PYMEs Marina Alta |
| FotografÃ­a Corporativa | Empresas, producto, inmobiliaria, personal branding | Negocios locales |
| Desarrollo a Medida | React, aplicaciones web, integraciones | Clientes tÃ©cnicos |
| EdiciÃ³n FotogrÃ¡fica (SaaS) | Paquetes por volumen, re-ediciones incluidas | FotÃ³grafos, ecommerce |

### 4.2 Paquetes ediciÃ³n (Supabase `photo_packages`)

| Paquete | Fotos | Precio/foto | Total | Descuento |
|---|---|---|---|---|
| Pack Prueba | 1 | 0.00 â‚¬ | 0.00 â‚¬ | â€” |
| Pack BÃ¡sico | 5 | 2.00 â‚¬ | 10.00 â‚¬ | 0% |
| Pack EstÃ¡ndar | 10 | 1.80 â‚¬ | 18.00 â‚¬ | 10% |
| Pack Premium | 20 | 1.50 â‚¬ | 30.00 â‚¬ | 25% |
| Pack Profesional | 50 | 1.20 â‚¬ | 60.00 â‚¬ | 40% |

Hasta 3 re-ediciones gratuitas por foto.

### 4.3 SEO actual (preservar + ampliar)

| Campo | Valor |
|---|---|
| Title actual | Studio Pixelens - FotografÃ­a Profesional & Desarrollo Web |
| Description | Studio Pixelens: DiseÃ±o web y fotografÃ­a profesional en DÃ©nia. Elevamos la imagen de tu empresa con webs rÃ¡pidas y fotos impactantes. Â¡Contacta hoy! |
| Keywords primarias | fotografÃ­a profesional EspaÃ±a, diseÃ±o web pymes, fotÃ³grafo corporativo, agencia web DÃ©nia, diseÃ±o web DÃ©nia, fotografÃ­a empresarial Marina Alta |
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

**Formularios y validaciÃ³n:**
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
- `sonner`, `date-fns`, `react-compare-slider`, `embla-carousel-react`, `class-variance-authority`, `clsx`, `tailwind-merge`

### 5.2 Estructura de carpetas

**Estructura actual del repo (verificada en Fase 0, INVENTORY.md Â§3):**

```
/
â”œâ”€â”€ docs/
â”‚   â”œâ”€â”€ MASTER.md
â”‚   â”œâ”€â”€ PROGRESS.md
â”‚   â”œâ”€â”€ CONTEXT_BRIEF.md
â”‚   â”œâ”€â”€ INVENTORY.md         â† output Fase 0 âœ“
â”‚   â”œâ”€â”€ SECURITY_AUDIT.md    â† ex-CLAUDE.md renombrado (D16)
â”‚   â””â”€â”€ [pendientes]: CONTENT.md, MIGRATION.md, PORTFOLIO_SPEC.md (output Fase 1/2)
â”œâ”€â”€ AGENT.md                 â† instrucciones agente IA, convive con MASTER
â”œâ”€â”€ public/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ main.tsx
â”‚   â”œâ”€â”€ App.tsx
â”‚   â”œâ”€â”€ index.css            â† tokens globales
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ ui/              â† shadcn (48 primitivos)
â”‚   â”‚   â”œâ”€â”€ dashboard/       â† Sprint 2, no tocar
â”‚   â”‚   â”œâ”€â”€ home/            â† secciones Home rebuild Subfase 5.1: Hero, HomeServices, HomeCasesWeb, HomePhotoShowcase, HomeProcess, HomeAbout, Testimonials
â”‚   â”‚   â”œâ”€â”€ layout/          â† chrome global canÃ³nico (D38-1, creada Fase 3 D35, formalizada 5.2): Header, Footer, MobileNav, LanguageToggle, WhatsAppButton
â”‚   â”‚   â””â”€â”€ [custom directos: ScrollToTop, PageLoader]
â”‚   â”œâ”€â”€ pages/
â”‚   â”‚   â”œâ”€â”€ Index.tsx (home)
â”‚   â”‚   â”œâ”€â”€ Portfolio.tsx    â† entry del mÃ³dulo portfolio distribuido
â”‚   â”‚   â”œâ”€â”€ Auth.tsx         â† existente, Sprint 2 lo rediseÃ±a
â”‚   â”‚   â”œâ”€â”€ Dashboard.tsx    â† Sprint 2
â”‚   â”‚   â””â”€â”€ legal/           â† Privacidad.tsx, Cookies.tsx, AvisoLegal.tsx, LegalNotice.tsx
â”‚   â”œâ”€â”€ contexts/
â”‚   â”‚   â””â”€â”€ AuthContext.tsx  â† existente, Sprint 1 no toca
â”‚   â”œâ”€â”€ integrations/
â”‚   â”‚   â””â”€â”€ supabase/        â† client.ts + types.ts generados
â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â””â”€â”€ useSecureNavigation.ts  â† existente
â”‚   â”œâ”€â”€ lib/
â”‚   â”‚   â”œâ”€â”€ utils.ts
â”‚   â”‚   â”œâ”€â”€ security.ts      â† existente, auditado SECURITY_AUDIT.md
â”‚   â”‚   â””â”€â”€ validation.ts    â† existente, auditado SECURITY_AUDIT.md
â”‚   â”œâ”€â”€ i18n/
â”‚   â”‚   â”œâ”€â”€ config.ts
â”‚   â”‚   â””â”€â”€ locales/         â† es.json, en.json
â”‚   â””â”€â”€ data/
â”œâ”€â”€ supabase/
â”‚   â”œâ”€â”€ config.toml
â”‚   â””â”€â”€ migrations/          â† CONGELADO durante Sprint 1
â”œâ”€â”€ index.html
â”œâ”€â”€ tailwind.config.ts
â”œâ”€â”€ vite.config.ts           â† puerto actual 8080, corregir a 5173 en Fase 3 (D26)
â”œâ”€â”€ tsconfig.json
â”œâ”€â”€ package.json
â””â”€â”€ components.json
> **Nota D38-1 (2026-05-12):** versiones anteriores de Â§5.2 prescribÃ­an "mantener estructura plana actual, no reorganizar en Sprint 1". En Fase 3 sub-tarea 3 (D35) se creÃ³ `src/components/layout/` como subcarpeta del chrome global. Validada G3 final 20/20 y G5 parcial 5.2. Formalizada como canÃ³nica a partir de v2.0. AnÃ¡logo a D36-2 (rutas /servicios descartadas como dedicadas) y D35-5 (legal routes planas).

```

**Divergencias conocidas con la estructura original planteada en MASTER v1.2:**

| Planteado en v1.2 | Realidad (Fase 0) | ResoluciÃ³n |
|---|---|---|
| `scripts/with_server.py` | No existe | Crear antes de Fase 6 (motion/tests). Â§7.4 DT-04 |
| `src/components/portfolio/` como carpeta | No existe. Portfolio distribuido en `pages/Portfolio.tsx` + varios componentes sueltos (HorizontalShowcase, ProjectCard, WebPortfolioShowcase, StickyScrollSection) | D27. `PORTFOLIO_SPEC.md` enumera archivos exactos en Fase 1 |
| `src/components/layout/` y `src/components/sections/` | No existen como subcarpetas. Todo plano en `src/components/` | Mantener estructura plana actual, no reorganizar en Sprint 1 |
| `src/lib/supabase.ts` | No existe. Cliente real en `src/integrations/supabase/client.ts` | Sin acciÃ³n, eliminar referencia. Â§16.10 de INVENTORY |
| `src/lib/motion.ts` | No existe | Crear en Fase 6 cuando se centralice motion |
| `src/types/` | No existe. Sin tipos custom globales | Crear en Fase 2 o 3 si surge necesidad real |

**Artefactos a limpiar (Â§16 INVENTORY, Â§7.4 deuda tÃ©cnica):**
- `src/assets_backup/` (18 archivos con espacios, compromete bundle)
- `*.bak`, `*.backup`, `*.temp` en componentes e i18n/
- `src/assetsFotos Portfolio` (nombre anÃ³malo, verificar)

### 5.3 Routing map

**Objetivo Sprint 1** (tabla objetivo confirmada tras Fase 4, G4 firmado 2026-05-03):

| Path | Componente | Sprint | PÃºblico | DescripciÃ³n |
|---|---|---|---|---|
| `/` | `Index` | 1 | SÃ­ | Home como single-page narrativa con 8 secciones (hero, services, cases-web, cases-photo, process, about, testimonials, contact) accesibles por anchors |
| `/portfolio` | `Portfolio` | 1 | SÃ­ | Portfolio fotogrÃ¡fico, 4 bloques editoriales |
| `/portfolio-webs` | `PortfolioWebs` | 1 | SÃ­ | Portfolio desarrollo web, 4 bloques editoriales |
| `/privacidad` | `PrivacyPolicy` | 1 | SÃ­ | RGPD |
| `/cookies` | `CookiesPolicy` | 1 | SÃ­ | PolÃ­tica cookies |
| `/aviso-legal` | `LegalNotice` | 1 | SÃ­ | Aviso legal |
| `/styleguide` | `Styleguide` | 1 | Solo dev | ValidaciÃ³n DS, excluida del bundle prod |
| `/auth` | `Auth` | 2 | SÃ­ | Login / registro (ya existe, intocable Sprint 1) |
| `/dashboard` | `Dashboard` | 2 | Auth | Hub cliente (intocable Sprint 1) |
| `*` | `NotFound` | 1 | SÃ­ | 404 rediseÃ±ada (Fase 4) |

**Modelo anchors-in-Home (D36-2, 2026-05-03):** las rutas `/servicios`, `/sobre`, `/contacto` que versiones previas de MASTER listaban como dedicadas quedan descartadas. Estas Ã¡reas viven como secciones del Home con anchors `/#services`, `/#about`, `/#contact`. El Header navega por anchors. ScrollToTop.tsx escucha cambios de hash y dispara scroll suave (D36-4).

**Legal routes:** Las rutas legales son `/privacidad`, `/cookies`, `/aviso-legal` (planas, sin namespace `/legal/*`). Alineado con realidad del repo desde D35-5.

**Sub-rutas dashboard Sprint 2:** versiones previas planteaban `/dashboard/paquetes`, `/dashboard/subir`, `/dashboard/pedidos`, `/dashboard/pedidos/:id`. La realidad actual del repo implementa Dashboard monolÃ­tico con tabs internas. DecisiÃ³n sobre sub-rutas vs tabs queda diferida a Sprint 2 cuando se rediseÃ±e el dashboard.

### 5.4 State management

- Estado servidor: React Query. Stale-while-revalidate.
- Estado local UI: useState / useReducer.
- Contextos: tema (next-themes) y auth (`AuthContext.tsx`).
- Forms: React Hook Form + Zod.

### 5.5 Backend Supabase (Sprint 1)

Sprint 1 solo lee `photo_packages`. No toca producciÃ³n.

Cliente en `src/integrations/supabase/client.ts`. Env vars reales (verificadas en INVENTORY Â§16.9): `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`.

> Nota: versiones previas de MASTER documentaban `VITE_SUPABASE_ANON_KEY`. El cÃ³digo real usa `VITE_SUPABASE_PUBLISHABLE_KEY`. Valor funcional equivalente, nombre distinto. Mantenemos el nombre del cÃ³digo. `.env.example` debe reflejarlo.

### 5.6 Schema Supabase (referencia)

Tablas: `profiles`, `photo_packages`, `orders`, `photos`, `re_edit_requests`.

Buckets: `original-photos`, `edited-photos` (privados, folder-scoped por UUID).

Funciones SECURITY DEFINER: `handle_new_user()`, `update_updated_at_column()`, `request_photo_re_edit(UUID, TEXT)` con `SELECT FOR UPDATE`.

Seguridad aplicada (migraciÃ³n `20260412184100`): UPDATE en `photos` restringido a `notes`. Trigger `enforce_photo_update_restrictions` bloquea modificaciÃ³n de campos crÃ­ticos.

**CongelaciÃ³n Sprint 1:** no modificar `supabase/migrations/` ni `src/integrations/supabase/`.

---

## 6. Feature Specifications

### 6.1 Home

**Estructura (con asimetrÃ­a, no 3 columnas genÃ©ricas):**
1. Hero con claim en Playfair Display weight 900, subclaim Inter, CTA primario naranja + CTA outline. Fondo oscuro gradient. ComposiciÃ³n asimÃ©trica.
2. Teaser servicios: **prohibido grid 2x2 o 4 cols idÃ©nticas**. Layout editorial con tamaÃ±os variables, o lista con fotos intercaladas.
3. Portfolio teaser: 3-4 proyectos con tratamiento full-bleed y overlay.
4. "Por quÃ© elegirnos": **prohibido 3 cols icono+texto**. Bloques narrativos alternados izq/der con foto de apoyo.
5. Teaser paquetes ediciÃ³n (tabla elegante, sin precios detallados).
6. CTA final fondo naranja sÃ³lido.
7. Footer.

**Motion:** fade-in-up orquestado en hero con stagger, reveal on scroll en cards.

### 6.2 Services

- Hero editorial.
- 4 bloques alternados izq/der con imagen + copy + CTA.
- Tabla detallada paquetes ediciÃ³n.
- FAQ con accordion.
- CTA contacto.

### 6.3 Portfolios (REDISEÃ‘O UI COMPLETO, D31)

**Pivote D31 (2026-04-19):** las pÃ¡ginas `/portfolio` (fotografÃ­a) y `/portfolio-webs` (desarrollo web) se rediseÃ±an UI completa. Supersede el non-goal de Â§1.3 "no rehacer portfolio" y la regla original de "preservaciÃ³n verbatim". Se preserva solo lÃ³gica reutilizable (no UI).

**Realidad estructural confirmada (Fase 0, INVENTORY Â§16.12):** el portfolio no es una carpeta `src/components/portfolio/`. Era un mÃ³dulo distribuido con entry en `src/pages/Portfolio.tsx` y dependencias esparcidas en `src/components/`. Tras el pivote D31, esta estructura distribuida se reorganiza en subdirectorios temÃ¡ticos:

- `src/components/portfolio/` (CREADA en Fase 5.5): componentes de /portfolio fotografÃ­a
- `src/components/portfolio-webs/` (CREADA en Fase 5.5): componentes de /portfolio-webs desarrollo web

Ver `MIGRATION.md` para clasificaciÃ³n archivo por archivo y `CONTENT.md` Â§4 y Â§5 para copy.

**Componentes a DESCARTAR (sustituidos por nuevos editoriales):**
- `src/components/HorizontalShowcase.tsx` (scroll horizontal con FloatingElements 3D)
- `src/components/StickyScrollSection.tsx` (proceso + pricing embebido)
- `src/components/ProjectCard.tsx` (si existe como sub-componente huÃ©rfano)
- `src/components/WebPortfolioShowcase.tsx` (gradientes naranja-rojo + glow blur + grid pattern)
- `src/components/FloatingElements.tsx` (3D mouse tracking, anti-patrÃ³n editorial)

**Componentes a CREAR (nuevos, editoriales):**
- `PortfolioHeader.tsx` (reutilizable en /portfolio y /portfolio-webs)
- `PortfolioIntro.tsx` (intro contextual /portfolio)
- `PortfolioGallery.tsx` (galerÃ­a con `react-compare-slider`, cierra DT-12)
- `PortfolioWebsIntro.tsx` (intro metodolÃ³gica)
- `PortfolioWebsCases.tsx` (3 casos full-bleed editorial)
- `PortfolioClosing.tsx` (cierre reutilizable con CTA + cross-link)

**PÃ¡ginas reescritas:**
- `src/pages/Portfolio.tsx` (REBUILD, ver CONTENT.md Â§4)
- `src/pages/PortfolioWebs.tsx` (REBUILD, ver CONTENT.md Â§5)

**LÃ³gica preservada (no entra en REBUILD):**
- `src/contexts/AuthContext.tsx`, `src/integrations/supabase/`, `src/lib/security.ts`, `src/lib/validation.ts`, `src/hooks/useSecureNavigation.ts`, `supabase/migrations/`, `src/components/ui/*` (shadcn).

**RazÃ³n del pivote:** la "preservaciÃ³n verbatim" original asumÃ­a que el portfolio actual cumplÃ­a un estÃ¡ndar editorial. La auditorÃ­a visual durante Fase 1 mostrÃ³ que no: gradientes naranja-rojo, glow effects, FloatingElements 3D, layout SaaS 2019-2021. Mantenerlos chocaba frontalmente con la direcciÃ³n "Editorial Structural" y reproducÃ­a el problema "proyecto Frankenstein" identificado al inicio del proyecto. Mejor rediseÃ±ar UI con criterio editorial coherente que preservar UI incoherente con el resto del rediseÃ±o.

**Contenido textual (AGENT.md):** cada caso de estudio con descripciÃ³n honesta, sin mÃ©tricas inventadas. GeolocalizaciÃ³n cuando aplique. Internal linking al servicio correspondiente. Ver `CONTENT.md` Â§10 para diff conceptual con el copy actual.

### 6.4 About

- Hero con foto del equipo en tratamiento editorial full-bleed.
- Narrativa en bloques alternados.
- Stack visual (logos o badges).
- Contacto rÃ¡pido.

### 6.5 Contact

Formulario con React Hook Form + Zod + DOMPurify:
- Nombre (min 2), email, telÃ©fono (opcional), mensaje (min 20).
- SanitizaciÃ³n obligatoria.
- Target submit: **pendiente** Q01 (AGENT.md sugiere WhatsApp).
- Estados: idle, loading, success (sonner), error.

ValidaciÃ³n cliente obligatoria antes de enviar o abrir WhatsApp.

### 6.6 Legal

Privacy, Cookies, Terms. Layout `LegalLayout` con `prose`.

---

## 7. Migration Plan

### 7.1 ClasificaciÃ³n

| CategorÃ­a | Regla | Aplicable a |
|---|---|---|
| PRESERVAR (lÃ³gica) | 1:1, no modificar | `supabase/migrations/`, `src/contexts/AuthContext.tsx`, `src/integrations/supabase/`, `src/lib/security.ts`, `src/lib/validation.ts`, `src/lib/utils.ts`, `src/hooks/useSecureNavigation.ts`, `src/hooks/use-toast.ts`, `src/hooks/use-mobile.tsx`, `src/components/ui/*` (shadcn primitives en uso) |
| REBUILD CON NUEVO DS | UI nueva, datos mantenidos | Hero, ServiceSelectorâ†’HomeServices, HorizontalShowcaseâ†’HomeCasesWeb, StickyScrollSectionâ†’HomeProcess, About+WhyUsâ†’HomeAbout, Testimonials, FormSection, Header, Footer, Portfolio.tsx, PortfolioWebs.tsx, WebPortfolioShowcaseâ†’PortfolioWebsCases, etc. Lista exhaustiva en `MIGRATION.md` |
| REFACTOR PARCIAL | LÃ³gica + JSX nuevo | NotFound.tsx, WhatsAppButton.tsx, PageLoader.tsx, SectionDivider.tsx, ContactForm.tsx (si es separado), pÃ¡ginas legales. |
| DESCARTAR | Eliminar | Componentes huÃ©rfanos confirmados (CTASection, GuaranteesSection, Process, Services, SimplePricingSection, FloatingElements, ProjectCard si huÃ©rfano), `src/data/showcaseData.ts`, `src/data/processData.ts`, archivos `.bak/.backup/.temp`, `src/assets_backup/`. Lista exhaustiva en `MIGRATION.md` Â§3-7. |
| CREAR | Nuevo archivo | 16 componentes + datos nuevos detallados en `MIGRATION.md` Â§9: HomeServices, HomeCasesWeb, HomePhotoShowcase, HomeProcess, HomeAbout, PortfolioHeader, PortfolioIntro, PortfolioGallery, PortfolioClosing, PortfolioWebsIntro, PortfolioWebsCases, galleryData, webCasesData, motion factory, scripts/with_server.py |
| DIFERIR | Sprint 2 | `src/pages/dashboard/*`, `src/pages/Auth.tsx` (interior), componentes dashboard, schema Supabase. |

### 7.2 AuditorÃ­a deps (Fase 2)

`npx depcheck` + eliminaciÃ³n. Target bundle gzip por ruta < 250 KB.

### 7.3 i18n paridad

Diff `es.json` vs `en.json` = 0 en claves antes de cerrar Sprint 1.

Contador actual de claves: ver INVENTORY Â§11. Switch de idioma no funcional hoy (INVENTORY Â§16.17), DT-09 lo resuelve.

### 7.4 Deuda tÃ©cnica preexistente a sanear (D28)

Tabla consolidada de items identificados en Fase 0 (INVENTORY Â§16) con fase de resoluciÃ³n asignada. Cada item se marca como resuelto cuando el trabajo de su fase lo elimine de forma natural. No se crea fase dedicada de saneamiento.

**ActualizaciÃ³n Fase 1 (2026-04-19):** la clasificaciÃ³n de `MIGRATION.md` confirma resoluciÃ³n natural de varios items por DESCARTE de componentes y REBUILD de archivos. Los items se mantienen en estado "Abierto" hasta ejecuciÃ³n fÃ­sica en Fase 2 o 5, pero su camino de resoluciÃ³n estÃ¡ fijado.

| ID | DescripciÃ³n | Fuente | Resolver en | Estado |
|---|---|---|---|---|
| DT-01 | `"34667326300"` hardcoded en 7 archivos (ContactForm, CTASection, Footer, FormSection, Header, PricingSection, Portfolio) + bug `34634408043` en WhyUs. Extraer a `VITE_WHATSAPP_NUMBER` | INVENTORY Â§16.2, AGENT.md Â§âš™ï¸ | Fase 5.1-5.4 (REBUILD natural de cada componente: Header, Footer, Hero, FormSection, WhatsAppButton; CTASection, PricingSection, WhyUs DESCARTAR) | âœ… Resuelto 7/7 en Subfase 5.4, commits `92f7cf2` (descarte ContactForm + FormSection legacy en mismo commit que creaciÃ³n HomeContact), `5605764`, `3450fb5`. Grep final `git grep -nE "34667326300\|34634408043" -- src/` vacÃ­o. Nota retroactiva: conteo histÃ³rico "5/7 cerrados en 5.2" se mantiene en logs; aquÃ­ se firma cierre total |
| DT-02 | 14+ `any` explÃ­citos en AuthContext, ContactForm, dashboard/*, processData.ts, useSecureNavigation | INVENTORY Â§16.5, MASTER Â§10.3 | Sprint 1: ContactForm.tsx en Fase 5.4 (REBUILD), processData.ts DESCARTAR; Sprint 2: AuthContext, dashboard, useSecureNavigation | Parcialmente resuelto Sprint 1. ContactForm.tsx cerrado por descarte en Subfase 5.4 (commit `92f7cf2`). processData.ts cerrado por descarte en Subfase 5.1. Pendiente Sprint 2: AuthContext, dashboard/, useSecureNavigation |
| DT-03 | Puerto dev `vite.config.ts: 8080` debe ser 5173 (D26) | INVENTORY Â§16.1, MASTER Â§9.3 | Fase 3 (design system + config global) | Abierto |
| DT-04 | Directorio `scripts/` no existe. `scripts/with_server.py` referenciado por AGENT.md y MASTER Â§9.3 no existe. Tests Playwright no ejecutables | INVENTORY Â§16.6 | Fase 2 (auditorÃ­a tÃ©cnica) â€” adelantado desde Fase 6 para que tests E2E sean ejecutables desde Fase 3+ | âœ… Resuelto en Fase 2, commit `f0743c7` |
| DT-05 | `src/assets_backup/` con 18 archivos duplicados comprometidos en git. AÃ±adir a `.gitignore` y ejecutar `git rm -r --cached` | INVENTORY Â§16.3 | Fase 2 (auditorÃ­a tÃ©cnica) | âœ… Resuelto en Fase 2, commit `ddce38a` (27 archivos desindexados, ver PROGRESS.md sesiÃ³n 2026-04-25) |
| DT-06 | Archivos `.bak`, `.backup`, `.temp` comprometidos en git (7 archivos en components/ e i18n/) | INVENTORY Â§16.4 | Fase 2 | âœ… Resuelto en Fase 2, commit `a77f245` |
| DT-07 | Componentes potencialmente huÃ©rfanos: `CTASection`, `GuaranteesSection`, `Process`, `Services`, `SimplePricingSection`. `SimplePricingSection` duplica `PricingSection` | INVENTORY Â§16.14, Â§16.15 | Fase 5.1 â€” DESCARTAR confirmado en MIGRATION.md Â§7. ValidaciÃ³n con `grep` antes de `git rm` | Auditado en Fase 2 (dossier en PHASE2_REPORT.md Â§3). EjecuciÃ³n DESCARTE en Fase 5.1 |
| DT-08 | `ThemeProvider` de `next-themes` no estÃ¡ wired en `main.tsx`/`App.tsx`. Dark mode default de Â§3.1 no operativo | INVENTORY Â§16.7, MASTER Â§3 | Fase 3 (design system build) | Abierto |
| DT-09 | `getStoredLanguage()` en `src/i18n/config.ts` siempre retorna `"es"`. Switch a EN no funcional | INVENTORY Â§16.17, MASTER Â§2.3 | Fase 3 sub-tarea 3 â€” sustituido por `i18next-browser-languagedetector` en D35-3 | âœ… Resuelto en Fase 3, commit `73535f7`. Confirmado en G5 parcial 5.2 (toggle ESâ†”EN funcional). Drift documental: Â§7.4 nunca se actualizÃ³ al cierre Fase 3 |
| DT-10 | `console.error()` activo en `GallerySection` (3 ocurrencias) y `useSecureNavigation` (2). `vite.config.ts` los elimina en build pero contaminan dev | INVENTORY Â§16.16 | GallerySection: si DESCARTAR en Fase 5.5, se cierra solo. useSecureNavigation: Sprint 2 | Ampliado 2026-05-26. Total auditado en cierre 5.5a: 15 lint errors categorizados. no-explicit-any: AuthContext.tsx, useSecureNavigation.ts, dashboard/GallerySection.tsx, OrdersSection.tsx, PackagesSection.tsx, UploadSection.tsx, varios src/components/ui/. no-empty-object-type: src/components/ui/. no-require-imports: tailwind.config.ts. ResoluciÃ³n total Sprint 2. |
| DT-11 | `LegalNotice.tsx` importa `useTranslation` sin usarlo | INVENTORY Â§16.19 | Fase 4 (REFACTOR pÃ¡ginas legales con prose-editorial) | âœ… Resuelto en Fase 4, commit `434897e` (eliminado import huÃ©rfano sin tocar copy real preservado por ProtecciÃ³n 2 del brief) |
| DT-12 | `react-compare-slider` instalado pero no usado. `Portfolio.tsx` implementa comparaciÃ³n manualmente | INVENTORY Â§16.18 | Fase 5.5 â€” uso confirmado en `PortfolioGallery.tsx` (Bloque C de /portfolio) y `HomePhotoShowcase.tsx` (Bloque 4 de Home) | Cerrado 2026-05-26. Implementado con react-compare-slider v4 (no react-compare-slider como decÃ­a documentaciÃ³n original; este Ãºltimo estÃ¡ sin mantener desde 2021). Uso confirmado en HomePhotoShowcase.tsx (5.1) y PortfolioGallery.tsx (5.5a). Selector DOM [data-rcs='root']. Drift documental cerrado en commit docs sync 5.5a. |
| DT-13 | Archivo/directorio anÃ³malo `src/assetsFotos Portfolio` (nombre con espacios, sin extensiÃ³n) | INVENTORY Â§16.20 | Fase 2 (verificar manualmente quÃ© es) | âœ… Resuelto en Fase 2, commit `f802256` (era archivo ASCII de 2 bytes, sin refs) |
| DT-14 | Primera migraciÃ³n Supabase con nombre UUID sin descripciÃ³n semÃ¡ntica (`20251010085309_18845f8a-...sql`) | INVENTORY Â§16.21 | Sin acciÃ³n (migraciones congeladas Sprint 1) | Aceptado |
| DT-15 | Keys i18n huÃ©rfanas: `portfolioShowcase.goldencoast.*` (7 keys) y `photoPacks.trial/basic/standard/premium.*` nunca renderizadas | CONTENT.md Â§9.1, sesiÃ³n Fase 1 | Fase 5.1 (REBUILD de `es.json` y `en.json`) | âœ… Resuelto en Subfase 5.1, commit `d7578b7` â€” keys eliminadas de ambos locales, namespace `home.*` aÃ±adido completo |
| DT-16 | Token `--cta` activo (no huÃ©rfano como se catalogÃ³ inicialmente) en `tailwind.config.ts`. AuditorÃ­a grep en sub-tarea 2 (Step 5) detectÃ³ uso vivo en 15 archivos legacy: About, Hero, Footer, Services, Header, Testimonials, ProjectCard, FormSection, PackagesSection, GallerySection, UploadSection, Auth, NotFound, button.tsx + propio config | Re-clasificado en Fase 3 sub-tarea 2 tras grep (cataloging error en sub-tarea 1) | **Fase 5** (rediseÃ±o pÃ¡gina por pÃ¡gina). Limpieza natural cuando los componentes legacy se reescriban con `--primary` directo. Coherente con D28 (deuda tÃ©cnica progresiva) | Cerrado parcial 2026-05-26. `HorizontalShowcase` y `FloatingElements` ya inexistentes en repo al inicio de 5.5a (drift de auditorÃ­a). Restos pendientes en `StickyScrollSection`, `WebPortfolioShowcase`, `ProjectCard` que se descartan en 5.5b. |
| DT-17 | Namespace `pricing.*` en `src/i18n/locales/*.json` con 3 keys `pricing.photoPacks.*` asimÃ©tricas histÃ³ricas (presentes en EN, ausentes en ES). Antigravity las aÃ±adiÃ³ en ES en Subfase 5.4 para mantener `diff: 0` del assert de paridad i18n. Namespace es legacy, no renderizado por componentes del rediseÃ±o v2 | O2 reporte Subfase 5.4 (commit `5605764`) | Cerrado 2026-05-26. Audit pre-brief 5.5a git grep -n 'pricing\\.' -- src/ devolviÃ³ cero importadores. Namespace pricing.photoPacks (2 nodos padre corporate y custom con sub-hojas) eliminado de es.json y en.json. Paridad i18n diff:0 confirmada (452 keys cada uno). |

**Principio operativo:** cada PR que toque un archivo listado arriba debe cerrar el item correspondiente como parte del trabajo, no como tarea separada. Esto evita el coste de una fase de saneamiento dedicada.

---

## 8. SEO & Performance

### 8.1 Meta tags

LibrerÃ­a: `react-helmet-async` en Fase 7.

**Title format obligatorio (AGENT.md):** `[Primary Keyword] | Studio Pixelens`

Ejemplos:
- Home: `FotografÃ­a Profesional y DiseÃ±o Web | Studio Pixelens`
- Servicios: `Servicios de DiseÃ±o Web y FotografÃ­a | Studio Pixelens`
- Portfolio: `Portfolio de Proyectos | Studio Pixelens`

Length 50-60 chars. Primary keyword primero. Ãšnico por pÃ¡gina.

**Meta description:** 150-160 chars, CTA implÃ­cito, nunca duplicada.

### 8.2 Heading structure

- Un solo `<h1>` por pÃ¡gina con keyword primaria.
- JerarquÃ­a H1 â†’ H2 â†’ H3 sin saltos.

### 8.3 ImÃ¡genes

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

- `public/sitemap.xml` rutas pÃºblicas.
- `public/robots.txt` con `noindex` para `/dashboard/*` y `/auth`.

### 8.6 Core Web Vitals

| MÃ©trica | Target | Notas |
|---|---|---|
| LCP | < 2.5s techo, < 2.0s objetivo | Hero images riesgo principal |
| INP | < 200ms | Evitar main-thread blocking |
| CLS | < 0.1 | `aspect-ratio` en imÃ¡genes |
| Lighthouse Performance | >= 92 | |
| Lighthouse SEO | >= 95 | |
| Lighthouse Accessibility | >= 95 | |
| Lighthouse Best Practices | >= 95 | |

### 8.7 Issues conocidos (AGENT.md)

- SPA React Router: verificar `index.html` tiene base meta tags y cada ruta actualiza `<title>` dinÃ¡micamente con Helmet.
- Sitemap.xml no existe: crear en Fase 7.
- `/dashboard` y `/auth` noindex obligatorio.

---

## 9. Testing Infrastructure

### 9.1 Stack

Playwright ya montado. Python scripts en `scripts/`.

### 9.2 CuÃ¡ndo correr tests (obligatorio)

- Cambios en navegaciÃ³n (`Nav.tsx`, `Header.tsx`).
- Cambios en flujos form (`ContactForm.tsx`, `Auth.tsx`).
- Cambios de rutas (`App.tsx`).
- Antes de cualquier PR `redesign/v2-framer-base` â†’ `dev`.

### 9.3 CÃ³mo correr

```bash
python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_test.py
```

### 9.4 PatrÃ³n base

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    # locale obligatorio: i18next-browser-languagedetector lee navigator.language.
    # Sin esto, headless Chromium reporta en-US y la app carga en EN, lo que
    # rompe los selectores get_by_label que asumen copy ES por defecto.
    # Descubierto en Subfase 5.4 (O3 reporte HomeContact, 2026-05-13).
    context = browser.new_context(locale='es-ES')
    page = context.new_page()
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle')
    # ...
    browser.close()
```

### 9.5 Tests mÃ­nimos

1. Navigation: links Header cargan sin 404.
2. Contact form: valida campos vacÃ­os antes de enviar.
3. Auth flow: login con credenciales errÃ³neas muestra error sin crashear.
4. Responsive: screenshot 375px y 1440px en homepage.

### 9.6 Reglas

- Selectores descriptivos: `role=`, `text=`, IDs. Nunca XPath frÃ¡gil.
- Screenshots dev en `/tmp/`, nunca commitear.
- Correr `--help` de scripts antes de crear nuevos.

---

## 10. Security & Compliance

### 10.1 Supabase RLS

Bien configurado. No tocar Sprint 1. AuditorÃ­a completa en CLAUDE.md pre-launch Sprint 2.

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
- **Nada sensible en source code**: telÃ©fonos, emails, keys, IDs. Todo via `import.meta.env.VITE_*`.

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
main            (producciÃ³n)
  â†‘ PR tras G7
dev             (integraciÃ³n)
  â†‘ PR tras Sprint completo
redesign/v2-framer-base  (trabajo del rediseÃ±o)
```

### 11.4 Commit convention (AGENT.md)

Formato obligatorio: `type: short description`

Tipos:
- `feat:` nueva feature
- `fix:` correcciÃ³n
- `chore:` mantenimiento, config
- `style:` estilo sin lÃ³gica
- `refactor:` refactor sin cambio funcional
- `docs:` documentaciÃ³n

Ejemplos:
- `feat: add Playfair Display to typography system`
- `docs(progress): complete Phase 0 inventory`
- `refactor: extract motion variants to lib/motion.ts`

Un commit por tarea. Mensajes concisos.

### 11.5 Rollback

- Cloudflare Pages mantiene histÃ³rico. Rollback 1 clic.
- Tag pre-launch: `v1.0-pre-redesign` en `main` actual.

---

## 12. Quality Gates

| Gate | Criterio | Responsable |
|---|---|---|
| G0 | INVENTORY.md refleja repo sin omisiones | Miguel |
| G1 | Docs satÃ©lites coherentes entre sÃ­ y con MASTER | Miguel |
| G2 | MIGRATION.md clasifica 100% componentes pÃºblicos | Miguel |
| G3 | `/styleguide` renderiza primitivos ambos modos, tipografÃ­a validada | Miguel + revisiÃ³n visual |
| G4 | Todas rutas navegables, Nav/Footer 3 viewports | Miguel |
| G5 | Cada pÃ¡gina pasa side-by-side. Portfolio 100% idÃ©ntico. | Miguel |
| G6 | Motion coherente, CWV verdes, Playwright pasa | Miguel + Lighthouse + Playwright |
| G7 | Lighthouse >=92, redirects 301, i18n paridad, schema validado | Miguel |

---

## 13. Decisions Log

| # | Fecha | DecisiÃ³n | RazÃ³n | Revisable |
|---|---|---|---|---|
| D01 | 2026-04-18 | Rebuild UI + preservaciÃ³n lÃ³gica | Stack sÃ³lido | No |
| D02 | 2026-04-18 | Orange primary, Blue accent | Flip de marca | En G3 |
| D03 | 2026-04-18 | Dark mode default | Editorial + energÃ­a color | En G3 |
| D04 | 2026-04-18 | GSAP Ãºnica librerÃ­a motion | Ya instalada, portfolio depende | No |
| D05 | 2026-04-18 | Cloudflare Pages host | Ya es el actual | No |
| D06 | 2026-04-18 | Sprint 1 pÃºblico, Sprint 2 dashboard | Deadline Basilea | No |
| D07 | 2026-04-18 | Docs: MASTER + PROGRESS + 4 satÃ©lites | Minimiza ruido contexto | No |
| D08 | 2026-04-18 | Antigravity ejecuciÃ³n, Project planificaciÃ³n | Doble vÃ­a | No |
| D09 | 2026-04-18 | Sonnet 4.6 default, Opus 4.6 fases crÃ­ticas | Balance coste/precisiÃ³n | En ejecuciÃ³n |
| D10 | 2026-04-18 | Branch `redesign/v2-framer-base` desde `dev` | Respeta convenciÃ³n AGENT.md | No |
| D11 | 2026-04-18 | Typography: Playfair Display H1/H2 + Inter body/UI | ResoluciÃ³n conflicto AGENT.md vs Inter | En G3 |
| D12 | 2026-04-18 | DirecciÃ³n "Editorial Structural": Framer layout + editorial soul | SÃ­ntesis AGENT.md + visiÃ³n Framer | En G3 |
| D13 | 2026-04-18 | Commit format `type: description` estilo AGENT.md | Consistencia con convenciÃ³n repo | No |
| D14 | 2026-04-18 | Playwright tests obligatorios en cambios Nav, Forms, Routes | PolÃ­tica AGENT.md | No |
| D22 | 2026-04-18 | Evaluado pack `getdesign add framer`. Descartado como direcciÃ³n global por conflicto estructural (flip color C1, tipografÃ­a de pago C3, filosofÃ­a product-forward vs editorial C4, "no imagery" vs portfolio fotogrÃ¡fico C5). Adoptados 7 aportes tÃ©cnicos neutrales en Â§3.9 (V1-V7) | Pack entrega descripciÃ³n literal de framer.com, producto de naturaleza distinta a Studio Pixelens. AdopciÃ³n global implicarÃ­a reabrir D02, D03, D11, D12 y contradecir AGENT.md. Aportes tÃ©cnicos puntuales sÃ­ suman sin coste conceptual | No |
| D23 | 2026-04-18 | Mantener `--radius: 0.5rem` (8px) default en CTAs. Rechazo explÃ­cito de pill CTAs 100px radius | Pills 100px son look SaaS consumer. Desalinean con direcciÃ³n Editorial Structural de Â§1.5 que busca coherencia con referencias tipo Monocle / NYT / editorial luxury | En G3 si evidencia nueva |
| D26 | 2026-04-19 | Unificar puerto dev en 5173. Modificar `vite.config.ts` en Fase 3 (DT-03) | AGENT.md Â§ðŸ§ª y `scripts/with_server.py` ya asumen 5173. Default de Vite. Coste: 1 lÃ­nea. Alternativa (cambiar MASTER/AGENT/scripts a 8080) tiene coste mayor sin beneficio | No |
| D27 | 2026-04-19 | Portfolio es mÃ³dulo distribuido (no carpeta `src/components/portfolio/`). Entry: `src/pages/Portfolio.tsx`. Dependencias dispersas en `src/components/`. Fase 1 consolida lista en `PORTFOLIO_SPEC.md` | INVENTORY Â§16.12 confirma ausencia de la carpeta. Estructura real emergiÃ³ durante Fase 0. Mientras no exista PORTFOLIO_SPEC.md, regla operativa: cualquier archivo referenciado por Portfolio.tsx directa o indirectamente queda preservado verbatim | No |
| D28 | 2026-04-19 | Deuda tÃ©cnica preexistente tratada progresivamente durante rediseÃ±o, no en fase dedicada. Tabla consolidada en Â§7.4 con 14 items (DT-01 a DT-14) y fase de resoluciÃ³n asignada a cada uno | RediseÃ±o ya va a tocar los archivos afectados. Saneamiento separado = trabajo doble. Coste marginal de limpiar al reescribir es prÃ¡cticamente cero | No |
| D29 | 2026-04-19 | ConfirmaciÃ³n consolidada de la direcciÃ³n estÃ©tica y de tokens. Dark mode default + flip naranja primary / azul accent + pairing Playfair Display H1/H2 + Inter body/UI + direcciÃ³n "Editorial Structural". Cierra Q02, Q03, Q06, Q07 | Owner valida sin cambios la propuesta inicial tras revisiÃ³n completa del trabajo de Fase 1. Sin evidencia que reabra D02, D03, D11, D12. ConfirmaciÃ³n necesaria antes de Fase 3 (Design System build) | No |
| D30 | 2026-04-19 | Target del formulario de contacto: WhatsApp como canal primario via `wa.me/{VITE_WHATSAPP_NUMBER}` con mensaje pre-formateado, email `studiopixelens@gmail.com` como fallback secundario visible. Supabase descartado como target. Cierra Q01 y Q08 | Coherente con AGENT.md que sugiere WhatsApp. Mantiene freeze de `supabase/` durante Sprint 1 (no aÃ±adir tablas de contactos). Email visible aporta opciÃ³n para usuarios que prefieren canal asincrÃ³nico | No |
| D31 | 2026-04-19 | **Pivote de scope**: rediseÃ±o UI completo de `/portfolio` y `/portfolio-webs`. Supersede el non-goal "no rehacer portfolio" de Â§1.3 y la regla "preservaciÃ³n verbatim" de D01 en lo relativo a UI. Se preserva solo lÃ³gica reutilizable. Sub-decisiones: D31.1 quitar claim "+40%" TropiDenia (no verificable), D31.2 quitar tag "WordPress" BVS (incoherente con stack declarado), D31.3 descripciÃ³n Ãºnica por caso web (no bicolumna Problema/SoluciÃ³n), D31.4 Bloque B /portfolio reducido sin nÃºmeros | AuditorÃ­a visual durante Fase 1 mostrÃ³ que la UI actual del portfolio (gradientes naranja-rojo, glow effects, FloatingElements 3D, layout SaaS) choca frontalmente con direcciÃ³n Editorial Structural. Mantenerla reproducÃ­a el problema "Frankenstein" identificado al inicio. Mejor coherencia editorial completa que preservaciÃ³n parcial incoherente. D31.1-D31.4 priorizan honestidad sobre claims comerciales no verificables | No |
| D32 | 2026-04-19 | Protocolo: validaciÃ³n estÃ©tica por owner en chat antes de pasar brief O.D.A. crÃ­tico de UI a Antigravity. Aplicable a Fase 3 (Design System) y Fase 5 (rediseÃ±o pÃ¡gina por pÃ¡gina) | Cinematic-v2 abandonado (D19) demostrÃ³ el coste de ejecutar UI compleja sin validaciÃ³n previa. Una conversaciÃ³n de 30 minutos en chat ahorra 4-6 horas de Antigravity rehechas. Aplica solo a UI: tareas tÃ©cnicas mecÃ¡nicas (depcheck, config, scripts) no requieren esta validaciÃ³n | En G3 si proceso rompe |
| D33 | 2026-04-30 | **Afinamiento Design System (cierre Fase 3 sub-tarea 1).** 7 sub-decisiones validadas en chat antes de brief y confirmadas en `/styleguide` con G3 parcial: D33-1 estados semÃ¡nticos `--success` (142 45% 36% / 142 40% 50%) + `--warning` (hue 45 Ã¡mbar para diferenciar de primary hue 20), `--info` no existe como token (alias `--accent`). D33-2 `--gradient-hero` reformulado de linear 135deg a radial elÃ­ptico off-center; variante final B 50%Ã—40% al 13% (validada en A/B `/styleguide`). D33-3 `--shadow-primary-glow` capped a opacidad 0.18 y blur 40px, restricciÃ³n de uso a CTA hero y cierre de secciÃ³n. D33-4 tamaÃ±o base body 16px global, `.prose-editorial` 17px en lista cerrada de aplicaciones. D33-5 ratio modular 1.333 (perfect fourth) con `clamp()` en H1-H3 y breakpoints en H4-H6, H6 fuera de escala como rol eyebrow/label. D33-6 Playfair H1 dark = weight 800 fijo (validado en A/B `/styleguide`), light mode mantiene 900. D33-7 `--primary-foreground` cambiado de blanco (3.23:1 AA Large) a `220 30% 8%` (5.80:1 AA), patrÃ³n editorial dark text on warm surface | Cierra brechas detectadas en pre-brief: B1 (estados sin token), B3 (gradient genÃ©rico), B4 (glow excesivo), B5 (escala body), B7-B11 (tipografÃ­a sin escala), B13 (font-features alcance). ValidaciÃ³n G3 parcial en `/styleguide` confirma todos los cambios visualmente y mediante Contrast Checker en runtime. Mejora real medida: `--primary-foreground/--primary` de 3.23:1 a 5.80:1 (AA Large â†’ AA), elimina fail accesibilidad en CTA primary | En G3 final si evidencia visual nueva durante sub-tareas 2-3 |
| D34 | 2026-04-30 | **Patrones de componentes DS (cierre Fase 3 sub-tarea 2).** Cuatro decisiones de arquitectura: D34-1 componente `<Heading level={1-6}>` semÃ¡ntico con `visualLevel` para override visual sin perder semÃ¡ntica + `eyebrow` para `level={6}` (encapsula tipografÃ­a DS). D34-2 Button shadcn ampliado con 4 variantes custom (primary, accent, outline-primary, ghost-accent) vÃ­a CVA + prop `glow` opcional restringido a primary, sin tocar variants legacy. D34-3 `FeatureCard` como wrapper de shadcn Card (no fork) con `shadow-ring-accent` y hover lift `translateY(-0.5)`. D34-4 script anti-flash sÃ­ncrono en `<head>` de `index.html` aplica `class="dark"` antes de hidrataciÃ³n React, complemento defensivo de `<ThemeProvider defaultTheme="dark">`. Sub-decisiÃ³n documental D34-5: DT-16 re-clasificado a Fase 5 tras detectar uso vivo de `--cta` en 15 archivos legacy. Observaciones no bloqueantes registradas: O1 (`glow` visualmente imperceptible en `/styleguide`, validaciÃ³n real en CTA hero Fase 5) + O2 (`disabled` sobre primary se ve marrÃ³n por `disabled:opacity-50` default shadcn, comportamiento estÃ¡ndar no regresiÃ³n) | Componentes encapsulados garantizan invariantes del DS (tipografÃ­a correcta automÃ¡ticamente, glow nunca aplicado a variantes equivocadas). Wrapper de Card respeta upstream shadcn updates. Anti-flash defensivo aunque next-themes ya cubre la hidrataciÃ³n, protege ante navegadores no-Chromium en producciÃ³n. ValidaciÃ³n G3 parcial sub-tarea 2 visual + Playwright timing test pasados | En G3 final si evidencia visual nueva durante sub-tarea 3 |
| D35 | 2026-04-30 | **Chrome global funcional (cierre Fase 3 sub-tarea 3, G3 final).** Cuatro decisiones de implementaciÃ³n: D35-1 Header sticky con `bg-background/80 backdrop-blur-md`, layout 3 columnas (logo + nav 5 items + LanguageToggle + WhatsAppButton + hamburguesa mobile). D35-2 Footer 4 columnas (branding + Servicios + Recursos + Contacto) con bottom bar copyright + legal links, Ãºnico icono social Instagram tras decisiÃ³n owner. D35-3 i18n cableado: LanguageToggle ES/EN con `i18next-browser-languagedetector` (actualizaciÃ³n del config previo cuya `getStoredLanguage` siempre devolvÃ­a "es"), persistencia localStorage, `<html lang>` actualizado dinÃ¡micamente. D35-4 WhatsApp button con `wa.me/{VITE_WHATSAPP_NUMBER}` real (34667326300) y mensaje pre-formateado i18n, fallback null + console.warn DEV si .env no tiene nÃºmero. Sub-decisiÃ³n D35-5 documental: legal routes alineadas con realidad del repo (`/privacidad`, `/cookies`, `/aviso-legal`, NO `/legal/*` como decÃ­a el brief). Sub-decisiÃ³n D35-6: doble chrome aceptado en `Index.tsx` y `PortfolioWebs.tsx` (legacy header/footer + nuevo PublicLayout) hasta Fase 5 cuando se reescriban. Sub-decisiÃ³n D35-7: logo SVG placeholder en `public/logo.svg` (cÃ­rculo naranja con "SP") hasta tener logo real | Componentes layout encapsulados, reutilizables sin modificaciÃ³n a partir de Fase 4. i18n verdadero (no falsa promesa) operativo desde G3 final. Defensa anti-flash + chrome global protegen UX en producciÃ³n. Fix de `getStoredLanguage` cierra Q6 sin abrir DT-17. ValidaciÃ³n G3 final 20/20 puntos pasados (Header + Footer visuales, navegaciÃ³n, language toggle ESâ†”EN con `<html lang>` correcto, WhatsApp con nÃºmero real, Instagram URL real, mobile drawer funcional) | Fase 3 cerrada. PrÃ³xima revisiÃ³n en Fase 4 cuando se construyan rutas reales |
| D36 | 2026-05-03 | **Cierre Fase 4 (G4 firmado 14/14).** Cinco sub-decisiones de scope/ejecuciÃ³n: D36-1 avance limpieza chrome legacy en Index.tsx y PortfolioWebs.tsx (supersede D35-6, ejecuta Q10=A en mismo paso que reescritura cuerpo). D36-2 modelo definitivo anchors-in-Home: rutas /servicios, /sobre, /contacto descartadas oficialmente, viven como anchors /#services, /#about, /#contact (supersede entries histÃ³ricos de Â§5.3). D36-3 placeholder strategy lorem ipsum hard-coded sin keys i18n para Fase 4, keys reales en Fase 5 con copy de CONTENT.md. D36-4 extensiÃ³n ScrollToTop.tsx para escuchar cambios de hash y disparar scrollIntoView (necesario para que anchors funcionen, decisiÃ³n correcta de Antigravity al ser componente shared no blindado, packaging mejorable: bundleado con commit de tests en 4d42340). D36-5 copy legal real preservado (ProtecciÃ³n 2 disparada correctamente), DT-11 cerrado al paso eliminando import useTranslation huÃ©rfano | Fase 4 ejecutada limpiamente: 8 commits (b38e56a a 4d42340), build limpio, tsc limpio, 6/6 tests Playwright pasan, 14/14 puntos validaciÃ³n owner. LecciÃ³n operativa D36-4 registrada para futuros briefs: listar componentes shared (ScrollToTop, PageLoader, SectionDivider) explÃ­citamente en secciÃ³n de scope o blindaje | No |
| D37 | 2026-05-08 | **Cierre Subfase 5.1 â€” Home REBUILD (11 commits, d7578b7 como Ãºltimo i18n).** Cinco sub-decisiones de arquitectura y ejecuciÃ³n: D37-1 estructura de carpeta `src/components/home/` con 7 componentes nuevos (Hero, HomeServices, HomeCasesWeb, HomePhotoShowcase, HomeProcess, HomeAbout, Testimonials). D37-2 HomeCasesWeb usa scroll horizontal CSS nativo (`overflow-x-auto snap-x snap-mandatory`) sin GSAP â€” coherente con restricciÃ³n "CSS-only motion en Fase 5" del brief; spacer divs laterales alinean carrusel con el container. D37-3 HomePhotoShowcase solo muestra `galleryData[0]` como teaser (no recorre el array completo); la galerÃ­a completa es responsabilidad de Fase 5.5 `/portfolio`. D37-4 `webCasesData.ts` define `tagKeys: string[]` con claves i18n (no strings literales), alineado con patrÃ³n i18n del proyecto. D37-5 avance de `ProjectCard.tsx` a DESCARTAR en Step 3 (antes de lo previsto en MIGRATION.md Â§5): era Ãºnico consumidor de `showcaseData.ts` que tambiÃ©n se descartaba, adelantarlo evita import roto sin consumidores | Subfase 5.1 ejecutada limpiamente: 11 commits, build limpio, tsc limpio, grep `--cta` vacÃ­o en todos los home components e Index.tsx, 14 archivos legacy eliminados. LecciÃ³n operativa D37-5: cadenas de imports entre archivos-a-eliminar deben verificarse antes de ordenar eliminaciones por fase en MIGRATION.md | No |
| D38 | 2026-05-12 | **Cierre Subfase 5.2 â€” Chrome global (5 commits, adb524b a da9662c).** Tres sub-decisiones: D38-1 formalizaciÃ³n `src/components/layout/` como ubicaciÃ³n canÃ³nica del chrome (supersede prescripciÃ³n "estructura plana" de Â§5.2 versiones anteriores, anÃ¡logo a D36-2). D38-2 REFACTOR ascendido a REBUILD selectivo en `layout/Footer.tsx` por namespace `footer.col.*` legacy desalineado de CONTENT.md Â§6.2 (decisiÃ³n tÃ©cnica correcta de Antigravity, commit `6dca42c`). D38-3 drift `footer.social.instagramUrl` en namespace legacy `footer.*` preservado, limpieza diferida a Subfase 5.4 o 5.5. CorrecciÃ³n documental DT-01: conteo actualizado a 5/7 (Portfolio.tsx limpio por grep). DT-09 marcado resuelto retroactivo (cerrado en Fase 3 D35-3, no documentado en Â§7.4). CONTENT.md Â§6.1 actualizado con `common.nav.about` (5.Âº nav item real omitido en v1.x). | Subfase 5.2 ejecutada: 5 commits, build limpio, tsc limpio, Playwright 9/9, G5 parcial 5.2 firmado 6/6. LecciÃ³n operativa: namespace i18n del chrome Fase 3 no era canÃ³nico internamente (footer.col.* vs common.footer.*), REFACTOR en Footer ascendiÃ³ a REBUILD selectivo. | No |
| D39 | 2026-05-13 | **Cierre Subfase 5.4 â€” Contact form REBUILD (3 commits, 92f7cf2 a 3450fb5).** Nueve sub-decisiones: D39-1 estructura `src/components/home/HomeContact.tsx` adoptada como canÃ³nica, supersede MIGRATION.md Â§11 paso 1 ("FormSection.tsx REBUILD") al revelar inspecciÃ³n previa (Q5-B=B) que FormSection era wrapper orphan no renderizado y ContactForm era el componente con lÃ³gica. AnÃ¡logo a D37-1 y D38-1 en filosofÃ­a de subcarpetas `src/components/<group>/`. D39-2 ContactForm.tsx y FormSection.tsx ambos DESCARTADOS como cÃ³digo orphan (placeholder lorem D36-3 los reemplazaba en Index.tsx, cero importadores activos confirmado por grep). D39-3 campo `service` preservado con dropdown 3 opciones (web/photo/both) segÃºn Q5-E=A, 5 keys i18n nuevas aÃ±adidas a `home.contact.form.serviceLabel/servicePlaceholder/serviceOptions.*`. D39-4 checkbox `terms` con link a `/privacidad` preservado por requisito RGPD segÃºn Q5-F=A, 2 keys i18n nuevas `home.contact.form.termsLabel/termsLink`. D39-5 mensaje WhatsApp compuesto en texto plano formato `campo: valor` sin emojis ni asteriscos segÃºn Q5-G=C, coherente con CONTENT Â§0 principio editorial. Namespace nuevo `home.contact.whatsapp.*` con 6 keys (subject + 5 labels). D39-6 DOMPurify integrado directo en HomeContact (no via wrapper de security.ts) tras descubrimiento de que los wrappers `sanitizeInput` y `sanitizeHtml` existentes no cubren el caso "strip total a texto plano" requerido por el payload WhatsApp. Corrige drift documental MIGRATION.md Â§3 que afirmaba que ContactForm legacy ya usaba DOMPurify, cuando nunca lo hizo. D39-7 DT-01 cerrado 7/7 al descartar los 2 Ãºltimos archivos con hardcodes (`whatsappNumber` en ContactForm L60 + `tel:+34667326300` en FormSection L47). Conteo retroactivo: en realidad eran 2 hardcodes en 2 archivos, no 1 hardcode pendiente como sugerÃ­a el contador "5/7" de cierre 5.2. D39-8 lecciÃ³n operativa shadcn FormMessage + i18n: el patrÃ³n inicial `<FormMessage>{translateError(...)}</FormMessage>` es incompatible con la implementaciÃ³n actual de shadcn (`FormMessage` ignora children cuando hay error, prioriza `error.message`). SoluciÃ³n adoptada: schema Zod movido dentro del componente con `useMemo([t])`, mensajes ya traducidos en la definiciÃ³n Zod, `<FormMessage />` sin children. Documentar para futuros forms del proyecto. D39-9 patrÃ³n Playwright `locale: 'es-ES'` en context obligatorio para tests del rediseÃ±o (O3 reporte): sin esto, headless Chromium reporta `en-US` y `i18next-browser-languagedetector` carga EN, lo que rompe selectores `get_by_label` que asumen ES. MASTER Â§9.4 actualizado con ejemplo canÃ³nico. Observaciones no bloqueantes registradas: O1 wa.me redirige a api.whatsapp.com/send en headless (aserciÃ³n de test ampliada para aceptar ambas formas), O2 3 keys `pricing.photoPacks.*` asimÃ©tricas histÃ³ricas rellenadas en ES para cumplir paridad `diff: 0` (abre DT-17 para auditar en 5.5), O3 ya cubierta por D39-9. | Subfase 5.4 ejecutada: 3 commits (no 4 como brief preveÃ­a, agrupaciÃ³n justificada D1 staging area), build limpio, tsc limpio, Playwright 4/4 PASS, G5 parcial 5.4 firmado 14/14. DT-01 cerrado total. DT-17 abierto. LecciÃ³n operativa D39-8 registrada para futuros forms. | No |

### Pendientes de cerrar

| # | Pendiente | Bloquea | QuiÃ©n resuelve |
|---|---|---|---|
| ~~Q01~~ | ~~Target formulario contacto~~ | ~~Fase 5.4~~ | **Resuelta 2026-04-19** â†’ D30 (WhatsApp + email fallback) |
| ~~Q02~~ | ~~Confirmar dark mode default~~ | ~~Fase 3~~ | **Resuelta 2026-04-19** â†’ D29 (confirmado) |
| ~~Q03~~ | ~~Confirmar flip orangeâ†’primary~~ | ~~Fase 3~~ | **Resuelta 2026-04-19** â†’ D29 (confirmado) |
| ~~Q04~~ | ~~About existente o redactar desde cero~~ | ~~Fase 5.3~~ | **Resuelta 2026-04-19** â†’ CONTENT.md Â§3.6 (redactado nuevo, fusiona About + WhyUs como `home.about.*`) |
| Q05 | Banner cookies en repo actual | Fase 5 legal | AuditorÃ­a Fase 2 |
| ~~Q06~~ | ~~Confirmar pairing Playfair + Inter~~ | ~~Fase 3~~ | **Resuelta 2026-04-19** â†’ D29 (confirmado) |
| ~~Q07~~ | ~~Confirmar "Editorial Structural"~~ | ~~Fase 3~~ | **Resuelta 2026-04-19** â†’ D29 (confirmado) |
| ~~Q08~~ | ~~Formato WhatsApp en Contact~~ | ~~Fase 5.4~~ | **Resuelta 2026-04-19** â†’ D30 (`wa.me/{VITE_WHATSAPP_NUMBER}` con mensaje prefilled) |
| ~~Q09~~ | ~~Puerto dev 8080 vs 5173~~ | ~~Fase 0~~ | **Resuelta 2026-04-19** â†’ D26 (5173 estÃ¡ndar) |
| ~~Q10~~ | ~~`src/components/portfolio/` no existe~~ | ~~Fase 1~~ | **Resuelta 2026-04-19** â†’ D27 (mÃ³dulo distribuido, ahora reorganizado en subdirectorios temÃ¡ticos por D31) |

---

## 14. Glossary

- **DS:** Design System.
- **CWV:** Core Web Vitals.
- **RLS:** Row Level Security (Supabase).
- **SECURITY DEFINER:** funciÃ³n PostgreSQL con permisos del creador.
- **O.D.A.:** Objective, Data, Architecture.
- **Sprint 1 / Sprint 2:** capa pÃºblica / autenticada.
- **AGENT.md:** instrucciones permanentes agentes IA del repo.
- **CLAUDE.md:** contexto auditorÃ­a seguridad puntual.

---

## 15. Change log

| VersiÃ³n | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-18 | Miguel + Claude Opus 4.7 | Documento inicial |
| 1.1 | 2026-04-18 | Miguel + Claude Opus 4.7 | IntegraciÃ³n AGENT.md y CLAUDE.md. ResoluciÃ³n conflictos tipografÃ­a, motion, branch. DirecciÃ³n "Editorial Structural". Secciones 9 (testing), 10.3-10.4 (TS/env), 11.4 (commits). D10-D14 y Q06-Q08. |
| 1.2 | 2026-04-18 | Miguel + Claude Opus 4.7 | EvaluaciÃ³n pack getdesign/framer. Nueva secciÃ³n Â§3.9 con 7 aportes tÃ©cnicos V1-V7. Updates quirÃºrgicos en Â§3.1 (shadows con `--shadow-ring-accent` y multi-layer `--shadow-strong`) y Â§3.2 (OpenType features de Inter). D22-D23 aÃ±adidas en Â§13. Pack descartado como direcciÃ³n global, razonamiento archivado. |
| 1.3 | 2026-04-19 | Miguel + Claude Opus 4.7 | Cierre Fase 0. Â§5.2 reescrita con estructura real del repo + tabla de divergencias vs v1.2 (scripts/, portfolio/, layout/, sections/, lib/supabase.ts, lib/motion.ts, types/ inexistentes). Â§5.3 ampliada con estado actual vs objetivo de rutas. Â§5.5 corregida (VITE_SUPABASE_PUBLISHABLE_KEY). Â§6.3 redefinida como mÃ³dulo distribuido. Â§7.1 preservaciÃ³n verbatim con lista concreta. Nueva Â§7.4 Deuda tÃ©cnica con 14 items DT-01 a DT-14. D26-D28 en Â§13. Q09-Q10 cerradas. |
| 1.4 | 2026-04-19 | Miguel + Claude Opus 4.7 | Cierre Fase 1. **Pivote de scope D31:** /portfolio y /portfolio-webs entran en rediseÃ±o UI completo. Â§0 deadline eliminado (proyecto orientado a aprendizaje). Â§1.2 sin fechas duras. Â§1.3 non-goal "no rehacer portfolio" marcado obsoleto. Â§1.4 punto 4 marcado obsoleto, aÃ±adidos puntos 10-12 con D29-D31 confirmadas. Â§6.3 reescrita completamente como rediseÃ±o UI (no mÃ¡s "preservaciÃ³n verbatim"). Â§7.1 clasificaciÃ³n actualizada con CREAR + DIFERIR como nuevas categorÃ­as y referencias a MIGRATION.md. Â§7.4 actualizada con DT-15 (huÃ©rfanas i18n) + estado "plan confirmado" en items con resoluciÃ³n natural ya prevista. Â§13 D29 (confirmaciÃ³n dark mode + flip + tipografÃ­a + Editorial Structural), D30 (WhatsApp + email fallback), D31 (pivote scope con sub-decisiones D31.1-D31.4), D32 (validaciÃ³n estÃ©tica pre-Antigravity). Q01-Q04, Q06-Q08 cerradas. CONTENT.md y MIGRATION.md aÃ±adidos al sistema documental. |
| 1.5 | 2026-04-30 | Miguel + Claude Opus 4.7 | Cierre G3 parcial (Fase 3 sub-tarea 1). Â§3.1 Color Tokens reescrita completa: `--primary-foreground` = `220 30% 8%` en ambos modos (D33-7), nuevos tokens `--success` y `--warning` (D33-1) con hue 45 Ã¡mbar para diferenciar de primary, `--gradient-hero` reformulado a radial off-center variante B (D33-2), `--shadow-primary-glow` opacidad 0.18 con restricciÃ³n de uso (D33-3), tabla de contraste WCAG validada con mediciones reales del Contrast Checker, focus states canÃ³nicos `:focus-visible` documentados (B6). Â§3.2 Typography reescrita completa: escala 1.333 con `clamp()` en H1-H3 + breakpoints en H4-H6 (D33-5), tabla completa de tamaÃ±os/line-heights/tracking/weights validados en `/styleguide`, override Playfair weight 800 en dark mode (D33-6), `.prose-editorial` con lista cerrada de uso (D33-F4), `font-feature-settings` movido a `:root` para herencia universal (B13), preload de Playfair weights en `index.html`. Â§7.4 nueva entrada DT-16 (token `--cta` huÃ©rfano detectado por Antigravity, resoluciÃ³n en sub-tarea 2). Â§13 nueva entrada D33 con sub-decisiones D33-1 a D33-7. |
| 1.6 | 2026-04-30 | Miguel + Claude Opus 4.7 | Cierre Fase 3 sub-tarea 2 (G3 parcial sub-tarea 2 firmado). Â§3.6 Variantes personalizadas reescrita: correcciÃ³n crÃ­tica del color del texto en variant `primary` (oscuro `220 30% 8%` post-D33-7, NO blanco), prop `glow` documentado con restricciÃ³n D33-3, FeatureCard como wrapper documentado, Heading semÃ¡ntico documentado. Â§7.4 fila DT-16 re-clasificada: re-cataloging tras grep en Step 5 (token `--cta` no era huÃ©rfano, estÃ¡ activo en 15 archivos legacy). ResoluciÃ³n diferida a Fase 5 (coherente con D28). Â§13 nueva entrada D34 con sub-decisiones D34-1 a D34-5 + observaciones O1/O2 no bloqueantes. |
| 1.7 | 2026-04-30 | Miguel + Claude Opus 4.7 | Cierre Fase 3 completa (G3 final firmado). Â§13 nueva entrada D35 con sub-decisiones D35-1 a D35-7: chrome global funcional (Header + Footer + i18n + WhatsApp real + ajustes documentales sobre legal routes, doble chrome temporal, logo placeholder). Sin cambios en Â§3.x (DS) ni Â§7.x (deuda tÃ©cnica) en este cierre: la sub-tarea 3 fue puramente integraciÃ³n funcional sobre tokens y componentes ya validados en sub-tareas 1 y 2. |
| 1.8 | 2026-05-03 | Miguel + Claude Opus 4.7 | Cierre Fase 4 (G4 firmado 14/14). Â§5.3 reescrita: 10 rutas confirmadas, modelo anchors-in-Home oficializado, /servicios+/sobre+/contacto descartadas como rutas dedicadas, legal routes alineadas con realidad del repo. Â§7.4 DT-11 cerrado con commit `434897e`. Â§13 D36 con sub-decisiones D36-1 a D36-5: avance limpieza chrome legacy, modelo anchors-in-Home, placeholder strategy lorem hard-coded, extensiÃ³n ScrollToTop para hash navigation (lecciÃ³n operativa registrada), copy legal real preservado por ProtecciÃ³n 2. |
| 1.9 | 2026-05-08 | Miguel + Claude Sonnet 4.6 | Cierre Subfase 5.1 Home REBUILD. Â§0 versiÃ³n bumped. Â§7.4 DT-15 marcado resuelto (commit `d7578b7`). Â§13 nueva entrada D37 con sub-decisiones D37-1 a D37-5: arquitectura carpeta home/, scroll CSS nativo en HomeCasesWeb, teaser galleryData[0] en HomePhotoShowcase, tagKeys i18n en webCasesData, avance eliminaciÃ³n ProjectCard. |
| 2.0 | 2026-05-12 | Miguel + Claude Sonnet 4.6 | Cierre Subfase 5.2 Chrome global. Â§0 versiÃ³n bumped. Â§5.2 Ã¡rbol de carpetas actualizado con `home/` y `layout/` + nota D38-1. Â§7.4 DT-01 campo Estado corregido a 5/7. Â§7.4 DT-09 marcado resuelto con nota de drift documental. Â§13 entrada D38 con sub-decisiones D38-1 a D38-3. |
| 2.1 | 2026-05-13 | Miguel + Claude Opus 4.7 | Cierre Subfase 5.4 Contact form REBUILD. Â§0 versiÃ³n bumped. Â§7.4 DT-01 marcado âœ… 7/7 con 3 commits de la subfase. Â§7.4 DT-02 actualizado con cierre parcial Sprint 1 (ContactForm y processData descartados). Â§7.4 nueva entrada DT-17 (namespace `pricing.*` legacy con 3 keys ES aÃ±adidas para paridad, auditar en 5.5). Â§9.4 patrÃ³n base Playwright ampliado con `locale: 'es-ES'` obligatorio en context (lecciÃ³n O3). Â§13 entrada D39 con sub-decisiones D39-1 a D39-9 (HomeContact canÃ³nico, descarte legacy, service preservado, terms preservado RGPD, mensaje texto plano, DOMPurify directo, DT-01 total, lecciÃ³n FormMessage+i18n, lecciÃ³n locale Playwright). |
