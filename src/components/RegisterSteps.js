"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MousePointerClick, MessageCircle, Wifi, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export default function RegisterSteps() {
  const { t } = useI18n();

  const steps = [
    { icon: MousePointerClick, title: t.register.s1Title, desc: t.register.s1Desc, num: "01" },
    { icon: MessageCircle, title: t.register.s2Title, desc: t.register.s2Desc, num: "02" },
    { icon: Wifi, title: t.register.s3Title, desc: t.register.s3Desc, num: "03" },
  ];

  return (
    <section className="section surface-2">
      <div className="container-app">
        <div className="text-center mb-12">
          <h2 className="heading">{t.register.title}</h2>
          <p className="sub-heading mt-3">{t.register.sub}</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {/* connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand/30 to-transparent -z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative inline-flex">
                <div className="relative h-24 w-24 mx-auto rounded-3xl bg-gradient-to-br from-brand to-orange-500 grid place-items-center shadow-glow">
                  <s.icon className="h-10 w-10 text-white" strokeWidth={2.2} />
                  <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-app border-2 border-brand grid place-items-center text-xs font-extrabold text-brand num-en">
                    {s.num}
                  </span>
                </div>
              </div>
              <h3 className="mt-5 text-xl font-bold text-app">{s.title}</h3>
              <p className="mt-2 text-sm text-soft max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary group">
            {t.cta.btn}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
