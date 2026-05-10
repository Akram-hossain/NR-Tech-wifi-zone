"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import WifiVisual from "./WifiVisual";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="glow-orb bg-brand top-[-100px] left-[-80px] w-[400px] h-[400px]" />
        <div className="glow-orb bg-orange-500 top-[200px] right-[-120px] w-[450px] h-[450px]" />
        <div className="glow-orb bg-pink-500 bottom-[-150px] left-[30%] w-[350px] h-[350px] opacity-25" />
      </div>

      <div className="container-app relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* left */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold border border-brand/30 text-brand mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.3]"
            >
              <span className="block text-app pb-1">{t.hero.title1}</span>
              <span className="block gradient-text pb-2">{t.hero.title2}</span>
              <span className="block text-app text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 font-bold pb-1">
                {t.hero.title3}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg text-soft max-w-xl mx-auto lg:mx-0"
            >
              {t.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link href="/contact" className="btn-primary text-base group">
                {t.hero.cta1}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/packages" className="btn-outline text-base group">
                <PlayCircle className="h-5 w-5" />
                {t.hero.cta2}
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              <Stat label={t.hero.stat1} sub={t.hero.stat1Label} />
              <Stat label={t.hero.stat2} sub={t.hero.stat2Label} />
              <Stat label={t.hero.stat3} sub={t.hero.stat3Label} />
              <Stat label={t.hero.stat4} sub={t.hero.stat4Label} />
            </motion.div>
          </div>

          {/* right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <WifiVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, sub }) {
  return (
    <div className="rounded-2xl glass border border-app px-4 py-3 text-left">
      <div className="text-xl sm:text-2xl font-extrabold text-brand num-en">{label}</div>
      <div className="text-xs text-soft mt-0.5">{sub}</div>
    </div>
  );
}
