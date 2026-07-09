"use client";

import { Brain, Wrench } from "lucide-react";
import Section from "./Section";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const { skills } = t;

  const techCategories = [
    { title: skills.categories.languages, items: skills.technical.languages },
    { title: skills.categories.databases, items: skills.technical.databases },
    {
      title: skills.categories.development,
      items: skills.technical.development,
    },
    { title: skills.categories.tools, items: skills.technical.tools },
    { title: skills.categories.other, items: skills.technical.other },
  ];

  return (
    <Section
      id="competences"
      title={skills.title}
      subtitle={skills.subtitle}
      className="bg-zinc-900/50"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
            <Brain size={20} className="text-cyan-400" />
            {skills.personalLabel}
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.personal.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-white/5 bg-zinc-950/50 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-cyan-500/30 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
            <Wrench size={20} className="text-cyan-400" />
            {skills.technicalLabel}
          </h3>
          <div className="space-y-5">
            {techCategories.map((category) => (
              <div key={category.title}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
