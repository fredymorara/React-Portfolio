import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <section className="relative py-32 md:py-48" id="projects">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 space-y-6">
          <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
            Selected Works
          </div>
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl lg:text-7xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-lg text-white/60 md:text-xl">
            I&apos;ve worked on a wide range of projects, from scalable web applications and reusable UI component libraries to backend APIs and microfrontend architectures.
          </p>
        </div>

        <Projects />
      </div>
    </section>
  );
};
export default ProjectsSection;
