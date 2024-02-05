import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'First Step - About',
    description: 'About Page',
    keywords: ['next', 'react', 'about']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    );
};