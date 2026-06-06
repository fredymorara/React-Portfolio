'use client';
import { contacts } from '@/constants/contacts';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative px-6 py-32 md:py-48 flex justify-center" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
        className="w-full max-w-5xl double-bezel-outer overflow-hidden"
      >
        <div className="double-bezel-inner relative overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-between relative z-10">
            <div>
              <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 backdrop-blur-md mb-8">
                Get in touch
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white/95 mb-6">
                Let&apos;s build <br/><span className="text-white/40 italic">the future.</span>
              </h2>
              <p className="text-white/50 text-lg max-w-sm">
                Feel free to reach out for collaboration, freelance work, or just to say hi!
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-4 bg-white/5 border-l border-white/10 relative z-10">
            {contacts.map((contact) => (
              <Link 
                key={contact.id} 
                href={contact.path} 
                target="_blank"
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-[#0A0A0A] border border-white/10 p-6 transition-all duration-500 hover:bg-white/5"
              >
                <div className="flex items-center gap-6">
                  <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-transform duration-500 group-hover:scale-110">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={contact.icon} alt={contact.title} className="w-6 h-6 opacity-80 transition-all duration-500 group-hover:opacity-100" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white/90">{contact.title}</h3>
                    <p className="text-sm text-white/40">{contact.description}</p>
                  </div>
                </div>
                <div className="hidden sm:flex shrink-0 h-10 w-10 rounded-full items-center justify-center bg-white/5 border border-white/10 text-white/50 transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            ))}
          </div>

          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
        </div>
      </motion.div>
    </section>
  );
};
export default Contact;
