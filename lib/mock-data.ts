import type {
  BusinessIdea,
  GeneratorFormState,
  LaunchStep,
} from './types';

const IDEAS_POOL: Omit<
  BusinessIdea,
  'id' | 'compatibilityScore' | 'whyFitsYou'
>[] = [
  {
    name: 'Premium Eco-Friendly Cleaning Products Distribution',
    tagline: 'Sustainable cleaning supplies for conscious households',
    startupCost: '$2,500',
    timeToFirstRevenue: '3 weeks',
    difficulty: 'Beginner',
    competition: 'Medium',
    launchPlan: [
      {
        week: 'Week 1',
        tasks: [
          'Research suppliers',
          'Register business',
          'Create sales channels',
        ],
      },
      {
        week: 'Week 2',
        tasks: ['Purchase initial inventory', 'Contact customers'],
      },
      { week: 'Week 3', tasks: ['Launch marketing campaign'] },
    ],
    suppliers: [
      'Biodegradable formula manufacturers',
      'Refillable container suppliers',
      'Eco-certified packaging providers',
    ],
    salesChannels: [
      'Online store',
      'Marketplace',
      'Local businesses',
      'Social media',
    ],
    risks: [
      'Supply chain delays from niche manufacturers',
      'Educating customers on premium pricing',
      'Competing with established chemical brands',
    ],
    expansion: [
      'White-label for cleaning service companies',
      'Subscription refill boxes',
      'B2B contracts with eco-hotels',
    ],
    industry: 'Environment',
    technologies: ['Digital Products'],
    revenueModel: 'Product Sales',
    businessModel: 'B2C',
  },
  {
    name: 'AI-Powered Personal Finance Coach for Freelancers',
    tagline: 'Automated budgeting and tax guidance for the self-employed',
    startupCost: '$8,000',
    timeToFirstRevenue: '6 weeks',
    difficulty: 'Intermediate',
    competition: 'High',
    launchPlan: [
      {
        week: 'Week 1',
        tasks: ['Validate with 20 freelancers', 'Design MVP features'],
      },
      {
        week: 'Week 2-3',
        tasks: ['Build AI categorization model', 'Connect bank APIs'],
      },
      { week: 'Week 4-5', tasks: ['Beta test with 50 users'] },
      { week: 'Week 6', tasks: ['Launch paid tier'] },
    ],
    suppliers: [
      'Open banking API providers (Plaid, Tink)',
      'LLM API (OpenAI, Anthropic)',
      'Cloud hosting (Vercel, AWS)',
    ],
    salesChannels: ['Web app', 'App stores', 'Freelancer communities'],
    risks: [
      'Regulatory sensitivity around financial advice',
      'User trust with banking data',
      'Churn after tax season',
    ],
    expansion: [
      'Tax filing automation add-on',
      'Partnerships with freelancer platforms',
      'Team finance features',
    ],
    industry: 'Finance',
    technologies: ['Artificial Intelligence', 'Machine Learning', 'Big Data'],
    revenueModel: 'Subscription',
    businessModel: 'B2C',
  },
  {
    name: 'Local Specialty Coffee Subscription Roastery',
    tagline: 'Freshly roasted beans delivered from your micro-roastery',
    startupCost: '$6,500',
    timeToFirstRevenue: '4 weeks',
    difficulty: 'Beginner',
    competition: 'Medium',
    launchPlan: [
      {
        week: 'Week 1',
        tasks: ['Source green beans', 'Rent shared roastery space'],
      },
      { week: 'Week 2', tasks: ['Build brand and packaging'] },
      { week: 'Week 3', tasks: ['Launch subscription landing page'] },
      { week: 'Week 4', tasks: ['Ship first batch'] },
    ],
    suppliers: [
      'Green coffee importers',
      'Roasting equipment rental',
      'Compostable bag suppliers',
    ],
    salesChannels: ['Online store', 'Subscription', 'Local cafés', 'Farmers markets'],
    risks: [
      'Bean price volatility',
      'Roasting consistency at scale',
      'Subscription fatigue',
    ],
    expansion: [
      'Corporate gifting boxes',
      'Wholesale to offices',
      'Roasting workshops',
    ],
    industry: 'Food',
    technologies: ['Digital Products'],
    revenueModel: 'Subscription',
    businessModel: 'B2C',
  },
  {
    name: 'Mobile Car Detailing On-Demand Service',
    tagline: 'Professional detailing that comes to your driveway',
    startupCost: '$3,500',
    timeToFirstRevenue: '2 weeks',
    difficulty: 'Beginner',
    competition: 'Low',
    launchPlan: [
      {
        week: 'Week 1',
        tasks: ['Buy equipment', 'Get insured', 'Set booking calendar'],
      },
      { week: 'Week 2', tasks: ['Run local ads', 'Detail first 10 cars'] },
    ],
    suppliers: [
      'Professional detailing chemical suppliers',
      'Portable pressure washer dealers',
      'Van outfitters',
    ],
    salesChannels: ['Mobile app', 'Instagram', 'Local businesses', 'Referrals'],
    risks: [
      'Weather dependency',
      'Water access at client locations',
      'Scaling beyond one van',
    ],
    expansion: [
      'Fleet of detailers',
      'Monthly membership plans',
      'Dealership contracts',
    ],
    industry: 'Transportation',
    technologies: ['Geolocation'],
    revenueModel: 'Product Sales',
    businessModel: 'B2C',
  },
  {
    name: 'Niche Online Course Platform for Tradespeople',
    tagline: 'Helping electricians and plumbers digitize their expertise',
    startupCost: '$4,000',
    timeToFirstRevenue: '5 weeks',
    difficulty: 'Intermediate',
    competition: 'Low',
    launchPlan: [
      {
        week: 'Week 1',
        tasks: ['Interview 15 trades experts', 'Outline first course'],
      },
      { week: 'Week 2-3', tasks: ['Record and edit course content'] },
      { week: 'Week 4', tasks: ['Build sales page and funnel'] },
      { week: 'Week 5', tasks: ['Launch to waitlist'] },
    ],
    suppliers: [
      'Course hosting (Teachable, Kajabi)',
      'Video editing freelancers',
      'Email marketing tools',
    ],
    salesChannels: ['Own platform', 'Trade unions', 'YouTube', 'LinkedIn'],
    risks: [
      'Expert availability for recording',
      'Low digital literacy of target audience',
      'Piracy of course content',
    ],
    expansion: [
      'Certification programs',
      'B2B training for companies',
      'Marketplace for multiple instructors',
    ],
    industry: 'Education',
    technologies: ['Digital Products', 'Marketplace'],
    revenueModel: 'Freemium',
    businessModel: 'B2B',
  },
  {
    name: 'Smart Home Installation & Consulting Service',
    tagline: 'Making homes intelligent for non-technical owners',
    startupCost: '$5,000',
    timeToFirstRevenue: '3 weeks',
    difficulty: 'Intermediate',
    competition: 'Low',
    launchPlan: [
      {
        week: 'Week 1',
        tasks: ['Get certified on major ecosystems', 'Build service packages'],
      },
      { week: 'Week 2', tasks: ['Partner with real estate agents'] },
      { week: 'Week 3', tasks: ['Complete first 5 installations'] },
    ],
    suppliers: [
      'Smart device distributors',
      'Home automation platforms',
      'Local electricians for complex jobs',
    ],
    salesChannels: ['Referrals', 'Real estate agents', 'Google Local', 'Home shows'],
    risks: [
      'Device ecosystem fragmentation',
      'Liability for home systems',
      'Seasonal demand',
    ],
    expansion: [
      'Annual maintenance subscriptions',
      'New-build smart home packages',
      'Energy optimization consulting',
    ],
    industry: 'Home',
    technologies: ['Internet of Things', 'Geolocation'],
    revenueModel: 'Product Sales',
    businessModel: 'B2C',
  },
  {
    name: 'AR-Powered Furniture Try-Before-You-Buy Marketplace',
    tagline: 'See it in your room before you buy — local sellers only',
    startupCost: '$15,000',
    timeToFirstRevenue: '8 weeks',
    difficulty: 'Advanced',
    competition: 'Medium',
    launchPlan: [
      {
        week: 'Week 1-2',
        tasks: ['Build AR viewer MVP', 'Onboard 30 local sellers'],
      },
      { week: 'Week 3-5', tasks: ['Develop payment and logistics flow'] },
      { week: 'Week 6-7', tasks: ['Beta test with buyers'] },
      { week: 'Week 8', tasks: ['Public launch'] },
    ],
    suppliers: [
      'AR SDK providers (8thWall, ARKit)',
      'Payment processors',
      'Local delivery partners',
    ],
    salesChannels: ['Mobile app', 'Instagram', 'Interior designers'],
    risks: [
      'High development cost',
      'Chicken-and-egg marketplace problem',
      'Returns and damage liability',
    ],
    expansion: [
      'Nationwide seller network',
      'White-label for furniture brands',
      'Interior design services',
    ],
    industry: 'Retail',
    technologies: ['Augmented Reality', 'Marketplace', 'Geolocation'],
    revenueModel: 'Commission',
    businessModel: 'B2C',
  },
  {
    name: '3D-Printed Custom Orthotics & Insoles Service',
    tagline: 'Perfectly fitted foot support, printed on demand',
    startupCost: '$9,000',
    timeToFirstRevenue: '4 weeks',
    difficulty: 'Intermediate',
    competition: 'Low',
    launchPlan: [
      {
        week: 'Week 1',
        tasks: ['Buy 3D printer and scanner', 'Learn CAD modeling'],
      },
      { week: 'Week 2', tasks: ['Partner with a podiatrist'] },
      { week: 'Week 3', tasks: ['Print first 20 insoles'] },
      { week: 'Week 4', tasks: ['Launch online fitting service'] },
    ],
    suppliers: [
      'Industrial 3D printer manufacturers',
      'Flexible filament suppliers',
      'Foot scanning app SDKs',
    ],
    salesChannels: ['Online store', 'Podiatry clinics', 'Running stores'],
    risks: [
      'Medical liability',
      'Print quality consistency',
      'Material durability',
    ],
    expansion: [
      'Sports performance line',
      'Clinic licensing program',
      'Expansion to braces and supports',
    ],
    industry: 'Healthcare',
    technologies: ['3D Printing', 'Digital Products'],
    revenueModel: 'Product Sales',
    businessModel: 'B2C',
  },
  {
    name: 'Blockchain-Based Supply Chain Tracker for SMEs',
    tagline: 'Transparent provenance for small producers',
    startupCost: '$20,000',
    timeToFirstRevenue: '10 weeks',
    difficulty: 'Advanced',
    competition: 'Low',
    launchPlan: [
      {
        week: 'Week 1-3',
        tasks: ['Build smart contracts', 'Design data schema'],
      },
      { week: 'Week 4-6', tasks: ['Pilot with 3 producers'] },
      { week: 'Week 7-9', tasks: ['Integrate QR scanning and dashboard'] },
      { week: 'Week 10', tasks: ['Launch paid pilot'] },
    ],
    suppliers: [
      'Blockchain infrastructure (Polygon, Ethereum)',
      'Cloud hosting',
      'QR code hardware suppliers',
    ],
    salesChannels: ['Direct sales', 'Industry associations', 'Trade shows'],
    risks: [
      'Long enterprise sales cycles',
      'Blockchain complexity for users',
      'Regulatory uncertainty',
    ],
    expansion: [
      'Carbon credit tracking module',
      'Retailer consumer-facing labels',
      'Multi-chain support',
    ],
    industry: 'Manufacturing',
    technologies: ['Blockchain', 'Big Data'],
    revenueModel: 'Usage Based',
    businessModel: 'B2B',
  },
  {
    name: 'VR Real Estate Virtual Tour Studio',
    tagline: 'Immersive property tours for remote buyers',
    startupCost: '$7,000',
    timeToFirstRevenue: '3 weeks',
    difficulty: 'Intermediate',
    competition: 'Medium',
    launchPlan: [
      {
        week: 'Week 1',
        tasks: ['Buy 360 camera', 'Learn stitching software'],
      },
      { week: 'Week 2', tasks: ['Shoot first 5 properties free'] },
      { week: 'Week 3', tasks: ['Sign first paid contracts'],
      },
    ],
    suppliers: [
      '360 camera manufacturers',
      'VR tour hosting platforms',
      'Real estate CRM integrations',
    ],
    salesChannels: ['Real estate agencies', 'Property developers', 'Airbnb hosts'],
    risks: [
      'Equipment cost',
      'Property access scheduling',
      'Competition from Matterport',
    ],
    expansion: [
      'Commercial real estate tours',
      'VR staging for empty properties',
      'Subscription hosting plans',
    ],
    industry: 'Real Estate',
    technologies: ['Virtual Reality', 'Digital Products'],
    revenueModel: 'Product Sales',
    businessModel: 'B2B',
  },
  {
    name: 'Fitness Coaching App with AI Form Analysis',
    tagline: 'Your AI personal trainer that watches your form',
    startupCost: '$12,000',
    timeToFirstRevenue: '7 weeks',
    difficulty: 'Advanced',
    competition: 'High',
    launchPlan: [
      {
        week: 'Week 1-2',
        tasks: ['Train pose estimation model', 'Design workout library'],
      },
      { week: 'Week 3-4', tasks: ['Build mobile app MVP'] },
      { week: 'Week 5-6', tasks: ['Beta with 100 users'] },
      { week: 'Week 7', tasks: ['Launch with 7-day trial'] },
    ],
    suppliers: [
      'Computer vision API (MediaPipe, Vision)',
      'Mobile backend (Supabase, Firebase)',
      'Fitness content creators',
    ],
    salesChannels: ['App stores', 'Instagram influencers', 'Gym partnerships'],
    risks: [
      'App store competition',
      'Accuracy of form analysis',
      'High user acquisition cost',
    ],
    expansion: [
      'B2B for gyms and studios',
      'Wearable integration',
      'Nutrition coaching add-on',
    ],
    industry: 'Healthcare',
    technologies: ['Artificial Intelligence', 'Machine Learning', 'Augmented Reality'],
    revenueModel: 'Freemium',
    businessModel: 'B2C',
  },
  {
    name: 'Urban Micro-Farm & Home-Delivered Produce Box',
    tagline: 'Hyper-local organic greens grown in your city',
    startupCost: '$4,500',
    timeToFirstRevenue: '5 weeks',
    difficulty: 'Beginner',
    competition: 'Low',
    launchPlan: [
      {
        week: 'Week 1',
        tasks: ['Set up vertical grow racks', 'Source seeds and nutrients'],
      },
      { week: 'Week 2-3', tasks: ['Plant first crop cycle'] },
      { week: 'Week 4', tasks: ['Build subscriber waitlist'] },
      { week: 'Week 5', tasks: ['Deliver first boxes'] },
    ],
    suppliers: [
      'Hydroponic equipment suppliers',
      'Organic seed providers',
      'Compostable box suppliers',
    ],
    salesChannels: ['Subscription', 'Farmers markets', 'Local restaurants'],
    risks: [
      'Crop failure and pests',
      'Consistent weekly yield',
      'Delivery logistics',
    ],
    expansion: [
      'Multiple urban grow sites',
      'Restaurant supply contracts',
      'DIY home farm kits',
    ],
    industry: 'Environment',
    technologies: ['Internet of Things'],
    revenueModel: 'Subscription',
    businessModel: 'B2C',
  },
];

