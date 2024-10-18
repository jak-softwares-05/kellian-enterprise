import { T_NavLink, T_Social, T_Statistic } from "../types";


const navLinks: T_NavLink[] = [
    {
        name: "HOME",
        link: `/`,
    },
    {
        name: "SERVICES",
        link: `/`,
    },
    {
        name: "ABOUT US",
        link: `/`,
    },
    {
        name: "CONTACT US",
        link: `/`,
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



export {
    navLinks,
    socials,
    statistics,
}
