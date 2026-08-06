import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Small Business Ideas | MoneyMaker",
  description:
    "Explore profitable small business ideas for aspiring entrepreneurs.",
};

export default function Page() {
  return (
    <SeoPage
      title="Small Business Ideas"
      description="Discover small businesses matched to your goals and experience."
      introduction="Small businesses remain one of the most reliable paths toward financial independence. MoneyMaker helps you discover businesses that fit your budget and professional background."
      benefits={[
        "Home businesses",
        "Local services",
        "Retail opportunities",
        "Professional consulting",
        "Scalable growth",
      ]}
      faqs={[
        {
          question: "Do I need a large investment?",
          answer:
            "No. Many successful small businesses start with limited capital.",
        },
        {
          question: "Can beginners own a small business?",
          answer:
            "Absolutely. Many entrepreneurs start without previous business experience.",
        },
      ]}
    />
  );
}