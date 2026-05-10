"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export default function CoverageStrip() {
  const { t } = useI18n();

  const areas = [t.coverage.area1, t.coverage.area2, t.coverage.area3, t.coverage.area4];

  return (
    <section className="section relative">
      <div className="container-app">
        <div className="relative overflow-hidden rounded-3xl border border-app surface-2 p-6 md:p-12">
          <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-8 items-center relative">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-bold mb-4">
                <MapPin className="h-3.5 w-3.5" />
                {t.coverage.title}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-app leading-tight">
                {t.coverage.sub}
              </h2>
              <Link href="/contact#coverage" className="btn-primary mt-6 group">
                {t.coverage.check}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative card p-5 text-center hover:border-brand transition"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand mb-2 group-hover:bg-brand group-hover:text-white transition">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-app text-sm md:text-base">{area}</p>
                  <span className="absolute top-2 right-2 inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
