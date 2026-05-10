"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export default function FinalCTA() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-600 to-orange-500 p-8 md:p-14 text-white text-center shadow-glow-lg"
        >
          {/* animated grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute -top-32 -left-20 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl" />

          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t.cta.title}</h2>
            <p className="mt-4 text-base md:text-lg text-white/90 max-w-xl mx-auto">{t.cta.sub}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="btn bg-white text-brand hover:bg-yellow-300 hover:text-black px-7 py-3.5 text-base font-bold group"
              >
                {t.cta.btn}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:01811813192"
                className="btn border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-md px-7 py-3.5 text-base font-bold"
              >
                <Phone className="h-5 w-5" />
                <span className="num-en">01811-813192</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
