import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";
import Menu from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechFest at AIT | Ahmedabad Institute of Technology",
  description: "Join us for an exciting techfest at Ahmedabad Institute of Technology! Explore a wide range of technical and non-technical events, including workshops, hackathons, guest lectures, and much more. Don't miss this opportunity to showcase your skills, learn from industry experts, and connect with like-minded individuals. Register now and be a part of the ultimate tech extravaganza!",
};

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
          <div className="flex justify-center">
            <Menu />
          </div>
        </Providers>
      </body>
    </html>
  );
}
