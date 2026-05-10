"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/lib/i18n-context";

export default function ContactPage() {
  const { t, lang } = useI18n();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const text = `*${lang === "bn" ? "নতুন অনুসন্ধান" : "New Inquiry"}*\n${lang === "bn" ? "নাম" : "Name"}: ${form.name}\n${lang === "bn" ? "ফোন" : "Phone"}: ${form.phone}\n${lang === "bn" ? "মেসেজ" : "Message"}: ${form.message}`;
    window.open(`https://wa.me/8801811813192?text=${encodeURIComponent(text)}`, "_blank");
  };

  const channels = [
    {
      icon: MessageCircle,
      title: t.contact.whatsapp,
      desc: t.contact.whatsappDesc,
      cta: "01811-813192",
      href: "https://wa.me/8801811813192?text=Hello",
      external: true,
      tone: "from-emerald-500 to-green-600",
      mono: true,
    },
    {
      icon: Phone,
      title: t.contact.callTitle,
      desc: t.contact.callDesc,
      cta: "01901-640268",
      sub: "01901-640267",
      href: "tel:01901640268",
      hrefSub: "tel:01901640267",
      tone: "from-brand to-orange-500",
      mono: true,
    },
    {
      icon: Mail,
      title: t.contact.emailTitle,
      desc: t.contact.emailDesc,
      cta: "nrwifizone@gmail.com",
      href: "mailto:nrwifizone@gmail.com",
      tone: "from-sky-500 to-blue-600",
      mono: true,
    },
    {
      icon: MapPin,
      title: t.contact.addressTitle,
      desc: t.contact.addressDesc,
      cta: lang === "bn" ? "ম্যাপে দেখুন" : "View on map",
      href: "https://maps.google.com/?q=BSCIC+Industrial+Area+Bogura",
      external: true,
      tone: "from-fuchsia-500 to-purple-600",
    },
  ];

  return (
    <>
      <PageHero
        title={t.contact.title}
        accent={t.contact.titleAccent}
        sub={t.contact.sub}
        badge={t.nav.contact}
      />

      {/* Contact channels grid */}
      <section className="pb-12">
        <div className="container-app">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {channels.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group card-hover p-6 relative overflow-hidden block"
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${c.tone} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />
                <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.tone} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <c.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-4 text-base font-bold text-app">{c.title}</h3>
                <p className="mt-1 text-sm text-soft leading-relaxed">{c.desc}</p>
                <div className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand ${c.mono ? "num-en" : ""}`}>
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                {c.sub && (
                  <div className={`mt-1 text-xs font-medium text-soft ${c.mono ? "num-en" : ""}`}>
                    {c.sub}
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section">
        <div className="container-app">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 card p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-app">{t.contact.formTitle}</h2>
                <p className="text-sm text-soft mt-1">{t.contact.formSub}</p>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <Field
                    label={t.contact.name}
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    type="text"
                    required
                  />
                  <Field
                    label={t.contact.phone}
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    type="tel"
                    required
                    mono
                  />
                  <Field
                    label={t.contact.message}
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v })}
                    textarea
                    required
                  />
                  <button type="submit" className="btn-primary w-full !py-3.5 group">
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    {t.contact.send}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Coverage card */}
            <motion.div
              id="coverage"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="card p-6 md:p-8 h-full relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-48 h-48 bg-brand/15 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-bold mb-4">
                    <MapPin className="h-3.5 w-3.5" />
                    {t.contact.coverageTitle}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-app">{t.contact.coverageSub}</h3>

                  <ul className="mt-5 grid grid-cols-2 gap-2">
                    {t.contact.areas.map((area, i) => (
                      <li key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg surface-2 border border-app">
                        <span className="relative inline-flex h-2 w-2 shrink-0">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span className="font-semibold text-app text-xs md:text-sm truncate">{area}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl overflow-hidden border border-app">
                    <iframe
                      src="https://maps.google.com/maps?q=BSCIC%20Industrial%20Area%20Bogura&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-56 border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Coverage map"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", textarea, required, mono }) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-soft uppercase tracking-wider">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={4}
          className={`mt-1.5 w-full rounded-xl border border-app surface px-4 py-3 text-sm text-app placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition resize-none ${mono ? "num-en" : ""}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={`mt-1.5 w-full rounded-xl border border-app surface px-4 py-3 text-sm text-app placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition ${mono ? "num-en" : ""}`}
        />
      )}
    </label>
  );
}
