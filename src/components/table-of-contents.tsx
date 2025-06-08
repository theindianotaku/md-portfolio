'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerTrigger,
  DrawerDescription,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { List } from 'lucide-react';
import { cn } from '@/lib/utils';

import type { TocEntry, Toc } from '@stefanprobst/rehype-extract-toc';

/**
 * Custom hook to track the most visible section
 */
const useActiveSection = () => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const getSection = (heading: Element) => {
      const section = { start: heading, elements: [heading] };
      let next = heading.nextElementSibling;
      
      while (next && !['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(next.tagName)) {
        section.elements.push(next);
        next = next.nextElementSibling;
      }
      
      return section;
    };

    const getSectionVisibility = (section: { start: Element; elements: Element[] }) => {
      let totalHeight = 0;
      let visibleHeight = 0;
      
      section.elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        totalHeight += elementHeight;
        
        // Calculate visible portion of this element
        const windowHeight = window.innerHeight;
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const elementVisibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        visibleHeight += elementVisibleHeight;
      });
      
      return totalHeight > 0 ? visibleHeight / totalHeight : 0;
    };

    const updateActiveSection = () => {
      const headings = document.querySelectorAll('h2[id], h3[id], h4[id]');
      let maxVisibility = 0;
      let mostVisibleId = '';
      
      headings.forEach(heading => {
        const section = getSection(heading);
        const visibility = getSectionVisibility(section);
        
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleId = heading.id;
        }
      });
      
      if (mostVisibleId && maxVisibility > 0.1) {
        setActiveId(mostVisibleId);
      }
    };

    // Update on scroll with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial update
    updateActiveSection();
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeId;
};

type TableOfContentsProps = {
  items: Toc;
  className?: string;
};

/**
 * Renders a link for the table of contents
 */
const TOCLink = ({
  item,
  isActive,
  onClick,
}: {
  item: TocEntry;
  isActive: boolean;
  onClick?: () => void;
}) => {
  const indent = item.depth > 2 ? `ml-${(item.depth - 2) * 4}` : '';

  return (
    <li key={item.id} className={cn('mb-2', indent)}>
      <Link
        href={`#${item.id}`}
        onClick={onClick}
        className={cn(
          'text-sm decoration-accent underline-offset-4 line-clamp-1 hover:underline',
          isActive ? 'font-bold' : '',
        )}
      >
        {item.value}
      </Link>

      {item.children && item.children.length > 0 && (
        <ul className="mt-2 ml-4">
          {item.children.map((child) => (
            <TOCLink
              key={child.id}
              item={child}
              isActive={
                isActive && child.id === window.location.hash.substring(1)
              }
              onClick={onClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

/**
 * Recursive function to render the table of contents items
 */
const RenderTOCItems = ({
  items,
  activeId,
  onClick,
}: {
  items: Toc;
  activeId: string;
  onClick?: () => void;
}) => {
  return (
    <ul className="text-muted-foreground">
      {items.map((item) => (
        <TOCLink
          key={item.id}
          item={item}
          isActive={item.id === activeId}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

/**
 * Mobile drawer view of the table of contents
 */
const MobileTOC = ({ items }: { items: Toc }) => {
  const activeId = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="accent"
          size="icon"
          className="fixed bottom-6 right-6 z-10 shadow-md rounded-full h-12 w-12"
          aria-label="Table of Contents"
        >
          <List className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm overflow-auto pb-10">
          <DrawerHeader>
            <DrawerTitle className="text-muted-foreground">
              Table of Contents
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              Navigation links to sections of the current page
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <RenderTOCItems
              items={items}
              activeId={activeId}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

/**
 * Desktop sidebar view of the table of contents
 */
const DesktopTOC = ({
  items,
  className,
}: {
  items: Toc;
  className?: string;
}) => {
  const activeId = useActiveSection();

  return (
    <aside className={cn('hidden lg:block w-64 flex-shrink-0 ', className)}>
      <div className="sticky top-40 max-h-[calc(100vh-120px)] overflow-y-auto p-4 border-y-2 border-highlight-accent border-dashed text-muted-foreground">
        <h3 className="text-md font-bold mb-4">Table of Contents</h3>
        <RenderTOCItems items={items} activeId={activeId} />
      </div>
    </aside>
  );
};

/**
 * Main TableOfContents component that renders the appropriate view based on screen size
 */
const TableOfContents = ({ items, className }: TableOfContentsProps) => {
  return (
    <>
      {/* Mobile view */}
      <div className="lg:hidden">
        <MobileTOC items={items} />
      </div>

      {/* Desktop view */}
      <DesktopTOC items={items} className={className} />
    </>
  );
};

export default TableOfContents;
