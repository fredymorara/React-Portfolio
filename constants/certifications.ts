export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  link?: string;
  category: 'ai' | 'cloud' | 'fullstack' | 'fundamentals';
}

export const certifications: Certification[] = [
  { id: 'ai-datacamp', title: 'Associate AI Engineer for Developers', issuer: 'DataCamp', date: '2024', category: 'ai' },
  { id: 'react-codecademy', title: 'ReactJS Certification', issuer: 'Codecademy', date: '2023', category: 'fullstack' },
  { id: 'web-ibm', title: 'Web Development Fundamentals', issuer: 'IBM Skills Build', date: '2023', category: 'fullstack' },
  { id: 'js-cisco', title: 'Javascript Essentials 1 & 2', issuer: 'Cisco Networking Academy', date: '2023', category: 'fundamentals' },
  { id: 'linux-cisco', title: 'Linux Unhatched', issuer: 'Cisco Networking Academy', date: '2023', category: 'fundamentals' },
  { id: 'aws-nextwork', title: 'Amazon Web Services (AWS) Projects', issuer: 'NextWork', date: '2024', category: 'cloud' },
  { id: 'llm-google', title: 'Introduction to Large Language Models', issuer: 'Google', date: '2024', category: 'ai' },
  { id: 'genai-google', title: 'Introduction to Generative AI', issuer: 'Google', date: '2024', category: 'ai' },
  { id: 'resp-ai-google', title: 'Introduction to Responsible AI', issuer: 'Google', date: '2024', category: 'ai' },
  { id: 'swe-python', title: 'Software Engineering Principles in Python', issuer: 'DataCamp', date: '2024', category: 'fullstack' },
  { id: 'cloud-datacamp', title: 'Understanding Cloud Computing', issuer: 'DataCamp', date: '2024', category: 'cloud' },
  { id: 'ai-fundamentals-datacamp', title: 'Artificial Intelligence Fundamentals', issuer: 'DataCamp', date: '2024', category: 'ai' },
  { id: 'aws-ai-ml-scholars', title: 'AWS AI & ML Scholars', issuer: 'AWS with Udacity', date: '2024', category: 'cloud' },
  { id: 'azure-genai-microsoft', title: 'Develop Generative AI Apps in Azure', issuer: 'Microsoft', date: '2024', category: 'cloud' },
  { id: 'azure-fundamentals-datacamp', title: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'DataCamp', date: '2024', category: 'cloud' },
];
