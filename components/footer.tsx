"use client"

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row p-5 w-full shrink-0 items-center px-6 md:px-6 border-t mb-20 sm:mb-5 ">
            <p className=" text-gray-500 dark:text-gray-400">© 2024 TECHNOSPARX | AIT TechFest. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-2 sm:gap-2">
                <h1>Developed By</h1>
                <Link className="font-extrabold hover:underline underline-offset-4 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent" href="https://github.com/Krish-Panchani" target="_blank">
                    Krish Panchani
                </Link>
            </nav>
        </footer>
    )
}