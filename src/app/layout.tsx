import type { Metadata } from 'next';

import { Merriweather, Mona_Sans, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

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
  title: `Debashish Nayak`,
  description:
    'Portfolio of Debashish Nayak, Senior Software Developer, Frontend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansFont.variable} ${serifFont.variable} ${monaSansFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
