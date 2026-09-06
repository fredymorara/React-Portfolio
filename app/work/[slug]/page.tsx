import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon } from '@/components/ui/GithubIcon';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { getProjectBySlug, getAllSlugs } from '@/constants/projects';

// Pre-render all slugs at build time
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const siteUrl = 'https://freddymorara.tech';
  const pageUrl = `${siteUrl}/work/${slug}`;
  const title = `${project.title} – ${project.subtitle} | Case Study`;
  const description = `${project.description} Detailed technical case study by Fredrick Momanyi Morara covering architecture, stack (${project.stack.slice(0, 5).join(', ')}), and implementation.`;
  const imageUrl = project.screenshot ? `${siteUrl}${project.screenshot}` : `${siteUrl}/opengraph-image.jpg`;

  return {
    title,
    description,
    keywords: [
      project.title,
      ...project.stack,
      'Full-Stack Developer Kenya',
      'AI Engineer',
      'Software Engineer Portfolio',
      'Fredrick Momanyi Morara',
      'Fredrick Morara',
      'Freddy Morara',
      'Technical Case Study',
      'Next.js Portfolio',
      'Hire Software Engineer',
      project.category,
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'article',
      url: pageUrl,
      title: `${project.title} – ${project.subtitle}`,
      description,
      siteName: 'Fredrick Momanyi Morara Portfolio',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} application preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} – ${project.subtitle}`,
      description,
      images: [imageUrl],
    },
  };
}

// MDX prose styling, scoped inside the article
const mdxComponents = {};

export default async function ProjectDocPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  // Try to load MDX file
  const filePath = path.join(process.cwd(), 'content', 'projects', `${slug}.mdx`);
  const hasMdx = fs.existsSync(filePath);

  let mdxContent: string | null = null;
  if (hasMdx) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(raw);
    mdxContent = content;
  }

  const siteUrl = 'https://freddymorara.tech';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TechArticle', 'SoftwareApplication'],
        '@id': `${siteUrl}/work/${slug}#article`,
        headline: `${project.title} – ${project.subtitle}`,
        name: project.title,
        description: project.description,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web',
        inLanguage: 'en-US',
        url: `${siteUrl}/work/${slug}`,
        author: {
          '@type': 'Person',
          name: 'Fredrick Momanyi Morara',
          url: siteUrl,
          jobTitle: 'Software Engineer & AI Developer',
        },
        publisher: {
          '@type': 'Person',
          name: 'Fredrick Momanyi Morara',
          url: siteUrl,
        },
        codeRepository: project.links.github,
        sameAs: project.links.live || project.links.github,
        softwareRequirements: project.stack.join(', '),
        keywords: project.stack.join(', '),
        image: project.screenshot ? `${siteUrl}${project.screenshot}` : `${siteUrl}/opengraph-image.jpg`,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/work/${slug}#breadcrumb`,
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
            name: 'Work',
            item: `${siteUrl}/work`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: `${siteUrl}/work/${slug}`,
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

        {/* Back nav */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-16 transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          <span>Back to Work</span>
        </Link>

        {/* Project header */}
        <header className="mb-16 pb-12 border-b border-white/10">
          <div className="mb-4">
            <span className="font-Silkscreen text-xs text-white/30 uppercase tracking-widest">
              {project.date}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white/95 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-white/50 mb-10">{project.subtitle}</p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[10px] uppercase font-Silkscreen tracking-wider text-white/40 bg-white/5 rounded-md border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links row */}
          <div className="flex items-center gap-3 flex-wrap">
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium transition-opacity duration-300 hover:opacity-80"
              >
                <ArrowUpRight size={15} />
                <span>View live</span>
              </Link>
            )}
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/60 text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/30"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </Link>
            )}
            {project.links.docs && (
              <Link
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/60 text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/30"
              >
                <FileText size={15} />
                <span>Docs</span>
              </Link>
            )}
          </div>
        </header>

        {/* MDX documentation */}
        {mdxContent ? (
          <article className="bg-card-bg p-6 md:p-12 lg:p-16 rounded-3xl border border-white/10 shadow-[0_4px_30px_rgba(221,36,118,0.03)] prose prose-invert prose-lg max-w-none 
            prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-white/90
            prose-p:text-white/70 prose-p:leading-relaxed
            prose-a:text-accent-sunset-end prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white/90 prose-strong:font-medium
            prose-code:text-accent-sunset-start prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
            prose-img:rounded-xl prose-img:border prose-img:border-white/10
            prose-ul:text-white/70 prose-li:marker:text-white/30">
            <MDXRemote source={mdxContent} components={mdxComponents} />
          </article>
        ) : (
          <div className="py-24 text-center">
            <p className="text-white/30 text-lg mb-4">Documentation coming soon.</p>
            <p className="text-white/20 text-sm">Check the GitHub repo or live link above in the meantime.</p>
          </div>
        )}

        {/* Footer nav */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-300"
          >
            <ArrowLeft size={14} />
            <span>Back to Work</span>
          </Link>
        </div>

      </div>
    </main>
  );
}

