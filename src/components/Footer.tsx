"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-8">
      <div className="container-custom flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {year} {personalInfo.firstName} {personalInfo.lastName}.{" "}
          {t.footer.rights}
        </p>
        <p className="text-sm text-zinc-500">
          {t.footer.builtWith}{" "}
          <span className="text-cyan-400">Next.js</span> &{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
