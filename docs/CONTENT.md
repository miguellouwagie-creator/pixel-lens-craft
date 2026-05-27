# CONTENT.md — Studio Pixelens Redesign v2

> **Propósito:** fuente única de copy para el rediseño Sprint 1. Cada entrada incluye clave i18n propuesta, versión ES, versión EN (draft por Claude, pendiente validación por Miguel), y breve justificación cuando es relevante. Las keys sustituyen o amplían las actuales en `src/i18n/locales/es.json` y `src/i18n/locales/en.json`.
>
> **Principio editorial operativo:**
> - Honestidad sobre hype: no se incluyen métricas ni claims no verificables.
> - Ritmo de lectura editorial: frases cortas, tono asertivo pero sobrio.
> - Sin emojis, sin exclamaciones en CTAs de producción, sin vocabulario SaaS americano ("transform your business", "next-level", "crush it").
> - ES es fuente primaria. EN se escribe en tono editorial británico/europeo, no US marketing.

---

## 0. Meta

| Campo | Valor |
|---|---|
| Versión | 1.3 |
| Fecha | 2026-05-26 |
| Autor | Miguel Louwagie Sapena + Claude Opus 4.7 |
| Estado | Draft. EN validado parcialmente (Subfases 5.1, 5.2, 5.4 y 5.5a cableados en código). |
| Alcance | Sprint 1: Home, /portfolio, /portfolio-webs, chrome global (Header, Footer, WhatsApp CTA). No cubre legal ni páginas autenticadas. |
| Bloquea | G1 gate. |

---

## 1. Páginas cubiertas

| Página | Bloques | Keys nuevas | Keys modificadas | Keys eliminadas |
|---|---|---|---|---|
| Home | 8 | ~60 | ~25 | ~40 |
| /portfolio | 4 | ~15 | ~10 | ~15 |
| /portfolio-webs | 4 | ~18 | ~18 | ~7 (goldencoast) |
| Chrome (Header, Footer, WhatsApp) | — | ~8 | ~12 | ~5 |

---

## 2. Convención de keys i18n

Patrón actual del repo: `section.subsection.element` (ej. `hero.title`, `photoPacks.corporate.feature1`).

**Nuevas keys** siguen el mismo patrón. Cuando un bloque cambia drásticamente, la key se renombra (ej. `hero.title` → `home.hero.headline`) para señalar la ruptura conceptual y permitir rollback si se quiere.

**Namespace general propuesto:**
- `home.*` — bloques del Home
- `portfolio.*` — bloques de /portfolio (fotografía)
- `portfolioWebs.*` — bloques de /portfolio-webs (desarrollo web)
- `common.cta.*`, `common.nav.*`, `common.footer.*`, `common.toast.*` — reutilizados

Keys antiguas se eliminan al final del proceso (sección 9 de este documento).

---

## 3. Home — copy por bloque

### 3.1 Bloque 1 — Hero

**Estructura:** eyebrow small, H1 Playfair grande, subclaim Inter 18px, CTA primario WhatsApp + link secundario "Ver trabajo".

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.hero.eyebrow` | `Estudio digital · Dénia` | `Digital studio · Dénia` |
| `home.hero.headline` | `Trabajo visual y técnico para negocios que quieren crecer.` | `Visual and technical work for businesses that want to grow.` |
| `home.hero.subclaim` | `Desarrollo web y fotografía profesional. Un solo estudio, un solo estándar. Sin intermediarios, sin plantillas.` | `Web development and professional photography. One studio, one standard. No middlemen, no templates.` |
| `home.hero.ctaPrimary` | `Hablemos por WhatsApp` | `Let's talk on WhatsApp` |
| `home.hero.ctaSecondary` | `Ver trabajo` | `See our work` |

**Justificación copy:**
- Headline evita "transformamos tu negocio" (hype) y "soluciones digitales" (genérico). Afirma lo que hacemos y para quién.
- Subclaim explica dos servicios + diferencial (sin intermediarios, sin plantillas) en una línea.
- CTA primario es conversacional, no "Get started" ni "Start now".

---

### 3.2 Bloque 2 — Qué hacemos (servicios)

