"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedNumber({ value, format = (v) => v.toLocaleString(), className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (latest) => format(Math.round(latest)));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
