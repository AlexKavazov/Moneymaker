import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Business Ideas Under $1000 | MoneyMaker",
  description:
    "Discover businesses you can start with less than $1000.",
};

export default function Page() {
  return (
    <SeoPage
      title="Business Ideas Under $1000"
      description="Find affordable businesses requiring minimal startup capital."
      introduction="A limited budget should not stop you from becoming an entrepreneur. Many profitable businesses can begin with less than $1000."
      benefits={[
        "Low startup costs",
        "Home businesses",
        "Digital services",
        "Online businesses",
        "Fast launch",
      ]}
      faqs={[
        {
          question: "Can I start a business with under $1000?",
          answer:
            "Yes. Service-based and online businesses often require very little investment.",
        },
        {
          question: "Which businesses are cheapest to start?",
          answer:
            "Freelancing, consulting, digital products and online services are among the most affordable.",
        },
      ]}
    />
  );
}