import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { normalizeLocale } from "@/lib/i18n";
import { uiCopy } from "@/resources/i18n";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get("NEXT_LOCALE")?.value);
  const copy = uiCopy[locale];
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === slugPath
  );

  if (!post) {
    notFound();
  }

  return (
    <section className="max-w-3xl mx-auto pt-24 pb-12 px-6">
      <div className="flex flex-col items-center gap-4 mb-12">
        <Link
          href="/work"
          className="data-label text-primary hover:text-primary-dim transition-colors"
        >
          &larr; {copy.work.backProjects}
        </Link>
        {post.metadata.publishedAt && (
          <span className="data-label">
            {formatDate(post.metadata.publishedAt)}
          </span>
        )}
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface text-center">
          {post.metadata.title}
        </h1>
      </div>
      {post.metadata.images?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {post.metadata.images.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`${post.metadata.title} visual ${index + 1}`}
              className="w-full h-auto rounded-lg border border-outline-variant/30"
            />
          ))}
        </div>
      )}
      <article className="prose prose-invert max-w-none font-body text-on-surface-variant">
        <p>{post.metadata.summary}</p>
      </article>
    </section>
  );
}