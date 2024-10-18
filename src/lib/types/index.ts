type T_NavLink = {
    name: string,
    link: string,
}

type T_Social = {
    text: string,
    logoUrl: string,
}


type T_Statistic = {
    name: string,
    value: number,
}

type T_BasicSomething = {
    imageUrl: string,
    title: string,
    description: string,
}

type T_Faq = {
    question: string,
    answer: string,
}

export type {
    T_NavLink,
    T_Social,
    T_Statistic,
    T_BasicSomething,
    T_Faq,
}
