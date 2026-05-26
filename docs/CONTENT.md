# CONTENT.md â€” Studio Pixelens Redesign v2

> **PropÃ³sito:** fuente Ãºnica de copy para el rediseÃ±o Sprint 1. Cada entrada incluye clave i18n propuesta, versiÃ³n ES, versiÃ³n EN (draft por Claude, pendiente validaciÃ³n por Miguel), y breve justificaciÃ³n cuando es relevante. Las keys sustituyen o amplÃ­an las actuales en `src/i18n/locales/es.json` y `src/i18n/locales/en.json`.
>
> **Principio editorial operativo:**
> - Honestidad sobre hype: no se incluyen mÃ©tricas ni claims no verificables.
> - Ritmo de lectura editorial: frases cortas, tono asertivo pero sobrio.
> - Sin emojis, sin exclamaciones en CTAs de producciÃ³n, sin vocabulario SaaS americano ("transform your business", "next-level", "crush it").
> - ES es fuente primaria. EN se escribe en tono editorial britÃ¡nico/europeo, no US marketing.

---

## 0. Meta

| Campo | Valor |
|---|---|
| VersiÃ³n | 1.3 |
| Fecha | 2026-05-26 |
| Autor | Miguel Louwagie Sapena + Claude Opus 4.7 |
| Estado | Draft. EN validado parcialmente (Subfases 5.1, 5.2, 5.4 y 5.5a cableadas). |
| Alcance | Sprint 1: Home, /portfolio, /portfolio-webs, chrome global (Header, Footer, WhatsApp CTA). No cubre legal ni pÃ¡ginas autenticadas. |
| Bloquea | G1 gate. |

---

## 1. PÃ¡ginas cubiertas

| PÃ¡gina | Bloques | Keys nuevas | Keys modificadas | Keys eliminadas |
|---|---|---|---|---|
| Home | 8 | ~60 | ~25 | ~40 |
| /portfolio | 4 | ~15 | ~10 | ~15 |
| /portfolio-webs | 4 | ~18 | ~18 | ~7 (goldencoast) |
| Chrome (Header, Footer, WhatsApp) | â€” | ~8 | ~12 | ~5 |

---

## 2. ConvenciÃ³n de keys i18n

PatrÃ³n actual del repo: `section.subsection.element` (ej. `hero.title`, `photoPacks.corporate.feature1`).

**Nuevas keys** siguen el mismo patrÃ³n. Cuando un bloque cambia drÃ¡sticamente, la key se renombra (ej. `hero.title` â†’ `home.hero.headline`) para seÃ±alar la ruptura conceptual y permitir rollback si se quiere.

**Namespace general propuesto:**
- `home.*` â€” bloques del Home
- `portfolio.*` â€” bloques de /portfolio (fotografÃ­a)
- `portfolioWebs.*` â€” bloques de /portfolio-webs (desarrollo web)
- `common.cta.*`, `common.nav.*`, `common.footer.*`, `common.toast.*` â€” reutilizados

Keys antiguas se eliminan al final del proceso (secciÃ³n 9 de este documento).

---

## 3. Home â€” copy por bloque

### 3.1 Bloque 1 â€” Hero

**Estructura:** eyebrow small, H1 Playfair grande, subclaim Inter 18px, CTA primario WhatsApp + link secundario "Ver trabajo".

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.hero.eyebrow` | `Estudio digital Â· DÃ©nia` | `Digital studio Â· DÃ©nia` |
| `home.hero.headline` | `Trabajo visual y tÃ©cnico para negocios que quieren crecer.` | `Visual and technical work for businesses that want to grow.` |
| `home.hero.subclaim` | `Desarrollo web y fotografÃ­a profesional. Un solo estudio, un solo estÃ¡ndar. Sin intermediarios, sin plantillas.` | `Web development and professional photography. One studio, one standard. No middlemen, no templates.` |
| `home.hero.ctaPrimary` | `Hablemos por WhatsApp` | `Let's talk on WhatsApp` |
| `home.hero.ctaSecondary` | `Ver trabajo` | `See our work` |

**JustificaciÃ³n copy:**
- Headline evita "transformamos tu negocio" (hype) y "soluciones digitales" (genÃ©rico). Afirma lo que hacemos y para quiÃ©n.
- Subclaim explica dos servicios + diferencial (sin intermediarios, sin plantillas) en una lÃ­nea.
- CTA primario es conversacional, no "Get started" ni "Start now".

---

### 3.2 Bloque 2 â€” QuÃ© hacemos (servicios)