**Estructura:** H2 centrado Playfair, debajo dos tarjetas verticales numeradas 01/02 con imagen + título + body editorial corto.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.services.heading` | `Dos disciplinas, un mismo estándar.` | `Two disciplines, one standard.` |
| `home.services.subheading` | `No somos una agencia generalista. Hacemos dos cosas y las hacemos bien.` | `We are not a generalist agency. We do two things and we do them well.` |
| `home.services.web.number` | `01` | `01` |
| `home.services.web.label` | `Desarrollo web` | `Web development` |
| `home.services.web.title` | `Webs construidas a medida.` | `Custom-built websites.` |
| `home.services.web.body` | `Código propio en React y TypeScript. Sin plantillas recicladas. Cada web se diseña para responder a un problema concreto de un negocio concreto.` | `Custom code in React and TypeScript. No recycled templates. Every site is designed to solve a specific problem for a specific business.` |
| `home.services.web.link` | `Ver portfolio web →` | `See web portfolio →` |
| `home.services.photo.number` | `02` | `02` |
| `home.services.photo.label` | `Fotografía profesional` | `Professional photography` |
| `home.services.photo.title` | `Imagen que cuenta lo que tienes que contar.` | `Imagery that tells what needs to be told.` |
| `home.services.photo.body` | `Fotografía corporativa, producto, eventos, inmobiliaria. También edición profesional de fotos que ya tienes. Cada imagen se trata con cuidado editorial.` | `Corporate, product, events, real estate photography. Professional editing of images you already have, as well. Every image is treated with editorial care.` |
| `home.services.photo.link` | `Ver portfolio fotográfico →` | `See photo portfolio →` |

**Justificación copy:**
- Heading afirma la doble especialización como disciplina, no como "servicio 1 + servicio 2".
- Subheading explícitamente rechaza el posicionamiento de "agencia full-service" (que es donde compite low-cost).
- Body de cada tarjeta incluye diferenciales concretos (código propio, edición de fotos que ya tienes).

**Reemplaza:** `ServiceSelector` actual (split-screen con dos paneles interactivos hover). El `ServiceSelector.tsx` pasa a DESCARTAR en MIGRATION.md.

---

### 3.3 Bloque 3 — Casos de estudio web (teaser)

**Estructura:** H2 aligned left Playfair, subheading Inter, scroll horizontal con snap de 3 casos (TropiDenia, BVS, GymDenia). Cada tarjeta: imagen 4:3, eyebrow con sector, H3 con tagline, body corto, tags, link a /portfolio-webs.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.casesWeb.eyebrow` | `Trabajo reciente` | `Recent work` |
| `home.casesWeb.heading` | `Casos de estudio en desarrollo web.` | `Web development case studies.` |
| `home.casesWeb.subheading` | `Tres proyectos recientes para negocios locales. Cada uno resuelve un problema distinto.` | `Three recent projects for local businesses. Each solves a different problem.` |
| `home.casesWeb.case1.eyebrow` | `TropiDenia · Turismo local` | `TropiDenia · Local tourism` |
| `home.casesWeb.case1.title` | `Reservas directas, sin intermediarios.` | `Direct bookings, no middlemen.` |
| `home.casesWeb.case1.body` | `Eliminamos la dependencia de plataformas externas con comisiones. Sistema de reservas propio con control total del negocio desde el día uno.` | `We removed dependency on external booking platforms with their commissions. A custom booking system with full business control from day one.` |
| `home.casesWeb.case1.tag1` | `UI/UX` | `UI/UX` |
| `home.casesWeb.case1.tag2` | `React` | `React` |
| `home.casesWeb.case1.tag3` | `Reservas` | `Bookings` |
| `home.casesWeb.case2.eyebrow` | `BVS Trabajos Verticales · Servicios industriales` | `BVS Trabajos Verticales · Industrial services` |
| `home.casesWeb.case2.title` | `Presencia digital que transmite oficio.` | `A digital presence that conveys craft.` |
| `home.casesWeb.case2.body` | `Rediseñamos su imagen online para reflejar la seriedad técnica del negocio. Más leads cualificados, proyectos más grandes, autoridad en el sector.` | `We redesigned their online image to reflect the technical seriousness of the business. More qualified leads, larger projects, sector authority.` |
| `home.casesWeb.case2.tag1` | `Corporativa` | `Corporate` |
| `home.casesWeb.case2.tag2` | `SEO` | `SEO` |
| `home.casesWeb.case3.eyebrow` | `GymDenia · Fitness local` | `GymDenia · Local fitness` |
| `home.casesWeb.case3.title` | `Captación local que funciona a diario.` | `Local acquisition that works daily.` |
| `home.casesWeb.case3.body` | `Pasó de ser invisible online a convertirse en la referencia fitness de su zona. Formularios optimizados que transforman visitantes en socios cada semana.` | `From invisible online to the local fitness reference. Optimised forms that turn visitors into members every week.` |
| `home.casesWeb.case3.tag1` | `Diseño Web` | `Web Design` |
| `home.casesWeb.case3.tag2` | `Formularios` | `Forms` |
| `home.casesWeb.case3.tag3` | `Responsive` | `Responsive` |
| `home.casesWeb.cta` | `Ver todos los casos →` | `See all cases →` |

**Justificación copy:**
- Claim "+40% más ingresos" eliminado de TropiDenia (no verificable públicamente, D31.1).
- Tag `WordPress` eliminado de BVS por incoherencia con stack declarado (D31.2).
- Cada caso tiene H3 memorable de una línea + body de 2 frases. No hay bicolumna "Problema/Solución".

---

### 3.4 Bloque 4 — Trabajo fotográfico (teaser)

**Estructura:** full-bleed antes/después con slider (`react-compare-slider`). H2 aligned right Playfair, caption editorial, CTA a /portfolio.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.photoShowcase.eyebrow` | `Trabajo fotográfico` | `Photography work` |
| `home.photoShowcase.heading` | `Imagen antes, imagen después.` | `Image before, image after.` |
| `home.photoShowcase.body` | `Cada foto pasa por un proceso manual de ajuste de luz, contraste, color y detalle. Desliza el control para ver la diferencia.` | `Every image goes through a manual process of light, contrast, colour and detail adjustment. Drag the control to see the difference.` |
| `home.photoShowcase.labelBefore` | `Original` | `Original` |
| `home.photoShowcase.labelAfter` | `Editada` | `Edited` |
| `home.photoShowcase.cta` | `Ver portfolio fotográfico →` | `See photo portfolio →` |

**Nota técnica:** este bloque reutiliza `react-compare-slider` ya instalado (DT-12 se cierra aquí y en /portfolio Bloque C).

---

### 3.5 Bloque 5 — Cómo trabajamos (proceso)

**Estructura:** H2 Playfair aligned left, debajo 3 bloques verticales con numeral grande 01/02/03 + H3 + body + promesa.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.process.eyebrow` | `Cómo trabajamos` | `How we work` |
| `home.process.heading` | `Un proceso claro, sin sorpresas.` | `A clear process, no surprises.` |
| `home.process.step1.number` | `01` | `01` |
| `home.process.step1.title` | `Escuchamos.` | `We listen.` |
| `home.process.step1.body` | `Primera conversación gratuita. Queremos entender tu negocio, tu cliente y el problema real que tienes. No vamos a recomendar nada que no nos creamos.` | `A free first conversation. We want to understand your business, your customer, and the real problem you have. We won't recommend anything we don't believe in.` |
| `home.process.step1.promise` | `Respuesta en 48 horas.` | `Response within 48 hours.` |
| `home.process.step2.number` | `02` | `02` |
| `home.process.step2.title` | `Construimos.` | `We build.` |
| `home.process.step2.body` | `Propuesta concreta con alcance, coste y plazos. Sin letra pequeña. Empezamos cuando confirmas, no antes.` | `A concrete proposal with scope, cost and timing. No fine print. We start when you confirm, not before.` |
| `home.process.step2.promise` | `Propuesta escrita siempre.` | `Always a written proposal.` |
| `home.process.step3.number` | `03` | `03` |
| `home.process.step3.title` | `Entregamos y acompañamos.` | `We deliver and support.` |
| `home.process.step3.body` | `Entregamos lo acordado en plazo. Tras el lanzamiento seguimos disponibles para ajustes, dudas y lo que aparezca. No somos una agencia que desaparece.` | `We deliver what we agreed, on time. After launch we remain available for adjustments, questions and anything that comes up. We are not an agency that disappears.` |
| `home.process.step3.promise` | `30 días de acompañamiento incluido.` | `30 days of support included.` |

**Justificación copy:**
- Los tres pasos son afirmaciones de una palabra seguidas de cuerpo. Jerarquía clara.
- Cada paso tiene una promesa cuantificable (48h, propuesta escrita, 30 días). Son compromisos verificables.
- Se elimina el bloque de pricing embebido que tenía `StickyScrollSection` actual.

**Reemplaza:** `StickyScrollSection.tsx` actual (proceso + pricing mezclado). Pricing se saca del Home.

---

### 3.6 Bloque 6 — Quiénes somos (About + trust signals)

