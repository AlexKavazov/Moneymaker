import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Business Ideas for Engineers | MoneyMaker",
  description:
    "Discover engineering business ideas matched to your technical expertise.",
};

export default function Page() {
  return (
    <SeoPage
      title="Business Ideas for Engineers"
      description="Turn your technical knowledge into profitable businesses."
      introduction="Engineers possess analytical thinking, problem-solving skills and technical expertise that make them excellent entrepreneurs. MoneyMaker helps identify engineering-related business opportunities."
      benefits={[
        "Engineering consulting",
        "Product development",
        "Manufacturing",
        "AI and automation",
        "Technology startups",
      ]}
      faqs={[
        {
          question: "Can engineers become entrepreneurs?",
          answer:
            "Absolutely. Engineers are well suited to solving problems and creating innovative businesses.",
        },
        {
          question: "What engineering businesses are most profitable?",
          answer:
            "Consulting, software, automation, manufacturing and product design can all offer strong growth potential.",
        },
      ]}
    />
  );
}