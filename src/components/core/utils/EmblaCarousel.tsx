"use client";
import React, { useEffect } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { testimonials } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const carouselOptions: EmblaOptionsType = { loop: true, dragFree: true };

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        carouselOptions,
        [
            AutoScroll({
                playOnInit: true,
                stopOnFocusIn: true,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                speed: 1.5,
            })
        ]
    );

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;
    }, [emblaApi]);

    return (
        <div>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="pl-4"
                        >
                            <div className="h-96 w-80 flex flex-col 
                                p-6 rounded-3xl shadow-lg bg-white dark:bg-gray-800 
                                text-gray-900 dark:text-gray-100 select-none transition-colors duration-200"
                            >
                                <Image
                                    src={testimonial.imageUrl}
                                    alt={testimonial.title}
                                    width={150}
                                    height={150}
                                    className="rounded-full mb-4 mx-auto"
                                />
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    {testimonial.description}
                                </p>
                                <h3 className="text-xl font-bold w-1/4">{testimonial.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='space-y-5 space-x-5'>
                <Button>
                    <IoIosArrowBack size={30} />
                </Button>
                <Button>
                    <IoIosArrowForward size={30} />
                </Button>
            </div>
        </div>
    );
};


export default EmblaCarousel;