**Estructura:** 2 columnas 50/50. Columna izquierda: imágenes Miguel + Sergio apiladas verticalmente con tratamiento editorial uniforme (Opción A1 confirmada). Columna derecha: H2 + body narrativo + lista de trust signals.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.about.eyebrow` | `Quiénes somos` | `Who we are` |
| `home.about.heading` | `Un estudio pequeño con criterio propio.` | `A small studio with its own standards.` |
| `home.about.body1` | `Somos Miguel y Sergio, hermanos y socios. Trabajamos con negocios locales de la Marina Alta que ya tienen algo que contar y necesitan a alguien que lo cuente bien.` | `We are Miguel and Sergio, brothers and partners. We work with local businesses in Marina Alta that already have something to say and need someone to say it well.` |
| `home.about.body2` | `Miguel se encarga del desarrollo web y la dirección del estudio. Sergio se encarga de fotografía y producción visual. Hablamos entre nosotros y contigo directamente. Sin capas intermedias.` | `Miguel handles web development and studio direction. Sergio handles photography and visual production. We talk to each other and to you directly. No middle layers.` |
| `home.about.miguelName` | `Miguel Louwagie` | `Miguel Louwagie` |
| `home.about.miguelRole` | `Desarrollo · Dirección` | `Development · Direction` |
| `home.about.sergioName` | `Sergio Louwagie` | `Sergio Louwagie` |
| `home.about.sergioRole` | `Fotografía · Producción` | `Photography · Production` |
| `home.about.trustHeading` | `Trabajar con nosotros significa:` | `Working with us means:` |
| `home.about.trust1` | `Auditoría inicial gratuita, sin compromiso.` | `Free initial audit, no strings attached.` |
| `home.about.trust2` | `Sin permanencia ni contratos de retención.` | `No lock-in, no retainer contracts.` |
| `home.about.trust3` | `Trato directo con quien hace el trabajo.` | `Direct contact with the person doing the work.` |
| `home.about.trust4` | `Propiedad del código y los archivos al 100%.` | `Full ownership of code and files.` |

**Justificación copy:**
- Fusiona los componentes `About.tsx` y `WhyUs.tsx` actuales. `WhyUs.tsx` actual tenía 6 tarjetas con iconos coloridos — patrón anti-editorial prohibido por MASTER §6.1.
- Los 4 trust signals son compromisos verificables, no adjetivos vagos ("profesional", "experimentado").
- Se elimina el número hardcoded `wa.me/34634408043` que estaba en `WhyUs.tsx` (bug, teléfono distinto del resto del sitio).

**Nota operativa:** implementación de imágenes en columna izquierda como Opción A1 (split vertical de `miguel-photo.jpeg` + `sergio-foto2.png` con tratamiento editorial uniforme). Opción A2 (foto conjunta) queda como tarea manual pendiente, swap trivial en el futuro.

---

### 3.7 Bloque 7 — Testimonios

**Estructura:** 3 citas editoriales aligned left, sin círculos de iniciales coloridos, sin estrellas. Attribución en formato "Nombre · Empresa · Ciudad".

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.testimonials.eyebrow` | `Lo que dicen quienes trabajaron con nosotros` | `What those who worked with us say` |
| `home.testimonials.heading` | `Tres conversaciones reales.` | `Three real conversations.` |
| `home.testimonials.quote1.text` | `Entendieron el negocio en la primera reunión. Nos propusieron exactamente lo que necesitábamos, ni más ni menos. La web está funcionando muy por encima de lo que esperábamos.` | `They understood the business in the first meeting. They proposed exactly what we needed, no more, no less. The site is performing well above what we expected.` |
| `home.testimonials.quote1.author` | `María G.` | `María G.` |
| `home.testimonials.quote1.role` | `Propietaria · TropiDenia` | `Owner · TropiDenia` |
| `home.testimonials.quote2.text` | `Las fotos cambiaron la forma en que nos perciben los clientes. Profesionales, cuidadas, sin ese aire de foto de agencia genérica. Notamos el salto al día siguiente de publicarlas.` | `The photos changed how clients perceive us. Professional, considered, without that generic agency feel. We noticed the jump the day after publishing them.` |
| `home.testimonials.quote2.author` | `Robert M.` | `Robert M.` |
| `home.testimonials.quote2.role` | `Director · BVS Trabajos Verticales` | `Director · BVS Trabajos Verticales` |
| `home.testimonials.quote3.text` | `Trabajan con calma, sin prisa pero sin pausa. Nos explicaron cada decisión técnica con palabras que entendemos. Al acabar teníamos una web que nos representa, no una plantilla.` | `They work calmly, steadily. They explained every technical decision in words we understand. At the end we had a site that represents us, not a template.` |
| `home.testimonials.quote3.author` | `Ana L.` | `Ana L.` |
| `home.testimonials.quote3.role` | `Propietaria · GymDenia` | `Owner · GymDenia` |

**Justificación copy:**
- Cada testimonio tiene voz distinta (María habla de proceso, Robert de percepción, Ana de método). Evita el "me encanta, muy recomendable" genérico.
- Sin rating de estrellas. Sin iniciales en círculo con color de fondo. Solo tipografía editorial.

---

### 3.8 Bloque 8 — Contacto

