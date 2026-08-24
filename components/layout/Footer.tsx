import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

import { socialLinks } from '@/constants/contacts';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32 flex flex-col gap-20">
        
        {/* Top Split */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-white/60 max-w-sm text-sm leading-relaxed">
              Crafting premium digital experiences through robust engineering and precise design.
            </p>
          </div>

          <nav aria-label="Social media links" className="flex flex-col gap-6">
            <h4 className="font-Silkscreen text-[10px] uppercase tracking-[0.2em] text-white/50">Connect</h4>
            <ul className="flex gap-4">
              {socialLinks.map((socialLink) => (
                <li key={socialLink.id}>
                  <Link 
                    href={socialLink.path} 
                    target="_blank"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 hover:bg-white hover:scale-110 group"
                  >
                    <Image
                      src={socialLink.icon}
                      alt={socialLink.alt}
                      width={20}
                      height={20}
                      className="opacity-70 transition-all duration-500 group-hover:invert group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Split */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-sm text-white/50">
          <p>© {currentYear} Fredrick M. Morara. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* Massive Background Typography */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none opacity-[0.02] select-none overflow-hidden">
        <span className="text-[15vw] font-bold tracking-tighter whitespace-nowrap leading-none translate-y-1/4">
          MORARA
        </span>
      </div>
    </footer>
  );
};
export default Footer;
