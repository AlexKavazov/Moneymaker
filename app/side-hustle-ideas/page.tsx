import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Side Hustle Ideas | MoneyMaker",
  description:
    "Discover profitable side hustle ideas you can start today.",
};

export default function Page() {
  return (
    <SeoPage
      title="Side Hustle Ideas"
      description="Generate additional income through flexible side businesses."
      introduction="Whether you work full-time or study, side hustles are an excellent way to earn extra income while developing valuable entrepreneurial skills."
      benefits={[
        "Flexible schedules",
        "Low startup costs",
        "Online opportunities",
        "Freelance businesses",
        "Extra monthly income",
      ]}
      faqs={[
        {
          question: "Can I start a side hustle while employed?",
          answer:
            "Yes. Many businesses can be started during evenings and weekends.",
        },
        {
          question: "Which side hustles make the most money?",
          answer:
            "The best option depends on your experience, interests and available time.",
        },
      ]}
    />
  );
}