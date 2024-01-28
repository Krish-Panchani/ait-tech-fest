"use client"

import Link from "next/link"
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
import { Button } from "../ui/button"
import { Suspense } from "react"
import { Skeleton } from "../ui/skeleton"
import Map from "./mapUrl"

export default function Venue() {

    return (
        <section id="venue" className="w-full py-12">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Venue</div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Where???
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            AIT, Beside Vasantnagar Township 380061, Gota Ognaj road, Off, Gota Cross roads, Ahmedabad
                        </p>
                    </div>
                    <div className="space-x-4">
                        {/* <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore Cars
                </Link> */}
                        <Drawer>
                            <DrawerTrigger asChild>
                                {/* <Button variant="orange">Details</Button> */}
                                <Button variant="pink" >Get Direction</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <div className="mx-auto w-full max-w-xl">
                                    <DrawerHeader>
                                        <DrawerTitle className="py-4">AIT Campus</DrawerTitle>

                                        <Suspense fallback={<Skeleton className="w-64 h-32 rounded-md mx-auto aspect-[2/1]" />}>
                                            <Map />
                                        </Suspense>
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
                    </div>
                </div>
            </div>
        </section>
    )
}