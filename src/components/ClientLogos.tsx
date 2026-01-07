import { useRef, useEffect } from 'react';

// Partner company logos - Actual business partners using ultra-reliable Google Favicon Source
const partners = [
    { name: 'DMart', logo: 'https://www.google.com/s2/favicons?domain=dmartindia.com&sz=128' },
    { name: 'BigBasket', logo: 'https://www.google.com/s2/favicons?domain=bigbasket.com&sz=128' },
    { name: 'Vmart', logo: 'https://www.google.com/s2/favicons?domain=vmartretail.com&sz=128' },
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
                {/* Partner Logos - Infinite Scroll */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                >
                    <div className="flex w-max animate-infinite-scroll gap-8 md:gap-16 py-4">
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center min-w-[120px] md:min-w-[160px] h-20 md:h-24 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-8 md:h-12 w-auto object-contain transition-all duration-300"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${partner.name}&background=f3f4f6&color=4b5563&bold=true&size=100`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
