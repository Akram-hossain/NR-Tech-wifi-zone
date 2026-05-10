"use client";

import { useI18n } from "@/lib/i18n-context";
import { Phone, Mail, Facebook, MessageCircle } from "lucide-react";

export default function TopBar() {
  const { t } = useI18n();

  return (
    <div className="hidden lg:block bg-black text-white text-xs">
      <div className="container-app flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-brand font-semibold">{t.brand}</span>
          <span className="opacity-30">|</span>
          <span className="opacity-80">{t.tagline}</span>
          <a
            href="tel:01811813192"
            className="flex items-center gap-1.5 opacity-80 hover:opacity-100 hover:text-brand transition"
          >
            <Phone className="h-3 w-3" />
            <span className="num-en">01811-813192</span>
          </a>
          <a
            href="mailto:nrwifizone@gmail.com"
            className="flex items-center gap-1.5 opacity-80 hover:opacity-100 hover:text-brand transition"
          >
            <Mail className="h-3 w-3" />
            <span className="num-en">nrwifizone@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="opacity-70 hover:opacity-100 hover:text-brand transition">
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a href="#" aria-label="Messenger" className="opacity-70 hover:opacity-100 hover:text-brand transition">
            <MessageCircle className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://wa.me/8801811813192"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="opacity-70 hover:opacity-100 hover:text-brand transition"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
