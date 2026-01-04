import { Truck, Package, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Truck,
    title: 'Intercity Logistics',
    description: 'Seamless long-haul transport across India with reliable delivery schedules.',
  },
  {
    icon: Package,
    title: 'Local Distribution',
    description: 'Efficient, timely deliveries within Delhi NCR for all your local needs.',
  },
  {
    icon: Handshake,
    title: 'SME Partnering',
    description: 'Customized logistics solutions for small & medium businesses.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          OUR SERVICES
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
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
