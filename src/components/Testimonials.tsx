import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Factory Owner',
    company: 'Kumar Steel',
    message: 'Reliability is key in our business. Mishra Transport has delivered perfectly on time for the last 5 years.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Logistics Head',
    company: 'TechHub Noida',
    message: 'Their tracking system and driver behavior are professional. Best service for high-value electronics.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 3,
    name: 'Amit Gupta',
    role: 'Distributor',
    company: 'Metro Wholesale',
    message: 'Cost-effective and transparent billing. No hidden charges, just honest transport service.',
    rating: 4,
    image: 'https://i.pravatar.cc/150?img=33'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Map Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left: Heading & Nav */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <span className="text-[#DC2626] font-bold text-sm tracking-widest uppercase mb-2 block">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Hear From Our <br />
                <span className="text-gray-400">Happy Clients</span>
              </h2>
            </div>

            <div className="flex gap-4">
              <button onClick={prev} className="p-4 rounded-full border border-gray-700 hover:bg-[#DC2626] hover:border-[#DC2626] transition-all duration-300">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={next} className="p-4 rounded-full border border-gray-700 hover:bg-[#DC2626] hover:border-[#DC2626] transition-all duration-300">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right: Active Testimonial Card */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white text-gray-900 p-8 md:p-12 rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl relative">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-gray-100 fill-current" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#DC2626] fill-current" />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-gray-700">
                "{testimonials[currentIndex].message}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-50"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
