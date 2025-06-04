'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, PenTool, User } from 'lucide-react';

export function HeaderNav() {
  return (
    <div className="flex gap-1 sm:gap-2">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/#project-spotlights" className="no-underline">
          <span className="sr-only sm:not-sr-only">Experience</span>{' '}
          <Briefcase className="sm:sr-only not-sr-only" />
        </Link>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <Link href="/writings" className="no-underline">
          <span className="sr-only sm:not-sr-only">Writings</span>{' '}
          <PenTool className="sm:sr-only not-sr-only" />
        </Link>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <Link href="/about" className="no-underline">
          <span className="sr-only sm:not-sr-only">About</span>{' '}
          <User className="sm:sr-only not-sr-only" />
        </Link>
      </Button>
    </div>
  );
}
