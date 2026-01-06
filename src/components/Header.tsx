import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/mts-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#founder' },
    { name: 'Service', href: '#services' },
    { name: 'Insight', href: '#fleet' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      {/* Logo - Top Left */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
        <a href="#" className="flex items-center gap-2 md:gap-4 group">
          <div className="relative">
            <img src={logo} alt="Mishra Transport Services" className="h-8 md:h-12 lg:h-14 w-auto object-contain drop-shadow-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-2xl lg:text-3xl text-white tracking-tight leading-none" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}>
              Mishra
            </span>
            <span className="text-[0.65rem] md:text-xs lg:text-sm text-white/90 font-medium tracking-wider uppercase" style={{ letterSpacing: '0.15em' }}>
              Transport Services
            </span>
          </div>
        </a>
      </div>

      {/* Navbar - Centered */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="hidden lg:flex items-center bg-white/95 backdrop-blur-sm rounded-full px-2 py-2 shadow-lg">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${index === 0
                ? 'bg-foreground text-white'
                : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Language Selector & Hamburger - Top Right */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50 flex items-center gap-3">
        {/* Language Selector */}
        <button className="hidden lg:flex items-center gap-1 px-4 py-2 bg-white rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors shadow-lg">
          EN
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 bg-foreground text-white rounded-full hover:bg-foreground/90 transition-colors shadow-lg"
        >
          {isMenuOpen ? <X className="w-6 h-6 md:w-5 md:h-5" /> : <Menu className="w-6 h-6 md:w-5 md:h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-8 z-50 lg:hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">
          <nav className="flex flex-col p-4 min-w-[200px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200 px-4 py-3 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