**Estructura:** 2 columnas. Izquierda: H2 + body + CTA WhatsApp + email + horario. Derecha: formulario React Hook Form + Zod + DOMPurify (name, email, phone opt, service, message min 20, terms checkbox).

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.contact.eyebrow` | `Contacto` | `Contact` |
| `home.contact.heading` | `Una conversación de 15 minutos suele bastar.` | `A 15-minute conversation is usually enough.` |
| `home.contact.body` | `Cuéntanos qué necesitas. Si podemos ayudarte lo sabrás el mismo día. Si no, te diremos con quién sí puedes hablar.` | `Tell us what you need. If we can help you'll know the same day. If we can't, we'll point you to someone who can.` |
| `home.contact.whatsappCta` | `Hablemos por WhatsApp` | `Let's talk on WhatsApp` |
| `home.contact.emailLabel` | `O por email` | `Or by email` |
| `home.contact.emailAddress` | `studiopixelens@gmail.com` | `studiopixelens@gmail.com` |
| `home.contact.hoursLabel` | `Horario de atención` | `Hours` |
| `home.contact.hoursValue` | `Lun-Vie · 9:00-18:00 · Europe/Madrid` | `Mon-Fri · 9:00-18:00 · Europe/Madrid` |
| `home.contact.form.heading` | `O escríbenos desde aquí` | `Or write to us from here` |
| `home.contact.form.nameLabel` | `Nombre` | `Name` |
| `home.contact.form.namePlaceholder` | `Tu nombre` | `Your name` |
| `home.contact.form.emailLabel` | `Email` | `Email` |
| `home.contact.form.emailPlaceholder` | `tu@email.com` | `you@email.com` |
| `home.contact.form.phoneLabel` | `Teléfono (opcional)` | `Phone (optional)` |
| `home.contact.form.phonePlaceholder` | `+34 600 000 000` | `+34 600 000 000` |
| `home.contact.form.serviceLabel` | `Servicio` | `Service` |
| `home.contact.form.servicePlaceholder` | `¿Qué necesitas?` | `What do you need?` |
| `home.contact.form.serviceOptions.web` | `Diseño web` | `Web design` |
| `home.contact.form.serviceOptions.photo` | `Fotografía` | `Photography` |
| `home.contact.form.serviceOptions.both` | `Ambos` | `Both` |
| `home.contact.form.messageLabel` | `Cuéntanos` | `Tell us more` |
| `home.contact.form.messagePlaceholder` | `¿Qué tienes en mente?` | `What do you have in mind?` |
| `home.contact.form.termsLabel` | `He leído y acepto la` | `I have read and accept the` |
| `home.contact.form.termsLink` | `política de privacidad` | `privacy policy` |
| `home.contact.form.submit` | `Enviar mensaje` | `Send message` |
| `home.contact.form.submitting` | `Enviando...` | `Sending...` |
| `home.contact.form.validation.nameTooShort` | `El nombre es demasiado corto` | `Name is too short` |
| `home.contact.form.validation.emailInvalid` | `Email no válido` | `Invalid email` |
| `home.contact.form.validation.messageTooShort` | `El mensaje debe tener al menos 20 caracteres` | `Message must be at least 20 characters` |
| `home.contact.form.validation.serviceRequired` | `Selecciona un servicio` | `Select a service` |
| `home.contact.form.validation.termsRequired` | `Debes aceptar la política de privacidad` | `You must accept the privacy policy` |
| `home.contact.whatsapp.subject` | `Nuevo contacto desde studiopixelens.com` | `New contact from studiopixelens.com` |
| `home.contact.whatsapp.nameLabel` | `Nombre` | `Name` |
| `home.contact.whatsapp.emailLabel` | `Email` | `Email` |
| `home.contact.whatsapp.phoneLabel` | `Teléfono` | `Phone` |
| `home.contact.whatsapp.serviceLabel` | `Servicio` | `Service` |
| `home.contact.whatsapp.messageLabel` | `Mensaje` | `Message` |
| `common.toast.successTitle` | `Mensaje enviado` | `Message sent` |
| `common.toast.successBody` | `Te respondemos en menos de 48 horas.` | `We'll reply within 48 hours.` |
| `common.toast.errorTitle` | `Algo ha fallado` | `Something went wrong` |
| `common.toast.errorBody` | `Prueba por WhatsApp o email. Disculpa las molestias.` | `Try WhatsApp or email. Sorry for the inconvenience.` |

**Justificación copy:**
- CTA primario WhatsApp visible, formulario como opción secundaria (D30 resuelta).
- Email `studiopixelens@gmail.com` visible (fallback).
- Form con 6 campos. Mensaje mínimo 20 chars (preservado de MASTER §6.5). Phone opcional. Service dropdown 3 opciones (D39-3, Q5-E=A). Checkbox terms con link a `/privacidad` por RGPD (D39-4, Q5-F=A).
- Payload WhatsApp en texto plano formato `campo: valor` sin emojis (D39-5, Q5-G=C), coherente con principio editorial §0.
- Toast messages usan namespace `common.toast.*` para reutilización en otras páginas.

**Cableado en código (Subfase 5.4, 2026-05-13):**
Implementado en `src/components/home/HomeContact.tsx` (D39-1). Sustituye al placeholder lorem heredado de Fase 4 (D36-3). Los archivos `ContactForm.tsx` y `FormSection.tsx` legacy descartados (D39-2). Schema Zod en `useMemo([t])` por incompat shadcn FormMessage (D39-8). DOMPurify importado directo, strip total `ALLOWED_TAGS: [], ALLOWED_ATTR: []` para texto plano (D39-6).

---

## 4. /portfolio — copy por bloque

### 4.1 Bloque A — Header editorial

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolio.header.breadcrumb` | `← Inicio` | `← Home` |
| `portfolio.header.eyebrow` | `Portfolio · Fotografía` | `Portfolio · Photography` |
| `portfolio.header.headline` | `Cada imagen cuenta mejor cuando está bien editada.` | `Every image tells its story better when it's edited well.` |
| `portfolio.header.body` | `Trabajamos con propietarios de negocios locales que ya tienen buenas fotos, pero les falta el acabado profesional. Desliza los controles y compara.` | `We work with local business owners who already have good photos but lack the professional finish. Drag the controls and compare.` |

---

