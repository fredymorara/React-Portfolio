import React from 'react';
import type { Metadata } from 'next';
import { Outfit, Silkscreen } from 'next/font/google';


import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
});

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-silkscreen',
});

const siteUrl = 'https://freddymorara.tech';
const siteTitle = 'Fredrick Momanyi Morara | Full-Stack & AI Developer';
const siteDescription = 'Fredrick Momanyi Morara builds polished, user-facing web applications powered by practical AI integrations and solid backend environments. React, Next.js, Node.js, Python, and RAG pipelines, which I have shipped and deployed. Open to entry-level roles at startups and technical teams.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Fredrick Momanyi Morara',
  },
  description: siteDescription,
  creator: 'Fredrick Momanyi Morara',
  publisher: 'Fredrick Momanyi Morara',
  applicationName: 'Fredrick Momanyi Morara Portfolio',
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    'Fredrick Momanyi Morara',
    'Fredrick Morara',
    'Freddy Morara',
    'Fred Momanyi',
    'Software Engineer',
    'Software Developer',
    'AI Engineer',
    'Associate AI Engineer',
    'Machine Learning',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Python Developer',
    'RAG Pipelines',
    'Vector Databases',
    'Kenya',
    'Portfolio',
    'JavaScript Developer',
    'TypeScript Developer',
    'ReactJS',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'OpenAI API',
    'LangChain',
    'AWS Cloud',
    'Amazon Web Services',
    'Microsoft Azure',
    'Azure AI',
    'Azure Fundamentals',
    'SQL',
    'Pinecone',
    'ChromaDB',
    'Hire React Developer Kenya',
    'Freelance AI Engineer',
    'Hire Software Engineer Kenya',
    'Kabarak University',
  ],
  icons: {
    icon: '/icon.svg',
    apple: '/android-chrome-192x192.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Fredrick Momanyi Morara Portfolio',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 628,
        alt: 'Fredrick Momanyi Morara – Software & AI Engineer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/opengraph-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── WebSite ──
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      publisher: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-US',
    },

    // ── ProfilePage (wraps the main page as a resume/profile) ──
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: { '@id': `${siteUrl}/#person` },
      description: siteDescription,
      inLanguage: 'en-US',
      dateModified: '2026-06-08',
    },

    // ── Person (Full CV / Resume) ──
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Fredrick Momanyi Morara',
      givenName: 'Fredrick',
      familyName: 'Morara',
      additionalName: 'Momanyi',
      url: siteUrl,
      image: `${siteUrl}/opengraph-image.jpg`,
      jobTitle: 'Software Engineer & Associate AI Engineer',
      description: siteDescription,
      email: 'momanyifredm@gmail.com',
      telephone: '+254796795712',
      nationality: { '@type': 'Country', name: 'Kenya' },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'KE',
        addressLocality: 'Kenya',
      },

      // ── Social Profiles ──
      sameAs: [
        'https://www.linkedin.com/in/freddymorara/',
        'https://github.com/fredymorara',
        'https://medium.com/@freddymorara',
        'https://wellfound.com/u/fredrick-momanyi-morara',
      ],

      // ── Current Occupation ──
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Software Engineer & Associate AI Engineer',
        description:
          'Specializes in scalable web applications with React/Next.js, intelligent RAG pipelines, and modern AI integrations using Python, LangChain, and vector databases.',
        skills:
          'JavaScript, TypeScript, Python, C++, React, Next.js, Node.js, Express, Tailwind CSS, AWS, Microsoft Azure, SQL, MongoDB, Pinecone, ChromaDB, OpenAI API, LangChain, Hugging Face, RAG Pipelines, Git, GitHub',
        occupationLocation: {
          '@type': 'Country',
          name: 'Kenya',
        },
      },

      // ── Education ──
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Kabarak University',
        url: 'https://www.kabarak.ac.ke/',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'KE',
          addressRegion: 'Nakuru',
        },
      },

      // ── Skills (machine-readable list) ──
      knowsAbout: [
        'JavaScript',
        'TypeScript',
        'Python',
        'C++',
        'React',
        'Next.js',
        'Node.js',
        'Express.js',
        'Tailwind CSS',
        'Amazon Web Services',
        'Microsoft Azure',
        'SQL',
        'MongoDB',
        'Redis',
        'Pinecone',
        'ChromaDB',
        'Vector Databases',
        'OpenAI API',
        'LangChain',
        'Hugging Face',
        'RAG Pipelines',
        'Machine Learning',
        'Natural Language Processing',
        'Retrieval-Augmented Generation',
        'REST APIs',
        'Git',
        'GitHub',
        'Supabase',
        'Clerk Authentication',
        'Framer Motion',
      ],

      // ── Certifications (EducationalOccupationalCredential) ──
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Associate AI Engineer for Developers',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'ReactJS Certification',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Codecademy' },
          dateCreated: '2023',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Web Development Fundamentals',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'IBM Skills Build' },
          dateCreated: '2023',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Javascript Essentials 1 & 2',
          credentialCategory: 'Professional Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Cisco Networking Academy',
          },
          dateCreated: '2023',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Linux Unhatched',
          credentialCategory: 'Professional Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Cisco Networking Academy',
          },
          dateCreated: '2023',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Amazon Web Services (AWS) Projects',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'NextWork' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Introduction to Large Language Models',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Google' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Introduction to Generative AI',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Google' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Introduction to Responsible AI',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Google' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Software Engineering Principles in Python',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Understanding Cloud Computing',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Artificial Intelligence Fundamentals',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'AWS AI & ML Scholars',
          credentialCategory: 'Professional Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: 'AWS with Udacity',
          },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Develop Generative AI Apps in Azure',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Microsoft' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Microsoft Azure Fundamentals (AZ-900)',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
          dateCreated: '2024',
        },
      ],

      // ── Portfolio Projects (CreativeWork) ──
      mainEntityOfPage: { '@id': `${siteUrl}/#webpage` },
    },

    
    // ── Project 3: HansCredit ──
    {
      '@type': 'SoftwareApplication',
      name: 'HansCredit',
      description:
        'A modern credit loans application designed for users to apply for and manage credit loans. Built with Next.js, JavaScript, and Tailwind CSS.',
      url: 'https://hanscredit.co.ke/',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      author: { '@id': `${siteUrl}/#person` },
      datePublished: '2026-02-10',
      codeRepository: 'https://github.com/fredymorara/HansCredit',
      programmingLanguage: ['JavaScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },

    

    // ── Project 5: Smart AI Library Assistant ──
    {
      '@type': 'SoftwareApplication',
      name: 'Smart AI Library Assistant',
      description:
        'An AI-powered library assistant using a Retrieval-Augmented Generation (RAG) pipeline with vector databases and Hugging Face API for intelligent information retrieval.',
      url: 'https://ai-library-update.vercel.app/',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      author: { '@id': `${siteUrl}/#person` },
      datePublished: '2025-12-19',
      codeRepository: 'https://github.com/fredymorara/ai-library',
      programmingLanguage: [
        'React',
        'Next.js',
        'JavaScript',
        'RAG Pipeline',
        'Vector Databases',
        'Hugging Face API',
      ],
    },

    // ── Project 6: AI Spam Message Detector ──
    {
      '@type': 'SoftwareApplication',
      name: 'AI Spam Message Detector',
      description:
        'An AI-powered spam detection tool using a Linear SVM model to classify text messages, built with Python, scikit-learn, and Streamlit.',
      url: 'https://aispamdetector.streamlit.app/',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      author: { '@id': `${siteUrl}/#person` },
      datePublished: '2025-07-20',
      codeRepository:
        'https://github.com/fredymorara/AI-Spam-Detector-App',
      programmingLanguage: [
        'Python',
        'scikit-learn',
        'Streamlit',
        'NLTK',
        'Machine Learning',
      ],
    },

    // ── Project 7: Student Welfare Management System ──
    {
      '@type': 'SoftwareApplication',
      name: 'Student Welfare Management System',
      description:
        'A comprehensive application to manage student welfare activities with React frontend, Node.js/Express backend, MongoDB, and M-Pesa Daraja API integration.',
      url: 'https://kabarakstudentwelfare.netlify.app/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      author: { '@id': `${siteUrl}/#person` },
      datePublished: '2025-09-20',
      codeRepository: 'https://github.com/fredymorara/wms',
      programmingLanguage: [
        'React',
        'JavaScript',
        'Node.js',
        'Express',
        'MongoDB',
      ],
    },

    // ── Skills ItemList (machine-readable skill inventory) ──
    {
      '@type': 'ItemList',
      '@id': `${siteUrl}/#skills`,
      name: 'Technical Skills',
      description:
        'Technical skills and competencies of Fredrick Momanyi Morara',
      itemListElement: [
        'JavaScript',
        'TypeScript',
        'Python',
        'C++',
        'React',
        'Next.js',
        'Node.js',
        'Express.js',
        'Tailwind CSS',
        'AWS',
        'Microsoft Azure',
        'SQL',
        'MongoDB',
        'Vector Databases',
        'Pinecone',
        'ChromaDB',
        'OpenAI API',
        'LangChain',
        'RAG Pipelines',
        'Hugging Face',
        'Git',
        'GitHub',
      ].map((skill, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: skill,
      })),
    },
  ],
};

import { MotionProvider } from '@/components/providers/MotionProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${silkscreen.variable} relative antialiased bg-background text-white/90`}>
        <MotionProvider>
          {/* Global Background Elements */}
          <div 
            className="fixed inset-0 -z-30 opacity-40 mix-blend-screen bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url('/bghero.png')` }}
          />
          <div className="fixed inset-0 -z-30 bg-background/70 pointer-events-none" />

          <div className="pointer-events-none fixed top-0 -z-20 size-full overflow-hidden opacity-50 [mask-image:radial-gradient(1000px_circle_at_center,#000,transparent)]">
            <AnimatedGridPattern
              numSquares={100}
              maxOpacity={0.2}
              duration={3}
              repeatDelay={10}
              colors={['#DD2476','#FF512F','#DC3D43']}
              className="inset-x-[4.5px] inset-y-[-30%] h-[150%]"
            />
          </div>
          
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md">
            Skip to main content
          </a>
          <NavBar />
          <main id="main-content">{children}</main>
          <Footer />
          <div className="main-mask pointer-events-none fixed inset-0 -z-50" />
          <div className="pointer-events-none fixed inset-0 -z-40 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        </MotionProvider>
      </body>
    </html>
  );
}
