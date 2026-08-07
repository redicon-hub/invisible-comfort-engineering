import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

import heroPoolAsset from "@/assets/hero-piscina-toscana.jpg.asset.json";
import poolSectionAsset from "@/assets/piscina-idromassaggio-panoramica.jpg.asset.json";

const heroPool = heroPoolAsset.url;
import heroIndustrialAsset from "@/assets/hero-industriale-arezzo.jpg.asset.json";

const heroIndustrial = heroIndustrialAsset.url;
import heroRetailAsset from "@/assets/hero-boutique-atelier.jpg.asset.json";

const heroRetail = heroRetailAsset.url;
import residence from "@/assets/residence.jpg";
import bathroomDetail from "@/assets/bathroom-detail.jpg";
import energy from "@/assets/energy.jpg";
import finalCta from "@/assets/final-cta.jpg";
import portfolioHospitality from "@/assets/portfolio-hospitality.jpg";
import portfolioPlant from "@/assets/portfolio-plant.jpg";
import realAtelier from "@/assets/atelier_alta_moda.jpg.asset.json";
import realPoolChianti from "@/assets/piscina_privata_toscana.jpg.asset.json";
import realIndustrial from "@/assets/impianti_industriali.jpg.asset.json";
import realPoolStone from "@/assets/piscine_private.jpg.asset.json";
import realPoolIndoor from "@/assets/pisc_ina_privata.jpg.asset.json";
import realResidence from "@/assets/residenza_privata.jpg.asset.json";
import realPv from "@/assets/fotovoltaico.jpg.asset.json";
import realRetail from "@/assets/shoroom_moda.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://id-preview--ccfdb605-8e40-42b9-8638-f8be0c084f8f.lovable.app/og-image.jpg",
      },
    ],
  }),
  component: HomePage,
});

/* ---------------- HERO CINEMATIC SLIDER ---------------- */

type Scene = {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  cta1: { label: string; href: string };
  cta2: { label: string; href: string };
  align?: "left" | "center";
};

const SCENES: Scene[] = [
  {
    image: heroPool,
    eyebrow: "Piscine, impianti e tecnologia per progetti d'eccellenza",
    title: (
      <>
        Diamo forma al comfort.
        <br />
        <em className="italic font-light">Anche dove sembra impossibile.</em>
      </>
    ),
    text: "Dalla Toscana ai cantieri internazionali, progettiamo e realizziamo sistemi evoluti per ville, piscine, aziende e spazi commerciali di alto profilo.",
    cta1: { label: "Scopri SP Termoidraulica", href: "#azienda" },
    cta2: { label: "Esplora i progetti", href: "#progetti" },
  },
  {
    image: heroIndustrial,
    eyebrow: "Impianti commerciali e industriali",
    title: (
      <>
        La complessità,
        <br />
        <em className="italic font-light">sotto controllo.</em>
      </>
    ),
    text: "Impianti commerciali, industriali e tecnologici progettati per garantire continuità, sicurezza ed efficienza.",
    cta1: { label: "Impianti per aziende", href: "#impianti" },
    cta2: { label: "Parla con il reparto tecnico", href: "#contatti" },
  },
  {
    image: heroRetail,
    eyebrow: "Boutique, atelier e retail",
    title: (
      <>
        La tecnica che
        <br />
        <em className="italic font-light">non interrompe la bellezza.</em>
      </>
    ),
    text: "Realizziamo impianti per boutique, atelier e spazi commerciali dove ogni dettaglio deve essere impeccabile.",
    cta1: { label: "Soluzioni per retail e moda", href: "#retail" },
    cta2: { label: "Contattaci", href: "#contatti" },
  },
];

