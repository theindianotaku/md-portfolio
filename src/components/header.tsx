const Header = () => {
  return (
    <div className="h-30 flex justify-center fixed w-full z-10 bg-custom-theme border-b border-white/15">
      <nav className="w-full flex flex-row items-center justify-between px-10">
        <div className="flex flex-col items-start">
          <span className="font-black">{`I'm Debashish Nayak.`}</span>
          <span>
            <span className="text-highlight">Frontend Engineer</span> with a
            keen eye for detail.
          </span>
        </div>
        <div className="flex gap-4">
          <a href="#">About</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
          <button>Download Resume</button>
          <button>Toggle theme</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
