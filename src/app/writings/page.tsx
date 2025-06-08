// src/app/writings/page.tsx
import Link from 'next/link';
import { getAllBlogPostsMetadata } from '@/lib/blog'; // We'll rename this function later
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Writings | Debashish Nayak',
  description:
    'Case studies, project deep dives, and technical articles about frontend development and accessibility',
  keywords: [
    'frontend',
    'accessibility',
    'case studies',
    'web development',
    'react',
  ],
  openGraph: {
    title: 'Writings by Debashish Nayak',
    description:
      'In-depth case studies and technical articles about frontend development, accessibility, and web engineering',
    url: 'https://debashish.me/writings',
    type: 'website',
  },
};

export default async function WritingsPage() {
  const posts = await getAllBlogPostsMetadata();

  // Clean categorization based on explicit tags
  const caseStudies = posts.filter((post) => post.tags?.includes('case-study'));

  const projectDeepDives = posts.filter(
    (post) =>
      post.tags?.includes('project-deep-dive') ||
      post.tags?.includes('project-description'),
  );

  const articles = posts.filter((post) => post.tags?.includes('article'));

  const minis = posts.filter(
    (post) => post.tags?.includes('mini') || post.tags?.includes('scribble'),
  );

  // Fallback: anything without explicit category tags goes to articles
  const uncategorized = posts.filter(
    (post) =>
      !caseStudies.includes(post) &&
      !projectDeepDives.includes(post) &&
      !articles.includes(post) &&
      !minis.includes(post),
  );

  return (
    <main className="main flex-grow justify-between">
        <div className="prose-container px-5 md:px-10">
          <header className="mb-8">
            <h1 className="font-serif font-light text-2xl md:text-3xl text-highlight mb-4">
              Writings
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              In-depth case studies, project breakdowns, and thoughts on
              frontend development
            </p>
          </header>

          {/* Case Studies Section */}
          {caseStudies.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-highlight">
                Case Studies
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Detailed narratives about complex projects and the challenges,
                solutions, and learnings involved.
              </p>
              <div className="space-y-6">
                {caseStudies.map((post) => (
                  <article
                    key={post.slug}
                    className="border-b pb-6 last:border-0"
                  >
                    <Link
                      href={`/writings/${post.slug}`}
                      className="no-underline hover:underline"
                    >
                      <h3 className="text-lg font-bold hover:text-highlight transition-colors mb-2">
                        {post.title}
                      </h3>
                    </Link>

                    {post.description && (
                      <p className="text-muted-foreground mb-3 text-sm">
                        {post.description}
                      </p>
                    )}

                    <div className="flex justify-between items-center">
                      <time
                        dateTime={post.date}
                        className="text-xs text-muted-foreground"
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Project Deep Dives Section */}
          {projectDeepDives.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-highlight">
                Project Deep Dives
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Mini-articles exploring specific projects, technical
                implementations, and engineering decisions.
              </p>
              <div className="space-y-6">
                {projectDeepDives.map((post) => (
                  <article
                    key={post.slug}
                    className="border-b pb-6 last:border-0"
                  >
                    <Link
                      href={`/writings/${post.slug}`}
                      className="no-underline hover:underline"
                    >
                      <h3 className="text-lg font-bold hover:text-highlight transition-colors mb-2">
                        {post.title}
                      </h3>
                    </Link>

                    {post.description && (
                      <p className="text-muted-foreground mb-3 text-sm">
                        {post.description}
                      </p>
                    )}

                    <div className="flex justify-between items-center">
                      <time
                        dateTime={post.date}
                        className="text-xs text-muted-foreground"
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Minis Section */}
          {minis.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-highlight">
                Quick Thoughts
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Short scribbles, quick insights, and bite-sized thoughts on
                development and design.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {minis.map((post) => (
                  <article
                    key={post.slug}
                    className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                  >
                    <Link
                      href={`/writings/${post.slug}`}
                      className="no-underline hover:underline"
                    >
                      <h3 className="font-bold hover:text-highlight transition-colors mb-2">
                        {post.title}
                      </h3>
                    </Link>

                    {post.description && (
                      <p className="text-muted-foreground mb-3 text-sm line-clamp-2">
                        {post.description}
                      </p>
                    )}

                    <div className="flex justify-between items-center">
                      <time
                        dateTime={post.date}
                        className="text-xs text-muted-foreground"
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.tags
                            .filter(
                              (tag) => !['mini', 'scribble'].includes(tag),
                            )
                            .slice(0, 2)
                            .map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Articles Section */}
          {(articles.length > 0 || uncategorized.length > 0) && (
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-highlight">
                Articles
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Casual thoughts, technical opinions, and personal reflections on
                development and design.
              </p>
              <div className="space-y-6">
                {[...articles, ...uncategorized].map((post) => (
                  <article
                    key={post.slug}
                    className="border-b pb-6 last:border-0"
                  >
                    <Link
                      href={`/writings/${post.slug}`}
                      className="no-underline hover:underline"
                    >
                      <h3 className="text-lg font-bold hover:text-highlight transition-colors mb-2">
                        {post.title}
                      </h3>
                    </Link>

                    {post.description && (
                      <p className="text-muted-foreground mb-3 text-sm">
                        {post.description}
                      </p>
                    )}

                    <div className="flex justify-between items-center">
                      <time
                        dateTime={post.date}
                        className="text-xs text-muted-foreground"
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Empty state if no posts */}
          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                More writings coming soon...
              </p>
            </div>
          )}
        </div>
    </main>
  );
}
