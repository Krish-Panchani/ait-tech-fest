"use client"

import Link from "next/link";
import { Button } from "../ui/button";

export default function Schedule() {

    const scheduleData = [
        { day: 'Pre-Fest WORKSHOP', time: '28 Feb - 29 Feb' },
        { day: 'Day 1 - Events', time: '1 March' },
        { day: 'Day 2 - Events', time: '2 March' },
        // { day: 'Day 1 - Workshops', time: '10:00 AM - 5:00 PM' },
    ];

    return (
        <section id="schedule" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Schedule</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Event Schedule</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Check out the schedule for the week-long event. Plan your participation accordingly.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 justify-center">
                    {scheduleData.map((item, index) => (
                        <div className="grid gap-1" key={index}>
                            <h3 className="text-lg font-bold">{item.day}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.time}</p>
                        </div>
                    ))}
                </div>
                    <div className="flex justify-center mx-auto">
                        <Link href="events">
                    <Button variant="orange" >See All Events</Button>
                    </Link>
                    </div>
            </div>
        </section>
    );
};