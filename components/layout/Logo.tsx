import Link from 'next/link';

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase ${
        isLogoFooter ? 'text-3xl' : 'text-2xl'
      }`}
    >
      <span className="text-valencia">F</span>
      <span className="text-supernova">re</span>
      <span className="text-cerise">d</span>
      <span className="text-azureradiance">ri</span>
      <span className="text-azureradiance">ck</span>
      <span className="text-oceangreen">.</span>
      <span className="text-roseofsharon">m.</span>
      <span className="text-brickred">Mo</span>
      <span className="text-tanhide">ra</span>
      <span className="text-azureradiance">ra</span>
    </Link>
  );
};
export default Logo;
