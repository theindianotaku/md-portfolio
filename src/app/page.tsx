import Image from 'next/image';
import Link from 'next/link';
import ResumeContent, { tableOfContents } from '@/markdown/resume-content.mdx';
import { Button } from '@/components/ui/button';
import { MoveDownRight, MoveUpRight } from 'lucide-react';

import debashishImage from '@/assets/images/hero-v2.png';

console.log(`Console ~ tableOfContents:`, tableOfContents);

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-start md:items-center py-10">
      <div className="flex flex-col-reverse items-center px-5 gap-10 md:flex-row md:justify-between md:gap-5">
        <div className="flex flex-col items-center justify-center prose dark:prose-invert md:items-start">
          <h1 className="font-light leading-normal text-3xl text-center md:text-4xl md:text-left">
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
      <div className="relative flex flex-row-reverse gap-5 px-10">
        {/* <aside className="sticky w-[300px] max-h-[calc(100vh-100px)] overflow-x-auto p-4 items-start top-5">
          <span>Table of contents</span>
          <ul className="toc">
            <li>
              <Link href="#about-me">About Me</Link>
            </li>
            <li>
              <Link href="#project-spotlights">Experience</Link>
              <ul>
                <li>
                  <Link href="#random">Senior Software Engineer</Link>
                </li>
                <li>
                  <Link href="#random">Software Engineer II</Link>
                </li>
                <li>
                  <Link href="#random">Software Engineer I</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#project-spotlights">Achievements & Accolades</Link>
              <ul>
                <li>
                  <Link href="#random">Senior Software Engineer</Link>
                </li>
                <li>
                  <Link href="#random">Software Engineer II</Link>
                </li>
                <li>
                  <Link href="#random">Software Engineer I</Link>
                </li>
              </ul>
            </li>
          </ul>
        </aside> */}
        <ResumeContent />
      </div>
    </main>
  );
}
