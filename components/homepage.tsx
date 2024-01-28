/**
 * v0 by Vercel.
//  * @see https://v0.dev/t/WZxZWb4JsdT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { JSX, SVGProps } from "react"
import img1 from "@/app/assets/img1.jpeg"
import { Skeleton } from "./ui/skeleton"
import Welcome from "./content/welcome"
import Schedule from "./content/schedule"
import Venue from "./content/venue"


export default function Component() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <main className="flex-1">
        <Welcome />
        <Schedule />
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
        <Venue />
      </main>

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
