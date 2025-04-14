const Footer = () => {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center p-8 border-t border-highlight-accent-900/50">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="mailto:debashishzero@mail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        📧 debashishzero@mail.com
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://theindianotaku.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🌏 theindianotaku.github.io
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/debashishnayak/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🔗 linkedin.com/in/debashishnayak
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/theindianotaku"
        target="_blank"
        rel="noopener noreferrer"
      >
        👾 github.com/theindianotaku
      </a>
    </footer>
  );
};

export default Footer;
