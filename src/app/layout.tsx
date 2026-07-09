import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayoub Elmssellek | Développeur Full-Stack",
  description:
    "Portfolio de Ayoub Elmssellek - Développeur Logiciel Full-Stack spécialisé en applications web, mobiles et SaaS. Laravel, React, Next.js, Flutter.",
  keywords: [
    "développeur full-stack",
    "Laravel",
    "React",
    "Next.js",
    "Flutter",
    "portfolio",
    "Maroc",
    "Dakhla",
  ],
  authors: [{ name: "Ayoub Elmssellek" }],
  openGraph: {
    title: "Ayoub Elmssellek | Développeur Full-Stack",
    description:
      "Développeur full-stack spécialisé en applications web, mobiles et SaaS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
