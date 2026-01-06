import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, FileText } from 'lucide-react';

const contactMethods = [
    {
        number: '1',
        title: 'Instant Quote',
        description:
            'Get a fast, accurate quote for your shipment. Fill in your details, and receive pricing instantly with no hidden costs.',
        mockup: {
            icon: FileText,
            fields: [
                { label: 'From', value: 'Mumbai' },
                { label: 'To', value: 'Delhi' },
                { label: 'Weight', value: '500 kg' },
            ],
            button: 'Calculate Price',
            result: '₹12,500',
            color: 'from-blue-400 to-blue-600',
        },
    },
    {
        number: '2',
        title: 'Schedule Pickup',
        description:
            'Book a pickup at your convenience. Choose your preferred date and time, and our team will be there to collect your shipment.',
        mockup: {
            icon: Calendar,
            slots: [
                { time: '09:00 AM', status: 'Available' },
                { time: '02:00 PM', status: 'Available' },
                { time: '05:00 PM', status: 'Booked' },
            ],
            date: 'Jan 7, 2026',
            color: 'from-green-400 to-green-600',
        },
    },
    {
        number: '3',
        title: 'Contact Support',
        description:
            'Need help or have questions? Our support team is available 24/7 via phone, email, or live chat to assist you.',
        mockup: {
            icon: MessageSquare,
            contacts: [
                { type: 'Phone', value: '+91 98765 43210', icon: Phone },
                { type: 'Email', value: 'support@mishratransport.com', icon: Mail },
                { type: 'Location', value: 'Mumbai, Maharashtra', icon: MapPin },
            ],
            color: 'from-purple-400 to-purple-600',
        },
    },
];

const Connect = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                        <Send className="w-4 h-4 text-[#ff6b2b]" />
                        <span className="text-sm font-medium text-gray-700">GET IN TOUCH</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Ready to ship?
                        <br />
                        <span className="bg-gradient-to-r from-[#ff6b2b] to-[#ff8f5a] bg-clip-text text-transparent">
                            Let's connect
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose how you'd like to get started with Mishra Transport Solutions
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactMethods.map((method, index) => (
                        <div
                            key={method.number}
                            className="group animate-fade-in"
                            style={{
                                animationDelay: `${index * 150}ms`,
                                animationFillMode: 'backwards',
                            }}
                        >
                            {/* Card Header */}
                            <div className="mb-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-5xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                                        {method.number}
                                    </span>
                                    <div className="flex-1 pt-2">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            {method.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {method.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mockup Card */}
                            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
                                {/* Mockup for Method 1 - Quote */}
                                {method.number === '1' && (
                                    <div className="space-y-4">
                                        {method.mockup.fields?.map((field, idx) => (
                                            <div key={field.label} className="space-y-1">
                                                <label className="text-xs font-medium text-gray-500 uppercase">
                                                    {field.label}
                                                </label>
                                                <div className="bg-white rounded-xl px-4 py-3 border border-gray-200">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {field.value}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                        <button className="w-full bg-gradient-to-r from-[#ff6b2b] to-[#ff8f5a] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                            <FileText className="w-4 h-4" />
                                            {method.mockup.button}
                                        </button>
                                        <div className="bg-white rounded-xl p-4 border-2 border-green-200">
                                            <p className="text-xs text-gray-500 mb-1">Estimated Cost</p>
                                            <p className="text-2xl font-bold text-gray-900">
                                                {method.mockup.result}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Mockup for Method 2 - Schedule */}
                                {method.number === '2' && (
                                    <div className="space-y-4">
                                        <div className="bg-white rounded-xl p-4 border border-gray-200">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div
                                                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${method.mockup.color} flex items-center justify-center`}
                                                >
                                                    <Calendar className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Selected Date</p>
                                                    <p className="font-semibold text-gray-900">
                                                        {method.mockup.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-xs font-medium text-gray-500 uppercase">
                                                Available Slots
                                            </p>
                                            {method.mockup.slots?.map((slot, idx) => (
                                                <button
                                                    key={slot.time}
                                                    disabled={slot.status === 'Booked'}
                                                    className={`w-full p-3 rounded-xl text-left transition-all duration-200 ${slot.status === 'Available'
                                                            ? 'bg-white border-2 border-gray-200 hover:border-[#ff6b2b] hover:bg-orange-50'
                                                            : 'bg-gray-100 border border-gray-200 opacity-50 cursor-not-allowed'
                                                        }`}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium text-gray-900">
                                                            {slot.time}
                                                        </span>
                                                        <span
                                                            className={`text-xs px-2 py-1 rounded-full ${slot.status === 'Available'
                                                                    ? 'bg-green-100 text-green-700'
                                                                    : 'bg-gray-200 text-gray-600'
                                                                }`}
                                                        >
                                                            {slot.status}
                                                        </span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Mockup for Method 3 - Support */}
                                {method.number === '3' && (
                                    <div className="space-y-3">
                                        {method.mockup.contacts?.map((contact, idx) => (
                                            <a
                                                key={contact.type}
                                                href={
                                                    contact.type === 'Phone'
                                                        ? `tel:${contact.value}`
                                                        : contact.type === 'Email'
                                                            ? `mailto:${contact.value}`
                                                            : '#'
                                                }
                                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#ff6b2b] hover:bg-orange-50 transition-all duration-200 group"
                                            >
                                                <div
                                                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${method.mockup.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                                                >
                                                    <contact.icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs text-gray-500 mb-0.5">
                                                        {contact.type}
                                                    </p>
                                                    <p className="font-medium text-gray-900 text-sm truncate">
                                                        {contact.value}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                        <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 mt-4">
                                            <MessageSquare className="w-4 h-4" />
                                            Start Live Chat
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Need immediate assistance?
                            </h3>
                            <p className="text-gray-600">
                                Our team is available 24/7 to help with your logistics needs
                            </p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <p className="text-sm text-gray-600">Available Now</p>
                                </div>
                                <p className="text-2xl font-bold text-gray-900">24/7</p>
                            </div>
                            <div className="w-px h-12 bg-gray-300" />
                            <div className="text-center">
                                <p className="text-sm text-gray-600 mb-1">Avg. Response</p>
                                <p className="text-2xl font-bold text-gray-900">2 hrs</p>
                            </div>
                            <div className="w-px h-12 bg-gray-300" />
                            <div className="text-center">
                                <p className="text-sm text-gray-600 mb-1">Rating</p>
                                <p className="text-2xl font-bold text-gray-900">4.9/5 ⭐</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
