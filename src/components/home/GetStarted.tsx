"use client";
import React from 'react'
import { Button } from '../ui/button'
import { useModal } from '@/hooks/use-modal'
import Image from 'next/image';



const GetStarted = () => {
    const { openModal } = useModal();

    return (
        <div className='px-5 lg:px-32 py-32 lg:py-56 bg-customBlue text-white text-center space-y-10 h-[80vh] md:h-[70vh] lg:h-[80vh] relative'>
            <h2 className='text-6xl font-bold'>Ready to Get Started?</h2>
            <p className='lg:w-2/3 mx-auto'>
                Don&apos;t wait—your car deserves the best. Whether it's a routine check or major repairs, we&apos;re here to help. Click below to book your service and get back on the road in no time!
            </p>

            <Image
                src={"/home/getting-started/small-screw.png"}
                alt='Screw'
                width={100}
                height={200}
                className='absolute top-0 right-10 md:right-20 lg:right-32 xl:right-44'
            />


            <Image
                src={"/home/getting-started/two-screws.png"}
                alt='Screw'
                width={300}
                height={300}
                className='absolute w-1/2 md:w-72 bottom-0 left-0 xl:left-56'
            />

            <Image
                src={"/home/getting-started/big-screw.png"}
                alt='Screw'
                width={300}
                height={300}
                className='absolute bottom-0 w-1/2 md:w-72 right-0 xl:right-56'
            />

            <Button className='text-xl' onClick={openModal}>
                I&apos;m Ready for a Tune-Up
            </Button>
        </div>
    )
}

export default GetStarted;
