import { Truck, Package, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Truck,
    title: 'Intercity Logistics',
    description: 'Seamless long-haul transport across India with reliable delivery schedules.',
    primary: true,
  },
  {
    icon: Package,
    title: 'Local Distribution',
    description: 'Efficient, timely deliveries within Delhi NCR for all your local needs.',
    primary: false,
  },
  {
    icon: Handshake,
    title: 'SME Partnering',
    description: 'Customized logistics solutions for small & medium businesses.',
    primary: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            OUR SERVICES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed to move businesses faster, safer, and smarter.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                group bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 text-center
                ${service.primary ? 'p-12 md:scale-105' : 'p-10'}
              `}
            >
              <div className={`
                mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300
                ${service.primary ? 'w-20 h-20 bg-primary/20' : 'w-16 h-16 bg-primary/10'}
              `}>
                <service.icon className={`text-primary group-hover:text-primary-foreground transition-colors ${service.primary ? 'w-10 h-10' : 'w-8 h-8'}`} />
              </div>
              <h3 className={`font-semibold text-foreground mb-3 ${service.primary ? 'text-2xl' : 'text-xl'}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <Button variant="outlineAccent" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

