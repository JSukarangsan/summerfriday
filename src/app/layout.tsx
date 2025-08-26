import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const sombra = localFont({
  src: '../../public/fonts/Sombra-Variable.ttf',
  variable: '--font-sombra',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Summer Friday - AI Strategy & Product Design Consultancy",
    template: "%s | Summer Friday"
  },
  description: "Transform your team from scattered AI experiments to systematic solutions that drive real business results. Expert AI strategy, product design, and implementation services for modern teams worldwide.",
  keywords: ["AI strategy", "product design", "AI implementation", "business transformation", "AI consultancy", "product development", "design systems", "AI operations", "team productivity"],
  authors: [{ name: "Jon Sukarangsan" }],
  creator: "Summer Friday",
  publisher: "Summer Friday",
  metadataBase: new URL('https://summerfriday.co'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://summerfriday.co',
    siteName: 'Summer Friday',
    title: 'Summer Friday - AI Strategy & Product Design Consultancy',
    description: 'Transform your team from scattered AI experiments to systematic solutions that drive real business results.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Summer Friday - AI Strategy & Product Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summer Friday - AI Strategy & Product Design Consultancy',
    description: 'Transform your team from scattered AI experiments to systematic solutions that drive real business results.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here', // Add actual Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sombra.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-inter bg-white">
        {children}
      </body>
    </html>
  );
}
