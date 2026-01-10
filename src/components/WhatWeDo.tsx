
import { Truck, Package, Factory, TrendingUp, Phone } from 'lucide-react';

const ServiceCard = ({
    title,
    icon: Icon,
    image,
    customStyles = ""
}: {
    title: string;
    icon: any;
    image: string;
    customStyles?: string;
}) => (
    <div className={`relative group overflow-hidden shadow-xl bg-white h-full flex flex-col rounded-sm ${customStyles}`}>
        <div className="h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="relative pt-12 pb-8 px-6 flex-grow flex flex-col items-center text-center">
            {/* Icon Circle */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center p-1.5 z-10">
                <div className="w-full h-full rounded-full border border-dashed border-red-300 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-red-500" strokeWidth={1.5} />
                </div>
            </div>

            {/* Decorative Red Shape */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-50 to-transparent opacity-80" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
            <div className="absolute bottom-0 left-0 w-12 h-24 bg-red-100/50 -skew-x-12 transform origin-bottom-left"></div>

            <h3 className="text-xl font-bold text-gray-900 z-10 relative">{title}</h3>
        </div>
    </div>
);

const WhatWeDo = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 1. Title Section */}
                    <div className="flex flex-col justify-start pt-4 pr-4 space-y-4">
                        <div className="flex items-center gap-2 text-red-600 font-bold tracking-widest text-xs uppercase mb-2">
                            <Truck className="w-6 h-6 text-red-500" strokeWidth={1.5} />
                            {/* The image has a specific truck logo, generic truck is fine */}
                        </div>
                        <span className="text-red-600 font-bold tracking-widest text-xs uppercase block -mt-4 mb-2">WHAT WE DO</span>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                            We offer cost efficient transport
                        </h2>
                    </div>

                    {/* 2. Road Freight */}
                    <ServiceCard
                        title="Full Truck Load (FTL)"
                        icon={Truck}
                        image="/images/ftl_truck.png"
                    />

                    {/* 3. PTL Service */}
                    <ServiceCard
                        title="Part Truck Load (PTL)"
                        icon={Package}
                        image="/images/ptl_loading.png"
                    />

                    {/* 4. ODC / Heavy Transport */}
                    <ServiceCard
                        title="Heavy / ODC Consignments"
                        icon={Factory}
                        image="/images/odc_heavy_cargo.png"
                    />

                    {/* 5. Pan India Network */}
                    <ServiceCard
                        title="Pan-India Network"
                        icon={TrendingUp}
                        image="/images/train_freight.png"
                    />

                    {/* 6. Banner */}
                    <div className="relative group overflow-hidden rounded-sm shadow-xl bg-gray-50 h-full min-h-[250px] col-span-1 md:col-span-1 flex flex-col justify-between">
                        <div className="absolute inset-0 z-0">
                            {/* Faint background */}
                            <img
                                src="/images/forklift_warehouse.png"
                                className="w-full h-full object-cover opacity-10"
                                alt="Background"
                            />
                        </div>

                        {/* Decorative Red Shapes matching image */}
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-50 -skew-x-12 opacity-50 z-0 ml-[-20px]"></div>

                        <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight max-w-[80%]">
                                We know that every decision has an impact
                            </h3>

                            <div className="mt-6 flex flex-row items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shrink-0">
                                        <Phone className="w-5 h-5 fill-current" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-gray-600">Call for free</span>
                                        <span className="text-sm md:text-base font-bold text-red-600 whitespace-nowrap">+00 (8800) 6666</span>
                                    </div>
                                </div>

                                {/* Forklift Image Positioned at bottom right */}
                                <div className="absolute bottom-0 right-0 w-32 md:w-40 h-32 overflow-hidden pointer-events-none">
                                    <img
                                        src="/images/forklift_warehouse.png"
                                        alt="Forklift"
                                        className="w-full h-full object-contain object-bottom transform translate-y-2 translate-x-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;
