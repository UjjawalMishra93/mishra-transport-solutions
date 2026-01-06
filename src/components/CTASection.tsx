import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
    title?: string;
    subtitle?: string;
    showPhone?: boolean;
}

const CTASection = ({
    title = "Need reliable transport for your goods?",
    subtitle = "Get a quote in 30 seconds",
    showPhone = true
}: CTASectionProps) => {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#ff6b2b] to-[#ff5a1a]">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {title}
                </h2>
                <p className="text-xl text-white/90 mb-8">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    {/* Primary CTA */}
                    <button className="flex items-center gap-2 px-8 py-4 bg-white text-[#ff6b2b] hover:bg-gray-100 rounded-full text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105">
                        Get a Quote
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    {/* Phone CTA */}
                    {showPhone && (
                        <a
                            href="tel:+919005446868"
                            className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 rounded-full text-base font-semibold transition-all duration-300"
                        >
                            <Phone className="w-5 h-5" />
                            Call Now
                        </a>
                    )}
                </div>

                {showPhone && (
                    <p className="mt-6 text-white/80 text-sm">
                        📞 +91 9005446868 | +91 8826768616
                    </p>
                )}
            </div>
        </section>
    );
};

export default CTASection;
