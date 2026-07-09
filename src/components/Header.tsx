"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
      <div className="container-custom flex h-16 items-center justify-between">
        <a
          href="#accueil"
          className="text-lg font-bold tracking-tight text-white"
        >
          {personalInfo.firstName}
          <span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={personalInfo.cvPath}
          download
          className="hidden rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400 md:inline-block"
        >
          Télécharger CV
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white md:hidden"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/5 bg-zinc-950/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.cvPath}
              download
              className="mt-2 rounded-lg bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-zinc-950"
            >
              Télécharger CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
