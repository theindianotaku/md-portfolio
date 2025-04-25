import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import GrainShapes from '@/components/grain-shape';
import UtmScriptCleaner from '@/components/scripts/utm-script-cleaner';

import { Merriweather, Mona_Sans, IBM_Plex_Sans } from 'next/font/google';

import { ThemeProvider } from 'next-themes';
import Header from '@/components/header';
import Footer from '@/components/footer';

import './globals.css';
import 'rehype-github-alerts/styling/css/index.css';

const sansFont = IBM_Plex_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['200', '400', '700'],
});

const serifFont = Merriweather({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '900'],
});

const monaSansFont = Mona_Sans({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Debashish Nayak',
  description: `Debashish's Portfolio - Senior Software Engineer, Frontend`,
  openGraph: {
    type: 'profile',
    title: 'Debashish Nayak',
    description: `Debashish's Portfolio - Senior Software Engineer, Frontend`,
    url: 'https://debashish.me/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Debashish Nayak',
    url: 'https://debashish.me',
    image: 'https://debashish.me/opengraph-image.png',
    jobTitle: 'Frontend Engineer',
    description: 'Building Clean & Accessible Web Experiences.',
    sameAs: [
      'https://github.com/theindianotaku',
      'https://www.linkedin.com/in/debashishnayak/',
      'https://theindianotaku.github.io/',
    ],
  };

  return (
    <html lang="en" className="dark h-full" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/a11y-dark.min.css"
        />
      </head>
      <body
        className={`${sansFont.variable} ${serifFont.variable} ${monaSansFont.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          defaultTheme="dark"
          enableSystem
          attribute="class"
          disableTransitionOnChange
        >
          <GrainShapes count={10} />
          <Header />
          <div className="flex flex-col flex-grow pt-10 md:pt-30">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-BCQHZKFF17`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCQHZKFF17');
          `}
        </Script>
        <UtmScriptCleaner />
      </body>
    </html>
  );
}
