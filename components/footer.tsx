"use client"

import Link from "next/link"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { FaGithub, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdOutlineLocalPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row p-5 w-full shrink-0 items-center px-6 md:px-6 border-t mb-20 sm:mb-5 ">
      <p className=" text-gray-500 dark:text-gray-400">© 2024 TECHNOSPARX | AIT TechFest. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-2 sm:gap-2 sm:flex-row flex-row">
        <h1>Design & Developed By{' '}
        <Drawer>
          <DrawerTrigger asChild>
            {/* <Button variant="orange">Details</Button> */}
            <Link className="font-extrabold hover:underline underline-offset-4 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent" 
            href="#">Krish Panchani</Link>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle className="font-extrabold text-xl bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">Krish Panchani&apos;s Handles</DrawerTitle>
                <Separator className="my-2" />
                <DrawerTitle>Contact</DrawerTitle>
                <div className="flex items-center">
                  <MdOutlineLocalPhone />
                  <DrawerDescription className="px-2">Phone: <Link href={"tel:+91 8866799347"}> +91 8866799347 </Link></DrawerDescription>
                </div>

                <div className="flex items-center">
                  <FaWhatsapp />
                  <DrawerDescription className="px-2">WhatsApp: <Link href={"https://wa.me/+918866799347"} target="_blank"> +91 8866799347 </Link></DrawerDescription>
                </div>

                <div className="flex items-center">
                  <MdOutlineAlternateEmail />
                  <DrawerDescription className="px-2">Email: <Link href={"mailto:krishpanchani1346@gmail.com"} target="_blank"> krishpanchani1346@gmail.com </Link></DrawerDescription>
                </div>

                <Separator className="my-2" />
                <DrawerTitle>Social</DrawerTitle>

                <div className="flex items-center">
                  <FaInstagram />
                  <DrawerDescription className="px-2">Instagram: <Link href={"https://www.instagram.com/krishpanchani/"} target="_blank"> krishpanchani </Link></DrawerDescription>
                </div>
                <div className="flex items-center">
                  <FaLinkedin />
                  <DrawerDescription className="px-2">LinkedIn: <Link href={"https://www.linkedin.com/in/krish-panchani-7b3b3b1b3/"} target="_blank"> Krish Panchani </Link></DrawerDescription>
                </div>
                <div className="flex items-center">
                  <FaGithub />
                  <DrawerDescription className="px-2">GitHub: <Link href={"https://github.com/Krish-Panchani/"} target="_blank"> Krish-Panchani </Link></DrawerDescription>
                </div>

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
        </h1>
        <h1>& Contributed By {' '}
        <Drawer>
          <DrawerTrigger asChild>
            {/* <Button variant="orange">Details</Button> */}
            <Link className="font-extrabold hover:underline underline-offset-4 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent" 
            href="#"> Meet Katarmal</Link>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle className="font-extrabold text-xl bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">Meet Katarmal&apos;s Handles</DrawerTitle>
                <Separator className="my-2" />
                <DrawerTitle>Contact</DrawerTitle>
                <div className="flex items-center">
                  <MdOutlineLocalPhone />
                  <DrawerDescription className="px-2">Phone: <Link href={"tel:+91 8866799347"}> +91 9137674983 </Link></DrawerDescription>
                </div>

                <div className="flex items-center">
                  <FaWhatsapp />
                  <DrawerDescription className="px-2">WhatsApp: <Link href={"https://wa.me/+918866799347"} target="_blank"> +91 9137674983 </Link></DrawerDescription>
                </div>

                <div className="flex items-center">
                  <MdOutlineAlternateEmail />
                  <DrawerDescription className="px-2">Email: <Link href={"mailto:krishpanchani1346@gmail.com"} target="_blank"> katarmalmeet851@gmail.com </Link></DrawerDescription>
                </div>

                <Separator className="my-2" />
                <DrawerTitle>Social</DrawerTitle>

                <div className="flex items-center">
                  <FaInstagram />
                  <DrawerDescription className="px-2">Instagram: <Link href={"https://www.instagram.com/meet_katarmal?utm_source=qr&igsh=MTA5Z3pndm41a3AzaA=="} target="_blank"> Meet Katarmal </Link></DrawerDescription>
                </div>
                <div className="flex items-center">
                  <FaLinkedin />
                  <DrawerDescription className="px-2">LinkedIn: <Link href={"https://www.linkedin.com/in/meet-katarmal-118796256/"} target="_blank"> Meet Katarmal </Link></DrawerDescription>
                </div>
                <div className="flex items-center">
                  <FaGithub />
                  <DrawerDescription className="px-2">GitHub: <Link href={"https://github.com/katarmalmeet"} target="_blank"> Meet Katarmal </Link></DrawerDescription>
                </div>

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
            </h1>
      </nav>
    </footer>
  )
}
