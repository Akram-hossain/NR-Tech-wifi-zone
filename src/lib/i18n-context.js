"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations } from "./translations";

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState("bn");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("nr-lang") : null;
    if (stored === "en" || stored === "bn") {
      setLangState(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang, mounted]);

  const setLang = useCallback((next) => {
    setLangState(next);
    if (typeof window !== "undefined") localStorage.setItem("nr-lang", next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "bn" ? "en" : "bn");
  }, [lang, setLang]);

  const t = translations[lang];

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t, mounted }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
