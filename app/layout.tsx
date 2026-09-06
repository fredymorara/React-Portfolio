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
    'Next.js 16 Developer',
    'React Developer',
    'NestJS Developer',
    'Python Developer',
    'RAG Pipelines',
    'Agentic AI',
    'Kenya',
    'Portfolio',
    'JavaScript',
    'TypeScript',
    'ReactJS',
    'Next.js',
    'Tailwind CSS v4',
    'Node.js',
    'NestJS',
    'Prisma ORM',
    'Drizzle ORM',
    'Supabase',
    'Swagger',
    'OpenAI API',
    'LangChain',
    'AWS Cloud',
    'Amazon Web Services',
    'AWS Bedrock',
    'Microsoft Azure',
    'Microsoft Foundry',
    'Microsoft Agent Framework',
    'Azure AI',
    'MCP (Model Context Protocol)',
    'SQL',
    'PostgreSQL',
    'MongoDB',
    'Hire Software Engineer Kenya',
    'Freelance AI Engineer',
    'Hire React Developer Kenya',
    'Hire Next.js Developer',
    'Remote Software Engineer Kenya',
    'Hire Full-Stack Engineer',
    'Hire Python AI Developer',
    'Freelance Web Developer Kenya',
    'Cisco Certified Developer',
    'DataCamp Certified AI Engineer',
    'Microsoft Azure Certified',
    'Kenya Software Developer for Hire',
  ],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
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
        url: `${siteUrl}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Fredrick Momanyi Morara – Software & AI Engineer Portfolio',
        type: 'image/jpeg',
      },
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Fredrick Momanyi Morara – Software & AI Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/opengraph-image.jpg`],
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
    google: 'BIvvm8Lv9w341qzRGyJqif2MTT1yafymfmV7uTdakXk',
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
      datePublished: '2024-09-01',
      dateModified: '2026-09-06',
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
      jobTitle: 'Full-Stack Developer & AI Engineer',
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
        name: 'Full-Stack Developer & AI Engineer',
        description: 'Specializes in scalable web applications with Next.js/NestJS, intelligent RAG pipelines, and modern AI integrations using AWS Bedrock and Microsoft Foundry.',
        skills: 'TypeScript, Python, Next.js 16, React 19, NestJS 11, AWS Bedrock, Microsoft Foundry, Azure AI, MCP, Node.js, Tailwind CSS v4, Prisma, Drizzle, PostgreSQL, MongoDB, Supabase, Pinecone, OpenAI, LangChain, Docker, Neon, Better Auth',
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
        'TypeScript', 'Next.js 16', 'React 19', 'NestJS 11', 'Python 3', 'AWS Bedrock',
        'Microsoft Foundry', 'Azure AI', 'MCP', 'Node.js', 'Tailwind CSS v4', 'Swagger',
        'MS Agent Framework', 'PostgreSQL', 'MongoDB', 'Pinecone', 'OpenAI API', 'LangChain',
        'RAG Pipelines', 'JavaScript', 'Express', 'SQL', 'Git', 'GitHub',
        'Drizzle ORM', 'Prisma ORM', 'Supabase', 'Better Auth', 'Docker', 'Neon Serverless Postgres',
        'Zustand', 'Framer Motion', 'GraphQL', 'Vercel', 'A2A'
      ],

      // ── Certifications (EducationalOccupationalCredential) ──
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Extract insights from visual data on Azure',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Microsoft Learn' },
          dateCreated: '2026',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Develop computer vision solutions with Microsoft Foundry',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Microsoft Learn' },
          dateCreated: '2026',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Develop natural language solutions in Azure',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Microsoft Learn' },
          dateCreated: '2026',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Develop AI agents on Azure',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Microsoft Learn' },
          dateCreated: '2026',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Associate AI Engineer for Developers',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
          dateCreated: '2026',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Developing AI Applications',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
          dateCreated: '2026',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Microsoft Azure Fundamentals (AZ-900)',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
          dateCreated: '2026',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Artificial Intelligence Fundamentals',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
          dateCreated: '2026',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Linux Unhatched',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Cisco Networking Academy' },
          dateCreated: '2026',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'JavaScript Essentials 1',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Cisco Networking Academy' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'JavaScript Essentials 2',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Cisco Networking Academy' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Web Development Fundamentals',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'IBM SkillsBuild' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Learn React',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Codecademy' },
          dateCreated: '2024',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Develop generative AI apps in Azure',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'Microsoft Learn' },
          dateCreated: '2026',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Developing AI Applications',
          credentialCategory: 'Professional Certification',
          recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
          dateCreated: '2026',
        },
      ],

      // ── Portfolio Projects (CreativeWork) ──
      mainEntityOfPage: { '@id': `${siteUrl}/#webpage` },
    },

    {
      '@type': 'SoftwareApplication',
      name: 'Flic Movies',
      description: 'A modern streaming web application built as a monorepo, pairing a dynamic Next.js frontend with a heavily secured NestJS backend.',
      url: 'https://flicmovies.me',
      applicationCategory: 'EntertainmentApplication',
      operatingSystem: 'Web',
      author: { '@id': `${siteUrl}/#person` },
      datePublished: '2026-01-15',
      codeRepository: 'https://github.com/fredymorara/movies',
      programmingLanguage: ['Next.js 16', 'NestJS 11', 'TypeScript', 'Tailwind CSS v4', 'Prisma ORM', 'PostgreSQL', 'Redis'],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Wave Anime',
      description: 'A modern web application for tracking and watching anime. Features cross-device sync, auto-skip, community features, and a cyberpunk admin dashboard.',
      url: 'https://anime.flicmovies.me',
      applicationCategory: 'EntertainmentApplication',
      operatingSystem: 'Web',
      author: { '@id': `${siteUrl}/#person` },
      datePublished: '2026-06-10',
      codeRepository: 'https://github.com/fredymorara/wave',
      programmingLanguage: ['Next.js 15', 'React 19', 'Zustand', 'Tailwind CSS v4', 'Neon Serverless DB', 'Drizzle ORM', 'Node.js', 'Better Auth'],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Autonomous AWS Bedrock Travel Agent',
      description: 'An AI-powered travel agent utilizing AWS Bedrock for advanced reasoning, connected to live external APIs via MCP Gateways.',
      url: `${siteUrl}/work/aws-bedrock-assistant`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      author: { '@id': `${siteUrl}/#person` },
      datePublished: '2026-02-15',
      programmingLanguage: ['AWS Bedrock', 'MCP Gateways', 'TypeScript', 'Node.js', 'Next.js 15'],
    },

    // ── Skills ItemList (machine-readable skill inventory) ──
    {
      '@type': 'ItemList',
      '@id': `${siteUrl}/#skills`,
      name: 'Technical Skills',
      description:
        'Technical skills and competencies of Fredrick Momanyi Morara',
      itemListElement: [
        'TypeScript', 'Next.js 16', 'React 19', 'NestJS 11', 'Python 3', 'AWS Bedrock',
        'Microsoft Foundry', 'Azure AI', 'MCP', 'Node.js', 'Tailwind CSS v4', 'Swagger',
        'MS Agent Framework', 'PostgreSQL', 'MongoDB', 'Pinecone', 'OpenAI API', 'LangChain',
        'RAG Pipelines', 'JavaScript', 'Express', 'SQL', 'Git', 'GitHub',
        'Drizzle ORM', 'Prisma ORM', 'Supabase', 'Better Auth', 'Docker', 'Neon',
        'Zustand', 'Framer Motion', 'GraphQL', 'Vercel'
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
