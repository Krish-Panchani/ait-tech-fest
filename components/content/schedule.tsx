"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "../ui/separator"; // Import the missing module from the correct file path
import React from "react";
export default function Schedule() {


    const preWorkshopData = [
        {
            day: 'Pre WORKSHOP Day 1',
            time: '27 Feb, 2024',
            name: 'Workshop on cloud computing ',
            date: '27th  February 2024  10:00 AM onwards',
            duration: '5 hours',
            expert: [
                {
                    name: '1. Ms. Samistha Goswami',
                    description: 'Experienced Master Trainer with a demonstrated history of working in the higher education industry, Skilled in AI & ML .He trained 2000+ students.'
                },
                {
                    name: '2. Mr.Palwinder Singh',
                    description: 'He has  8+ years experience as a Web application developer,  Worked as Subject Matter expert in IBM Career education .Having good experience on Python , Machine learning, Deep learning, Data Analytics, DevOps, MySQL, MongoDB.'
                },
            ]
        },
        {
            day: 'Pre WORKSHOP Day 2',
            time: '28 Feb, 2024',
            name: 'Workshop on Cyber security  ',
            date: '28th February 2024  10:00 AM onwards',
            duration: '3 hours',
            expert: [
                {
                    name: '1. Mr.Partho Pandya (Cyber Security Analyst)',
                    description: 'He is a dedicated Cyber Security Researcher and VAPT (Vulnerability Assessment and Penetration Testing) Analyst. He brings a wealth of expertise to the dynamic field of cybersecurity. His academic background, coupled with hands- on experience has allowed him to excel in various domains, earning recognition as a top performer in platforms like TryHackMe, where he consistently ranks in the top 4%. Moreover, he has solved 30+ cases with cyber cell and conducted 50+ conferences.'
                },
                {
                    name: '2. Mr. Akshar Ratnani (Cyber Security Analyst)',
                    description: 'He has expertise in the vast field of Cybersecurity domains such as VAPT, SOC, Compliance and Digital Forensics. He has Skills  Network Security ,Penetration Testing,Security Awareness Training, Malware Analysis, Bug Bounty Hunting, Forensics Analysis'
                },
            ]},
        {
            day: 'Pre WORKSHOP Day 3',
            time: '29 Feb, 2024',
            name: 'Workshop on Full stack with python ',
            date: '29th February 2024  10:00 AM onwards',
            duration: '4 hours',
            expert: [
                {
                    name: '1. Mr. Jigar Thakkar (Developer & Trainer)',
                    description: 'Trained more than 5000+ students with a mixed category for training Students, experienced IT individuals and students looking for placements in Java. Subjects covered in all this training was Office, Data Structure, C, C++, Data Structure, HTML, CSS, Java Script, Python, IOT, Core Java, Advance Java and Oracle'
                },
                {
                    name: '2. Ms. Anjali Patel (Developer & Trainer)',
                    description: 'Passionate Android – Python Trainer with 10 years of experience in Android / Python as Trainer. Good Knowledge in Mobile development (Android, Flutter, React Native) and Web Development (Python, Django Web framework). Strong experience in Training environments. Proficient in object-oriented design, data structures, Problem solving and debugging. Fully conversant with the latest IT Innovations and ability to produce high quality deliverable within estimated Time constraints in pressurized environments.'
                },
            ]
        },
    ];
    const scheduleData = [

        {
            day: 'Day 1 - Events',
            time: '1 March, 2024',
            link : 'rules/Day 1.pdf',
        },
        {
            day: 'Day 2 - Events',
            time: '2 March, 2024',
            link : 'rules/Day 2.pdf',
        },
    ];
    // { day: 'Day 1 - Workshops', time: '10:00 AM - 5:00 PM' },

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
                    {preWorkshopData.map((event, index) => (
                        <div className="mt-4" key={index}>
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <div 
                                    className="grid gap-1 border border-orange-400 rounded-xl px-4 py-4" 
                                    style={{ cursor: 'pointer' }}>
                                        <h3 className="text-lg font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{event.day}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{event.time}</p>
                                    </div>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <div className="mx-auto w-full max-w-xl">
                                        <DrawerHeader className="text-left">
                                            <DrawerTitle className="uppercase fon">{event.name}</DrawerTitle>
                                            <Separator className="my-2" />
                                            <DrawerDescription>Date: {event.date}</DrawerDescription>
                                            <DrawerDescription>Duration: {event.duration}</DrawerDescription>
                                            <Separator className="my-2" />
                                            {Array.isArray(event.expert) && event.expert.map((expert, index) => (
                                                <React.Fragment key={index}>
                                                    <DrawerTitle className="text-left mt-2 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Expert: {expert.name}</DrawerTitle>
                                                    <DrawerDescription className="text-left text-xs">{expert.description}</DrawerDescription>
                                                </React.Fragment>
                                            ))}
                                        </DrawerHeader>

                                        <DrawerFooter>
                                            <Link
                                                href={"https://docs.google.com/forms/d/e/1FAIpQLSe9LoyUrnLzfpGiSedab0FQmBCw9soUUBWLdLDTfk-w1gOuSA/viewform"}
                                                target="_blank"
                                                className="mx-auto">
                                                <Button variant="primary" size={"sm"}>Register for Workshop</Button>
                                            </Link>
                                            <DrawerClose asChild>
                                                <Button variant="outline">Cancel</Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    ))}
                    {scheduleData.map((item, index) => (
                        <Link href={item.link} target="_blank" key={index}>
                            <div 
                                className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center border border-indigo-400 rounded-xl px-4 py-4 mx-auto" 
                                style={{ cursor: 'pointer' }}
                            >
                                <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{item.day}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.time}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* <div className="flex justify-center mx-auto">
                    <Link href="events">
                        <Button variant="orange" >See All Events</Button>
                    </Link>
                    <Link className="ml-3" href="https://drive.google.com/file/d/1YZg1Fy91tKcOIUUkH95j3DAe5m_FITUg/view?usp=sharing"
                        target="_blank">
                        <Button variant="orange" >Tentative Schedule</Button>
                    </Link>
                </div> */}
            </div>
        </section>
    );
};