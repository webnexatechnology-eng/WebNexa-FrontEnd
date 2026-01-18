export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  outcome: string;
  technologies: string[];
  duration: string;
  client: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Frontend & Backend',
    shortDescription: 'A fully responsive e-commerce solution with real-time inventory management and seamless checkout experience.',
    fullDescription: 'We developed a comprehensive e-commerce platform that revolutionized online shopping for our client. The platform features a modern, intuitive interface built with React and TypeScript, coupled with a robust Node.js backend infrastructure. Our solution included advanced features like real-time inventory tracking, personalized recommendations, and a streamlined checkout process that significantly improved conversion rates.',
    image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3Njg0NjUwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    outcome: '150% increase in online sales',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'Stripe'],
    duration: '6 months',
    client: 'Retail Excellence Corp',
    challenges: [
      'Managing high traffic during peak shopping seasons',
      'Implementing real-time inventory synchronization across multiple warehouses',
      'Ensuring PCI DSS compliance for payment processing',
      'Creating a personalized shopping experience for diverse user segments'
    ],
    solutions: [
      'Implemented microservices architecture with load balancing for scalability',
      'Developed real-time WebSocket connections for inventory updates',
      'Integrated Stripe with comprehensive security measures',
      'Built ML-powered recommendation engine using customer behavior data'
    ],
    results: [
      '150% increase in online sales within first year',
      '40% reduction in cart abandonment rate',
      '99.9% uptime during Black Friday sales',
      '60% improvement in page load times'
    ]
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking App',
    category: 'iOS & Android Development',
    shortDescription: 'Secure mobile and tablet banking application with biometric authentication, real-time transactions, and intuitive UX.',
    fullDescription: 'We created a cutting-edge mobile banking application available on both iOS and Android platforms. The app provides users with complete control over their finances through an elegant, easy-to-use interface. Security was our top priority, implementing biometric authentication, end-to-end encryption, and advanced fraud detection. The application supports real-time transfers, bill payments, and personalized financial insights.',
    image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzY4NDc5OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    outcome: '500K+ downloads in 6 months',
    technologies: ['React Native', 'Swift', 'Kotlin', 'Node.js', 'PostgreSQL', 'AWS'],
    duration: '8 months',
    client: 'SecureBank Financial',
    challenges: [
      'Meeting strict financial industry security standards',
      'Ensuring consistent experience across iOS and Android',
      'Implementing offline functionality for critical features',
      'Managing real-time transaction processing'
    ],
    solutions: [
      'Implemented multi-layer security including biometric auth and device fingerprinting',
      'Used React Native with native modules for platform-specific features',
      'Developed local database with smart sync mechanism',
      'Built event-driven architecture for instant transaction updates'
    ],
    results: [
      '500K+ downloads within 6 months of launch',
      '4.8 star rating on both App Store and Play Store',
      'Zero security breaches since launch',
      '80% of customers now prefer mobile banking over web'
    ]
  },
  {
    id: 'social-media-campaign',
    title: 'Social Media Campaign',
    category: 'SMO & Marketing',
    shortDescription: 'Comprehensive social media optimization strategy that boosted brand visibility and engagement across multiple platforms.',
    fullDescription: "We executed a comprehensive social media marketing campaign that transformed our client's online presence. Our strategy included content creation, community management, influencer partnerships, and data-driven advertising across Facebook, Instagram, Twitter, LinkedIn, and TikTok. We developed a unique brand voice and visual identity that resonated with the target audience, creating viral content that significantly increased engagement and brand awareness.",
    image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3Njg0MjUxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    outcome: '300% growth in social engagement',
    technologies: ['Hootsuite', 'Google Analytics', 'Facebook Ads Manager', 'Canva', 'Buffer'],
    duration: '12 months',
    client: 'BrandBoost Marketing',
    challenges: [
      'Low initial brand awareness in competitive market',
      'Limited budget for paid advertising',
      'Difficulty in creating viral content consistently',
      'Managing multiple social platforms effectively'
    ],
    solutions: [
      'Developed data-driven content strategy based on audience insights',
      'Created micro-influencer partnership program for authentic engagement',
      'Implemented A/B testing for all content to optimize performance',
      'Built centralized social media management system'
    ],
    results: [
      '300% increase in overall social media engagement',
      'Follower growth from 5K to 150K across all platforms',
      'Generated 500+ user-generated content pieces',
      '200% increase in website traffic from social channels'
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}