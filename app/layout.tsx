import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";
import Menu from "@/components/mobileMenu";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechFest at AIT | Ahmedabad Institute of Technology",
  description: "Join us for an exciting techfest at Ahmedabad Institute of Technology! Explore a wide range of technical and non-technical events, including workshops, hackathons, guest lectures, and much more. Don't miss this opportunity to showcase your skills, learn from industry experts, and connect with like-minded individuals. Register now and be a part of the ultimate tech extravaganza!",
  keywords: ['AIT', 'TECHFEST 2024', 'Ahmedabad'],
  authors: [{ name: 'Krish Panchani', url: 'https://github.com/Krish-Panchani' }],
  creator: 'Krish Panchani',
  publisher: 'Krish Panchani',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'TechFest 2024 at AIT',
    description: 'Join us for an exciting techfest at Ahmedabad Institute of Technology! Explore a wide range of technical and non-technical events, including workshops, hackathons, guest lectures, and much more. Don\'t miss this opportunity to showcase your skills, learn from industry experts, and connect with like-minded individuals. Register now and be a part of the ultimate tech extravaganza!',
    url: 'https://aitfest.thunderdevelops.in',
    siteName: 'AIT TechFest 2024',
    images: [
      {
        url: '', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    creator: '@your_twitter_handle',
  },

  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-icon.png',
    },
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          {/* <div className="flex justify-center">
            <Menu />
          </div> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
