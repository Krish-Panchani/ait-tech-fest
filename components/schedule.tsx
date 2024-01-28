"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
export default function Schedule() {

    const pathname = usePathname()
    const [isScheduleActive, setIsScheduleActive] = useState(false);

useEffect(() => {
  setIsScheduleActive(pathname === "/#schedule");
}, [pathname]);


    const scheduleData = [
        { day: 'Day 1 - Events Soon', time: 'Time Date' },
        { day: 'Day 2 - Events Soon', time: 'Time Date' },
        // { day: 'Day 1 - Workshops', time: '10:00 AM - 5:00 PM' },
        // { day: 'Day 2 - Coding Competition', time: '9:00 AM - 6:00 PM' },
        // { day: 'Day 3 - Tech Talks', time: '11:00 AM - 4:00 PM' },
        // { day: 'Day 4 - Project Showcase', time: '10:00 AM - 5:00 PM' },
        // { day: 'Day 5 - Award Ceremony', time: '5:00 PM - 7:00 PM' },
    ];
    
    return(
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
                    </div>
                </section>
    );
};