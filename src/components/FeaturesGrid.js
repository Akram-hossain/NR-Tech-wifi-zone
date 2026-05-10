"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Package, Users, Cog, MapPin, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export default function FeaturesGrid() {
  const { t } = useI18n();

  const items = [
    { icon: Package, title: t.features.packages, desc: t.features.packagesDesc, href: "/packages", tone: "from-brand to-orange-500" },
    { icon: Users, title: t.features.about, desc: t.features.aboutDesc, href: "/#about", tone: "from-sky-500 to-blue-600" },
    { icon: Cog, title: t.features.services, desc: t.features.servicesDesc, href: "/services", tone: "from-emerald-500 to-teal-600" },
    { icon: MapPin, title: t.features.coverage, desc: t.features.coverageDesc, href: "/contact#coverage", tone: "from-fuchsia-500 to-purple-600" },
  ];

  return (
    <section className="section">
      <div className="container-app">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="heading">
            {t.features.title.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? <span key={i} className="gradient-text"> {w}</span> : <span key={i}>{w} </span>
            )}
          </h2>
          <p className="sub-heading mt-3">{t.features.sub}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={item.href}
                className="group relative block card-hover p-5 md:p-6 h-full overflow-hidden"
              >
                <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.tone} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500`} />
                <div className={`relative inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.tone} text-white shadow-lg`}>
                  <item.icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.2} />
                </div>
                <h3 className="mt-4 text-base md:text-lg font-bold text-app">{item.title}</h3>
                <p className="mt-1 text-xs md:text-sm text-soft">{item.desc}</p>
                <ArrowUpRight className="absolute top-5 right-5 h-5 w-5 text-muted group-hover:text-brand transition-all opacity-0 group-hover:opacity-100 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
