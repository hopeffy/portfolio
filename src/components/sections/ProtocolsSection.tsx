import { about } from "@/resources";
import type { Locale } from "@/lib/i18n";
import { uiCopy } from "@/resources/i18n";

export const ProtocolsSection = ({ locale }: { locale: Locale }) => {
  const skills = about.technical.skills;
  const protocolIcons = ["dns", "web", "smart_toy", "build"];
  const glowStyles = [
    "hover:shadow-[0_0_30px_rgba(0,238,252,0.15)]",
    "hover:shadow-[0_0_30px_rgba(196,127,255,0.15)]",
    "hover:shadow-[0_0_30px_rgba(255,142,172,0.15)]",
    "hover:shadow-[0_0_30px_rgba(255,200,120,0.15)]",
  ];
  const iconColors = ["text-primary", "text-secondary", "text-tertiary-fixed", "text-primary-dim"];
  const offsetStyles = ["", "md:translate-y-8", "", "md:translate-y-8"];

  const copy = uiCopy[locale];

  return (
    <section className="mt-32 relative" id="protocols">
      <div className="mb-12 flex items-center gap-4">
        <div className="w-1 h-8 bg-primary-dim" />
        <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">{copy.sections.protocols}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.title}
            className={`bg-surface-container-low p-8 rounded-DEFAULT relative group overflow-hidden transition-all duration-300 hover:bg-surface-container hover:scale-[1.02] ${glowStyles[index % glowStyles.length]} ${offsetStyles[index % offsetStyles.length]}`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className={`material-symbols-outlined text-6xl ${iconColors[index % iconColors.length]}`}>memory</span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 border border-outline-variant/20 shadow-[inset_0_0_10px_rgba(0,238,252,0.05)]">
              <span className={`material-symbols-outlined ${iconColors[index % iconColors.length]}`}>
                {protocolIcons[index % protocolIcons.length]}
              </span>
            </div>
            <h3 className="font-headline text-xl font-semibold mb-3 text-on-surface">{skill.title}</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              {typeof skill.description === "string" ? skill.description : ""}
            </p>
            {skill.tags && skill.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {skill.tags.map((tag) => (
                  <span key={tag.name} className="px-2 py-1 text-[10px] tracking-[0.05em] uppercase bg-surface-container-high text-on-surface-variant rounded border border-outline-variant/20">
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};