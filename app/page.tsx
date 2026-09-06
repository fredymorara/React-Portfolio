import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Hero from '@/components/hero/Hero';
import ProjectsSection from '@/components/projects/ProjectsSection';
import Techs from '@/components/techs/Techs';
import Certifications from '@/components/certifications/Certifications';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <Techs />
      <Certifications />
      <About />
      <Contact />
    </>
  );
}
