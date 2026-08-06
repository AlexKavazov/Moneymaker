import Link from "next/link";

type Props = {
  title: string;
  description: string;
  introduction: string;
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export default function SeoPage({
  title,
  description,
  introduction,
  benefits,
  faqs,
}: Props) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-6">
        {title}
      </h1>

      <p className="text-xl mb-8">
        {description}
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Introduction
      </h2>

      <p className="mb-8">
        {introduction}
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Benefits
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        {benefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-xl font-semibold">
              {faq.question}
            </h3>

            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-block"
        >
          Try MoneyMaker
        </Link>
      </div>

    </main>
  );
}