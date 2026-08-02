import type { BusinessIdea, GenerationResult } from './types';

const SAVED_KEY = 'moneymaker-saved-ideas';
const HISTORY_KEY = 'moneymaker-history';

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function getSavedIdeas(): BusinessIdea[] {
  if (typeof window === 'undefined') return [];
  return safeParse<BusinessIdea[]>(localStorage.getItem(SAVED_KEY), []);
}

export function saveIdea(idea: BusinessIdea): boolean {
  const saved = getSavedIdeas();
  if (saved.some((i) => i.id === idea.id)) return false;
  saved.push(idea);
  localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  return true;
}

export function removeSavedIdea(id: string): void {
  const saved = getSavedIdeas().filter((i) => i.id !== id);
  localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
}

export function isIdeaSaved(id: string): boolean {
  return getSavedIdeas().some((i) => i.id === id);
}

export function getHistory(): GenerationResult[] {
  if (typeof window === 'undefined') return [];
  return safeParse<GenerationResult[]>(localStorage.getItem(HISTORY_KEY), []);
}

export function addToHistory(result: GenerationResult): void {
  const history = getHistory();
  history.unshift(result);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 20)));
}

export function clearHistory(): void {
  localStorage.removeItem(HISTORY_KEY);
}
