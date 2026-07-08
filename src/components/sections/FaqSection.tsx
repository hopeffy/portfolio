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
        q: "Who is Eftelya Çelik?",
        a: "Eftelya Çelik is a Computer Engineer and Computer Engineering student at Akdeniz University. She builds AI systems — chatbots, LLM-based Retrieval-Augmented Generation (RAG) workflows, and machine learning models — alongside full-stack web applications.",
      },
      {
        q: "What does Eftelya Çelik do?",
        a: "She designs and builds AI-powered products: conversational assistants and chatbots, RAG pipelines that answer questions over documents, and data science / machine learning models — backed by full-stack development with .NET, Python (FastAPI) and Next.js.",
      },
      {
        q: "What AI and LLM projects has she built?",
        a: "She built the Akdeniz Smart Assistant — an AI chatbot that answers questions over institutional documents for Akdeniz University — and an n8n-based RAG workflow over TÜBİTAK support-program documents, built to explore retrieval-augmented generation end to end.",
      },
      {
        q: "What is her machine learning and data science experience?",
        a: "She built a retail sales forecasting model on the Rossmann dataset using XGBoost, with feature engineering, hyperparameter tuning and an interactive Streamlit dashboard. She is also President of the Akdeniz University Data Science Club.",
      },
      {
        q: "Which technologies does she work with?",
        a: "Backend: ASP.NET Core (.NET), FastAPI (Python), PostgreSQL, Docker. Frontend: Next.js, React, TypeScript, Tailwind CSS. AI & data: LLMs and RAG, self-hosted open models (Qwen), Google Gemini, LangChain, vector search with pgvector and Qdrant, XGBoost, Pandas and scikit-learn.",
      },
      {
        q: "What work experience does she have?",
        a: "She has interned as a Software Engineer at CSArt (building an AI document-processing platform and a Scopus-based academic data-analysis system), at Ergineer (Flutter mobile apps), and at Sednacloud (full-stack ASP.NET and Angular applications).",
      },
      {
        q: "Has she led any teams or communities?",
        a: "Yes — she is President of the Akdeniz University Data Science Club, and she served on the organizing committee of Akdeniz Career Summit 2025, where she also built the official website (nearly 500 registrations).",
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
        q: "Eftelya Çelik kimdir?",
        a: "Eftelya Çelik, Akdeniz Üniversitesi'nde okuyan bir Bilgisayar Mühendisi ve Bilgisayar Mühendisliği öğrencisidir. Yapay zeka sistemleri — chatbotlar, LLM tabanlı Retrieval-Augmented Generation (RAG) iş akışları ve makine öğrenimi modelleri — ile birlikte full-stack web uygulamaları geliştirir.",
      },
      {
        q: "Eftelya Çelik ne yapar?",
        a: "Yapay zeka destekli ürünler tasarlar ve geliştirir: konuşma asistanları ve chatbotlar, belgeler üzerinden soruları yanıtlayan RAG hatları ve veri bilimi / makine öğrenimi modelleri — .NET, Python (FastAPI) ve Next.js ile full-stack geliştirme temelinde.",
      },
      {
        q: "Hangi yapay zeka ve LLM projelerini geliştirdi?",
        a: "Akdeniz Üniversitesi için kurumsal belgeler üzerinden soruları yanıtlayan Akdeniz Akıllı Asistan chatbotunu geliştirdi; ayrıca RAG'i uçtan uca öğrenmek için TÜBİTAK destek programı belgeleri üzerinde n8n ile bir RAG iş akışı kurdu.",
      },
      {
        q: "Makine öğrenimi ve veri bilimi deneyimi nedir?",
        a: "Rossmann veri seti üzerinde XGBoost kullanarak, özellik mühendisliği, hiperparametre ayarlama ve interaktif bir Streamlit panosu ile perakende satış tahmin modeli geliştirdi. Ayrıca Akdeniz Üniversitesi Veri Bilimi Kulübü Başkanıdır.",
      },
      {
        q: "Hangi teknolojilerle çalışır?",
        a: "Backend: ASP.NET Core (.NET), FastAPI (Python), PostgreSQL, Docker. Frontend: Next.js, React, TypeScript, Tailwind CSS. Yapay zeka ve veri: LLM ve RAG, self-hosted açık modeller (Qwen), Google Gemini, LangChain, pgvector ve Qdrant ile vektör arama, XGBoost, Pandas ve scikit-learn.",
      },
      {
        q: "Ne tür iş deneyimi var?",
        a: "CSArt'ta (yapay zeka destekli belge işleme platformu ve Scopus tabanlı akademik veri analiz sistemi), Ergineer'de (Flutter mobil uygulamalar) ve Sednacloud'da (full-stack ASP.NET ve Angular uygulamaları) Yazılım Mühendisi stajyeri olarak çalıştı.",
      },
      {
        q: "Ekip veya topluluk liderliği yaptı mı?",
        a: "Evet — Akdeniz Üniversitesi Veri Bilimi Kulübü Başkanıdır ve resmi web sitesini de geliştirdiği Akdeniz Kariyer Zirvesi 2025'in organizasyon komitesinde yer aldı (yaklaşık 500 kayıt).",
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
