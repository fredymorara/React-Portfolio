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

  {
    id: '1',
    slug: 'flic-movies',
    title: 'Flic Movies',
    subtitle: 'Enterprise-grade streaming web application',
    description: 'A modern streaming web application built as a monorepo, pairing a dynamic Next.js frontend with a heavily secured NestJS backend.',
    category: 'fullstack',
    stack: ['Next.js 16', 'NestJS 11', 'TypeScript', 'Tailwind CSS v4', 'Prisma ORM', 'PostgreSQL'],
    date: 'Jan 15, 2026',
    featured: true,
    screenshot: '/Flic Movies.png',
    color: '#e50914',
    links: { live: 'https://flicmovies.me', github: 'https://github.com/fredymorara/movies' },
    hasDocumentation: true,
  },

  {
    id: '2',
    slug: 'wave-anime',
    title: 'Wave Anime',
    subtitle: 'High-performance anime streaming platform',
    description: 'A modern web application for tracking and watching anime. Features cross-device sync, auto-skip, community features, and a cyberpunk admin dashboard.',
    category: 'fullstack',
    stack: ['Next.js 15', 'React 19', 'Zustand', 'Tailwind CSS v4', 'Neon DB', 'Drizzle ORM', 'Node.js', 'Better Auth'],
    date: 'Jun 10, 2026 - Present',
    featured: true,
    screenshot: '/Wave Anime.png',
    color: '#FF003C',
    links: { live: 'https://anime.flicmovies.me', github: 'https://github.com/fredymorara/wave' },
    hasDocumentation: true,
  },

  {
    id: '3',
    slug: 'hans-credit',
    title: 'HansCredit',
    subtitle: 'Credit loans application',
    description: 'A credit loans web application where users can apply for and track loan applications. Built with Next.js and Tailwind CSS, with nodemailer for application email notifications.',
    category: 'web',
    stack: ['Next.js', 'JavaScript', 'Nodemailer', 'Tailwind CSS', 'Framer Motion'],
    date: 'Feb 10, 2026',
    featured: false,
    screenshot: '/Hans Credit.png',
    color: '#ecb613',
    links: { live: 'https://hans-credit.vercel.app/', github: 'https://github.com/fredymorara/HansCredit' },
    hasDocumentation: true,
  },

  {
    id: '4',
    slug: 'aws-bedrock-assistant',
    title: 'AWS Bedrock Travel Assistant',
    subtitle: 'Autonomous AI travel assistant',
    description: 'A multi-tool, autonomous AI travel assistant built on AWS Bedrock AgentCore, utilizing MCP Gateways and Lambda functions for real-time reasoning.',
    category: 'cloud',
    stack: ['AWS Bedrock', 'AWS Lambda', 'Python 3.12', 'MCP', 'Amazon Nova 2'],
    date: 'Aug 20, 2026',
    featured: true,
    screenshot: '/aws-bedrock-assistant.png',
    color: '#FF9900',
    links: { github: 'https://github.com/fredymorara/AWS-Travel-Assistant' },
    hasDocumentation: true,
  },

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
    links: { live: 'https://ai-library-update.vercel.app/', github: 'https://github.com/fredymorara/libra-front' },
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
    featured: false,
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
  {
    id: '8',
    slug: 'restaurant-agent',
    title: 'AWS Restaurant Agent',
    subtitle: 'ReAct AI Recommendation Agent',
    description: 'An autonomous agent running a strict ReAct loop on AWS Bedrock AgentCore, utilizing MCP Gateways to filter and verify real-time restaurant availability.',
    category: 'cloud',
    stack: ['AWS Bedrock', 'AWS Lambda', 'Python 3.14', 'MCP', 'Amazon Nova 2'],
    date: 'Aug 21, 2026',
    featured: false,
    screenshot: '/AWS Projects.png',
    color: '#FF9900',
    links: { github: 'https://github.com/fredymorara/AWS-Restaurant-Recommendation-Agent' },
    hasDocumentation: true,
  },
  {
    id: '9',
    slug: 'programmatic-ai',
    title: 'Programmatic AI Orchestration',
    subtitle: 'Local Autonomous Travel Assistant',
    description: 'A purely programmatic autonomous ReAct travel planning assistant built in Python, using the AWS Bedrock converse API directly for fine-grained tool orchestration.',
    category: 'cloud',
    stack: ['AWS Bedrock', 'Python 3.14', 'boto3', 'Amazon Nova 2', 'Converse API'],
    date: 'Aug 22, 2026',
    featured: false,
    screenshot: '/AWS Projects.png',
    color: '#0055ff',
    links: { github: 'https://github.com/fredymorara/Programmatic-AI-Orchestration' },
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
