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
        url: 'https://cdn.discordapp.com/attachments/940930289981595698/1201131297993658418/icon.png?ex=65c8b3b1&is=65b63eb1&hm=81fca492d75cda5a8b72e8a034455f6dfd2f7cdf39233d55dac84721e1b93de1&', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
