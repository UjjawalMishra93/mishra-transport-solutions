
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/mts-logo-new.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'About', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-4 group">
            <div className="relative">
              <img
                src={logo}
                alt="Mishra Transport Services"
                className="h-8 md:h-12 lg:h-14 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg md:text-2xl lg:text-3xl tracking-tight leading-none transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}
              >
                Mishra
              </span>
              <span
                className={`text-[0.65rem] md:text-xs lg:text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}
                style={{ letterSpacing: '0.15em' }}
              >
                Transport Services
              </span>
            </div>
          </a>
          {/* Desktop Navigation - Pill Design */}
          <div className={`hidden lg:flex items-center gap-1 p-1 rounded-full transition-all duration-500 ${isScrolled ? 'bg-gray-100/50 border border-gray-200/50' : 'bg-white/10 border border-white/10 backdrop-blur-sm'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm'
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919005446868"
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${isScrolled ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-gray-200'
                }`}
            >
              <Phone className="w-4 h-4" />
              <span>+91 90054 46868</span>
            </a>

            <a
              href="https://wa.me/919005446868"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${isScrolled
                ? 'bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/20'
                : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}>
              Get Chat
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full pt-28 px-6 pb-8">
          <div className="flex flex-col space-y-4 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-6">
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contact Support</span>
              <a href="tel:+919005446868" className="text-xl font-bold text-gray-900">+91 90054 46868</a>
              <a href="mailto:info@mishratransport.com" className="text-lg font-medium text-gray-600">info@mishratransport.com</a>
            </div>
            <a
              href="https://wa.me/919005446868"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-red-600 text-white py-4 rounded-xl text-lg font-bold text-center block"
            >
              Get Chat
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
