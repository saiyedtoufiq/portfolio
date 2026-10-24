import type { Metadata, Viewport } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { portfolioData } from '../../data/portfolio';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://saiyedtoufiq.github.io/portfolio'),
  title: {
    default: `${portfolioData.personal.name} | Full Stack Developer & Backend Architect`,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description: `${portfolioData.personal.name} - ${portfolioData.personal.bioShort}`,
  keywords: [
    'Toufiq Rehman Sayyed',
    'Toufiq Sayyed',
    'Full Stack Web Developer',
    'Laravel Developer',
    'Backend Architect',
    'PHP Developer',
    'RESTful APIs',
    'React Developer',
    'Next.js Portfolio',
    'MySQL Optimization',
  ],
  authors: [{ name: portfolioData.personal.name, url: 'https://github.com/saiyedtoufiq' }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saiyedtoufiq.github.io/portfolio',
    title: `${portfolioData.personal.name} | Full Stack Developer & Backend Architect`,
    description: portfolioData.personal.bioShort,
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: `${portfolioData.personal.name} - Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.personal.name} | Full Stack Developer`,
    description: portfolioData.personal.bioShort,
    images: ['/favicon.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Providers } from '../components/Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.png`} type="image/png" />
      </head>
      <body className={`${outfit.variable} ${jetbrainsMono.variable} font-sans min-h-screen selection:bg-cyan-500 selection:text-space-950 transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
