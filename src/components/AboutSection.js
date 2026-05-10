"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users2, Trophy } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import AnimatedNumber from "./AnimatedNumber";

export default function AboutSection() {
  const { t, lang } = useI18n();

  const points =
    lang === "bn"
      ? [
          "১০ বছরেরও বেশি অভিজ্ঞতা",
          "১০০% ফাইবার অপটিক নেটওয়ার্ক",
          "ডেডিকেটেড ব্যান্ডউইথ গ্যারান্টি",
          "BDIX ও আন্তর্জাতিক ব্যান্ডউইথ",
        ]
      : [
          "Over 10 years of experience",
          "100% fiber optic network",
          "Dedicated bandwidth guarantee",
          "BDIX and international bandwidth",
        ];

  const aboutTitle = lang === "bn" ? "আপনার বিশ্বস্ত ইন্টারনেট সঙ্গী" : "Your Trusted Internet Partner";
  const aboutSub =
    lang === "bn"
      ? "এনআর টেক ওয়াইফাই জোন বগুড়ায় ২০১৪ সাল থেকে নির্ভরযোগ্য ব্রডব্যান্ড সেবা দিয়ে আসছে। আধুনিক ফাইবার অপটিক প্রযুক্তি, অভিজ্ঞ টিম এবং ২৪/৭ সাপোর্ট নিয়ে আমরা প্রতিদিন হাজারো পরিবারকে যুক্ত রাখছি ডিজিটাল বিশ্বের সাথে।"
      : "NR Tech Wifi Zone has been delivering reliable broadband in Bogura since 2014. With modern fiber optic technology, an experienced team, and 24/7 support, we keep thousands of families connected to the digital world every day.";

  const stats = [
    { icon: Users2, value: 10000, suffix: "+", label: lang === "bn" ? "সন্তুষ্ট গ্রাহক" : "Happy Customers" },
    { icon: Trophy, value: 10, suffix: "+", label: lang === "bn" ? "বছরের অভিজ্ঞতা" : "Years Experience" },
    { icon: Award, value: 99, suffix: "%", label: lang === "bn" ? "আপটাইম" : "Uptime" },
  ];

  return (
    <section id="about" className="section">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative animated panels */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand to-orange-500 rotate-3 shadow-glow" />
              <div className="absolute inset-0 rounded-3xl surface border border-app -rotate-3 grid place-items-center p-8">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl font-extrabold gradient-text num-en">10+</div>
                  <p className="mt-2 text-lg font-semibold text-app">{lang === "bn" ? "বছরের সেবা" : "Years of Service"}</p>
                  <p className="mt-1 text-sm text-soft">{lang === "bn" ? "বগুড়া সদরে" : "in Bogura Sadar"}</p>

                  <div className="mt-6 flex items-center justify-center gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="w-2 h-2 rounded-full bg-brand" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-bold mb-4">
              {lang === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-app leading-tight">{aboutTitle}</h2>
            <p className="mt-4 text-soft leading-relaxed">{aboutSub}</p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-sm text-app font-medium">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="card p-4 text-center">
                  <s.icon className="h-5 w-5 mx-auto text-brand" />
                  <div className="mt-2 text-2xl font-extrabold text-app num-en">
                    <AnimatedNumber value={s.value} />{s.suffix}
                  </div>
                  <div className="text-[11px] text-soft mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
