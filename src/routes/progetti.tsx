import { SiteLogo } from "@/components/SiteLogo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { PROGETTI } from "@/data/progetti";

export const Route = createFileRoute("/progetti")({
  head: () => ({
    meta: [
      { title: "Progetti | SP Termoidraulica — industria, retail, piscine, residenze" },
      {
        name: "description",
        content:
          "Le realizzazioni SP Termoidraulica: impianti industriali e commerciali, atelier moda e retail, piscine su misura e residenze private in Toscana e in Italia.",
      },
      { property: "og:title", content: "Progetti | SP Termoidraulica" },
      {
        property: "og:description",
        content:
          "Industria, atelier moda, piscine e residenze private: l'ingegneria invisibile del comfort in oltre sessanta realizzazioni.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgettiPage,
});

type Area = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  caption: string;
  images: readonly string[];
};

const AREAS: Area[] = [
  {
    id: "industriale",
    eyebrow: "01 — Produrre",
    title: "Impianti industriali e commerciali",
    lead: "Centrali termiche, climatizzazione, ventilazione meccanica e reti di distribuzione per stabilimenti, logistica e spazi di lavoro.",
    caption: "Impianto industriale e commerciale · climatizzazione e distribuzione",
    images: PROGETTI.industriale,
  },
  {
    id: "atelier",
    eyebrow: "02 — Vendere",
    title: "Atelier moda e retail",
    lead: "Boutique, showroom e atelier dove l'impianto sparisce dentro l'architettura: comfort silenzioso, continuità e cantieri a data fissa.",
    caption: "Atelier e retail · climatizzazione integrata e impianti a vista zero",
    images: PROGETTI.atelier,
  },
  {
    id: "piscine",
    eyebrow: "03 — Acqua",
    title: "Piscine",
    lead: "Vasche a sfioro, infinity e idromassaggi: strutture, filtrazione, trattamento e riscaldamento acqua progettati e realizzati internamente.",
    caption: "Piscina su misura · struttura, filtrazione e trattamento acqua",
    images: PROGETTI.piscine,
  },
  {
    id: "residenze",
    eyebrow: "04 — Abitare",
    title: "Residenze private",
    lead: "Ville, casali e appartamenti dove riscaldamento radiante, trattamento aria e sanitari di pregio scompaiono dentro l'architettura.",
    caption: "Residenza privata · impianto idrotermosanitario",
    images: PROGETTI.residenze,
  },
];

function ProgettiPage() {
  const [lightbox, setLightbox] = useState<{ area: number; index: number } | null>(null);

  const move = useCallback(
    (delta: number) => {
      setLightbox((cur) => {
        if (!cur) return cur;
        const list = AREAS[cur.area].images;
        return { area: cur.area, index: (cur.index + delta + list.length) % list.length };
      });
    },
    [],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, move]);

  const current = lightbox ? AREAS[lightbox.area] : null;

  return (
    <main className="bg-ivory text-graphite">
      <header className="border-b border-graphite/10 bg-ivory/90 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
          <Link to="/" className="flex items-center" aria-label="SP Termoidraulica — home">
            <SiteLogo />
          </Link>
          <nav className="flex items-center gap-6 text-[12px] uppercase tracking-[0.2em]">
            <Link to="/" className="link-underline link-underline-hover hidden sm:inline">
              Home
            </Link>
            <a href="/#contatti" className="btn-primary text-[11px]">
              Contattaci <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-14 lg:px-12 lg:pt-28">
        <p className="text-[11px] uppercase tracking-[0.35em] text-graphite/50">Archivio realizzazioni</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight lg:text-7xl">
          Progetti costruiti per durare
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite/70">
          Oltre sessanta immagini dai nostri cantieri, divise per area di intervento. Ogni impianto nasce dallo stesso
          metodo: progettazione, esecuzione e manutenzione sotto un'unica responsabilità.
        </p>
        <nav className="mt-10 flex flex-wrap gap-3">
          {AREAS.map((a) => (
            <a key={a.id} href={`#${a.id}`} className="btn-ghost text-graphite text-[12px]">
              {a.title} <span className="text-graphite/40">({a.images.length})</span>
            </a>
          ))}
        </nav>
      </section>

      {AREAS.map((area, ai) => (
        <section key={area.id} id={area.id} className="scroll-mt-24 border-t border-graphite/10 py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.35em] text-graphite/50">{area.eyebrow}</p>
                <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight lg:text-5xl">{area.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-graphite/70">{area.lead}</p>
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-graphite/40">
                {area.images.length} realizzazioni
              </p>
            </div>

            <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
              {area.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightbox({ area: ai, index: i })}
                  className="group relative mb-4 block w-full overflow-hidden rounded-2xl bg-sand/40 break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite/40"
                >
                  <img
                    src={src}
                    alt={`${area.title} — realizzazione SP Termoidraulica ${i + 1}`}
                    loading="lazy"
                    className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite/85 via-graphite/40 to-transparent p-4 pt-14 text-left text-[11px] uppercase tracking-[0.2em] text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {area.caption}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-graphite/10 bg-stone/40 py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-12">
          <h2 className="font-serif text-4xl tracking-tight lg:text-5xl">Il prossimo progetto può essere il tuo</h2>
          <p className="mx-auto mt-6 max-w-xl text-graphite/70">
            Raccontaci l'edificio, la destinazione d'uso e i tempi: prepariamo un'ipotesi impiantistica su misura.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/#contatti" className="btn-primary">
              Contattaci <span aria-hidden>→</span>
            </a>
            <Link to="/" className="btn-ghost text-graphite">
              Torna alla home
            </Link>
          </div>
        </div>
      </section>

      {current && lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite/92 backdrop-blur-md p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 z-10 rounded-full border border-ivory/25 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-ivory/80 hover:text-ivory"
          >
            Chiudi ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-ivory/25 px-4 py-3 text-ivory/80 hover:text-ivory"
            aria-label="Immagine precedente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-ivory/25 px-4 py-3 text-ivory/80 hover:text-ivory"
            aria-label="Immagine successiva"
          >
            →
          </button>
          <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.images[lightbox.index]}
              alt={`${current.title} — realizzazione ${lightbox.index + 1}`}
              className="mx-auto max-h-[78vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-5 text-center text-[11px] uppercase tracking-[0.25em] text-ivory/70">
              {current.title} · {current.caption} — {lightbox.index + 1}/{current.images.length}
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
