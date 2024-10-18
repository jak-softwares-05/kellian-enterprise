import { siteConfig } from "../site-config";
import { T_NavLink, T_BasicSomething, T_Social, T_Statistic, T_Faq } from "../types";


const navLinks: T_NavLink[] = [
    {
        name: "HOME",
        link: siteConfig.siteLinks.home,
    },
    {
        name: "SERVICES",
        link: siteConfig.siteLinks.servicesSection,
    },
    {
        name: "ABOUT US",
        link: siteConfig.siteLinks.aboutUs,
    },
    {
        name: "CONTACT US",
        link: siteConfig.siteLinks.contactUs,
    },
];


const socials: T_Social[] = [
    {
        text: "",
        logoUrl: "",
    },
    {
        text: "",
        logoUrl: "",
    },
    {
        text: "",
        logoUrl: "",
    },
    {
        text: "",
        logoUrl: "",
    },
];


const statistics: T_Statistic[] = [
    {
        name: "YEARS OF EXPERIENCE",
        value: 5,
    },
    {
        name: "TECHNICIANS",
        value: 20,
    },
    {
        name: "CUSTOMERS",
        value: 200,
    },
    {
        name: "PROJECTS",
        value: 350,
    },
];

const services: T_BasicSomething[] = [
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Diagnostic Services",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Washing Services",
        description: "Full exterior and interior washing to ensure your car stays clean and pristine.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Body work",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Engine servicing",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Tire services",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Interior repairs",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Wheel alignment",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Oil Changing",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Brake services",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Greasing",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Suspension repair",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Air conditioning Services",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Electrical system repairs",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Battery Services",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
    {
        imageUrl: "/home/services/logo-placeholder.png",
        title: "Exhaust System Repair",
        description: "Comprehensive  diagnostics using advanced tools to detect and resolve underlying issues.",
    },
];

const treatments: T_BasicSomething[] = [
    {
        imageUrl: "/home/treatments/logo-placeholder.png",
        title: "Expert Care, Every Time",
        description: "Professionalism is our promise. Our certified technicians bring years of expertise to every service, ensuring your vehicle gets the meticulous attention it deserves.",
    },
    {
        imageUrl: "/home/treatments/logo-placeholder.png",
        title: "Quality you can trust",
        description: "We pride ourselves on delivering top-tier, reliable auto care. Using advanced tools and technology, we provide precise repairs and maintenance that keep your vehicle running smoothly and safely.",
    },
    {
        imageUrl: "/home/treatments/logo-placeholder.png",
        title: "Premium Service, Affordable Prices",
        description: "Quality car care doesn’t have to break the bank. We offer competitive rates, giving you access to premium automotive services without the high price tag.",
    },
];


const testimonials: T_BasicSomething[] = [
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
    {
        imageUrl: "/home/testimonials/logo-placeholder.png",
        title: "John Doe",
        description: "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
    },
];

const faqs: T_Faq[] = [
    {
        question: "When are you usually open and stuff and stuff and more queries1?",
        answer: "sdlkfjdslkfj",
    },
    {
        question: "When are you usually open and stuff and stuff and more queries2?",
        answer: "sdlkfjdslkfj",
    },
    {
        question: "When are you usually open and stuff and stuff and more queries3?",
        answer: "sdlkfjdslkfj",
    },
    {
        question: "When are you usually open and stuff and stuff and more queries4?",
        answer: "sdlkfjdslkfj",
    },
    {
        question: "When are you usually open and stuff and stuff and more queries5?",
        answer: "sdlkfjdslkfj",
    },
    {
        question: "When are you usually open and stuff and stuff and more queries6?",
        answer: "sdlkfjdslkfj",
    },
    {
        question: "When are you usually open and stuff and stuff and more queries7?",
        answer: "sdlkfjdslkfj",
    },
    {
        question: "When are you usually open and stuff and stuff and more queries8?",
        answer: "sdlkfjdslkfj",
    },
];

export {
    navLinks,
    socials,
    statistics,
    services,
    treatments,
    testimonials,
    faqs,
}
