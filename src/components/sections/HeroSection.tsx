import { about, person, social } from "@/resources";
import type { Locale } from "@/lib/i18n";
import { uiCopy } from "@/resources/i18n";

export const HeroSection = ({ locale }: { locale: Locale }) => {
  const copy = uiCopy[locale];

  return (
    <section className="min-h-[70vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 relative mt-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-dim/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Text - Left Side */}
      <div className="w-full lg:w-auto lg:max-w-xl text-center lg:text-left space-y-6 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label text-[10px] tracking-[0.05em] text-on-surface-variant uppercase">{copy.hero.badge}</span>
        </div>

        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-tight text-on-surface">
          {copy.hero.line1}
          <br />
          <span className="text-primary">{copy.hero.line2}</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto lg:mx-0">
          {copy.hero.role} &middot; AI
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-mixed-gradient text-[#0B0B10] font-headline font-semibold text-sm tracking-wide hover:translate-x-[2px] transition-transform shadow-[0_0_40px_rgba(0,222,236,0.1)]"
          >
            {copy.hero.ctaWork}
          </a>
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-outline-variant/30 text-on-surface font-headline font-semibold text-sm tracking-wide hover:bg-surface-container-highest transition-colors"
          >
            {copy.hero.ctaContact}
          </a>
        </div>

        <div className="flex gap-3 justify-center lg:justify-start">
          {social.map((item) =>
            item.link ? (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,238,252,0.15)] transition-all duration-300"
                aria-label={item.name}
              >
                <span className="material-symbols-outlined text-on-surface-variant text-sm">
                  {item.name === "GitHub" ? "code" : item.name === "LinkedIn" ? "work" : "mail"}
                </span>
              </a>
            ) : null
          )}
        </div>
      </div>

      {/* Portrait - Right Side */}
      <div className="w-full lg:w-auto flex justify-center lg:justify-start z-10">
        <div className="relative w-full max-w-xs">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />

          <div className="relative w-full aspect-[4/5] rounded bg-surface-container-low overflow-hidden shadow-[inset_0_0_20px_rgba(0,238,252,0.1)] group">
            <img
              alt={`${person.name} portrait`}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
              src={person.avatar}
            />
            <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-50" />
            <div className="absolute left-0 w-full h-[2px] bg-primary/80 shadow-[0_0_15px_#8ff5ff] animate-scan-line pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};