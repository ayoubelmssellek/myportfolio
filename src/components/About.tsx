"use client";

import { User } from "lucide-react";
import Section from "./Section";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <Section
      id="profil"
      title={about.title}
      subtitle={about.subtitle}
      className="bg-zinc-900/50"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="flex items-start gap-4 lg:col-span-1">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
            <User size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{about.role}</h3>
            <p className="mt-1 text-sm text-zinc-400">{about.roleTags}</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-zinc-300">{about.profile}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {about.highlights.map((label) => (
              <div
                key={label}
                className="rounded-xl border border-white/5 bg-zinc-950/50 p-4"
              >
                <p className="text-2xl font-bold text-cyan-400">✓</p>
                <p className="mt-1 text-sm text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
