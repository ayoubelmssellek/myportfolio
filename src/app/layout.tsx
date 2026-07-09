import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayoub Elmssellek | Full-Stack Developer",
  description:
    "Portfolio of Ayoub Elmssellek - Full-Stack Software Developer specialized in web, mobile and SaaS applications. Laravel, React, Next.js, Flutter.",
  keywords: [
    "full-stack developer",
    "Laravel",
    "React",
    "Next.js",
    "Flutter",
    "portfolio",
    "Morocco",
    "Dakhla",
  ],
  authors: [{ name: "Ayoub Elmssellek" }],
  openGraph: {
    title: "Ayoub Elmssellek | Full-Stack Developer",
    description:
      "Full-stack developer specialized in web, mobile and SaaS applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
