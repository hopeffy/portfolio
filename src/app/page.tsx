import { HeroSection } from "@/components/sections/HeroSection";
import { ProtocolsSection } from "@/components/sections/ProtocolsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { VolunteeringSection } from "@/components/sections/VolunteeringSection";
import { about } from "@/resources";
import { cookies } from "next/headers";
import { normalizeLocale } from "@/lib/i18n";

export default async function Home() {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get("NEXT_LOCALE")?.value);

  return (
    <>
      <HeroSection locale={locale} />
      {about.technical.display && <ProtocolsSection locale={locale} />}
      {about.work.display && <ExperienceSection locale={locale} />}
      {about.studies.display && <EducationSection locale={locale} />}
      {about.volunteering.display && <VolunteeringSection locale={locale} />}
    </>
  );
}