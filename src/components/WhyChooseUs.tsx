import { Plane, Users, Truck, MapPin, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

const cards = [
    {
        id: 1,
        title: 'Operational Excellence',
        description: 'ISO-certified processes ensuring zero-error logistics management for high-volume shipments.',
        icon: Users,
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 2,
        title: 'National Network',
        description: 'Connecting 100+ cities with a dedicated fleet and strategic warehousing hubs.',
        icon: MapPin,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 3,
        title: 'Safety & Compliance',
        description: 'Strict adherence to safety protocols and regulatory standards for secure transport.',
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 4,
        title: 'On-Time Delivery',
        description: '98.5% on-time delivery rate backed by real-time GPS tracking and route optimization.',
        icon: Clock,
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&q=80',
    },
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="py-24 bg-gray-100">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight">
                        Why Leaders Choose <span className="text-[#DC2626]">Mishra Transport</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl">
                        We don't just move goods. We engineer reliable supply chains with physical infrastructure, experienced teams, and proven operational discipline.
                    </p>
                </div>

                {/* Industrial Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="group bg-white border-t-4 border-[#DC2626] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                        >
                            {/* Icon Header */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-[#DC2626] transition-colors duration-300">
                                    <card.icon className="w-8 h-8 text-gray-800 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <span className="text-4xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                                    0{card.id}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                {card.description}
                            </p>

                            {/* Read More Link */}
                            <div className="flex items-center text-[#DC2626] font-bold text-sm tracking-uppercase border-b-2 border-transparent group-hover:border-[#DC2626] self-start transition-all duration-300">
                                READ MORE <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
