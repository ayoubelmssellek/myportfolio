import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-8">
      <div className="container-custom flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {year} {personalInfo.firstName} {personalInfo.lastName}. Tous droits
          réservés.
        </p>
        <p className="text-sm text-zinc-500">
          Développé avec{" "}
          <span className="text-cyan-400">Next.js</span> &{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
