import { person } from "@/resources";

/**
 * Visible FAQ + FAQPage JSON-LD. LLMs and AI search engines heavily cite
 * clear question/answer content, so the visible text and the schema match.
 */
const faq: Record<
  string,
  { heading: string; subheading: string; items: { q: string; a: string }[] }
> = {
  en: {
    heading: "FAQ",
    subheading: "About Eftelya & her work",
    items: [
      {
        q: "What does Eftelya Çelik do?",
        a: "Eftelya Çelik is a Computer Engineer who builds AI systems — chatbots and conversational assistants, LLM-based Retrieval-Augmented Generation (RAG) workflows, and machine learning / data science models — alongside full-stack web development.",
      },
      {
        q: "What is her experience with chatbots and AI assistants?",
        a: "She built an AI-powered smart assistant and chatbot for Akdeniz University that answers questions over institutional documents, and an LLM-based RAG workflow for TÜBİTAK research use cases.",
      },
      {
        q: "Which technologies does she work with?",
        a: "Large language models (LLM), Retrieval-Augmented Generation (RAG), Python, XGBoost and machine learning, data science, plus full-stack and WordPress web development.",
      },
      {
        q: "How can I get in touch with Eftelya?",
        a: `Through the contact page, by email at ${person.email}, on GitHub (hopeffy), or on LinkedIn.`,
      },
    ],
  },
  tr: {
    heading: "SSS",
    subheading: "Eftelya ve çalışmaları hakkında",
    items: [
      {
        q: "Eftelya Çelik ne yapar?",
        a: "Eftelya Çelik, yapay zeka sistemleri geliştiren bir Bilgisayar Mühendisi — chatbot ve konuşma asistanları, LLM tabanlı Retrieval-Augmented Generation (RAG) iş akışları, makine öğrenimi / veri bilimi modelleri ve full-stack web geliştirme.",
      },
      {
        q: "Chatbot ve yapay zeka asistanı deneyimi nedir?",
        a: "Akdeniz Üniversitesi için kurumsal belgeler üzerinden soruları yanıtlayan yapay zeka destekli bir akıllı asistan/chatbot ve TÜBİTAK araştırma senaryoları için LLM tabanlı bir RAG iş akışı geliştirdi.",
      },
      {
        q: "Hangi teknolojilerle çalışır?",
        a: "Büyük dil modelleri (LLM), Retrieval-Augmented Generation (RAG), Python, XGBoost ve makine öğrenimi, veri bilimi, ayrıca full-stack ve WordPress web geliştirme.",
      },
      {
        q: "Eftelya ile nasıl iletişime geçebilirim?",
        a: `İletişim sayfasından, ${person.email} e-postasından, GitHub (hopeffy) veya LinkedIn üzerinden.`,
      },
    ],
  },
};

export function FaqSection({ locale }: { locale: string }) {
  const copy = faq[locale] ?? faq.en;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mb-10">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
          {copy.heading}
        </h2>
        <p className="font-label text-xs tracking-[0.3em] text-primary uppercase mt-2 flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
          {copy.subheading}
        </p>
      </div>

      <div className="space-y-4">
        {copy.items.map((it, i) => (
          <details
            key={it.q}
            open={i === 0}
            className="group bg-surface-container-low/40 border border-primary/10 rounded p-5 open:border-primary/40 transition-colors"
          >
            <summary className="cursor-pointer list-none marker:content-none font-headline text-lg text-on-surface flex justify-between items-center gap-4">
              {it.q}
              <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-45">
                add
              </span>
            </summary>
            <p className="mt-3 font-body text-on-surface-variant leading-relaxed">
              {it.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
