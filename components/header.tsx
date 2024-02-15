"use client";
import React from "react";
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

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
          <Logo />
          {/* <h1 className="text-sm sm:text-xl font-extrabold px-1 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">TECHNOSPARX</h1> */}
          <Image 
                width={170}
                disableSkeleton={false}
                className="drop-shadow-xl pl-2" 
                src={"TECHNO_final.svg"} 
                alt="" 
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
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Contact At</DrawerTitle>
                  <Separator className="my-2" />
                  <DrawerTitle>Faculty Co-ordinators</DrawerTitle>
                  <DrawerDescription>Name: </DrawerDescription>
                  <DrawerDescription>No.:</DrawerDescription>
                  <DrawerTitle>Students Co-ordinators</DrawerTitle>
                  <DrawerDescription>Name: </DrawerDescription>
                  <DrawerDescription>No.:</DrawerDescription>
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
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Registration</DrawerTitle>
                  <DrawerDescription>Details</DrawerDescription>
                  <DrawerDescription>Registration Form will be release soon, Stay Tuned</DrawerDescription>
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
    