### 4.2 Bloque B — Intro contextual (reducida, sin números)

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolio.intro.body` | `Cada imagen pasa por un proceso manual de ajuste de luz, contraste, color y detalle. Sin filtros automáticos, sin presets genéricos. Trabajamos hasta que la escena cuenta lo que tiene que contar.` | `Every image goes through a manual process of light, contrast, colour and detail adjustment. No automatic filters, no generic presets. We work until the scene tells what it needs to tell.` |

**Justificación copy:**
- Versión reducida sin tiempos concretos, sin software mencionado, sin compromisos numéricos. Honesta con el material disponible. Si en el futuro Miguel confirma datos (Lightroom, 20-40 min/foto, etc.), se añade entonces.

---

### 4.3 Bloque C — Galería

**Estructura:** grid 2 cols desktop, 1 col mobile, aspect 4:3 horizontal. Slider `react-compare-slider` horizontal. Badge dinámico "Original / Editada" según posición del slider. Caption editorial por imagen.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolio.gallery.heading` | `Comparativa antes / después` | `Before / after comparison` |
| `portfolio.gallery.labelBefore` | `Original` | `Original` |
| `portfolio.gallery.labelAfter` | `Editada` | `Edited` |
| `portfolio.gallery.item1.number` | `#01` | `#01` |
| `portfolio.gallery.item1.title` | `Retrato corporativo` | `Corporate portrait` |
| `portfolio.gallery.item1.caption` | `Ajuste de luz natural, piel corregida, fondo limpiado.` | `Natural light adjustment, skin correction, background cleanup.` |
| `portfolio.gallery.item2.number` | `#02` | `#02` |
| `portfolio.gallery.item2.title` | `Producto en exterior` | `Product outdoors` |
| `portfolio.gallery.item2.caption` | `Recuperación de detalle en sombras, fondo virado para integración editorial.` | `Shadow detail recovery, background toning for editorial integration.` |
| `portfolio.gallery.item3.number` | `#03` | `#03` |
| `portfolio.gallery.item3.title` | `Interior inmobiliario` | `Real estate interior` |
| `portfolio.gallery.item3.caption` | `Corrección de tonos mixtos de luz, reequilibrio de ventanas quemadas.` | `Mixed light tone correction, rebalancing of blown-out windows.` |
| `portfolio.gallery.item4.number` | `#04` | `#04` |
| `portfolio.gallery.item4.title` | `Fachada exterior` | `Exterior façade` |
| `portfolio.gallery.item4.caption` | `Ajuste de perspectiva, limpieza de cables y elementos distractores.` | `Perspective adjustment, cleanup of cables and distracting elements.` |
| `portfolio.gallery.item5.number` | `#05` | `#05` |
| `portfolio.gallery.item5.title` | `Gastronomía` | `Food` |
| `portfolio.gallery.item5.caption` | `Tratamiento de color en plato, separación figura-fondo intensificada.` | `Plate colour treatment, enhanced figure-background separation.` |
| `portfolio.gallery.item6.number` | `#06` | `#06` |
| `portfolio.gallery.item6.title` | `Producto en estudio` | `Studio product` |
| `portfolio.gallery.item6.caption` | `Fondo uniformado, brillos controlados, detalle de textura resaltado.` | `Uniform background, controlled highlights, enhanced texture detail.` |
| `portfolio.gallery.item7.number` | `#07` | `#07` |
| `portfolio.gallery.item7.title` | `Retrato ambiente` | `Environmental portrait` |
| `portfolio.gallery.item7.caption` | `Integración de sujeto y espacio, corrección de temperatura de color.` | `Subject-space integration, colour temperature correction.` |
| `portfolio.gallery.item8.number` | `#08` | `#08` |
| `portfolio.gallery.item8.title` | `Detalle arquitectónico` | `Architectural detail` |
| `portfolio.gallery.item8.caption` | `Eliminación de aberraciones cromáticas, realce de textura de materiales.` | `Chromatic aberration removal, material texture enhancement.` |
| `portfolio.gallery.item9.number` | `#09` | `#09` |
| `portfolio.gallery.item9.title` | `Escena nocturna` | `Night scene` |
| `portfolio.gallery.item9.caption` | `Reducción de ruido, recuperación de zonas oscuras, balance de luces mixtas.` | `Noise reduction, shadow recovery, mixed light balance.` |

**Notas para Miguel:**
- Los títulos y captions del 01 al 09 son propuestas editoriales genéricas. Miguel ajusta según lo que realmente hizo en cada foto cuando conozca las imágenes concretas. Esto es plantilla, no texto final inamovible.
- Si alguna imagen actual del portfolio no encaja con ninguno de estos títulos genéricos, se reemplaza el título por uno específico al ejecutar Fase 5.5.

---

### 4.4 Bloque D — Cierre

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolio.closing.heading` | `¿Tienes fotos que no terminan de convencerte?` | `Do you have photos that don't quite convince you?` |
| `portfolio.closing.body` | `Podemos editar las que ya tienes o fotografiar desde cero. La consulta inicial es gratuita.` | `We can edit the ones you already have or shoot from scratch. Initial consultation is free.` |
| `portfolio.closing.ctaPrimary` | `Hablemos por WhatsApp` | `Let's talk on WhatsApp` |
| `portfolio.closing.linkCross` | `Ver portfolio web →` | `See web portfolio →` |

---

## 5. /portfolio-webs — copy por bloque

### 5.1 Bloque A — Header editorial

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolioWebs.header.breadcrumb` | `← Inicio` | `← Home` |
| `portfolioWebs.header.eyebrow` | `Portfolio · Desarrollo web` | `Portfolio · Web development` |
| `portfolioWebs.header.headline` | `Cada web resuelve un problema concreto de un negocio concreto.` | `Every site solves a specific problem for a specific business.` |
| `portfolioWebs.header.body` | `No hacemos portfolios de plantillas que se ven bonitas en Dribbble. Hacemos webs que responden preguntas reales de propietarios reales. Esto es lo que nos han pedido nuestros clientes y cómo lo hemos resuelto.` | `We don't showcase templates that look nice on Dribbble. We build sites that answer real questions from real owners. This is what our clients asked for and how we solved it.` |

---

### 5.2 Bloque B — Intro metodológica

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolioWebs.intro.body` | `Cada proyecto empieza con dos preguntas: a quién servimos y qué pasa si hacemos esto muy bien. Todo lo demás (framework, diseño, copy, motion) sale de ahí.` | `Every project starts with two questions: who are we serving, and what happens if we do this really well. Everything else (framework, design, copy, motion) follows from there.` |
| `portfolioWebs.intro.tech1` | `React + TypeScript` | `React + TypeScript` |
| `portfolioWebs.intro.tech2` | `SEO técnico desde el día uno` | `Technical SEO from day one` |
| `portfolioWebs.intro.tech3` | `Performance > 90 en Lighthouse` | `Lighthouse Performance > 90` |
| `portfolioWebs.intro.tech4` | `Código propio, sin plantillas` | `Custom code, no templates` |

---

### 5.3 Bloque C — Casos de estudio (3 casos)

Se mantienen mismas keys que Home §3.3 para evitar duplicación, pero con descripciones más largas aquí al haber espacio. Propuesta: namespace separado `portfolioWebs.cases.*` con versión extendida de body.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolioWebs.cases.case1.eyebrow` | `TropiDenia · Turismo local` | `TropiDenia · Local tourism` |
| `portfolioWebs.cases.case1.headline` | `Reservas directas, sin intermediarios.` | `Direct bookings, no middlemen.` |
| `portfolioWebs.cases.case1.description` | `TropiDenia dependía de plataformas de reservas externas que cobraban comisión por cada cliente. La web anterior no permitía reservar directamente. Construimos un sistema de reservas propio integrado en la web, con control total del negocio desde el día uno.` | `TropiDenia relied on external booking platforms that charged a commission per customer. The old site didn't allow direct bookings. We built a custom booking system integrated into the site, giving them full business control from day one.` |
| `portfolioWebs.cases.case1.tag1` | `UI/UX` | `UI/UX` |
| `portfolioWebs.cases.case1.tag2` | `React` | `React` |
| `portfolioWebs.cases.case1.tag3` | `Reservas` | `Bookings` |
| `portfolioWebs.cases.case2.eyebrow` | `BVS Trabajos Verticales · Servicios industriales` | `BVS Trabajos Verticales · Industrial services` |
| `portfolioWebs.cases.case2.headline` | `Presencia digital que transmite oficio.` | `A digital presence that conveys craft.` |
| `portfolioWebs.cases.case2.description` | `BVS es una empresa de trabajos en altura y fachadas. Su web anterior no reflejaba la seriedad técnica del negocio. Rediseñamos la identidad digital con un enfoque sobrio y técnico. Resultado: más leads cualificados, proyectos más grandes, autoridad en el sector.` | `BVS is a vertical-access and façade company. Their old site didn't reflect the technical seriousness of the business. We redesigned the digital identity with a sober, technical approach. Result: more qualified leads, larger projects, sector authority.` |
| `portfolioWebs.cases.case2.tag1` | `Corporativa` | `Corporate` |
| `portfolioWebs.cases.case2.tag2` | `SEO` | `SEO` |
| `portfolioWebs.cases.case3.eyebrow` | `GymDenia · Fitness local` | `GymDenia · Local fitness` |
| `portfolioWebs.cases.case3.headline` | `Captación local que funciona a diario.` | `Local acquisition that works daily.` |
| `portfolioWebs.cases.case3.description` | `GymDenia tenía visibilidad online baja. Los vecinos del barrio no sabían que existía, y los que llegaban desde Google no convertían por una web desordenada. Rehicimos la web con foco en conversión local, SEO optimizado y formularios breves. Hoy es su principal canal de captación.` | `GymDenia had low online visibility. Neighbours didn't know it existed, and those who arrived via Google didn't convert due to a disorganised site. We rebuilt it focused on local conversion, optimised SEO and short forms. Today it is their main acquisition channel.` |
| `portfolioWebs.cases.case3.tag1` | `Diseño Web` | `Web Design` |
| `portfolioWebs.cases.case3.tag2` | `Formularios` | `Forms` |
| `portfolioWebs.cases.case3.tag3` | `Responsive` | `Responsive` |

