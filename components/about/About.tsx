'use client';
import { skills } from '@/constants/skills';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative min-h-[100dvh] px-6 py-32 md:py-48 flex items-center" id="about">
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row gap-20 lg:gap-32">
        {/* Left: Editorial Split Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 backdrop-blur-md mb-8">
            About Me
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white/95 mb-8">
            Engineering with <span className="text-white/40 italic">precision.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
            Hi, I&apos;m <span className="text-white/90">Fredrick M. Morara</span>, a versatile Software Engineer and Associate AI Engineer. I specialize in bridging the gap between high-performance frontends and intelligent backends—whether that&apos;s launching deployed financial platforms or engineering robust <span className="text-white/80">RAG pipelines</span> and <span className="text-white/80">AI assistants</span> using Python and vector databases.
          </p>
        </motion.div>

        {/* Right: Staggered Interactive Cards */}
        <div className="lg:w-1/2 flex flex-col gap-6 pt-10 lg:pt-32">
          {skills.map((skill, index) => {
            const Icon = skill.asset.icon;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className={`double-bezel-outer group min-h-[200px] flex-1 ${index === 1 ? 'lg:-ml-12' : ''} ${index === 2 ? 'lg:-ml-24' : ''}`}
              >
                <div className="double-bezel-inner h-full p-6 md:p-8 relative overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-transform duration-500 ease-cinema group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight text-white/90">{skill.title.label}</h3>
                  </div>
                  <p className="mt-6 text-white/50 text-base leading-relaxed relative z-10">
                    {skill.content}
                  </p>
                  
                  {/* Subtle hover gradient based on skill color */}
                  <div 
                    className="absolute inset-0 z-0 opacity-0 transition-opacity duration-700 ease-cinema mix-blend-screen group-hover:opacity-10"
                    style={{ background: `radial-gradient(circle at top right, ${skill.gradientColor}, transparent 70%)` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default About;
