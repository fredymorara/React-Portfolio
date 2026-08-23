'use client';
import { getFeaturedProjects } from '@/constants/projects';
import ProjectCard from '@/components/ui/ProjectCard';

const Projects = () => {
  const projects = getFeaturedProjects();
  return (
    <div className="flex flex-col border-t border-white/10 mt-12">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};
export default Projects;
