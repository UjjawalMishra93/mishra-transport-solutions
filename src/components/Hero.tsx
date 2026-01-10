import { ArrowRight, Truck, Package, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-trucks.jpg';
import Header from './Header';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-gray-900 overflow-hidden">
      {/* Dark Industrial Header Overlay */}
      <div className="absolute top-0 left-0 w-full z-50 border-b border-white/10">
        <Header />
      </div>

      {/* Background Image with Dark Mode Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial Logistics Fleet"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex-grow flex items-center pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left Side: Typography & CTA */}
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DC2626] text-white text-xs font-bold uppercase tracking-widest mb-6">
              <Truck className="w-4 h-4" />
              <span>Logistics Solutions Provider 1999</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Regional Transport <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-red-600">
                Specialists
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 border-l-4 border-[#DC2626] pl-6 max-w-xl">
              Simplify your freight and logistics needs with a personal approach. We offer cost-efficient transport shipping across India, specializing in Delhi, Haryana, UP, & Rajasthan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/919005446868" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-lg transition-all duration-300 shadow-lg shadow-red-900/20">
                Get a chat
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-lg backdrop-blur-sm transition-all duration-300">
                Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Real-time Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Side: Quote Form Card (Floating) */}
          <div className="hidden lg:block relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#DC2626] opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>

            <div className="relative bg-white p-8 shadow-2xl max-w-md ml-auto border-t-4 border-[#DC2626]">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h3>
              <p className="text-sm text-gray-500 mb-6">Get a tailored solution for your shipping needs.</p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase">From</label>
                    <input type="text" placeholder="City or Zip" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#DC2626]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase">To</label>
                    <input type="text" placeholder="City or Zip" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#DC2626]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase">Cargo Type</label>
                  <select className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#DC2626]">
                    <option>Industrial Goods</option>
                    <option>Retail / FMCG</option>
                    <option>Construction Material</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase">Contact Number</label>
                  <input type="tel" placeholder="+91" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#DC2626]" />
                </div>
                <button type="button" className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 transition-colors flex justify-center items-center gap-2">
                  Calculate Cost <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Strip */}
      <div className="relative z-10 bg-[#DC2626] text-white py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-full">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase opacity-80">We deliver</p>
              <p className="font-bold text-lg">Safe & Timely</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase opacity-80">Inter-State</p>
              <p className="font-bold text-lg">Logistics Network</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-full">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase opacity-80">Careful Handling</p>
              <p className="font-bold text-lg">Fragile to Heavy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
