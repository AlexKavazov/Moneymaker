'use client';

import { motion } from 'framer-motion';
import { ClipboardList, BrainCircuit, Target, Rocket } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Tell us about you',
    desc: 'Enter your age, location, budget, education, and interests. The more detail you share, the more tailored your results.',
  },
  {
    icon: BrainCircuit,
    title: 'AI analyzes your profile',
    desc: 'Our engine cross-references thousands of real business models, market trends, and success patterns against your inputs.',
  },
  {
    icon: Target,
    title: 'Get matched businesses',
    desc: 'Receive 5 personalized business ideas, each scored for compatibility with your specific situation and goals.',
  },
  {
    icon: Rocket,
    title: 'Launch with a plan',
    desc: 'Every idea comes with a week-by-week launch plan, supplier suggestions, sales channels, risks, and expansion paths.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[400px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-4xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              How it works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-4 max-w-xl text-muted-foreground"
            >
              From your profile to a launch-ready business plan in four simple steps.
            </motion.p>
          </div>

          <div className="space-y-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="glass-card flex gap-5 rounded-2xl p-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-2">
                    <div className="mb-1 text-xs font-medium text-primary">
                      Step {i + 1}
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
