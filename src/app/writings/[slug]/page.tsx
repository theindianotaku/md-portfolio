// src/app/writings/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getBlogSlugs } from '@/lib/blog'; // We'll rename this function later
import { MDXComponent, pParams } from '@/types/types';
import TableOfContents from '@/components/table-of-contents';
import { Badge } from '@/components/ui/badge';

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Define metadata for the page
export async function generateMetadata({ params }: { params: pParams }) {
  try {
    const { slug } = await params;
    const { frontmatter } = await import(`@/markdown/blog/${slug}.mdx`);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      keywords: frontmatter.tags,
      openGraph: {
        url: frontmatter.permalink?.replace('/blog/', '/writings/'),
        siteName: frontmatter.siteName,
        type: 'article',
        publishedTime: frontmatter.date,
        modifiedTime: frontmatter.date,
        tags: frontmatter.tags,
      },
    };
  } catch (e) {
    console.log(`Console ~ e:`, e);
    return {
      title: 'Writing Not Found',
    };
  }
}

export default async function WritingPage({ params }: { params: pParams }) {
  const { slug }: { slug: string[] } = await params;

  try {
    // Dynamic import of the MDX file
    const PostModule: MDXComponent = await import(
      `@/markdown/blog/${slug}.mdx`
    );
    const { default: Content, frontmatter, tableOfContents } = PostModule;

    // Determine the category based on explicit tags
    let category = 'Article'; // Default fallback

    if (frontmatter.tags?.includes('case-study')) {
      category = 'Case Study';
    } else if (
      frontmatter.tags?.includes('project-deep-dive') ||
      frontmatter.tags?.includes('project-description')
    ) {
      category = 'Project Deep Dive';
    } else if (
      frontmatter.tags?.includes('mini') ||
      frontmatter.tags?.includes('scribble')
    ) {
      category = 'Quick Thought';
    } else if (frontmatter.tags?.includes('article')) {
      category = 'Article';
    }

    return (
      <main className="main">
          <article className="content-wrapper flex flex-col items-center">
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">
                  {category}
                </Badge>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {frontmatter.title}
              </h1>

              {frontmatter.description && (
                <p className="text-xl text-muted-foreground mb-4">
                  {frontmatter.description}
                </p>
              )}

              <time
                dateTime={frontmatter.date}
                className="text-sm text-muted-foreground"
              >
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>

              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {frontmatter.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </header>

            <div className="w-full lg:flex lg:flex-row">
              <div className="lg:flex-1">
                <div className="flex flex-col items-center max-w-none">
                  <Content />
                </div>
              </div>
              {tableOfContents && tableOfContents.length > 0 && (
                <TableOfContents items={tableOfContents} className="mt-20" />
              )}
            </div>
          </article>
      </main>
    );
  } catch (error) {
    console.error(`Failed to load writing: ${slug}`, error);
    notFound();
  }
}
