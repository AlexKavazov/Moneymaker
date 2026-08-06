import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Passive Income Ideas | MoneyMaker",
  description:
    "Discover passive income opportunities that match your skills, budget and experience.",
};

export default function Page() {
  return (
    <SeoPage
      title="Passive Income Ideas"
      description="Discover businesses that can generate recurring income over time."
      introduction="Passive income businesses allow entrepreneurs to earn money beyond traditional employment. MoneyMaker helps you identify opportunities based on your skills, available capital and long-term goals."
      benefits={[
        "Recurring income opportunities",
        "Digital products",
        "Affiliate marketing",
        "Investment-based businesses",
        "Automated online businesses",
      ]}
      faqs={[
        {
          question: "What is passive income?",
          answer:
            "Passive income is money earned with minimal ongoing effort after the initial setup.",
        },
        {
          question: "Can beginners build passive income?",
          answer:
            "Yes. Many passive income businesses can be started with little experience.",
        },
      ]}
    />
  );
}