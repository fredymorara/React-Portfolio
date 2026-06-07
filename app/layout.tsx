import React from 'react';
import type { Metadata } from 'next';
import { Outfit, Silkscreen } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

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
const siteTitle = 'Fredrick Momanyi Morara | Software & AI Engineer';
const siteDescription = 'Fredrick Momanyi Morara is a versatile Software Engineer and Associate AI Engineer skilled in JavaScript, Python, React, Next.js, and Azure/AWS cloud platforms. Specializing in scalable web applications, intelligent RAG pipelines, and modern AI integrations.';

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
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      publisher: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Fredrick Momanyi Morara',
      url: siteUrl,
      jobTitle: 'Software Engineer & Associate AI Engineer',
      description: siteDescription,
      email: 'momanyifredm@gmail.com',
      telephone: '+254796795712',
      sameAs: [
        'https://www.linkedin.com/in/freddymorara/',
        'https://github.com/fredymorara',
        'https://medium.com/@freddymorara',
        'https://wellfound.com/u/fredrick-momanyi-morara',
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Kabarak University',
      },
      knowsAbout: [
        'JavaScript', 'TypeScript', 'Python', 'React', 'Next.js',
        'Node.js', 'Tailwind CSS', 'AWS', 'Microsoft Azure',
        'Machine Learning', 'RAG Pipelines', 'LangChain', 'OpenAI',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#person` },
      description: siteDescription,
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${outfit.variable} ${silkscreen.variable} relative antialiased bg-[#050505] text-white/90`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md">
          Skip to main content
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
        <div className="main-mask pointer-events-none fixed inset-0 -z-50" />
        <div className="pointer-events-none fixed inset-0 -z-40 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </body>
    </html>
  );
}
