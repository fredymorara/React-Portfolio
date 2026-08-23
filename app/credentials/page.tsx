'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { certifications, Certification } from '@/constants/certifications';
import FilterTabs from '@/components/ui/FilterTabs';

const TABS = ['All', 'AI & ML', 'Cloud', 'Full-Stack', 'Fundamentals'];

const CATEGORY_MAP: Record<string, Certification['category']> = {
  'AI & ML': 'ai',
  'Cloud': 'cloud',
  'Full-Stack': 'fullstack',
  'Fundamentals': 'fundamentals',
};

export default function CredentialsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? certifications
    : certifications.filter((c) => c.category === CATEGORY_MAP[active]);

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Back nav */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-16 transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          <span>Home</span>
        </Link>

        {/* Header */}
        <div className="mb-16 space-y-6">
          <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
            Continuous Learning
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white/95">
            Credentials
          </h1>
          <p className="max-w-2xl text-lg text-white/50">
            Alongside building, I&apos;ve been studying systematically, covering AI fundamentals, cloud infrastructure, and software engineering across Google, Microsoft, AWS, and DataCamp.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-12">
          <FilterTabs tabs={TABS} active={active} onChange={setActive} />
        </div>

        {/* Count */}
        <p className="text-sm text-white/30 mb-8 font-Silkscreen uppercase tracking-widest">
          {filtered.length} credential{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Credential list */}
        <div className="divide-y divide-white/5">
          {filtered.map((cert) => {
            const catStyles = {
              ai: 'text-[#39e75f]/60 border-[#39e75f]/20 bg-[#39e75f]/5',
              cloud: 'text-[#ADD8E6]/60 border-[#ADD8E6]/20 bg-[#ADD8E6]/5',
              fullstack: 'text-[#DD2476]/60 border-[#DD2476]/20 bg-[#DD2476]/5',
              fundamentals: 'text-white/40 border-white/10 bg-white/5'
            }[cert.category] || 'text-white/40 border-white/10 bg-white/5';

            const catName = {
              ai: 'AI & ML',
              cloud: 'Cloud',
              fullstack: 'Full-Stack',
              fundamentals: 'Fundamentals'
            }[cert.category] || 'Fundamentals';

            return (
              <div
                key={cert.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 group"
              >
              <div className="flex flex-col gap-1">
                <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                  {cert.title}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white/40">{cert.issuer}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs font-Silkscreen text-white/30 uppercase tracking-widest">{cert.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-Silkscreen uppercase tracking-wider border ${catStyles}`}>
                  {catName}
                </span>
                {cert.link && (
                  <Link
                    href={cert.link}
                    target="_blank"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-white/40 text-xs hover:text-white hover:border-white/30 transition-all duration-300"
                  >
                    <ExternalLink size={12} />
                    <span>View</span>
                  </Link>
                )}
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
