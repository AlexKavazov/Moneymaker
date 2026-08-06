import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Startup Ideas | MoneyMaker",
  description:
    "Discover innovative startup ideas using AI-powered recommendations.",
};

export default function Page() {
  return (
    <SeoPage
      title="Startup Ideas"
      description="Find startup opportunities tailored to your background."
      introduction="Launching a startup begins with the right idea. MoneyMaker analyzes your experience, education and interests to recommend businesses with real market potential."
      benefits={[
        "Technology startups",
        "Service businesses",
        "Product businesses",
        "AI startups",
        "Scalable companies",
      ]}
      faqs={[
        {
          question: "What makes a good startup idea?",
          answer:
            "A good startup solves a real problem for customers while offering growth potential.",
        },
        {
          question: "Can I start with little money?",
          answer:
            "Yes. Many startups begin with limited funding and grow gradually.",
        },
      ]}
    />
  );
}