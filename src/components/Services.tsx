import { Truck, Package, Warehouse, Clock, MapPin, Shield } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Full Truck Load (FTL)',
    icon: Truck,
    description: 'Dedicated vehicle for large volume shipments across India.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
  },
  {
    id: 2,
    title: 'Part Truck Load (PTL)',
    icon: Package,
    description: 'Cost-effective solution for smaller loads sharing capacity.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  },
  {
    id: 3,
    title: 'Warehousing',
    icon: Warehouse,
    description: 'Secure storage solutions at key strategic transit points.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
  },
  {
    id: 4,
    title: 'Express Logistics',
    icon: Clock,
    description: 'Time-critical deliveries for urgent business needs.',
    image: 'https://images.unsplash.com/photo-1568856627092-2dc4314e3658?w=800&q=80',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#DC2626] font-bold text-sm tracking-widest uppercase mb-2 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Specialist Logistics Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Tailored transport solutions designed to optimize supply chains for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-[400px] overflow-hidden rounded-md shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

              {/* Content Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white transition-all duration-300 translate-y-2 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Orange Strip on Hover */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#DC2626] transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
