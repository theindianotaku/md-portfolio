import Image from 'next/image';
import Link from 'next/link';
import ResumeContent, { tableOfContents } from '@/markdown/resume-content.mdx';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileDown } from 'lucide-react';

import debashishImage from '@/assets/images/hero-v2.png';

console.log(`Console ~ tableOfContents:`, tableOfContents);

export default function Home() {
  return (
    <div className="container">
      <main className="flex flex-col justify-center items-start md:items-center py-10">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col items-start justify-center prose dark:prose-invert">
            <h1 className="font-light leading-normal text-4xl">
              <span className="sr-only">Debashish Nayak</span>Building{' '}
              <span className="text-highlight font-black">
                clean & accessible
              </span>{' '}
              experiences. Excited for <br />
              <span className="text-highlight font-black">{`what’s next!`}</span>
            </h1>
            <div className="flex flex-row gap-4">
              <Button variant="ghost" asChild>
                <Link href="/#experience">
                  View My Work <ChevronRight />
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1rXhHgc5TBWOW5SHVTECS6vEFFneWsWOX/view"
                >
                  Download Resume <FileDown />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center w-[600px] h-[600px]">
            <Image src={debashishImage} alt="Debashish's picture" />
          </div>
        </div>
        <ResumeContent />
      </main>
    </div>
  );
}
