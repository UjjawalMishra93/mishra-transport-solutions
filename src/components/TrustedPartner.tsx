import { useRef, useEffect } from 'react';
import ashokMishraImage from '@/assets/ashok-mishra.png';

const TrustedPartner = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Vertical Watermark text */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-black text-gray-50 opacity-[0.03] select-none writing-vertical-rl hidden lg:block pointer-events-none">
                MISHRA
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Overlapping Images */}
                    <div className="relative">
                        {/* Main Image - Truck */}
                        <div className="relative z-10 rounded shadow-2xl overflow-hidden w-[90%] border-4 border-white">
                            <img
                                src="/images/ftl_truck.png"
                                alt="Mishra Transport Fleet"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Secondary Image - Containers (Floating Bottom Right) */}
                        <div className="absolute -bottom-12 -right-4 z-20 w-[60%] shadow-2xl border-4 border-white rounded overflow-hidden">
                            <img
                                src="/images/ptl_loading.png"
                                alt="Warehouse Operations"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative Red Accent Line */}
                        <div className="absolute -bottom-16 left-12 w-1.5 h-24 bg-[#DC2626] z-0 hidden md:block"></div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="pt-12 lg:pt-0">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-1 bg-[#DC2626]"></span>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">About Company</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                            Reliable Logistics Solution <br />
                            <span className="text-gray-900">Provider 1999</span>
                        </h2>

                        <p className="text-[#DC2626] font-medium text-lg mb-6">
                            Simplify your freight and logistics needs with a personal approach.
                        </p>

                        <p className="text-gray-500 leading-relaxed mb-10 text-base md:text-lg">
                            Mishra Transport Service has been the backbone of North Indian commerce for over 25 years. We combine a massive fleet with deep local expertise to ensure your goods move efficiently across Delhi, UP, Haryana, and Rajasthan.
                        </p>

                        {/* Transport Progress Bar */}
                        <div className="mb-10">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-sm font-bold text-gray-900">Transport Reliability</span>
                                <span className="text-sm font-bold text-gray-900">98%</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#DC2626] w-[98%] rounded-full relative">
                                    {/* Glowing tip */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                                </div>
                            </div>
                        </div>

                        {/* Founder Profile */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 p-1">
                                <img
                                    src={ashokMishraImage}
                                    alt="Ashok Mishra"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Ashok Mishra</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wide">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustedPartner;
