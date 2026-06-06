import React from 'react';
import type { Metadata } from 'next';
import { Outfit, Silkscreen } from 'next/font/google';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://freddymorara.tech'),
  title: 'Fredrick Momanyi Morara | Software & AI Engineer',
  description: `Fredrick Momanyi Morara is a versatile Software Engineer and Associate AI Engineer. Specializing in Next.js, React, Python, and intelligent RAG pipelines using vector databases.`,
  creator: 'Fredrick Momanyi Morara',
  applicationName: 'Fredrick Momanyi Morara Portfolio',
  keywords: [
    'Fredrick Momanyi Morara',
    'Fredrick Morara',
    'Freddy Morara',
    'Fred Momanyi',
    'Fred',
    'Freddy',
    'Freddd',
    'Freddddy',
    'Fredick',
    'Fredrick',
    'Fredrrick',
    'Morara',
    'Morar',
    'Momanyi',
    'mimanyi',
    'Software Engineer',
    'Software Developer',
    'Software Dev',
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
    // Expanded Technical Keywords
    'JavaScript Developer',
    'TypeScript Developer',
    'ReactJS',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'OpenAI API',
    'LangChain',
    'HuggingFace',
    'AWS Cloud',
    'Amazon Web Services',
    'MongoDB',
    'SQL',
    'Pinecone',
    'ChromaDB',
    // Hiring & Discovery Keywords
    'Hire React Developer Kenya',
    'Freelance AI Engineer',
    'Hire Software Engineer Kenya',
    'Frontend Architect',
    'Tech Portfolio',
  ],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://freddymorara.tech',
    title: 'Fredrick Momanyi Morara | Software & AI Engineer',
    description: `Fredrick Momanyi Morara is a versatile Software Engineer and Associate AI Engineer. Specializing in Next.js, React, Python, and intelligent RAG pipelines using vector databases.`,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 628,
        alt: 'Fredrick Momanyi Morara - Software & AI Engineer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${silkscreen.variable} relative antialiased bg-[#050505] text-white/90`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <div className="main-mask pointer-events-none fixed inset-0 -z-50" />
        <div className="pointer-events-none fixed inset-0 -z-40 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </body>
    </html>
  );
}
