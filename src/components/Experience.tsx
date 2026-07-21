"use client";

import { Briefcase, MapPin, Clock } from "lucide-react";
import Section from "./Section";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <Section
      id="experience"
      title={experience.title}
      subtitle={experience.subtitle}
    >
      <div className="space-y-6">
        {experience.items.map((exp) => (
          <article
            key={exp.id}
            className="group rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-colors hover:border-cyan-500/20"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                  {exp.type}
                </span>
                <h4 className="mt-3 text-lg font-semibold text-white">
                  {exp.title}
                </h4>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-zinc-400">
                  {"location" in exp && exp.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {exp.period}
                    {"duration" in exp && exp.duration && ` · ${exp.duration}`}
                  </span>
                </div>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {exp.highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
