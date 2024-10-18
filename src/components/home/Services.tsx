import { services } from '@/lib/constants';
import { T_Service } from '@/lib/types';
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';


const Services = () => {
    return (
        <div id='services' className='space-y-5'>
            <div className='text-center space-y-5'>
                <h2 className='text-primary md:text-xl'>OUR SERVICES</h2>
                <p className='text-customBlue text-4xl md:text-6xl'>Top-Notch Services for Every Car</p>
                <p className='text-xl lg:text-3xl'>
                    Kellian Garage provides everything your vehicle needs, from expert repairs to routine maintenance.
                    Trust our skilled team to keep your car in peak condition, inside and out.
                </p>
            </div>

            <ul className='grid md:grid-cols-3  xl:grid-cols-5 gap-5'>
                {services.map(service => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </ul>

            <div className='flex justify-center'>
                <Button asChild>
                    <Link href={siteConfig.siteLinks.servicesPage}>
                        See our complete range of services
                    </Link>
                </Button>
            </div>
        </div>
    );
}

interface ServiceCardProps {
    service: T_Service,
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    service
}) => {
    const {
        imageUrl,
        title,
        description,
    } = service;

    return (
        <div className='text-center border-2 border-black rounded-xl px-5 md:px-0 py-5'>
            <Image
                src={imageUrl}
                alt={description}
                width={150}
                height={150}
                className='mx-auto'
            />
            <h3 className='text-customBlue font-semibold text-xl'>{title}</h3>
            <p>{description}</p>
        </div>
    );

}

export default Services;
