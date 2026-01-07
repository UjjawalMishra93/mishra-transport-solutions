import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-trucks.jpg';
import Header from './Header';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-1 pb-1 pt-0">
      <div className="w-full h-full">
        {/* White Border Frame */}
        <div className="rounded-[2rem] p-2">
          {/* Inner Container with Hero Image */}
          <div className="relative h-[calc(100vh-1rem)] rounded-[1.5rem] overflow-hidden">
            {/* Background Image */}
            <img
              src={heroImage}
              alt="Mishra Transport Service Fleet"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

            {/* Header Component (Logo + Navbar) */}
            <Header />

            {/* Top Badge on Truck */}
            <div className="absolute top-[20%] md:top-[45%] left-1/2 -translate-x-1/2 md:-translate-y-32 -translate-y-16 z-20">
              <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-xs md:text-sm font-medium">Your Global Logistics Partner</span>
              </div>
            </div>

            {/* Main Content - Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 text-center z-10">

              {/* Headline with Small Image Badges */}
              <div className="relative mb-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Smart Logistics Solutions
                  <br />
                  That Move the World.
                </h1>

                {/* Small Image Badge - Left */}
                <div className="absolute -left-20 top-2 hidden lg:block">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
                    <img src={heroImage} alt="Logistics" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Small Image Badge - Right */}
                <div className="absolute -right-20 top-16 hidden lg:block">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
                    <img src={heroImage} alt="Transport" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  {/* Orange Button */}
                  <a
                    href="https://wa.me/919005446868"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-[#ff6b2b] hover:bg-[#ff5a1a] text-white rounded-full text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get a Chat
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  {/* Gray Glass Button */}
                  <a href="#fleet" className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 rounded-full text-base font-semibold transition-all duration-300">
                    View Our Fleet
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Trust Micro-line */}
                <p className="text-white/90 text-sm md:text-base flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Trusted by 100+ businesses across North India
                </p>
              </div>
            </div>

            {/* Bottom Left - Business Clients Badge */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20">
              <div className="bg-white rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-xl flex items-center gap-3 md:gap-4">
                {/* Avatar Stack */}
                <div className="flex -space-x-2 md:-space-x-3">
                  {/* Avatar 1 */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=12"
                      alt="Client 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Avatar 2 */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=33"
                      alt="Client 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Avatar 3 */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=47"
                      alt="Client 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Avatar 4 - Black with +100 */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white bg-black flex items-center justify-center">
                    <span className="text-white text-[0.65rem] md:text-xs font-bold">+100</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-foreground whitespace-nowrap">Business Clients</p>
                </div>
              </div>
            </div>

            {/* Bottom Right - Successful Shipments Card */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 hidden sm:block">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-xl w-48 md:w-56">
                {/* Small Image */}
                <div className="w-full h-28 rounded-xl overflow-hidden mb-4">
                  <img src={heroImage} alt="Successful Shipments" className="w-full h-full object-cover" />
                </div>
                {/* Stats */}
                <div>
                  <p className="text-3xl font-bold text-foreground mb-1">10,000+</p>
                  <p className="text-sm text-muted-foreground">Successful Shipments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