**Estructura:** H2 centrado Playfair, debajo dos tarjetas verticales numeradas 01/02 con imagen + tÃ­tulo + body editorial corto.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.services.heading` | `Dos disciplinas, un mismo estÃ¡ndar.` | `Two disciplines, one standard.` |
| `home.services.subheading` | `No somos una agencia generalista. Hacemos dos cosas y las hacemos bien.` | `We are not a generalist agency. We do two things and we do them well.` |
| `home.services.web.number` | `01` | `01` |
| `home.services.web.label` | `Desarrollo web` | `Web development` |
| `home.services.web.title` | `Webs construidas a medida.` | `Custom-built websites.` |
| `home.services.web.body` | `CÃ³digo propio en React y TypeScript. Sin plantillas recicladas. Cada web se diseÃ±a para responder a un problema concreto de un negocio concreto.` | `Custom code in React and TypeScript. No recycled templates. Every site is designed to solve a specific problem for a specific business.` |
| `home.services.web.link` | `Ver portfolio web â†’` | `See web portfolio â†’` |
| `home.services.photo.number` | `02` | `02` |
| `home.services.photo.label` | `FotografÃ­a profesional` | `Professional photography` |
| `home.services.photo.title` | `Imagen que cuenta lo que tienes que contar.` | `Imagery that tells what needs to be told.` |
| `home.services.photo.body` | `FotografÃ­a corporativa, producto, eventos, inmobiliaria. TambiÃ©n ediciÃ³n profesional de fotos que ya tienes. Cada imagen se trata con cuidado editorial.` | `Corporate, product, events, real estate photography. Professional editing of images you already have, as well. Every image is treated with editorial care.` |
| `home.services.photo.link` | `Ver portfolio fotogrÃ¡fico â†’` | `See photo portfolio â†’` |

**JustificaciÃ³n copy:**
- Heading afirma la doble especializaciÃ³n como disciplina, no como "servicio 1 + servicio 2".
- Subheading explÃ­citamente rechaza el posicionamiento de "agencia full-service" (que es donde compite low-cost).
- Body de cada tarjeta incluye diferenciales concretos (cÃ³digo propio, ediciÃ³n de fotos que ya tienes).

**Reemplaza:** `ServiceSelector` actual (split-screen con dos paneles interactivos hover). El `ServiceSelector.tsx` pasa a DESCARTAR en MIGRATION.md.

---

### 3.3 Bloque 3 â€” Casos de estudio web (teaser)

**Estructura:** H2 aligned left Playfair, subheading Inter, scroll horizontal con snap de 3 casos (TropiDenia, BVS, GymDenia). Cada tarjeta: imagen 4:3, eyebrow con sector, H3 con tagline, body corto, tags, link a /portfolio-webs.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.casesWeb.eyebrow` | `Trabajo reciente` | `Recent work` |
| `home.casesWeb.heading` | `Casos de estudio en desarrollo web.` | `Web development case studies.` |
| `home.casesWeb.subheading` | `Tres proyectos recientes para negocios locales. Cada uno resuelve un problema distinto.` | `Three recent projects for local businesses. Each solves a different problem.` |
| `home.casesWeb.case1.eyebrow` | `TropiDenia Â· Turismo local` | `TropiDenia Â· Local tourism` |
| `home.casesWeb.case1.title` | `Reservas directas, sin intermediarios.` | `Direct bookings, no middlemen.` |
| `home.casesWeb.case1.body` | `Eliminamos la dependencia de plataformas externas con comisiones. Sistema de reservas propio con control total del negocio desde el dÃ­a uno.` | `We removed dependency on external booking platforms with their commissions. A custom booking system with full business control from day one.` |
| `home.casesWeb.case1.tag1` | `UI/UX` | `UI/UX` |
| `home.casesWeb.case1.tag2` | `React` | `React` |
| `home.casesWeb.case1.tag3` | `Reservas` | `Bookings` |
| `home.casesWeb.case2.eyebrow` | `BVS Trabajos Verticales Â· Servicios industriales` | `BVS Trabajos Verticales Â· Industrial services` |
| `home.casesWeb.case2.title` | `Presencia digital que transmite oficio.` | `A digital presence that conveys craft.` |
| `home.casesWeb.case2.body` | `RediseÃ±amos su imagen online para reflejar la seriedad tÃ©cnica del negocio. MÃ¡s leads cualificados, proyectos mÃ¡s grandes, autoridad en el sector.` | `We redesigned their online image to reflect the technical seriousness of the business. More qualified leads, larger projects, sector authority.` |
| `home.casesWeb.case2.tag1` | `Corporativa` | `Corporate` |
| `home.casesWeb.case2.tag2` | `SEO` | `SEO` |
| `home.casesWeb.case3.eyebrow` | `GymDenia Â· Fitness local` | `GymDenia Â· Local fitness` |
| `home.casesWeb.case3.title` | `CaptaciÃ³n local que funciona a diario.` | `Local acquisition that works daily.` |
| `home.casesWeb.case3.body` | `PasÃ³ de ser invisible online a convertirse en la referencia fitness de su zona. Formularios optimizados que transforman visitantes en socios cada semana.` | `From invisible online to the local fitness reference. Optimised forms that turn visitors into members every week.` |
| `home.casesWeb.case3.tag1` | `DiseÃ±o Web` | `Web Design` |
| `home.casesWeb.case3.tag2` | `Formularios` | `Forms` |
| `home.casesWeb.case3.tag3` | `Responsive` | `Responsive` |
| `home.casesWeb.cta` | `Ver todos los casos â†’` | `See all cases â†’` |

**JustificaciÃ³n copy:**
- Claim "+40% mÃ¡s ingresos" eliminado de TropiDenia (no verificable pÃºblicamente, D31.1).
- Tag `WordPress` eliminado de BVS por incoherencia con stack declarado (D31.2).
- Cada caso tiene H3 memorable de una lÃ­nea + body de 2 frases. No hay bicolumna "Problema/SoluciÃ³n".

---

### 3.4 Bloque 4 â€” Trabajo fotogrÃ¡fico (teaser)

**Estructura:** full-bleed antes/despuÃ©s con slider (`react-compare-slider`). H2 aligned right Playfair, caption editorial, CTA a /portfolio.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.photoShowcase.eyebrow` | `Trabajo fotogrÃ¡fico` | `Photography work` |
| `home.photoShowcase.heading` | `Imagen antes, imagen despuÃ©s.` | `Image before, image after.` |
| `home.photoShowcase.body` | `Cada foto pasa por un proceso manual de ajuste de luz, contraste, color y detalle. Desliza el control para ver la diferencia.` | `Every image goes through a manual process of light, contrast, colour and detail adjustment. Drag the control to see the difference.` |
| `home.photoShowcase.labelBefore` | `Original` | `Original` |
| `home.photoShowcase.labelAfter` | `Editada` | `Edited` |
| `home.photoShowcase.cta` | `Ver portfolio fotogrÃ¡fico â†’` | `See photo portfolio â†’` |

**Nota tÃ©cnica:** este bloque reutiliza `react-compare-slider` ya instalado (DT-12 se cierra aquÃ­ y en /portfolio Bloque C).

---

### 3.5 Bloque 5 â€” CÃ³mo trabajamos (proceso)

**Estructura:** H2 Playfair aligned left, debajo 3 bloques verticales con numeral grande 01/02/03 + H3 + body + promesa.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.process.eyebrow` | `CÃ³mo trabajamos` | `How we work` |
| `home.process.heading` | `Un proceso claro, sin sorpresas.` | `A clear process, no surprises.` |
| `home.process.step1.number` | `01` | `01` |
| `home.process.step1.title` | `Escuchamos.` | `We listen.` |
| `home.process.step1.body` | `Primera conversaciÃ³n gratuita. Queremos entender tu negocio, tu cliente y el problema real que tienes. No vamos a recomendar nada que no nos creamos.` | `A free first conversation. We want to understand your business, your customer, and the real problem you have. We won't recommend anything we don't believe in.` |
| `home.process.step1.promise` | `Respuesta en 48 horas.` | `Response within 48 hours.` |
| `home.process.step2.number` | `02` | `02` |
| `home.process.step2.title` | `Construimos.` | `We build.` |
| `home.process.step2.body` | `Propuesta concreta con alcance, coste y plazos. Sin letra pequeÃ±a. Empezamos cuando confirmas, no antes.` | `A concrete proposal with scope, cost and timing. No fine print. We start when you confirm, not before.` |
| `home.process.step2.promise` | `Propuesta escrita siempre.` | `Always a written proposal.` |
| `home.process.step3.number` | `03` | `03` |
| `home.process.step3.title` | `Entregamos y acompaÃ±amos.` | `We deliver and support.` |
| `home.process.step3.body` | `Entregamos lo acordado en plazo. Tras el lanzamiento seguimos disponibles para ajustes, dudas y lo que aparezca. No somos una agencia que desaparece.` | `We deliver what we agreed, on time. After launch we remain available for adjustments, questions and anything that comes up. We are not an agency that disappears.` |
| `home.process.step3.promise` | `30 dÃ­as de acompaÃ±amiento incluido.` | `30 days of support included.` |

**JustificaciÃ³n copy:**
- Los tres pasos son afirmaciones de una palabra seguidas de cuerpo. JerarquÃ­a clara.
- Cada paso tiene una promesa cuantificable (48h, propuesta escrita, 30 dÃ­as). Son compromisos verificables.
- Se elimina el bloque de pricing embebido que tenÃ­a `StickyScrollSection` actual.

**Reemplaza:** `StickyScrollSection.tsx` actual (proceso + pricing mezclado). Pricing se saca del Home.

---

### 3.6 Bloque 6 â€” QuiÃ©nes somos (About + trust signals)

