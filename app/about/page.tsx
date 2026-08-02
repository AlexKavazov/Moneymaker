'use client';

import { motion } from 'framer-motion';
import { Sparkles, Target, Zap, Heart } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const VALUES = [
  { icon: Target, title: 'Practical over generic', desc: 'We reject vague advice. Every recommendation is specific, actionable, and backed by real-world examples.' },
  { icon: Zap, title: 'Speed to insight', desc: 'What used to take weeks of research now takes seconds, so you can spend your time building, not planning.' },
  { icon: Heart, title: 'Built for everyone', desc: 'Whether you have $500 or $50,000, a PhD or a high school diploma, MoneyMaker finds a path for you.' },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[400px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-4xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Our mission
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              We help anyone start a business
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              MoneyMaker was built on a simple belief: the best business for you is
              the one that fits your life. Not a generic list, not a trending fad —
              a real opportunity matched to who you are and what you have.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 glass-card rounded-2xl p-8 text-center"
          >
            <h2 className="mb-2 text-2xl font-semibold">Get in touch</h2>
            <p className="mx-auto mb-4 max-w-md text-sm text-muted-foreground">
              Questions, feedback, or partnership ideas? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:hello@moneymaker.app"
              className="text-sm font-medium text-primary hover:underline"
            >
              hello@moneymaker.app
            </a>
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
