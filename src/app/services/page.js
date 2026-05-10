"use client";

import { motion } from "framer-motion";
import { Wifi, Radio, Server, Tv, Globe2, Gamepad2, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { useI18n } from "@/lib/i18n-context";

export default function ServicesPage() {
  const { t, lang } = useI18n();
  const [copied, setCopied] = useState(false);

  const services = [
    { icon: Wifi, title: t.services.s1Title, desc: t.services.s1Desc, tone: "from-brand to-orange-500" },
    { icon: Radio, title: t.services.s2Title, desc: t.services.s2Desc, tone: "from-fuchsia-500 to-purple-600" },
    { icon: Server, title: t.services.s3Title, desc: t.services.s3Desc, tone: "from-emerald-500 to-teal-600" },
    { icon: Tv, title: t.services.s4Title, desc: t.services.s4Desc, tone: "from-sky-500 to-blue-600" },
    { icon: Globe2, title: t.services.s5Title, desc: t.services.s5Desc, tone: "from-amber-500 to-orange-600" },
    { icon: Gamepad2, title: t.services.s6Title, desc: t.services.s6Desc, tone: "from-rose-500 to-pink-600" },
  ];

  const bkash = "01811-813192";

  const copyBkash = async () => {
    try {
      await navigator.clipboard.writeText(bkash);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <>
      <PageHero
        title={t.services.title}
        accent={t.services.titleAccent}
        sub={t.services.sub}
        badge={t.nav.services}
      />

      {/* Service grid */}
      <section className="pb-16">
        <div className="container-app">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group card-hover p-6 md:p-7 relative overflow-hidden"
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${s.tone} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />

                <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.tone} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <s.icon className="h-7 w-7" strokeWidth={2.2} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-app">{s.title}</h3>
                <p className="mt-2 text-sm text-soft leading-relaxed">{s.desc}</p>

                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.learnMore}
                  <span aria-hidden>→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment section */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white p-8 md:p-12"
          >
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }} />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold mb-4">
                  💳 {lang === "bn" ? "পেমেন্ট মাধ্যম" : "Payment Method"}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">{t.services.payTitle}</h2>
                <p className="mt-3 text-white/90">{t.services.paySub}</p>
              </div>

              <div className="relative bg-white text-pink-600 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl font-extrabold tracking-tight">bKash</div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 uppercase">
                    {t.services.payType}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{t.services.payLabel}</p>
                <div className="mt-1 flex items-center gap-3">
                  <div className="text-3xl md:text-4xl font-extrabold text-zinc-900 num-en">{bkash}</div>
                  <button
                    type="button"
                    onClick={copyBkash}
                    className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition"
                    aria-label="Copy bKash number"
                  >
                    {copied ? <CheckCircle2 className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  </button>
                </div>
                {copied && (
                  <p className="mt-2 text-xs font-semibold text-emerald-600">
                    ✓ {lang === "bn" ? "কপি হয়েছে!" : "Copied!"}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