**Estructura:** 2 columnas 50/50. Columna izquierda: imÃ¡genes Miguel + Sergio apiladas verticalmente con tratamiento editorial uniforme (OpciÃ³n A1 confirmada). Columna derecha: H2 + body narrativo + lista de trust signals.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.about.eyebrow` | `QuiÃ©nes somos` | `Who we are` |
| `home.about.heading` | `Un estudio pequeÃ±o con criterio propio.` | `A small studio with its own standards.` |
| `home.about.body1` | `Somos Miguel y Sergio, hermanos y socios. Trabajamos con negocios locales de la Marina Alta que ya tienen algo que contar y necesitan a alguien que lo cuente bien.` | `We are Miguel and Sergio, brothers and partners. We work with local businesses in Marina Alta that already have something to say and need someone to say it well.` |
| `home.about.body2` | `Miguel se encarga del desarrollo web y la direcciÃ³n del estudio. Sergio se encarga de fotografÃ­a y producciÃ³n visual. Hablamos entre nosotros y contigo directamente. Sin capas intermedias.` | `Miguel handles web development and studio direction. Sergio handles photography and visual production. We talk to each other and to you directly. No middle layers.` |
| `home.about.miguelName` | `Miguel Louwagie` | `Miguel Louwagie` |
| `home.about.miguelRole` | `Desarrollo Â· DirecciÃ³n` | `Development Â· Direction` |
| `home.about.sergioName` | `Sergio Louwagie` | `Sergio Louwagie` |
| `home.about.sergioRole` | `FotografÃ­a Â· ProducciÃ³n` | `Photography Â· Production` |
| `home.about.trustHeading` | `Trabajar con nosotros significa:` | `Working with us means:` |
| `home.about.trust1` | `AuditorÃ­a inicial gratuita, sin compromiso.` | `Free initial audit, no strings attached.` |
| `home.about.trust2` | `Sin permanencia ni contratos de retenciÃ³n.` | `No lock-in, no retainer contracts.` |
| `home.about.trust3` | `Trato directo con quien hace el trabajo.` | `Direct contact with the person doing the work.` |
| `home.about.trust4` | `Propiedad del cÃ³digo y los archivos al 100%.` | `Full ownership of code and files.` |

**JustificaciÃ³n copy:**
- Fusiona los componentes `About.tsx` y `WhyUs.tsx` actuales. `WhyUs.tsx` actual tenÃ­a 6 tarjetas con iconos coloridos â€” patrÃ³n anti-editorial prohibido por MASTER Â§6.1.
- Los 4 trust signals son compromisos verificables, no adjetivos vagos ("profesional", "experimentado").
- Se elimina el nÃºmero hardcoded `wa.me/34634408043` que estaba en `WhyUs.tsx` (bug, telÃ©fono distinto del resto del sitio).

**Nota operativa:** implementaciÃ³n de imÃ¡genes en columna izquierda como OpciÃ³n A1 (split vertical de `miguel-photo.jpeg` + `sergio-foto2.png` con tratamiento editorial uniforme). OpciÃ³n A2 (foto conjunta) queda como tarea manual pendiente, swap trivial en el futuro.

---

### 3.7 Bloque 7 â€” Testimonios

**Estructura:** 3 citas editoriales aligned left, sin cÃ­rculos de iniciales coloridos, sin estrellas. AttribuciÃ³n en formato "Nombre Â· Empresa Â· Ciudad".

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.testimonials.eyebrow` | `Lo que dicen quienes trabajaron con nosotros` | `What those who worked with us say` |
| `home.testimonials.heading` | `Tres conversaciones reales.` | `Three real conversations.` |
| `home.testimonials.quote1.text` | `Entendieron el negocio en la primera reuniÃ³n. Nos propusieron exactamente lo que necesitÃ¡bamos, ni mÃ¡s ni menos. La web estÃ¡ funcionando muy por encima de lo que esperÃ¡bamos.` | `They understood the business in the first meeting. They proposed exactly what we needed, no more, no less. The site is performing well above what we expected.` |
| `home.testimonials.quote1.author` | `MarÃ­a G.` | `MarÃ­a G.` |
| `home.testimonials.quote1.role` | `Propietaria Â· TropiDenia` | `Owner Â· TropiDenia` |
| `home.testimonials.quote2.text` | `Las fotos cambiaron la forma en que nos perciben los clientes. Profesionales, cuidadas, sin ese aire de foto de agencia genÃ©rica. Notamos el salto al dÃ­a siguiente de publicarlas.` | `The photos changed how clients perceive us. Professional, considered, without that generic agency feel. We noticed the jump the day after publishing them.` |
| `home.testimonials.quote2.author` | `Robert M.` | `Robert M.` |
| `home.testimonials.quote2.role` | `Director Â· BVS Trabajos Verticales` | `Director Â· BVS Trabajos Verticales` |
| `home.testimonials.quote3.text` | `Trabajan con calma, sin prisa pero sin pausa. Nos explicaron cada decisiÃ³n tÃ©cnica con palabras que entendemos. Al acabar tenÃ­amos una web que nos representa, no una plantilla.` | `They work calmly, steadily. They explained every technical decision in words we understand. At the end we had a site that represents us, not a template.` |
| `home.testimonials.quote3.author` | `Ana L.` | `Ana L.` |
| `home.testimonials.quote3.role` | `Propietaria Â· GymDenia` | `Owner Â· GymDenia` |

**JustificaciÃ³n copy:**
- Cada testimonio tiene voz distinta (MarÃ­a habla de proceso, Robert de percepciÃ³n, Ana de mÃ©todo). Evita el "me encanta, muy recomendable" genÃ©rico.
- Sin rating de estrellas. Sin iniciales en cÃ­rculo con color de fondo. Solo tipografÃ­a editorial.

---

### 3.8 Bloque 8 â€” Contacto

**Estructura:** 2 columnas. Izquierda: H2 + body + CTA WhatsApp + email + horario. Derecha: formulario React Hook Form + Zod + DOMPurify (name, email, phone opt, service, message min 20, terms checkbox).

