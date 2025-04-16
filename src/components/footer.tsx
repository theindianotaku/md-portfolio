'use client';

import {
  GitPullRequestCreateArrow,
  MoveUpRight,
  Signature,
  UserRound,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-highlight-accent-900/50 py-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="mailto:debaintech@mail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label="Email Me"
            >
              <Signature size={18} />
              <span className="sr-only sm:not-sr-only">
                debaintech@mail.com
              </span>
            </a>
            <a
              href="https://github.com/theindianotaku"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label="GitHub Profile"
            >
              <GitPullRequestCreateArrow size={18} />
              <span className="sr-only sm:not-sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/debashishnayak/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label="LinkedIn Profile"
            >
              <UserRound size={18} />
              <span className="sr-only sm:not-sr-only">LinkedIn</span>
            </a>
            <Button variant="outline" asChild className="ml-0 md:ml-2">
              <a
                href="https://drive.google.com/file/d/1rXhHgc5TBWOW5SHVTECS6vEFFneWsWOX/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Resume</span>
                <MoveUpRight />
              </a>
            </Button>
          </div>
          <div className="text-center md:text-right text-sm text-muted-foreground">
            © {currentYear} Debashish Nayak
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
