"use client";

import PageHero from "@/components/PageHero";
import PackagesView from "@/components/PackagesView";
import FinalCTA from "@/components/FinalCTA";
import { useI18n } from "@/lib/i18n-context";

export default function PackagesPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        title={t.packages.title}
        accent={t.packages.titleAccent}
        sub={t.packages.sub}
        badge={t.nav.packages}
      />
      <PackagesView />
      <FinalCTA />
    </>
  );
}
