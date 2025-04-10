import type { ElementType } from 'react';

export type MDXComponent = {
  default: ElementType;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    permalink: string;
    siteName: string;
  };
};

export type pParams = Promise<{ slug: string[] }>;
