"use client";

import { usePathname } from "next/navigation";
import { person } from "@/resources";
import type { Locale } from "@/lib/i18n";
import { useMemo } from "react";

const localeLabels: Record<Locale, { identity: string; archive: string; email: string; github: string; linkedin: string }> = {
  en: {
    identity: "Identity",
    archive: "Projects",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  tr: {
    identity: "Kimlik",
    archive: "Projeler",
    email: "E-posta",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

export const Header = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const labels = useMemo(() => localeLabels[locale], [locale]);

  const navItems = [
    { label: labels.identity, href: "/", active: pathname === "/" },
    { label: labels.archive, href: "/work", active: pathname.startsWith("/work") },
  ];

  const setLocale = (nextLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
  };

  return (
    <nav className="bg-[#0B0B10]/70 backdrop-blur-xl fixed top-0 left-0 w-full z-50 border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex items-center justify-between px-10 py-5">
      <a href="/" className="block">
        <img src="/logo.webp" alt="Logo" width={128} height={128} className="h-8 w-auto" />
      </a>
      <div className="hidden md:flex gap-8 font-headline tracking-widest uppercase text-xs">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`relative font-medium pb-1 group transition-colors duration-300 ${
              item.active
                ? "text-cyan-400"
                : "text-slate-500 hover:text-cyan-200"
            }`}
          >
            {item.label}
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 transition-transform duration-300 ease-out ${
                item.active
                  ? "scale-x-100"
                  : "origin-left scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          href={`mailto:${person.email}`}
          className="text-cyan-400 hover:text-cyan-200 transition-colors"
          title={labels.email}
        >
          <span className="material-symbols-outlined">fingerprint</span>
        </a>
        <a
          href="https://github.com/hopeffy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-200 transition-colors"
          title={labels.github}
        >
          <span className="material-symbols-outlined">sensors</span>
        </a>
        <a
          href="https://www.linkedin.com/in/eftelya-celik/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-200 transition-colors"
          title={labels.linkedin}
        >
          <span className="material-symbols-outlined">code</span>
        </a>
        <button
          onClick={() => setLocale(locale === "tr" ? "en" : "tr")}
          className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase font-headline hover:bg-cyan-500/20 transition-all"
          aria-label="Toggle language"
        >
          {locale.toUpperCase()}
        </button>
      </div>
    </nav>
  );
};