| Key i18n | ES | EN (draft) |
|---|---|---|
| `home.contact.eyebrow` | `Contacto` | `Contact` |
| `home.contact.heading` | `Una conversaciÃ³n de 15 minutos suele bastar.` | `A 15-minute conversation is usually enough.` |
| `home.contact.body` | `CuÃ©ntanos quÃ© necesitas. Si podemos ayudarte lo sabrÃ¡s el mismo dÃ­a. Si no, te diremos con quiÃ©n sÃ­ puedes hablar.` | `Tell us what you need. If we can help you'll know the same day. If we can't, we'll point you to someone who can.` |
| `home.contact.whatsappCta` | `Hablemos por WhatsApp` | `Let's talk on WhatsApp` |
| `home.contact.emailLabel` | `O por email` | `Or by email` |
| `home.contact.emailAddress` | `studiopixelens@gmail.com` | `studiopixelens@gmail.com` |
| `home.contact.hoursLabel` | `Horario de atenciÃ³n` | `Hours` |
| `home.contact.hoursValue` | `Lun-Vie Â· 9:00-18:00 Â· Europe/Madrid` | `Mon-Fri Â· 9:00-18:00 Â· Europe/Madrid` |
| `home.contact.form.heading` | `O escrÃ­benos desde aquÃ­` | `Or write to us from here` |
| `home.contact.form.nameLabel` | `Nombre` | `Name` |
| `home.contact.form.namePlaceholder` | `Tu nombre` | `Your name` |
| `home.contact.form.emailLabel` | `Email` | `Email` |
| `home.contact.form.emailPlaceholder` | `tu@email.com` | `you@email.com` |
| `home.contact.form.phoneLabel` | `TelÃ©fono (opcional)` | `Phone (optional)` |
| `home.contact.form.phonePlaceholder` | `+34 600 000 000` | `+34 600 000 000` |
| `home.contact.form.serviceLabel` | `Servicio` | `Service` |
| `home.contact.form.servicePlaceholder` | `Â¿QuÃ© necesitas?` | `What do you need?` |
| `home.contact.form.serviceOptions.web` | `DiseÃ±o web` | `Web design` |
| `home.contact.form.serviceOptions.photo` | `FotografÃ­a` | `Photography` |
| `home.contact.form.serviceOptions.both` | `Ambos` | `Both` |
| `home.contact.form.messageLabel` | `CuÃ©ntanos` | `Tell us more` |
| `home.contact.form.messagePlaceholder` | `Â¿QuÃ© tienes en mente?` | `What do you have in mind?` |
| `home.contact.form.termsLabel` | `He leÃ­do y acepto la` | `I have read and accept the` |
| `home.contact.form.termsLink` | `polÃ­tica de privacidad` | `privacy policy` |
| `home.contact.form.submit` | `Enviar mensaje` | `Send message` |
| `home.contact.form.submitting` | `Enviando...` | `Sending...` |
| `home.contact.form.validation.nameTooShort` | `El nombre es demasiado corto` | `Name is too short` |
| `home.contact.form.validation.emailInvalid` | `Email no vÃ¡lido` | `Invalid email` |
| `home.contact.form.validation.messageTooShort` | `El mensaje debe tener al menos 20 caracteres` | `Message must be at least 20 characters` |
| `home.contact.form.validation.serviceRequired` | `Selecciona un servicio` | `Select a service` |
| `home.contact.form.validation.termsRequired` | `Debes aceptar la polÃ­tica de privacidad` | `You must accept the privacy policy` |
| `home.contact.whatsapp.subject` | `Nuevo contacto desde studiopixelens.com` | `New contact from studiopixelens.com` |
| `home.contact.whatsapp.nameLabel` | `Nombre` | `Name` |
| `home.contact.whatsapp.emailLabel` | `Email` | `Email` |
| `home.contact.whatsapp.phoneLabel` | `TelÃ©fono` | `Phone` |
| `home.contact.whatsapp.serviceLabel` | `Servicio` | `Service` |
| `home.contact.whatsapp.messageLabel` | `Mensaje` | `Message` |
| `common.toast.successTitle` | `Mensaje enviado` | `Message sent` |
| `common.toast.successBody` | `Te respondemos en menos de 48 horas.` | `We'll reply within 48 hours.` |
| `common.toast.errorTitle` | `Algo ha fallado` | `Something went wrong` |
| `common.toast.errorBody` | `Prueba por WhatsApp o email. Disculpa las molestias.` | `Try WhatsApp or email. Sorry for the inconvenience.` |

**JustificaciÃ³n copy:**
- CTA primario WhatsApp visible, formulario como opciÃ³n secundaria (D30 resuelta).
- Email `studiopixelens@gmail.com` visible (fallback).
- Form con 6 campos. Mensaje mÃ­nimo 20 chars (preservado de MASTER Â§6.5). Phone opcional. Service dropdown 3 opciones (D39-3, Q5-E=A). Checkbox terms con link a `/privacidad` por RGPD (D39-4, Q5-F=A).
- Payload WhatsApp en texto plano formato `campo: valor` sin emojis (D39-5, Q5-G=C), coherente con principio editorial Â§0.
- Toast messages usan namespace `common.toast.*` para reutilizaciÃ³n en otras pÃ¡ginas.

**Cableado en cÃ³digo (Subfase 5.4, 2026-05-13):**
Implementado en `src/components/home/HomeContact.tsx` (D39-1). Sustituye al placeholder lorem heredado de Fase 4 (D36-3). Los archivos `ContactForm.tsx` y `FormSection.tsx` legacy descartados (D39-2). Schema Zod en `useMemo([t])` por incompat shadcn FormMessage (D39-8). DOMPurify importado directo, strip total `ALLOWED_TAGS: [], ALLOWED_ATTR: []` para texto plano (D39-6).

---

## 4. /portfolio â€” copy por bloque

### 4.1 Bloque A â€” Header editorial

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolio.header.breadcrumb` | `â† Inicio` | `â† Home` |
| `portfolio.header.eyebrow` | `Portfolio Â· FotografÃ­a` | `Portfolio Â· Photography` |
| `portfolio.header.headline` | `Cada imagen cuenta mejor cuando estÃ¡ bien editada.` | `Every image tells its story better when it's edited well.` |
| `portfolio.header.body` | `Trabajamos con propietarios de negocios locales que ya tienen buenas fotos, pero les falta el acabado profesional. Desliza los controles y compara.` | `We work with local business owners who already have good photos but lack the professional finish. Drag the controls and compare.` |

---

