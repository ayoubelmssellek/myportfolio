"use client";

import { locales } from "@/i18n/translations";
import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
            locale === code
              ? "bg-cyan-500 text-zinc-950"
              : "text-zinc-400 hover:text-white"
          }`}
          aria-label={`Switch to ${code === "en" ? "English" : "French"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
