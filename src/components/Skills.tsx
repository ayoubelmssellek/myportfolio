import { Brain, Wrench } from "lucide-react";
import Section from "./Section";
import { personalSkills, technicalSkills } from "@/data/portfolio";

export default function Skills() {
  const techCategories = [
    { title: "Langages & Frameworks", items: technicalSkills.languages },
    { title: "Bases de données", items: technicalSkills.databases },
    { title: "Développement", items: technicalSkills.development },
    { title: "Outils", items: technicalSkills.tools },
    { title: "Autres", items: technicalSkills.other },
  ];

  return (
    <Section
      id="competences"
      title="Compétences"
      subtitle="Savoir-faire personnel et technique"
      className="bg-zinc-900/50"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
            <Brain size={20} className="text-cyan-400" />
            Personnelles
          </h3>
          <div className="flex flex-wrap gap-3">
            {personalSkills.map((skill) => (
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
            Techniques
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
