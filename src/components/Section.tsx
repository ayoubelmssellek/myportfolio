import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="section-title">{title}</h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-lg text-zinc-400">{subtitle}</p>
          )}
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>
        {children}
      </div>
    </section>
  );
}
