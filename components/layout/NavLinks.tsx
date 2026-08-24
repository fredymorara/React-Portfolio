import Link from 'next/link';

interface NavLinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const NavLinks = ({ isMobile, onLinkClick }: NavLinksProps) => {
  const cls = `transition-colors p-2 ${isMobile ? 'hover:text-accent-sunset-end -m-2' : 'hover:text-white md:-m-2'}`;
  const containerCls = `flex ${isMobile ? 'flex-col gap-10 text-4xl font-medium tracking-tight text-white/70' : 'flex-col md:flex-row gap-6 md:gap-8 font-medium text-xs uppercase tracking-widest text-white/50'} items-center`;

  return (
    <nav className={containerCls}>
      <Link onClick={onLinkClick} className={cls} href="/#about">About</Link>
      <Link onClick={onLinkClick} className={cls} href="/#stack">Stack</Link>
      <Link onClick={onLinkClick} className={cls} href="/work">Work</Link>
      <Link onClick={onLinkClick} className={cls} href="/credentials">Credentials</Link>
      <Link onClick={onLinkClick} className={cls} href="/#contact">Contact</Link>
    </nav>
  );
};
export default NavLinks;
