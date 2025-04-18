// import type { NextConfig } from 'next';
import nextMdx from '@next/mdx';
// Import remark plugins
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { remarkAlert } from 'remark-github-blockquote-alert';

// Import rehype plugins
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExtractToc from '@stefanprobst/rehype-extract-toc';
import rehypeExtractTocMdx from '@stefanprobst/rehype-extract-toc/mdx';

const nextConfig = {
  /* config options here */
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: false,
  },
};

const withMdx = nextMdx({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkAlert,
      remarkFrontmatter,
      remarkMdxFrontmatter,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeExtractToc,
      rehypeExtractTocMdx,
      rehypeHighlight,
    ],
  },
});

const configWithMdx = withMdx(nextConfig);

export default configWithMdx;
