import Link from "next/link";

const articles = [
  {
    title: "AI Business Generator",
    href: "/ai-business-generator",
  },
  {
    title: "Business Idea Generator",
    href: "/business-idea-generator",
  },
  {
    title: "Money Making Ideas",
    href: "/money-making-ideas",
  },
  {
    title: "Online Business Ideas",
    href: "/online-business-ideas",
  },
  {
    title: "Passive Income Ideas",
    href: "/passive-income-ideas",
  },
  {
    title: "Startup Ideas",
    href: "/startup-ideas",
  },
  {
    title: "Business Ideas for Students",
    href: "/business-ideas-for-students",
  },
  {
    title: "Business Ideas for Engineers",
    href: "/business-ideas-for-engineers",
  },
];

export default function Articles() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-8">
        Business Resources
      </h1>

      <p className="text-xl mb-12">
        Learn how to discover business opportunities, generate startup ideas,
        build profitable companies and create new income streams.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {articles.map((article) => (

          <Link
            key={article.href}
            href={article.href}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >

            <h2 className="text-2xl font-semibold">
              {article.title}
            </h2>

            <p className="mt-3">
              Read the complete guide →
            </p>

          </Link>

        ))}

      </div>

    </main>
  );
}