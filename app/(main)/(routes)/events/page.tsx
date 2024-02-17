"use client";
import React, { useState } from "react";
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
import { Separator } from "@/components/ui/separator";

import { eventData } from './data';
import Link from "next/link";
import { FaBook } from "react-icons/fa";

const Events = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  }

  const imageLoader = () => {
    return (
      <Skeleton className="w-[350px] h-[200px] rounded-lg" />
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center px-4 mt-6">
        <h1 className="mb-4 px-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white mx-auto">All <mark className="px-2 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Events</mark> at <mark className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">TechFest</mark></h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 px-4 mx-auto align-middle">
          Variety of events catering to different interests and industries. From technical workshops to networking events, there is something for everyone. Dare to dream, dare to innovate, prizes await!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mx-auto my-4 py-8 px-8">
        {eventData.map((event) => (
          <Card key={event.id} className="py-4 mx-auto border border-cyan-400 rounded-xl w-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-extrabold uppercase text-xl bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{event.title}</h4>
              <small className="text-default-500">{event.category} - {event.team}</small>
              <p className="text-tiny font-bold">{event.date}</p>
            </CardHeader>
            <CardBody className="py-2">
              {!imageLoaded && imageLoader()}
              <Image
                width={350}
                disableSkeleton={false}
                className={`rounded-lg drop-shadow-xl mx-auto object-cover aspect-[2/1] ${imageLoaded ? '' : 'hidden'}`}
                src={event.imageSrc}
                alt=""
                onLoad={handleImageLoad}
              />
              <small className="text-default-500 line-clamp-1 mt-3">{event.description}</small>
              <div className="mt-4">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="orange">Details</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-lg">
                      <DrawerHeader>
                        <DrawerTitle className="font-extrabold text-xl bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{event.title}</DrawerTitle>
                        <Separator></Separator>
                        <DrawerDescription>{event.description}</DrawerDescription>
                        <div className="text-left">
                          <DrawerDescription>Rounds: {event.rounds}</DrawerDescription>
                          <DrawerDescription>Team/Individual: {event.team}</DrawerDescription>
                          <DrawerDescription>Price: ₹{event.price}/-</DrawerDescription>

                          <Link href={event.link} target="_blank">
                            <div className="pt-3 flex items-center">
                              <FaBook className="text-amber-500 " />
                              <DrawerDescription className="px-2 font-bold uppercase bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Rules & Regulations</DrawerDescription>
                            </div>
                          </Link>
                        </div>
                        <Separator className="my-2"></Separator>

                        <DrawerTitle className="text-base">Faculty Co-Ordinators</DrawerTitle>
                        {event.facultyCoordinators && event.facultyCoordinators.map((coordinator) => (
                          <DrawerDescription key={coordinator.name}>
                            {coordinator.name}: <Link href={"mailto:" + coordinator.email}>{coordinator.email}</Link>
                          </DrawerDescription>
                        ))}

                        <DrawerTitle className="text-base">Student Co-Ordinators</DrawerTitle>
                        {event.coordinators && event.coordinators.map((coordinator) => (
                          <DrawerDescription key={coordinator.name}>
                            {coordinator.name}: <Link href={"tel:+91 " + coordinator.contact}>+91 {coordinator.contact}</Link>
                          </DrawerDescription>
                        ))}
                      </DrawerHeader>

                      <DrawerFooter>
                        {/* <Button>Submit</Button> */}
                        <Button variant="primary" size={"sm"}>Register</Button>
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
    </>
  );
}

export default Events;
