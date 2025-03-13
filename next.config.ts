import type { NextConfig } from 'next';
import nextMdx from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMdx = nextMdx({
  options: {
    remarkPlugins: [['remark-gfm', {}]],
    rehypePlugins: [
      ['rehype-slug', {}],
      ['rehype-autolink-headings', {}],
      ['@stefanprobst/rehype-extract-toc', {}],
      ['@stefanprobst/rehype-extract-toc/mdx', {}],
    ],
  },
});

const configWithMdx = withMdx(nextConfig);

export default configWithMdx;
