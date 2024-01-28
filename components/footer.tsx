"use client"

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row p-5 w-full shrink-0 items-center px-6 md:px-6 border-t">
            <p className=" text-gray-500 dark:text-gray-400">© 2024 TechFest. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-2 sm:gap-2">
                <h1>Developed By</h1>
                <Link className="font-extrabold hover:underline underline-offset-4 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent" href="#">
                    Krish Panchani
                </Link>
            </nav>
        </footer>
    )
}