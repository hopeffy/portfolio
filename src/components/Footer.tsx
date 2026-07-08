import { person, social } from "@/resources";
import type { Locale } from "@/lib/i18n";
import { uiCopy } from "@/resources/i18n";

export const Footer = ({ locale }: { locale: Locale }) => {
  const currentYear = new Date().getFullYear();
  const copy = uiCopy[locale];

  return (
    <footer className="w-full py-12 mt-auto bg-gradient-to-t from-[#0B0B10] to-transparent border-t border-white/5 flex flex-col md:flex-row items-center justify-between px-10 bg-[#0B0B10]">
      <a href="/" className="block">
        <img src="/logo.webp" alt="Logo" width={128} height={128} className="h-6 w-auto" />
      </a>
      <div className="font-body text-[10px] tracking-[0.2em] uppercase text-slate-500 my-4 md:my-0">
        &copy; {currentYear} {person.name.toUpperCase().replace(/\s+/g, "_")}.
        {copy.footer.encrypted}
      </div>
      <div className="flex gap-6 font-body text-[10px] tracking-[0.2em] uppercase">
        {social.map((item) =>
          item.link ? (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </a>
          ) : null
        )}
      </div>
    </footer>
  );
};