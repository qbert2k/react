import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'First Step - Contact',
    description: 'Contact Page',
    keywords: ['next', 'react', 'contact']
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    );
};