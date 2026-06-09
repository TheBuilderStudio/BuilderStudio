import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Header } from "@/components/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thebuilderstudio.com'),
  title: {
    default: "Builder Studio | Turn Your Idea Into a Startup in 4 Weeks",
    template: "%s | Builder Studio"
  },
  description: "Builder Studio is a premier MVP Builder and App Development Agency. We partner with founders to validate ideas, engineer scalable Next.js and AI products, and launch profitable startups in 4 weeks. We don't just build features, we build businesses.",
  keywords: ["Startup Studio", "MVP Builder", "Product Studio", "Next.js Development", "Launch Startup", "App Development Agency", "Software Agency", "AI Startups"],
  authors: [{ name: "Builder Studio" }],
  creator: "Builder Studio",
  publisher: "Builder Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Builder Studio | Turn Your Idea Into a Startup in 4 Weeks",
    description: "Builder Studio is a premier MVP Builder and App Development Agency. We partner with founders to validate ideas, engineer scalable Next.js and AI products, and launch profitable startups in 4 weeks.",
    url: 'https://thebuilderstudio.com',
    siteName: 'Builder Studio',
    images: [
      {
        url: '/assets/builder_studio_logo.png',
        width: 800,
        height: 600,
        alt: 'Builder Studio Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Builder Studio | Turn Your Idea Into a Startup in 4 Weeks',
    description: "Builder Studio is a premier MVP Builder and App Development Agency. We partner with founders to validate ideas, engineer scalable Next.js and AI products, and launch profitable startups in 4 weeks.",
    images: ['/assets/builder_studio_logo.png'],
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
  icons: {
    icon: [
      { url: '/assets/builder_studio_logo.png' },
      { url: '/assets/builder_studio_logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/assets/builder_studio_logo.png', type: 'image/png', sizes: '192x192' },
      { url: '/assets/builder_studio_logo.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/assets/builder_studio_logo.png',
    apple: [
      { url: '/assets/builder_studio_logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#020202] text-white selection:bg-emerald-500/20">
        <GoogleAnalytics gaId="G-49MWYEHGEE" />
        <Header />
        <NoiseOverlay />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
