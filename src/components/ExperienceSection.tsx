
import { CheckCircle2, ShieldCheck, Globe2, Award } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';

const ExperienceSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
                        <RevealOnScroll width="100%">
                            <div className="space-y-4">
                                <span className="text-red-600 font-bold tracking-widest text-sm uppercase flex items-center gap-2">
                                    <span className="w-12 h-[2px] bg-red-600 inline-block"></span>
                                    WHO WE ARE
                                </span>
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                    National Logistics Excellence Since 1998
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    With over two decades of experience providing solutions to large-scale enterprises across India, we offer end-to-end logistics tailored for specific market solutions to large scale needs.
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll width="100%">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                                <div className="flex flex-col space-y-3">
                                    <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                                        <Globe2 className="w-7 h-7 text-red-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Pan-India Network</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">Expanding possibilities with our nationwide strategic partnerships.</p>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="w-7 h-7 text-red-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Secure Cargo</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">Advanced security protocols ensuring your goods arrive safely.</p>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll width="100%">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center -space-x-4">
                                    <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Team 1" />
                                    <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="Team 2" />
                                    <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" alt="Team 3" />
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+4k</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        {[1, 2, 3, 4, 5].map(i => <Award key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-600">Rated 4.9/5 by industry leaders</span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right Visual Side - Creative Collage */}
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-2 h-[500px] lg:h-[600px]">
                        {/* Main Image - Port */}
                        <div className="absolute top-0 right-0 w-[90%] h-[85%] rounded-lg overflow-hidden shadow-2xl z-10">
                            <img
                                src="/images/global_logistics_port.png"
                                alt="Global Logistics Port"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        {/* Overlapping Secondary Image - Worker */}
                        <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-lg overflow-hidden shadow-2xl z-20 border-8 border-white">
                            <img
                                src="/images/logistics_worker_tablet.png"
                                alt="Logistics Specialist"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Red Badge */}
                        <div className="absolute top-[10%] left-[5%] bg-red-600 text-white p-8 rounded-sm shadow-xl z-30 animate-fade-up">
                            <div className="flex flex-col items-center justify-center text-center">
                                <span className="text-5xl font-extrabold mb-1">25+</span>
                                <span className="text-xs tracking-widest uppercase font-semibold opacity-90">Years of<br />Experience</span>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-100 rounded-full opacity-50 z-0"></div>
                        <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-50 rounded-full opacity-60 z-30 mix-blend-multiply"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
