'use client';
import Link from 'next/link';
import { ArrowUpRight, GithubIcon, FileText } from 'lucide-react';
import { Project } from '@/constants/projects';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], delay: (index % 4) * 0.05 }}
      className="group relative flex flex-col lg:flex-row lg:items-start justify-between gap-8 py-8 md:py-12 border-b border-white/10 transition-all duration-700 hover:bg-card-bg hover:border-accent-sunset-end/20 hover:shadow-[0_4px_30px_rgba(221,36,118,0.05)] px-4 md:px-8"
    >
      {/* Left: Date, Title */}
      <div className="flex flex-col gap-3 lg:w-1/3">
        <span className="font-Silkscreen text-xs text-white/50 uppercase tracking-widest group-hover:text-accent-sunset-start transition-all duration-500">
          {project.date}
        </span>
        <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
          {project.title}
        </h3>
        <span className="text-sm text-white/60">{project.subtitle}</span>

        {/* Action links for desktop */}
        <div className="hidden lg:flex items-center gap-3 mt-6 flex-wrap">
          {project.links.live && (
            <Link
              href={project.links.live}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60 text-xs font-medium transition-all duration-300 hover:bg-white hover:text-black hover:border-transparent"
            >
              <ArrowUpRight size={14} />
              <span>Live</span>
            </Link>
          )}
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60 text-xs font-medium transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/30"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </Link>
          )}
          {project.links.docs && (
            <Link
              href={project.links.docs}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60 text-xs font-medium transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/30"
            >
              <FileText size={14} />
              <span>Docs</span>
            </Link>
          )}
          {project.hasDocumentation && (
            <Link
              href={`/work/${project.slug}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent-sunset-end/30 text-accent-sunset-end/80 text-xs font-medium transition-all duration-300 hover:bg-accent-sunset-end hover:text-white hover:border-transparent"
            >
              <FileText size={14} />
              <span>Read docs</span>
            </Link>
          )}
        </div>
      </div>

      {/* Right: Description + Stack */}
      <div className="flex flex-col gap-5 lg:w-1/2">
        <p className="text-white/70 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[10px] uppercase font-Silkscreen tracking-wider text-white/60 bg-white/5 rounded-md border border-white/5 group-hover:border-white/10 transition-colors duration-500"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action links for mobile */}
        <div className="flex lg:hidden items-center gap-4 flex-wrap mt-2">
          {project.links.live && (
            <Link href={project.links.live} target="_blank" className="flex items-center gap-1.5 p-2 -ml-2 text-sm text-white/70 hover:text-white transition-colors">
              <ArrowUpRight size={14} /><span>Live</span>
            </Link>
          )}
          {project.links.github && (
            <Link href={project.links.github} target="_blank" className="flex items-center gap-1.5 p-2 text-sm text-white/70 hover:text-white transition-colors">
              <GithubIcon size={14} /><span>GitHub</span>
            </Link>
          )}
          {project.links.docs && (
            <Link href={project.links.docs} target="_blank" className="flex items-center gap-1.5 p-2 text-sm text-white/70 hover:text-white transition-colors">
              <FileText size={14} /><span>Docs</span>
            </Link>
          )}
          {project.hasDocumentation && (
            <Link href={`/work/${project.slug}`} className="flex items-center gap-1.5 p-2 text-sm text-accent-sunset-end hover:text-accent-sunset-start transition-colors">
              <FileText size={14} /><span>Read docs</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
