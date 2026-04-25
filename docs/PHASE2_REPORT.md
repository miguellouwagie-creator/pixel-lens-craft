# PHASE2_REPORT.md — Studio Pixelens Redesign v2

> Output de Fase 2 (Auditoría técnica). Generado 2026-04-25.
> Ejecutado por Claude Code (Sonnet 4.6) en Antigravity.

---

## 1. Resumen de bloques ejecutados

| Bloque | Tarea | Commit | Estado |
|---|---|---|---|
| 1 | Crear `scripts/with_server.py` (DT-04) | `f0743c7` | ✅ |
| 2 | Eliminar `src/assetsFotos Portfolio` (DT-13) | `f802256` | ✅ |
| 3 | Eliminar 7 archivos `.bak/.backup/.temp` (DT-06) | `a77f245` | ✅ |
| 4 | Desindexar `src/assets_backup/` de git (DT-05) | `ddce38a` | ✅ |
| 5 | depcheck audit → esta sección | — | ✅ |
| 6 | Grep huérfanos → esta sección | — | ✅ |
| 7 | Cierre documental (PROGRESS.md, INVENTORY.md) | — | ✅ |

---

## 2. Depcheck audit

### Ejecución

```
npx depcheck --json
```

Nota: `npx` no disponible sin node_modules. Instalado `depcheck` como dev dep temporal.
Ejecutado desde `c:\dev\pixel-lens-craft`. Fecha: 2026-04-25.

Advertencia: depcheck reportó `invalidFiles` para `tsconfig.app.json` y `tsconfig.node.json`
por uso de comentarios (JSON5/JSONC). Esto no afecta el análisis de dependencias.

### Dependencias reportadas como no usadas (dependencies)

| Paquete | Veredicto | Justificación |
|---|---|---|
| `react-compare-image` | **FALSO POSITIVO — NO ELIMINAR** | MIGRATION.md §4 confirma uso en Fase 5.5: `PortfolioGallery.tsx` (Bloque C de /portfolio) y `HomePhotoShowcase.tsx` (Bloque 4 de Home). Cierra DT-12. El package.json actual referencia ^3.5.10. |

### Dev dependencies reportadas como no usadas (devDependencies)

| Paquete | Veredicto | Justificación |
|---|---|---|
| `@tailwindcss/typography` | **FALSO POSITIVO** | Plugin de Tailwind. Declarado en `tailwind.config.ts` plugins array. depcheck no parsea config files de Tailwind para detectar plugins. |
| `autoprefixer` | **FALSO POSITIVO** | Procesador PostCSS. Declarado en `postcss.config.js`. depcheck no parsea PostCSS config. |
| `postcss` | **FALSO POSITIVO** | Requerido por Tailwind CSS en el pipeline de build. Depcheck no lo detecta por mismo motivo que autoprefixer. |
| `depcheck` | **ELIMINAR** | Instalado temporalmente para este audit. No debe quedar en package.json. |

### Missing dependencies

Ninguna dependencia missing detectada. El proyecto no importa módulos no declarados.

### Candidatos a eliminación real (Fase 7)

Tras descartar todos los falsos positivos, no queda ningún paquete confirmado como
huérfano real en esta fase. El único candidato potencial es `react-compare-image`,
pero está explícitamente preservado por MIGRATION.md para uso en Fase 5.5.

**Whitelist completa de falsos positivos:**

```
# Falsos positivos — depcheck no los detecta por limitaciones de análisis estático
react-compare-image       # Uso en Fase 5.5: PortfolioGallery.tsx + HomePhotoShowcase.tsx
@tailwindcss/typography   # Plugin Tailwind en tailwind.config.ts
autoprefixer              # Plugin PostCSS en postcss.config.js
postcss                   # Runtime PostCSS, requerido por Tailwind build pipeline
```

### Target bundle (referencia)

MASTER §7.2 establece target bundle gzip < 250 KB por ruta. Esta auditoría
no ejecuta build. La reducción de bundle real proviene del DESCARTE de componentes
en Fase 5.1 (CTASection, GuaranteesSection, Process, Services, SimplePricingSection,
HorizontalShowcase, StickyScrollSection, PricingSection, About, WhyUs, ServiceSelector)
y del REBUILD de los bloques restantes.

---

## 3. Orphan components grep (preparación Fase 5.1)

### Metodología

```bash
grep -rn "CTASection|GuaranteesSection|Process|Services|SimplePricingSection|FloatingElements" \
  src/ --include="*.tsx" --include="*.ts"
```

Seguido de filtrado a imports reales:

