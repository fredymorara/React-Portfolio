import { CircleGauge, Layers, Package } from 'lucide-react';

export const skills = [
  {
    id: 'scalability',
    gradientColor: 'var(--jungle--green)',
    asset: {
      background: 'var(--bush)',
      icon: Layers,
    },
    title: {
      label: 'Full-Stack',
      background: 'var(--black--bean)',
    },
    content:
      'I build complete web applications: React/Next.js frontends connected to Node.js or Python backends, with databases, authentication, and deployment to production.',
  },
  {
    id: 'Performance',
    gradientColor: 'var(--azure--radiance)',
    asset: {
      background: 'var(--blue--zodiac)',
      icon: CircleGauge,
    },
    title: {
      label: 'Practical AI',
      background: 'var(--downriver)',
    },
    content:
      'I integrate AI into real user flows. This includes RAG pipelines, LLM APIs, and vector databases used in working applications. My focus is practical integration, not isolated experiments.',
  },
  {
    id: 'modularity',
    gradientColor: 'var(--rose-of--sharon)',
    asset: {
      background: 'var(--rose-of--sharon-2)',
      icon: Package,
    },
    title: {
      label: 'Self-Directed',
      background: 'var(--rose-of--sharon-2)',
    },
    content:
      'I take initiative. I figure out what needs to be done, work through blockers independently, and ask focused questions when I genuinely need input, rather than for every small decision.',
  },
];

export const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'nestjs',
  'tailwindcss',
  'amazonaws',
  'microsoftazure',
  'postgresql',
  'swagger',
  'vercel',
  'git',
  'github',
  'visualstudiocode',
  'mongodb',
  'python',
  'pandas',
  'numpy',
  'npm',
  'pnpm',
  'nodemailer',
  'huggingface',
  'openai',
  'groq',
  'clerk',
];

export const techs = [
  { label: 'TypeScript', textColor: '#3178C6', bgColor: '#1E5D92' },
  { label: 'Next.js 15', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'React 19', textColor: '#61DAFB', bgColor: '#4B9FC9' },
  { label: 'NestJS', textColor: '#E0234E', bgColor: '#991131' },
  { label: 'Python 3', textColor: '#FFD43B', bgColor: '#306998' },
  { label: 'AWS Bedrock', textColor: '#FF9900', bgColor: '#232F3E' },
  { label: 'Microsoft Foundry', textColor: '#0078D4', bgColor: '#005A9E' },
  { label: 'Azure AI', textColor: '#00A4EF', bgColor: '#0078D4' },
  { label: 'MCP', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'Node.js', textColor: '#68A063', bgColor: '#4E8B4A' },
  { label: 'Tailwind CSS v4', textColor: '#38BDF8', bgColor: '#0D8FB7' },
  { label: 'Swagger', textColor: '#85EA2D', bgColor: '#499D00' },
  { label: 'MS Agent Framework', textColor: '#0078D4', bgColor: '#005A9E' },
  { label: 'PostgreSQL', textColor: '#336791', bgColor: '#254E6D' },
  { label: 'MongoDB', textColor: '#47A248', bgColor: '#2C6A2F' },
  { label: 'Pinecone', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'OpenAI API', textColor: '#10A37F', bgColor: '#0B7B5F' },
  { label: 'LangChain', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'RAG Pipelines', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'JavaScript', textColor: '#F7DF1E', bgColor: '#F0C800' },
  { label: 'Express', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'SQL', textColor: '#00758F', bgColor: '#005C73' },
  { label: 'Git', textColor: '#F05032', bgColor: '#C03A22' },
  { label: 'GitHub', textColor: '#FFFFFF', bgColor: '#333333' }
];
