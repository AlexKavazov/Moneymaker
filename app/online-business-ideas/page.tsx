import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Online Business Ideas | MoneyMaker",
  description: "Discover online businesses you can start from anywhere.",
};

export default function Page() {
  return (
    <SeoPage
      title="Online Business Ideas"
      description="Find internet-based businesses with low startup costs."
      introduction="Online businesses allow entrepreneurs to reach customers worldwide while keeping costs low."
      benefits={[
        "Work remotely",
        "Low startup costs",
        "Scalable businesses",
        "Global customers",
      ]}
      faqs={[
        {
          question: "Do I need experience?",
          answer: "No. Many online businesses can be learned from scratch.",
        },
      ]}
    />
  );
}