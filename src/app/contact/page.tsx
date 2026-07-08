import type { Metadata } from "next";
import { person } from "@/resources";
import { cookies } from "next/headers";
import { normalizeLocale } from "@/lib/i18n";
import { uiCopy } from "@/resources/i18n";

export const metadata: Metadata = {
  title: `Contact — ${person.name}`,
  description: `Establish a connection with ${person.name}`,
};

export default async function Contact() {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get("NEXT_LOCALE")?.value);
  const copy = uiCopy[locale];

  return (
    <section className="max-w-6xl mx-auto pt-32 pb-20 px-6">
      {/* Header */}
      <header className="mb-16 relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-primary-dim" />
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-4">
          {copy.contact.title}
        </h1>
        <p className="font-label text-xs tracking-[0.3em] text-primary uppercase flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
          {copy.contact.protocol}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="bg-[#2c2b33]/40 backdrop-blur-[20px] border border-[#8ff5ff]/10 p-8 rounded relative overflow-hidden transition-all duration-300 hover:border-[#8ff5ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40" />

            <form action="#" className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="block font-label text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-2">{copy.contact.operatorName}</label>
                  <input
                    className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all duration-500 font-headline text-lg text-primary placeholder:text-slate-700 pb-2 outline-none"
                    placeholder="GHOST_USER_74"
                    type="text"
                  />
                </div>
                <div className="relative group">
                  <label className="block font-label text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-2">{copy.contact.returnSignal}</label>
                  <input
                    className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all duration-500 font-headline text-lg text-primary placeholder:text-slate-700 pb-2 outline-none"
                    placeholder="ENCRYPTED@SIGNAL.COM"
                    type="email"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block font-label text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-2">{copy.contact.missionBrief}</label>
                <textarea
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all duration-500 font-headline text-lg text-primary placeholder:text-slate-700 pb-2 resize-none outline-none"
                  placeholder="DESCRIBE_THE_OBJECTIVE..."
                  rows={4}
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="relative group px-12 py-4 bg-gradient-to-r from-primary-container to-secondary-container rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,238,252,0.3)] hover:shadow-[0_0_40px_rgba(0,238,252,0.5)] transition-all duration-500 active:scale-95"
                >
                  <span className="relative z-10 font-headline font-black tracking-widest text-on-primary-container uppercase text-sm">
                    {copy.contact.establishLink}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar Status Module */}
        <div className="lg:col-span-4 space-y-6">
          {/* Status Card */}
          <div className="bg-surface-container-high p-6 rounded border-l-2 border-primary">
            <div className="flex items-center justify-between mb-8">
              <span className="font-label text-[10px] tracking-widest text-slate-500 uppercase">{copy.contact.systemStatus}</span>
              <span className="material-symbols-outlined text-primary text-sm">sensors</span>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs font-label uppercase tracking-wider">{copy.contact.encryption}</span>
                <span className="text-primary text-xs font-bold tracking-widest font-headline px-2 py-1 bg-primary/10 rounded">{copy.contact.active}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs font-label uppercase tracking-wider">{copy.contact.signal}</span>
                <span className="text-primary text-xs font-bold tracking-widest font-headline px-2 py-1 bg-primary/10 rounded">{copy.contact.optimal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs font-label uppercase tracking-wider">{copy.contact.bitrate}</span>
                <span className="text-secondary text-xs font-bold tracking-widest font-headline">2.4 GB/S</span>
              </div>
            </div>

            {/* Micro Visualization */}
            <div className="mt-8 flex gap-1 h-8 items-end">
              <div className="bg-primary-container w-full h-[60%] opacity-40" />
              <div className="bg-primary-container w-full h-[80%] opacity-60" />
              <div className="bg-primary-container w-full h-[40%] opacity-30" />
              <div className="bg-primary-container w-full h-[95%] opacity-80" />
              <div className="bg-primary-container w-full h-[70%] opacity-50" />
              <div className="bg-primary-container w-full h-[85%] opacity-70" />
            </div>
          </div>

          {/* Biometric Card */}
          <div className="bg-surface-container p-6 rounded border-l-2 border-secondary overflow-hidden relative">
            <div className="absolute top-2 right-2 opacity-20">
              <span className="material-symbols-outlined text-secondary text-4xl">fingerprint</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary" />
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container-lowest">
                  <img
                    alt={`${person.name} portrait`}
                    className="w-full h-full object-cover grayscale contrast-125"
                    src={person.avatar}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-label text-slate-500 uppercase tracking-widest">{copy.contact.operatorIdentity}</p>
                <p className="font-headline font-bold text-sm text-on-surface">{person.name.toUpperCase().replace(/\s+/g, "_")}</p>
              </div>
            </div>
            <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
              <div className="bg-secondary w-2/3 h-full" />
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-surface-container-low p-6 rounded relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-xs">location_on</span>
                <span className="font-label text-[10px] tracking-widest text-slate-500 uppercase">{copy.contact.nodeLocation}</span>
              </div>
              <p className="font-headline text-lg font-medium text-primary">
                {person.location.replace("/", " // ").toUpperCase().replace("_", " ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}