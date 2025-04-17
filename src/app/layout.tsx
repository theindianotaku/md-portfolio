import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Merriweather, Mona_Sans, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from 'next-themes';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
    url: 'https://debaintech.vercel.app/',
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
    url: 'https://debaintech.vercel.app',
    image: 'https://debaintech.vercel.app/opengraph-image.png',
    jobTitle: 'Frontend Engineer',
    description: 'Building Clean & Accessible Web Experiences.',
    sameAs: [
      'https://github.com/theindianotaku',
      'https://www.linkedin.com/in/debashishnayak/',
      'https://theindianotaku.github.io/',
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${serifFont.variable} ${monaSansFont.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          defaultTheme="dark"
          enableSystem
          attribute="class"
          disableTransitionOnChange
        >
          <Header />
          <div className="flex flex-col grow h-[calc(100vh-2.5rem)] md:h-[calc(100vh-7.5rem)] overflow-y-auto">
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
      </body>
    </html>
  );
}
