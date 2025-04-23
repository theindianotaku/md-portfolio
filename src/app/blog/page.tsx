// app/blog/page.tsx
import Link from 'next/link';
import { getAllBlogPostsMetadata } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Blog | Debashish Nayak',
  description: 'Thoughts, experiences, and insights about frontend development',
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPostsMetadata();

  return (
    <main className="main flex-grow justify-between">
      <div className="prose-container px-5 md:px-10">
        <h1 className="font-serif font-light text-2xl md:text-3xl text-highlight mb-8">
          Blogs Directory
        </h1>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-6 last:border-0">
              <Link
                href={`/blog/${post.slug}`}
                className="no-underline hover:underline"
              >
                <h2 className="text-2xl font-bold hover:text-highlight transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>

              {post.description && (
                <p className="text-muted-foreground mb-3">{post.description}</p>
              )}

              <div className="flex justify-between items-center">
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
