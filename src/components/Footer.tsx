import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '@/assets/mts-logo.svg';

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 flex items-center justify-center">
                <img src={logo} alt="Mishra Transport Services" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-bold text-background text-lg leading-tight">Mishra</p>
                <p className="text-xs text-background/80 tracking-wider uppercase" style={{ letterSpacing: '0.1em' }}>Transport Services</p>
              </div>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Your trusted partner for reliable and efficient goods transport services across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors leading-relaxed">Home</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors leading-relaxed">Our Services</a></li>
              <li><a href="#fleet" className="text-background/80 hover:text-primary transition-colors leading-relaxed">Our Fleet</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors leading-relaxed">About Us</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors leading-relaxed">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors leading-relaxed">Intercity Transport</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors leading-relaxed">Local Distribution</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors leading-relaxed">SME Logistics</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors leading-relaxed">Warehouse Services</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors leading-relaxed">Express Delivery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70">Sonia Vihar, Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-background/70">
                  <a href="tel:+919005446868" className="hover:text-primary transition-colors block">+91 9005446868</a>
                  <a href="tel:+918826768616" className="hover:text-primary transition-colors block">+91 8826768616</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:ashokmishra8099@gmail.com" className="text-background/70 hover:text-primary transition-colors">
                  ashokmishra8099@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70">24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © 2026 Mishra Transport Service. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Proprietor: <span className="text-primary">Ashok Mishra</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
