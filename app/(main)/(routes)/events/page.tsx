import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

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

const eventData = [
  {
    id: 1,
    category: "Technical",
    date: "Date Soon",
    title: "Reveal Soon",
    imageSrc: "/images/hero-card-complete.jpeg",
  },
  {
    id: 2,
    category: "Non-Technical",
    date: "Date Soon",
    title: "Reveal Soon",
    imageSrc: "/images/react-workshop.jpeg",
  },
  {
    id: 3,
    category: "Speaker",
    date: "Date Soon",
    title: "Reveal Soon",
    imageSrc: "/images/networking-event.jpeg",
  },

  // Add more event data objects here
];

export default function Events() {
  return (
    <>
      <div className="flex flex-col justify-center px-4 mt-6">
        <h1 className="mb-4 px-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white mx-auto">All <mark className="px-2 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Events</mark> at <mark className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">TechFest</mark></h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 px-4 mx-auto align-middle">
          Variety of events catering to different interests and industries. From technical workshops to networking events, there is something for everyone. Stay updated with the latest event details and join us for an enriching experience.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center mx-auto my-4 py-8">

        {eventData.map((event) => (
          <Card key={event.id} className="py-4 mx-auto border border-cyan-400 rounded-xl">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny font-bold">{event.category}</p>
              <small className="text-default-500">{event.date}</small>
              <h4 className="font-bold uppercase text-large">{event.title}</h4>
            </CardHeader>
            <CardBody className="py-2">
              <Skeleton className="w-[270px] h-[100px] rounded-md" />
              {/* <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={event.imageSrc}
              width={270}
            /> */}
              <div className="mt-4">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="orange">Details</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Get Updated Soon</DrawerTitle>
                        <DrawerDescription>Event Description</DrawerDescription>
                        <DrawerDescription>All details updated Soon once we get confirmation.</DrawerDescription>
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
            </CardBody>
          </Card>
        ))}
      </div>
    </>)
}
