import Image from 'next/image';
import Link from 'next/link';
import ResumeContent from '@/markdown/resume-content.mdx';
import CustomH2 from '@/components/h2';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileDown } from 'lucide-react';

import debashishImage from '@/assets/images/hero-v2.png';

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
            <p className="font-normal"></p>
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
                  href="https://drive.google.com/file/d/1l8XOKH15uvggMyIczpt1b-zkOL2U0V6Y/view"
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
        <div className="flex flex-col items-start prose dark:prose-invert">
          <CustomH2>About me</CustomH2>
          <div>
            <p>{`👋 Hi there! I'm a senior software developer with a strong passion for user experience and UI development. With extensive experience in vanilla JavaScript and a proven track record of delivering high-quality React applications, I'm well-equipped to take on challenging projects.`}</p>
          </div>
        </div>
        <ResumeContent />
      </main>
    </div>
  );
}
