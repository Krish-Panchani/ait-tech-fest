"use client";
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Image, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { Logo } from "@/app/assets/Logo";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Separator } from "./ui/separator";
import { Skeleton } from './ui/skeleton';

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
      setImageLoaded(true);
  }
  const menuItems = [
    { label: "Home", path: "/", isActive: pathname === "/" },
    { label: "Events", path: "/events", isActive: pathname === "/events" },
    { label: "Schedule", path: "/#schedule", isActive: pathname === "/#schedule" },
    // { label: "Venue", path: "/#venue", isActive: pathname === "/#venue" },
    // { label: "Contact", path: "/#Venue", isActive: pathname === "/#Venue" }
  ];

  return (
    <>
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
          <Link href="/">
        <NavbarBrand>
          <div className="flex items-center">
          {/* <Logo /> */}
          {/* <h1 className="text-sm sm:text-xl font-extrabold px-1 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">TECHNOSPARX</h1> */}
        {!imageLoaded && <Skeleton className="w-40 h-10 rounded-md mx-auto aspect-[2/1]" />}
          <Image 
                width={170}
                disableSkeleton={false}
                className="drop-shadow-xl pl-2" 
                src={"TECHNO_final.svg"} 
                alt="" 
                onLoad={handleImageLoad}
              />
              </div>
        </NavbarBrand>
          </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`} isActive={item.isActive}>
            <Link 
            className={item.isActive ? "font-extrabold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent" : ""}
            href={item.path}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="flex">
        {/* <NavbarItem>  */}
        
        <Drawer>
            <DrawerTrigger asChild>
              {/* <Button variant="orange">Details</Button> */}
              <Link href={"#"} className="text-sm sm:text-base font-bold">Contact</Link>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm text-left">
                <DrawerHeader>
                  <DrawerTitle>Contact At</DrawerTitle>
                  <Separator className="my-2" />
                  <DrawerTitle>Faculty Co-ordinators</DrawerTitle>
                  <DrawerDescription>Prof. Namrata Gohel: <Link href={"tel:+91 8866869131"}> +91 8866869131 </Link></DrawerDescription>
                  <DrawerDescription>Prof. Prachi Patel: <Link href={"tel:+91 8401861255"}> +91 8401861255 </Link></DrawerDescription>
                  <DrawerTitle>Students Co-ordinators</DrawerTitle>
                  <DrawerDescription>Hetarth: <Link href={"tel:+91 9328563827"}> +91 9328563827 </Link></DrawerDescription>
                  <DrawerDescription>Rachit: <Link href={"tel:+91 9723395968"}> +91 9723395968 </Link></DrawerDescription>
                  <DrawerDescription>Pravin: <Link href={"tel:+91 9327622985"}> +91 9327622985 </Link></DrawerDescription>
                  <DrawerDescription>Parth: <Link href={"tel:+91 9104454198"}> +91 9104454198 </Link></DrawerDescription>

                </DrawerHeader>

                <DrawerFooter>
                  {/* <Button>Submit</Button> */}
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        {/* <Button variant="ghost"></Button> */}
      {/* </NavbarItem> */}
        <NavbarItem>
          <Drawer>
            <DrawerTrigger asChild>
              {/* <Button variant="orange">Details</Button> */}
              <Button variant="primary" size={"sm"}>Register</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm text-left">
                <DrawerHeader>
                  <DrawerTitle>Registration</DrawerTitle>
                  <Separator className="my-2"></Separator>
                  <DrawerDescription>Note:</DrawerDescription>
                  <DrawerDescription>You have to do fees payment after just filling up this Registration Form.</DrawerDescription>
                  <DrawerDescription>Contact below mentioned Co-ordinators for Fees Payment.</DrawerDescription>
                  <Separator className="my-2"></Separator>
                  <DrawerTitle>Contact for Fees Payment</DrawerTitle>
                  <DrawerDescription>Vaishnavi: <Link href={"tel:+91 6355384251"}> +91 6355384251 </Link></DrawerDescription>
                  <DrawerDescription>Manmohan: <Link href={"tel:+91 7232010574"}> +91 7232010574 </Link></DrawerDescription>
                </DrawerHeader>

                <DrawerFooter>
                  {/* <Button>Submit</Button> */}
                  {/* <Link 
                  href={"https://docs.google.com/forms/d/e/1FAIpQLScU-srnMxDG2wwlC1Ncq-q7iSCoxpNay7Qcl0nL1JW8fRSasw/viewform"} 
                  target="_blank"
                  className="mx-auto">
                  <Button variant="primary" size={"sm"}>Register Now</Button>
                  </Link> */}
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
          </NavbarItem>
        
      </NavbarContent>

      </Navbar>

        <div className="fixed bottom-5 left-0 right-0 mx-auto flex justify-center backdrop-blur-md sm:hidden z-50">
            <div className="border border-orange-400 rounded-full  px-4 py-4">
                <ul className="flex">
                    {menuItems.map((item, index) => (
                        <li key={`${item.label}-${index}`} className="px-2">
                            <Link
                                className={item.isActive ? "font-extrabold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent" : ""}
                                href={item.path}
                            // onClick={handleMenuItemClick}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
</>
    );
  }

  // Don't forgot to add this inside </Navbar> if you want to use it again

  //Bugged Mobile Menu -- (Problem: Not closing automatically when we select page) 
      // / <NavbarMenu>
      //   {menuItems.map((item, index) => (
      //     <NavbarMenuItem key={`${item.label}-${index}`}>
      //       <Link
      //         color={
      //           index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
      //         }
      //         className="w-full"
      //         href={item.path}
      //         onClick={handleMenuItemClick}
      //       >
      //         {item.label}
      //       </Link>
      //     </NavbarMenuItem>
      //   ))}
      // </NavbarMenu> 
    


