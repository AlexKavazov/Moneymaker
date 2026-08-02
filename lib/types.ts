export type InvestmentRange =
  | 'Under $500'
  | '$500–$2,000'
  | '$2,000–$10,000'
  | '$10,000–$50,000'
  | '$50,000+';

export type Education =
  | 'High School'
  | 'Bachelor Degree'
  | 'Master Degree'
  | 'PhD'
  | 'Professional Training'
  | 'Other';

export type BusinessModel = 'B2C' | 'B2B';
export type RevenueModel =
  | 'Subscription'
  | 'Advertising'
  | 'Commission'
  | 'Product Sales'
  | 'Freemium'
  | 'Usage Based';

export type Technology =
  | 'Artificial Intelligence'
  | 'Blockchain'
  | 'Internet of Things'
  | 'Virtual Reality'
  | 'Geolocation'
  | 'Augmented Reality'
  | 'Big Data'
  | 'Digital Products'
  | 'Marketplace'
  | 'Machine Learning'
  | 'Robotics'
  | '3D Printing';

export type Industry =
  | 'Technology'
  | 'Education'
  | 'Finance'
  | 'Healthcare'
  | 'Manufacturing'
  | 'Real Estate'
  | 'Transportation'
  | 'Retail'
  | 'Food'
  | 'Entertainment'
  | 'Home'
  | 'Environment';

export type InvestmentLevel = 'Low' | 'Medium' | 'High';
export type CompetitionLevel = 'Low' | 'Medium' | 'High';
export type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type ImpactLevel = 'Low' | 'Medium' | 'High';
export type RegulatoryLevel = 'Low' | 'Medium' | 'High';
export type ResponseLanguage = 'English' | 'Spanish' | 'French' | 'German';

export interface GeneratorFormState {
  age: string;
  location: string;
  investment: InvestmentRange;
  education: Education;
  hobbies: string;
  // Advanced
  businessModel: BusinessModel[];
  revenueModel: RevenueModel[];
  technology: Technology[];
  industry: Industry[];
  investmentLevel: InvestmentLevel[];
  competition: CompetitionLevel[];
  experience: ExperienceLevel[];
  environmentalImpact: ImpactLevel[];
  regulatory: RegulatoryLevel[];
  responseLanguage: ResponseLanguage;
}

export interface LaunchStep {
  week: string;
  tasks: string[];
}

export interface BusinessIdea {
  id: string;
  name: string;
  tagline: string;
  compatibilityScore: number;
  startupCost: string;
  timeToFirstRevenue: string;
  difficulty: ExperienceLevel;
  competition: CompetitionLevel;
  whyFitsYou: string;
  launchPlan: LaunchStep[];
  suppliers: string[];
  salesChannels: string[];
  risks: string[];
  expansion: string[];
  industry: Industry;
  technologies: Technology[];
  revenueModel: RevenueModel;
  businessModel: BusinessModel;
}

export interface GenerationResult {
  id: string;
  createdAt: string;
  inputs: Partial<GeneratorFormState>;
  ideas: BusinessIdea[];
}
