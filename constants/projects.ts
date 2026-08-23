// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectLinks {
  live?: string;
  github?: string;
  docs?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'web' | 'ai' | 'cloud' | 'fullstack';
  stack: string[];
  date: string;
  featured: boolean;
  screenshot?: string;
  color?: string;
  links: ProjectLinks;
  hasDocumentation?: boolean;
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [

  // Flic Movies (uncomment when ready)
  // { id: '1', slug: 'flic-movies', title: 'Flic Movies', subtitle: 'Enterprise-grade streaming web application',
  //   description: 'A modern streaming web application built as a monorepo.', category: 'fullstack', featured: false, date: '2026',
  //   stack: ['Next.js', 'NestJS', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL'],
  //   color: '#e50914', links: { live: 'https://flicmovies.me', github: 'https://github.com/fredymorara' }, hasDocumentation: false },

  // Kumo Anime (uncomment when ready)
  // { id: '2', slug: 'kumo-anime', title: 'Kumo Anime', subtitle: 'Anime streaming and discovery platform',
  //   description: 'A blazing-fast anime streaming platform.', category: 'web', featured: false, date: '2026',
  //   stack: ['SolidStart', 'Tailwind CSS', 'Motion One', 'Bun', 'GraphQL'],
  //   color: '#8b5cf6', links: { live: 'https://anime.flicmovies.me', github: 'https://github.com/fredymorara' }, hasDocumentation: false },

  {
    id: '3',
    slug: 'hans-credit',
    title: 'HansCredit',
    subtitle: 'Credit loans application',
    description: 'A credit loans web application where users can apply for and track loan applications. Built with Next.js and Tailwind CSS, with nodemailer for application email notifications.',
    category: 'web',
    stack: ['Next.js', 'JavaScript', 'Nodemailer', 'Tailwind CSS', 'Framer Motion'],
    date: 'Feb 10, 2026',
    featured: true,
    screenshot: '/Hans Credit.png',
    color: '#ecb613',
    links: { live: 'https://hans-credit.vercel.app/', github: 'https://github.com/fredymorara/HansCredit' },
    hasDocumentation: true,
  },

  // Mpira Streams (uncomment when ready)
  // { id: '4', slug: 'mpira-streams', title: 'Mpira Streams', subtitle: 'Sports streaming application',
  //   description: 'A front-end React application consuming a public sports streaming API.', category: 'web', featured: false, date: '2025',
  //   stack: ['React', 'Redux', 'JavaScript', 'Tailwind CSS', 'REST API'],
  //   color: '#ffffff', links: { live: 'https://sports.flicmovies.me', github: 'https://github.com/fredymorara' }, hasDocumentation: false },

  {
    id: '5',
    slug: 'smart-ai-library',
    title: 'Smart AI Library Assistant',
    subtitle: 'AI-powered library assistant',
    description: 'An AI assistant for library resource discovery using a RAG pipeline. This includes vector databases for retrieval, Hugging Face API for language processing, Clerk auth, and Supabase backend.',
    category: 'ai',
    stack: ['React', 'Next.js', 'JavaScript', 'RAG Pipeline', 'Vector Databases', 'Hugging Face API', 'Groq', 'Tailwind CSS', 'shadcn', 'Clerk', 'Supabase'],
    date: 'Dec 19, 2025',
    featured: true,
    screenshot: '/Smart AI Library Assistant.png',
    color: '#39e75f',
    links: { live: 'https://ai-library-update.vercel.app/', github: 'https://github.com/fredymorara/ai-library' },
    hasDocumentation: true,
  },

  {
    id: '6',
    slug: 'ai-spam-detector',
    title: 'AI Spam Message Detector',
    subtitle: 'ML-powered text classification tool',
    description: 'A spam detection tool using a Linear SVM model trained on SMS data. Built with Python, scikit-learn, NLTK, and Streamlit. It classifies messages as spam or legitimate in real time.',
    category: 'ai',
    stack: ['Python', 'scikit-learn', 'Streamlit', 'NLTK', 'Pandas', 'NumPy', 'Linear SVM'],
    date: 'Jul 20, 2025',
    featured: true,
    screenshot: '/AI Spam Message Detector.png',
    color: '#ADD8E6',
    links: { live: 'https://aispamdetector.streamlit.app/', github: 'https://github.com/fredymorara/AI-Spam-Detector-App' },
    hasDocumentation: true,
  },

  {
    id: '7',
    slug: 'student-welfare-system',
    title: 'Student Welfare Management System',
    subtitle: 'Full-stack welfare management platform',
    description: 'A full-stack platform for managing student welfare activities, featuring a React frontend, Node.js/Express backend, MongoDB, M-Pesa Daraja API for payments, and JWT authentication.',
    category: 'fullstack',
    stack: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'M-Pesa Daraja API', 'Tailwind CSS'],
    date: 'Sep 20, 2025',
    featured: false,
    screenshot: '/Student Welfare Management System.png',
    color: '#800000',
    links: { live: 'https://kabarakstudentwelfare.netlify.app/', github: 'https://github.com/fredymorara/wms' },
    hasDocumentation: true,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getAllSlugs = (): string[] =>
  projects.map((p) => p.slug);
