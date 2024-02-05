import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'First Step - Pricing',
    description: 'Pricing Page',
    keywords: ['next', 'react', 'pricing']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    );
};