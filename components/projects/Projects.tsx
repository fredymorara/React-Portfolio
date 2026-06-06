'use client';
import { projects } from '@/constants/projects';
import { ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="flex flex-col border-t border-white/10 mt-12">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], delay: index * 0.05 }}
          className="group relative flex flex-col lg:flex-row lg:items-start justify-between gap-8 py-8 md:py-16 border-b border-white/10 transition-all duration-700 hover:bg-[#0A0A0A] hover:border-[#DD2476]/20 hover:shadow-[0_4px_30px_rgba(221,36,118,0.05)] px-4 md:px-8"
        >
          {/* Left: Huge Title & Date */}
          <div className="flex flex-col gap-4 lg:w-1/3">
            <span className="font-Silkscreen text-xs text-white/30 uppercase tracking-widest group-hover:text-[#FF512F] transition-all duration-500">
              {project.date}
            </span>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
              {project.title}
            </h3>
            
            <div className="hidden lg:flex items-center gap-4 mt-8">
              <Link href={project.live} target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white transition-all duration-500 hover:bg-white hover:text-black hover:scale-105">
                <ArrowUpRight size={20} />
              </Link>
              <Link href={project.github} target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white/50 transition-all duration-500 hover:text-white hover:border-white/30">
                <Github size={20} />
              </Link>
            </div>
          </div>

          {/* Right: Description & Tech Stack */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <p className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-500">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-[10px] uppercase font-Silkscreen tracking-wider text-white/40 bg-white/5 rounded-md border border-white/5 group-hover:border-white/10 transition-colors duration-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-4 mt-4">
              <Link href={project.live} target="_blank" className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
                <span>View Live</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white">
                <Github size={16} />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default Projects;
