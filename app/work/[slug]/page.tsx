import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, GithubIcon, FileText } from 'lucide-react';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { getProjectBySlug, getAllSlugs } from '@/constants/projects';

// Pre-render all slugs at build time
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
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

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="mx-auto max-w-4xl">

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
          <article className="prose prose-invert prose-lg max-w-none
            prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-white/90
            prose-h1:text-5xl prose-h2:text-3xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-h2:mt-16 prose-h2:mb-8
            prose-p:text-white/60 prose-p:leading-relaxed
            prose-a:text-[#DD2476] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white/90
            prose-code:text-[#FF512F] prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#0A0A0A] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
            prose-li:text-white/60
            prose-hr:border-white/10
            prose-img:rounded-xl prose-img:border prose-img:border-white/10
          ">
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
