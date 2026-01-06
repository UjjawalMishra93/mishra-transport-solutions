import { ChevronLeft, ChevronRight } from 'lucide-react';

const fleetItems = [
  {
    name: 'Tata Ace',
    capacity: '1.5 Tons',
    bestFor: 'Light Cargo',
    useCase: 'Ideal for FMCG',
    color: 'bg-accent/10',
    image: '/images/tata-ace.png',
  },
  {
    name: 'Eicher Pro',
    capacity: '3.5 Tons',
    bestFor: 'Medium Loads',
    useCase: 'Perfect for E-commerce',
    color: 'bg-primary/10',
    image: '/images/eicher-pro.png',
  },
  {
    name: 'Ashok Leyland',
    capacity: '7 Tons',
    bestFor: 'Heavy Goods',
    useCase: 'Industrial Transport',
    color: 'bg-accent/10',
    image: '/images/ashok-leyland.png',
  },
  {
    name: 'Mahindra Bolero',
    capacity: '1.25 Tons',
    bestFor: 'City Deliveries',
    useCase: 'Quick Commerce',
    color: 'bg-primary/10',
    image: '/images/mahindra-bolero.png',
  },
  {
    name: 'Tata 407',
    capacity: '2.5 Tons',
    bestFor: 'All-Purpose',
    useCase: 'Multi-Industry',
    color: 'bg-accent/10',
    image: '/images/tata-407.png',
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header with Tagline */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Fleet
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            A Fleet Designed for Every Business Size
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            From light cargo to heavy industrial loads, we have the right vehicle for your needs
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card card-shadow flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hidden lg:flex">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card card-shadow flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hidden lg:flex">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Fleet Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {fleetItems.map((item, index) => (
              <div
                key={item.name}
                className="group bg-background rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className={`w-full aspect-square rounded-lg ${item.color} flex items-center justify-center mb-4 overflow-hidden group-hover:scale-105 transition-transform`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="text-4xl">🚚</div>';
                    }}
                  />
                </div>
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                  {item.name}
                </h3>
                <p className="text-[11px] md:text-xs text-muted-foreground">
                  Capacity: {item.capacity}
                </p>
                <p className="text-[11px] md:text-xs text-primary font-medium mt-1">
                  Best For: {item.bestFor}
                </p>
                {/* Use-Case Tag */}
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 text-[10px] md:text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {item.useCase}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-muted" />
          <div className="w-2 h-2 rounded-full bg-muted" />
        </div>
      </div>
    </section>
  );
};

export default Fleet;

