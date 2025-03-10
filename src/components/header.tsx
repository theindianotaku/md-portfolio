import { ModeToggle } from './toggle-theme';
import { HeaderNav } from './nav-menu';
import Logo from './logo';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="h-30 flex justify-center w-full z-10 bg-custom-theme border-b border-emerald-900/50 dark:border-white/15">
      <nav className="w-full flex flex-row items-center justify-between px-10">
        <div className="flex flex-row items-center gap-5">
          <div className="flex h-16 w-16">
            <Link href="/">
              <Logo className="text-foreground size-16" />
            </Link>
          </div>
          <div className="flex flex-col items-start">
            <span>
              {`I'm `}
              <span className="font-black">Debashish Nayak</span>.
            </span>
            <span>
              <span className="text-highlight">Frontend Engineer</span> with a
              keen eye for detail.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <HeaderNav />
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Header;
