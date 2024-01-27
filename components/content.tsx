/**
 * v0 by Vercel.
//  * @see https://v0.dev/t/WZxZWb4JsdT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import img1 from "@/app/assets/img1.jpeg"
import { Skeleton } from "./ui/skeleton"

const scheduleData = [
    { day: 'Day 1 - Events Soon', time: 'Time Date' },
    { day: 'Day 2 - Events Soon', time: 'Time Date' },
    // { day: 'Day 1 - Workshops', time: '10:00 AM - 5:00 PM' },
    // { day: 'Day 2 - Coding Competition', time: '9:00 AM - 6:00 PM' },
    // { day: 'Day 3 - Tech Talks', time: '11:00 AM - 4:00 PM' },
    // { day: 'Day 4 - Project Showcase', time: '10:00 AM - 5:00 PM' },
    // { day: 'Day 5 - Award Ceremony', time: '5:00 PM - 7:00 PM' },
];

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <main className="flex-1">
                <section className="w-full pt-12 md:pt-24 lg:pt-24 border-y">
                    <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Welcome to TechFest 2024
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Join us for a week of innovation, learning, and fun! Participate in various tech events, workshops,
                                    and competitions.
                                </p>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <Skeleton className="w-[500px] h-[300px] rounded-md mx-auto aspect-[2/1]" />
                                {/* <img alt="TechFest" className="mx-auto aspect-[2/1] overflow-hidden rounded-t-xl object-cover" height="300" src="/img1.jpeg" width="500" /> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
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
                
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Registration
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Register for TechFest 2024</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Fill out the form below to register for the event. We cant wait to see you there!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" required type="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" required />
                  </div>
                  <Button className="w-full" type="submit">
                    Register
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  alt="TechFest"
                  className="mx-auto aspect-[2/1] overflow-hidden rounded-t-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="500"
                />
              </div>
            </div>
          </div>
        </section> */}
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row pt-3 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TechFest. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
