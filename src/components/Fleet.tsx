
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Weight, Truck, Package, Ruler, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fleetItems = [
  {
    name: 'Tata Ace',
    capacity: '1.5 Tons',
    type: 'Mini Truck',
    useCase: 'FMCG / City Dist.',
    dimensions: '3.8 x 1.5 m',
    image: '/images/tata-ace-3d.png',
  },
  {
    name: 'Eicher Pro',
    capacity: '3.5 Tons',
    type: 'LCV',
    useCase: 'E-commerce',
    dimensions: '5.2 x 2.1 m',
    image: '/images/eicher-pro-3d.png',
  },
  {
    name: 'Ashok Leyland',
    capacity: '7 Tons',
    type: 'Heavy Truck',
    useCase: 'Industrial Goods',
    dimensions: '7.5 x 2.4 m',
    image: '/images/ashok-leyland-3d.png',
  },
  {
    name: 'Mahindra Bolero',
    capacity: '1.25 Tons',
    type: 'Pickup',
    useCase: 'Quick Delivery',
    dimensions: '4.9 x 1.7 m',
    image: '/images/mahindra-bolero-3d.png',
  },
  {
    name: 'Tata 407',
    capacity: '2.5 Tons',
    type: 'MCV',
    useCase: 'Construction',
    dimensions: '4.7 x 2.0 m',
    image: '/images/tata-407-3d.png',
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-red-600 inline-block"></span>
              Our Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Active Fleet Network
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl">
              A diverse, modern fleet maintained for optimal performance. From last-mile delivery to heavy haulage, we have the right vehicle for every mission.
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            {/* Custom Navigation Buttons will form part of the Carousel if needed, 
                 but keeping standard buttons for simplicity or adding a CTA */}
            <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-red-600 transition-colors">
              View All Vehicles <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {fleetItems.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform transition-transform duration-300 group-hover:-translate-y-2"></div>

                  <Card className="relative h-full border-none bg-transparent shadow-none">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Image Area */}
                      <div className="relative h-64 mb-8 flex items-center justify-center bg-white rounded-xl overflow-hidden transition-colors duration-500">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                        />
                        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <ArrowUpRight className="w-4 h-4 text-red-600" />
                        </div>
                      </div>

                      {/* Header */}
                      <div className="mb-6">
                        <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">{item.type}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                      </div>

                      {/* Specs Grid */}
                      <div className="mt-auto grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1">
                            <Weight className="w-3 h-3" /> Max Load
                          </span>
                          <span className="text-sm font-bold text-gray-700">{item.capacity}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1">
                            <Ruler className="w-3 h-3" /> Dimensions
                          </span>
                          <span className="text-sm font-bold text-gray-700">{item.dimensions}</span>
                        </div>
                        <div className="col-span-2 flex flex-col gap-1">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1">
                            <Package className="w-3 h-3" /> Best For
                          </span>
                          <span className="text-sm font-bold text-gray-700">{item.useCase}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8 md:mt-12 pr-4">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 border-2 border-gray-200 hover:border-red-600 hover:bg-red-600 hover:text-white transition-all bg-transparent" />
            <CarouselNext className="static translate-y-0 h-12 w-12 border-2 border-gray-200 hover:border-red-600 hover:bg-red-600 hover:text-white transition-all bg-transparent" />
          </div>
        </Carousel>

      </div>
    </section>
  );
};

export default Fleet;
