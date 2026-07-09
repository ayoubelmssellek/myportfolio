import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Bonjour, je suis
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {personalInfo.firstName}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {personalInfo.lastName}
              </span>
            </h1>
            <p className="mt-4 text-xl font-medium text-zinc-300 sm:text-2xl">
              {personalInfo.title}
            </p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
              Je conçois et développe des applications web, mobiles et SaaS
              performantes — de l&apos;idée au déploiement en production.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Me contacter
              </a>
              <a
                href={personalInfo.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-500/50 hover:bg-white/10"
              >
                <Download size={18} />
                Télécharger CV
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-3 text-zinc-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-3 text-zinc-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-lg border border-white/10 p-3 text-zinc-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
                <div className="aspect-[4/5] w-72 sm:w-80 lg:w-96">
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-6">
                  <p className="font-semibold text-white">Software Developer</p>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 rounded-2xl border border-cyan-500/30 bg-zinc-900 px-4 py-3 shadow-xl">
                <p className="text-2xl font-bold text-cyan-400">3+</p>
                <p className="text-xs text-zinc-400">ans d&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="#profil"
            className="flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-cyan-400"
          >
            <span className="text-xs uppercase tracking-widest">Découvrir</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
