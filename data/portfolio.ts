export interface SkillItem {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Tools' | 'Architecture' | 'APIs';
  proficiency?: number; // 0-100
  iconName?: string;
  badge?: string;
}

export interface ProjectGalleryItem {
  id: string;
  title: string;
  caption: string;
  tag: 'Dashboard UI' | 'Workflow Engine' | 'Architecture' | 'Analytics' | 'Mobile & API';
  imageUrl: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: number;
  slug: string;
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
  role?: string;
  timeline?: string;
  status?: string;
  challenge?: string;
  solution?: string;
  keyFeatures?: string[];
  architectureHighlights?: {
    title: string;
    detail: string;
  }[];
  stats?: {
    label: string;
    value: string;
  }[];
  gallery: ProjectGalleryItem[];
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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

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
    cvUrl: `${basePath}/Toufiq-Rehman-Sayyed-CV.pdf`,
    social: {
      github: 'https://github.com/saiyedtoufiq',
      linkedin: 'https://www.linkedin.com/in/toufiq-saiyed',
      email: 'mailto:saiyedtoufiq@gmail.com',
      phone: 'tel:+918128507070',
    },
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
      slug: 'ordgrow-order-management',
      title: 'Order Management System (OrdGrow)',
      subtitle: 'Multi-Tenant SaaS with Dynamic Form Builder',
      description:
        'Multi-tenant, multi-module platform for configurable service bookings, featuring a dynamic form builder that generates order fields from admin-created service forms and customizable business workflows.',
      longDescription:
        'Architected an end-to-end multi-tenant SaaS product with React on the frontend and Laravel on the backend. Designed a schema-driven dynamic form builder engine that enables tenant administrators to construct custom service intake forms, conditional pricing rules, and multi-stage order approval workflows without code deployments. Backed by Redis queue workers, multi-tier caching strategies, and strictly isolated MySQL/PostgreSQL tenant schemas.',
      tags: ['React.js', 'Laravel', 'Multi-Tenant SaaS', 'MySQL', 'Dynamic Form Builder', 'Redis Queues'],
      category: 'Multi-Tenant SaaS',
      icon: '🏢',
      featured: true,
      metrics: 'Admin-driven configurable service forms & workflows',
      demoUrl: null,
      githubUrl: null,
      role: 'Lead Full Stack Architect',
      timeline: '2026 – Present',
      status: 'Production SaaS',
      challenge:
        'Enterprise tenants required radically different intake forms, custom pricing formulas, and multi-step approval pipelines for their service bookings without compromising multi-tenant query speed or data isolation.',
      solution:
        'Engineered a JSON-schema dynamic form builder in React paired with a Laravel validation and workflow execution engine, backed by composite B-tree indexes and asynchronous Redis job queues.',
      keyFeatures: [
        'Drag-and-drop Dynamic Form Builder with conditional field visibility and custom validation rules',
        'Strict multi-tenant data isolation with tenant-scoped query middleware and RBAC policies',
        'Configurable order lifecycle states with automated webhook and email triggers',
        'Real-time order pipeline dashboard with Redis-cached KPI aggregations',
        'Asynchronous invoice and receipt generation via background queue workers',
        'Role-based portals for Super Admins, Tenant Managers, Staff Operators, and End Customers',
      ],
      architectureHighlights: [
        {
          title: 'Dynamic Schema Engine',
          detail: 'Compiles admin-configured form structures into runtime React components and server-side validation rulesets.',
        },
        {
          title: 'Multi-Tenant Isolation',
          detail: 'Automated tenant context resolution ensuring zero cross-tenant data leakage across API and queue workers.',
        },
        {
          title: 'Queue-Driven Workflows',
          detail: 'Offloads notifications, third-party webhooks, and document generation to Laravel Horizon workers.',
        },
        {
          title: 'Sub-50ms Query Tuning',
          detail: 'Composite indexing and tag-based Redis cache invalidation keep complex order filtering instantaneous.',
        },
      ],
      stats: [
        { label: 'Architecture', value: 'Multi-Tenant SaaS' },
        { label: 'Form Engine', value: '100% Dynamic' },
        { label: 'Avg API Response', value: '< 38ms' },
        { label: 'Queue Reliability', value: '99.98% SLA' },
      ],
      gallery: [
        {
          id: 'ordgrow-1',
          title: 'Multi-Tenant Executive Control Plane',
          caption: 'Real-time overview of active tenant workspaces, order velocity, cache hit ratios, and worker pool utilization.',
          tag: 'Dashboard UI',
          imageUrl: `${basePath}/projects/1/dashboard.png`,
          featured: true,
        },
        {
          id: 'ordgrow-2',
          title: 'Visual Dynamic Form & Workflow Builder',
          caption: 'Drag-and-drop schema designer allowing tenant admins to configure custom booking steps, payment blocks, and conditional rules.',
          tag: 'Workflow Engine',
          imageUrl: `${basePath}/projects/1/formbuilder.png`,
        },
        {
          id: 'ordgrow-3',
          title: 'Multi-Tenant System Topology',
          caption: 'End-to-end request lifecycle from React SPA through Tenant Context Middleware to isolated MySQL/PostgreSQL storage and Redis queues.',
          tag: 'Architecture',
          imageUrl: `${basePath}/projects/gallery-architecture.svg`,
        },
        {
          id: 'ordgrow-4',
          title: 'Database Index & Latency Telemetry',
          caption: 'Benchmark analytics illustrating ~60% latency reduction via composite indexing and Redis cache pre-warming.',
          tag: 'Analytics',
          imageUrl: `${basePath}/projects/gallery-analytics.svg`,
        },
        {
          id: 'ordgrow-5',
          title: 'RESTful API Gateway & RBAC Matrix',
          caption: 'Versioned API route diagnostics, Sanctum authentication guards, and granular role-based access enforcement.',
          tag: 'Mobile & API',
          imageUrl: `${basePath}/projects/gallery-api.svg`,
        },
        {
          id: 'ordgrow-6',
          title: 'Responsive Client Booking Portal',
          caption: 'Mobile-optimized customer booking interface with real-time order status tracking and instant push alerts.',
          tag: 'Mobile & API',
          imageUrl: `${basePath}/projects/gallery-mobile.svg`,
        },
      ],
    },
    {
      id: 2,
      slug: 'gfacility-workplace-management',
      title: 'Workplace & Service Management (Gfacility)',
      subtitle: 'Multi-Tenant Enterprise SaaS Platform',
      description:
        'Multi-module platform for corporate service bookings, room scheduling, and helpdesk ticketing. Engineered with RBAC, queue-based asynchronous workflows, and deep Google & Microsoft Workspace calendar integration.',
      longDescription:
        'Designed and shipped a multi-tenant enterprise backend architecture powering corporate facility operations, meeting room reservations, visitor management, and helpdesk ticketing. Integrated bidirectional Google Calendar and Microsoft Outlook/365 Calendar synchronization with webhook consumers, automated conflict resolution, smart task routing, and multi-language localization.',
      tags: ['Laravel', 'Angular', 'Google Workspace API', 'Microsoft Calendar API', 'RBAC', 'Redis'],
      category: 'Multi-Tenant SaaS',
      icon: '🗓️',
      featured: true,
      metrics: 'Automated 2-way Google & Microsoft Calendar routing',
      demoUrl: null,
      githubUrl: null,
      role: 'Senior Backend Developer',
      timeline: 'Nov 2023 – Jan 2026',
      status: 'Enterprise Production',
      challenge:
        'Synchronizing thousands of concurrent corporate room bookings across Google Workspace and Microsoft 365 calendars in real time while preventing double-bookings and keeping API latency low.',
      solution:
        'Built an event-driven webhook consumer pipeline with Redis distributed locks, OAuth2 token auto-rotation, and composite database indexes that cut API response times by ~60%.',
      keyFeatures: [
        'Bidirectional real-time calendar sync with Google Workspace and Microsoft Graph APIs',
        'Automated room conflict detection and buffer-time enforcement via Redis locks',
        'Multi-module helpdesk ticketing with SLA escalation and smart technician routing',
        '30+ versioned RESTful API endpoints consumed by Angular web and iOS/Android clients',
        'Multi-language localization and heavy reporting views tuned for enterprise audits',
        'Automated reminder queues via email and push notifications prior to scheduled bookings',
      ],
      architectureHighlights: [
        {
          title: '2-Way Calendar Sync Engine',
          detail: 'Consumes push webhooks from Google and Microsoft Graph to reconcile room availability in sub-second intervals.',
        },
        {
          title: '~60% API Latency Reduction',
          detail: 'Restructured heavy reporting queries, introduced MySQL views, and layered Redis caching for high-traffic endpoints.',
        },
        {
          title: 'Resilient Queue Pipelines',
          detail: 'Asynchronous job workers process calendar invites, recurring series updates, and SLA notifications under peak load.',
        },
        {
          title: 'Granular Enterprise RBAC',
          detail: 'Scoped permissions across facility managers, reception desks, maintenance teams, and corporate employees.',
        },
      ],
      stats: [
        { label: 'API Endpoints', value: '30+ RESTful' },
        { label: 'Latency Cut', value: '~60% Faster' },
        { label: 'Calendar Sync', value: 'Google & MS 365' },
        { label: 'Clients Served', value: 'Web, iOS, Android' },
      ],
      gallery: [
        {
          id: 'gfacility-1',
          title: 'Calendar Sync & Booking Workflow Engine',
          caption: 'Automated 2-way synchronization flow between corporate room schedules, Google Workspace, and Microsoft 365 calendars.',
          tag: 'Workflow Engine',
          imageUrl: `${basePath}/projects/gallery-builder.svg`,
          featured: true,
        },
        {
          id: 'gfacility-2',
          title: 'Facility Operations & Resource Dashboard',
          caption: 'Centralized control plane monitoring active room utilization, helpdesk SLA queues, and multi-tenant workspace health.',
          tag: 'Dashboard UI',
          imageUrl: `${basePath}/projects/gallery-dashboard.svg`,
        },
        {
          id: 'gfacility-3',
          title: 'Query Optimization & ~60% Latency Reduction',
          caption: 'Telemetry comparison before and after composite index tuning and Redis caching across 450,000+ booking records.',
          tag: 'Analytics',
          imageUrl: `${basePath}/projects/gallery-analytics.svg`,
        },
        {
          id: 'gfacility-4',
          title: 'Enterprise Multi-Tenant Topology',
          caption: 'High-availability architecture connecting Angular and mobile clients to Laravel REST APIs and webhook workers.',
          tag: 'Architecture',
          imageUrl: `${basePath}/projects/gallery-architecture.svg`,
        },
        {
          id: 'gfacility-5',
          title: 'Mobile Employee & Visitor Companion',
          caption: 'On-the-go room reservation, QR check-in, and real-time push reminders for corporate employees.',
          tag: 'Mobile & API',
          imageUrl: `${basePath}/projects/gallery-mobile.svg`,
        },
        {
          id: 'gfacility-6',
          title: 'API Route & RBAC Diagnostics',
          caption: 'Protected REST endpoints with OAuth2 token middleware, rate limiting, and tenant-scoped policy checks.',
          tag: 'Mobile & API',
          imageUrl: `${basePath}/projects/gallery-api.svg`,
        },
      ],
    },
    {
      id: 3,
      slug: 'sports-life-success',
      title: 'Sports Life Success (SLS)',
      subtitle: 'Athletics Platform & Automated Certification',
      description:
        'Production platform managing athlete rosters, tournaments, and match results. Built role-based access control (RBAC), structured RESTful APIs, and an automated certificate-generation pipeline upon game completion.',
      longDescription:
        'Engineered a full-stack athletics and tournament management platform that streamlines player registration, team rosters, live match scoring, and post-game achievement verification. Designed granular RBAC policies so athletes, coaches, referees, and tournament directors interact strictly within their privilege boundaries, culminating in an automated PDF certificate generation pipeline triggered immediately upon match completion.',
      tags: ['Laravel', 'RESTful APIs', 'RBAC', 'Automated Certificate Generator', 'MySQL'],
      category: 'Full Stack',
      icon: '🏆',
      featured: true,
      metrics: 'Instant automated certificate generation on game finish',
      demoUrl: 'https://sportlifesuccess.com',
      githubUrl: null,
      role: 'Full Stack Developer',
      timeline: 'Production Release',
      status: 'Live Platform',
      challenge:
        'Tournament organizers faced hours of manual data entry and delayed certificate distribution after matches, alongside complex permission boundaries between coaches, players, and officials.',
      solution:
        'Built an event-driven tournament scoring engine with strict RBAC middleware that automatically renders, signs, and dispatches high-resolution PDF certificates the moment a match is finalized.',
      keyFeatures: [
        'Instant automated PDF certificate generation upon match and tournament completion',
        'Role-Based Access Control (RBAC) tailored for Athletes, Coaches, Officials, and Admins',
        'Live tournament brackets, team roster management, and player performance stats',
        'Structured RESTful APIs supporting web dashboards and mobile scorekeepers',
        'Automated email notifications and downloadable digital achievement portfolios',
        'High-concurrency MySQL schema optimized for tournament leaderboards',
      ],
      architectureHighlights: [
        {
          title: 'Automated PDF Pipeline',
          detail: 'Event listeners trigger background PDF rendering with custom typography, verification IDs, and instant athlete delivery.',
        },
        {
          title: 'Multi-Role RBAC Guard',
          detail: 'Strict controller and route policies separating coach roster edits from official match verification.',
        },
        {
          title: 'Leaderboard Indexing',
          detail: 'Optimized relational queries for real-time standings, win/loss ratios, and seasonal player rankings.',
        },
        {
          title: 'RESTful Service Layer',
          detail: 'Clean API separation enabling seamless frontend updates and third-party score integrations.',
        },
      ],
      stats: [
        { label: 'Certificate Gen', value: '< 1.2s Auto' },
        { label: 'Access Tiers', value: '4 RBAC Roles' },
        { label: 'Platform Status', value: 'Live in Prod' },
        { label: 'Data Integrity', value: 'ACID Verified' },
      ],
      gallery: [
        {
          id: 'sls-1',
          title: 'Tournament & Roster Management Dashboard',
          caption: 'Unified athletics command center tracking active tournaments, team rosters, and certificate dispatch queues.',
          tag: 'Dashboard UI',
          imageUrl: `${basePath}/projects/gallery-dashboard.svg`,
          featured: true,
        },
        {
          id: 'sls-2',
          title: 'Automated Certificate Generation Pipeline',
          caption: 'Event-driven workflow that validates final match scores and generates verifiable PDF certificates for athletes.',
          tag: 'Workflow Engine',
          imageUrl: `${basePath}/projects/gallery-builder.svg`,
        },
        {
          id: 'sls-3',
          title: 'RBAC Policy Matrix & API Diagnostics',
          caption: 'Granular role enforcement across Super Admins, Tournament Directors, Coaches, and Athletes.',
          tag: 'Mobile & API',
          imageUrl: `${basePath}/projects/gallery-api.svg`,
        },
        {
          id: 'sls-4',
          title: 'Athlete Mobile Profile & Instant PDF Download',
          caption: 'Mobile-friendly athlete view providing instant access to verified match results and downloadable certificates.',
          tag: 'Mobile & API',
          imageUrl: `${basePath}/projects/gallery-mobile.svg`,
        },
        {
          id: 'sls-5',
          title: 'Leaderboard & Match Telemetry',
          caption: 'Performance metrics and optimized query execution for live seasonal standings.',
          tag: 'Analytics',
          imageUrl: `${basePath}/projects/gallery-analytics.svg`,
        },
      ],
    },
    {
      id: 4,
      slug: 'i-promise-social-tracking',
      title: 'I PROMISE — Social Promise Tracking App',
      subtitle: 'Mobile RESTful Backend & Content Moderation',
      description:
        'Versioned REST API for iOS and Android mobile clients with JWT authentication, Firebase Cloud Messaging (FCM) push notifications, and a full-featured admin portal for user moderation and analytics.',
      longDescription:
        'Architected the mobile backend and administration suite for a social accountability application across iOS and Android. Implemented stateless JWT authentication with token rotation, real-time Firebase Cloud Messaging (FCM) push notification pipelines, social feed pagination, and a comprehensive web admin portal for content moderation and exportable user telemetry.',
      tags: ['Laravel / Node.js', 'JWT Auth', 'Firebase FCM', 'RESTful APIs', 'Analytics'],
      category: 'Backend API',
      icon: '🤝',
      featured: true,
      metrics: 'Real-time FCM push dispatch & exportable telemetry',
      demoUrl: null,
      githubUrl: null,
      role: 'Backend & API Architect',
      timeline: 'Production Release',
      status: 'iOS & Android Backend',
      challenge:
        'Delivering low-latency social feed updates and instant push notifications across thousands of iOS and Android devices while giving moderators real-time control over user-generated content.',
      solution:
        'Engineered versioned RESTful APIs secured with JWT authentication, asynchronous FCM push dispatch queues, and a reactive moderation dashboard with CSV/PDF analytics exports.',
      keyFeatures: [
        'Stateless JWT authentication with secure refresh token rotation for iOS and Android',
        'Asynchronous Firebase Cloud Messaging (FCM) push notification worker pipeline',
        'Cursor-paginated social promise feeds, milestone streaks, and peer accountability nudges',
        'Full-featured Admin Moderation Portal with user flagging, audit logs, and ban controls',
        'Exportable engagement telemetry and cohort retention reports',
        'Rate-limited REST API endpoints with standardized JSON envelope responses',
      ],
      architectureHighlights: [
        {
          title: 'FCM Push Dispatcher',
          detail: 'Batches and dispatches real-time mobile notifications via background workers with automatic invalid-token pruning.',
        },
        {
          title: 'JWT Security Layer',
          detail: 'Short-lived access tokens paired with encrypted refresh tokens and device-level session revocation.',
        },
        {
          title: 'Moderation Telemetry',
          detail: 'Real-time flagging queues and administrative override actions backed by immutable audit logs.',
        },
        {
          title: 'High-Speed Feed Queries',
          detail: 'Indexed cursor pagination ensuring consistent sub-40ms response times as social graphs scale.',
        },
      ],
      stats: [
        { label: 'Push Delivery', value: '99.8% via FCM' },
        { label: 'Auth Protocol', value: 'Stateless JWT' },
        { label: 'Mobile Clients', value: 'iOS & Android' },
        { label: 'Feed Latency', value: '< 35ms Avg' },
      ],
      gallery: [
        {
          id: 'promise-1',
          title: 'iOS & Android Client + FCM Push Engine',
          caption: 'Mobile promise tracking interface paired with real-time Firebase Cloud Messaging payload telemetry.',
          tag: 'Mobile & API',
          imageUrl: `${basePath}/projects/gallery-mobile.svg`,
          featured: true,
        },
        {
          id: 'promise-2',
          title: 'RESTful API & JWT Security Diagnostics',
          caption: 'Versioned mobile API routes protected by JWT guards, throttling middleware, and role-scoped moderation policies.',
          tag: 'Mobile & API',
          imageUrl: `${basePath}/projects/gallery-api.svg`,
        },
        {
          id: 'promise-3',
          title: 'Admin Moderation & Telemetry Dashboard',
          caption: 'Web control plane for reviewing flagged content, monitoring active mobile sessions, and exporting analytics.',
          tag: 'Dashboard UI',
          imageUrl: `${basePath}/projects/gallery-dashboard.svg`,
        },
        {
          id: 'promise-4',
          title: 'Mobile Backend System Architecture',
          caption: 'End-to-end flow connecting native mobile clients to the API gateway, Redis push queues, and relational storage.',
          tag: 'Architecture',
          imageUrl: `${basePath}/projects/gallery-architecture.svg`,
        },
        {
          id: 'promise-5',
          title: 'Engagement & Notification Analytics',
          caption: 'Real-time delivery benchmarks and query performance metrics under peak mobile traffic.',
          tag: 'Analytics',
          imageUrl: `${basePath}/projects/gallery-analytics.svg`,
        },
      ],
    },
    {
      id: 5,
      slug: 'skooly-campus-erp',
      title: 'Skooly — School & University ERP',
      subtitle: 'Comprehensive Campus Management Suite',
      description:
        'Comprehensive educational ERP managing student/teacher/staff lifecycles, attendance, courses, and accounting/expenses. Introduced a QR-code-based contactless attendance system.',
      longDescription:
        'Developed a multi-role educational Enterprise Resource Planning (ERP) platform covering the complete academic lifecycle — from student admissions, course scheduling, and examination transcripts to fee accounting, payroll, and institutional expense tracking. Spearheaded a contactless QR-code attendance module that eliminated manual roll-call bottlenecks and synced instant attendance alerts to parents.',
      tags: ['PHP / CodeIgniter', 'QR Code Attendance', 'Accounting & Fee Engine', 'MySQL', 'Bootstrap'],
      category: 'Enterprise',
      icon: '🎓',
      featured: false,
      metrics: 'QR-code contactless attendance reduced manual errors',
      demoUrl: null,
      githubUrl: null,
      role: 'Full Stack Web Developer',
      timeline: 'Enterprise ERP Deployment',
      status: 'Production ERP',
      challenge:
        'Educational institutions struggled with fragmented spreadsheets for fee accounting and slow, error-prone manual attendance tracking across hundreds of daily classroom sessions.',
      solution:
        'Unified academic, financial, and HR workflows into a single RBAC-governed ERP and introduced instant QR-code badge scanning with automated parent notifications.',
      keyFeatures: [
        'Contactless QR-Code Attendance System for students, faculty, and campus staff',
        'End-to-end Fee Collection, Invoicing, Ledger Accounting, and Expense Management',
        'Multi-role portals for Administrators, Teachers, Accountants, Students, and Parents',
        'Automated timetable generation, exam grading, and printable report card transcripts',
        'Controller-filter RBAC security ensuring strict departmental data boundaries',
        'Bulk CSV data imports and financial audit reporting exports',
      ],
      architectureHighlights: [
        {
          title: 'QR Attendance Verification',
          detail: 'Cryptographically signed QR badges scanned via mobile/webcam instantly log timestamps and trigger parent SMS/push alerts.',
        },
        {
          title: 'Transactional Fee Engine',
          detail: 'ACID-compliant MySQL transactions guarantee accurate fee ledgers, partial payment tracking, and receipt generation.',
        },
        {
          title: 'Filter-Based RBAC',
          detail: 'Custom controller middleware enforcing role permissions across 5 distinct institutional user groups.',
        },
        {
          title: 'Reporting & Analytics Views',
          detail: 'Pre-aggregated SQL views for instant daily attendance summaries and semester financial statements.',
        },
      ],
      stats: [
        { label: 'Attendance Mode', value: 'Instant QR Scan' },
        { label: 'ERP Modules', value: '12+ Integrated' },
        { label: 'User Portals', value: '5 RBAC Tiers' },
        { label: 'Manual Errors', value: '-95% Reduced' },
      ],
      gallery: [
        {
          id: 'skooly-1',
          title: 'Campus ERP Executive & Accounting Dashboard',
          caption: 'Unified institutional overview displaying daily attendance rates, fee collection velocity, and active academic modules.',
          tag: 'Dashboard UI',
          imageUrl: `${basePath}/projects/gallery-dashboard.svg`,
          featured: true,
        },
        {
          id: 'skooly-2',
          title: 'Contactless QR Attendance & Mobile Scanner',
          caption: 'Instant QR code verification workflow logging student check-ins and dispatching real-time parent notifications.',
          tag: 'Mobile & API',
          imageUrl: `${basePath}/projects/gallery-mobile.svg`,
        },
        {
          id: 'skooly-3',
          title: 'Academic & Fee Workflow Configuration',
          caption: 'Configurable admission pipelines, semester fee structures, and automated transcript generation rules.',
          tag: 'Workflow Engine',
          imageUrl: `${basePath}/projects/gallery-builder.svg`,
        },
        {
          id: 'skooly-4',
          title: 'Institutional Database & RBAC Architecture',
          caption: 'Normalized relational schema separating academic records, financial ledgers, and role-scoped portals.',
          tag: 'Architecture',
          imageUrl: `${basePath}/projects/gallery-architecture.svg`,
        },
        {
          id: 'skooly-5',
          title: 'Attendance & Financial Telemetry',
          caption: 'Semester-over-semester analytics tracking campus attendance trends and fee reconciliation.',
          tag: 'Analytics',
          imageUrl: `${basePath}/projects/gallery-analytics.svg`,
        },
      ],
    },
    {
      id: 6,
      slug: 'agile-project-management',
      title: 'Agile Project Management Tool',
      subtitle: 'Sprint Analytics & Cron Bulk Email Campaign Engine',
      description:
        'Full-featured agile collaboration suite with sprint boards, user story estimation, and cross-team task management, paired with a cron-driven bulk email marketing engine with click-through and opt-out tracking.',
      longDescription:
        'Built an integrated agile project delivery and outreach platform combining Kanban sprint boards, story point velocity tracking, and backlog grooming with a high-throughput, cron-scheduled bulk email campaign engine. Engineered asynchronous worker queues to dispatch thousands of personalized emails with pixel open tracking, click-through telemetry, and automated unsubscribe compliance.',
      tags: ['Laravel', 'Sprint Boards', 'Cron Asynchronous Jobs', 'Email Analytics', 'Redis'],
      category: 'Full Stack',
      icon: '⚡',
      featured: false,
      metrics: 'Bulk email campaign engine with open & click tracking',
      demoUrl: null,
      githubUrl: null,
      role: 'Full Stack Engineer',
      timeline: 'Production Suite',
      status: 'Internal & Client SaaS',
      challenge:
        'Engineering and marketing teams needed a unified workspace to manage agile sprint deliverables while executing scheduled high-volume email campaigns without blocking web server threads.',
      solution:
        'Combined interactive sprint boards with a cron-orchestrated Redis queue pipeline that throttles, dispatches, and tracks bulk email campaigns asynchronously.',
      keyFeatures: [
        'Interactive Kanban Sprint Boards with story point estimation and burndown charts',
        'Cron-scheduled Bulk Email Campaign Engine with customizable HTML templates',
        'Real-time email open tracking, link click-through telemetry, and opt-out management',
        'Cross-team task assignments, priority labels, and automated deadline reminders',
        'Asynchronous Redis queue workers preventing SMTP rate-limit bottlenecks',
        'Comprehensive campaign ROI and team sprint velocity analytics dashboards',
      ],
      architectureHighlights: [
        {
          title: 'Cron & Queue Orchestrator',
          detail: 'Scheduled Laravel commands chunk large recipient lists into Redis jobs with smart rate-limiting.',
        },
        {
          title: 'Telemetry Tracking Engine',
          detail: 'Lightweight webhook and pixel endpoints log open rates, click-throughs, and bounce events in real time.',
        },
        {
          title: 'Sprint Velocity Aggregator',
          detail: 'Calculates team burndown metrics, cycle times, and sprint completion ratios automatically.',
        },
        {
          title: 'Resilient Retry Logic',
          detail: 'Exponential backoff and dead-letter queue handling ensure zero lost campaign dispatches.',
        },
      ],
      stats: [
        { label: 'Dispatch Mode', value: 'Async Cron + Redis' },
        { label: 'Telemetry', value: 'Open & Clicks' },
        { label: 'Agile Views', value: 'Kanban & Sprint' },
        { label: 'Throughput', value: '10K+ Emails/hr' },
      ],
      gallery: [
        {
          id: 'agile-1',
          title: 'Sprint Velocity & Campaign Telemetry Analytics',
          caption: 'Real-time burndown charts paired with email campaign open rates, click-through velocity, and worker throughput.',
          tag: 'Analytics',
          imageUrl: `${basePath}/projects/gallery-analytics.svg`,
          featured: true,
        },
        {
          id: 'agile-2',
          title: 'Agile Workspace & Sprint Control Plane',
          caption: 'Unified dashboard displaying active sprint boards, backlog health, and scheduled cron campaign queues.',
          tag: 'Dashboard UI',
          imageUrl: `${basePath}/projects/gallery-dashboard.svg`,
        },
        {
          id: 'agile-3',
          title: 'Automated Campaign & Task Workflow Builder',
          caption: 'Visual pipeline for configuring sprint state transitions and multi-stage email drip sequences.',
          tag: 'Workflow Engine',
          imageUrl: `${basePath}/projects/gallery-builder.svg`,
        },
        {
          id: 'agile-4',
          title: 'Cron Worker & Queue Pipeline Architecture',
          caption: 'High-throughput asynchronous architecture isolating bulk SMTP dispatch from interactive web requests.',
          tag: 'Architecture',
          imageUrl: `${basePath}/projects/gallery-architecture.svg`,
        },
        {
          id: 'agile-5',
          title: 'Scheduler CLI & Endpoint Diagnostics',
          caption: 'Console diagnostics showing scheduled artisan cron commands, queue workers, and webhook telemetry routes.',
          tag: 'Mobile & API',
          imageUrl: `${basePath}/projects/gallery-api.svg`,
        },
      ],
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
