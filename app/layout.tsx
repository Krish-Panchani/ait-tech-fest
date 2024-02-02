import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TECHNOSPARX | Ahmedabad Institute of Technology",
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
    title: 'TECHNOSPARX at AIT',
    description: 'Join us for an exciting techfest at Ahmedabad Institute of Technology! Explore a wide range of technical and non-technical events, including workshops, hackathons, guest lectures, and much more. Don\'t miss this opportunity to showcase your skills, learn from industry experts, and connect with like-minded individuals. Register now and be a part of the ultimate tech extravaganza!',
    url: 'https://aitfest.thunderdevelops.in',
    siteName: 'AIT TechFest 2024',
    images: [
      {
        url: 'https://aitfest.thunderdevelops.in/apple-touch-icon.png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  icons: {
    icon: '/android-chrome-192x192.png',
    shortcut: '/apple-touch-icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
