// src/lib/blog.ts
import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'src/markdown/blog');

export type BlogPostMetadata = {
  title: string;
  description?: string;
  date: string;
  tags?: string[];
  slug: string;
};

export function getBlogSlugs(): string[] {
  const fileNames = fs.readdirSync(BLOG_DIR);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export async function getBlogPostMetadata(
  slug: string,
): Promise<BlogPostMetadata> {
  const { frontmatter } = await import(`@/markdown/blog/${slug}.mdx`);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    tags: frontmatter.tags,
    slug,
  };
}

export async function getAllBlogPostsMetadata(): Promise<BlogPostMetadata[]> {
  const slugs = getBlogSlugs();
  const getPostsMetadata = async () => {
    const result = await Promise.all(
      slugs.map((slug) => getBlogPostMetadata(slug)),
    );

    return result;
  };
  const posts = await getPostsMetadata();

  // Sort by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
