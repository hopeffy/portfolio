import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  detectLocaleFromAcceptLanguage,
  normalizeLocale,
} from "@/lib/i18n";

const LOCALE_COOKIE_KEY = "NEXT_LOCALE";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const cookieLocale = request.cookies.get(LOCALE_COOKIE_KEY)?.value;
  const country = request.headers.get("x-vercel-ip-country");
  const acceptLanguage = request.headers.get("accept-language");

  let locale = normalizeLocale(cookieLocale);

  if (!cookieLocale) {
    // IP-based fallback for hosted environments (e.g. Vercel)
    if (country?.toUpperCase() === "TR") {
      locale = "tr";
    } else {
      locale = detectLocaleFromAcceptLanguage(acceptLanguage);
    }
  }

  if (!SUPPORTED_LOCALES.includes(locale)) {
    locale = DEFAULT_LOCALE;
  }

  response.cookies.set(LOCALE_COOKIE_KEY, locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