### 4.2 Bloque B â€” Intro contextual (reducida, sin nÃºmeros)

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolio.intro.body` | `Cada imagen pasa por un proceso manual de ajuste de luz, contraste, color y detalle. Sin filtros automÃ¡ticos, sin presets genÃ©ricos. Trabajamos hasta que la escena cuenta lo que tiene que contar.` | `Every image goes through a manual process of light, contrast, colour and detail adjustment. No automatic filters, no generic presets. We work until the scene tells what it needs to tell.` |

**JustificaciÃ³n copy:**
- VersiÃ³n reducida sin tiempos concretos, sin software mencionado, sin compromisos numÃ©ricos. Honesta con el material disponible. Si en el futuro Miguel confirma datos (Lightroom, 20-40 min/foto, etc.), se aÃ±ade entonces.

---

### 4.3 Bloque C â€” GalerÃ­a

**Estructura:** grid 2 cols desktop, 1 col mobile, aspect 4:3 horizontal. Slider `react-compare-slider` horizontal. Badge dinÃ¡mico "Original / Editada" segÃºn posiciÃ³n del slider. Caption editorial por imagen.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolio.gallery.heading` | `Comparativa antes / despuÃ©s` | `Before / after comparison` |
| `portfolio.gallery.labelBefore` | `Original` | `Original` |
| `portfolio.gallery.labelAfter` | `Editada` | `Edited` |
| `portfolio.gallery.item1.number` | `#01` | `#01` |
| `portfolio.gallery.item1.title` | `Retrato corporativo` | `Corporate portrait` |
| `portfolio.gallery.item1.caption` | `Ajuste de luz natural, piel corregida, fondo limpiado.` | `Natural light adjustment, skin correction, background cleanup.` |
| `portfolio.gallery.item2.number` | `#02` | `#02` |
| `portfolio.gallery.item2.title` | `Producto en exterior` | `Product outdoors` |
| `portfolio.gallery.item2.caption` | `RecuperaciÃ³n de detalle en sombras, fondo virado para integraciÃ³n editorial.` | `Shadow detail recovery, background toning for editorial integration.` |
| `portfolio.gallery.item3.number` | `#03` | `#03` |
| `portfolio.gallery.item3.title` | `Interior inmobiliario` | `Real estate interior` |
| `portfolio.gallery.item3.caption` | `CorrecciÃ³n de tonos mixtos de luz, reequilibrio de ventanas quemadas.` | `Mixed light tone correction, rebalancing of blown-out windows.` |
| `portfolio.gallery.item4.number` | `#04` | `#04` |
| `portfolio.gallery.item4.title` | `Fachada exterior` | `Exterior faÃ§ade` |
| `portfolio.gallery.item4.caption` | `Ajuste de perspectiva, limpieza de cables y elementos distractores.` | `Perspective adjustment, cleanup of cables and distracting elements.` |
| `portfolio.gallery.item5.number` | `#05` | `#05` |
| `portfolio.gallery.item5.title` | `GastronomÃ­a` | `Food` |
| `portfolio.gallery.item5.caption` | `Tratamiento de color en plato, separaciÃ³n figura-fondo intensificada.` | `Plate colour treatment, enhanced figure-background separation.` |
| `portfolio.gallery.item6.number` | `#06` | `#06` |
| `portfolio.gallery.item6.title` | `Producto en estudio` | `Studio product` |
| `portfolio.gallery.item6.caption` | `Fondo uniformado, brillos controlados, detalle de textura resaltado.` | `Uniform background, controlled highlights, enhanced texture detail.` |
| `portfolio.gallery.item7.number` | `#07` | `#07` |
| `portfolio.gallery.item7.title` | `Retrato ambiente` | `Environmental portrait` |
| `portfolio.gallery.item7.caption` | `IntegraciÃ³n de sujeto y espacio, correcciÃ³n de temperatura de color.` | `Subject-space integration, colour temperature correction.` |
| `portfolio.gallery.item8.number` | `#08` | `#08` |
| `portfolio.gallery.item8.title` | `Detalle arquitectÃ³nico` | `Architectural detail` |
| `portfolio.gallery.item8.caption` | `EliminaciÃ³n de aberraciones cromÃ¡ticas, realce de textura de materiales.` | `Chromatic aberration removal, material texture enhancement.` |
| `portfolio.gallery.item9.number` | `#09` | `#09` |
| `portfolio.gallery.item9.title` | `Escena nocturna` | `Night scene` |
| `portfolio.gallery.item9.caption` | `ReducciÃ³n de ruido, recuperaciÃ³n de zonas oscuras, balance de luces mixtas.` | `Noise reduction, shadow recovery, mixed light balance.` |

**Notas para Miguel:**
- Los tÃ­tulos y captions del 01 al 09 son propuestas editoriales genÃ©ricas. Miguel ajusta segÃºn lo que realmente hizo en cada foto cuando conozca las imÃ¡genes concretas. Esto es plantilla, no texto final inamovible.
- Si alguna imagen actual del portfolio no encaja con ninguno de estos tÃ­tulos genÃ©ricos, se reemplaza el tÃ­tulo por uno especÃ­fico al ejecutar Fase 5.5.

---

### 4.4 Bloque D â€” Cierre

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolio.closing.heading` | `Â¿Tienes fotos que no terminan de convencerte?` | `Do you have photos that don't quite convince you?` |
| `portfolio.closing.body` | `Podemos editar las que ya tienes o fotografiar desde cero. La consulta inicial es gratuita.` | `We can edit the ones you already have or shoot from scratch. Initial consultation is free.` |
| `portfolio.closing.ctaPrimary` | `Hablemos por WhatsApp` | `Let's talk on WhatsApp` |
| `portfolio.closing.linkCross` | `Ver portfolio web â†’` | `See web portfolio â†’` |

---

## 5. /portfolio-webs â€” copy por bloque

### 5.1 Bloque A â€” Header editorial

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolioWebs.header.breadcrumb` | `â† Inicio` | `â† Home` |
| `portfolioWebs.header.eyebrow` | `Portfolio Â· Desarrollo web` | `Portfolio Â· Web development` |
| `portfolioWebs.header.headline` | `Cada web resuelve un problema concreto de un negocio concreto.` | `Every site solves a specific problem for a specific business.` |
| `portfolioWebs.header.body` | `No hacemos portfolios de plantillas que se ven bonitas en Dribbble. Hacemos webs que responden preguntas reales de propietarios reales. Esto es lo que nos han pedido nuestros clientes y cÃ³mo lo hemos resuelto.` | `We don't showcase templates that look nice on Dribbble. We build sites that answer real questions from real owners. This is what our clients asked for and how we solved it.` |

---

### 5.2 Bloque B â€” Intro metodolÃ³gica

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolioWebs.intro.body` | `Cada proyecto empieza con dos preguntas: a quiÃ©n servimos y quÃ© pasa si hacemos esto muy bien. Todo lo demÃ¡s (framework, diseÃ±o, copy, motion) sale de ahÃ­.` | `Every project starts with two questions: who are we serving, and what happens if we do this really well. Everything else (framework, design, copy, motion) follows from there.` |
| `portfolioWebs.intro.tech1` | `React + TypeScript` | `React + TypeScript` |
| `portfolioWebs.intro.tech2` | `SEO tÃ©cnico desde el dÃ­a uno` | `Technical SEO from day one` |
| `portfolioWebs.intro.tech3` | `Performance > 90 en Lighthouse` | `Lighthouse Performance > 90` |
| `portfolioWebs.intro.tech4` | `CÃ³digo propio, sin plantillas` | `Custom code, no templates` |

---

### 5.3 Bloque C â€” Casos de estudio (3 casos)

Se mantienen mismas keys que Home Â§3.3 para evitar duplicaciÃ³n, pero con descripciones mÃ¡s largas aquÃ­ al haber espacio. Propuesta: namespace separado `portfolioWebs.cases.*` con versiÃ³n extendida de body.

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolioWebs.cases.case1.eyebrow` | `TropiDenia Â· Turismo local` | `TropiDenia Â· Local tourism` |
| `portfolioWebs.cases.case1.headline` | `Reservas directas, sin intermediarios.` | `Direct bookings, no middlemen.` |
| `portfolioWebs.cases.case1.description` | `TropiDenia dependÃ­a de plataformas de reservas externas que cobraban comisiÃ³n por cada cliente. La web anterior no permitÃ­a reservar directamente. Construimos un sistema de reservas propio integrado en la web, con control total del negocio desde el dÃ­a uno.` | `TropiDenia relied on external booking platforms that charged a commission per customer. The old site didn't allow direct bookings. We built a custom booking system integrated into the site, giving them full business control from day one.` |
| `portfolioWebs.cases.case1.tag1` | `UI/UX` | `UI/UX` |
| `portfolioWebs.cases.case1.tag2` | `React` | `React` |
| `portfolioWebs.cases.case1.tag3` | `Reservas` | `Bookings` |
| `portfolioWebs.cases.case2.eyebrow` | `BVS Trabajos Verticales Â· Servicios industriales` | `BVS Trabajos Verticales Â· Industrial services` |
| `portfolioWebs.cases.case2.headline` | `Presencia digital que transmite oficio.` | `A digital presence that conveys craft.` |
| `portfolioWebs.cases.case2.description` | `BVS es una empresa de trabajos en altura y fachadas. Su web anterior no reflejaba la seriedad tÃ©cnica del negocio. RediseÃ±amos la identidad digital con un enfoque sobrio y tÃ©cnico. Resultado: mÃ¡s leads cualificados, proyectos mÃ¡s grandes, autoridad en el sector.` | `BVS is a vertical-access and faÃ§ade company. Their old site didn't reflect the technical seriousness of the business. We redesigned the digital identity with a sober, technical approach. Result: more qualified leads, larger projects, sector authority.` |
| `portfolioWebs.cases.case2.tag1` | `Corporativa` | `Corporate` |
| `portfolioWebs.cases.case2.tag2` | `SEO` | `SEO` |
| `portfolioWebs.cases.case3.eyebrow` | `GymDenia Â· Fitness local` | `GymDenia Â· Local fitness` |
| `portfolioWebs.cases.case3.headline` | `CaptaciÃ³n local que funciona a diario.` | `Local acquisition that works daily.` |
| `portfolioWebs.cases.case3.description` | `GymDenia tenÃ­a visibilidad online baja. Los vecinos del barrio no sabÃ­an que existÃ­a, y los que llegaban desde Google no convertÃ­an por una web desordenada. Rehicimos la web con foco en conversiÃ³n local, SEO optimizado y formularios breves. Hoy es su principal canal de captaciÃ³n.` | `GymDenia had low online visibility. Neighbours didn't know it existed, and those who arrived via Google didn't convert due to a disorganised site. We rebuilt it focused on local conversion, optimised SEO and short forms. Today it is their main acquisition channel.` |
| `portfolioWebs.cases.case3.tag1` | `DiseÃ±o Web` | `Web Design` |
| `portfolioWebs.cases.case3.tag2` | `Formularios` | `Forms` |
| `portfolioWebs.cases.case3.tag3` | `Responsive` | `Responsive` |

