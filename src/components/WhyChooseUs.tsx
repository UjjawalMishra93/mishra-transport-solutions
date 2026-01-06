import { Plane, Users, Truck, MapPin, Package } from 'lucide-react';

const cards = [
    {
        id: 1,
        title: 'Expert Logistics Team',
        description: 'Our experienced professionals ensure seamless operations, handling every shipment with precision and care to deliver exceptional service.',
        icon: Users,
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&h=600&fit=crop&q=80',
        gradient: 'from-gray-800 to-gray-900',
    },
    {
        id: 2,
        title: 'Reliable Delivery',
        description: 'From local deliveries to global freight, Mishra Transport Solutions provides reliable, efficient, and technology-driven services that keep your business moving forward.',
        icon: Truck,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80',
        gradient: 'from-blue-100 to-blue-200',
        featured: true,
    },
    {
        id: 3,
        title: 'Smart Tracking',
        description: 'Real-time GPS tracking and instant updates keep you informed at every step, ensuring complete transparency and peace of mind.',
        icon: MapPin,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
        gradient: 'from-gray-700 to-gray-900',
    },
];

const WhyChooseUs = () => {
    return (
        <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Plane className="w-4 h-4 text-gray-900" />
                        <span className="text-sm font-medium text-gray-900">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Delivering Excellence Through
                        <br />
                        Reliability and Innovation
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />
                            </div>

                            {/* Icon Badge - Hidden by default, shows on hover for all cards */}
                            <div className="absolute top-6 left-6 z-20 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                    <card.icon className="w-7 h-7 text-[#ff6b2b]" strokeWidth={2} />
                                </div>
                            </div>

                            {/* Content Container - Positioned at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col justify-end h-full">
                                <div className="transform transition-all duration-500 ease-out group-hover:-translate-y-8">
                                    {/* Title - Starts at bottom, moves up on hover */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-0 group-hover:mb-4 transition-all duration-500">
                                        {card.title}
                                    </h3>

                                    {/* Description - Hidden below, slides up on hover */}
                                    <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500 ease-out">
                                        <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b2b]/30 via-[#ff6b2b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Animated Border Glow */}
                            <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-[#ff6b2b]/50 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
