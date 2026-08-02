'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bookmark,
  History,
  User,
  Settings,
  CreditCard,
  Trash2,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BusinessCard } from '@/components/business-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  getSavedIdeas,
  removeSavedIdea,
  getHistory,
  clearHistory,
} from '@/lib/storage';
import type { BusinessIdea, GenerationResult } from '@/lib/types';
import { cn } from '@/lib/utils';

const TABS = [
  { id: 'saved', label: 'Saved Ideas', icon: Bookmark },
  { id: 'history', label: 'Previous Generations', icon: History },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'subscription', label: 'Subscription', icon: CreditCard },
] as const;

type TabId = (typeof TABS)[number]['id'];

export default function DashboardPage() {
  const [tab, setTab] = useState<TabId>('saved');
  const [saved, setSaved] = useState<BusinessIdea[]>([]);
  const [history, setHistory] = useState<GenerationResult[]>([]);

  useEffect(() => {
    setSaved(getSavedIdeas());
    setHistory(getHistory());
  }, []);

  const handleRemove = (id: string) => {
    removeSavedIdea(id);
    setSaved(getSavedIdeas());
  };

  const handleClearHistory = () => {
    clearHistory();
    setHistory([]);
  };

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-30" />
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your saved ideas, history, and account settings.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar */}
            <aside className="lg:w-60 lg:shrink-0">
              <nav className="flex gap-1 overflow-x-auto rounded-xl border border-border/60 bg-background/30 p-2 lg:flex-col">
                {TABS.map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTab(t.id)}
                      className={cn(
                        'flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                        tab === t.id
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {t.label}
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Content */}
            <div className="flex-1">
              {tab === 'saved' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Saved Business Ideas</h2>
                    <Badge variant="secondary">{saved.length} saved</Badge>
                  </div>
                  {saved.length === 0 ? (
                    <EmptyState
                      icon={<Bookmark className="h-8 w-8" />}
                      title="No saved ideas yet"
                      desc="Save ideas from the results page to find them here."
                    />
                  ) : (
                    saved.map((idea) => (
                      <div key={idea.id} className="relative">
                        <BusinessCard idea={idea} />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemove(idea.id)}
                          className="absolute right-4 top-4 text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              )}

              {tab === 'history' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Previous Generations</h2>
                    {history.length > 0 && (
                      <Button variant="ghost" size="sm" onClick={handleClearHistory}>
                        <Trash2 className="mr-1.5 h-4 w-4" />
                        Clear all
                      </Button>
                    )}
                  </div>
                  {history.length === 0 ? (
                    <EmptyState
                      icon={<History className="h-8 w-8" />}
                      title="No generations yet"
                      desc="Your generation history will appear here."
                    />
                  ) : (
                    <div className="space-y-3">
                      {history.map((gen) => (
                        <div
                          key={gen.id}
                          className="glass-card rounded-xl p-4"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">
                                {new Date(gen.createdAt).toLocaleString()}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {gen.ideas.length} ideas •{' '}
                                {gen.inputs.location || 'No location'}
                              </p>
                            </div>
                            <Badge variant="outline">{gen.ideas.length} ideas</Badge>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {gen.ideas.slice(0, 3).map((idea) => (
                              <Badge key={idea.id} variant="secondary" className="rounded-md">
                                {idea.name.length > 40 ? idea.name.slice(0, 40) + '…' : idea.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {tab === 'profile' && (
                <div className="glass-card rounded-2xl p-6">
                  <h2 className="mb-6 text-xl font-semibold">Profile</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <ProfileField label="Name" value="Guest User" />
                    <ProfileField label="Email" value="guest@moneymaker.app" />
                    <ProfileField label="Plan" value="Free" />
                    <ProfileField label="Member since" value={new Date().toLocaleDateString()} />
                  </div>
                </div>
              )}

              {tab === 'settings' && (
                <div className="glass-card rounded-2xl p-6">
                  <h2 className="mb-6 text-xl font-semibold">Settings</h2>
                  <div className="space-y-4">
                    <SettingRow label="Email notifications" desc="Get notified about new features" />
                    <SettingRow label="Weekly insights" desc="Receive weekly business trend reports" />
                    <SettingRow label="Auto-save ideas" desc="Automatically save generated ideas" />
                  </div>
                </div>
              )}

              {tab === 'subscription' && (
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">Subscription</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        You are currently on the Free plan.
                      </p>
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Upgrade
                    </Button>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <UsageCard label="Generations used" value="0 / 3" />
                    <UsageCard label="Saved ideas" value={String(saved.length)} />
                    <UsageCard label="Plan" value="Free" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function EmptyState({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="glass-card flex flex-col items-center rounded-2xl p-12 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
        {icon}
      </div>
      <h3 className="mb-1 text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/30 p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}

function SettingRow({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/60 bg-background/30 p-4">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
      <div className="flex h-6 w-11 items-center rounded-full border-2 border-transparent bg-secondary p-0.5">
        <div className="h-5 w-5 rounded-full bg-muted-foreground/40" />
      </div>
    </div>
  );
}

function UsageCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/30 p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}
