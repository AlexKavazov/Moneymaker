'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { LOADING_STEPS } from '@/lib/mock-data';

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= LOADING_STEPS.length) {
      const t = setTimeout(onComplete, 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCurrentStep((s) => s + 1), 750);
    return () => clearTimeout(t);
  }, [currentStep, onComplete]);

  const progress = Math.min(100, (currentStep / LOADING_STEPS.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-[60vh] flex-col items-center justify-center"
    >
      <div className="relative mb-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/30"
        >
          <Sparkles className="h-9 w-9 text-primary" />
        </motion.div>
        <motion.div
          className="absolute inset-0 rounded-2xl ring-2 ring-primary/40"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </div>

      <h3 className="mb-2 text-xl font-semibold">Generating your ideas</h3>
      <p className="mb-8 text-sm text-muted-foreground">
        Our AI is analyzing thousands of business models for you
      </p>

      <div className="w-full max-w-md space-y-3">
        {LOADING_STEPS.map((step, i) => {
          const done = i < currentStep;
          const active = i === currentStep;
          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3"
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${
                  done
                    ? 'border-primary bg-primary text-primary-foreground'
                    : active
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-transparent'
                }`}
              >
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </motion.span>
                  ) : active ? (
                    <motion.span
                      key="active"
                      className="h-2 w-2 rounded-full bg-primary"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  ) : null}
                </AnimatePresence>
              </div>
              <span
                className={`text-sm transition-colors ${
                  done ? 'text-foreground' : active ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {step}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 w-full max-w-md">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="h-full rounded-full bg-primary"
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
          />
        </div>
        <p className="mt-2 text-right text-xs text-muted-foreground">
          {Math.round(progress)}%
        </p>
      </div>
    </motion.div>
  );
}
