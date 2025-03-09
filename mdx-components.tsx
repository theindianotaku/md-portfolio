import type { MDXComponents } from 'mdx/types';

import CustomH2 from '@/components/h2';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: CustomH2,
    ...components,
  };
}
