export interface SkillItem {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Tools' | 'Architecture' | 'APIs';
  proficiency?: number; // 0-100
  iconName?: string;
  badge?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'Multi-Tenant SaaS' | 'Enterprise' | 'Full Stack' | 'Backend API';
  icon: string;
  featured?: boolean;
  metrics?: string;
  demoUrl: string | null;
  githubUrl: string | null;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  location?: string;
  type?: string;
  description: string[];
  technologies: string[];
}

export interface HighlightItem {
  title: string;
  desc: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    middleName: string;
    lastName: string;
    role: string;
    headline: string;
    bioShort: string;
    bioLong: string[];
    email: string;
    phone: string;
    location: string;
    availability: string;
    yearsExperience: number;
    cvUrl: string;
    social: {
      github: string;
      linkedin: string;
      email: string;
      phone: string;
    };
    contactFormKey: string;
  };
  highlights: HighlightItem[];
  education: EducationItem[];
  skills: {
    category: string;
    items: SkillItem[];
  }[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  navigation: {
    name: string;
    href: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Toufiq Rehman Sayyed',
    firstName: 'Toufiq',
    middleName: 'Rehman',
    lastName: 'Sayyed',
    role: 'Full Stack Developer — React · Node.js · Laravel · TypeScript',
    headline: 'Multi-Tenant SaaS Architecture • High-Throughput APIs • Resilient Databases',
    bioShort:
      'Web and full-stack developer with over 5 years of experience delivering scalable web applications, high-throughput APIs, and modern multi-tenant SaaS platforms using Laravel, Node.js, and React.',
    bioLong: [
      'Over the past 5+ years in professional web development, I have worked across the full product lifecycle — from database schema design and server-side architecture to responsive, reactive frontends.',
      'My focus centers on delivering resilient multi-tenant SaaS products, cutting API response times by ~60% through targeted index tuning, and architecting role-based access control (RBAC).',
      'Comfortable owning features end-to-end: integrating third-party APIs (Google/Microsoft Workspace, payment gateways, messaging services), designing asynchronous queue pipelines, and shipping clean, maintainable user experiences.',
    ],
    email: 'saiyedtoufiq@gmail.com',
    phone: '+91 81285 07070',
    location: 'Surat, Gujarat, India (Open to Remote / Relocation)',
    availability: 'Open to Full-Time Roles & Relocation',
    yearsExperience: 5,
    cvUrl: '/Toufiq-Rehman-Sayyed-CV.pdf',
    social: {
      github: 'https://github.com/saiyedtoufiq',
      linkedin: 'https://www.linkedin.com/in/toufiq-saiyed',
      email: 'mailto:saiyedtoufiq@gmail.com',
      phone: 'tel:+918128507070',
    },
    contactFormKey: '2aba64ba-eb7c-4dea-bb40-86e764c8fb81',
  },

  highlights: [
    {
      title: 'Multi-Tenant SaaS',
      desc: 'Form-driven workflows, dynamic form builders & isolated tenant boundaries',
      icon: 'Server',
    },
    {
      title: '~60% Latency Reduction',
      desc: 'Database index tuning, query restructuring & multi-tier Redis caching',
      icon: 'Zap',
    },
    {
      title: 'Database Architecture',
      desc: 'Normalization, indexing, transactions, views, triggers & stored procedures',
      icon: 'Database',
    },
    {
      title: 'Ecosystem Integrations',
      desc: 'Google & Microsoft Workspace, Stripe (Apple Pay), PayPal, Twilio & FCM',
      icon: 'Code',
    },
  ],

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      field: 'Computer Science',
      institution: 'Bhagwan Mahavir College of Management',
      location: 'Surat, India',
      duration: 'Jun 2019 – May 2021',
      grade: 'CGPA: 8.66 / 10',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      field: 'Computer Science',
      institution: 'C B Patel Computer College',
      location: 'Surat, India',
      duration: 'Jun 2015 – Feb 2018',
      grade: 'CGPA: 7.17 / 10',
    },
  ],

  skills: [
    {
      category: 'Core Stack',
      items: [
        { name: 'Laravel', category: 'Backend', proficiency: 96, badge: 'Expert' },
        { name: 'Node.js', category: 'Backend', proficiency: 90, badge: 'Full Stack' },
        { name: 'React.js', category: 'Frontend', proficiency: 94, badge: 'Core UI' },
        { name: 'TypeScript', category: 'Frontend', proficiency: 92, badge: 'Strong' },
        { name: 'PHP', category: 'Backend', proficiency: 95, badge: 'Core' },
      ],
    },
    {
      category: 'Databases & Caching',
      items: [
        { name: 'MySQL', category: 'Database', proficiency: 95, badge: 'Relational' },
        { name: 'PostgreSQL', category: 'Database', proficiency: 88, badge: 'Relational' },
        { name: 'Redis', category: 'Database', proficiency: 92, badge: 'In-Memory' },
        { name: 'Database & Query Tuning', category: 'Database', proficiency: 95, badge: '~60% Faster' },
      ],
    },
    {
      category: 'Architecture',
      items: [
        { name: 'Multi-Tenant SaaS', category: 'Architecture', proficiency: 95, badge: 'Core Focus' },
        { name: 'RESTful APIs', category: 'Architecture', proficiency: 96, badge: 'Scalable' },
        { name: 'RBAC', category: 'Architecture', proficiency: 96, badge: 'Security' },
        { name: 'Queues & Background Workers', category: 'Architecture', proficiency: 93, badge: 'Async Scale' },
      ],
    },
    {
      category: 'Third-Party Integrations',
      items: [
        { name: 'Payment Gateways', category: 'APIs', proficiency: 94, badge: 'Stripe & PayPal' },
        { name: 'Calendar & Workspace APIs', category: 'APIs', proficiency: 92, badge: 'Google & MS' },
        { name: 'Messaging & Push Notifications', category: 'APIs', proficiency: 90, badge: 'Twilio & FCM' },
        { name: 'Webhooks & Event Pipelines', category: 'APIs', proficiency: 92, badge: 'Real-time' },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Order Management System (OrdGrow)',
      subtitle: 'Multi-Tenant SaaS with Dynamic Form Builder',
      description:
        'Multi-tenant, multi-module platform for configurable service bookings, featuring a dynamic form builder that generates order fields from admin-created service forms and customizable business workflows.',
      longDescription:
        'Architected end-to-end multi-tenant SaaS product with React on the frontend and Laravel on the backend. Designed dynamic form builder engine, queue-based background processing, caching strategies, and normalized MySQL/PostgreSQL schemas.',
      tags: ['React.js', 'Laravel', 'Multi-Tenant SaaS', 'MySQL', 'Dynamic Form Builder', 'Redis Queues'],
      category: 'Multi-Tenant SaaS',
      icon: '🏢',
      featured: true,
      metrics: 'Admin-driven configurable service forms & workflows',
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 2,
      title: 'Workplace & Service Management (Gfacility)',
      subtitle: 'Multi-Tenant Enterprise SaaS Platform',
      description:
        'Multi-module platform for corporate service bookings, room scheduling, and helpdesk ticketing. Engineered with RBAC, queue-based asynchronous workflows, and deep Google & Microsoft Workspace calendar integration.',
      longDescription:
        'Designed and shipped multi-tenant backend architecture with automated calendar sync, smart task routing, webhook consumers for platform events, and automated reminder queues.',
      tags: ['Laravel', 'Angular', 'Google Workspace API', 'Microsoft Calendar API', 'RBAC', 'Redis'],
      category: 'Multi-Tenant SaaS',
      icon: '🗓️',
      featured: true,
      metrics: 'Automated 2-way Google & Microsoft Calendar routing',
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 3,
      title: 'Sports Life Success (SLS)',
      subtitle: 'Athletics Platform & Automated Certification',
      description:
        'Production platform managing athlete rosters, tournaments, and match results. Built role-based access control (RBAC), structured RESTful APIs, and an automated certificate-generation pipeline upon game completion.',
      longDescription:
        'Engineered granular authorization rules allowing players, coaches, and administrators to interact strictly according to privileges, plus automated PDF certificate generation and tournament tracking.',
      tags: ['Laravel', 'RESTful APIs', 'RBAC', 'Automated Certificate Generator', 'MySQL'],
      category: 'Full Stack',
      icon: '🏆',
      featured: true,
      metrics: 'Instant automated certificate generation on game finish',
      demoUrl: 'https://sportlifesuccess.com',
      githubUrl: null,
    },
    {
      id: 4,
      title: 'I PROMISE — Social Promise Tracking App',
      subtitle: 'Mobile RESTful Backend & Content Moderation',
      description:
        'Versioned REST API for iOS and Android mobile clients with JWT authentication, Firebase Cloud Messaging (FCM) push notifications, and a full-featured admin portal for user moderation and analytics.',
      longDescription:
        'Built secure mobile endpoints following RESTful standards, integrated push notification queues, and created moderation telemetry with exportable analytics reporting.',
      tags: ['Laravel / Node.js', 'JWT Auth', 'Firebase FCM', 'RESTful APIs', 'Analytics'],
      category: 'Backend API',
      icon: '🤝',
      featured: true,
      metrics: 'Real-time FCM push dispatch & exportable telemetry',
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 5,
      title: 'Skooly — School & University ERP',
      subtitle: 'Comprehensive Campus Management Suite',
      description:
        'Comprehensive educational ERP managing student/teacher/staff lifecycles, attendance, courses, and accounting/expenses. Introduced a QR-code-based contactless attendance system.',
      longDescription:
        'Automated academic workflows across admissions, fee collections, timetable scheduling, and grade transcripts, reducing manual attendance errors through instant QR code scanning.',
      tags: ['PHP / CodeIgniter', 'QR Code Attendance', 'Accounting & Fee Engine', 'MySQL', 'Bootstrap'],
      category: 'Enterprise',
      icon: '🎓',
      featured: false,
      metrics: 'QR-code contactless attendance reduced manual errors',
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 6,
      title: 'Agile Project Management Tool',
      subtitle: 'Sprint Analytics & Cron Bulk Email Campaign Engine',
      description:
        'Full-featured agile collaboration suite with sprint boards, user story estimation, and cross-team task management, paired with a cron-driven bulk email marketing engine with click-through and opt-out tracking.',
      longDescription:
        'Engineered sprint burndown analytics, automated task state transitions, and a resilient cron worker pipeline delivering bulk marketing campaigns with telemetry tracking.',
      tags: ['Laravel', 'Sprint Boards', 'Cron Asynchronous Jobs', 'Email Analytics', 'Redis'],
      category: 'Full Stack',
      icon: '⚡',
      featured: false,
      metrics: 'Bulk email campaign engine with open & click tracking',
      demoUrl: null,
      githubUrl: null,
    },
  ],

  experiences: [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Deep Technologies Pvt Ltd',
      duration: 'May 2026 – Present',
      location: 'Surat, India',
      type: 'Full-time',
      description: [
        'Build multi-tenant SaaS products end-to-end with React on the frontend and Laravel on the backend, owning schema design, API development, and UI implementation.',
        'Deliver OrdGrow, a dynamic, form-driven order management platform with configurable, business-specific workflows and an admin-driven form builder.',
        'Implement queue-based background processing and caching strategies to keep multi-tenant workloads performant at scale.',
        'Design MySQL/PostgreSQL schemas with rigorous attention to normalization, indexing, and query optimization for new product modules.',
      ],
      technologies: ['React.js', 'Laravel', 'TypeScript', 'Multi-Tenant SaaS', 'MySQL', 'PostgreSQL', 'Redis', 'Queues'],
    },
    {
      id: 2,
      role: 'Backend Developer',
      company: 'Sourcecube Technologies Pvt Ltd',
      duration: 'Nov 2023 – Jan 2026',
      location: 'Surat, India',
      type: 'Full-time',
      description: [
        'Designed and built 30+ RESTful API endpoints on a multi-tenant Laravel platform, consumed by Angular, iOS, and Android clients.',
        'Reduced average API response time by ~60% through database index tuning, query restructuring, and Redis caching.',
        'Integrated Google Calendar and Microsoft Calendar APIs with automated reminders and smart task routing.',
        'Built Laravel queue- and event-driven pipelines for asynchronous background processing under peak load, plus webhook consumers for third-party platform events.',
        'Added multi-language support across the platform and tuned MySQL schemas (views, transactions, indexing) for heavy reporting workloads.',
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Redis', 'RESTful APIs', 'Google & MS Workspace APIs', 'Webhooks', 'Queue Workers'],
    },
    {
      id: 3,
      role: 'Web Developer',
      company: 'Potenza Global Solutions Pvt Ltd',
      duration: 'Jan 2021 – Oct 2023',
      location: 'Surat, India',
      type: 'Full-time',
      description: [
        'Built and maintained full-stack features on PHP (Laravel & CodeIgniter 3/4) backends with responsive frontends, including a Laravel service with JWT authentication, file management, and scheduled commands.',
        'Designed REST APIs for mobile-backend data exchange following RESTful security best practices; implemented RBAC via CodeIgniter controller filters.',
        'Integrated Stripe (with Apple Pay) and PayPal payment gateways, Twilio SMS, Mailchimp, and push notification services across multiple client products.',
        'Developed custom WordPress themes and plugins (Hooks, Custom Post Types, ACF, WooCommerce API, Elementor) for client marketing and e-commerce sites.',
        'Refactored legacy codebases to systematically eliminate technical debt across production systems.',
      ],
      technologies: ['PHP', 'Laravel', 'CodeIgniter 3/4', 'WordPress', 'Stripe & PayPal', 'Twilio SMS', 'JWT Auth', 'MySQL'],
    },
  ],

  navigation: [
    { name: 'Intro', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
};
