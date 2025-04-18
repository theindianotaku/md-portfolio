// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getBlogSlugs } from '@/lib/blog';
import { MDXComponent, pParams } from '@/types/types';

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
    const { default: Content, frontmatter } = PostModule;

    return (
      <div className="flex flex-col justify-center items-start md:items-center py-10 mx-auto">
        <article>
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
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="max-w-none px-5">
            <Content />
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    notFound();
  }
}
