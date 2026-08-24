export interface Badge {
  title: string;
  link: string;
}

export interface Certification {
  id: string;
  slug?: string;
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  link?: string;
  pdfUrl?: string;
  category: 'ai' | 'cloud' | 'fullstack' | 'fundamentals';
  badges?: Badge[];
}

export const certifications: Certification[] = [
  {
    id: 'ms-visual-data',
    slug: 'visual-data-azure',
    title: 'Extract insights from visual data on Azure',
    issuer: 'Microsoft Learn',
    date: '2026',
    category: 'ai',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/VSGDQLUM?sharingId=3B6E101D17988711',
    pdfUrl: '/certs/Extract insights from visual data on Azure.png',
    badges: [
      { title: 'Develop a vision-enabled generative AI application', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/H2MQ6BH8?sharingId=3B6E101D17988711' },
      { title: 'Generate images with AI', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/EGCU5DJP?sharingId=3B6E101D17988711' },
      { title: 'Generate videos with Microsoft Foundry', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/WME4VR2N?sharingId=3B6E101D17988711' },
      { title: 'Analyze images with Content Understanding', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/4CUH39FK?sharingId=3B6E101D17988711' },
      { title: 'Create a multimodal analysis solution with Azure Content Understanding', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/Y4DZ2TLR?sharingId=3B6E101D17988711' },
      { title: 'Create an Azure Content Understanding client application', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/7DSMKDTZ?sharingId=3B6E101D17988711' },
      { title: 'Extract data with Azure Document Intelligence', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/3ZMNBGCH?sharingId=3B6E101D17988711' },
      { title: 'Create a knowledge mining solution with Azure AI Search', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/K9HGD3XB?sharingId=3B6E101D17988711' }
    ]
  },
  {
    id: 'ms-computer-vision',
    slug: 'computer-vision-foundry',
    title: 'Develop computer vision solutions with Microsoft Foundry',
    issuer: 'Microsoft Learn',
    date: '2026',
    category: 'ai',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/Y4BJDK5R?sharingId=3B6E101D17988711',
    pdfUrl: '/certs/Develop computer vision solutions with Microsoft Foundry.png',
    badges: [
      { title: 'Develop a vision-enabled generative AI application', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/H2MQ6BH8?sharingId=3B6E101D17988711' },
      { title: 'Generate images with AI', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/EGCU5DJP?sharingId=3B6E101D17988711' },
      { title: 'Generate videos with Microsoft Foundry', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/WME4VR2N?sharingId=3B6E101D17988711' },
      { title: 'Analyze images with Content Understanding', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/4CUH39FK?sharingId=3B6E101D17988711' }
    ]
  },
  {
    id: 'ms-natural-language',
    slug: 'natural-language-azure',
    title: 'Develop natural language solutions in Azure',
    issuer: 'Microsoft Learn',
    date: '2026',
    category: 'ai',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/8VQYREXW?sharingId=3B6E101D17988711',
    pdfUrl: '/certs/Develop natural language solutions in Azure.png',
    badges: [
      { title: 'Analyze text with Azure Language in Foundry Tools', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/BU3R75PD?sharingId=3B6E101D17988711' },
      { title: 'Develop a text analysis agent with the Azure Language MCP server', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/2TSHJBWV?sharingId=3B6E101D17988711' },
      { title: 'Develop a speech-capable generative AI application', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/NQE5JHWF?sharingId=3B6E101D17988711' },
      { title: 'Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/VS58Z5PM?sharingId=3B6E101D17988711' },
      { title: 'Develop a speech agent with the Azure Speech MCP server', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/XP467KVY?sharingId=3B6E101D17988711' },
      { title: 'Develop an Azure Speech Voice Live Agent in Microsoft Foundry', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/CR788P69?sharingId=3B6E101D17988711' },
      { title: 'Translate text and speech with Microsoft Foundry Tools', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/NQPA74YF?sharingId=3B6E101D17988711' }
    ]
  },
  {
    id: 'ms-ai-agents',
    slug: 'ai-agents-azure',
    title: 'Develop AI agents on Azure',
    issuer: 'Microsoft Learn',
    date: '2026',
    category: 'ai',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/FEEF8DRX?sharingId=3B6E101D17988711',
    pdfUrl: '/certs/Develop AI agents on Azure.png',
    badges: [
      { title: 'Develop AI agents with Microsoft Foundry and Visual Studio Code', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/FE27CWNX?sharingId=3B6E101D17988711' },
      { title: 'Integrate custom tools into your agent', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/H2RRXH48?sharingId=3B6E101D17988711' },
      { title: 'Integrate MCP Tools with Azure AI Agents', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/3ZZ2WQXH?sharingId=3B6E101D17988711' },
      { title: 'Build knowledge-enhanced AI agents with Foundry IQ', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/NQQEDZ9F?sharingId=3B6E101D17988711' },
      { title: 'Integrate your agent with Microsoft 365', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/9AA7LELU?sharingId=3B6E101D17988711' },
      { title: 'Build agent-driven workflows using Microsoft Foundry', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/BUUFWGSD?sharingId=3B6E101D17988711' },
      { title: 'Develop an AI agent with Microsoft Agent Framework', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/U77EPD73?sharingId=3B6E101D17988711' },
      { title: 'Orchestrate a multi-agent solution using the Microsoft Agent Framework', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/EGGHFNCP?sharingId=3B6E101D17988711' },
      { title: 'Discover Azure AI Agents with A2A', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/9AA9GM8U?sharingId=3B6E101D17988711' }
    ]
  },
  {
    id: 'ms-gen-ai',
    slug: 'gen-ai-apps-azure',
    title: 'Develop generative AI apps in Azure',
    issuer: 'Microsoft Learn',
    date: '2026',
    category: 'ai',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/VSKGNQVM?sharingId=3B6E101D17988711',
    pdfUrl: '/certs/Develop generative AI apps in Azure.png',
    badges: [
      { title: 'Plan and prepare to develop AI solutions on Azure', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/Y42MTWYR?sharingId=3B6E101D17988711' },
      { title: 'Select, deploy, and evaluate Microsoft Foundry models', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/NQAC2YJF?sharingId=3B6E101D17988711' },
      { title: 'Develop a generative AI chat app with Microsoft Foundry', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/3ZXWLUGH?sharingId=3B6E101D17988711' },
      { title: 'Develop generative AI apps that use tools', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/XP2ZSG6Y?sharingId=3B6E101D17988711' },
      { title: 'Optimize generative AI model performance with Microsoft Foundry', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/4CSGTBFK?sharingId=3B6E101D17988711' },
      { title: 'Implement a responsible generative AI solution in Microsoft Foundry', link: 'https://learn.microsoft.com/api/achievements/share/en-us/freddymorara/WMAPLF8N?sharingId=3B6E101D17988711' }
    ]
  },
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
  { id: 'azure-fundamentals-datacamp', title: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'DataCamp', date: '2024', category: 'cloud' },
];
