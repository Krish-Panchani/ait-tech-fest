"use client";
import React from "react";
// import { useRouter } from "next/router";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { AcmeLogo } from "@/app/assets/AcmeLogo";
import { Button } from "./ui/button";

export default function Header() {
  // const router = useRouter();
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  const menuItems = [
    { label: "Home", path: "/", isActive: pathname === "/" },
    { label: "About", path: "/about", isActive: pathname === "/about" },
    { label: "Events", path: "/events", isActive: pathname === "/events" },
    { label: "Contact", path: "/contact", isActive: pathname === "/contact" }
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
          <p className="font-bold text-inherit">ACME</p>
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
        <NavbarItem>
          <Button color="default" variant="primary">
            <Link href="#">Register</Link>
          </Button>
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
    </Navbar>
  );
}


