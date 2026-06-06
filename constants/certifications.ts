export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge?: string;
}

export const certifications: Certification[] = [
  {
    id: 'ai-datacamp',
    title: 'Associate AI Engineer for Developers',
    issuer: 'Datacamp',
    date: '2024',
  },
  {
    id: 'react-codecademy',
    title: 'ReactJS Certification',
    issuer: 'Codecademy',
    date: '2023',
  },
  {
    id: 'web-ibm',
    title: 'Web Development Fundamentals',
    issuer: 'IBM Skills Build',
    date: '2023',
  },
  {
    id: 'js-cisco',
    title: 'Javascript Essentials 1 & 2',
    issuer: 'Cisco Networking Academy',
    date: '2023',
  },
  {
    id: 'linux-cisco',
    title: 'Linux Unhatched',
    issuer: 'Cisco Networking Academy',
    date: '2023',
  },
  {
    id: 'aws-nextwork',
    title: 'Amazon Web Services (AWS) Projects',
    issuer: 'NextWork',
    date: '2024',
  },
  {
    id: 'llm-google',
    title: 'Introduction to Large Language Models',
    issuer: 'Google',
    date: '2024',
  },
  {
    id: 'genai-google',
    title: 'Introduction to Generative AI',
    issuer: 'Google',
    date: '2024',
  },
  {
    id: 'resp-ai-google',
    title: 'Introduction to Responsible AI',
    issuer: 'Google',
    date: '2024',
  },
  {
    id: 'swe-python',
    title: 'Software Engineering Principles in Python',
    issuer: 'DataCamp',
    date: '2024',
  },
  {
    id: 'cloud-datacamp',
    title: 'Understanding Cloud Computing',
    issuer: 'DataCamp',
    date: '2024',
  },
];
