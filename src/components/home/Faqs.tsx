import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from '@/lib/constants';


const Faqs = () => {
    return (
        <div className='px-5 lg:px-32 flex flex-col lg:flex-col lg:justify-between lg:gap-10 h-[80vh] lg:h-[50vh]'>
            <div className='lg:w-2/5 space-y-2 lg:space-y-10'>
                <div>
                    <h2 className='text-primary md:text-xl'>FAQ&apos;S</h2>
                    <h3 className='text-customBlue text-2xl md:text-5xl'>
                        Got questions?
                        We have answers!
                    </h3>
                </div>
                <p className='lg:text-xl'>
                    Explore our FAQ&apos;s section for quick answers to the
                    most frequently asked questions about our services
                    and appointments.
                </p>

                <Button asChild variant={"link"} className='p-0 font-semibold text-black hover:underline underline lg:no-underline'>
                    <Link href={siteConfig.siteLinks.faqsPage}>
                        More FAQ&apos;s
                    </Link>
                </Button>
            </div>

            <Accordion type="single" collapsible className='lg:w-3/5 lg:text-3xl'>
                {faqs.slice(0, 4).map(({ question, answer }) => (
                    <>
                        <AccordionItem value={question}>
                            <AccordionTrigger>{question}</AccordionTrigger>
                            <AccordionContent className='lg:text-xl'>
                                {answer}
                            </AccordionContent>
                        </AccordionItem>
                    </>
                ))}
            </Accordion>
        </div>
    );
}


export default Faqs;
