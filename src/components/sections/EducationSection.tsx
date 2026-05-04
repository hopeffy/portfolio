import { about } from "@/resources";
import type { Locale } from "@/lib/i18n";
import { uiCopy } from "@/resources/i18n";

export const EducationSection = ({ locale }: { locale: Locale }) => {
  const institutions = about.studies.institutions;
  const copy = uiCopy[locale];

  return (
    <section className="mt-32 relative" id="education">
      <div className="mb-12 flex items-center gap-4">
        <div className="w-1 h-8 bg-secondary" />
        <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
          {copy.sections.education}
        </h2>
      </div>

      <div className="space-y-6">
        {institutions.map((inst, index) => (
          <div
            key={`${inst.name}-${index}`}
            className="bg-surface-container-low p-6 md:p-8 rounded-DEFAULT relative group overflow-hidden transition-all duration-300 hover:bg-surface-container hover:shadow-[0_0_30px_rgba(196,127,255,0.1)]"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary" />
            <div className="pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-secondary text-lg">
                  school
                </span>
                <h3 className="font-headline text-lg font-semibold text-on-surface">
                  {inst.name}
                </h3>
              </div>
              <p className="font-body text-sm text-on-surface-variant">
                {inst.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};