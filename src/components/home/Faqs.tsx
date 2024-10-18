import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';


const Faqs = () => {
    return (
        <div className='px-5 lg:px-32 space-y-20'>
            <div className='w-1/4'>
                <h2 className='text-primary md:text-xl'>FAQ&apos;S</h2>
                <h3 className='text-customBlue text-3xl md:text-5xl'>
                    Got questions?
                    We have answers!
                </h3>
                <p className='text-xl'>
                    Explore our FAQ&apos;s section for quick answers to the
                    most frequently asked questions about our services
                    and appointments.
                </p>

                <Button asChild variant={"link"} className='p-0 font-semibold text-black hover:underline'>
                    <Link href={siteConfig.siteLinks.faqsPage}>
                    More FAQ&apos;s
                    </Link>
                </Button>
            </div>
        </div>
    );
}


export default Faqs;
