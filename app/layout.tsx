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
  title: 'Fredrick M. Morara',
  description: `Hi 👋, I'm Fredrick M. Morara. I'm a passionate software engineer with a knack for creating scalable, high-performance applications and reusable systems. With a strong foundation in front-end and back-end technologies, I specialize in crafting solutions that are as impactful for users as they are efficient for developers.`,
  creator: 'Fredrick M. Morara',
  applicationName: 'My website',
  keywords: [
    'Fredrick M. Morara',
    'Fredrick',
    'Morara',
    'Portfolio',
    'Next.js',
    'Software engineer',
  ],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://freddymorara.tech',
    title: 'Fredrick M. Morara - Software Engineer',
    description: `Hi 👋, I'm Fredrick M. Morara. I'm a passionate software engineer with a knack for creating scalable, high-performance applications and reusable systems. With a strong foundation in front-end and back-end technologies, I specialize in crafting solutions that are as impactful for users as they are efficient for developers.`,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 628,
        alt: 'Fredrick M. Morara - Software Engineer',
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
