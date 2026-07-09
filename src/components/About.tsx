import { User } from "lucide-react";
import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section
      id="profil"
      title="Profil"
      subtitle="Qui je suis et ce que je fais"
      className="bg-zinc-900/50"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="flex items-start gap-4 lg:col-span-1">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
            <User size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Développeur Full-Stack
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Web · Mobile · SaaS
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-zinc-300">{profile}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Applications en production", value: "✓" },
              { label: "Cycle complet de développement", value: "✓" },
              { label: "Orienté résultats", value: "✓" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/5 bg-zinc-950/50 p-4"
              >
                <p className="text-2xl font-bold text-cyan-400">{item.value}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
