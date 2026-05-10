"use client";

import { motion } from "framer-motion";
import { Wifi, Zap, Signal, Globe2 } from "lucide-react";

export default function WifiVisual() {
  const rings = [70, 110, 160, 215, 280];

  return (
    <div className="relative aspect-square w-full max-w-[440px] mx-auto">
      {/* concentric pulsing rings */}
      <div className="absolute inset-0 grid place-items-center">
        {rings.map((size, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 1.05, 0.6], opacity: [0.6, 0, 0.6] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
            className="absolute rounded-full border-2 border-brand/40"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      {/* central core */}
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full bg-gradient-to-br from-brand to-brand-700 grid place-items-center shadow-glow-lg"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand to-orange-500 blur-2xl opacity-50 -z-10" />
          <Wifi className="h-14 w-14 sm:h-16 sm:w-16 text-white" strokeWidth={2.5} />
        </motion.div>
      </div>

      {/* orbiting badges */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <FloatingBadge angle={0} icon={Zap} label="1 Gbps" sub="Speed" tone="amber" />
        <FloatingBadge angle={90} icon={Signal} label="99.9%" sub="Uptime" tone="emerald" />
        <FloatingBadge angle={180} icon={Globe2} label="BDIX" sub="Local" tone="sky" />
        <FloatingBadge angle={270} icon={Wifi} label="24/7" sub="Support" tone="rose" />
      </motion.div>
    </div>
  );
}

function FloatingBadge({ angle, icon: Icon, label, sub, tone }) {
  const radius = 46;
  const radians = (angle * Math.PI) / 180;
  const x = Math.cos(radians) * radius;
  const y = Math.sin(radians) * radius;
  const tones = {
    amber: "bg-amber-500/15 text-amber-500 border-amber-500/30",
    emerald: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
    sky: "bg-sky-500/15 text-sky-500 border-sky-500/30",
    rose: "bg-rose-500/15 text-rose-500 border-rose-500/30",
  };

  return (
    <div
      className="absolute"
      style={{
        top: `calc(50% + ${y}%)`,
        left: `calc(50% + ${x}%)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className={`flex items-center gap-2 px-3 py-2 rounded-2xl glass border ${tones[tone]} backdrop-blur-md`}
      >
        <Icon className="h-4 w-4" />
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-bold num-en">{label}</span>
          <span className="text-[10px] opacity-70">{sub}</span>
        </div>
      </motion.div>
    </div>
  );
}
