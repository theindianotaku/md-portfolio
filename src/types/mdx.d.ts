declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';
  import type { Toc } from '@stefanprobst/rehype-extract-toc';

  export const tableOfContents: Toc;
  export default function MDXComponent(props: MDXProps): JSX.Element;
}