function scoreFor(idea: typeof IDEAS_POOL[number], inputs: GeneratorFormState): number {
  let score = 78 + Math.floor(Math.random() * 8);
  if (inputs.investmentLevel?.length) {
    const cost = parseInt(idea.startupCost.replace(/[^0-9]/g, ''), 10) || 0;
    const level =
      cost < 5000 ? 'Low' : cost < 20000 ? 'Medium' : 'High';
    if (inputs.investmentLevel.includes(level as never)) score += 6;
  }
  if (inputs.experience?.length && inputs.experience.includes(idea.difficulty)) score += 5;
  if (inputs.competition?.length && inputs.competition.includes(idea.competition)) score += 4;
  if (inputs.industry?.length && inputs.industry.includes(idea.industry)) score += 6;
  if (inputs.businessModel?.length && inputs.businessModel.includes(idea.businessModel)) score += 4;
  if (inputs.revenueModel?.length && inputs.revenueModel.includes(idea.revenueModel)) score += 4;
  if (inputs.technology?.length && idea.technologies.some((t) => inputs.technology?.includes(t))) score += 5;
  return Math.min(99, score);
}

function whyFitsYou(idea: typeof IDEAS_POOL[number], inputs: GeneratorFormState): string {
  const parts: string[] = [];
  const hobbies = inputs.hobbies?.toLowerCase() ?? '';
  parts.push(
    `At ${inputs.age || 'your age'} with a ${inputs.education || 'your'} background, you already have the discipline and learning ability this ${idea.difficulty.toLowerCase()}-level business demands.`
  );
  if (hobbies) {
    const matched = hobbies
      .split(/[,\s]+/)
      .filter((h) => h.length > 2)
      .slice(0, 2)
      .join(' and ');
    if (matched) {
      parts.push(
        `Your interest in ${matched} aligns directly with the ${idea.industry.toLowerCase()} sector, so you'll stay motivated through the hard early weeks.`
      );
    }
  }
  parts.push(
    `With a ${inputs.investment || 'your'} budget you can comfortably cover the ${idea.startupCost} startup cost, and the ${idea.competition.toLowerCase()} competition in your area means you can win market share quickly.`
  );
  if (inputs.location) {
    parts.push(
      `Being in ${inputs.location} gives you access to local customers and suppliers that make ${idea.businessModel === 'B2C' ? 'consumer' : 'business'} acquisition faster than average.`
    );
  }
  return parts.join(' ');
}

export function generateMockIdeas(inputs: GeneratorFormState): BusinessIdea[] {
  const shuffled = [...IDEAS_POOL].sort(() => Math.random() - 0.5);
  const count = 5;
  const selected = shuffled.slice(0, count);
  return selected.map((idea, i) => ({
    ...idea,
    id: `idea-${Date.now()}-${i}`,
    compatibilityScore: scoreFor(idea, inputs),
    whyFitsYou: whyFitsYou(idea, inputs),
  }));
}

export const LOADING_STEPS = [
  'Reading your profile',
  'Analyzing your opportunities',
  'Matching successful businesses',
  'Creating personalized recommendations',
  'Building your launch roadmap',
];
