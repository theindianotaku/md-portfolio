import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const merriweatherFont = Merriweather({
  variable: '--font-merriweather',
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
        className={`${interFont.variable} ${merriweatherFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
