import Projects from './Projects';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section className="relative py-32 md:py-48" id="projects" aria-label="Featured Projects">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 space-y-6">
          <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
            My Work
          </div>
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl lg:text-7xl">
            Things I&apos;ve Built
          </h2>
          <p className="max-w-2xl text-lg text-white/60 md:text-xl">
            Deployed applications built while studying. Each one involved choosing a stack, solving a real problem, and getting it to a live URL. Browse the links if you want to see them running.
          </p>
        </div>

        <Projects />

        <div className="mt-16 flex justify-end">
          <Link
            href="/work"
            className="flex items-center gap-2 p-3 -mr-3 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
          >
            <span>See all projects</span>
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
