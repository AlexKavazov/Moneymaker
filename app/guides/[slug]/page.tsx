import { notFound } from "next/navigation";
import { seoPages } from "@/app/data/seo-pages";
export async function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = seoPages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">{page.title}</h1>

      <p className="mt-6 text-lg">
        {page.description}
      </p>

      <h2 className="text-3xl font-bold mt-12">
        Popular Keywords
      </h2>

      <ul className="mt-4 list-disc pl-6">
        {page.keywords.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>
    </main>
  );
}