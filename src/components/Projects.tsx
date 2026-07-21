"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Section from "./Section";
import { GitHubIcon } from "./icons";
import { showcaseProjects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const INITIAL_COUNT = 4;

export default function Projects() {
  const { locale, t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? showcaseProjects
    : showcaseProjects.slice(0, INITIAL_COUNT);
  const hasMore = showcaseProjects.length > INITIAL_COUNT;

  return (
    <Section
      id="projets"
      title={t.projects.title}
      subtitle={t.projects.subtitle}
      className="bg-zinc-900/50"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => {
          const linkLabel = project.url
            ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
            : null;

          return (
            <article
              key={project.id}
              className="flex flex-col rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-6 transition-all hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <div className="flex shrink-0 items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/10 p-2 text-zinc-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                      aria-label={`${project.name} GitHub`}
                    >
                      <GitHubIcon size={16} />
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/10 p-2 text-zinc-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                      aria-label={`${project.name} live site`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm text-zinc-400">
                {project.description[locale]}
              </p>

              <ul className="mt-4 flex-1 space-y-2">
                {project.highlights[locale].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
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

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-cyan-500/50 hover:bg-white/10"
                >
                  <ExternalLink size={16} />
                  {linkLabel}
                </a>
              )}
            </article>
          );
        })}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-500/50 hover:bg-white/10"
          >
            {showAll ? (
              <>
                {t.projects.showLess}
                <ChevronUp size={18} />
              </>
            ) : (
              <>
                {t.projects.showMore}
                <ChevronDown size={18} />
              </>
            )}
          </button>
        </div>
      )}
    </Section>
  );
}
