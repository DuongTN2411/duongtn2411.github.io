"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="mx-auto max-w-4xl text-center text-xs text-muted">
        <p>© {year} Trần Nam Dương</p>
      </div>
    </footer>
  );
}
