import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 font-bold tracking-tight text-xl transition-opacity hover:opacity-80"
    >
      <span className="text-white">
        Fredrick M.
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-accent-sunset-start shadow-[0_0_8px_#FF512F]" />
    </Link>
  );
};
export default Logo;
