"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

export default function Header() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/packages", label: t.nav.packages },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "glass shadow-soft" : "bg-app/80 backdrop-blur-md"
        }`}
      >
        <div className="container-app">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/logo.svg"
                alt="NR Tech Wifi Zone"
                width={140}
                height={40}
                priority
                className="h-8 w-auto lg:h-10 dark:invert-0"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    isActive(l.href)
                      ? "text-brand"
                      : "text-app hover:text-brand"
                  }`}
                >
                  {l.label}
                  {isActive(l.href) && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-brand rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LangToggle className="hidden sm:inline-flex" />
              <ThemeToggle />
              <Link
                href="http://103.110.217.214/"
                target="_blank"
                className="hidden sm:inline-flex btn-primary !py-2 !px-5 !text-sm"
              >
                {t.selfCare}
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full surface border border-app text-app hover:text-brand hover:border-brand transition"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm surface flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-app">
            <Image src="/logo.svg" alt="NR Tech" width={110} height={32} className="h-8 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-app text-app hover:text-brand hover:border-brand transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-5">
            <ul className="flex flex-col gap-1">
              {links.map((l, i) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                      isActive(l.href)
                        ? "bg-brand text-white shadow-glow"
                        : "text-app hover:bg-brand-soft hover:text-brand"
                    }`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span>{l.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <LangToggle className="flex-1 !justify-center !h-11" />
            </div>

            <Link
              href="http://103.110.217.214/"
              target="_blank"
              className="btn-primary w-full mt-4 !py-3.5"
            >
              {t.selfCare}
            </Link>
          </nav>

          <div className="p-5 border-t border-app">
            <p className="text-xs text-soft mb-3">{t.tagline}</p>
            <div className="space-y-2 text-sm">
              <a href="tel:01901640268" className="flex items-center gap-2 text-app hover:text-brand">
                <span className="num-en">📞 01901-640268</span>
              </a>
              <a href="tel:01901640267" className="flex items-center gap-2 text-app hover:text-brand">
                <span className="num-en">📞 01901-640267</span>
              </a>
              <a href="https://wa.me/8801811813192" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-app hover:text-brand">
                <span className="num-en">💬 01811-813192 (WhatsApp)</span>
              </a>
              <a href="mailto:nrwifizone@gmail.com" className="flex items-center gap-2 text-app hover:text-brand">
                <span className="num-en">✉️ nrwifizone@gmail.com</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
