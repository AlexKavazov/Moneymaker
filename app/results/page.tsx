'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, RotateCcw } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BusinessCard } from '@/components/business-card';
import { Button } from '@/components/ui/button';
import type { GenerationResult } from '@/lib/types';

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem('moneymaker-current-result');
    if (raw) {
      try {
        setResult(JSON.parse(raw));
      } catch {
        /* ignore */
      }
    }
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  if (!result) {
    return (
      <div className="relative min-h-screen">
        <div className="pointer-events-none fixed inset-0 grid-bg opacity-30" />
        <div className="relative z-10">
          <Navbar />
          <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
            <h1 className="mb-3 text-2xl font-semibold">No results yet</h1>
            <p className="mb-6 text-muted-foreground">
              Generate some business ideas first to see your personalized recommendations.
            </p>
            <Button onClick={() => router.push('/')} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Sparkles className="mr-2 h-4 w-4" />
              Go to Generator
            </Button>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[400px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push('/')}
                className="mb-3 -ml-2 text-muted-foreground"
              >
                <ArrowLeft className="mr-1.5 h-4 w-4" />
                Back to generator
              </Button>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                {result.ideas.length} personalized recommendations
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your business ideas
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Generated on {new Date(result.createdAt).toLocaleString()}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => router.push('/')}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Generate again
            </Button>
          </div>

          <div className="space-y-6">
            {result.ideas.map((idea, i) => (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <BusinessCard idea={idea} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <h3 className="mb-2 text-lg font-semibold">Want more tailored ideas?</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Adjust your inputs and generate a fresh batch of recommendations.
            </p>
            <Button
              onClick={() => router.push('/')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Generate new ideas
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
