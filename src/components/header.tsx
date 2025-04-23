import { ThemeToggle } from './toggle-theme';
import { HeaderNav } from './nav-menu';
import Logo from './logo';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="h-10 md:h-30 flex justify-center w-full z-10 bg-background border-b border-highlight-accent-900/50 fixed top-0 left-0 shadow-sm shadow-emerald-600/10">
      <nav className="w-full flex flex-row items-center justify-between px-2.5 md:px-10">
        <div className="flex flex-row items-center gap-2.5 md:gap-5">
          <div className="flex size-8 md:size-16">
            <Link
              href="/"
              className="border-2 border-dashed border-transparent hover:border-accent rounded"
            >
              <span className="sr-only">Go to Portfolio Home Page</span>
              <Logo className="text-foreground size-8 md:size-16" />
            </Link>
          </div>
          <div className="flex flex-col items-start">
            <div>
              <span className="sr-only md:not-sr-only">{`I'm `}</span>
              <span className="md:font-black">
                Debashish<span className="sr-only md:not-sr-only"> Nayak</span>
              </span>
              .
            </div>
            <span className="sr-only md:not-sr-only">
              <span className="text-highlight">Frontend Engineer</span> with a
              keen eye for detail.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <HeaderNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Header;
