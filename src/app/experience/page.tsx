import Link from 'next/link';
import experienceData from '@/data/experience.json';

export const metadata = {
  title: 'Experience | Debashish Nayak',
  description:
    'Chronological work journey from intern to Senior Frontend Engineer at HackerRank, with 6 years of experience in accessible web development',
  keywords: [
    'frontend engineer',
    'hackerrank',
    'experience',
    'career journey',
    'accessibility',
    'web development',
  ],
  openGraph: {
    title: 'Experience - Debashish Nayak',
    description:
      'My journey from intern to Senior Frontend Engineer - 6 years of growth in accessible web development and developer tooling',
    url: 'https://debashish.me/experience',
    type: 'profile',
  },
};

export default function ExperiencePage() {
  return (
    <main className="main">
        <div className="content-wrapper flex flex-col items-center">
          <header className="mb-12 text-center">
            <h1 className="font-serif font-light text-2xl md:text-3xl text-highlight mb-4">
              My Professional Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              From curious intern to senior engineer - a chronological journey
              through 6 years of growth, challenges, and meaningful impact at
              HackerRank
            </p>
          </header>

          <div className="w-full max-w-4xl space-y-12">
            {/* What's Next */}
            <section className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-background shadow-lg"></div>
                  <div className="w-px h-full bg-border mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      What's Next?
                    </h2>
                    <span className="text-sm text-muted-foreground font-medium">
                      June 2024 - Present
                    </span>
                  </div>

                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      After taking time to focus on personal health and
                      well-being, I'm back with renewed energy and
                      determination. Ready to tackle new challenges and
                      contribute to meaningful projects that make a difference.
                    </p>

                    <p className="text-muted-foreground">
                      Looking for your next Frontend Engineer?{' '}
                      <a
                        href="mailto:debaintech@gmail.com"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                      >
                        Say Hi
                      </a>{' '}
                      - I'd love to hear about your projects and challenges.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Dynamic Experience Sections */}
            {experienceData.experiences.map((experience, index) => (
              <section key={experience.id} className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                    {index < experienceData.experiences.length - 1 && (
                      <div className="w-px h-full bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h2 className="text-xl font-bold text-highlight">
                        {experience.title}
                      </h2>
                      <span className="text-sm text-muted-foreground font-medium">
                        {experience.startDate} - {experience.endDate}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {experience.company}
                    </h3>

                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {experience.description}
                      </p>

                      <h4 className="text-base font-semibold text-foreground mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>• {achievement}</li>
                        ))}
                      </ul>

                      {experience.relatedLinks.length > 0 && (
                        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                          <h4 className="text-sm font-semibold text-foreground mb-3">
                            Related Deep-Dives:
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {experience.relatedLinks.map((link, linkIndex) => (
                              <Link
                                key={linkIndex}
                                href={link.url}
                                className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline text-sm"
                              >
                                {link.title} →
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-xl font-serif font-light text-highlight mb-4">
              Interested in the Technical Details?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Each role involved complex technical challenges and innovative
              solutions. Explore the detailed project deep-dives to see how
              these experiences shaped my approach to engineering.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/writings"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
              >
                View All Project Deep-Dives
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              >
                More About Me
              </Link>
            </div>
          </div>
        </div>
      </main>
  );
}
