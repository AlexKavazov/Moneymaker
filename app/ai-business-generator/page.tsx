import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "AI Business Generator | MoneyMaker",
  description:
    "Generate personalized business ideas using artificial intelligence.",
};

export default function Page() {
  return (
    <SeoPage
      title="AI Business Generator"
      description="Discover business opportunities tailored to your skills, interests and budget."
      introduction="Artificial intelligence can help entrepreneurs discover business opportunities much faster than browsing generic business idea lists. MoneyMaker analyzes your profile to recommend ideas that fit your goals."
      benefits={[
        "Personalized recommendations",
        "Ideas matched to your experience",
        "Low investment opportunities",
        "Startup guidance",
        "Business inspiration",
      ]}
      faqs={[
        {
          question: "What is an AI Business Generator?",
          answer:
            "It is a tool that analyzes your information and recommends business opportunities tailored to your profile.",
        },
        {
          question: "Can beginners use it?",
          answer:
            "Yes. It is designed for both beginners and experienced entrepreneurs.",
        },
      ]}
    />
  );
}