import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import { certifications } from '@/constants/certifications';

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

  return {
    title: `${cert.title} - Fredrick M. Morara`,
    description: `View the credential details for ${cert.title} issued by ${cert.issuer}.`,
  };
}

export default async function CredentialDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cert = certifications.find((c) => c.slug === slug);

  if (!cert) {
    notFound();
  }

  return (
    <main className="min-h-screen text-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/credentials"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-12 transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          <span>Back to Credentials</span>
        </Link>

        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/40">{cert.issuer}</span>
            <span className="text-white/20">·</span>
            <span className="text-xs font-Silkscreen text-white/30 uppercase tracking-widest">{cert.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white/95">
            {cert.title}
          </h1>
          {cert.link && (
            <Link
              href={cert.link}
              target="_blank"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-300 text-sm mt-4"
            >
              <ExternalLink size={14} />
              <span>Verify on {cert.issuer}</span>
            </Link>
          )}
        </div>

        {cert.pdfUrl && (
          <div className={`mb-16 mx-auto rounded-xl border border-white/10 overflow-hidden bg-white/5 w-full max-w-4xl ${cert.pdfUrl.endsWith('.pdf') ? 'aspect-[4/3] md:aspect-[16/9]' : ''}`}>
            {cert.pdfUrl.endsWith('.pdf') ? (
              <iframe 
                src={`${encodeURI(cert.pdfUrl)}#toolbar=0&view=FitH`}
                className="w-full h-full"
                title={`${cert.title} Certificate`}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={encodeURI(cert.pdfUrl)} 
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
                <div key={idx} className="py-4 px-6 flex items-center justify-between group bg-card-bg rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-white/70 group-hover:text-white transition-colors">
                    {badge.title}
                  </span>
                  <Link
                    href={badge.link}
                    target="_blank"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-white/40 text-xs hover:text-white hover:border-white/30 transition-all duration-300 shrink-0"
                  >
                    <ExternalLink size={12} />
                    <span className="hidden sm:inline">Verify</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
