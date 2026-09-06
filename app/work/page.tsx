'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/constants/projects';
import FilterTabs from '@/components/ui/FilterTabs';
import ProjectCard from '@/components/ui/ProjectCard';

const TABS = ['All', 'Web Apps', 'AI', 'Cloud', 'Full-Stack'];

const CATEGORY_MAP: Record<string, string> = {
  'Web Apps': 'web',
  'AI': 'ai',
  'Cloud': 'cloud',
  'Full-Stack': 'fullstack',
};

export default function WorkPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === CATEGORY_MAP[active]);

  const siteUrl = 'https://freddymorara.tech';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "Things I've Built – Production Projects & Case Studies",
    description:
      'Curated portfolio of deployed AI applications, full-stack monorepos, and cloud services architected and shipped by Fredrick Momanyi Morara.',
    url: `${siteUrl}/work`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: p.title,
        url: `${siteUrl}/work/${p.slug}`,
      })),
    },
  };

  return (
    <main className="min-h-screen text-white px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            My Work
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white/95">
            Things I&apos;ve Built
          </h1>
          <p className="max-w-2xl text-lg text-white/50">
            Deployed applications built while studying. Each one involved choosing a stack, solving a real problem, and getting it to a live URL.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-12">
          <FilterTabs tabs={TABS} active={active} onChange={setActive} />
        </div>

        {/* Project list */}
        {filtered.length > 0 ? (
          <div>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <p className="text-white/30 py-24 text-center">No projects in this category yet.</p>
        )}

      </div>
    </main>
  );
}
