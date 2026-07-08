import { baseURL, person, social } from "@/resources";

/**
 * Site-wide JSON-LD (schema.org) so AI search engines and chatbots
 * (ChatGPT Search, Perplexity, Gemini, Claude, Google AI Overviews)
 * can recognize Eftelya as an entity and cite her for topics in `knowsAbout`.
 */
export function StructuredData() {
  const graph = [
    {
      "@type": "Person",
      "@id": `${baseURL}/#person`,
      name: person.name,
      alternateName: `${person.firstName} ${person.lastName}`,
      url: baseURL,
      image: `${baseURL}${person.avatar}`,
      jobTitle: person.role,
      email: `mailto:${person.email}`,
      knowsAbout: [
        "Agentic AI",
        "AI Agents",
        "Chatbots",
        "Conversational AI",
        "Retrieval-Augmented Generation (RAG)",
        "Large Language Models (LLM)",
        "Machine Learning",
        "Data Science",
        "Full-Stack Web Development",
      ],
      knowsLanguage: person.languages,
      sameAs: social
        .filter((s) => s.link.startsWith("http"))
        .map((s) => s.link),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressCountry: "TR",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseURL}/#website`,
      url: baseURL,
      name: `${person.name} — Portfolio`,
      author: { "@id": `${baseURL}/#person` },
      inLanguage: ["en", "tr"],
    },
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here (no user input); escaped for `</script>`.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json).replace(/</g, "\\u003c"),
      }}
    />
  );
}
