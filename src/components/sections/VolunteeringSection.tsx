import { about } from "@/resources";
import type { Locale } from "@/lib/i18n";
import { uiCopy } from "@/resources/i18n";

export const VolunteeringSection = ({ locale }: { locale: Locale }) => {
  const experiences = about.volunteering.experiences;
  const copy = uiCopy[locale];

  return (
    <section className="mt-32 relative" id="volunteering">
      <div className="mb-12 flex items-center gap-4">
        <div className="w-1 h-8 bg-tertiary" />
        <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
          {copy.sections.volunteering}
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={`${exp.organization}-${index}`}
            className="bg-surface-container-low p-6 md:p-8 rounded-DEFAULT relative group overflow-hidden transition-all duration-300 hover:bg-surface-container hover:shadow-[0_0_30px_rgba(255,107,152,0.1)]"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-tertiary" />

            <div className="pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-lg">
                    volunteer_activism
                  </span>
                  <h3 className="font-headline text-lg font-semibold text-on-surface">
                    {exp.organization}
                  </h3>
                </div>
                {exp.timeframe && (
                  <span className="data-label">{exp.timeframe}</span>
                )}
              </div>

              <p className="font-body text-sm text-on-surface-variant mb-2">
                {exp.role}
              </p>

              <div className="font-body text-sm text-on-surface-variant leading-relaxed">
                {exp.description}
              </div>

              {exp.links && exp.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {exp.links.map((link, i) => (
                    <a
                      key={`${exp.organization}-link-${i}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-outline-variant/30 text-on-surface font-headline font-semibold text-xs tracking-wide hover:bg-surface-container-highest transition-colors"
                    >
                      <span className="material-symbols-outlined text-xs mr-1">
                        open_in_new
                      </span>
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};