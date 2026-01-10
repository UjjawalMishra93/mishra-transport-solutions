import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "What areas do you cover in North India?",
        answer: "We cover the entire North Indian belt, with specialized regular routes connecting Delhi NCR to key cities in Uttar Pradesh (Lucknow, Kanpur, Varanasi), Bihar (Patna, Gaya), and Haryana. Our network ensures reach even to remote industrial clusters."
    },
    {
        question: "How do I track my shipment?",
        answer: "We provide real-time GPS tracking for all our fleet vehicles. Once your shipment is booked, you will receive a tracking ID that allows you to monitor your goods' location and estimated arrival time 24/7."
    },
    {
        question: "Can I book a Part Truck Load (PTL)?",
        answer: "Yes, we specialize in both Full Truck Load (FTL) and Part Truck Load (PTL). If you don't have enough goods for a full truck, our PTL service offers a cost-effective way to ship your consignment without paying for the whole vehicle."
    },
    {
        question: "Do you offer insurance for goods?",
        answer: "Absolutely. Safety is our priority, but we also offer comprehensive transit insurance options to protect your valuable cargo against unforeseen circumstances during transportation."
    },
    {
        question: "What types of industries do you serve?",
        answer: "We serve a diverse range of industries including FMCG, Industrial Manufacturing, Construction Materials, Textiles, and E-commerce logistics. Our fleet is equipped to handle various cargo types securely."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-[#DC2626] font-bold text-sm tracking-widest uppercase mb-2 block">
                        Common Queries
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border transition-all duration-300 ${openIndex === index
                                ? 'border-[#DC2626] bg-gray-50'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-[#DC2626]' : 'text-gray-900'
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`p-1 rounded-full border transition-all ${openIndex === index
                                    ? 'bg-[#DC2626] border-[#DC2626] text-white'
                                    : 'border-gray-300 text-gray-400'
                                    }`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed font-medium">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
