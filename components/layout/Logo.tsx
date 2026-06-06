import Link from 'next/link';
import { cn } from '@/lib/utils';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 font-bold tracking-tight text-xl transition-opacity hover:opacity-80"
    >
      <span className={cn(
        "inline animate-gradient bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#FF512F] bg-[length:200%_auto] bg-clip-text text-transparent"
      )}>
        Fredrick M.
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-[#0D8FB7] shadow-[0_0_8px_#0D8FB7]" />
    </Link>
  );
};
export default Logo;
