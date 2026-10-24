export interface SkillItem {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Tools';
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
  category: 'Enterprise' | 'Full Stack' | 'Backend API' | 'E-Commerce';
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
    location: string;
    availability: string;
    yearsExperience: number;
    cvUrl: string;
    social: {
      github: string;
      linkedin: string;
      email: string;
    };
    contactFormKey: string;
  };
  highlights: HighlightItem[];
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
    role: 'Full Stack Web Developer',
    headline: 'Architecting scalable backend ecosystems & fluid digital experiences.',
    bioShort:
      'Passionate Full Stack Developer with 5+ years of specialized engineering experience in building robust backend systems, resilient microservices, high-throughput RESTful APIs, and responsive web applications.',
    bioLong: [
      'I am a passionate Full Stack Developer with a strong focus on building scalable backend systems and modern web applications. With 5 years of industry experience, I specialize in architecting robust APIs, optimizing relational databases, and designing resilient enterprise software.',
      'I pride myself on writing clean, maintainable, and self-documenting code. Whether optimizing complex legacy systems, migrating monolithic workflows, or engineering high-performance greenfield platforms from scratch, I thrive on solving demanding technical challenges with precision.',
    ],
    email: 'saiyedtoufiq@gmail.com',
    location: 'India',
    availability: 'Open to full-time roles & high-impact contracts',
    yearsExperience: 5,
    cvUrl: '/Toufiq-Rehman-Sayyed-CV.pdf',
    social: {
      github: 'https://github.com/saiyedtoufiq',
      linkedin: 'https://www.linkedin.com/in/toufiq-saiyed-6799b4b6',
      email: 'mailto:saiyedtoufiq@gmail.com',
    },
    contactFormKey: '2aba64ba-eb7c-4dea-bb40-86e764c8fb81',
  },

  highlights: [
    {
      title: '5+ Years Experience',
      desc: 'Proven track record in production full-stack engineering',
      icon: 'Code',
    },
    {
      title: 'API & Microservices',
      desc: 'Robust RESTful API design & third-party integrations',
      icon: 'Server',
    },
    {
      title: 'Scalable Systems',
      desc: 'High-efficiency database indexing & backend caching',
      icon: 'Database',
    },
    {
      title: 'Clean Architecture',
      desc: 'Maintainable, test-driven & modular design patterns',
      icon: 'Zap',
    },
  ],

  skills: [
    {
      category: 'Backend Architecture',
      items: [
        { name: 'PHP', category: 'Backend', proficiency: 95, badge: 'Core' },
        { name: 'Laravel', category: 'Backend', proficiency: 92, badge: 'Advanced' },
        { name: 'CodeIgniter', category: 'Backend', proficiency: 88, badge: 'Proficient' },
        { name: 'RESTful APIs', category: 'Backend', proficiency: 95, badge: 'Architecture' },
      ],
    },
    {
      category: 'Frontend Engineering',
      items: [
        { name: 'JavaScript (ES6+)', category: 'Frontend', proficiency: 90, badge: 'Core' },
        { name: 'TypeScript', category: 'Frontend', proficiency: 84, badge: 'Modern' },
        { name: 'React & Next.js', category: 'Frontend', proficiency: 88, badge: 'Modern' },
        { name: 'Tailwind CSS', category: 'Frontend', proficiency: 92, badge: 'Styling' },
        { name: 'Bootstrap & jQuery', category: 'Frontend', proficiency: 90, badge: 'Ecosystem' },
      ],
    },
    {
      category: 'Database & Caching',
      items: [
        { name: 'MySQL', category: 'Database', proficiency: 92, badge: 'Relational' },
        { name: 'PostgreSQL', category: 'Database', proficiency: 85, badge: 'Relational' },
        { name: 'MongoDB', category: 'Database', proficiency: 78, badge: 'NoSQL' },
        { name: 'Query Optimization', category: 'Database', proficiency: 90, badge: 'Performance' },
      ],
    },
    {
      category: 'DevOps & Tooling',
      items: [
        { name: 'Git & GitHub', category: 'Tools', proficiency: 92, badge: 'VCS' },
        { name: 'Postman & Swagger', category: 'Tools', proficiency: 90, badge: 'API Testing' },
        { name: 'Docker / Linux', category: 'Tools', proficiency: 82, badge: 'Environment' },
        { name: 'Vite & Webpack', category: 'Tools', proficiency: 85, badge: 'Build Tools' },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Workplace & Service Management System',
      subtitle: 'Enterprise Resource & Facility Scheduling',
      description:
        'A comprehensive enterprise solution for managing corporate workplace resources, automated employee scheduling, and facility maintenance dispatching.',
      longDescription:
        'Engineered an enterprise-grade workplace administration platform handling multi-floor space reservations, facility requests, technician dispatch workflows, and dynamic shift management with role-based access control.',
      tags: ['Laravel', 'Angular', 'MySQL', 'REST API', 'Role-Based Access'],
      category: 'Enterprise',
      icon: '🏢',
      featured: true,
      metrics: '35% reduction in room booking conflicts',
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 2,
      title: 'Inventory Management System with POS',
      subtitle: 'Real-time Retail & Warehouse Platform',
      description:
        'An all-in-one inventory control platform equipped with real-time barcode scanning, stock alerting, and rapid checkout Point-of-Sale (POS) capabilities.',
      longDescription:
        'Built high-speed transactional POS checkout combined with automated stock reorder thresholds, inventory valuation reporting, and multi-tier cashier authorization.',
      tags: ['Laravel', 'Vue.js', 'Bootstrap', 'MySQL', 'POS Engine'],
      category: 'E-Commerce',
      icon: '🛒',
      featured: true,
      metrics: 'Real-time inventory sync under 200ms',
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 3,
      title: 'Software Development Management System',
      subtitle: 'Agile Team Collaboration & Sprint Tracker',
      description:
        'A comprehensive solution for software development teams, featuring kanban board tracking, sprint milestone management, and automated dev throughput reporting.',
      longDescription:
        'Delivered an integrated agile management suite with issue boards, burndown tracking, code review signoffs, and timeline milestone telemetry.',
      tags: ['Laravel', 'Bootstrap', 'jQuery', 'MySQL', 'Agile Analytics'],
      category: 'Full Stack',
      icon: '✅',
      featured: true,
      metrics: 'Boosted cross-functional delivery visibility',
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 4,
      title: 'School & University Management System',
      subtitle: 'Academic Records & Attendance Automation',
      description:
        'An academic administration platform handling student lifecycle records, semester course curricula, grade distribution, and daily attendance records.',
      longDescription:
        'Centralized student registration, timetable allocation, transcript generation, and parent notification portals into a unified, secure database.',
      tags: ['CodeIgniter', 'Bootstrap', 'jQuery', 'MySQL', 'Academic Portal'],
      category: 'Enterprise',
      icon: '🎓',
      featured: false,
      metrics: 'Supported 5,000+ active student records',
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 5,
      title: 'Sports Clubs Management System',
      subtitle: 'Athletics Booking & League Administration',
      description:
        'An athletic organization suite managing athlete rosters, tournaments, subscription memberships, and court/facility reservations.',
      longDescription:
        'Streamlined member dues tracking, automated match fixture schedules, court reservations, and team equipment logistics.',
      tags: ['CodeIgniter', 'Bootstrap', 'jQuery', 'MySQL', 'Member Billing'],
      category: 'Full Stack',
      icon: '🏈',
      featured: false,
      metrics: 'Automated recurring tournament brackets',
      demoUrl: null,
      githubUrl: null,
    },
  ],

  experiences: [
    {
      id: 1,
      role: 'Web Developer',
      company: 'Sourcecube Technologies Pvt Ltd',
      duration: '2023 - 2025',
      location: 'India',
      type: 'Full-time',
      description: [
        'Specialized in architecting and scaling resilient backend systems and database architectures using Laravel and MySQL.',
        'Profiled and optimized complex database queries, reducing average API response times by up to 40%.',
        'Implemented enterprise-grade RESTful APIs serving both high-traffic web applications and mobile clients.',
        'Mentored junior software engineers, established standard coding conventions, and conducted peer code reviews.',
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Git', 'Postman'],
    },
    {
      id: 2,
      role: 'Junior Web Developer',
      company: 'Potenza Global Solutions Pvt Ltd.',
      duration: '2021 - 2023',
      location: 'India',
      type: 'Full-time',
      description: [
        'Assisted in the end-to-end development, testing, and deployment of mission-critical client web portals.',
        'Diagnosed defects, resolved critical production bugs, and modernized legacy codebases for improved maintainability.',
        'Rapidly acquired and implemented emerging technologies, architectural patterns, and reactive libraries.',
        'Collaborated with cross-functional product teams, QA engineers, and designers to guarantee on-time releases.',
        'Engineered foundational RESTful service endpoints and database schema migrations.',
      ],
      technologies: ['PHP', 'CodeIgniter', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL'],
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
