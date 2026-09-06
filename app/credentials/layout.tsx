import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Credentials & Certifications – Continuous Learning',
  description:
    'Verified technical credentials and curriculum paths across Azure AI, Cisco Networking Academy, DataCamp, and IBM SkillsBuild by Fredrick Momanyi Morara.',
  alternates: {
    canonical: 'https://freddymorara.tech/credentials',
  },
  openGraph: {
    type: 'website',
    url: 'https://freddymorara.tech/credentials',
    title: 'Credentials & Certifications – Continuous Learning | Fredrick M. Morara',
    description:
      'Verified technical credentials and curriculum paths across Azure AI, Cisco Networking Academy, DataCamp, and IBM SkillsBuild by Fredrick Momanyi Morara.',
    images: ['https://freddymorara.tech/opengraph-image.jpg'],
  },
};

export default function CredentialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
