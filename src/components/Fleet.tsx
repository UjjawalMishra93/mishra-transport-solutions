import { ChevronLeft, ChevronRight } from 'lucide-react';

const fleetItems = [
  {
    name: 'Tata Ace',
    capacity: '1.5 Tons',
    bestFor: 'Light Cargo',
    color: 'bg-accent/10',
  },
  {
    name: 'Eicher Pro',
    capacity: '3.5 Tons',
    bestFor: 'Medium Loads',
    color: 'bg-primary/10',
  },
  {
    name: 'Ashok Leyland',
    capacity: '7 Tons',
    bestFor: 'Heavy Goods',
    color: 'bg-accent/10',
  },
  {
    name: 'Mahindra Bolero',
    capacity: '1.25 Tons',
    bestFor: 'City Deliveries',
    color: 'bg-primary/10',
  },
  {
    name: 'Tata 407',
    capacity: '2.5 Tons',
    bestFor: 'All-Purpose',
    color: 'bg-accent/10',
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-12">
          OUR FLEET
        </h2>
        
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
                className="group bg-background rounded-xl p-4 card-shadow hover:card-shadow-hover transition-all duration-300 text-center"
              >
                <div className={`w-full aspect-square rounded-lg ${item.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <div className="text-4xl">🚚</div>
                </div>
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Capacity: {item.capacity}
                </p>
                <p className="text-xs text-primary font-medium mt-1">
                  Best For: {item.bestFor}
                </p>
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
