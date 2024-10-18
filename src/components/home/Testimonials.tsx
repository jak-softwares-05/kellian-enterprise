import { testimonials } from '@/lib/constants'
import { T_BasicSomething } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import EmblaCarousel from '../core/utils/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel';



const Testimonials = () => {
    return (
        <div className='space-y-5 bg-[url("/home/testimonials/testimonials-bg.png")] bg-no-repeat bg-cover bg-center px-5 lg:px-32 py-20'>
            <div className='text-center'>
                <h2 className='text-primary md:text-xl'>TESTIMONIALS</h2>
                <p className='text-customBlue text-4xl md:text-6xl'>Don't just take our word for it!</p>
            </div>
            <ul>
                {/* {testimonials.map((testimonial, index) => (<TestimonialCard key={index} testimonial={testimonial} />))} */}
                <EmblaCarousel />
            </ul>
        </div>
    )
}


interface TestimonialCardProps {
    testimonial: T_BasicSomething,
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    testimonial,
}) => {
    const {
        imageUrl,
        title,
        description,
    } = testimonial;

    return (
        <li className='rounded-xl px-5 md:px-0 py-5 shadow-xl bg-white flex'>
            <Image
                src={imageUrl}
                alt={`${title}'s Testimonial`}
                width={150}
                height={150}
                className='mx-auto'
            />
            <h3 className='text-customBlue font-semibold text-xl'>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default Testimonials;