```bash
grep -rn "import.*Services|import.*CTASection|import.*GuaranteesSection|import.*Process\b\
|import.*SimplePricingSection|import.*FloatingElements" \
  src/ --include="*.tsx" --include="*.ts"
```

### Resultados por componente

| Componente | Imports reales | Veredicto |
|---|---|---|
| `CTASection.tsx` | 0 (solo self-definition + export) | CONFIRMADO HUÉRFANO |
| `GuaranteesSection.tsx` | 0 (solo self-definition + export) | CONFIRMADO HUÉRFANO |
| `Process.tsx` | 0 (solo self-definition + export) | CONFIRMADO HUÉRFANO |
| `Services.tsx` | 0 (solo self-definition + export; aparece como comentario JSX en Footer.tsx línea 86, ignorable) | CONFIRMADO HUÉRFANO |
| `SimplePricingSection.tsx` | 0 (solo self-definition + export) | CONFIRMADO HUÉRFANO |
| `FloatingElements.tsx` | 1 — `src/components/HorizontalShowcase.tsx:6` | HUÉRFANO DIFERIDO |

### Análisis de FloatingElements

`FloatingElements` tiene un import activo en `HorizontalShowcase.tsx`. Sin embargo,
`HorizontalShowcase` está clasificado como 🗑️ DESCARTAR en MIGRATION.md §3 (Fase 5.1).
No existe ningún import de `FloatingElements` desde páginas activas. La cadena
`HorizontalShowcase → FloatingElements` es huérfana de extremo a extremo.

Acción Fase 5.1: ejecutar `git rm` de ambos en el mismo commit tras confirmar
con `grep -r "HorizontalShowcase" src/` que no hay imports residuales.

### Ocurrencias de "Process" y "Services" — análisis de cadenas comunes

El patrón `Process` también coincide con:
- `processingPackageId` (variable en `dashboard/PackagesSection.tsx`) — NO es el componente `Process.tsx`
- `processData.ts` (archivo de datos) — referencia al módulo de datos, no al componente

El patrón `Services` también coincide con:
- `{/* Services */}` (comentario JSX en Footer.tsx:86) — string de navegación, no import

Ambas coincidencias descartadas. No representan imports vivos del componente.

### Acción requerida en Fase 5.1

**NO BORRAR en esta fase.** Este dossier es solo inventario pre-ejecución.
Antes de cada `git rm` en Fase 5.1, ejecutar grep de confirmación individual.
El orden de eliminación recomendado:

1. Descartar componentes cuyo consumidor ya está eliminado: `FloatingElements` junto con `HorizontalShowcase`
2. Resto de huérfanos: `CTASection`, `GuaranteesSection`, `Process`, `Services`, `SimplePricingSection`

Patrones grep de confirmación pre-borrado:
```bash
grep -r "CTASection" src/ --include="*.tsx" --include="*.ts"
grep -r "GuaranteesSection" src/ --include="*.tsx" --include="*.ts"
grep -r "Process" src/ --include="*.tsx" --include="*.ts"
grep -r "Services" src/ --include="*.tsx" --include="*.ts"
grep -r "SimplePricingSection" src/ --include="*.tsx" --include="*.ts"
grep -r "FloatingElements" src/ --include="*.tsx" --include="*.ts"
grep -r "HorizontalShowcase" src/ --include="*.tsx" --include="*.ts"
```

---

## 4. Investigación DT-13 (src/assetsFotos Portfolio)

**Hallazgo:** archivo de texto ASCII de 2 bytes (solo CRLF). No es un directorio.
Sin referencias en source (grep `assetsFotos` en `src/**/*.{tsx,ts,json}` = 0 matches).
Eliminado con `git rm`. Commit `f802256`.

---

## 5. Estado de items DT tras Fase 2

| ID | Estado | Commit |
|---|---|---|
| DT-04 | ✅ Resuelto — `scripts/with_server.py` creado y smoke test pasado | `f0743c7` |
| DT-05 | ✅ Resuelto — `src/assets_backup/` desindexado de git, `.gitignore` actualizado | `ddce38a` |
| DT-06 | ✅ Resuelto — 7 archivos `.bak/.backup/.temp` eliminados de git | `a77f245` |
| DT-13 | ✅ Resuelto — `src/assetsFotos Portfolio` eliminado (archivo vacío, sin refs) | `f802256` |
| DT-07 | Abierto — dossier de huérfanos documentado aquí. DESCARTAR en Fase 5.1 | — |
| DT-12 | Abierto plan confirmado — `react-compare-image` se usará en Fase 5.5 | — |

---

## Change log

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | 2026-04-25 | Claude Code (Sonnet 4.6) | Documento inicial Fase 2 |
