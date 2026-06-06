import Link from 'next/link';

const NavLinks = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-8 font-medium text-xs uppercase tracking-widest text-white/50">
      <Link className="transition-colors hover:text-white" href="#projects">
        Projects
      </Link>
      <Link className="transition-colors hover:text-white" href="#stack">
        Stack
      </Link>
      <Link className="transition-colors hover:text-white" href="#about">
        About
      </Link>
      <Link className="transition-colors hover:text-white" href="#contact">
        Contact
      </Link>
    </nav>
  );
};
export default NavLinks;
