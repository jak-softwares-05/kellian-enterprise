import { siteConfig } from "../site-config";
import { T_NavLink, T_Service, T_Social, T_Statistic } from "../types";


const navLinks: T_NavLink[] = [
    {
        name: "HOME",
        link: siteConfig.siteLinks.home,
    },
    {
        name: "SERVICES",
        link: siteConfig.siteLinks.services,
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

const services: T_Service[] = [
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
]



export {
    navLinks,
    socials,
    statistics,
    services,
}
