import Link from 'next/link';
import PageTransition from '@/components/page-transition';

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
    <PageTransition>
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

            {/* Senior Software Engineer */}
            <section className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                  <div className="w-px h-full bg-border mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-xl font-bold text-highlight">
                      Senior Software Engineer
                    </h2>
                    <span className="text-sm text-muted-foreground font-medium">
                      Jan 2022 - Apr 2024
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    HackerRank
                  </h3>

                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      My final role at HackerRank allowed me to focus on three
                      areas I'm passionate about: accessibility, developer
                      experience, and mentorship. This period was defined by
                      leading large-scale initiatives and mentoring the next
                      generation of engineers.
                    </p>

                    <h4 className="text-base font-semibold text-foreground mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • Led accessibility improvements for over 6,200 problem
                        descriptions, creating systems to identify, categorize,
                        and fix issues at scale
                      </li>
                      <li>
                        • Customized VSCode for platform needs and standardized
                        iframe communication using Penpal
                      </li>
                      <li>
                        • Mentored junior engineers from onboarding through
                        feature ownership, providing technical guidance and
                        career development
                      </li>
                      <li>
                        • Improved hiring processes by developing interview
                        questions that better reflect real-world engineering
                        challenges
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Related Deep-Dives:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/blog/accessibility"
                          className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline text-sm"
                        >
                          Accessibility Journey →
                        </Link>
                        <Link
                          href="/writings/developer-tooling"
                          className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline text-sm"
                        >
                          Developer Tools & VSCode →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SDE-II */}
            <section className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                  <div className="w-px h-full bg-border mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-xl font-bold text-highlight">
                      Software Development Engineer II
                    </h2>
                    <span className="text-sm text-muted-foreground font-medium">
                      Jul 2020 - Dec 2021
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    HackerRank
                  </h3>

                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      As I moved into a more senior role, the pandemic hit, and
                      our priorities shifted. Remote work became the norm, and
                      our platform needed to adapt to support remote hiring
                      processes. This period marked my deep dive into
                      accessibility and real-time architecture.
                    </p>

                    <h4 className="text-base font-semibold text-foreground mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • Led the effort to make HackerRank Screen accessible
                        according to WCAG 2.1 Level AA standards
                      </li>
                      <li>
                        • Collaborated with Deque Systems on comprehensive
                        accessibility audits
                      </li>
                      <li>
                        • Transitioned from polling architecture to WebSockets
                        for long-running tasks
                      </li>
                      <li>
                        • Developed proctoring solutions and improved component
                        communication for remote assessments
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Related Deep-Dives:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/blog/accessibility"
                          className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline text-sm"
                        >
                          Accessibility Standards Implementation →
                        </Link>
                        <Link
                          href="/writings/websockets-performance"
                          className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline text-sm"
                        >
                          WebSockets Migration →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SDE-I */}
            <section className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                  <div className="w-px h-full bg-border mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-xl font-bold text-highlight">
                      Software Development Engineer I
                    </h2>
                    <span className="text-sm text-muted-foreground font-medium">
                      Aug 2018 - Jun 2020
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    HackerRank
                  </h3>

                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      As a full-time engineer, I was thrown into the deep end
                      with large-scale migrations and system modernization. This
                      period taught me more about application architecture than
                      any course ever could, and sparked my passion for theming
                      and design systems.
                    </p>

                    <h4 className="text-base font-semibold text-foreground mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • Led migration of HackerRank's Screen product from
                        Backbone.js to React
                      </li>
                      <li>
                        • Developed passion for theming and dark mode
                        implementation
                      </li>
                      <li>
                        • Led organization-wide initiatives on standardizing
                        component library
                      </li>
                      <li>
                        • Successfully convinced team to move away from jQuery
                        with comprehensive technical presentation
                      </li>
                      <li>
                        • Ensured theme consistency across products during
                        modernization effort
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Related Deep-Dives:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/writings/ui-systems"
                          className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline text-sm"
                        >
                          UI Systems & Dark Mode →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Intern */}
            <section className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-xl font-bold text-highlight">
                      Software Engineering Intern
                    </h2>
                    <span className="text-sm text-muted-foreground font-medium">
                      Jun 2018 - Aug 2018
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    HackerRank
                  </h3>

                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Fresh out of college with a Metallurgical Engineering
                      degree, I stepped into HackerRank as an intern. With more
                      enthusiasm than experience, I was tasked with revitalizing
                      their internal UIKit. This was where my frontend journey
                      truly began.
                    </p>

                    <h4 className="text-base font-semibold text-foreground mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • Built my first Toast notification component for the
                        internal UIKit
                      </li>
                      <li>
                        • Created a React wrapper for CKEditor for content
                        management
                      </li>
                      <li>
                        • Set up linting configurations that became
                        organizational standards
                      </li>
                      <li>
                        • Built an entire intern website overnight after a bet
                        with CTO Hari (and won! ✌️)
                      </li>
                      <li>
                        • Laid the foundation for what would become core
                        strengths in my career
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Related Deep-Dives:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/writings/ui-systems"
                          className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline text-sm"
                        >
                          Component Library Evolution →
                        </Link>
                        <Link
                          href="/writings/developer-tooling"
                          className="text-foreground hover:bg-accent hover:px-2 hover:py-1 hover:rounded transition-all underline underline-offset-4 hover:no-underline text-sm"
                        >
                          Early Developer Tooling →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
    </PageTransition>
  );
}
