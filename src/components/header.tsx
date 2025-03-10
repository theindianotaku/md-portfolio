import { ModeToggle } from './toggle-theme';
import { HeaderNav } from './nav-menu';

const Header = () => {
  return (
    <div className="h-30 flex justify-center w-full z-10 bg-custom-theme border-b border-emerald-900/50 dark:border-white/15">
      <nav className="w-full flex flex-row items-center justify-between px-10">
        <div className="flex flex-col items-start">
          <span className="font-black">{`I'm Debashish Nayak.`}</span>
          <span>
            <span className="text-highlight">Frontend Engineer</span> with a
            keen eye for detail.
          </span>
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
