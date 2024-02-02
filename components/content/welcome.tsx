
import React from 'react'
import { Skeleton } from '../ui/skeleton'
// import { useMediaQuery } from 'react-responsive';

export default function Welcome() {

    return (

        <section className="w-full pt-12 md:pt-24 lg:pt-24 border-b pb-8">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                    <div>
                        <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                            Welcome to <mark className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">TECHNOSPARX</mark> 2024
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            Join us for a week of innovation, learning, and fun! Participate in various tech events, workshops,
                            and competitions.
                        </p>
                    </div>
                    <div className="flex flex-col items-start space-y-4">

                        <Skeleton className="w-64 h-32 rounded-md mx-auto aspect-[2/1]" />
                    </div>
                </div>
            </div>
        </section>

    )
}