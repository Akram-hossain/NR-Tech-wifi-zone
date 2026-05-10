"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Wifi, ChevronDown, HelpCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { hotspotPackages, homePackages, faqs } from "@/lib/packages-data";
import PackageCard from "./PackageCard";

export default function PackagesView() {
  const { t, lang } = useI18n();
  const [tab, setTab] = useState("home");
  const [openFaq, setOpenFaq] = useState(0);

  const data = tab === "home" ? homePackages : hotspotPackages;

  return (
    <>
      {/* Tab switcher */}
      <section className="pt-2 pb-6">
        <div className="container-app">
          <div className="flex justify-center">
            <div className="inline-flex rounded-2xl surface-2 border border-app p-1.5 gap-1">
              <TabButton active={tab === "home"} onClick={() => setTab("home")} icon={Home} label={t.packages.tabHome} />
              <TabButton active={tab === "hotspot"} onClick={() => setTab("hotspot")} icon={Wifi} label={t.packages.tabHotspot} />
            </div>
          </div>
          <p className="text-center text-sm text-soft mt-4">
            {tab === "home" ? t.packages.homeNote : t.packages.hotspotNote}
          </p>
        </div>
      </section>

      {/* Package cards */}
      <section className="pb-16">
        <div className="container-app">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto pt-4"
            >
              {data.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} kind={tab} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-app max-w-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand mb-4">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h2 className="heading">{t.packages.faqTitle}</h2>
          </div>

          <div className="space-y-3">
            {faqs[lang].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-brand-soft/50 transition"
                >
                  <span className="font-semibold text-app">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-brand transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-sm text-soft leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TabButton({ active, onClick, icon: Icon, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all ${
        active ? "text-white" : "text-soft hover:text-app"
      }`}
    >
      {active && (
        <motion.span
          layoutId="tabActive"
          className="absolute inset-0 rounded-xl bg-brand shadow-glow"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <Icon className="h-4 w-4 relative" />
      <span className="relative">{label}</span>
    </button>
  );
}
