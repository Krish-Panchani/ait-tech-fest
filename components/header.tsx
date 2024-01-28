"use client";
import React from "react";
// import { useRouter } from "next/router";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { AcmeLogo } from "@/app/assets/AcmeLogo";
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

export default function Header() {
  // const router = useRouter();
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
    isMenuOpen == false;
  };

  const menuItems = [
    { label: "Home", path: "/", isActive: pathname === "/" },
    // { label: "About", path: "/about", isActive: pathname === "/about" },
    { label: "Events", path: "/events", isActive: pathname === "/events" },
    { label: "Schedule", path: "/contact", isActive: pathname === "/contact" }
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">AIT TECHFEST</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`} isActive={item.isActive}>
            <Link color="foreground" href={item.path}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem> 
          <Button variant="primary">Contact</Button>
      </NavbarItem> */}
        <NavbarItem>
          <Drawer>
            <DrawerTrigger asChild>
              {/* <Button variant="orange">Details</Button> */}
              <Button variant="primary">Register</Button>
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

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.path}
              onClick={handleMenuItemClick}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      {/* Mobile Menu */}
    
    </Navbar>
  );
}


