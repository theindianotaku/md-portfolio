import Image from 'next/image';
import Link from 'next/link';
import ResumeContent, { tableOfContents } from '@/markdown/resume-content.mdx';
import { Button } from '@/components/ui/button';
import { MoveDownRight, MoveUpRight } from 'lucide-react';
import TableOfContents from '@/components/table-of-contents';

import debashishImage from '@/assets/images/hero-v2.png';

export default function Home() {
  return (
    <main className="main">
      <div className="flex flex-col-reverse items-center px-5 md:px-10 gap-10 md:flex-row md:justify-between md:gap-5">
        <div className="flex flex-col items-center justify-center prose dark:prose-invert md:items-start">
          <h1 className="font-light leading-normal text-2xl text-center md:text-3xl md:text-left">
            <span className="sr-only">Debashish Nayak</span>Building{' '}
            <span className="text-highlight font-black">
              clean & accessible
            </span>
            {' experiences. Excited for '}
            <span className="text-highlight font-black">{`what’s next!`}</span>
          </h1>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/#project-spotlights" className="no-underline">
                Discover My Work <MoveDownRight />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1rXhHgc5TBWOW5SHVTECS6vEFFneWsWOX/view"
                className="no-underline"
              >
                My Resume <MoveUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center max-w-[300px] md:max-w-[400px]">
          <Image src={debashishImage} alt="Debashish's photo" />
        </div>
      </div>
      <div className="relative flex flex-row-reverse justify-center w-full max-w-[1200px] px-5 md:px-10 lg:flex lg:flex-row">
        <div className="lg:flex-1">
          <ResumeContent />
        </div>
        <TableOfContents items={tableOfContents} className="mt-20" />
      </div>
    </main>
  );
}
