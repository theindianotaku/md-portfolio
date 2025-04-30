// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getBlogSlugs } from '@/lib/blog';
import { MDXComponent, pParams } from '@/types/types';
import TableOfContents from '@/components/table-of-contents';
import { Badge } from '@/components/ui/badge';
import PageTransition from '@/components/page-transition';

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
        url: frontmatter.permalink,
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
      title: 'Blog Post Not Found',
    };
  }
}

export default async function BlogPostPage({ params }: { params: pParams }) {
  const { slug }: { slug: string[] } = await params;

  try {
    // Dynamic import of the MDX file
    const PostModule: MDXComponent = await import(
      `@/markdown/blog/${slug}.mdx`
    );
    const { default: Content, frontmatter, tableOfContents } = PostModule;

    return (
      <PageTransition>
        <main className="main">
          <article className="content-wrapper flex flex-col items-center">
            <header className="mb-8">
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
                    <Badge key={tag}>{tag}</Badge>
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
      </PageTransition>
    );
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    notFound();
  }
}
