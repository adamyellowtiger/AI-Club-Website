export declare const navLinks: {
    label: string;
    href: string;
}[];
export type Project = {
    title: string;
    description: string;
};
export declare const projects: Project[];
export declare const aboutCards: {
    title: string;
    text: string;
}[];
export declare const featureCards: {
    icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
    title: string;
    text: string;
}[];
export type Meeting = {
    id: string;
    date: string;
    topic: string;
    note: string;
};
export declare const meetings: Meeting[];
export type AIBit = {
    id: string;
    title: string;
    summary: string;
    tags: string[];
    body: string[];
};
export declare const aiBits: AIBit[];
export declare const promptathon: {
    title: string;
    subtitle: string;
    details: {
        label: string;
        value: string;
    }[];
    overview: string;
    skills: string[];
    bringItems: string[];
    format: string[];
    notes: string[];
    callout: string;
};
export declare const resources: {
    title: string;
    description: string;
    href: string;
}[];
export declare const team: {
    name: string;
    role: string;
    bio: string;
}[];
export declare const faqs: {
    q: string;
    a: string;
}[];
export declare const joinLinks: {
    label: string;
    href: string;
}[];
