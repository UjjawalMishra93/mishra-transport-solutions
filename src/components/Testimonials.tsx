import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner, Delhi',
    content: 'Mishra Transport has been our logistics partner for 3 years now. Their on-time delivery and professional service is unmatched. Highly recommend for any business!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'SME Owner, Noida',
    content: 'Excellent service! They handle our daily deliveries with care and always ensure safe transport of goods. The team is very responsive and helpful.',
    rating: 5,
  },
  {
    name: 'Amit Gupta',
    role: 'Wholesaler, Ghaziabad',
    content: 'Best transport service in Delhi NCR! Ashok Ji and his team are very reliable. Fair pricing and no hidden charges. Will continue using their services.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="about" className="py-16 md:py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
          WHAT OUR CLIENTS SAY
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Trusted by hundreds of businesses across Delhi NCR and India
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
