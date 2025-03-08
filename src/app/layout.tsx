import type { Metadata } from 'next';
import { Inter, Merriweather, Mona_Sans } from 'next/font/google';
import './globals.css';

const interFont = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const merriweatherFont = Merriweather({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400'],
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
        className={`${interFont.variable} ${merriweatherFont.variable} ${monaSansFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