**JustificaciÃ³n copy:**
- DescripciÃ³n Ãºnica por caso (no bicolumna Problema/SoluciÃ³n), segÃºn D31.3. 2 frases de contexto + 1 frase de resultado.
- Sin mÃ©tricas inventadas. Sin tags que contradigan stack (WordPress fuera).
- En Home el body es 1 frase (teaser). AquÃ­ es 2-3 frases (detalle). Mismo caso, dos niveles de profundidad.

---

### 5.4 Bloque D â€” Cierre

| Key i18n | ES | EN (draft) |
|---|---|---|
| `portfolioWebs.closing.heading` | `Â¿Tienes un proyecto en mente?` | `Do you have a project in mind?` |
| `portfolioWebs.closing.body` | `AuditorÃ­a inicial gratuita. Si podemos ayudarte, hay propuesta en 48 horas.` | `Free initial audit. If we can help, there's a proposal within 48 hours.` |
| `portfolioWebs.closing.ctaPrimary` | `Hablemos por WhatsApp` | `Let's talk on WhatsApp` |
| `portfolioWebs.closing.linkCross` | `Ver portfolio fotogrÃ¡fico â†’` | `See photo portfolio â†’` |

---

## 6. Chrome global â€” Header, Footer, WhatsApp CTA

### 6.1 Header

**Estructura simplificada:** logo + nav (Inicio, Servicios, Portfolio, Sobre, Contacto) + lang toggle + CTA WhatsApp. Sin pill-on-scroll. Sin dropdown complejo de portfolio (los dos portfolios se linkan desde bloques Home, no desde nav).

| Key i18n | ES | EN (draft) |
|---|---|---|
| `common.nav.home` | `Inicio` | `Home` |
| `common.nav.services` | `Servicios` | `Services` |
| `common.nav.portfolio` | `Portfolio` | `Portfolio` |
| `common.nav.portfolioPhoto` | `FotografÃ­a` | `Photography` |
| `common.nav.portfolioWeb` | `Desarrollo web` | `Web development` |
| `common.nav.contact` | `Contacto` | `Contact` |
| `common.nav.about` | `Sobre` | `About` |
| `common.nav.whatsappCta` | `WhatsApp` | `WhatsApp` |
| `common.nav.langToggle` | `ES / EN` | `ES / EN` |

**Nota:** `common.nav.portfolio` funciona como label del menÃº desplegable que contiene `portfolioPhoto` y `portfolioWeb`. Se mantiene el patrÃ³n de dropdown actual pero simplificado visualmente. `common.nav.about` aÃ±adido en Subfase 5.2 (commit `adb524b`): el Header real tiene 5 nav items incluyendo Sobre (anchor `/#about`, D36-2). CONTENT.md v1.0 listaba 4.

---

### 6.2 Footer

**Estructura:** 4 columnas. Columna 1: logo + claim corto. Columna 2: nav repetida. Columna 3: contacto (email, WhatsApp, horario). Columna 4: legal (aviso legal, privacidad, cookies).

| Key i18n | ES | EN (draft) |
|---|---|---|
| `common.footer.claim` | `Estudio digital independiente en DÃ©nia. Desarrollo web y fotografÃ­a profesional para negocios locales.` | `Independent digital studio in DÃ©nia. Web development and professional photography for local businesses.` |
| `common.footer.navHeading` | `NavegaciÃ³n` | `Navigation` |
| `common.footer.contactHeading` | `Contacto` | `Contact` |
| `common.footer.legalHeading` | `Legal` | `Legal` |
| `common.footer.legalNotice` | `Aviso legal` | `Legal notice` |
| `common.footer.privacy` | `PolÃ­tica de privacidad` | `Privacy policy` |
| `common.footer.cookies` | `PolÃ­tica de cookies` | `Cookie policy` |
| `common.footer.rightsReserved` | `Â© 2026 Studio Pixelens. Todos los derechos reservados.` | `Â© 2026 Studio Pixelens. All rights reserved.` |
| `common.footer.location` | `DÃ©nia, Alicante, EspaÃ±a` | `DÃ©nia, Alicante, Spain` |

**Fix:** aÃ±ade `common.footer.rightsReserved` que faltaba (INVENTORY Â§16 nota: clave ausente). Arregla tambiÃ©n el "Aviso Legal" hardcoded en ES en `Footer.tsx` actual â€” ahora viene de i18n.

---

### 6.3 WhatsApp button (floating)

| Key i18n | ES | EN (draft) |
|---|---|---|
| `common.whatsapp.ariaLabel` | `Contactar por WhatsApp` | `Contact via WhatsApp` |
| `common.whatsapp.tooltip` | `Hablemos por WhatsApp` | `Let's talk on WhatsApp` |
| `common.whatsapp.prefilledMessage` | `Hola, me gustarÃ­a hablar sobre un proyecto para mi negocio.` | `Hi, I'd like to discuss a project for my business.` |

