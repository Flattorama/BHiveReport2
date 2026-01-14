import type { HeroMetric, FunnelStage, Delegation, TimelineEvent, Challenge, StrategicPillar } from '@shared/schema';

export const heroMetrics: HeroMetric[] = [
  { id: 'graduated', value: 66, label: 'Graduated Companies', duration: 2.5 },
  { id: 'startups', value: 14, label: 'New Startups 2025', duration: 2 },
  { id: 'hours', value: 3578, label: 'Programming Hours', duration: 3 },
  { id: 'leads', value: 5781, label: 'Total Leads', duration: 3 },
  { id: 'mentors', value: 69, label: 'Active Mentors', duration: 1.5 },
  { id: 'events', value: 23, label: 'Events Hosted', duration: 1.5 },
];

export const funnelStages = [
  { stage: 'Leads Received', value: 5781, percentage: 100, color: 'bhive-gold' },
  { stage: 'Initial Screening', value: 2890, percentage: 50, color: 'bhive-gold' },
  { stage: 'Application Review', value: 580, percentage: 10, color: 'bhive-yellow' },
  { stage: 'Interview Stage', value: 116, percentage: 2, color: 'bhive-yellow' },
  { stage: 'Committed Businesses', value: 14, percentage: 0.24, color: 'bhive-orange' },
];

export const delegations = [
  {
    id: 'poland',
    country: 'Poland',
    lat: 52.2297,
    lng: 21.0122,
    event: 'Green Tech Delegation',
    date: 'April 14, 2025',
    details: '11 startups in renewable energy, sustainable materials, circular economy',
    featured: true,
  },
  {
    id: 'nigeria',
    country: 'Nigeria',
    lat: 9.0820,
    lng: 8.6753,
    event: 'International Delegation',
    date: '2025',
    details: 'Innovation ecosystem showcase',
    featured: false,
  },
  {
    id: 'thailand',
    country: 'Thailand',
    lat: 15.8700,
    lng: 100.9925,
    event: 'International Delegation',
    date: '2025',
    details: 'GEIP promotion',
    featured: false,
  },
  {
    id: 'philippines',
    country: 'Philippines',
    lat: 12.8797,
    lng: 121.7740,
    event: 'International Delegation',
    date: '2025',
    details: 'Strategic partnerships',
    featured: false,
  },
  {
    id: 'kenya',
    country: 'Kenya',
    lat: -0.0236,
    lng: 37.9062,
    event: 'Canada-Africa Summit',
    date: 'July 3, 2025',
    details: 'Trade, investment, collaboration discussions',
    featured: true,
  },
  {
    id: 'sierra-leone',
    country: 'Sierra Leone',
    lat: 8.4606,
    lng: -11.7799,
    event: 'Ministerial Delegation',
    date: 'September 19, 2025',
    details: 'Honourable Minister of Trade visit',
    featured: true,
  },
];

export const bramptonCoords = { lat: 43.7315, lng: -79.7624 };

export const cohortData = {
  winter2025: {
    name: 'Winter 2025',
    total: 15,
    phases: [
      { phase: 'Phase 1 (Virtual)', count: 4, industries: ['EdTech', 'AI'] },
      { phase: 'Phase 2 (In-Person)', count: 4, industries: ['HealthTech', 'SaaS'] },
      { phase: 'Phase 3 (Advanced)', count: 7, industries: ['CleanTech', 'FinTech'] },
    ],
  },
  spring2025: {
    name: 'Spring 2025',
    total: 12,
    phases: [
      { phase: 'Phase 1 (Virtual)', count: 5, industries: ['AI', 'EdTech'] },
      { phase: 'Phase 2 (In-Person)', count: 4, industries: ['CleanTech', 'D2C'] },
      { phase: 'Phase 3 (Advanced)', count: 3, industries: ['SaaS', 'HealthTech'] },
    ],
  },
  fall2025: {
    name: 'Fall 2025',
    total: 10,
    phases: [
      { phase: 'Phase 1 (Virtual)', count: 0, industries: [] },
      { phase: 'Phase 2 (In-Person)', count: 6, industries: ['AI', 'Social Impact'] },
      { phase: 'Phase 3 (Advanced)', count: 4, industries: ['FinTech', 'CleanTech'] },
    ],
  },
};

