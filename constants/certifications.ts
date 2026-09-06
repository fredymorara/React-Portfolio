export interface Badge {
  title: string;
  link?: string;
  downloadUrl?: string;
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
  downloadUrl?: string;
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    date: 'Apr 17, 2026', 
    category: 'ai',
    featured: true,
    pdfUrl: '/datacamp/Associate AI Engineer  for developers.png',
    downloadUrl: '/datacamp/Associate SOA.pdf',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/9522443604d9f5fb6a4dc966a2757c9150787e02?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
    badges: [
      {
        title: 'Working with the OpenAI API',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d7d8a4312c834b13b8f6365a0eacb2b035d3baa4',
        downloadUrl: '/datacamp/DATACAMP Working with the OpenAI API SOA CERTIFICATE 2.pdf',
      },
      {
        title: 'Prompt Engineering with the OpenAI API',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a6993f04b489dc1a6d585bc01b1415da61117c64',
        downloadUrl: '/datacamp/DATACAMP Prompt Engineering with the OpenAI API SOA CERTIFICATE 2.pdf',
      },
      {
        title: 'Working with Hugging Face',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/cdc84337c653b322f6e99d654eddb7eb78b5839a',
        downloadUrl: '/datacamp/DATACAMP Working with Hugging Face SOA CERTIFICATE.pdf',
      },
      {
        title: 'LLMOps Concepts',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/e9bb59db7599acde962343b76f50f91525f33a8b',
        downloadUrl: '/datacamp/DATACAMP LLMOps Concepts SOA CERTIFICATE.pdf',
      },
      {
        title: 'Developing AI Systems with the OpenAI API',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a8ebe917063238bb577947719c77ccc3a11e48b0',
        downloadUrl: '/datacamp/DATACAMP Developing AI Systems with the OpenAI API SOA CERTIFICATE.pdf',
      },
      {
        title: 'Introduction to Embeddings with the OpenAI API',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/4cd285a0b58216b3db6e6d80ac8781fe37a552a1',
        downloadUrl: '/datacamp/DATACAMP Introduction to Embeddings with the OpenAI API SOA CERTIFICATE.pdf',
      },
      {
        title: 'Building AI Applications with Pinecone',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/854ee17ec3751d3a15c70a2af743567d1f9ae051',
        downloadUrl: '/datacamp/DATACAMP Building AI Applications with Pinecone SOA CERTIFICATE.pdf',
      },
      {
        title: 'Software Engineering Principles in Python',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/f536e9e05b34fbf2e46ade90d2bf5287cc915f8a',
        downloadUrl: '/datacamp/DATACAMP Software Engineering Principles in Python SOA CERTIFICATE.pdf',
      },
      {
        title: 'Developing LLM Applications with LangChain',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/0cafb7b412a26e64cbf92afcc7b6abcfd0e8fc53',
        downloadUrl: '/datacamp/DATACAMP Developing LLM Applications with LangChain SOA CERTIFICATE.pdf',
      },
    ],
  },
  { 
    id: 'developing-ai-applications-datacamp', 
    slug: 'developing-ai-applications-datacamp',
    title: 'Developing AI Applications', 
    issuer: 'DataCamp', 
    date: 'Sep 03, 2026', 
    category: 'ai',
    featured: false,
    pdfUrl: '/datacamp/Developing AI Applications.png',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/39306d2621212f7c8b644f30c2cb1134c5b1ac3c?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
    badges: [
      {
        title: 'Working with the OpenAI API',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d7d8a4312c834b13b8f6365a0eacb2b035d3baa4',
        downloadUrl: '/datacamp/DATACAMP Working with the OpenAI API SOA CERTIFICATE 2.pdf',
      },
      {
        title: 'AI Ethics',
        link: 'https://www.datacamp.com/skill-verification/AIE0029822476123',
        downloadUrl: '/datacamp/DATACAMP AI ETHICS SOA CERTIFICATE.pdf',
      },
      {
        title: 'Prompt Engineering with the OpenAI API',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a6993f04b489dc1a6d585bc01b1415da61117c64',
        downloadUrl: '/datacamp/DATACAMP Prompt Engineering with the OpenAI API SOA CERTIFICATE 2.pdf',
      },
      {
        title: 'Working with Hugging Face',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/cdc84337c653b322f6e99d654eddb7eb78b5839a',
        downloadUrl: '/datacamp/DATACAMP Working with Hugging Face SOA CERTIFICATE.pdf',
      },
      {
        title: 'Introduction to Data Privacy',
      },
      {
        title: 'Developing AI Systems with the OpenAI API',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a8ebe917063238bb577947719c77ccc3a11e48b0',
        downloadUrl: '/datacamp/DATACAMP Developing AI Systems with the OpenAI API SOA CERTIFICATE.pdf',
      },
      {
        title: 'Introduction to Embeddings with the OpenAI API',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/4cd285a0b58216b3db6e6d80ac8781fe37a552a1',
        downloadUrl: '/datacamp/DATACAMP Introduction to Embeddings with the OpenAI API SOA CERTIFICATE.pdf',
      },
      {
        title: 'Developing LLM Applications with LangChain',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/0cafb7b412a26e64cbf92afcc7b6abcfd0e8fc53',
        downloadUrl: '/datacamp/DATACAMP Developing LLM Applications with LangChain SOA CERTIFICATE.pdf',
      },
    ],
  },
  {
    id: 'react-codecademy',
    slug: 'learn-react-codecademy',
    title: 'Learn React',
    issuer: 'Codecademy',
    date: 'Nov 17, 2024',
    category: 'fullstack',
    featured: true,
    pdfUrl: '/certs/CodeCademy Learn React.png',
    downloadUrl: '/certs/Learn React CodeCademy.pdf',
    link: 'https://www.codecademy.com/profiles/capsboost/certificates/af00e5032d0a68cc84879983f5d8333b',
  },
  {
    id: 'web-ibm',
    slug: 'web-development-fundamentals-ibm',
    title: 'Web Development Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Feb 22, 2024',
    category: 'fullstack',
    featured: false,
    badge: '/certs/IBM SkillsBuild/web-development-fundamentals.png',
    pdfUrl: '/certs/IBM SkillsBuild/web-dev-fundamentals.png',
    downloadUrl: '/certs/IBM SkillsBuild/IBMDesign20260905-20-tlb61n.pdf',
    link: 'https://www.credly.com/badges/9f293a6d-d5a7-4e12-989a-7caec75c8bbd/public_url',
  },
  {
    id: 'azure-fundamentals-datacamp',
    slug: 'azure-fundamentals-datacamp',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'DataCamp',
    date: 'May 15, 2026',
    category: 'cloud',
    featured: true,
    pdfUrl: '/certs/datacamp-azure-900.png',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/e192b3005931b8abf59ae4dd6f3b5e1d0f4d94c4?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
    badges: [
      {
        title: 'Understanding Cloud Computing',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/f35fd7b1ae4d3d3a075772df910c20b986bde843',
        downloadUrl: '/datacamp/DATACAMP Understanding Cloud Computing SOA CERTIFICATE.pdf',
      },
      {
        title: 'Understanding Microsoft Azure',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ebabb99bb06f9dcae88f4aabb06ff4be3b86c697',
        downloadUrl: '/datacamp/DATACAMP Understanding Microsoft Azure SOA CERTIFICATE.pdf',
      },
      {
        title: 'Understanding Microsoft Azure Architecture and Services',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/dc9fa7b2de514d49f4944b42ff85596feadf9acf',
        downloadUrl: '/datacamp/DATACAMP Understanding Microsoft Azure Architecture and Services SOA CERTIFICATE.pdf',
      },
      {
        title: 'Understanding Microsoft Azure Management and Governance',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d0cc70002a7fe423c1c41f82f90467772786326e',
        downloadUrl: '/datacamp/DATACAMP Understanding Microsoft Azure Management and Governance SOA CERTIFICATE.pdf',
      },
    ],
  },
  { 
    id: 'ai-fundamentals-datacamp', 
    slug: 'ai-fundamentals-datacamp',
    title: 'Artificial Intelligence Fundamentals', 
    issuer: 'DataCamp', 
    date: 'May 15, 2026', 
    category: 'ai',
    featured: false,
    pdfUrl: '/datacamp/ai-fundamentals.png',
    link: 'https://www.datacamp.com/skill-verification/AIF0020406437984'
  },
  { id: 'aws-ai-ml-scholars', title: 'AWS AI & ML Scholars', issuer: 'AWS with Udacity', date: '2024', category: 'cloud' },
  { id: 'aws-nextwork', title: 'Amazon Web Services (AWS) Projects', issuer: 'NextWork', date: '2024', category: 'cloud' },
  {
    id: 'js-essentials-1-cisco',
    slug: 'javascript-essentials-1-cisco',
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 01, 2024',
    category: 'fundamentals',
    featured: false,
    badge: '/CISCO/javascript-essentials-1-badge.png',
    pdfUrl: '/CISCO/JSessentials1.png',
    downloadUrl: '/CISCO/JavaScript_Essentials_1_certificate.pdf',
    link: 'https://www.credly.com/badges/2f611a84-0c6b-47e8-8bbe-60611b834fb0/public_url',
  },
  {
    id: 'js-essentials-2-cisco',
    slug: 'javascript-essentials-2-cisco',
    title: 'JavaScript Essentials 2',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 23, 2024',
    category: 'fundamentals',
    featured: false,
    badge: '/CISCO/javascript-essentials-2-badge.png',
    pdfUrl: '/CISCO/JSessentials2.png',
    downloadUrl: '/CISCO/JavaScript_Essentials_2_certificate.pdf',
    link: 'https://www.credly.com/badges/3068b105-755a-413b-9120-5d2462b360f3/public_url',
  },
  {
    id: 'linux-cisco',
    slug: 'linux-unhatched-cisco',
    title: 'Linux Unhatched',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 12, 2026',
    category: 'fundamentals',
    featured: false,
    badge: '/CISCO/linux-unhatched-badge.png',
    pdfUrl: '/CISCO/linux unhatched.png',
    downloadUrl: '/CISCO/Linux_Unhatched_certificate.pdf',
    link: 'https://www.credly.com/badges/e63a9c2d-bf49-4c0d-a538-80c70afece7c/public_url',
  },

  // Standalone courses / in-progress tracks
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
    id: 'chatgpt-intro-datacamp',
    slug: 'chatgpt-intro-datacamp',
    title: 'Introduction to ChatGPT',
    issuer: 'DataCamp',
    date: '2026',
    category: 'ai',
    link: 'https://www.datacamp.com/skill-verification/CGPTI0024636800673'
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
  // { id: 'llm-google', title: 'Introduction to Large Language Models', issuer: 'Google', date: '2024', category: 'ai' },
  // { id: 'genai-google', title: 'Introduction to Generative AI', issuer: 'Google', date: '2024', category: 'ai' },
  // { id: 'resp-ai-google', title: 'Introduction to Responsible AI', issuer: 'Google', date: '2024', category: 'ai' },
];