**Nota tÃ©cnica:** el botÃ³n usa `wa.me/{VITE_WHATSAPP_NUMBER}?text={prefilledMessage}`. Reemplaza los 7 archivos con `"34667326300"` hardcoded (DT-01 se cierra aquÃ­).

---

## 7. Anti-patrones de copy (prohibidos en producciÃ³n)

Al escribir nuevo copy o revisar existente, las siguientes construcciones quedan vetadas:

1. **Emojis en copy de producciÃ³n.** Ni ðŸš€, ni âœ¨, ni ðŸ’Ž. ExcepciÃ³n: emojis que el usuario escriba en sus mensajes (no los eliminamos en respuestas automÃ¡ticas o testimonios, solo en el copy nuestro).
2. **Exclamaciones en CTAs y headings.** "Â¡Descubre ahora!", "Â¡Empieza ya!", "Â¡Transforma tu negocio!" estÃ¡n prohibidos. Ruido visual, tono agresivo.
3. **Hype words vacÃ­as.** "Soluciones", "innovador", "vanguardia", "disruptivo", "next-level", "game-changer", "cutting-edge", "high-end", "premium" (como adjetivo genÃ©rico sin sustancia), "excelencia", "calidad superior". Si se necesita transmitir la idea, se transmite con hechos concretos (ej. "cÃ³digo propio, sin plantillas") no con adjetivos.
4. **Claims numÃ©ricos sin prueba verificable.** "+200 empresas impulsadas", "+40% ingresos", "milagro en 48 horas". Solo se usan nÃºmeros si se pueden respaldar con captura, contrato o fuente pÃºblica.
5. **Superlativos comerciales.** "Los mejores", "nÃºmero uno", "referentes del sector". Son fÃ¡ciles de escribir y difÃ­ciles de sostener.
6. **"Nosotros" genÃ©rico sin referente.** Si aparece "nosotros" o "nuestro equipo" en el copy, debe quedar claro quiÃ©nes son (Miguel y Sergio). No hablamos de un equipo imaginado.
7. **Precios en Home.** El pricing se trata en conversaciÃ³n directa o en una pÃ¡gina de /servicios (no existe aÃºn). No se embute en el Home.
8. **Copy que asume tecnicismo sin explicarlo.** Si mencionamos "SEO tÃ©cnico", "Lighthouse", "React" â€” vale, pero siempre en contexto (ej. tech list) no como jerga sola.
9. **Promesas temporales no cumplibles.** Si decimos "respuesta en 48h" es porque se cumple. Si no, quitamos el nÃºmero.
10. **Copy que aparenta profundidad con palabras huecas.** "Donde la tecnologÃ­a se encuentra con el arte". Hasta que no encuentras un contenido que no suene a plantilla de Wix, lo reescribes.

---

## 8. Voz y registro

**Spanish (ES) â€” fuente primaria:**
- Registro formal "usted" NO. Usamos "tÃº" directo, cercano pero sobrio.
- Sin regionalismos (ni "currar", ni "guay", ni "chulo"). EspaÃ±ol neutro de EspaÃ±a, comprensible tambiÃ©n para hispanoamericano.
- Frases cortas, ritmo pausado. Coma como recurso de ritmo, no de pausa decorativa.
- Afirmaciones declarativas. Pocas preguntas (solo cierres tipo "Â¿Tienes un proyecto en mente?").

**English (EN) â€” traducciÃ³n editorial:**
- InglÃ©s britÃ¡nico / europeo no americano. "Optimised" no "optimized". "Colour" no "color". "Whilst" no "while" (con moderaciÃ³n). "Bookings" no "reservations".
- No se traducen literalmente los giros espaÃ±oles. Si un idiom ES no tiene equivalente EN, se reescribe desde cero con el mismo significado.
- Nivel de formalidad similar al ES. Directo pero no familiar.
- Todas las entradas EN son **draft propuesto por Claude**. Miguel revisa antes de Fase 5.

---

## 9. Keys a eliminar de los locales actuales

Al migrar a `es.json` y `en.json` nuevos, estas keys deben desaparecer (huÃ©rfanas, obsoletas, o reemplazadas):

### 9.1 HuÃ©rfanas (nunca usadas por componentes activos)

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

**RazÃ³n:** Golden Coast nunca se renderizÃ³ (D31.1). Los `photoPacks.trial/basic/standard/premium` fueron iteraciones antiguas superadas por `photoPacks.corporate/realestate/events/gastronomy/custom`. Ya registradas como DT adicional al de INVENTORY Â§16.18.

### 9.2 Reemplazadas por rediseÃ±o (se van al REBUILD)

```
hero.title, hero.subtitle, hero.description (â†’ home.hero.*)
serviceSelector.* (â†’ home.services.*, componente ServiceSelector DESCARTAR)
horizontalShowcase.* (â†’ home.casesWeb.*, componente HorizontalShowcase DESCARTAR o merge)
stickyScroll.* (â†’ home.process.*, pricing embebido eliminado)
whyUs.* (â†’ home.about.trust*, componente WhyUs fusionado con About)
photoPricingSection.* (â†’ eliminado del Home, pendiente futura pÃ¡gina /servicios)
about.* actuales (â†’ home.about.*, copy reescrito)
testimonials.* (â†’ home.testimonials.*, copy reescrito)
formSection.* (â†’ home.contact.*)
portfolioHero.* Portfolio.tsx actual (â†’ portfolio.header.*)
portfolioCta.* Portfolio.tsx actual (â†’ portfolio.closing.*)
```

### 9.3 A mantener (no se tocan en Sprint 1)

```
dashboard.* (Sprint 2)
auth.* (Sprint 2)
photoPacks.corporate/realestate/events/gastronomy/custom.* (se usan en componente actual, se migran tal cual a la futura /servicios)
legal.* (aviso, privacidad, cookies, pÃ¡ginas legales mantienen copy actual hasta revisiÃ³n especÃ­fica)
```

---

## 10. Diff conceptual (copy actual â†’ copy nuevo)

