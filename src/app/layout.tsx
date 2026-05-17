import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Neural Acres | Investor Overview',
    template: '%s | Neural Acres',
  },
  description:
    'Not a farm. A machine. AI-governed autonomous cultivation of pharmaceutical-grade Cordyceps militaris powered by Metera AI.',
  keywords: [
    'Neural Acres', 'Metera AI', 'Cordyceps', 'medicinal fungi', 'biotech investment',
    'AI agriculture', 'pharmaceutical grade', 'India biotech', 'seed investment',
  ],
  openGraph: {
    title: 'Neural Acres | Investor Overview',
    description: 'AI-governed autonomous cultivation of pharmaceutical-grade medicinal fungi.',
    siteName: 'Neural Acres',
    type: 'website',
    images: [
      {
        url: '/logo-og.png',
        width: 1200,
        height: 630,
        alt: 'Neural Acres',
      },
    ],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: ['/favicon.svg'],
    apple: [{ url: '/logo-mark.svg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-navy-900 text-silver-100 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
