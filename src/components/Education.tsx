import { GraduationCap, Languages } from "lucide-react";
import Section from "./Section";
import { education, languages } from "@/data/portfolio";

export default function Education() {
  return (
    <Section
      id="formation"
      title="Formation & Langues"
      subtitle="Parcours académique et compétences linguistiques"
    >
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
            <GraduationCap size={20} className="text-cyan-400" />
            Formations
          </h3>
          <div className="relative space-y-0">
            {education.map((item, index) => (
              <div key={item.id} className="relative flex gap-6 pb-8 last:pb-0">
                {index < education.length - 1 && (
                  <div className="absolute left-[11px] top-8 h-full w-px bg-white/10" />
                )}
                <div className="relative z-10 mt-1.5 h-6 w-6 shrink-0 rounded-full border-2 border-cyan-400 bg-zinc-950" />
                <div className="flex-1 rounded-xl border border-white/5 bg-zinc-900/50 p-5">
                  <p className="text-xs font-semibold text-cyan-400">
                    {item.period}
                  </p>
                  <h4 className="mt-1 font-semibold text-white">{item.degree}</h4>
                  <p className="mt-1 text-sm text-zinc-400">{item.institution}</p>
                  {item.note && (
                    <p className="mt-2 text-sm font-medium text-zinc-300">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
            <Languages size={20} className="text-cyan-400" />
            Langues parlées
          </h3>
          <div className="space-y-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="rounded-xl border border-white/5 bg-zinc-900/50 p-5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white">{lang.name}</h4>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    {lang.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