| Lugar | Copy actual | Copy nuevo | RazÃ³n cambio |
|---|---|---|---|
| Hero H1 | `FotografÃ­a Profesional y DiseÃ±o Web de Alto Impacto` | `Trabajo visual y tÃ©cnico para negocios que quieren crecer.` | Elimina "Alto Impacto" (hype). Afirma el servicio, no el resultado prometido. |
| Hero subclaim | `Transforma tu marca con imÃ¡genes que venden y webs que convierten. Calidad profesional en DÃ©nia y la Costa Blanca.` | `Desarrollo web y fotografÃ­a profesional. Un solo estudio, un solo estÃ¡ndar. Sin intermediarios, sin plantillas.` | "Transforma" eliminado. Claim mÃ¡s concreto sobre el servicio real. |
| Hero CTA | `SOLICITAR PRESUPUESTO GRATIS` (uppercase) | `Hablemos por WhatsApp` | Tono conversacional sobrio. Uppercase eliminado. |
| ServiceSelector heading | `Dos Servicios, Una VisiÃ³n` | `Dos disciplinas, un mismo estÃ¡ndar.` | "Servicios" â†’ "disciplinas" (menos SaaS). AfirmaciÃ³n editorial. |
| HorizontalShowcase heading | `Trabajos que han transformado negocios reales` | `Casos de estudio en desarrollo web.` | Sin "transformado" ni "reales" redundante. Etiqueta editorial clÃ¡sica. |
| TropiDenia tagline | `Sistema de reservas que generÃ³ +40% mÃ¡s ingresos` | `Reservas directas, sin intermediarios.` | +40% no verificable pÃºblicamente. Nueva tagline describe el quÃ©, no el cuÃ¡nto. |
| BVS tag | `WordPress` | (tag eliminado) | Contradice stack declarado React-only. |
| Proceso heading | `Nuestro Proceso en 4 Pasos` | `Un proceso claro, sin sorpresas.` | "Nuestro proceso" genÃ©rico. Nueva versiÃ³n afirma beneficio al cliente. |
| Testimonios headings actuales | `MarÃ­a G.`, `Roberto GarcÃ­a`, `Ana LÃ³pez` con estrellas y rating | Mismos nombres sin estrellas, reescritos con voces distintas | Sin rating visual. Cada testimonio tiene voz editorial, no formato review. |
| Portfolio H1 | `Nuestro Portfolio FotogrÃ¡fico` | `Cada imagen cuenta mejor cuando estÃ¡ bien editada.` | AfirmaciÃ³n editorial en vez de etiqueta de secciÃ³n. |
| Portfolio intro | (no existÃ­a como bloque independiente) | `Cada imagen pasa por un proceso manual de ajuste...` | Nuevo bloque B sobrio, sin nÃºmeros inventados. |
| Portfolio labels antes/despuÃ©s | `â† Antes` y `DespuÃ©s â†’` con colores rojo/verde | `Original` y `Editada`, badges sobrios | SemÃ¡ntica mÃ¡s neutral, sin connotaciÃ³n de "antes malo / despuÃ©s bueno". |
| PortfolioWebs fondo | Gradiente naranja-rojo con glow | `--background` dark con tipografÃ­a editorial | Coherencia con "Editorial Structural". |
| WhatsApp number | `34667326300` hardcoded en 7 archivos, `34634408043` en WhyUs (inconsistencia) | `VITE_WHATSAPP_NUMBER` Ãºnico | Cierra DT-01. Elimina bug de nÃºmero distinto en WhyUs. |

---

## 11. ValidaciÃ³n pendiente antes de Fase 5

Lista de cosas que Miguel revisa antes de que CONTENT.md entre en producciÃ³n (Fase 5.1):

- [ ] TraducciÃ³n EN de todas las entradas (draft actual por Claude).
- [ ] Nombres completos de autores de testimonios (actualmente `MarÃ­a G.`, `Robert M.`, `Ana L.` â€” decidir si publican apellido completo o solo inicial).
- [ ] TÃ­tulos y captions de las 9 imÃ¡genes de /portfolio (actualmente propuestas genÃ©ricas, Miguel ajusta segÃºn lo que realmente hizo).
- [ ] Email `studiopixelens@gmail.com` confirmado como canal oficial.
- [ ] Horario `Lun-Vie Â· 9:00-18:00 Â· Europe/Madrid` confirmado o ajustado.
- [ ] Datos tÃ©cnicos de /portfolio Bloque B: decidir si se aÃ±aden tiempos (ej. "48h de entrega") o se mantiene versiÃ³n sobria actual.
- [ ] Roles de Miguel y Sergio: `Desarrollo Â· DirecciÃ³n` y `FotografÃ­a Â· ProducciÃ³n` confirmados o ajustados.
- [ ] Claim corto del footer: `Estudio digital independiente en DÃ©nia...` aprobado.

---

## 12. Notas operativas para Antigravity (Fase 5)

Cuando Claude Code migre este copy a `src/i18n/locales/es.json` y `en.json`:

1. **No borrar el JSON actual sin backup.** Hacer copia temporal `es.json.bak` en `/tmp/` antes de reescribir. Si pasa algo, se recupera.
2. **Mantener orden alfabÃ©tico dentro de cada namespace.** Facilita diff futuros.
3. **Escapar comillas correctamente.** Algunas entradas contienen comillas o apÃ³strofes (p. ej. "Trabajan con calma, sin prisa pero sin pausa."). JSON vÃ¡lido siempre.
4. **Validar con test manual.** Abrir `/`, `/portfolio`, `/portfolio-webs` en ES y EN. Ninguna key debe renderizar en pantalla como `home.hero.headline` literal (seÃ±al de key ausente).
5. **Playwright test obligatorio (MASTER Â§9.2):** al modificar i18n de Nav/Forms/Footer, correr `npm run test:e2e` antes de commit.
6. **Las keys del namespace `portfolio.gallery.item1-9.*` pueden quedar como strings vacÃ­os si Miguel aÃºn no ha revisado cada foto.** En ese caso, el componente las ignora silenciosamente. Mejor eso que renderizar lorem ipsum.

---

## 13. Change log

| VersiÃ³n | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-19 | Miguel + Claude Opus 4.7 | Documento inicial. Cubre Home (8 bloques), /portfolio (4 bloques), /portfolio-webs (4 bloques), chrome global. ES definitivo, EN draft. Anti-patrones (10 reglas). Keys a eliminar (huÃ©rfanas + reemplazadas). Diff conceptual vs copy actual. ValidaciÃ³n pendiente. Aplicadas D31.1 (quitar +40% TropiDenia), D31.2 (quitar tag WordPress BVS), D31.3 (descripciÃ³n Ãºnica por caso web), D31.4 (Bloque B /portfolio reducido sin nÃºmeros). |
| 1.1 | 2026-05-12 | Miguel + Claude Sonnet 4.6 | Â§6.1 Header actualizado: "Estructura simplificada" con 5 nav items, key `common.nav.about` aÃ±adida a la tabla (ES: `Sobre`, EN: `About`), nota al pie ampliada. CorrecciÃ³n de drift respecto a Header real validado en G5 parcial 5.2. |
| 1.2 | 2026-05-13 | Miguel + Claude Opus 4.7 | Cierre Subfase 5.4 Contact form REBUILD. Â§0 versiÃ³n + fecha + estado bumped. Â§3.8 tabla ampliada con 17 keys nuevas: `form.serviceLabel`, `form.servicePlaceholder`, `form.serviceOptions.web/photo/both` (D39-3), `form.termsLabel`, `form.termsLink` (D39-4), `form.validation.nameTooShort/emailInvalid/messageTooShort/serviceRequired/termsRequired` (D39-8 patrÃ³n i18n vÃ­a useMemo), `whatsapp.subject/nameLabel/emailLabel/phoneLabel/serviceLabel/messageLabel` (D39-5 payload texto plano). Â§3.8 justificaciÃ³n copy actualizada con referencias a D39-3 a D39-8 y notas sobre RGPD, Q5-E/F/G. Â§3.8 nueva secciÃ³n "Cableado en cÃ³digo" referenciando HomeContact.tsx y descarte legacy. Drift documental cerrado: v1.0 afirmaba "Form con 4 campos" cuando la realidad cableada en 5.4 son 6 (aÃ±adidos service y terms preservados del legacy). |
