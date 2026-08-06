import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Business Idea Generator | MoneyMaker",
  description:
    "Generate personalized business ideas using AI. Find profitable startups, side hustles, online businesses and low-investment opportunities based on your skills, budget and interests.",
};

export default function BusinessIdeaGeneratorPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-6">
        AI Business Idea Generator
      </h1>

      <p className="text-xl mb-8">
        Welcome to <strong>MoneyMaker</strong>, your AI-powered business idea
        generator. Our platform helps entrepreneurs discover profitable
        businesses based on their experience, skills, education, location,
        interests and available budget.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Why use MoneyMaker?
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Personalized business recommendations</li>
        <li>Ideas based on your skills and education</li>
        <li>Low-investment startup ideas</li>
        <li>Online business opportunities</li>
        <li>Side hustle ideas</li>
        <li>Passive income opportunities</li>
        <li>Step-by-step launch guidance</li>
      </ul>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        What is an AI Business Idea Generator?
      </h2>

      <p className="mb-6">
        An AI Business Idea Generator analyzes information such as your
        interests, experience, available capital and goals to recommend
        businesses that match your profile. Instead of browsing thousands of
        generic ideas, you receive suggestions tailored to you.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Popular Business Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        <div className="border rounded-lg p-4">AI Businesses</div>
        <div className="border rounded-lg p-4">Online Businesses</div>
        <div className="border rounded-lg p-4">Passive Income</div>
        <div className="border rounded-lg p-4">Small Businesses</div>
        <div className="border rounded-lg p-4">Home Businesses</div>
        <div className="border rounded-lg p-4">Side Hustles</div>
        <div className="border rounded-lg p-4">Engineering Businesses</div>
        <div className="border rounded-lg p-4">Medical Businesses</div>
        <div className="border rounded-lg p-4">Manufacturing Businesses</div>

      </div>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">

        <div>
          <h3 className="text-xl font-semibold">
            Is MoneyMaker free?
          </h3>

          <p>
            Yes. Our goal is to help entrepreneurs discover business
            opportunities quickly and easily.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Can beginners use MoneyMaker?
          </h3>

          <p>
            Absolutely. Whether you are a student, engineer, freelancer or
            experienced entrepreneur, MoneyMaker helps you discover suitable
            businesses.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            What businesses can it recommend?
          </h3>

          <p>
            Online businesses, service companies, manufacturing businesses,
            consulting, AI startups, ecommerce, digital products and many
            more.
          </p>
        </div>

      </div>

      <div className="mt-16 text-center">

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
        >
          Generate Your Business Idea
        </Link>

      </div>

    </main>
  );
}