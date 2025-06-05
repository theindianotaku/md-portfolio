import Link from 'next/link';
import AnimatedButton from '@/components/ui/animated-button';
import { MoveDownRight, MoveUpRight, User } from 'lucide-react';
import HeroImage from '@/components/hero-image';

export default function Home() {
  return (
    <main className="main">
      {/* Hero Section */}
      <div className="flex flex-col-reverse items-center px-5 md:px-10 gap-10 md:flex-row md:justify-between md:gap-5">
        <div className="flex flex-col items-center justify-center prose dark:prose-invert md:items-start md:flex-[5]">
          <h1 className="font-light leading-normal text-2xl text-center md:text-3xl md:text-left">
            <span className="sr-only">Debashish Nayak</span>Building{' '}
            <span className="text-highlight font-black">
              clean & accessible
            </span>
            {' experiences. Excited for '}
            <span className="text-highlight font-black">{`what's next!`}</span>
          </h1>
          
          {/* Brief Introduction */}
          <p className="text-lg text-center md:text-left mt-4 mb-6 max-w-2xl leading-relaxed">
            Frontend Engineer with 6 years of experience crafting accessible, scalable web solutions. 
            After a refreshing break, I'm back and ready for new challenges in inclusive design and developer experience.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <AnimatedButton variant="outline" asChild>
              <Link href="/writings" className="no-underline">
                Discover My Work <MoveDownRight />
              </Link>
            </AnimatedButton>
            <AnimatedButton variant="outline" asChild>
              <Link href="/about" className="no-underline">
                About Me <User />
              </Link>
            </AnimatedButton>
            <AnimatedButton variant="outline" asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/resume"
                className="no-underline"
              >
                My Resume <MoveUpRight />
              </Link>
            </AnimatedButton>
          </div>
        </div>
        <HeroImage />
      </div>

      {/* Featured Highlights */}
      <div className="w-full max-w-[1200px] px-5 md:px-10 mt-20">
        <h2 className="text-2xl font-serif font-light text-highlight mb-8 text-center">
          Featured Highlights
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Accessibility Feature */}
          <div className="group p-6 border border-border rounded-lg hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
              Accessibility Champion
            </h3>
            <p className="text-muted-foreground mb-4">
              Led WCAG 2.1 Level AA compliance for 6,200+ problem descriptions, making HackerRank accessible to all users.
            </p>
            <Link 
              href="/blog/accessibility" 
              className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline"
            >
              Read the full journey →
            </Link>
          </div>

          {/* Developer Tools Feature */}
          <div className="group p-6 border border-border rounded-lg hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
              Developer Tooling
            </h3>
            <p className="text-muted-foreground mb-4">
              Customized VSCode, implemented WebSocket architecture, and built tools that enhance developer experience.
            </p>
            <Link 
              href="/writings/developer-tooling" 
              className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline"
            >
              Read the deep-dive →
            </Link>
          </div>

          {/* About Feature */}
          <div className="group p-6 border border-border rounded-lg hover:border-accent transition-colors md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
              My Journey
            </h3>
            <p className="text-muted-foreground mb-4">
              From Metallurgical Engineering at IIT Roorkee to Senior Frontend Engineer - an unconventional path driven by curiosity.
            </p>
            <Link 
              href="/about" 
              className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline"
            >
              Learn more about me →
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Writings */}
      <div className="w-full max-w-[1200px] px-5 md:px-10 mt-20">
        <h2 className="text-2xl font-serif font-light text-highlight mb-8 text-center">
          Recent Writings
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group p-6 border border-border rounded-lg hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
              My Journey with Accessibility at HackerRank
            </h3>
            <p className="text-muted-foreground mb-4">
              A detailed case study on implementing accessibility standards across a large-scale platform.
            </p>
            <Link 
              href="/blog/accessibility" 
              className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline"
            >
              Read case study →
            </Link>
          </div>

          <div className="group p-6 border border-border rounded-lg hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
              From Polling to WebSockets
            </h3>
            <p className="text-muted-foreground mb-4">
              How we transformed HackerRank's real-time architecture for high-stakes testing scenarios.
            </p>
            <Link 
              href="/writings/websockets-performance" 
              className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline"
            >
              Read deep-dive →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}