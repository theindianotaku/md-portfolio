import type { NextConfig } from 'next';
import nextMdx from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true, // Enables the Rust-based MDX compiler (faster)
  },
};

const configWithMdx = nextMdx()(nextConfig);

export default configWithMdx;
