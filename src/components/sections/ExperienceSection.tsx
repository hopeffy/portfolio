import { about } from "@/resources";
import type { Locale } from "@/lib/i18n";
import { uiCopy } from "@/resources/i18n";

export const ExperienceSection = ({ locale }: { locale: Locale }) => {
  const experiences = about.work.experiences;
  const copy = uiCopy[locale];

  return (
    <section className="mt-32 relative" id="experience">
      <div className="mb-12 flex items-center gap-4">
        <div className="w-1 h-8 bg-primary-dim" />
        <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
          {copy.sections.experience}
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className="bg-surface-container-low p-6 md:p-8 rounded-DEFAULT relative group overflow-hidden transition-all duration-300 hover:bg-surface-container hover:shadow-[0_0_30px_rgba(0,238,252,0.1)]"
          >
            {/* Accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-dim" />

            <div className="pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">
                    business
                  </span>
                  {exp.companyLink ? (
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-headline text-lg font-semibold text-on-surface hover:text-primary transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="font-headline text-lg font-semibold text-on-surface">
                      {exp.company}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="data-label">{exp.timeframe}</span>
                </div>
              </div>

              <p className="font-body text-sm text-secondary mb-4">
                {exp.role}
              </p>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, aIndex) => (
                  <li
                    key={aIndex}
                    className="flex items-start gap-3 font-body text-sm text-on-surface-variant"
                  >
                    <span className="text-primary-dim mt-1 shrink-0">
                      <span className="material-symbols-outlined text-xs">
                        chevron_right
                      </span>
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};