**Justificación copy:**
- Descripción única por caso (no bicolumna Problema/Solución), según D31.3. 2 frases de contexto + 1 frase de resultado.
- Sin métricas inventadas. Sin tags que contradigan stack (WordPress fuera).
- En Home el body es 1 frase (teaser). Aquí es 2-3 frases (detalle). Mismo caso, dos niveles de profundidad.

---

### 5.4 Bloque D — Cierre

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolioWebs.closing.heading` | `¿Tienes un proyecto en mente?` | `Do you have a project in mind?` |
| `portfolioWebs.closing.body` | `Auditoría inicial gratuita. Si podemos ayudarte, hay propuesta en 48 horas.` | `Free initial audit. If we can help, there's a proposal within 48 hours.` |
| `portfolioWebs.closing.ctaPrimary` | `Hablemos por WhatsApp` | `Let's talk on WhatsApp` |
| `portfolioWebs.closing.linkCross` | `Ver portfolio fotográfico →` | `See photo portfolio →` |

---

## 6. Chrome global — Header, Footer, WhatsApp CTA

### 6.1 Header

**Estructura simplificada:** logo + nav (Inicio, Servicios, Portfolio, Sobre, Contacto) + lang toggle + CTA WhatsApp. Sin pill-on-scroll. Sin dropdown complejo de portfolio (los dos portfolios se linkan desde bloques Home, no desde nav).

| Key i18n | ES | EN (draft) |
|---|---|---|
| `common.nav.home` | `Inicio` | `Home` |
| `common.nav.services` | `Servicios` | `Services` |
| `common.nav.portfolio` | `Portfolio` | `Portfolio` |
| `common.nav.portfolioPhoto` | `Fotografía` | `Photography` |
| `common.nav.portfolioWeb` | `Desarrollo web` | `Web development` |
| `common.nav.contact` | `Contacto` | `Contact` |
| `common.nav.about` | `Sobre` | `About` |
| `common.nav.whatsappCta` | `WhatsApp` | `WhatsApp` |
| `common.nav.langToggle` | `ES / EN` | `ES / EN` |

**Nota:** `common.nav.portfolio` funciona como label del menú desplegable que contiene `portfolioPhoto` y `portfolioWeb`. Se mantiene el patrón de dropdown actual pero simplificado visualmente. `common.nav.about` añadido en Subfase 5.2 (commit `adb524b`): el Header real tiene 5 nav items incluyendo Sobre (anchor `/#about`, D36-2). CONTENT.md v1.0 listaba 4.

---

### 6.2 Footer

**Estructura:** 4 columnas. Columna 1: logo + claim corto. Columna 2: nav repetida. Columna 3: contacto (email, WhatsApp, horario). Columna 4: legal (aviso legal, privacidad, cookies).

| Key i18n | ES | EN (draft) |
|---|---|---|
| `common.footer.claim` | `Estudio digital independiente en Dénia. Desarrollo web y fotografía profesional para negocios locales.` | `Independent digital studio in Dénia. Web development and professional photography for local businesses.` |
| `common.footer.navHeading` | `Navegación` | `Navigation` |
| `common.footer.contactHeading` | `Contacto` | `Contact` |
| `common.footer.legalHeading` | `Legal` | `Legal` |
| `common.footer.legalNotice` | `Aviso legal` | `Legal notice` |
| `common.footer.privacy` | `Política de privacidad` | `Privacy policy` |
| `common.footer.cookies` | `Política de cookies` | `Cookie policy` |
| `common.footer.rightsReserved` | `© 2026 Studio Pixelens. Todos los derechos reservados.` | `© 2026 Studio Pixelens. All rights reserved.` |
| `common.footer.location` | `Dénia, Alicante, España` | `Dénia, Alicante, Spain` |

**Fix:** añade `common.footer.rightsReserved` que faltaba (INVENTORY §16 nota: clave ausente). Arregla también el "Aviso Legal" hardcoded en ES en `Footer.tsx` actual — ahora viene de i18n.

---

### 6.3 WhatsApp button (floating)

| Key i18n | ES | EN (draft) |
|---|---|---|
| `common.whatsapp.ariaLabel` | `Contactar por WhatsApp` | `Contact via WhatsApp` |
| `common.whatsapp.tooltip` | `Hablemos por WhatsApp` | `Let's talk on WhatsApp` |
| `common.whatsapp.prefilledMessage` | `Hola, me gustaría hablar sobre un proyecto para mi negocio.` | `Hi, I'd like to discuss a project for my business.` |

**Nota técnica:** el botón usa `wa.me/{VITE_WHATSAPP_NUMBER}?text={prefilledMessage}`. Reemplaza los 7 archivos con `"34667326300"` hardcoded (DT-01 se cierra aquí).

---

## 7. Anti-patrones de copy (prohibidos en producción)

Al escribir nuevo copy o revisar existente, las siguientes construcciones quedan vetadas:

