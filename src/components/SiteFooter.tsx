import { SiteLogo } from "@/components/SiteLogo";
import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, PhoneCall, MessageCircle } from "lucide-react";

export const CONTACTS = {
  address: "Via Renato Guttuso, 8 — 52021 Bucine (AR)",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Via+Renato+Guttuso+8+52021+Bucine+AR",
  email: "info@ptermoidraulica.com",
  landline: "055 995556",
  landlineHref: "tel:+39055995556",
  phone: "339 859 7809",
  phoneHref: "tel:+393398597809",
  whatsapp: "345 17 05 602",
  whatsappHref: "https://wa.me/393451705602",
};

export function SiteFooter() {
  const iconBox =
    "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-lime/20 bg-lime/[0.06] text-lime";

  return (
    <footer className="bg-brown text-lime/80">
      <div className="container-editorial py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="inline-flex items-center rounded-2xl bg-lime/95 px-5 py-4"><SiteLogo className="h-10 md:h-12" /></span>
            <p className="mt-6 font-serif text-xl italic text-lime">
              Impianti, acqua ed energia per spazi destinati a durare.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {[
              { h: "Aree", l: ["Industria", "Atelier & Retail", "Piscine", "Residenze"] },
              { h: "Azienda", l: ["Chi siamo", "Metodo", "Progetti"] },
            ].map((c) => (
              <div key={c.h}>
                <p className="eyebrow text-lime/60">{c.h}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.l.map((i) => (
                    <li key={i}>
                      <span className="transition-colors hover:text-lime">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-lime/60">Contatti diretti</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className={iconBox}><MapPin className="h-4 w-4" aria-hidden /></span>
                <a
                  href={CONTACTS.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-relaxed transition-colors hover:text-lime"
                >
                  Via Renato Guttuso, 8<br />52021 Bucine (AR)
                </a>
              </li>
              <li className="flex gap-3">
                <span className={iconBox}><Mail className="h-4 w-4" aria-hidden /></span>
                <a href={`mailto:${CONTACTS.email}`} className="transition-colors hover:text-lime">
                  {CONTACTS.email}
                </a>
              </li>
              <li className="flex gap-3">
                <span className={iconBox}><PhoneCall className="h-4 w-4" aria-hidden /></span>
                <a href={CONTACTS.landlineHref} className="transition-colors hover:text-lime">
                  {CONTACTS.landline}
                </a>
              </li>
              <li className="flex gap-3">
                <span className={iconBox}><Phone className="h-4 w-4" aria-hidden /></span>
                <a href={CONTACTS.phoneHref} className="transition-colors hover:text-lime">
                  {CONTACTS.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <span className={iconBox}><MessageCircle className="h-4 w-4" aria-hidden /></span>
                <a
                  href={CONTACTS.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-lime"
                >
                  WhatsApp {CONTACTS.whatsapp}
                </a>
              </li>
            </ul>
            <Link to="/contatti" className="mt-6 inline-flex text-xs uppercase tracking-[0.18em] text-lime underline underline-offset-4">
              Pagina contatti
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-lime/15 pt-8 text-xs text-lime/50">
          <p>© {new Date().getFullYear()} SP Termoidraulica S.r.l. — Tutti i diritti riservati.</p>
          <div className="flex flex-wrap gap-6">
            <span>Privacy policy</span>
            <span>Cookie policy</span>
            <span>Dati societari</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
