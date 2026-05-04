import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { baseURL, about, person } from "@/resources";
import { cookies } from "next/headers";
import { normalizeLocale } from "@/lib/i18n";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
  openGraph: {
    title: about.title,
    description: about.description,
    url: baseURL,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get("NEXT_LOCALE")?.value);

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${inter.variable} dark`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-background text-on-surface font-body min-h-screen flex flex-col relative overflow-x-hidden antialiased">
        <div className="noise-overlay" />
        <div className="fixed inset-0 bg-scanlines pointer-events-none z-[-1]" />

        {/* Floating Particles Background */}
        <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden">
          <div
            className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#8ff5ff] animate-float-particle"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-[65%] left-[85%] w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_#c47fff] animate-float-particle"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-[80%] left-[25%] w-2.5 h-2.5 rounded-full bg-tertiary-fixed shadow-[0_0_10px_#ff8eac] animate-float-particle"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute top-[35%] left-[75%] w-1 h-1 rounded-full bg-primary-dim shadow-[0_0_8px_#00deec] animate-float-particle"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-[50%] left-[5%] w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#8ff5ff] animate-float-particle"
            style={{ animationDelay: "3.5s" }}
          />
        </div>

        <Header locale={locale} />
        <main className="flex-grow pt-24 pb-12 px-6 md:px-12 lg:px-24">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}