import { useRef, useEffect } from 'react';

// Partner company logos - Actual business partners using ultra-reliable Google Favicon Source
const partners = [
    { name: 'DMart', logo: 'https://www.google.com/s2/favicons?domain=dmartindia.com&sz=128' },
    { name: 'BigBasket', logo: 'https://www.google.com/s2/favicons?domain=bigbasket.com&sz=128' },
    { name: 'Reliance', logo: 'https://www.google.com/s2/favicons?domain=ril.com&sz=128' },
    { name: 'Flipkart', logo: 'https://www.google.com/s2/favicons?domain=flipkart.com&sz=128' },
    { name: 'Amazon', logo: 'https://www.google.com/s2/favicons?domain=amazon.in&sz=128' },
    { name: 'Swiggy', logo: 'https://www.google.com/s2/favicons?domain=swiggy.com&sz=128' },
    { name: 'Zomato', logo: 'https://www.google.com/s2/favicons?domain=zomato.com&sz=128' },
    { name: 'Blinkit', logo: 'https://www.google.com/s2/favicons?domain=blinkit.com&sz=128' },
];

const ClientLogos = () => {
    return (
        <section className="py-10 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">Trusted by Industry Leaders</p>

                {/* Partner Logos */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-8 md:h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                                onError={(e) => {
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${partner.name}&background=f3f4f6&color=4b5563&bold=true&size=100`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
