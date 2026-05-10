"use client";

import { motion } from "framer-motion";

export default function PageHero({ title, accent, sub, badge }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-12 md:pt-20 md:pb-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="glow-orb bg-brand top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[400px] opacity-30" />
        <div className="glow-orb bg-orange-500 top-[100px] right-[-120px] w-[400px] h-[400px] opacity-25" />
      </div>

      <div className="container-app text-center relative">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-brand/30 text-brand text-xs font-bold mb-4"
          >
            {badge}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-app leading-[1.25] pb-1"
        >
          {title}
          <span className="gradient-text">{accent}</span>
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 sub-heading"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}
