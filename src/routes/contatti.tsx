import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, PhoneCall, MessageCircle, ArrowLeft } from "lucide-react";
import { SiteFooter, CONTACTS } from "@/components/SiteFooter";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — SP Termoidraulica, Bucine (AR)" },
      {
        name: "description",
        content:
          "Contatta SP Termoidraulica: Via Renato Guttuso 8, Bucine (AR). Telefono, WhatsApp, email e mappa per impianti, piscine e residenze.",
      },
      { property: "og:title", content: "Contatti — SP Termoidraulica" },
      {
        property: "og:description",
        content:
          "Impianti, piscine, atelier e residenze. Scrivici o chiamaci: siamo a Bucine, in provincia di Arezzo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContattiPage,
});

const CARDS = [
  {
    icon: MapPin,
    label: "Sede operativa",
    value: "Via Renato Guttuso, 8\n52021 Bucine (AR)",
    href: CONTACTS.mapsUrl,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACTS.email,
    href: `mailto:${CONTACTS.email}`,
  },
  {
    icon: PhoneCall,
    label: "Telefono fisso",
    value: CONTACTS.landline,
    href: CONTACTS.landlineHref,
  },
  {
    icon: Phone,
    label: "Cellulare",
    value: CONTACTS.phone,
    href: CONTACTS.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACTS.whatsapp,
    href: CONTACTS.whatsappHref,
    external: true,
  },
];

function ContattiPage() {
  return (
    <div className="min-h-screen bg-lime text-graphite">
      <header className="border-b border-taupe/15">
        <div className="container-editorial flex items-center justify-between py-5">
          <Link to="/" className="flex items-baseline gap-3">
            <span className="font-serif text-2xl tracking-tight">SP</span>
            <span className="eyebrow">Termoidraulica</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Home
          </Link>
        </div>
      </header>

      <main>
        <section className="container-editorial py-20 md:py-28">
          <p className="eyebrow text-bronze">Contatti</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
            Parliamo del tuo progetto.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite/70">
            Progettazione, installazione e manutenzione di impianti termoidraulici,
            piscine e sistemi per spazi che devono durare nel tempo.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {CARDS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex items-start gap-5 rounded-2xl border border-taupe/20 bg-ivory/60 p-7 transition-colors hover:border-bronze/50 hover:bg-ivory"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-taupe/25 bg-lime text-bronze transition-colors group-hover:border-bronze/40">
                  <c.icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="eyebrow block text-graphite/50">{c.label}</span>
                  <span className="mt-2 block whitespace-pre-line font-serif text-2xl leading-snug md:text-3xl">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section aria-label="Mappa" className="border-y border-taupe/15">
          <iframe
            title="Mappa sede SP Termoidraulica, Via Renato Guttuso 8, Bucine (AR)"
            src="https://www.google.com/maps?q=Via%20Renato%20Guttuso%208,%2052021%20Bucine%20AR&output=embed"
            className="h-[420px] w-full md:h-[560px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
