"use client";

import { motion } from "framer-motion";
import { Check, Zap, Wifi, PhoneCall } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { perkLabels } from "@/lib/packages-data";

export default function PackageCard({ pkg, kind, index }) {
  const { lang, t } = useI18n();
  const isPopular = pkg.badge === "popular";
  const isValue = pkg.badge === "value";
  const featured = isPopular;

  const name = lang === "bn" ? pkg.nameBn : pkg.nameEn;
  const perks = pkg.perks.map((p) => perkLabels[lang][p]);

  // The headline spec shown as a big highlight badge
  const bnDigits = (n) => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
  const headlineSpec =
    kind === "home"
      ? pkg.speedLabel
      : lang === "bn"
      ? `${bnDigits(pkg.duration)} দিন`
      : `${pkg.duration} ${pkg.duration === 1 ? "Day" : "Days"}`;

  const priceFootnote =
    kind === "home"
      ? lang === "bn"
        ? "/মাস"
        : "/month"
      : lang === "bn"
      ? `${bnDigits(pkg.duration)} দিনের জন্য`
      : `for ${pkg.duration} ${pkg.duration === 1 ? "day" : "days"}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative group ${featured ? "lg:-translate-y-3" : ""}`}
    >
      {pkg.badge && (
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-lg ${
            isPopular ? "bg-brand text-white" : "bg-amber-400 text-black"
          }`}
        >
          {isPopular ? (
            <>
              <Zap className="h-3 w-3 fill-current" />
              {t.mostPopular}
            </>
          ) : (
            <>★ {lang === "bn" ? "বেস্ট ভ্যালু" : "Best Value"}</>
          )}
        </div>
      )}

      <div
        className={`relative h-full rounded-3xl p-6 md:p-7 transition-all duration-500 overflow-hidden ${
          featured
            ? "bg-gradient-to-br from-brand to-brand-700 text-white shadow-glow-lg ring-1 ring-brand/40"
            : "card-hover"
        }`}
      >
        {/* decorative blob */}
        <div
          className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-2xl ${
            featured ? "bg-orange-400/30" : "bg-brand/10 group-hover:bg-brand/20"
          } transition-colors`}
        />

        <div className="relative">
          {/* Plan name + spec badge */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`h-11 w-11 shrink-0 rounded-2xl grid place-items-center ${
                  featured ? "bg-white/15" : "bg-brand-soft text-brand"
                }`}
              >
                <Wifi className={`h-5 w-5 ${featured ? "text-white" : ""}`} />
              </div>
              <h3 className={`text-base font-bold leading-tight truncate ${featured ? "text-white" : "text-app"}`}>
                {name}
              </h3>
            </div>
            <div
              className={`shrink-0 inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-extrabold tracking-tight num-en whitespace-nowrap ${
                featured
                  ? "bg-white/20 text-white"
                  : "bg-brand text-white shadow-glow"
              }`}
            >
              {headlineSpec}
            </div>
          </div>

          {/* Price */}
          <div className="mt-5 mb-6">
            <div className="flex items-baseline gap-1">
              <span className={`text-xl font-bold ${featured ? "text-white/80" : "text-soft"}`}>৳</span>
              <span className={`text-5xl md:text-6xl font-extrabold tracking-tight num-en ${featured ? "text-white" : "text-app"}`}>
                {pkg.price}
              </span>
              <span className={`text-sm font-semibold self-end pb-2 ${featured ? "text-white/70" : "text-muted"}`}>
                {priceFootnote}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className={`h-px w-full mb-5 ${featured ? "bg-white/20" : "bg-app"} border-0`} style={{ borderColor: "rgb(var(--border))" }} />

          {/* Perks */}
          <ul className="space-y-2.5 mb-7">
            {kind === "home" && pkg.freeMinutes ? (
              <li className="flex items-start gap-2.5">
                <span
                  className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    featured ? "bg-yellow-300/30 text-yellow-200" : "bg-amber-400/20 text-amber-500"
                  }`}
                >
                  <PhoneCall className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className={`text-sm font-bold ${featured ? "text-yellow-200" : "text-amber-600 dark:text-amber-400"}`}>
                  {lang === "bn"
                    ? `${bnDigits(pkg.freeMinutes)} ফ্রি মিনিট`
                    : `${pkg.freeMinutes} Free Minutes`}
                </span>
              </li>
            ) : null}
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2.5">
                <span
                  className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    featured ? "bg-white/20" : "bg-emerald-500/15 text-emerald-500"
                  }`}
                >
                  <Check className={`h-3 w-3 ${featured ? "text-white" : ""}`} strokeWidth={3} />
                </span>
                <span className={`text-sm ${featured ? "text-white/95" : "text-app"}`}>{perk}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={`https://wa.me/8801811813192?text=${encodeURIComponent(
              `${lang === "bn" ? "আমি " : "I want "} ${name} ${lang === "bn" ? "প্যাকেজটি নিতে চাই" : "package"}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all ${
              featured
                ? "bg-white text-brand hover:bg-yellow-300 hover:text-black"
                : "bg-app text-app border border-app-strong hover:bg-brand hover:text-white hover:border-brand"
            }`}
          >
            {t.chooseplan}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
