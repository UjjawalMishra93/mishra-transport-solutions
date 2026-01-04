import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-trucks.jpg';

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              CONNECTING INDIA.
              <br />
              <span className="text-primary">EMPOWERING BUSINESSES.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
              Seamless, Tech-Driven Logistics for the Future of Commerce
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="btn-shadow">
                Book a Shipment
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              {/* Diagonal overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
              <img
                src={heroImage}
                alt="Fleet of transport trucks on highway"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
