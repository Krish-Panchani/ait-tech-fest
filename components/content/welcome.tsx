
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Image } from "@nextui-org/react";
// import { useMediaQuery } from 'react-responsive';

export default function Welcome() {

    return (

        <section className="w-full pt-5 md:pt-10 lg:pt-10 border-b pb-8">
            <div className="px-2 md:px-6 space-y-10 xl:space-y-16">
                <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-5 md:grid-cols-2 md:gap-16 justify-center items-center">
                    <div>
                        <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                            Welcome to <mark className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">TECHNOSPARX</mark> 2024
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pt-2">
                            Join us for a week of innovation, learning, and fun! Participate in various tech events, workshops,
                            and competitions.
                        </p>
                    </div>
                    <div className="flex flex-col items-start space-y-4">
                        <Image
                            width={500}
                            disableSkeleton={false}
                            className="rounded-lg drop-shadow-xl mx-auto aspect-[2/1] overflow-hidden rounded-t-xl object-cover"
                            src={"poster_final.png"}
                            alt=""
                        />
                        {/* <Skeleton className="w-64 h-32 rounded-md mx-auto aspect-[2/1]" /> */}
                    </div>
                </div>
            </div>
        </section>

    )
}