1. **Emojis en copy de producción.** Ni 🚀, ni ✨, ni 💎. Excepción: emojis que el usuario escriba en sus mensajes (no los eliminamos en respuestas automáticas o testimonios, solo en el copy nuestro).
2. **Exclamaciones en CTAs y headings.** "¡Descubre ahora!", "¡Empieza ya!", "¡Transforma tu negocio!" están prohibidos. Ruido visual, tono agresivo.
3. **Hype words vacías.** "Soluciones", "innovador", "vanguardia", "disruptivo", "next-level", "game-changer", "cutting-edge", "high-end", "premium" (como adjetivo genérico sin sustancia), "excelencia", "calidad superior". Si se necesita transmitir la idea, se transmite con hechos concretos (ej. "código propio, sin plantillas") no con adjetivos.
4. **Claims numéricos sin prueba verificable.** "+200 empresas impulsadas", "+40% ingresos", "milagro en 48 horas". Solo se usan números si se pueden respaldar con captura, contrato o fuente pública.
5. **Superlativos comerciales.** "Los mejores", "número uno", "referentes del sector". Son fáciles de escribir y difíciles de sostener.
6. **"Nosotros" genérico sin referente.** Si aparece "nosotros" o "nuestro equipo" en el copy, debe quedar claro quiénes son (Miguel y Sergio). No hablamos de un equipo imaginado.
7. **Precios en Home.** El pricing se trata en conversación directa o en una página de /servicios (no existe aún). No se embute en el Home.
8. **Copy que asume tecnicismo sin explicarlo.** Si mencionamos "SEO técnico", "Lighthouse", "React" — vale, pero siempre en contexto (ej. tech list) no como jerga sola.
9. **Promesas temporales no cumplibles.** Si decimos "respuesta en 48h" es porque se cumple. Si no, quitamos el número.
10. **Copy que aparenta profundidad con palabras huecas.** "Donde la tecnología se encuentra con el arte". Hasta que no encuentras un contenido que no suene a plantilla de Wix, lo reescribes.

---

## 8. Voz y registro

**Spanish (ES) — fuente primaria:**
- Registro formal "usted" NO. Usamos "tú" directo, cercano pero sobrio.
- Sin regionalismos (ni "currar", ni "guay", ni "chulo"). Español neutro de España, comprensible también para hispanoamericano.
- Frases cortas, ritmo pausado. Coma como recurso de ritmo, no de pausa decorativa.
- Afirmaciones declarativas. Pocas preguntas (solo cierres tipo "¿Tienes un proyecto en mente?").

**English (EN) — traducción editorial:**
- Inglés británico / europeo no americano. "Optimised" no "optimized". "Colour" no "color". "Whilst" no "while" (con moderación). "Bookings" no "reservations".
- No se traducen literalmente los giros españoles. Si un idiom ES no tiene equivalente EN, se reescribe desde cero con el mismo significado.
- Nivel de formalidad similar al ES. Directo pero no familiar.
- Todas las entradas EN son **draft propuesto por Claude**. Miguel revisa antes de Fase 5.

---

## 9. Keys a eliminar de los locales actuales

Al migrar a `es.json` y `en.json` nuevos, estas keys deben desaparecer (huérfanas, obsoletas, o reemplazadas):

### 9.1 Huérfanas (nunca usadas por componentes activos)

```
portfolioShowcase.goldencoast.title
portfolioShowcase.goldencoast.tagline
portfolioShowcase.goldencoast.description
portfolioShowcase.goldencoast.tag1
portfolioShowcase.goldencoast.tag2
portfolioShowcase.goldencoast.tag3
photoPacks.trial.*
photoPacks.basic.*
photoPacks.standard.*
photoPacks.premium.*
```

**Razón:** Golden Coast nunca se renderizó (D31.1). Los `photoPacks.trial/basic/standard/premium` fueron iteraciones antiguas superadas por `photoPacks.corporate/realestate/events/gastronomy/custom`. Ya registradas como DT adicional al de INVENTORY §16.18.

### 9.2 Reemplazadas por rediseño (se van al REBUILD)

```
hero.title, hero.subtitle, hero.description (→ home.hero.*)
serviceSelector.* (→ home.services.*, componente ServiceSelector DESCARTAR)
horizontalShowcase.* (→ home.casesWeb.*, componente HorizontalShowcase DESCARTAR o merge)
stickyScroll.* (→ home.process.*, pricing embebido eliminado)
whyUs.* (→ home.about.trust*, componente WhyUs fusionado con About)
photoPricingSection.* (→ eliminado del Home, pendiente futura página /servicios)
about.* actuales (→ home.about.*, copy reescrito)
testimonials.* (→ home.testimonials.*, copy reescrito)
formSection.* (→ home.contact.*)
portfolioHero.* Portfolio.tsx actual (→ portfolio.header.*)
portfolioCta.* Portfolio.tsx actual (→ portfolio.closing.*)
```

### 9.3 A mantener (no se tocan en Sprint 1)

```
dashboard.* (Sprint 2)
auth.* (Sprint 2)
photoPacks.corporate/realestate/events/gastronomy/custom.* (se usan en componente actual, se migran tal cual a la futura /servicios)
legal.* (aviso, privacidad, cookies, páginas legales mantienen copy actual hasta revisión específica)
```

---

## 10. Diff conceptual (copy actual → copy nuevo)

| Lugar | Copy actual | Copy nuevo | Razón cambio |
|---|---|---|---|
| Hero H1 | `Fotografía Profesional y Diseño Web de Alto Impacto` | `Trabajo visual y técnico para negocios que quieren crecer.` | Elimina "Alto Impacto" (hype). Afirma el servicio, no el resultado prometido. |
| Hero subclaim | `Transforma tu marca con imágenes que venden y webs que convierten. Calidad profesional en Dénia y la Costa Blanca.` | `Desarrollo web y fotografía profesional. Un solo estudio, un solo estándar. Sin intermediarios, sin plantillas.` | "Transforma" eliminado. Claim más concreto sobre el servicio real. |
| Hero CTA | `SOLICITAR PRESUPUESTO GRATIS` (uppercase) | `Hablemos por WhatsApp` | Tono conversacional sobrio. Uppercase eliminado. |
| ServiceSelector heading | `Dos Servicios, Una Visión` | `Dos disciplinas, un mismo estándar.` | "Servicios" → "disciplinas" (menos SaaS). Afirmación editorial. |
| HorizontalShowcase heading | `Trabajos que han transformado negocios reales` | `Casos de estudio en desarrollo web.` | Sin "transformado" ni "reales" redundante. Etiqueta editorial clásica. |
| TropiDenia tagline | `Sistema de reservas que generó +40% más ingresos` | `Reservas directas, sin intermediarios.` | +40% no verificable públicamente. Nueva tagline describe el qué, no el cuánto. |
| BVS tag | `WordPress` | (tag eliminado) | Contradice stack declarado React-only. |
| Proceso heading | `Nuestro Proceso en 4 Pasos` | `Un proceso claro, sin sorpresas.` | "Nuestro proceso" genérico. Nueva versión afirma beneficio al cliente. |
| Testimonios headings actuales | `María G.`, `Roberto García`, `Ana López` con estrellas y rating | Mismos nombres sin estrellas, reescritos con voces distintas | Sin rating visual. Cada testimonio tiene voz editorial, no formato review. |
| Portfolio H1 | `Nuestro Portfolio Fotográfico` | `Cada imagen cuenta mejor cuando está bien editada.` | Afirmación editorial en vez de etiqueta de sección. |
| Portfolio intro | (no existía como bloque independiente) | `Cada imagen pasa por un proceso manual de ajuste...` | Nuevo bloque B sobrio, sin números inventados. |
| Portfolio labels antes/después | `← Antes` y `Después →` con colores rojo/verde | `Original` y `Editada`, badges sobrios | Semántica más neutral, sin connotación de "antes malo / después bueno". |
| PortfolioWebs fondo | Gradiente naranja-rojo con glow | `--background` dark con tipografía editorial | Coherencia con "Editorial Structural". |
| WhatsApp number | `34667326300` hardcoded en 7 archivos, `34634408043` en WhyUs (inconsistencia) | `VITE_WHATSAPP_NUMBER` único | Cierra DT-01. Elimina bug de número distinto en WhyUs. |

