import { Mail, Phone, MapPin, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import Section from "./Section";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: personalInfo.location,
    },
  ];

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Discutons de votre prochain projet"
      className="bg-zinc-900/50"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl border border-white/5 bg-zinc-950/50 p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <item.icon size={22} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-medium text-white transition-colors hover:text-cyan-400"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-white">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-4 pt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/5 bg-zinc-950/50 py-4 text-sm font-medium text-zinc-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-400"
            >
              <GitHubIcon size={18} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/5 bg-zinc-950/50 py-4 text-sm font-medium text-zinc-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-400"
            >
              <LinkedInIcon size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
          <h3 className="text-2xl font-bold text-white">
            Travaillons ensemble
          </h3>
          <p className="mt-4 leading-relaxed text-zinc-300">
            Vous avez un projet web, mobile ou SaaS ? Je serais ravi d&apos;en
            discuter et de contribuer à sa réalisation.
          </p>
          <a
            href={`mailto:${personalInfo.email}?subject=Prise de contact - Portfolio`}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-cyan-400"
          >
            <Mail size={18} />
            Envoyer un message
          </a>
          <a
            href={personalInfo.cvPath}
            download
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5"
          >
            <Download size={18} />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </Section>
  );
}
