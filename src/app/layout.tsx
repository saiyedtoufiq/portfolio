import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { portfolioData } from '../../data/portfolio';
import { Providers } from '../components/Providers';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#05070f',
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
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
      <body
        className={`${jakarta.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen selection:bg-sky-400/30 selection:text-white transition-colors duration-500`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