export const programInnovations = [
  {
    id: 'townhalls',
    title: 'Monthly Founder Townhalls',
    description: 'Cross-cohort networking. OKR presentations. Mentor feedback loops.',
    icon: 'users',
  },
  {
    id: 'surf',
    title: 'Weekly SURF Sessions',
    description: 'Stand-Up Rapid Fire tracking. Market validation progress. Accountability.',
    icon: 'zap',
  },
  {
    id: 'pitch',
    title: 'Group Pitch Feedback',
    description: 'Peer review. Storytelling refinement. Investor-ready pitches.',
    icon: 'mic',
  },
  {
    id: 'support',
    title: 'Personalized 1:1 Support',
    description: 'Tailored guidance. Business challenges. Growth opportunities.',
    icon: 'heart',
  },
];

export const digitalGrowthMetrics = [
  { id: 'social', label: 'Social Media Engagement', value: 653, suffix: '%', color: 'bhive-orange' },
  { id: 'website', label: 'Website Traffic', value: 77, suffix: '%', color: 'bhive-gold' },
  { id: 'instagram', label: 'Instagram Impressions', value: 410, suffix: '%', color: 'bhive-yellow' },
  { id: 'facebook', label: 'Facebook Impressions', value: 102, suffix: '%', color: 'bhive-gold' },
  { id: 'newusers', label: 'New Users', value: 5.7, suffix: '%', color: 'bhive-gold' },
];

export const altitudePartnership = {
  leads: 138,
  callsBooked: 69,
  callsCompleted: 48,
  leadToCallRate: 50,
  callCompletionRate: 70,
};

export const videoMetrics = {
  videos: 6,
  impressions: 191949,
  engagements: 14243,
};

export const timelineEvents = [
  {
    id: 'jan-10',
    month: 'January',
    day: 10,
    year: 2025,
    title: 'MP Ruby Sahota Visit',
    description: 'Met with founders, showcased programs',
    attendees: 'Councillor Gurpartap Singh Toor, Denise McClure',
    featured: false,
  },
  {
    id: 'feb-19',
    month: 'February',
    day: 19,
    year: 2025,
    title: 'Angel Investing 101',
    description: 'VC evaluation insights, term negotiation',
    attendees: 'Brampton Angels',
    featured: false,
  },
  {
    id: 'feb-28',
    month: 'February',
    day: 28,
    year: 2025,
    title: 'Innovation District Walking Tour',
    description: 'Fujitsu (Japan) representative, GEIP showcase',
    attendees: '',
    featured: false,
  },
  {
    id: 'apr-14',
    month: 'April',
    day: 14,
    year: 2025,
    title: 'Polish Green Tech Delegation',
    description: '11 startups: renewable energy, sustainable materials',
    attendees: 'City of Brampton Economic Development',
    featured: true,
  },
  {
    id: 'apr-17',
    month: 'April',
    day: 17,
    year: 2025,
    title: 'Indo Canada Chamber of Commerce Visit',
    description: 'Local business members, ecosystem overview',
    attendees: '',
    featured: false,
  },
  {
    id: 'jun-12',
    month: 'June',
    day: 12,
    year: 2025,
    title: 'BVZ Community Night: MedTech',
    description: 'Panel discussions, investor networking',
    attendees: '',
    featured: false,
  },
  {
    id: 'jun-25',
    month: 'June',
    day: 25,
    year: 2025,
    title: 'Invest Ontario Innovation District Tour',
    description: 'Regional advisors, strategic projects team',
    attendees: '',
    featured: false,
  },
  {
    id: 'jun-27',
    month: 'June',
    day: 27,
    year: 2025,
    title: 'Africanada Business Summit Tour',
    description: 'Human Squad, City of Brampton collaboration',
    attendees: '',
    featured: false,
  },
  {
    id: 'jul-3',
    month: 'July',
    day: 3,
    year: 2025,
    title: 'Canada-Africa Summit: Kenya Delegation',
    description: 'Trade, investment, collaboration discussions',
    attendees: '',
    featured: true,
  },
  {
    id: 'jul-22',
    month: 'July',
    day: 22,
    year: 2025,
    title: 'Punjab Chamber of Commerce Delegation',
    description: 'Brampton City Hall, startup showcase',
    attendees: '',
    featured: false,
  },
  {
    id: 'sep-10',
    month: 'September',
    day: 10,
    year: 2025,
    title: 'Strength Africa Delegation',
    description: 'Business and institutional leaders',
    attendees: '',
    featured: false,
  },
  {
    id: 'sep-11',
    month: 'September',
    day: 11,
    year: 2025,
    title: 'Brampton Venture Expo',
    description: 'AI, HR Tech, SaaS startups showcased',
    attendees: '',
    featured: true,
  },
  {
    id: 'sep-19',
    month: 'September',
    day: 19,
    year: 2025,
    title: 'Sierra Leone Ministerial Delegation',
    description: 'Honourable Minister of Trade visit',
    attendees: '',
    featured: true,
  },
  {
    id: 'oct-7',
    month: 'October',
    day: '7-9',
    year: 2025,
    title: 'Elevate Festival',
    description: 'P2 & P3 founders, global investor access',
    attendees: '',
    featured: true,
  },
  {
    id: 'oct-16',
    month: 'October',
    day: 16,
    year: 2025,
    title: 'Toronto Global Forum 2025',
    description: 'International conference, policy discussions',
    attendees: '',
    featured: false,
  },
  {
    id: 'nov-4',
    month: 'November',
    day: 4,
    year: 2025,
    title: 'Workforce Recharged Conference',
    description: 'Exhibitor booth, regional employer networking',
    attendees: '',
    featured: false,
  },
];