function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % SCENES.length), 8000);
    return () => clearInterval(t);
  }, [paused, i]);

  const go = (n: number) => setI((n + SCENES.length) % SCENES.length);

  return (
    <section
      className="relative h-[92svh] min-h-[640px] w-full overflow-hidden bg-graphite text-lime"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Progetti SP Termoidraulica"
    >
      {SCENES.map((s, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-out"
          style={{ opacity: idx === i ? 1 : 0, pointerEvents: idx === i ? "auto" : "none" }}
          aria-hidden={idx !== i}
        >
          <img
            src={s.image}
            alt=""
            loading={idx === 0 ? "eager" : "lazy"}
            fetchPriority={idx === 0 ? "high" : "auto"}
            className="absolute inset-0 h-full w-full object-cover animate-ken"
            key={`img-${idx}-${i === idx}`}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(37,36,34,0.30) 0%, rgba(37,36,34,0.12) 30%, rgba(37,36,34,0.70) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(37,36,34,0.78) 0%, rgba(37,36,34,0.55) 35%, rgba(37,36,34,0.18) 65%, rgba(37,36,34,0) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-28 md:pb-36">
        <div className="container-editorial w-full">
          <div key={i} className="max-w-3xl animate-fade-up">
            <p className="eyebrow text-lime/80 mb-6">{SCENES[i].eyebrow}</p>
            <h1 className="display-hero text-lime">{SCENES[i].title}</h1>
            <p className="body-editorial mt-6 max-w-xl text-lime/85">{SCENES[i].text}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={SCENES[i].cta1.href} className="btn-primary btn-invert">
                {SCENES[i].cta1.label} <span aria-hidden>→</span>
              </a>
              <a href={SCENES[i].cta2.href} className="btn-ghost text-lime">
                {SCENES[i].cta2.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Signature strip */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-lime/15 bg-graphite/25 backdrop-blur-sm">
        <div className="container-editorial flex flex-wrap items-center justify-between gap-x-10 gap-y-3 py-4 text-lime/85">
          <span className="eyebrow text-lime/70">Dal 2003</span>
          <span className="eyebrow text-lime/70">Italia e cantieri internazionali</span>
          <span className="eyebrow text-lime/70">Tecnologia e metodo in costante evoluzione</span>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 md:flex">
        <button
          onClick={() => go(i - 1)}
          aria-label="Scena precedente"
          className="grid h-11 w-11 place-items-center border border-lime/40 text-lime transition hover:bg-lime hover:text-graphite"
        >↑</button>
        <div className="text-center text-xs tracking-[0.2em] text-lime/80">
          0{i + 1} <span className="opacity-50">/ 0{SCENES.length}</span>
        </div>
        <button
          onClick={() => go(i + 1)}
          aria-label="Scena successiva"
          className="grid h-11 w-11 place-items-center border border-lime/40 text-lime transition hover:bg-lime hover:text-graphite"
        >↓</button>
      </div>

      {/* Progress bar */}
      <div className="absolute inset-x-0 top-0 z-10 h-[2px] bg-lime/10">
        <div
          key={`bar-${i}-${paused}`}
          className="h-full bg-lime"
          style={{
            width: "100%",
            transformOrigin: "left",
            transform: "scaleX(0)",
            animation: paused ? "none" : "sp-line-grow 8s linear forwards",
          }}
        />
      </div>
    </section>
  );
}

/* ---------------- HEADER ---------------- */

const NAV = [
  { label: "Azienda", href: "#azienda" },
  { label: "Impianti", href: "#impianti" },
  { label: "Piscine", href: "#piscine" },
  { label: "Residenze", href: "#residenze" },
  { label: "Energie", href: "#energie" },
  { label: "Progetti", href: "/progetti" },
  { label: "Contatti", href: "#contatti" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-lime/95 backdrop-blur-md text-graphite border-b border-taupe/15"
            : "text-lime [text-shadow:0_1px_16px_rgba(0,0,0,0.55)]"
        }`}
      >
        <div className="container-editorial flex items-center justify-between py-5 md:py-6">
          <a href="#top" className="flex items-baseline gap-3">
            <span className="font-serif text-2xl tracking-tight">SP</span>
            <span className="eyebrow hidden sm:inline" style={{ color: "inherit" }}>Termoidraulica</span>
          </a>

          <nav aria-label="Menu principale" className="hidden lg:flex items-center gap-9">
            {NAV.slice(0, -1).map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs font-medium tracking-[0.18em] uppercase transition-opacity hover:opacity-60"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#contatti"
              className="btn-primary hidden md:inline-flex"
            >
              Contattaci <span aria-hidden>→</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-current"
              aria-label="Apri menu"
            >
              <span className="block h-px w-5 bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-ivory text-graphite animate-fade">
          <div className="container-editorial flex items-center justify-between py-6">
            <span className="font-serif text-2xl">SP</span>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center border border-graphite"
              aria-label="Chiudi menu"
            >
              ×
            </button>
          </div>
          <nav className="container-editorial mt-16 flex flex-col gap-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl tracking-tight"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

/* ---------------- MANIFESTO ---------------- */

function Manifesto() {
  return (
    <section id="azienda" className="bg-ivory py-28 md:py-40">
      <div className="container-editorial grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">Una struttura cresciuta progetto dopo progetto</p>
          <h2 className="display-section mt-6 text-graphite">
            Molto più di un'impresa <em className="italic">termoidraulica.</em>
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-8">
          <p className="body-editorial">
            SP Termoidraulica nasce in Toscana e cresce affrontando cantieri sempre più complessi.
            Oggi coordina competenze, persone e tecnologie per realizzare impianti destinati ad
            aziende, negozi, strutture ricettive, ville e residenze di prestigio.
          </p>
          <p className="body-editorial">
            La stessa precisione richiesta da un impianto industriale viene applicata a una
            boutique internazionale. La stessa cura riservata a una piscina a sfioro viene
            portata negli impianti di una dimora privata.
          </p>
          <blockquote className="border-l-2 border-cypress pl-6 font-serif text-2xl md:text-3xl leading-snug text-graphite">
            Un unico interlocutore, dal progetto alla messa in funzione.
          </blockquote>
          <a href="#azienda" className="link-underline link-underline-hover text-graphite">
            Conosci l'azienda <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Growth timeline */}
      <div className="container-editorial mt-24 md:mt-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="eyebrow">2003</p>
            <p className="mt-3 font-serif text-5xl md:text-6xl text-graphite">Officina artigiana</p>
            <p className="mt-2 text-sm text-taupe">Le radici, l'esperienza diretta sul cantiere</p>
          </div>
          <div className="md:col-span-2 hidden md:block">
            <div className="relative h-px w-full bg-taupe/30">
              <div className="absolute inset-0 origin-left bg-cypress animate-[sp-line-grow_2s_ease_forwards]" />
            </div>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="eyebrow">Oggi</p>
            <p className="mt-3 font-serif text-5xl md:text-6xl text-graphite">Impresa tecnologica</p>
            <p className="mt-2 text-sm text-taupe">Progettazione digitale, BIM, monitoraggio e sistemi integrati</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BUSINESS WORLDS ---------------- */

const WORLDS = [
  {
    cat: "Industria & Business",
    title: "Impianti progettati per non fermarsi.",
    desc: "Soluzioni meccaniche, idrauliche, climatiche e antincendio per aziende, attività produttive, contractor e spazi commerciali.",
    link: "Scopri gli impianti",
    href: "#impianti",
    image: portfolioPlant,
  },
  {
    cat: "Piscine & Landscape",
    title: "L'acqua diventa parte del paesaggio.",
    desc: "Piscine a sfioro, anche ad acqua salata, pensate per ville, casali e proprietà di alto pregio.",
    link: "Scopri le piscine",
    href: "#piscine",
    image: poolChiantiAsset.url,
  },
  {
    cat: "Residenze & Hospitality",
    title: "Il comfort di una proprietà straordinaria.",
    desc: "Impianti evoluti per ville, casali, agriturismi e case vacanza in tutta Italia.",
    link: "Scopri le residenze",
    href: "#residenze",
    image: residence,
  },
];

function BusinessWorlds() {
  const [active, setActive] = useState(1);
  return (
    <section className="bg-lime py-28 md:py-40">
      <div className="container-editorial mb-16 md:mb-20 max-w-3xl">
        <p className="eyebrow">Tre mondi</p>
        <h2 className="display-section mt-6 text-graphite">
          Tre mondi. <em className="italic">Un solo standard.</em>
        </h2>
        <p className="body-editorial mt-6">
          Precisione tecnica, cura estetica e responsabilità operativa accompagnano ogni progetto.
        </p>
      </div>
      <div className="container-editorial grid gap-4 md:grid-cols-3 md:gap-3">
        {WORLDS.map((w, idx) => (
          <button
            key={idx}
            onMouseEnter={() => setActive(idx)}
            onClick={() => setActive(idx)}
            className={`group relative overflow-hidden text-left transition-all duration-700 md:h-[640px] ${
              active === idx ? "md:flex-[1.4]" : ""
            }`}
            style={{ aspectRatio: "3/4" }}
          >
            <img
              src={w.image}
              alt={w.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/25 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10 text-lime">
              <p className="eyebrow text-lime/80">{w.cat}</p>
              <h3 className="display-md mt-3 max-w-xs">{w.title}</h3>
              <p
                className={`mt-4 max-w-sm text-sm leading-relaxed text-lime/85 transition-all duration-500 ${
                  active === idx ? "opacity-100 max-h-40" : "opacity-0 md:opacity-0 max-h-0 md:max-h-0"
                }`}
              >
                {w.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase">
                {w.link} <span aria-hidden>→</span>
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ---------------- POOL FEATURE ---------------- */

function PoolFeature() {
  return (
    <section id="piscine" className="relative overflow-hidden bg-ivory">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[70svh] md:h-[110svh] md:sticky md:top-0">
          <img
            src={poolSectionAsset.url}
            alt="Piscina interna con idromassaggio e vista panoramica sulle colline toscane"

            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-16 px-6 py-24 md:px-16 md:py-40">
          <div>
            <p className="eyebrow">Piscine a sfioro</p>
            <h2 className="display-section mt-6 text-graphite">
              Piscine che <em className="italic">appartengono al luogo.</em>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="body-editorial">
              Una piscina di pregio non deve sovrapporsi al paesaggio. Deve entrarne a far parte.
            </p>
            <p className="body-editorial">
              SP Termoidraulica progetta e realizza piscine a sfioro per casali, ville, agriturismi
              e residenze di alto livello, studiando il rapporto tra acqua, architettura, terreno
              e orizzonte.
            </p>
          </div>
          <ul className="space-y-4 border-y border-taupe/25 py-8">
            {["Progettazione su misura", "Ricircolo a sfioro e acqua salata", "Integrazione con il paesaggio"].map(
              (t) => (
                <li key={t} className="flex items-baseline gap-4 font-serif text-xl md:text-2xl text-graphite">
                  <span className="text-xs font-sans tracking-[0.2em] text-taupe">—</span>
                  {t}
                </li>
              ),
            )}
          </ul>
          <p className="body-editorial">
            Dalla valutazione del terreno alla centrale tecnica, dalla filtrazione alle finiture,
            ogni componente viene coordinato per ottenere un risultato estetico, funzionale e
            duraturo.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contatti" className="btn-primary">Progetta la tua piscina <span aria-hidden>→</span></a>
            <a href="#progetti" className="btn-ghost text-graphite">Guarda le realizzazioni</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIAL SYSTEMS ---------------- */

const B2B_LIST = [
  "Impianti idrotermosanitari",
  "Climatizzazione VRV e VRF",
  "Impianti aeraulici e idronici",
  "Riscaldamento radiante",
  "Trattamento e rinnovo dell'aria",
  "Centrali termiche",
  "Impianti antincendio",
  "Aspirazione di fumi e polveri",
  "Trattamento dell'acqua",
  "Manutenzione e assistenza",
];

function IndustrialFeature() {
  return (
    <section id="impianti" className="bg-graphite py-28 md:py-40 text-lime">
      <div className="container-editorial grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-lime/70">Commerciale e industriale</p>
          <h2 className="display-section mt-6 text-lime">
            Dietro ogni spazio efficiente c'è un sistema <em className="italic">progettato bene.</em>
          </h2>
          <p className="body-editorial mt-8 text-lime/80">
            SP Termoidraulica affianca aziende, retailer, studi di progettazione e general
            contractor nella realizzazione di impianti affidabili, coordinati e pronti a
            sostenere le esigenze operative del progetto.
          </p>
          <a href="#contatti" className="btn-ghost mt-10 text-lime">
            Parla con il reparto tecnico
          </a>
        </div>
        <div className="md:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={heroIndustrial} alt="Centrale tecnica industriale" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {B2B_LIST.map((t, i) => (
              <li key={t} className="flex items-baseline gap-4 border-b border-lime/15 pb-3 text-lime/90">
                <span className="text-xs font-mono text-lime/50">0{i < 9 ? i + 1 : ""}{i >= 9 ? i + 1 : ""}</span>
                <span className="text-[15px]">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- RETAIL FEATURE ---------------- */

function RetailFeature() {
  return (
    <section id="retail" className="bg-ivory py-28 md:py-40">
      <div className="container-editorial grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={heroRetail} alt="Boutique di lusso" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col justify-center">
          <p className="eyebrow">Retail & Moda</p>
          <h2 className="display-section mt-6 text-graphite">
            Quando la tecnica deve <em className="italic">diventare invisibile.</em>
          </h2>
          <p className="body-editorial mt-8">
            Boutique, atelier e spazi commerciali di prestigio richiedono impianti capaci di
            garantire comfort, silenziosità e continuità senza interferire con il progetto
            architettonico.
          </p>
          <p className="body-editorial mt-4">
            L'esperienza maturata in ambienti destinati a brand e clienti esigenti ha reso SP
            Termoidraulica un partner abituato a lavorare con precisione, scadenze definite e
            standard qualitativi elevati.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-1 border-y border-taupe/25 py-8 sm:grid-cols-3">
            {["Precisione.", "Discrezione.", "Continuità."].map((w) => (
              <div key={w} className="font-serif text-3xl md:text-4xl text-graphite">
                {w}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-taupe">
            Impianti per negozi, boutique, showroom e spazi commerciali.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESIDENCES ---------------- */

function ResidencesFeature() {
  return (
    <section id="residenze" className="bg-lime py-28 md:py-40">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <p className="eyebrow">Case vacanza, ville e casali</p>
          <h2 className="display-section mt-6 text-graphite">
            Dalla boutique alla <em className="italic">residenza privata.</em>
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden">
            <img src={residence} alt="Interno di villa toscana" loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute bottom-6 left-6 rounded-none bg-lime/95 px-4 py-2 text-xs tracking-[0.2em] uppercase text-graphite">
              Private residences
            </span>
          </div>
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={bathroomDetail} alt="Dettaglio bagno su misura" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-1">
            <p className="body-editorial">
              Molti imprenditori che hanno conosciuto SP Termoidraulica attraverso i propri negozi
              e le proprie aziende scelgono la stessa squadra per le loro residenze.
            </p>
            <p className="body-editorial mt-4">
              L'azienda opera in tutta Italia per realizzare impianti completi in ville, casali e
              case vacanza di alto livello, coordinando comfort, efficienza, trattamento
              dell'acqua, climatizzazione, riscaldamento e gestione energetica.
            </p>
            <p className="mt-8 font-serif text-2xl italic text-cypress">
              Un'abitudine al viaggio costruita seguendo i progetti dei nostri clienti.
            </p>
            <a href="#contatti" className="btn-primary mt-10">Soluzioni per residenze <span aria-hidden>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ENERGY ---------------- */

function EnergyFeature() {
  const items = ["Fotovoltaico", "Solare termico", "Pompe di calore", "Geotermia"];
  return (
    <section id="energie" className="bg-ivory py-28 md:py-40">
      <div className="container-editorial grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="eyebrow">Energia integrata</p>
          <h2 className="display-section mt-6 text-graphite">
            L'energia non è un impianto separato. <em className="italic">È parte del progetto.</em>
          </h2>
          <p className="body-editorial mt-8">
            Fotovoltaico, solare termico, pompe di calore, geotermia e sistemi di gestione
            energetica devono dialogare con l'edificio e con le sue reali esigenze.
          </p>
          <p className="body-editorial mt-4">
            SP Termoidraulica sviluppa soluzioni integrate per ridurre consumi, migliorare il
            comfort e rendere più efficiente l'intero sistema.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6">
            {items.map((it, idx) => (
              <div key={it} className="border-t border-taupe/30 pt-4">
                <span className="text-xs font-mono text-taupe">0{idx + 1}</span>
                <p className="mt-2 font-serif text-2xl text-graphite">{it}</p>
              </div>
            ))}
          </div>
          <a href="#contatti" className="btn-ghost mt-12 text-graphite">Scopri le soluzioni energetiche</a>
        </div>
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={energy} alt="Fotovoltaico integrato" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- METHOD TIMELINE ---------------- */

const METHOD = [
  { n: "01", title: "Analisi", desc: "Comprendiamo il contesto, gli obiettivi e i vincoli del progetto." },
  { n: "02", title: "Progettazione", desc: "Coordiniamo soluzioni tecniche, dimensionamento e integrazione impiantistica." },
  { n: "03", title: "Realizzazione", desc: "Organizziamo persone, materiali e lavorazioni con attenzione a qualità e tempi." },
  { n: "04", title: "Collaudo", desc: "Verifichiamo il funzionamento e completiamo la documentazione prevista." },
  { n: "05", title: "Assistenza", desc: "Restiamo un riferimento per manutenzione, ottimizzazione ed evoluzione degli impianti." },
];

function MethodTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-lime py-28 md:py-40">
      <div className="container-editorial max-w-3xl">
        <p className="eyebrow">Metodo di lavoro</p>
        <h2 className="display-section mt-6 text-graphite">
          Dal primo disegno <em className="italic">all'ultimo collaudo.</em>
        </h2>
      </div>
      <div ref={ref} className="container-editorial mt-20 relative">
        <div className="absolute left-0 right-0 top-6 hidden md:block">
          <div className="h-px bg-taupe/25" />
          <div
            className="absolute top-0 left-0 h-px origin-left bg-cypress transition-transform duration-300"
            style={{ transform: `scaleX(${progress})`, width: "100%" }}
          />
        </div>
        <div className="grid gap-10 md:grid-cols-5">
          {METHOD.map((s) => (
            <div key={s.n} className="relative">
              <div className="hidden md:block absolute -top-[6px] left-0 h-3 w-3 rounded-full bg-cypress" />
              <p className="font-mono text-xs text-taupe md:mt-8">{s.n}</p>
              <h3 className="font-serif text-2xl mt-3 text-graphite">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */

const PORTFOLIO = [
  {
    image: realPoolChianti.url,
    cat: "Piscine",
    loc: "Chianti, Toscana",
    title: "Piscina a sfioro su giardino panoramico",
    note: "Vasca a sfioro con bordo in pietra, trattamento acqua e filtrazione silenziosa integrata nel paesaggio.",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    image: realRetail.url,
    cat: "Retail",
    loc: "Boutique moda",
    title: "Clima e comfort per spazi di lusso",
    note: "Climatizzazione invisibile e distribuzione aria calibrata per non interferire con luce e materiali.",
    span: "md:col-span-4",
  },
  {
    image: realIndustrial.url,
    cat: "Impianti",
    loc: "Edificio produttivo",
    title: "Unità di trattamento aria in copertura",
    note: "Staffaggi, canalizzazioni coibentate e UTA esterna: impianto dimensionato sui carichi reali.",
    span: "md:col-span-4",
  },
  {
    image: realPoolStone.url,
    cat: "Piscine",
    loc: "Casale toscano",
    title: "Vasca in pietra con pool house",
    note: "Ricircolo, riscaldamento acqua e locale tecnico dedicato, nascosto dentro l'architettura esistente.",
    span: "md:col-span-4",
  },
  {
    image: realPoolIndoor.url,
    cat: "Wellness",
    loc: "Val d'Orcia",
    title: "Vasca idromassaggio indoor-outdoor",
    note: "Idromassaggio a filo pavimento, controllo temperatura e trattamento acqua per uso continuo.",
    span: "md:col-span-4",
  },
  {
    image: realAtelier.url,
    cat: "Retail",
    loc: "Atelier alta moda",
    title: "Atelier di alta moda in centro storico",
    note: "Climatizzazione radiante e ricambio aria silenzioso, integrati nei controsoffitti curvi dell'allestimento.",
    span: "md:col-span-4",
  },

  {
    image: realResidence.url,
    cat: "Residenze",
    loc: "Residenza privata",
    title: "Bagno in marmo con dettaglio sanitario",
    note: "Adduzione, scarichi e miscelazione incassati al millimetro dietro lastre in marmo continue.",
    span: "md:col-span-6",
  },
  {
    image: realPv.url,
    cat: "Energia",
    loc: "Copertura industriale",
    title: "Campo fotovoltaico su tetto piano",
    note: "Struttura zavorrata, cavidotti ordinati e integrazione con pompe di calore per autoconsumo.",
    span: "md:col-span-6",
  },
];

function Portfolio() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v === null ? v : (v + 1) % PORTFOLIO.length));
      if (e.key === "ArrowLeft") setOpen((v) => (v === null ? v : (v - 1 + PORTFOLIO.length) % PORTFOLIO.length));
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const current = open === null ? null : PORTFOLIO[open];

  return (
    <section id="progetti" className="bg-ivory py-28 md:py-40">
      <div className="container-editorial mb-16 max-w-3xl">
        <p className="eyebrow">Portfolio selezionato</p>
        <h2 className="display-section mt-6 text-graphite">
          Progetti <em className="italic">costruiti per durare.</em>
        </h2>
        <p className="body-editorial mt-6">
          Interventi reali tra impiantistica, retail, residenze, piscine ed energia.
        </p>
      </div>
      <div className="container-editorial grid gap-4 md:grid-cols-12 md:auto-rows-[320px]">
        {PORTFOLIO.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Ingrandisci: ${p.title}`}
            className={`group relative col-span-12 overflow-hidden text-left cursor-zoom-in ${p.span}`}
            style={{ minHeight: 320 }}
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-graphite via-graphite/75 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-graphite/15 transition-colors duration-500 group-hover:bg-graphite/30" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-lime [text-shadow:0_1px_10px_color-mix(in_oklab,var(--color-graphite)_60%,transparent)]">
              <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-lime/90">
                <span>{p.cat}</span>
                <span className="h-px w-6 bg-lime/70" />
                <span>{p.loc}</span>
              </div>
              <h3 className="mt-3 font-serif text-xl md:text-2xl">{p.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-lime/90">{p.note}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Ingrandisci <span aria-hidden>↗</span>
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="container-editorial mt-16 flex flex-wrap justify-center gap-4">
        <a href="/progetti" className="btn-primary">Tutti i progetti <span aria-hidden>→</span></a>
        <a href="#contatti" className="btn-ghost text-graphite">Parliamo del tuo progetto</a>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite/92 backdrop-blur-sm p-4 md:p-10"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpen(null); }}
            aria-label="Chiudi"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-lime/25 text-lime text-xl hover:bg-lime/10 transition-colors"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpen((v) => (v === null ? v : (v - 1 + PORTFOLIO.length) % PORTFOLIO.length)); }}
            aria-label="Precedente"
            className="absolute left-3 md:left-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-lime/25 text-lime hover:bg-lime/10 transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpen((v) => (v === null ? v : (v + 1) % PORTFOLIO.length)); }}
            aria-label="Successivo"
            className="absolute right-3 md:right-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-lime/25 text-lime hover:bg-lime/10 transition-colors"
          >
            →
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-full w-full max-w-5xl overflow-auto"
          >
            <img
              src={current.image}
              alt={current.title}
              className="mx-auto max-h-[72vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mx-auto mt-5 max-w-2xl text-center text-lime">
              <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-lime/70">
                <span>{current.cat}</span>
                <span className="h-px w-6 bg-lime/40" />
                <span>{current.loc}</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl">{current.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-lime/75">{current.note}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}


/* ---------------- NUMBERS ---------------- */

function Numbers() {
  return (
    <section className="bg-lime py-28 md:py-40">
      <div className="container-editorial max-w-3xl">
        <p className="eyebrow">Crescita e tecnologia</p>
        <h2 className="display-section mt-6 text-graphite">
          Un'impresa in <em className="italic">costante evoluzione.</em>
        </h2>
        <p className="body-editorial mt-6">
          Cresciamo investendo in metodo, competenze e tecnologia. Il principio è rimasto lo
          stesso dal primo giorno: assumersi la responsabilità del risultato.
        </p>
      </div>
      <div className="container-editorial mt-16 grid gap-10 md:grid-cols-3 border-y border-taupe/25 py-16">
        {[
          { big: "2003", small: "L'anno di fondazione" },
          { big: "BIM + IoT", small: "Progettazione digitale, monitoraggio e sistemi integrati" },
          { big: "IT / EU", small: "Cantieri in Italia e all'estero" },
        ].map((s) => (
          <div key={s.big}>
            <p className="font-serif text-6xl md:text-7xl text-graphite leading-none">{s.big}</p>
            <p className="mt-4 text-sm text-taupe max-w-xs">{s.small}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA + FORM ---------------- */

function FinalCTA() {
  return (
    <section id="contatti" className="relative overflow-hidden bg-graphite text-lime">
      <div className="relative h-[70svh] min-h-[520px]">
        <img src={finalCta} alt="Villa toscana con piscina al tramonto" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/60 to-transparent" />
        <div className="container-editorial relative z-10 flex h-full flex-col justify-end pb-16">
          <p className="eyebrow text-lime/70">Contatti</p>
          <h2 className="display-section mt-6 max-w-3xl">
            Ogni grande progetto <em className="italic">comincia da una conversazione.</em>
          </h2>
          <p className="body-editorial mt-6 max-w-xl text-lime/85">
            Raccontaci cosa stai costruendo, trasformando o immaginando. Metteremo al lavoro
            esperienza, persone e tecnologia.
          </p>
        </div>
      </div>
      <div className="bg-graphite pb-28 md:pb-36">
        <ContactForm />
        <p className="container-editorial mt-10 text-center text-xs tracking-[0.15em] uppercase text-lime/50">
          Progetti per aziende, retail, hospitality e residenze in Italia e all'estero
        </p>
      </div>
    </section>
  );
}

const PROJECT_TYPES = [
  "Impianti commerciali o industriali",
  "Boutique o spazio retail",
  "Villa o residenza",
  "Piscina",
  "Fotovoltaico ed energia",
  "Manutenzione",
  "Altro",
];

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [err, setErr] = useState<Record<string, string>>({});

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(fd.get("name") || "").trim()) errs.name = "Inserisci nome e cognome";
    const email = String(fd.get("email") || "").trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Email non valida";
    if (!String(fd.get("phone") || "").trim()) errs.phone = "Inserisci un recapito";
    if (!String(fd.get("message") || "").trim()) errs.message = "Descrivi il tuo progetto";
    if (!fd.get("privacy")) errs.privacy = "Accetta la privacy policy";
    setErr(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  const field =
    "w-full border-0 border-b border-lime/25 bg-transparent px-0 py-4 text-lime placeholder:text-lime/40 focus:border-lime focus:outline-none focus:ring-0 transition-colors";
  const label = "block text-[11px] tracking-[0.2em] uppercase text-lime/60 mb-2";

  if (status === "sent") {
    return (
      <div className="container-editorial mt-16">
        <div className="mx-auto max-w-2xl border border-lime/25 p-12 text-center">
          <p className="eyebrow text-lime/70">Grazie</p>
          <p className="mt-4 font-serif text-3xl">Abbiamo ricevuto la tua richiesta.</p>
          <p className="mt-4 text-sm text-lime/70">Ti risponderemo il prima possibile.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="container-editorial mt-16 grid gap-x-10 gap-y-8 md:grid-cols-2 max-w-4xl mx-auto" noValidate>
      <div>
        <label className={label} htmlFor="name">Nome e cognome</label>
        <input id="name" name="name" className={field} placeholder="Mario Rossi" />
        {err.name && <p className="mt-2 text-xs text-bronze">{err.name}</p>}
      </div>
      <div>
        <label className={label} htmlFor="company">Azienda <span className="opacity-60">(facoltativo)</span></label>
        <input id="company" name="company" className={field} placeholder="Studio / Impresa" />
      </div>
      <div>
        <label className={label} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className={field} placeholder="nome@dominio.it" />
        {err.email && <p className="mt-2 text-xs text-bronze">{err.email}</p>}
      </div>
      <div>
        <label className={label} htmlFor="phone">Telefono</label>
        <input id="phone" name="phone" className={field} placeholder="+39 …" />
        {err.phone && <p className="mt-2 text-xs text-bronze">{err.phone}</p>}
      </div>
      <div>
        <label className={label} htmlFor="type">Tipologia di progetto</label>
        <select id="type" name="type" className={`${field} appearance-none`}>
          {PROJECT_TYPES.map((t) => <option key={t} value={t} className="bg-graphite">{t}</option>)}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="location">Località del progetto</label>
        <input id="location" name="location" className={field} placeholder="Città, Provincia" />
      </div>
      <div className="md:col-span-2">
        <label className={label} htmlFor="message">Messaggio</label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Raccontaci il progetto…" />
        {err.message && <p className="mt-2 text-xs text-bronze">{err.message}</p>}
      </div>
      <label className="md:col-span-2 flex items-start gap-3 text-sm text-lime/70">
        <input type="checkbox" name="privacy" className="mt-1 h-4 w-4 accent-lime" />
        <span>
          Ho letto e accetto la <a href="#" className="underline">privacy policy</a>.
        </span>
      </label>
      {err.privacy && <p className="md:col-span-2 -mt-4 text-xs text-bronze">{err.privacy}</p>}
      <div className="md:col-span-2">
        <button type="submit" className="btn-primary" style={{ background: "var(--lime)", color: "var(--graphite)" }} disabled={status === "sending"}>
          {status === "sending" ? "Invio in corso…" : "Invia la richiesta"} <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="bg-brown text-lime/80">
      <div className="container-editorial py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-serif text-3xl text-lime">SP Termoidraulica</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              SP Termoidraulica S.r.l.<br />
              Via Renato Guttuso 8<br />
              52021 Badia Agnano, Bucine (AR)<br />
              Italia
            </p>
            <p className="mt-6 font-serif text-xl italic text-lime">
              Impianti, acqua ed energia per spazi destinati a durare.
            </p>
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {[
              { h: "Azienda", l: ["Chi siamo", "Il team", "Lavora con noi"] },
              { h: "Impianti", l: ["Commerciali", "Industriali", "Retail"] },
              { h: "Piscine", l: ["A sfioro", "Acqua salata", "Manutenzione"] },
              { h: "Energie", l: ["Fotovoltaico", "Pompe di calore", "Geotermia"] },
              { h: "Progetti", l: ["Portfolio", "Case study"] },
              { h: "Contatti", l: ["Scrivici", "Telefono", "WhatsApp"] },
            ].map((c) => (
              <div key={c.h}>
                <p className="eyebrow text-lime/60">{c.h}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.l.map((i) => (
                    <li key={i}><a href="#" className="hover:text-lime transition-colors">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow text-lime/60">Contatti diretti</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Tel. —</li>
              <li>Cell. —</li>
              <li>WhatsApp —</li>
              <li>info@—</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-lime/15 pt-8 text-xs text-lime/50">
          <p>© {new Date().getFullYear()} SP Termoidraulica S.r.l. — Tutti i diritti riservati.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#">Privacy policy</a>
            <a href="#">Cookie policy</a>
            <a href="#">Preferenze cookie</a>
            <a href="#">Dati societari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- PAGE ---------------- */

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-lime text-graphite">
      <Header />
      <main>
        <HeroSlider />
        <Manifesto />
        <BusinessWorlds />
        <PoolFeature />
        <IndustrialFeature />
        <RetailFeature />
        <ResidencesFeature />
        <EnergyFeature />
        <MethodTimeline />
        <Portfolio />
        <Numbers />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
