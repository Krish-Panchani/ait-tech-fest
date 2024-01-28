"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function Menu() {
    const pathname = usePathname()
    const menuItems = [
        { label: "Home", path: "/", isActive: pathname === "/" },
        { label: "Events", path: "/events", isActive: pathname === "/events" },
        { label: "Schedule", path: "/#schedule", isActive: pathname === "/#schedule" },
        { label: "Venue", path: "/#Venue", isActive: pathname === "/#Venue" }
    ];

    return (
        <div className="fixed bottom-5 mx-auto flex justify-center sm:hidden">
            <div className="border border-orange-400 rounded-full backdrop-blur-md px-4 py-4">
                <ul className="flex">
                    {menuItems.map((item, index) => (
                        <li key={`${item.label}-${index}`} className="px-2">
                            <Link
                                className={item.isActive ? "font-bold text-orange-400" : ""}
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
    )
}