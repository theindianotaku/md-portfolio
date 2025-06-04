// src/app/about/page.tsx
import AboutContent from '@/markdown/about-content.mdx';
import PageTransition from '@/components/page-transition';

export const metadata = {
  title: 'About | Debashish Nayak',
  description:
    'Learn more about Debashish Nayak - Frontend Engineer with 6 years of experience in accessible web development',
  keywords: [
    'frontend engineer',
    'accessibility',
    'react',
    'javascript',
    'web development',
  ],
  openGraph: {
    title: 'About Debashish Nayak',
    description:
      'Frontend Engineer with 6 years of experience crafting accessible, scalable, and user-focused web solutions',
    url: 'https://debashish.me/about',
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="main">
        <div className="content-wrapper flex flex-col items-center">
          <header className="mb-8 text-center">
            <h1 className="font-serif font-light text-2xl md:text-3xl text-highlight mb-4">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Frontend Engineer passionate about crafting accessible,
              user-focused web experiences
            </p>
          </header>

          <div className="w-full lg:flex lg:flex-row">
            <div className="lg:flex-1">
              <div className="flex flex-col items-center max-w-none">
                <AboutContent />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
