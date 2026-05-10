import type { Metadata } from "next";
import { about, work } from "@/resources";
import { cookies } from "next/headers";
import { normalizeLocale } from "@/lib/i18n";
import { uiCopy } from "@/resources/i18n";
import { getPosts } from "@/utils/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: work.title,
  description: work.description,
};

export default async function Work() {
  const projects = getPosts(["src", "app", "work", "projects"]);
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get("NEXT_LOCALE")?.value);
  const copy = uiCopy[locale];

  return (
    <section className="max-w-6xl mx-auto pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <header className="mb-16 relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-primary-container shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label text-[10px] tracking-[0.2em] text-primary uppercase mb-2 block">{copy.work.module}</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-on-surface">
              {copy.work.title} <span className="text-primary-dim">[ARCHIVE_v2.4]</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/30 pb-2">
            <span className="text-primary">{copy.work.scanning}</span> <span>{copy.work.optimal}</span>
            <span className="mx-2">|</span>
            <span className="text-primary">{copy.work.index}</span>{" "}
            <span>{String(projects.length).padStart(3, "0")}_ACTIVE_NODES</span>
          </div>
        </div>
      </header>

      {/* Projects (MDX) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const icons = ["memory", "database", "terminal", "history"];
          const labelColors = [
            "bg-primary/20 border-primary/30 text-primary",
            "bg-secondary/20 border-secondary/30 text-secondary",
            "bg-tertiary/20 border-tertiary/30 text-tertiary",
            "bg-on-surface-variant/20 border-outline-variant/30 text-white",
          ];
          const tag = project.metadata.tag?.trim();

          return (
            <article
              key={`${project.slug}-${index}`}
              className="bg-[#0b0b10]/60 backdrop-blur-[20px] border border-[#8ff5ff]/10 group relative overflow-hidden transition-all duration-300 hover:border-[#8ff5ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 95% 100%, 0% 100%)" }}
            >
              <div className="relative h-48 overflow-hidden border-b border-primary/10">
                {project.metadata.images?.[0] ? (
                  <img
                    src={project.metadata.images[0]}
                    alt={project.metadata.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] to-transparent opacity-60" />
                <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-30" />
                {tag ? (
                  <div className="absolute top-4 left-4">
                    <span className={`${labelColors[index % labelColors.length]} text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md`}>
                      {tag}
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-headline text-xl font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                    {locale === "en" && project.metadata.titleEn ? project.metadata.titleEn : project.metadata.title}
                  </h2>
                  <span className="material-symbols-outlined text-primary/40 text-sm">{icons[index % icons.length]}</span>
                </div>

                <p className="text-on-surface-variant text-sm leading-relaxed mb-2 font-body">
                  {locale === "en" && project.metadata.summaryEn ? project.metadata.summaryEn : project.metadata.summary}
                </p>

                <p className="text-on-surface-variant text-xs leading-relaxed mb-6 font-body opacity-70">
                  {project.metadata.publishedAt}
                </p>

                {project.metadata.team && project.metadata.team.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metadata.team.slice(0, 3).map((member, i) => {
                      const short = member.role.length > 20 ? member.role.substring(0, 20) + "..." : member.role;
                      return (
                        <span key={i} className="px-2 py-1 bg-surface-container-highest text-[10px] text-primary-dim border border-primary/10 font-label">
                          {short || `LOG_${String(i + 1).padStart(2, "0")}`}
                        </span>
                      );
                    })}
                  </div>
                )}

                <div className="mt-auto">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-secondary-container to-primary-container p-[1px] transition-all hover:shadow-[0_0_20px_rgba(140,0,229,0.4)] block"
                  >
                    <div className="bg-[#0B0B10] w-full py-3 rounded-[0.7rem] flex items-center justify-center space-x-2 transition-all group-hover/btn:bg-transparent">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface group-hover/btn:text-on-primary-container">{copy.work.viewProject}</span>
                      <span className="material-symbols-outlined text-sm text-primary group-hover/btn:text-on-primary-container">open_in_new</span>
                    </div>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="fixed top-[20%] right-[10%] w-64 h-64 bg-primary-container/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[10%] left-[15%] w-96 h-96 bg-secondary-container/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
