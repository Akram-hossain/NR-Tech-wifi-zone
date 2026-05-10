"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";
import { Phone, Mail, MapPin, Facebook, MessageCircle, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { t, lang } = useI18n();

  const services = [
    t.services?.s1Title || "Internet",
    t.services?.s2Title || "Hotspot",
    t.services?.s3Title || "FTP",
    t.services?.s4Title || "IPTV",
  ];

  return (
    <footer className="relative mt-20 surface-2 border-t border-app overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-app relative pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex">
              <Image src="/logo.svg" alt="NR Tech" width={150} height={42} className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-soft leading-relaxed">{t.footer.about}</p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full surface border border-app text-app hover:text-white hover:bg-brand hover:border-brand transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Messenger"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full surface border border-app text-app hover:text-white hover:bg-brand hover:border-brand transition"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/8801811813192"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full surface border border-app text-app hover:text-white hover:bg-brand hover:border-brand transition"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-app mb-4">{t.footer.quick}</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: t.nav.home },
                { href: "/packages", label: t.nav.packages },
                { href: "/services", label: t.nav.services },
                { href: "/contact", label: t.nav.contact },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-soft hover:text-brand transition inline-flex items-center gap-1.5 group">
                    <span>{l.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-app mb-4">{t.footer.services}</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <Link href="/services" className="text-sm text-soft hover:text-brand transition">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-app mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-soft">
                <MapPin className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                <span>{lang === "bn" ? "বিসিক, বগুড়া সদর, বগুড়া" : "BSCIC, Bogura Sadar, Bogura"}</span>
              </li>
              <li>
                <a href="tel:01901640268" className="flex items-center gap-2.5 text-soft hover:text-brand transition">
                  <Phone className="h-4 w-4 text-brand shrink-0" />
                  <span className="num-en">01901-640268</span>
                </a>
              </li>
              <li>
                <a href="tel:01901640267" className="flex items-center gap-2.5 text-soft hover:text-brand transition">
                  <Phone className="h-4 w-4 text-brand shrink-0" />
                  <span className="num-en">01901-640267</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801811813192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-soft hover:text-brand transition"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand shrink-0" fill="currentColor">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span className="num-en">01811-813192</span>
                </a>
              </li>
              <li>
                <a href="mailto:nrwifizone@gmail.com" className="flex items-center gap-2.5 text-soft hover:text-brand transition break-all">
                  <Mail className="h-4 w-4 text-brand shrink-0" />
                  <span className="num-en">nrwifizone@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-app flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-muted text-center md:text-left">
            © <span className="num-en">2025</span> NR Tech Wifi Zone. {t.footer.rights}.
          </p>
          <p className="text-xs text-muted inline-flex items-center gap-1.5">
            {t.footer.madeWith} <Heart className="h-3.5 w-3.5 text-brand fill-brand animate-pulse" /> {t.footer.inBogura}
          </p>
        </div>
      </div>
    </footer>
  );
}
