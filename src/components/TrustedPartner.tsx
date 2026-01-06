import { Plane, Globe, Truck, Package } from 'lucide-react';

// Partner logos moved to ClientLogos component

const TrustedPartner = () => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column - Text Content */}
                    <div>
                        {/* Small Label */}
                        <div className="flex items-center gap-2 mb-6">
                            <Plane className="w-4 h-4 text-gray-900" />
                            <span className="text-sm font-medium text-gray-900">
                                About Mishra Transport Services
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Your Trusted Partner
                            <br />
                            in Global Logistics
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            We provide <span className="font-semibold text-gray-900">full-load and part-load transport services</span> across Delhi NCR and North India, specializing in goods movement for factories, wholesalers, and retailers.
                        </p>

                        {/* Indian Trust Elements */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">GST Registered</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <svg className="w-5 h-5 text-[#ff6b2b]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">24×7 Driver Support</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">Delhi, UP, Bihar, Haryana</span>
                            </div>
                        </div>

                        {/* Feature Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 - Dark */}
                            <div className="bg-gray-900 text-white rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                    <Package className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Delivering Excellence Every Mile
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    We're committed to providing efficient, transparent, and technology-driven logistics
                                    services that connect businesses globally with speed and reliability.
                                </p>
                            </div>

                            {/* Card 2 - Light */}
                            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                                    <Globe className="w-6 h-6 text-[#ff6b2b]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Shaping the Future of Global Logistics
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our vision is to build a smarter logistics ecosystem powered by innovation, sustainability, and seamless global connectivity.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Map Card */}
                    <div className="lg:pl-8">
                        <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100">
                            {/* Map Section - Sonia Vihar, Delhi - Full Card */}
                            <div className="rounded-2xl h-[600px] overflow-hidden shadow-md relative">
                                {/* Google Maps Embed */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14001.234567890123!2d77.2345678!3d28.7234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0000000001%3A0x1234567890abcdef!2sSonia%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sonia Vihar, Delhi Location"
                                />

                                {/* Location Badge Overlay */}
                                <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-[#ff6b2b] rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-900">Our Location</p>
                                            <p className="text-xs text-gray-600">Sonia Vihar, Delhi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedPartner;
