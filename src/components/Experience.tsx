"use client";

import { Briefcase, MapPin, Clock, Code2, ExternalLink } from "lucide-react";
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
      <div className="space-y-8">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
          <Briefcase size={22} className="text-cyan-400" />
          {experience.experienceLabel}
        </h3>
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

        <h3 className="flex items-center gap-2 pt-8 text-xl font-semibold text-white">
          <Code2 size={22} className="text-cyan-400" />
          {experience.projectsLabel}
        </h3>
        <div className="grid gap-6 lg:grid-cols-2">
          {experience.projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-6 transition-all hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {project.subtitle}
                  </span>
                  <h4 className="mt-2 text-xl font-bold text-white">
                    {project.title}
                  </h4>
                </div>
                {"url" in project && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-lg border border-white/10 p-2 text-zinc-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                    aria-label={`${project.title} live site`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <p className="mt-3 text-sm text-zinc-400">{project.description}</p>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {"url" in project && project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-cyan-500/50 hover:bg-white/10"
                >
                  <ExternalLink size={16} />
                  uniqque.online
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
