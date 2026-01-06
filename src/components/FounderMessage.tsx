import ashokMishraImage from '@/assets/ashok-mishra.png';

const FounderMessage = () => {
    return (
        <section id="founder" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                        {/* Left Side - Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src={ashokMishraImage}
                                    alt="Ashok Mishra - Founder & CEO"
                                    className="w-full h-[450px] md:h-[550px] object-cover object-top"
                                />
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>

                            {/* Experience Badge - More Subtle */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-lg px-5 py-3 shadow-md border border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary font-bold text-base">25+</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-foreground/80 leading-tight">Years of</p>
                                        <p className="text-xs font-medium text-foreground/80 leading-tight">Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="text-left">
                            {/* Section Label */}
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                                Leadership
                            </p>

                            {/* Headline with Emphasized Key Phrase */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                                Reliability isn't policy,<br />
                                <span className="relative inline-block">
                                    <span className="text-foreground/95">it's promise.</span>
                                    <span className="absolute bottom-1 left-0 w-full h-0.5 bg-primary/40"></span>
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                                Founded by Ashok Mishra, our company is built on trust and unwavering integrity. We treat every customer as our own, ensuring the wheels of Delhi's commerce never stop turning.
                            </p>

                            {/* Structured Identity */}
                            <div className="space-y-3 mb-8 pb-8 border-b border-border">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">Ashok Mishra</h3>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold text-primary">Founder & CEO</p>
                                    <p className="text-sm text-muted-foreground">Mishra Transport Service</p>
                                </div>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">500+</p>
                                    <p className="text-xs md:text-sm text-muted-foreground">Vehicles</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">10K+</p>
                                    <p className="text-xs md:text-sm text-muted-foreground">Deliveries</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">98%</p>
                                    <p className="text-xs md:text-sm text-muted-foreground">On-Time</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderMessage;
