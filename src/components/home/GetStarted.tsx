import React from 'react'
import { Button } from '../ui/button'


const GetStarted = () => {
    return (
        <div className='px-5 lg:px-32 py-32 lg:py-56 bg-customBlue text-white text-center space-y-10 h-[100vh] lg:h-[80vh]'>
            <h2 className='text-6xl'>Ready to Get Started?</h2>
            <p className='text-xl lg:text-2xl lg:w-2/3 mx-auto'>
                Don&apos;t wait—your car deserves the best. Whether it's a routine check or major repairs, we&apos;re here to help. Click below to book your service and get back on the road in no time!
            </p>
            <Button className='text-xl'>
                I&apos;m Ready for a Tune-Up
            </Button>
        </div>
    )
}

export default GetStarted;
