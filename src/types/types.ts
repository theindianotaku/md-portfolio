import type { ElementType } from 'react';
import type { Toc } from '@stefanprobst/rehype-extract-toc';

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
  tableOfContents: Toc;
};

export type pParams = Promise<{ slug: string[] }>;
