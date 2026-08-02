'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, Sparkles, Loader as Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AdvancedOptions } from '@/components/advanced-options';
import { INVESTMENT_RANGES, EDUCATION_OPTIONS } from '@/lib/options';
import type { GeneratorFormState } from '@/lib/types';

const initialState: GeneratorFormState = {
  age: '',
  location: '',
  investment: '$2,000–$10,000',
  education: 'Bachelor Degree',
  hobbies: '',
  businessModel: [],
  revenueModel: [],
  technology: [],
  industry: [],
  investmentLevel: [],
  competition: [],
  experience: [],
  environmentalImpact: [],
  regulatory: [],
  responseLanguage: 'English',
};

interface Props {
  onGenerate: (values: GeneratorFormState) => void;
  compact?: boolean;
}

export function GeneratorForm({ onGenerate, compact = false }: Props) {
  const [values, setValues] = useState<GeneratorFormState>(initialState);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (patch: Partial<GeneratorFormState>) =>
    setValues((v) => ({ ...v, ...patch }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onGenerate(values);
    }, 100);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            min={16}
            max={100}
            placeholder="28"
            value={values.age}
            onChange={(e) => update({ age: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="Madrid, Spain"
            value={values.location}
            onChange={(e) => update({ location: e.target.value })}
          />
        </div>
      </div>

      <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div className="space-y-2">
          <Label>Available Investment</Label>
          <Select
            value={values.investment}
            onValueChange={(v) => update({ investment: v as GeneratorFormState['investment'] })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              {INVESTMENT_RANGES.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Education</Label>
          <Select
            value={values.education}
            onValueChange={(v) => update({ education: v as GeneratorFormState['education'] })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select education" />
            </SelectTrigger>
            <SelectContent>
              {EDUCATION_OPTIONS.map((e) => (
                <SelectItem key={e} value={e}>
                  {e}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hobbies">Hobbies / Preferences</Label>
        <textarea
          id="hobbies"
          rows={compact ? 2 : 3}
          placeholder="Cooking, technology, cars, fitness, fashion, crafts..."
          value={values.hobbies}
          onChange={(e) => update({ hobbies: e.target.value })}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          disabled={submitting}
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          {submitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Generate Business Ideas
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => setShowAdvanced((v) => !v)}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Advanced Options
        </Button>
      </div>

      <AnimatePresence>
        {showAdvanced && (
          <AdvancedOptions values={values} onChange={update} />
        )}
      </AnimatePresence>

      {showAdvanced && (
        <Button
          type="submit"
          disabled={submitting}
          variant="secondary"
          size="lg"
          className="w-full"
        >
          {submitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Generate with Advanced Filters
        </Button>
      )}
    </form>
  );
}
