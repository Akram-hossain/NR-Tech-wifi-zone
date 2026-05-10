"use client";

import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/lib/i18n-context";

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="nr-theme"
    >
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}
