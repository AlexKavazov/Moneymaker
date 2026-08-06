'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Target, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GeneratorForm } from '@/components/generator-form';
import { LoadingAnimation } from '@/components/loading-animation';
import { generateMockIdeas } from '@/lib/mock-data';
import { addToHistory } from '@/lib/storage';
import type { GeneratorFormState } from '@/lib/types';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGenerate = (values: GeneratorFormState) => {
    setLoading(true);
    const ideas = generateMockIdeas(values);
    const result = {
      id: `gen-${Date.now()}`,
      createdAt: new Date().toISOString(),
      inputs: values,
      ideas,
    };
    addToHistory(result);
    sessionStorage.setItem('moneymaker-current-result', JSON.stringify(result));
  };

  const handleLoadingComplete = () => {
    router.push('/results');
  };

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <LoadingAnimation onComplete={handleLoadingComplete} />
              </motion.div>
            ) : (
              <motion.div
                key="generator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Hero */}
                <div className="mb-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    AI-Powered Business Discovery
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
                  >
                    Find the business you can{' '}
                    <span className="text-gradient-primary">start today.</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
                  >
                    AI analyzes your experience, budget, location, and interests to
                    discover personalized business opportunities with step-by-step
                    launch plans.
                  </motion.p>
                </div>

                {/* Generator card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="glass-card rounded-2xl p-6 shadow-xl sm:p-8"
                >
                  <GeneratorForm onGenerate={handleGenerate} />
                </motion.div>

               
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  <FeatureBadge
                    icon={<Zap className="h-5 w-5" />}
                    title="Instant Results"
                    desc="Get 5 tailored ideas in seconds"
                  />
                  <FeatureBadge
                    icon={<Target className="h-5 w-5" />}
                    title="Personalized Match"
                    desc="Scored against your unique profile"
                  />
                  <FeatureBadge
                    icon={<TrendingUp className="h-5 w-5" />}
                    title="Actionable Plans"
                    desc="Week-by-week launch roadmaps"
                  />
                </motion.div>
                <section className="mt-20">
  <h2 className="text-3xl font-bold text-center mb-8">
    Explore More Business Resources
  </h2>

  <div className="grid gap-4 md:grid-cols-2">
    <a href="/business-idea-generator" className="rounded-lg border p-5 hover:bg-muted">
      AI Business Idea Generator →
    </a>

    <a href="/online-business-ideas" className="rounded-lg border p-5 hover:bg-muted">
      Online Business Ideas →
    </a>

    <a href="/money-making-ideas" className="rounded-lg border p-5 hover:bg-muted">
      Money Making Ideas →
    </a>

    <a href="/passive-income-ideas" className="rounded-lg border p-5 hover:bg-muted">
      Passive Income Ideas →
    </a>
  </div>
</section>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function FeatureBadge({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/30 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
