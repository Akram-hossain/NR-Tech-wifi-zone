"use client";

import { useI18n } from "@/lib/i18n-context";
import { Languages } from "lucide-react";

export default function LangToggle({ className = "", compact = false }) {
  const { lang, toggleLang } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language"
      className={`group inline-flex items-center gap-1.5 rounded-full border border-app surface px-2.5 h-9 text-xs font-semibold text-app transition-all hover:border-brand hover:text-brand ${className}`}
    >
      <Languages className="h-3.5 w-3.5" />
      {!compact && (
        <span className="num-en tracking-wide">
          <span className={lang === "bn" ? "text-brand" : "text-muted"}>BN</span>
          <span className="mx-1 opacity-40">/</span>
          <span className={lang === "en" ? "text-brand" : "text-muted"}>EN</span>
        </span>
      )}
    </button>
  );
}