---

## 11. Validación pendiente antes de Fase 5

Lista de cosas que Miguel revisa antes de que CONTENT.md entre en producción (Fase 5.1):

- [ ] Traducción EN de todas las entradas (draft actual por Claude).
- [ ] Nombres completos de autores de testimonios (actualmente `María G.`, `Robert M.`, `Ana L.` — decidir si publican apellido completo o solo inicial).
- [ ] Títulos y captions de las 9 imágenes de /portfolio (actualmente propuestas genéricas, Miguel ajusta según lo que realmente hizo).
- [ ] Email `studiopixelens@gmail.com` confirmado como canal oficial.
- [ ] Horario `Lun-Vie · 9:00-18:00 · Europe/Madrid` confirmado o ajustado.
- [ ] Datos técnicos de /portfolio Bloque B: decidir si se añaden tiempos (ej. "48h de entrega") o se mantiene versión sobria actual.
- [ ] Roles de Miguel y Sergio: `Desarrollo · Dirección` y `Fotografía · Producción` confirmados o ajustados.
- [ ] Claim corto del footer: `Estudio digital independiente en Dénia...` aprobado.

---

## 12. Notas operativas para Antigravity (Fase 5)

Cuando Claude Code migre este copy a `src/i18n/locales/es.json` y `en.json`:

1. **No borrar el JSON actual sin backup.** Hacer copia temporal `es.json.bak` en `/tmp/` antes de reescribir. Si pasa algo, se recupera.
2. **Mantener orden alfabético dentro de cada namespace.** Facilita diff futuros.
3. **Escapar comillas correctamente.** Algunas entradas contienen comillas o apóstrofes (p. ej. "Trabajan con calma, sin prisa pero sin pausa."). JSON válido siempre.
4. **Validar con test manual.** Abrir `/`, `/portfolio`, `/portfolio-webs` en ES y EN. Ninguna key debe renderizar en pantalla como `home.hero.headline` literal (señal de key ausente).
5. **Playwright test obligatorio (MASTER §9.2):** al modificar i18n de Nav/Forms/Footer, correr `npm run test:e2e` antes de commit.
6. **Las keys del namespace `portfolio.gallery.item1-9.*` pueden quedar como strings vacíos si Miguel aún no ha revisado cada foto.** En ese caso, el componente las ignora silenciosamente. Mejor eso que renderizar lorem ipsum.

---

## 13. Change log

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-19 | Miguel + Claude Opus 4.7 | Documento inicial. Cubre Home (8 bloques), /portfolio (4 bloques), /portfolio-webs (4 bloques), chrome global. ES definitivo, EN draft. Anti-patrones (10 reglas). Keys a eliminar (huérfanas + reemplazadas). Diff conceptual vs copy actual. Validación pendiente. Aplicadas D31.1 (quitar +40% TropiDenia), D31.2 (quitar tag WordPress BVS), D31.3 (descripción única por caso web), D31.4 (Bloque B /portfolio reducido sin números). |
| 1.1 | 2026-05-12 | Miguel + Claude Sonnet 4.6 | §6.1 Header actualizado: "Estructura simplificada" con 5 nav items, key `common.nav.about` añadida a la tabla (ES: `Sobre`, EN: `About`), nota al pie ampliada. Corrección de drift respecto a Header real validado en G5 parcial 5.2. |
| 1.2 | 2026-05-13 | Miguel + Claude Opus 4.7 | Cierre Subfase 5.4 Contact form REBUILD. §0 versión + fecha + estado bumped. §3.8 tabla ampliada con 17 keys nuevas: `form.serviceLabel`, `form.servicePlaceholder`, `form.serviceOptions.web/photo/both` (D39-3), `form.termsLabel`, `form.termsLink` (D39-4), `form.validation.nameTooShort/emailInvalid/messageTooShort/serviceRequired/termsRequired` (D39-8 patrón i18n vía useMemo), `whatsapp.subject/nameLabel/emailLabel/phoneLabel/serviceLabel/messageLabel` (D39-5 payload texto plano). §3.8 justificación copy actualizada con referencias a D39-3 a D39-8 y notas sobre RGPD, Q5-E/F/G. §3.8 nueva sección "Cableado en código" referenciando HomeContact.tsx y descarte legacy. Drift documental cerrado: v1.0 afirmaba "Form con 4 campos" cuando la realidad cableada en 5.4 son 6 (añadidos service y terms preservados del legacy). |
| 1.3 | 2026-05-26 | Miguel + Claude Opus 4.7 | Cierre Subfase 5.5a /portfolio REBUILD. §0 versión + fecha + estado bumped. §3.4 y §4.3 find+replace `react-compare-image` → `react-compare-slider` (drift librería resuelto, DT-12 cerrado con librería real `react-compare-slider v4`; el paquete antiguo está sin mantener desde 2021). Las 22 keys `portfolio.*` (header.{breadcrumb,eyebrow,headline,body}, intro.body, gallery.{heading,labelBefore,labelAfter,item1..item9.{number,title,caption}}, closing.{heading,body,ctaPrimary,linkCross}) cableadas en `es.json` y `en.json` paridad diff:0 (452 keys totales). DT-17 cerrado: namespace `pricing.photoPacks` eliminado completo de ambos locales. |