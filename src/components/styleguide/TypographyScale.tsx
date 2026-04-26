import { useEffect, useRef, useState } from "react";

interface LevelMeta {
  label: string;
  className: string;
  sample: string;
  note?: string;
  fontFamily?: string;
}

const LEVELS: LevelMeta[] = [
  {
    label: "H1 — text-h1",
    className: "text-h1 font-display",
    sample: "Transformamos la imagen digital de tu negocio",
    fontFamily: "Playfair Display",
  },
  {
    label: "H2 — text-h2",
    className: "text-h2 font-display",
    sample: "Diseño que respeta tu marca",
    fontFamily: "Playfair Display",
  },
  {
    label: "H3 — text-h3",
    className: "text-h3 font-sans",
    sample: "Servicios que impulsan tu presencia digital",
  },
  {
    label: "H4 — text-h4",
    className: "text-h4 font-sans",
    sample: "Fotografia corporativa de alto impacto",
  },
  {
    label: "H5 — text-h5",
    className: "text-h5 font-sans",
    sample: "Casos de exito y portfolio",
  },
  {
    label: "H6 — text-h6 (EYEBROW / LABEL)",
    className: "text-h6 font-sans uppercase tracking-wider",
    sample: "EYEBROW / LABEL — fuera de escala 1.333 (intencional)",
    note: "Rol eyebrow/label, no titulo. Fuera de escala 1.333 por decision D33-F2.",
  },
  {
    label: "Body — text-body",
    className: "text-body font-sans",
    sample:
      "El cuerpo de texto principal utiliza Inter a 16px con line-height 1.65. Esta escala asegura maxima legibilidad en parrafos de longitud media. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    label: "Prose Editorial — .prose-editorial",
    className: "prose-editorial font-sans",
    sample:
      "El estilo editorial se reserva para descripciones largas: About en home, subtitulo del hero (si supera 2 lineas), cuerpo de casos en portfolio y paginas legales. A 1.0625rem con line-height 1.7, crea una experiencia de lectura mas pausada. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    label: "Eyebrow — text-eyebrow",
    className: "text-eyebrow font-sans uppercase",
    sample: "STUDIO PIXELENS — FOTOGRAFIA Y DESARROLLO WEB",
  },
];

function MetaRow({ el }: { el: HTMLElement | null }) {
  const [meta, setMeta] = useState({ size: "—", lh: "—", ls: "—", fw: "—", ff: "—" });

  useEffect(() => {
    if (!el) return;
    const cs = getComputedStyle(el);
    setMeta({
      size: cs.fontSize,
      lh: cs.lineHeight,
      ls: cs.letterSpacing,
      fw: cs.fontWeight,
      ff: cs.fontFamily.split(",")[0].replace(/['"]/g, "").trim(),
    });
  }, [el]);

  return (
    <dl className="text-xs text-muted-foreground space-y-0.5 min-w-[160px]">
      <div><dt className="inline font-semibold">size: </dt><dd className="inline font-mono">{meta.size}</dd></div>
      <div><dt className="inline font-semibold">line-height: </dt><dd className="inline font-mono">{meta.lh}</dd></div>
      <div><dt className="inline font-semibold">letter-spacing: </dt><dd className="inline font-mono">{meta.ls}</dd></div>
      <div><dt className="inline font-semibold">weight: </dt><dd className="inline font-mono">{meta.fw}</dd></div>
      <div><dt className="inline font-semibold">family: </dt><dd className="inline font-mono">{meta.ff}</dd></div>
    </dl>
  );
}

function ScaleRow({ level }: { level: LevelMeta }) {
  const ref = useRef<HTMLDivElement>(null);
  const [el, setEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current) setEl(ref.current.firstElementChild as HTMLElement);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 py-4 border-b border-border/50">
      <div className="flex-1 min-w-0" ref={ref}>
        <div className={level.className}>{level.sample}</div>
        {level.note && (
          <p className="mt-1 text-xs text-warning">{level.note}</p>
        )}
      </div>
      <div className="shrink-0">
        <p className="text-xs text-muted-foreground mb-1 font-semibold">{level.label}</p>
        <MetaRow el={el} />
      </div>
    </div>
  );
}

export function TypographyScale() {
  return (
    <section>
      <h2 className="text-h3 font-bold mb-4">Typography Scale</h2>
      <div>
        {LEVELS.map((level) => (
          <ScaleRow key={level.label} level={level} />
        ))}
      </div>
    </section>
  );
}
