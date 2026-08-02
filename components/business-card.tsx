'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, BookmarkCheck, GitCompare, FileDown, Rocket, ChevronDown, TrendingUp, TriangleAlert as AlertTriangle, Store, Truck, Calendar, Gauge, Swords, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { BusinessIdea } from '@/lib/types';
import { saveIdea, removeSavedIdea, isIdeaSaved } from '@/lib/storage';

const difficultyColor: Record<string, string> = {
  Beginner: 'text-emerald-500',
  Intermediate: 'text-amber-500',
  Advanced: 'text-rose-500',
};

export function BusinessCard({ idea }: { idea: BusinessIdea }) {
  const [expanded, setExpanded] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isIdeaSaved(idea.id));
  }, [idea.id]);

  const handleSave = () => {
    if (isIdeaSaved(idea.id)) {
      removeSavedIdea(idea.id);
      setSaved(false);
    } else {
      saveIdea(idea);
      setSaved(true);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-6 transition-colors hover:border-primary/40"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-md">
              {idea.industry}
            </Badge>
            <Badge variant="outline" className="rounded-md">
              {idea.businessModel}
            </Badge>
            <Badge variant="outline" className="rounded-md">
              {idea.revenueModel}
            </Badge>
          </div>
          <h3 className="text-xl font-semibold tracking-tight">{idea.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{idea.tagline}</p>
        </div>
        <div className="flex shrink-0 flex-col items-center rounded-xl border border-border/60 bg-background/40 p-3">
          <span className="text-3xl font-bold text-gradient-primary">
            {idea.compatibilityScore}%
          </span>
          <span className="text-xs text-muted-foreground">Match</span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat icon={<Calendar className="h-4 w-4" />} label="Startup Cost" value={idea.startupCost} />
        <Stat icon={<TrendingUp className="h-4 w-4" />} label="First Revenue" value={idea.timeToFirstRevenue} />
        <Stat
          icon={<Gauge className="h-4 w-4" />}
          label="Difficulty"
          value={idea.difficulty}
          valueClass={difficultyColor[idea.difficulty]}
        />
        <Stat icon={<Swords className="h-4 w-4" />} label="Competition" value={idea.competition} />
      </div>

      {/* Compatibility bar */}
      <div className="mt-5">
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Compatibility Score</span>
          <span className="font-medium">{idea.compatibilityScore}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${idea.compatibilityScore}%` }}
          />
        </div>
      </div>

      {/* Why fits */}
      <div className="mt-5 rounded-xl border border-border/60 bg-background/30 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium">
          <Target className="h-4 w-4 text-primary" />
          Why this fits you
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{idea.whyFitsYou}</p>
      </div>

      {/* Expandable details */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-5 space-y-5">
              {/* Launch plan */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <Rocket className="h-4 w-4 text-primary" />
                  Launch Plan
                </h4>
                <div className="space-y-3">
                  {idea.launchPlan.map((step, i) => (
                    <div
                      key={i}
                      className="relative rounded-lg border border-border/60 bg-background/30 p-3 pl-10"
                    >
                      <div className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {i + 1}
                      </div>
                      <p className="mb-1 text-xs font-medium text-primary">{step.week}</p>
                      <ul className="space-y-1">
                        {step.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suppliers + Channels */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                    <Truck className="h-4 w-4 text-primary" />
                    Suppliers
                  </h4>
                  <ul className="space-y-1">
                    {idea.suppliers.map((s) => (
                      <li key={s} className="text-sm text-muted-foreground">• {s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                    <Store className="h-4 w-4 text-primary" />
                    Sales Channels
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {idea.salesChannels.map((c) => (
                      <Badge key={c} variant="outline" className="rounded-md">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Risks + Expansion */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-500">
                    <AlertTriangle className="h-4 w-4" />
                    Risks
                  </h4>
                  <ul className="space-y-1">
                    {idea.risks.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground">• {r}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                    <TrendingUp className="h-4 w-4" />
                    Expansion
                  </h4>
                  <ul className="space-y-1">
                    {idea.expansion.map((e) => (
                      <li key={e} className="text-sm text-muted-foreground">• {e}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleSave}
          className={cn(saved && 'border-primary text-primary')}
        >
          {saved ? <BookmarkCheck className="mr-1.5 h-4 w-4" /> : <Bookmark className="mr-1.5 h-4 w-4" />}
          {saved ? 'Saved' : 'Save Idea'}
        </Button>
        <Button variant="outline" size="sm">
          <GitCompare className="mr-1.5 h-4 w-4" />
          Compare
        </Button>
        <Button variant="outline" size="sm">
          <FileDown className="mr-1.5 h-4 w-4" />
          Export PDF
        </Button>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Rocket className="mr-1.5 h-4 w-4" />
          Build This Business
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded((v) => !v)}
          className="ml-auto"
        >
          {expanded ? 'Show less' : 'Show full plan'}
          <ChevronDown className={cn('ml-1 h-4 w-4 transition-transform', expanded && 'rotate-180')} />
        </Button>
      </div>
    </motion.div>
  );
}

function Stat({
  icon,
  label,
  value,
  valueClass,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/30 p-3">
      <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon}
        {label}
      </div>
      <p className={cn('text-sm font-semibold', valueClass)}>{value}</p>
    </div>
  );
}
