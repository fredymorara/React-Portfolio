import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Download } from 'lucide-react';
import { Metadata } from 'next';
import { certifications } from '@/constants/certifications';
import { safeUrl } from '@/lib/utils';

export function generateStaticParams() {
  return certifications
    .filter((cert) => cert.slug)
    .map((cert) => ({
      slug: cert.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cert = certifications.find((c) => c.slug === slug);

  if (!cert) {
    return {
      title: 'Credential Not Found',
    };
  }

  const siteUrl = 'https://freddymorara.tech';
  const pageUrl = `${siteUrl}/credentials/${slug}`;
  const title = `${cert.title} Certification & Verification | Fredrick M. Morara`;
  const description = `Verified ${cert.title} credential issued by ${cert.issuer} (${cert.date}). Curriculum, skills validation, and official proof portfolio by Fredrick Momanyi Morara.`;
  
  let imageUrl = `${siteUrl}/opengraph-image.jpg`;
  if (cert.badge) {
    imageUrl = `${siteUrl}${safeUrl(cert.badge)}`;
  } else if (cert.pdfUrl && !cert.pdfUrl.endsWith('.pdf')) {
    imageUrl = `${siteUrl}${safeUrl(cert.pdfUrl)}`;
  }

  return {
    title,
    description,
    keywords: [
      cert.title,
      cert.issuer,
      'Fredrick Momanyi Morara',
      'Fredrick Morara',
      'Freddy Morara',
      'Credential Verification',
      'Industry Certification',
      cert.category,
      'Continuous Learning',
      'Software Engineer Kenya',
      'AI Engineer',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'article',
      url: pageUrl,
      title: `${cert.title} – ${cert.issuer}`,
      description,
      siteName: 'Fredrick Momanyi Morara Portfolio',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${cert.title} credential badge`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cert.title} – ${cert.issuer}`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function CredentialDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cert = certifications.find((c) => c.slug === slug);

  if (!cert) {
    notFound();
  }

  const siteUrl = 'https://freddymorara.tech';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOccupationalCredential', 'Course'],
        '@id': `${siteUrl}/credentials/${slug}#credential`,
        name: cert.title,
        description: `Verified credential in ${cert.title} issued by ${cert.issuer}.`,
        credentialCategory: 'Certification',
        educationalLevel: 'Professional',
        recognizedBy: {
          '@type': 'Organization',
          name: cert.issuer,
        },
        url: `${siteUrl}/credentials/${slug}`,
        image: cert.badge ? `${siteUrl}${safeUrl(cert.badge)}` : `${siteUrl}/opengraph-image.jpg`,
        validates: cert.title,
        dateCreated: cert.date,
        author: {
          '@type': 'Person',
          name: 'Fredrick Momanyi Morara',
          url: siteUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/credentials/${slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Credentials',
            item: `${siteUrl}/credentials`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: cert.title,
            item: `${siteUrl}/credentials/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen text-white px-6 py-24">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl">
        <Link
          href="/credentials"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-12 transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          <span>Back to Credentials</span>
        </Link>

        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-white/60">{cert.issuer}</span>
              <span className="text-white/20">·</span>
              <span className="text-xs font-Silkscreen text-white/40 uppercase tracking-widest">{cert.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white/95">
              {cert.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {cert.link && (
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm"
                >
                  <ExternalLink size={14} />
                  <span>Verify on {cert.issuer}</span>
                </Link>
              )}
              {cert.downloadUrl && (
                <a
                  href={safeUrl(cert.downloadUrl)}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm"
                >
                  <Download size={14} />
                  <span>Download Certificate (PDF)</span>
                </a>
              )}
            </div>
          </div>

          {cert.badge && (
            <div className="shrink-0 h-24 w-24 md:h-28 md:w-28 rounded-2xl bg-white/5 overflow-hidden border border-white/10 p-2 flex items-center justify-center shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={safeUrl(cert.badge)}
                alt={`${cert.title} badge`}
                className="h-full w-full object-contain rounded-xl"
              />
            </div>
          )}
        </div>

        {cert.pdfUrl && (
          <div className={`mb-16 mx-auto rounded-xl border border-white/10 overflow-hidden bg-white/5 w-full max-w-4xl ${cert.pdfUrl.endsWith('.pdf') ? 'aspect-[4/3] md:aspect-[16/9]' : ''}`}>
            {cert.pdfUrl.endsWith('.pdf') ? (
              <iframe 
                src={`${safeUrl(cert.pdfUrl)}#toolbar=0&view=FitH`}
                className="w-full h-full"
                title={`${cert.title} Certificate`}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={safeUrl(cert.pdfUrl)} 
                alt={`${cert.title} Certificate`} 
                className="w-full h-auto block"
              />
            )}
          </div>
        )}

        {cert.badges && cert.badges.length > 0 && (
          <div className="w-full max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-medium mb-6 text-white/80">Modules Completed in this Path</h2>
            <div className="flex flex-col gap-3">
              {cert.badges.map((badge, idx) => (
                <div key={idx} className="py-4 px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group bg-card-bg rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-white/70 group-hover:text-white transition-colors">
                    {badge.title}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    {badge.downloadUrl && (
                      <a
                        href={safeUrl(badge.downloadUrl)}
                        download
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-white/50 text-xs hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                      >
                        <Download size={12} />
                        <span>Download</span>
                      </a>
                    )}
                    {badge.link && (
                      <Link
                        href={badge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-white/50 text-xs hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                      >
                        <ExternalLink size={12} />
                        <span>Verify</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
