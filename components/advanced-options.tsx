'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  BUSINESS_MODELS,
  REVENUE_MODELS,
  TECHNOLOGY_OPTIONS,
  INDUSTRY_OPTIONS,
  INVESTMENT_LEVELS,
  COMPETITION_LEVELS,
  EXPERIENCE_LEVELS,
  IMPACT_LEVELS,
  REGULATORY_LEVELS,
  RESPONSE_LANGUAGES,
} from '@/lib/options';
import type {
  BusinessModel,
  CompetitionLevel,
  ExperienceLevel,
  GeneratorFormState,
  ImpactLevel,
  Industry,
  InvestmentLevel,
  RegulatoryLevel,
  ResponseLanguage,
  RevenueModel,
  Technology,
} from '@/lib/types';

interface Props {
  values: GeneratorFormState;
  onChange: (patch: Partial<GeneratorFormState>) => void;
}

function ChipRow({
  options,
  selected,
  onToggle,
  cols = 'grid-cols-2 sm:grid-cols-3',
}: {
  options: { label: string; value: string; icon?: string }[] | string[];
  selected: string[];
  onToggle: (v: string) => void;
  cols?: string;
}) {
  const opts = options.map((o) =>
    typeof o === 'string' ? { label: o, value: o, icon: undefined } : o
  );
  return (
    <div className={cn('grid gap-2', cols)}>
      {opts.map((o) => {
        const active = selected.includes(o.value);
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onToggle(o.value)}
            className={cn(
              'flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all',
              active
                ? 'border-primary bg-primary/10 text-foreground ring-1 ring-primary/40'
                : 'border-border bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground'
            )}
          >
            {o.icon && <span>{o.icon}</span>}
            <span className="truncate">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function Section({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border/60 bg-background/30">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium"
      >
        {title}
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AdvancedOptions({ values, onChange }: Props) {
  const [showMoreTech, setShowMoreTech] = useState(false);
  const [showMoreIndustry, setShowMoreIndustry] = useState(false);

  const toggle = <K extends keyof GeneratorFormState>(key: K) => (v: any) => {
    const arr = values[key] as unknown as string[];
    const next = arr.includes(v)
      ? arr.filter((x) => x !== v)
      : [...arr, v];
    onChange({ [key]: next } as Partial<GeneratorFormState>);
  };

  const techShown = showMoreTech
    ? TECHNOLOGY_OPTIONS
    : TECHNOLOGY_OPTIONS.slice(0, 6);
  const industryShown = showMoreIndustry
    ? INDUSTRY_OPTIONS
    : INDUSTRY_OPTIONS.slice(0, 6);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="space-y-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">Advanced Options</span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
            Optional
          </span>
        </div>

        <Section title="Business Model">
          <ChipRow
            options={BUSINESS_MODELS}
            selected={values.businessModel}
            onToggle={toggle('businessModel')}
            cols="grid-cols-2"
          />
        </Section>

        <Section title="Revenue Model">
          <ChipRow
            options={REVENUE_MODELS}
            selected={values.revenueModel}
            onToggle={toggle('revenueModel')}
            cols="grid-cols-2 sm:grid-cols-3"
          />
        </Section>

        <Section title="Technology">
          <ChipRow
            options={techShown}
            selected={values.technology}
            onToggle={toggle('technology')}
          />
          <button
            type="button"
            onClick={() => setShowMoreTech((v) => !v)}
            className="mt-3 text-xs font-medium text-primary hover:underline"
          >
            {showMoreTech ? 'Show less' : 'Show more'}
          </button>
        </Section>

        <Section title="Industry">
          <ChipRow
            options={industryShown}
            selected={values.industry}
            onToggle={toggle('industry')}
          />
          <button
            type="button"
            onClick={() => setShowMoreIndustry((v) => !v)}
            className="mt-3 text-xs font-medium text-primary hover:underline"
          >
            {showMoreIndustry ? 'Show less' : 'Show more'}
          </button>
        </Section>

        <Section title="Investment Level" defaultOpen={false}>
          <ChipRow
            options={INVESTMENT_LEVELS}
            selected={values.investmentLevel}
            onToggle={toggle('investmentLevel')}
            cols="grid-cols-3"
          />
        </Section>

        <Section title="Competition" defaultOpen={false}>
          <ChipRow
            options={COMPETITION_LEVELS}
            selected={values.competition}
            onToggle={toggle('competition')}
            cols="grid-cols-3"
          />
        </Section>

        <Section title="Experience Level" defaultOpen={false}>
          <ChipRow
            options={EXPERIENCE_LEVELS}
            selected={values.experience}
            onToggle={toggle('experience')}
            cols="grid-cols-3"
          />
        </Section>

        <Section title="Environmental Impact" defaultOpen={false}>
          <ChipRow
            options={IMPACT_LEVELS}
            selected={values.environmentalImpact}
            onToggle={toggle('environmentalImpact')}
            cols="grid-cols-3"
          />
        </Section>

        <Section title="Regulatory Requirements" defaultOpen={false}>
          <ChipRow
            options={REGULATORY_LEVELS}
            selected={values.regulatory}
            onToggle={toggle('regulatory')}
            cols="grid-cols-3"
          />
        </Section>

        <Section title="Response Language" defaultOpen={false}>
          <ChipRow
            options={RESPONSE_LANGUAGES}
            selected={[values.responseLanguage]}
            onToggle={(v) => onChange({ responseLanguage: v as ResponseLanguage })}
            cols="grid-cols-2 sm:grid-cols-4"
          />
        </Section>
      </div>
    </motion.div>
  );
}
