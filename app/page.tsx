import Image from "next/image";
import { Button } from '@nextui-org/button';
import React from "react";
import { Navbar } from "@nextui-org/react";
import Content from "@/components/content";
import Menu from "@/components/mobileMenu";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div>
        <Content />
      </div>
        

    </main>
  );
}
