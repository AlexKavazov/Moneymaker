import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Business Ideas for Students | MoneyMaker",
  description:
    "Discover flexible business ideas for students with limited budgets.",
};

export default function Page() {
  return (
    <SeoPage
      title="Business Ideas for Students"
      description="Build entrepreneurial experience while studying."
      introduction="Students possess valuable skills and creativity. MoneyMaker recommends businesses that fit busy academic schedules and limited budgets."
      benefits={[
        "Flexible schedules",
        "Online businesses",
        "Freelancing",
        "Digital products",
        "Low investment",
      ]}
      faqs={[
        {
          question: "Can students start businesses?",
          answer:
            "Yes. Many successful entrepreneurs launched businesses while studying.",
        },
        {
          question: "Do I need business experience?",
          answer:
            "No. Many beginner-friendly businesses can be learned as you grow.",
        },
      ]}
    />
  );
}