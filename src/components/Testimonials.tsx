import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Factory Owner',
    company: 'Kumar Steel Industries, Ghaziabad',
    content: 'Reliable full-load transport from our factory to warehouses across UP and Bihar. Their experienced drivers know the routes perfectly.',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Manager',
    company: 'TechHub Solutions, Noida',
    content: 'We ship electronics daily. Their part-load service and real-time tracking have made our deliveries much more efficient.',
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Amit Gupta',
    role: 'Wholesaler',
    company: 'Metro Wholesale, Ghaziabad',
    content: 'Best transport service in Delhi NCR. GST billing is always on time, and rates are very reasonable. Highly recommended.',
    image: 'https://i.pravatar.cc/150?img=33',
  },
  {
    name: 'Neha Verma',
    role: 'Supply Chain Head',
    company: 'FastMove Retail, Delhi',
    content: 'Professional team with 24×7 support. They handle our goods with care and always deliver on schedule.',
    image: 'https://i.pravatar.cc/150?img=45',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-[#f8faf8] to-[#f5f7f5] relative overflow-hidden">
      {/* Subtle background quotation mark */}
      <div className="absolute top-20 right-10 text-[20rem] font-serif text-primary/[0.02] select-none pointer-events-none hidden lg:block">
        "
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Fixed height container to prevent jumping */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-start min-h-[500px] md:min-h-[400px] lg:min-h-[380px]">

            {/* Left Side - Title & Navigation (Desktop) */}
            <div className="lg:pt-8">
              {/* Heading - Exact match */}
              <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] mb-6">
                <span className="font-normal text-[#1a1a1a]">From our</span>
                <br />
                <span className="font-bold text-[#1a1a1a]">community.</span>
              </h2>

              {/* Subtext - Muted color */}
              <p className="text-base text-[#6b7280] mb-10 max-w-sm leading-relaxed">
                Here's what our clients had to say about Mishra Transport Service.
              </p>

              {/* Navigation Arrows - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex gap-3 mb-10">
                <button
                  onClick={handlePrevious}
                  className="w-12 h-12 rounded-full border-2 border-[#ff7a3d] bg-white hover:bg-[#ff7a3d] flex items-center justify-center transition-all duration-200 group"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-[#ff7a3d] group-hover:text-white transition-colors" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border-2 border-[#ff7a3d] bg-white hover:bg-[#ff7a3d] flex items-center justify-center transition-all duration-200 group"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-[#ff7a3d] group-hover:text-white transition-colors" />
                </button>
              </div>

              {/* Progress Indicator - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex gap-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-12 bg-primary' : 'w-8 bg-[#d1d5db]'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Quote */}
            <div className="relative lg:pt-8 h-full">
              {/* Large Quote Mark - Blue color exactly like reference */}
              <div className="absolute -top-4 left-0 text-[5rem] md:text-[6rem] lg:text-[7rem] font-serif leading-none select-none" style={{ color: '#3b82f6' }}>
                "
              </div>

              {/* Testimonial Content with Smooth Transition - Fixed height */}
              <div
                key={currentIndex}
                className="relative z-10 pt-8 h-full"
                style={{
                  animation: 'fadeIn 0.5s ease-in-out'
                }}
              >
                {/* Quote Text - Premium editorial feel with increased line-height */}
                <blockquote
                  className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-normal text-[#1a1a1a] mb-10"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    lineHeight: '1.6' // Increased from 1.4 for premium editorial feel
                  }}
                >
                  {currentTestimonial.content}"
                </blockquote>

                {/* Author Info - Enhanced for primary testimonial feel */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-primary/10 mb-8 lg:mb-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm border-2 border-white">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a] text-base mb-0.5">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-[#6b7280]">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows - Mobile Only (Below testimonial) */}
                <div className="flex lg:hidden gap-3 mb-6">
                  <button
                    onClick={handlePrevious}
                    className="w-12 h-12 rounded-full border-2 border-[#ff7a3d] bg-white hover:bg-[#ff7a3d] flex items-center justify-center transition-all duration-200 group"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#ff7a3d] group-hover:text-white transition-colors" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border-2 border-[#ff7a3d] bg-white hover:bg-[#ff7a3d] flex items-center justify-center transition-all duration-200 group"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-[#ff7a3d] group-hover:text-white transition-colors" />
                  </button>
                </div>

                {/* Progress Indicator - Mobile Only (Below arrows) */}
                <div className="flex lg:hidden gap-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-12 bg-primary' : 'w-8 bg-[#d1d5db]'
                        }`}
                    />
                  ))}
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
