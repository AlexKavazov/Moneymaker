import Link from "next/link";

const pages = [
  {
    title: "AI Business Generator",
    href: "/ai-business-generator",
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
];

export default function RelatedPages() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-6">
        Explore More Business Resources
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="border rounded-lg p-5 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">
              {page.title}
            </h3>

            <p className="mt-2 text-gray-600">
              Read more →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}