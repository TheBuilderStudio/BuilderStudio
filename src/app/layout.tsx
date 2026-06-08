import type { Metadata } from "next";
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
  title: {
    default: "Builder Studio | Turn Your Idea Into a Startup in 4 Weeks",
    template: "%s | Builder Studio"
  },
  description: "Builder Studio partners with founders to validate ideas, engineer products, launch MVPs, and help them reach market faster. We don't just build features, we build businesses.",
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
    description: "We partner with founders to validate, build, launch, and scale digital products that create real impact and revenue.",
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
    description: 'We partner with founders to validate, build, launch, and scale digital products that create real impact and revenue.',
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
    icon: '/assets/builder_studio_logo.png',
    shortcut: '/assets/builder_studio_logo.png',
    apple: '/assets/builder_studio_logo.png',
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
      <body className="min-h-full flex flex-col bg-[#020202] text-white selection:bg-emerald-500/20">
        <Header />
        <NoiseOverlay />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
