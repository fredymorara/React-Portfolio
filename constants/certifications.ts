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
  featured?: boolean;
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
  { 
    id: 'ai-datacamp', 
    slug: 'ai-datacamp',
    title: 'Associate AI Engineer for Developers', 
    issuer: 'DataCamp', 
    date: '2026', 
    category: 'ai',
    featured: true,
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/9522443604d9f5fb6a4dc966a2757c9150787e02?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa'
  },
  { id: 'react-codecademy', title: 'ReactJS Certification', issuer: 'Codecademy', date: '2023', category: 'fullstack' },
  { id: 'web-ibm', title: 'Web Development Fundamentals', issuer: 'IBM Skills Build', date: '2023', category: 'fullstack' },
  { id: 'js-cisco', title: 'Javascript Essentials 1 & 2', issuer: 'Cisco Networking Academy', date: '2023', category: 'fundamentals' },
  { id: 'linux-cisco', title: 'Linux Unhatched', issuer: 'Cisco Networking Academy', date: '2023', category: 'fundamentals' },
  { id: 'aws-nextwork', title: 'Amazon Web Services (AWS) Projects', issuer: 'NextWork', date: '2024', category: 'cloud' },
  { id: 'llm-google', title: 'Introduction to Large Language Models', issuer: 'Google', date: '2024', category: 'ai' },
  { id: 'genai-google', title: 'Introduction to Generative AI', issuer: 'Google', date: '2024', category: 'ai' },
  { id: 'resp-ai-google', title: 'Introduction to Responsible AI', issuer: 'Google', date: '2024', category: 'ai' },
  { id: 'aws-ai-ml-scholars', title: 'AWS AI & ML Scholars', issuer: 'AWS with Udacity', date: '2024', category: 'cloud' },
  { 
    id: 'ai-fundamentals-datacamp', 
    slug: 'ai-fundamentals-datacamp',
    title: 'Artificial Intelligence Fundamentals', 
    issuer: 'DataCamp', 
    date: 'May 15, 2026', 
    category: 'ai',
    featured: true,
    pdfUrl: '/datacamp/ai-fundamentals.png',
    link: 'https://www.datacamp.com/skill-verification/AIF0020406437984'
  },
  {
    id: 'ai-understanding-datacamp',
    slug: 'ai-understanding-datacamp',
    title: 'Understanding Artificial Intelligence',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/skill-verification/UAI0801417034'
  },
  {
    id: 'ai-ethics-datacamp',
    slug: 'ai-ethics-datacamp',
    title: 'AI Ethics',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/skill-verification/AIE0029822476123'
  },
  {
    id: 'chatgpt-intro-datacamp',
    slug: 'chatgpt-intro-datacamp',
    title: 'Introduction to ChatGPT',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/skill-verification/CGPTI0024636800673'
  },
  {
    id: 'openai-api-datacamp',
    slug: 'openai-api-datacamp',
    title: 'Working with the OpenAI API',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/skill-verification/WWOA0019932253174',
    badges: [
      { title: 'Statement of Accomplishment', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d7d8a4312c834b13b8f6365a0eacb2b035d3baa4' }
    ]
  },
  {
    id: 'prompt-engineering-datacamp',
    slug: 'prompt-engineering-datacamp',
    title: 'Prompt Engineering with the OpenAI API',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/skill-verification/CPE0706247096118',
    badges: [
      { title: 'Statement of Accomplishment', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a6993f04b489dc1a6d585bc01b1415da61117c64' }
    ]
  },
  {
    id: 'sql-intro-datacamp',
    slug: 'sql-intro-datacamp',
    title: 'Introduction to SQL',
    issuer: 'DataCamp',
    date: '2026',
    category: 'fundamentals',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ffd4e849dd6e370da867e8d81f0392e5460b59f9'
  },
  {
    id: 'sql-intermediate-datacamp',
    slug: 'sql-intermediate-datacamp',
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    date: '2026',
    category: 'fundamentals',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/1aa7174a7e004f24b0bf376130b931482cf74acb'
  },
  {
    id: 'azure-management-datacamp',
    slug: 'azure-management-datacamp',
    title: 'Understanding Microsoft Azure Management and Governance',
    issuer: 'DataCamp',
    date: '2026',
    category: 'cloud',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d0cc70002a7fe423c1c41f82f90467772786326e'
  },
  {
    id: 'azure-architecture-datacamp',
    slug: 'azure-architecture-datacamp',
    title: 'Understanding Microsoft Azure Architecture and Services',
    issuer: 'DataCamp',
    date: '2026',
    category: 'cloud',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/dc9fa7b2de514d49f4944b42ff85596feadf9acf'
  },
  {
    id: 'azure-understanding-datacamp',
    slug: 'azure-understanding-datacamp',
    title: 'Understanding Microsoft Azure',
    issuer: 'DataCamp',
    date: '2026',
    category: 'cloud',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ebabb99bb06f9dcae88f4aabb06ff4be3b86c697'
  },
  {
    id: 'cloud-datacamp',
    slug: 'cloud-datacamp',
    title: 'Understanding Cloud Computing',
    issuer: 'DataCamp',
    date: '2026',
    category: 'cloud',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/f35fd7b1ae4d3d3a075772df910c20b986bde843'
  },
  {
    id: 'langchain-llm-datacamp',
    slug: 'langchain-llm-datacamp',
    title: 'Developing LLM Applications with LangChain',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/0cafb7b412a26e64cbf92afcc7b6abcfd0e8fc53'
  },
  {
    id: 'swe-python',
    slug: 'swe-python',
    title: 'Software Engineering Principles in Python',
    issuer: 'DataCamp',
    date: '2026',
    category: 'fullstack',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/f536e9e05b34fbf2e46ade90d2bf5287cc915f8a'
  },
  {
    id: 'huggingface-datacamp',
    slug: 'huggingface-datacamp',
    title: 'Working with Hugging Face',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/cdc84337c653b322f6e99d654eddb7eb78b5839a'
  },
  {
    id: 'llmops-datacamp',
    slug: 'llmops-datacamp',
    title: 'LLMOps Concepts',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/e9bb59db7599acde962343b76f50f91525f33a8b'
  },
  {
    id: 'openai-systems-datacamp',
    slug: 'openai-systems-datacamp',
    title: 'Developing AI Systems with the OpenAI API',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a8ebe917063238bb577947719c77ccc3a11e48b0'
  },
  {
    id: 'openai-embeddings-datacamp',
    slug: 'openai-embeddings-datacamp',
    title: 'Introduction to Embeddings with the OpenAI API',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/4cd285a0b58216b3db6e6d80ac8781fe37a552a1'
  },
  {
    id: 'pinecone-datacamp',
    slug: 'pinecone-datacamp',
    title: 'Building AI Applications with Pinecone',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/854ee17ec3751d3a15c70a2af743567d1f9ae051'
  },
  {
    id: 'azure-fundamentals-datacamp',
    slug: 'azure-fundamentals-datacamp',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'DataCamp',
    date: '2026',
    category: 'cloud',
    featured: true,
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/e192b3005931b8abf59ae4dd6f3b5e1d0f4d94c4?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa'
  }
];
