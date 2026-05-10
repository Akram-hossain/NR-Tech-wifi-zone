"use client";

import { motion } from "framer-motion";
import { Zap, Server, Headphones, Gamepad2, ShieldCheck, Truck } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export default function WhyUs() {
  const { t } = useI18n();

  const items = [
    { icon: Zap, title: t.why.f1Title, desc: t.why.f1Desc },
    { icon: Server, title: t.why.f2Title, desc: t.why.f2Desc },
    { icon: Headphones, title: t.why.f3Title, desc: t.why.f3Desc },
    { icon: Gamepad2, title: t.why.f4Title, desc: t.why.f4Desc },
    { icon: ShieldCheck, title: t.why.f5Title, desc: t.why.f5Desc },
    { icon: Truck, title: t.why.f6Title, desc: t.why.f6Desc },
  ];

  return (
    <section id="why" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="glow-orb bg-brand/40 top-1/3 left-[-100px] w-[400px] h-[400px] opacity-20" />
        <div className="glow-orb bg-orange-500/40 bottom-0 right-[-150px] w-[450px] h-[450px] opacity-20" />
      </div>

      <div className="container-app">
        <div className="text-center mb-12">
          <h2 className="heading">
            {t.why.title.split("?")[0]}<span className="gradient-text">?</span>
          </h2>
          <p className="sub-heading mt-3">{t.why.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group card-hover p-6 relative overflow-hidden"
            >
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-app">{item.title}</h3>
                <p className="mt-2 text-sm text-soft leading-relaxed">{item.desc}</p>
              </div>
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-brand/5 group-hover:bg-brand/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
