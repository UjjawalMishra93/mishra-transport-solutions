import { Zap, DollarSign, FileCheck, Route, Headphones, Shield, TrendingDown, Clock, CheckCircle2, Package } from 'lucide-react';

const features = [
    {
        id: 1,
        title: 'Instant Quotes',
        description: 'Get your shipping quote in seconds—because we know time is valuable.',
        mockup: {
            type: 'approval',
            icon: CheckCircle2,
            iconBg: 'bg-gradient-to-br from-green-400 to-green-600',
            label: 'Your quote is ready!',
            value: '₹12,500',
        },
    },
    {
        id: 2,
        title: 'Competitive Rates',
        description: 'Affordable pricing designed to fit your budget and save you more.',
        mockup: {
            type: 'slider',
            label: 'Your Cost',
            value: '₹8,500',
            max: '₹15,000',
            percentage: 57,
        },
    },
    {
        id: 3,
        title: 'Transparent Pricing',
        description: 'No hidden fees, no surprises. Understand your costs from the start.',
        mockup: {
            type: 'checklist',
            items: [
                { label: 'Base Rate', checked: true },
                { label: 'Fuel Charge', checked: true },
                { label: 'Insurance', checked: true },
            ],
        },
    },
    {
        id: 4,
        title: 'Flexible Routes',
        description: 'Choose from multiple route options tailored to your needs, whether express or economical.',
        mockup: {
            type: 'routes',
            routes: [
                { name: 'Express Route', time: '24 hrs', selected: false },
                { name: 'Standard Route', time: '48 hrs', selected: true },
                { name: 'Economy Route', time: '72 hrs', selected: false },
            ],
        },
    },
    {
        id: 5,
        title: '24/7 Support',
        description: 'Our dedicated team is here to guide you at every step, anytime you need us.',
        mockup: {
            type: 'support',
            channels: [
                { name: 'Phone', icon: '📞', color: 'bg-blue-500' },
                { name: 'Chat', icon: '💬', color: 'bg-green-500' },
                { name: 'Email', icon: '📧', color: 'bg-purple-500' },
            ],
        },
    },
];

const FeaturesShowcase = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
                        <Zap className="w-4 h-4 text-[#DC2626]" />
                        <span className="text-sm font-semibold text-gray-700">Features</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Shipping Made Simple, Fast,
                        <br />
                        and Transparent.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Empowering you to achieve your logistics goals with flexible, reliable,
                        <br className="hidden md:block" />
                        and stress-free transportation solutions.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Feature 1 - Instant Quotes */}
                    <div
                        className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500 animate-fade-in"
                        style={{ animationDelay: '0ms', animationFillMode: 'backwards' }}
                    >
                        {/* Mockup */}
                        <div className="mb-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className={`w-16 h-16 ${features[0].mockup.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">{features[0].mockup.label}</p>
                                    <p className="text-3xl font-bold text-gray-900">{features[0].mockup.value}</p>
                                </div>
                            </div>
                        </div>
                        {/* Content */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{features[0].title}</h3>
                        <p className="text-gray-600 leading-relaxed">{features[0].description}</p>
                    </div>

                    {/* Feature 2 - Competitive Rates */}
                    <div
                        className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500 animate-fade-in"
                        style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}
                    >
                        {/* Mockup */}
                        <div className="mb-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                            <div className="space-y-4">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-gray-900 mb-1">{features[1].mockup.value}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <TrendingDown className="w-3 h-3 text-green-600" />
                                            <span>vs {features[1].mockup.max}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 group-hover:from-blue-600 group-hover:to-blue-700"
                                            style={{ width: `${features[1].mockup.percentage}%` }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center mt-2">
                                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                            {features[1].mockup.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Content */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{features[1].title}</h3>
                        <p className="text-gray-600 leading-relaxed">{features[1].description}</p>
                    </div>

                    {/* Feature 3 - Transparent Pricing */}
                    <div
                        className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500 animate-fade-in"
                        style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
                    >
                        {/* Mockup */}
                        <div className="mb-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                                <div className="w-full space-y-2 mt-4">
                                    {features[2].mockup.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200"
                                        >
                                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                                <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Content */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{features[2].title}</h3>
                        <p className="text-gray-600 leading-relaxed">{features[2].description}</p>
                    </div>

                    {/* Feature 4 - Flexible Routes */}
                    <div
                        className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500 animate-fade-in md:col-span-2 lg:col-span-1"
                        style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}
                    >
                        {/* Mockup */}
                        <div className="mb-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-2 mb-4">
                                <Package className="w-5 h-5 text-red-600" />
                                <span className="text-sm font-semibold text-gray-700">Route Options</span>
                            </div>
                            <div className="space-y-2">
                                {features[3].mockup.routes.map((route, idx) => (
                                    <button
                                        key={idx}
                                        className={`w-full p-3 rounded-xl text-left transition-all duration-200 flex items-center justify-between ${route.selected
                                                ? 'bg-blue-500 text-white shadow-lg scale-105'
                                                : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-300'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${route.selected ? 'bg-white' : 'bg-blue-500'}`} />
                                            <span className="text-sm font-medium">{route.name}</span>
                                        </div>
                                        <span className="text-xs opacity-80">{route.time}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Content */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{features[3].title}</h3>
                        <p className="text-gray-600 leading-relaxed">{features[3].description}</p>
                    </div>

                    {/* Feature 5 - 24/7 Support */}
                    <div
                        className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500 animate-fade-in md:col-span-2 lg:col-span-2"
                        style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
                    >
                        {/* Mockup */}
                        <div className="mb-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center justify-center gap-4">
                                {features[4].mockup.channels.map((channel, idx) => (
                                    <div
                                        key={idx}
                                        className="group/channel flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-110"
                                    >
                                        <div className={`w-16 h-16 ${channel.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover/channel:rotate-12 transition-transform duration-300`}>
                                            {channel.icon}
                                        </div>
                                        <span className="text-xs font-medium text-gray-700">{channel.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Content */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{features[4].title}</h3>
                        <p className="text-gray-600 leading-relaxed">{features[4].description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesShowcase;
