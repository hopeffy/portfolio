import { about } from "@/resources";

export const SkillsSection = () => {
  const skills = about.technical.skills;

  return (
    <section className="mt-32 relative" id="skills">
      <div className="mb-12 flex items-center gap-4">
        <div className="w-1 h-8 bg-tertiary" />
        <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
          {about.technical.title}
        </h2>
      </div>

      <div className="space-y-8">
        {skills.map((skill, index) => {
          const accentColors = [
            "primary",
            "secondary",
            "tertiary-fixed",
            "primary-dim",
          ];
          const accent = accentColors[index % accentColors.length];

          return (
            <div
              key={skill.title}
              className="bg-surface-container-low p-6 md:p-8 rounded-DEFAULT relative group overflow-hidden transition-all duration-300 hover:bg-surface-container hover:shadow-[0_0_30px_rgba(0,238,252,0.1)]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-dim" />

              <div className="pl-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/20">
                    <span className={`material-symbols-outlined text-${accent}`}>
                      {["dns", "web", "smart_toy", "build"][index] || "memory"}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-on-surface">
                    {skill.title}
                  </h3>
                </div>

                <p className="font-body text-sm text-on-surface-variant mb-4">
                  {typeof skill.description === "string" ? skill.description : ""}
                </p>

                {skill.tags && skill.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className="px-3 py-1.5 text-xs tracking-[0.03em] rounded bg-surface-container-high text-on-surface-variant border border-outline-variant/20 hover:border-primary/40 transition-all duration-200"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};