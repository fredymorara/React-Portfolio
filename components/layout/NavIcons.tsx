import Image from 'next/image';
import Link from 'next/link';

interface NavIconsProps {
  isMobile?: boolean;
}

const NavIcons = ({ isMobile }: NavIconsProps) => {
  return (
    <div className={`flex items-center ${isMobile ? 'flex-col gap-8' : 'gap-4 md:gap-8'}`}>
      <Link
        href="https://github.com/fredymorara/"
        className="group flex items-center justify-center gap-x-3"
        target="_blank"
      >
        <Image
          src="/github.svg"
          alt="Link to Fredrick M. Morara's gitHub profile"
          width={isMobile ? 32 : 25}
          height={isMobile ? 32 : 25}
          className="opacity-80 transition group-hover:opacity-100"
        />
        <span className={`${isMobile ? 'text-lg font-medium text-white/70 group-hover:text-white' : 'hidden text-xs text-white opacity-50 md:inline'} transition`}>
          Github
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/freddymorara/"
        className="group flex items-center justify-center gap-x-3"
        target="_blank"
      >
        <Image
          src="/linkedin.svg"
          alt="Link to Fredrick M. Morara's linkedin profile"
          width={isMobile ? 36 : 28}    
          height={isMobile ? 36 : 28}
          className="opacity-80 transition group-hover:opacity-100"
        />
        <span className={`${isMobile ? 'text-lg font-medium text-white/70 group-hover:text-white' : 'hidden text-xs text-white opacity-50 md:inline'} transition`}>
          LinkedIn
        </span>
      </Link>
    </div>
  );
};
export default NavIcons;
