import type {
  BusinessModel,
  CompetitionLevel,
  Education,
  ExperienceLevel,
  ImpactLevel,
  Industry,
  InvestmentLevel,
  InvestmentRange,
  RegulatoryLevel,
  ResponseLanguage,
  RevenueModel,
  Technology,
} from './types';

export const INVESTMENT_RANGES: InvestmentRange[] = [
  'Under $500',
  '$500–$2,000',
  '$2,000–$10,000',
  '$10,000–$50,000',
  '$50,000+',
];

export const EDUCATION_OPTIONS: Education[] = [
  'High School',
  'Bachelor Degree',
  'Master Degree',
  'PhD',
  'Professional Training',
  'Other',
];

export const BUSINESS_MODELS: { label: string; value: BusinessModel; icon: string }[] = [
  { label: 'Business to Customer', value: 'B2C', icon: '🏠' },
  { label: 'Business to Business', value: 'B2B', icon: '🏢' },
];

export const REVENUE_MODELS: { label: string; value: RevenueModel; icon: string }[] = [
  { label: 'Subscription', value: 'Subscription', icon: '💳' },
  { label: 'Advertising', value: 'Advertising', icon: '📢' },
  { label: 'Commission', value: 'Commission', icon: '🤝' },
  { label: 'Product or Service Sales', value: 'Product Sales', icon: '🛍️' },
  { label: 'Freemium', value: 'Freemium', icon: '🎁' },
  { label: 'Usage Based', value: 'Usage Based', icon: '📈' },
];

export const TECHNOLOGY_OPTIONS: { label: string; value: Technology; icon: string }[] = [
  { label: 'Artificial Intelligence', value: 'Artificial Intelligence', icon: '🤖' },
  { label: 'Blockchain', value: 'Blockchain', icon: '⛓️' },
  { label: 'Internet of Things', value: 'Internet of Things', icon: '🌐' },
  { label: 'Virtual Reality', value: 'Virtual Reality', icon: '🕶️' },
  { label: 'Geolocation', value: 'Geolocation', icon: '🌍' },
  { label: 'Augmented Reality', value: 'Augmented Reality', icon: '📱' },
  { label: 'Big Data', value: 'Big Data', icon: '📊' },
  { label: 'Digital Products', value: 'Digital Products', icon: '💾' },
  { label: 'Marketplace', value: 'Marketplace', icon: '🛍️' },
  { label: 'Machine Learning', value: 'Machine Learning', icon: '🧠' },
  { label: 'Robotics', value: 'Robotics', icon: '🦾' },
  { label: '3D Printing', value: '3D Printing', icon: '🖨️' },
];

export const INDUSTRY_OPTIONS: Industry[] = [
  'Technology',
  'Education',
  'Finance',
  'Healthcare',
  'Manufacturing',
  'Real Estate',
  'Transportation',
  'Retail',
  'Food',
  'Entertainment',
  'Home',
  'Environment',
];

export const INVESTMENT_LEVELS: InvestmentLevel[] = ['Low', 'Medium', 'High'];
export const COMPETITION_LEVELS: CompetitionLevel[] = ['Low', 'Medium', 'High'];
export const EXPERIENCE_LEVELS: ExperienceLevel[] = ['Beginner', 'Intermediate', 'Advanced'];
export const IMPACT_LEVELS: ImpactLevel[] = ['Low', 'Medium', 'High'];
export const REGULATORY_LEVELS: RegulatoryLevel[] = ['Low', 'Medium', 'High'];
export const RESPONSE_LANGUAGES: ResponseLanguage[] = ['English', 'Spanish', 'French', 'German'];
