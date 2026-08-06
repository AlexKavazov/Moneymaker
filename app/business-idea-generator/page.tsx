import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Business Idea Generator | Find the Perfect Business | MoneyMaker",
  description:
    "Generate personalized business ideas using AI. Discover profitable startups, side hustles, online businesses and low-investment opportunities based on your skills, education, budget and interests.",
};

export default function BusinessIdeaGenerator() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-6">
        AI Business Idea Generator
      </h1>

      <p className="text-xl mb-10">
        Finding the right business can be overwhelming. Thousands of websites
        publish generic lists of business ideas, but very few help you discover
        businesses that actually match your experience, education, budget and
        interests.
      </p>

      <p className="mb-8">
        MoneyMaker uses intelligent matching to recommend businesses that fit
        your unique profile. Instead of reading endless articles, you receive
        personalized suggestions designed around your own strengths and goals.
      </p>

      <hr className="my-12"/>

      <h2 className="text-3xl font-bold mb-4">
        Why Use an AI Business Idea Generator?
      </h2>

      <p className="mb-6">
        Every entrepreneur starts from a different place. Some have engineering
        experience, others have marketing knowledge or industry expertise.
        MoneyMaker helps identify opportunities that align with what you already
        know, reducing the learning curve and increasing your chances of success.
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>Personalized recommendations</li>
        <li>Ideas matched to your education</li>
        <li>Businesses based on your experience</li>
        <li>Low-budget startup ideas</li>
        <li>Online businesses</li>
        <li>Passive income opportunities</li>
        <li>Side hustles</li>
        <li>Technology startups</li>
      </ul>

      <hr className="my-12"/>

      <h2 className="text-3xl font-bold mb-4">
        How MoneyMaker Works
      </h2>

      <p className="mb-6">
        Our recommendation engine evaluates several important factors before
        suggesting businesses.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-lg p-5">
          <h3 className="font-bold text-xl mb-2">Experience</h3>
          <p>Your previous jobs and professional background.</p>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="font-bold text-xl mb-2">Education</h3>
          <p>Your degrees, certifications and technical knowledge.</p>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="font-bold text-xl mb-2">Budget</h3>
          <p>How much money you can invest initially.</p>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="font-bold text-xl mb-2">Location</h3>
          <p>Your country and local business opportunities.</p>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="font-bold text-xl mb-2">Interests</h3>
          <p>Businesses aligned with what you enjoy doing.</p>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="font-bold text-xl mb-2">Goals</h3>
          <p>Passive income, side hustle or full-time entrepreneurship.</p>
        </div>

      </div>

      <hr className="my-12"/>

      <h2 className="text-3xl font-bold mb-4">
        Who Should Use MoneyMaker?
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <div className="border p-4 rounded-lg">Students</div>
        <div className="border p-4 rounded-lg">Engineers</div>
        <div className="border p-4 rounded-lg">Teachers</div>
        <div className="border p-4 rounded-lg">Healthcare Professionals</div>
        <div className="border p-4 rounded-lg">Freelancers</div>
        <div className="border p-4 rounded-lg">Retirees</div>
        <div className="border p-4 rounded-lg">Developers</div>
        <div className="border p-4 rounded-lg">Designers</div>
        <div className="border p-4 rounded-lg">Anyone Looking to Start a Business</div>

      </div>

      <hr className="my-12"/>

      <h2 className="text-3xl font-bold mb-4">
        Popular Business Categories
      </h2>

      <ul className="grid md:grid-cols-2 gap-3">

        <li>Artificial Intelligence</li>
        <li>SaaS Businesses</li>
        <li>Manufacturing</li>
        <li>Healthcare</li>
        <li>Consulting</li>
        <li>E-commerce</li>
        <li>Engineering Services</li>
        <li>Digital Products</li>
        <li>Education</li>
        <li>Tourism</li>

      </ul>

      <hr className="my-12"/>

      <h2 className="text-3xl font-bold mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8">

        <div>
          <h3 className="font-bold text-xl">
            Is MoneyMaker free?
          </h3>

          <p>
            Yes. You can use the business generator free while we continue
            improving the platform.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            Can beginners use it?
          </h3>

          <p>
            Absolutely. The recommendations are designed for entrepreneurs of
            all experience levels.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            What businesses can it recommend?
          </h3>

          <p>
            Online businesses, consulting, manufacturing, AI startups,
            healthcare businesses, engineering companies, digital products,
            local services and much more.
          </p>
        </div>

      </div>

      <div className="text-center mt-20">

        <Link
          href="/"
          className="bg-blue-600 text-white px-10 py-5 rounded-lg text-xl"
        >
          Generate My Business Idea
        </Link>

      </div>

    </main>
  );
}