export const challenges = [
  {
    id: 'ircc',
    icon: 'alert-triangle',
    title: 'IRCC Cap on Startup Visa Program',
    details: ['Limited to 10 Letters of Support/year', 'Fully allocated by mid-year', 'Impact: Revenue, scale, recruitment'],
    response: 'Quality over quantity. Rigorous selection, focused support.',
  },
  {
    id: 'india',
    icon: 'globe',
    title: 'India-Canada Political Climate',
    details: ['Diplomatic tensions affect outreach', 'Key market disruption'],
    response: 'Market diversification. Latin America, Southeast Asia focus.',
  },
  {
    id: 'permits',
    icon: 'file-text',
    title: 'Work Permit Delays',
    details: ['Open Work Permit policy confusion', 'Founder commitment uncertainty'],
    response: 'Enhanced communication. Proactive founder support systems.',
  },
  {
    id: 'revenue',
    icon: 'dollar-sign',
    title: 'Revenue & Sustainability',
    details: ['SUV cap reduced projections', 'Future cohort planning affected'],
    response: 'FedDev application. Alternative funding exploration.',
  },
];

export const strategicPillars = [
  {
    id: 'pathways',
    title: 'Alternative Pathways',
    description: 'Explore support programs beyond the Startup Visa Program. Diversify immigration and business pathways for founders.',
    icon: 'route',
  },
  {
    id: 'investors',
    title: 'Investor Engagement',
    description: 'Increase local investor participation. Build sustainable funding networks for portfolio companies.',
    icon: 'trending-up',
  },
  {
    id: 'digital',
    title: 'Digital Scalability',
    description: 'Enhance hybrid and digital program delivery. Reach founders globally without geographic limitations.',
    icon: 'monitor',
  },
  {
    id: 'selection',
    title: 'Strategic Selection',
    description: 'Maintain rigorous due diligence standards. Focus resources on teams with highest impact potential.',
    icon: 'target',
  },
];

export const industryIcons: Record<string, string> = {
  'EdTech': 'graduation-cap',
  'HealthTech': 'heart-pulse',
  'CleanTech': 'leaf',
  'AI': 'brain',
  'SaaS': 'cloud',
  'FinTech': 'chart-line',
  'Social Impact': 'hands-helping',
  'D2C': 'shopping-bag',
};
