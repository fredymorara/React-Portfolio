'use client';
import { slugs, techs } from '@/constants/skills';
import DotPattern from '../ui/dot-pattern';
import IconCloud from '../ui/icon-cloud';
import { motion } from 'framer-motion';

const Techs = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 md:py-48" id="stack">
      <div className="relative z-10 w-full max-w-7xl">
        <div className="mb-20 space-y-6 text-center flex flex-col items-center">
          <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
            Core Arsenal
          </div>
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl lg:text-7xl">
            Technology Stack
          </h2>
          <p className="max-w-2xl text-lg text-white/60 md:text-xl">
            I leverage a carefully selected set of modern tools and frameworks to engineer robust, scalable, and elegant solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:w-1/2"
          >
            {techs.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.03, ease: [0.32, 0.72, 0, 1] }}
                className="group relative rounded-full border border-white/10 bg-[#0A0A0A] px-6 py-3 transition-transform duration-500 ease-cinema hover:scale-105 hover:bg-white/5"
              >
                <div 
                  className="absolute inset-0 rounded-full opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-20"
                  style={{ background: tech.bgColor }}
                />
                <span className="relative z-10 font-medium tracking-wide text-white/80">{tech.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="hidden lg:flex relative items-center justify-center lg:w-1/2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <IconCloud iconSlugs={slugs} />
            </div>
          </motion.div>
        </div>
      </div>

      <DotPattern
        width={30}
        height={30}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern absolute inset-0 z-0 opacity-[0.15] [mask-image:radial-gradient(1000px_circle_at_center,#000,transparent)]"
      />
    </section>
  );
};
export default Techs;
