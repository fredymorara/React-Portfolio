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
      label: 'Scalability',
      background: 'var(--black--bean)',
    },
    content:
      'I specialize in front-end architectures that scale as your applications and teams grow, using modular structures and efficient workflows.',
  },
  {
    id: 'Performance',
    gradientColor: 'var(--azure--radiance)',
    asset: {
      background: 'var(--blue--zodiac)',
      icon: CircleGauge,
    },
    title: {
      label: 'Performance',
      background: 'var(--downriver)',
    },
    content:
      'I ensure front-end applications are optimized for speed, responsiveness, and seamless user experiences as they are efficient for developers.',
  },
  {
    id: 'modularity',
    gradientColor: 'var(--rose-of--sharon)',
    asset: {
      background: 'var(--rose-of--sharon-2)',
      icon: Package,
    },
    title: {
      label: 'Modularity',
      background: 'var(--rose-of--sharon-2)',
    },
    content:
      'I create reusable components, libraries, and tools that empower teams to build consistent and efficient front-end solutions at scale.',
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
  'tailwindcss',
  'amazonaws',
  'postgresql',
  'vercel',
  'git',
  'github',
  'visualstudiocode',
  'mongodb',
  'python',
  'flask',
  'npm',
  'pnpm',
  'nodemailer',
  'huggingface',
  'groq',
  'clerk',
];

export const techs = [
  { label: 'javascript', textColor: '#F7DF1E', bgColor: '#F0C800' },
  { label: 'typescript', textColor: '#3178C6', bgColor: '#1E5D92' },
  { label: 'python', textColor: '#FFD43B', bgColor: '#306998' },
  { label: 'react', textColor: '#61DAFB', bgColor: '#4B9FC9' },
  { label: 'next.js', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'tailwind', textColor: '#38BDF8', bgColor: '#0D8FB7' },
  { label: 'node.js', textColor: '#68A063', bgColor: '#4E8B4A' },
  { label: 'express', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'aws', textColor: '#FF9900', bgColor: '#232F3E' },
  { label: 'sql', textColor: '#00758F', bgColor: '#005C73' },
  { label: 'mongodb', textColor: '#47A248', bgColor: '#2C6A2F' },
  { label: 'vector dbs', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'pinecone', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'chromadb', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'openai api', textColor: '#10A37F', bgColor: '#0B7B5F' },
  { label: 'langchain', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'rag', textColor: '#FFFFFF', bgColor: '#333333' },
  { label: 'huggingface', textColor: '#FFD21E', bgColor: '#CC9900' },
  { label: 'git', textColor: '#F05032', bgColor: '#C03A22' },
  { label: 'github', textColor: '#FFFFFF', bgColor: '#333333' },
];
