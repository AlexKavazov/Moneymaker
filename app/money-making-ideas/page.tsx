import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Money Making Ideas | MoneyMaker",
  description: "Discover profitable money making ideas and business opportunities.",
};

export default function Page() {
  return (
    <SeoPage
      title="Money Making Ideas"
      description="Explore practical ways to earn income through businesses and side projects."
      introduction="Whether you want a full-time company or extra income, MoneyMaker helps you discover opportunities that fit your skills."
      benefits={[
        "Online businesses",
        "Passive income",
        "Local businesses",
        "Digital products",
        "Freelancing",
      ]}
      faqs={[
        {
          question: "Are these ideas suitable for beginners?",
          answer: "Yes. Many ideas require little experience.",
        },
      ]}
    />
  );
}