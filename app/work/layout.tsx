import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Things I've Built – Production Projects & Case Studies",
  description:
    'Curated portfolio of deployed AI applications, full-stack monorepos, and cloud services architected and shipped by Fredrick Momanyi Morara.',
  alternates: {
    canonical: 'https://freddymorara.tech/work',
  },
  openGraph: {
    type: 'website',
    url: 'https://freddymorara.tech/work',
    title: "Things I've Built – Production Projects & Case Studies | Fredrick M. Morara",
    description:
      'Curated portfolio of deployed AI applications, full-stack monorepos, and cloud services architected and shipped by Fredrick Momanyi Morara.',
    images: ['https://freddymorara.tech/opengraph-image.jpg'],
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
