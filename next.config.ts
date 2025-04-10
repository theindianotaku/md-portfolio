import type { NextConfig } from 'next';
import nextMdx from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMdx = nextMdx({
  options: {
    remarkPlugins: [
      // @ts-expect-error wrong import type
      ['remark-frontmatter'],
      // @ts-expect-error wrong import type
      ['remark-mdx-frontmatter'],
      // @ts-expect-error wrong import type
      ['remark-gfm', {}],
    ],
    rehypePlugins: [
      // @ts-expect-error wrong import type
      ['rehype-slug', {}],
      // @ts-expect-error wrong import type
      ['rehype-autolink-headings', {}],
      // @ts-expect-error wrong import type
      ['@stefanprobst/rehype-extract-toc', {}],
      // @ts-expect-error wrong import type
      ['@stefanprobst/rehype-extract-toc/mdx', {}],
    ],
  },
});

const configWithMdx = withMdx(nextConfig);

export default configWithMdx;
